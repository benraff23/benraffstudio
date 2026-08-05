import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

/** Échappe le contenu utilisateur avant injection dans le HTML de l'email. */
function esc(v: unknown): string {
  return String(v ?? '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;')
}

type Entry = [string, unknown]

/** Une paire n'est rendue que si elle est renseignée : l'email reste lisible. */
function rows(entries: Entry[]): string {
  const filled = entries.filter(([, v]) =>
    Array.isArray(v) ? v.length > 0 : String(v ?? '').trim() !== ''
  )
  if (!filled.length) return ''
  return filled
    .map(([label, v]) => {
      const value = Array.isArray(v) ? v.join(' · ') : String(v)
      return `<tr>
        <td style="padding:7px 12px 7px 0;color:#6b6b6b;vertical-align:top;width:190px;font-size:13px;">${esc(label)}</td>
        <td style="padding:7px 0;color:#1c1c1c;white-space:pre-wrap;font-size:14px;">${esc(value)}</td>
      </tr>`
    })
    .join('')
}

function block(title: string, entries: Entry[]): string {
  const body = rows(entries)
  if (!body) return ''
  return `
    <div style="margin-top:22px;padding:18px 20px;background:#ffffff;border-radius:8px;border-left:3px solid #1c1c1c;">
      <p style="margin:0 0 10px;color:#9a9a9a;font-size:11px;text-transform:uppercase;letter-spacing:.12em;">${esc(title)}</p>
      <table style="width:100%;border-collapse:collapse;">${body}</table>
    </div>`
}

export async function POST(req: NextRequest) {
  try {
    // Valider avant de toucher au service : une requête malformée doit
    // répondre 422 même si la clé d'envoi est absente.
    const d = await req.json()
    const { name, email, address } = d

    if (!name || !email) {
      return NextResponse.json({ error: 'Validation failed' }, { status: 422 })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 422 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('[Contact API] RESEND_API_KEY manquante')
      return NextResponse.json({ error: 'Service indisponible' }, { status: 500 })
    }
    const resend = new Resend(apiKey)

    const html = `
      <div style="font-family:-apple-system,Segoe UI,sans-serif;max-width:680px;margin:0 auto;padding:28px;background:#f7f5f1;">
        <h2 style="margin:0 0 4px;color:#1c1c1c;font-size:20px;">Nouveau brief · ${esc(name)}</h2>
        <p style="margin:0;color:#9a9a9a;font-size:13px;">
          ${esc(d.projectName || 'Projet sans nom')}${address ? ' — ' + esc(address) : ''}
        </p>
        ${address ? `<p style="margin:10px 0 0;font-size:13px;">
          <a href="https://www.google.com/maps/search/?api=1&amp;query=${encodeURIComponent(d.coords || address)}"
             style="color:#1c1c1c;">Ouvrir le terrain dans Google Maps &rarr;</a>
        </p>` : ''}

        ${block('Contact', [
          ['Nom', name], ['Structure', d.company], ['Email', email],
          ['Téléphone', d.phone], ['Site / Instagram', d.website],
        ])}

        ${block('Le projet', [
          ['Nom du projet', d.projectName], ['Type', d.projectType],
          ['Nature', d.projectNature], ['Adresse du terrain', d.address],
          ['Coordonnées GPS', d.coords],
          ['Surface', d.surface], ['Contexte du site', d.siteContext],
        ])}

        ${block('Programme à représenter', [
          ['Éléments', d.programme], ['Autres', d.programmeAutre],
        ])}

        ${block('Palette végétale', [
          ['Plan de plantation', d.plantationPlan], ['Essences structurantes', d.essences],
          ['Maturité à représenter', d.maturite],
        ])}

        ${block('Matériaux et mobilier', [
          ['Listing', d.materialsListing], ['Références', d.materials],
        ])}

        ${block('Ambiances', [
          ['Moment de la journée', d.moments], ['Saison', d.saisons],
          ['Intention', d.intention],
        ])}

        ${block('Livrables', [
          ['Souhaités', d.livrables], ['Nombre de vues', d.nbVues],
        ])}

        ${block('Échéance', [
          ['Rendez-vous client', d.rdvDate], ['Autres contraintes', d.delai],
        ])}

        ${block('Documents et compléments', [
          ['Lien de partage', d.documentsLink], ['Complément', d.complement],
        ])}

        <p style="margin:24px 0 0;font-size:12px;color:#9a9a9a;">
          Répondre directement à cet email pour contacter ${esc(name)}.
        </p>
      </div>`

    await resend.emails.send({
      from: 'BenRaff Studio <contact@benraffstudio.com>',
      to: 'contact@benraffstudio.com',
      replyTo: email,
      subject: `Nouveau brief · ${name}${address ? ` · ${address}` : ''}`,
      html,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[Contact API]', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
