import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('[Contact API] RESEND_API_KEY manquante')
      return NextResponse.json({ error: 'Service indisponible' }, { status: 500 })
    }
    const resend = new Resend(apiKey)

    const data = await req.json()
    const { name, email, projectType, project } = data

    // Validation
    if (!name || !email || !project || project.length < 20) {
      return NextResponse.json({ error: 'Validation failed' }, { status: 422 })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 422 })
    }

    await resend.emails.send({
      from: 'BenRaff Studio <contact@benraffstudio.com>',
      to: 'contact@benraffstudio.com',
      replyTo: email,
      subject: `Nouveau brief · ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#f9f9f9;border-radius:8px;">
          <h2 style="margin:0 0 24px;color:#111;">Nouveau brief projet</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#666;width:140px;">Nom</td><td style="padding:8px 0;font-weight:600;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#666;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#c8e84e;">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#666;">Type de projet</td><td style="padding:8px 0;">${projectType || 'Non renseigné'}</td></tr>
          </table>
          <div style="margin-top:24px;padding:16px;background:#fff;border-radius:6px;border-left:3px solid #c8e84e;">
            <p style="margin:0 0 8px;color:#666;font-size:12px;text-transform:uppercase;letter-spacing:.1em;">Le projet & l'intention</p>
            <p style="margin:0;white-space:pre-wrap;color:#111;">${project}</p>
          </div>
          <p style="margin:24px 0 0;font-size:12px;color:#999;">Répondre directement à cet email pour contacter ${name}.</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[Contact API]', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
