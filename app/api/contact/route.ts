import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const { name, email, profile, service, budget, project } = data

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
      subject: `Nouveau projet · ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#f9f9f9;border-radius:8px;">
          <h2 style="margin:0 0 24px;color:#111;">Nouvelle demande de projet</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#666;width:140px;">Nom</td><td style="padding:8px 0;font-weight:600;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#666;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#c8e84e;">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#666;">Profil</td><td style="padding:8px 0;">${profile || 'Non renseigné'}</td></tr>
            <tr><td style="padding:8px 0;color:#666;">Prestation</td><td style="padding:8px 0;">${service || 'Non renseigné'}</td></tr>
            <tr><td style="padding:8px 0;color:#666;">Budget</td><td style="padding:8px 0;">${budget || 'Non renseigné'}</td></tr>
          </table>
          <div style="margin-top:24px;padding:16px;background:#fff;border-radius:6px;border-left:3px solid #c8e84e;">
            <p style="margin:0 0 8px;color:#666;font-size:12px;text-transform:uppercase;letter-spacing:.1em;">Description du projet</p>
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
