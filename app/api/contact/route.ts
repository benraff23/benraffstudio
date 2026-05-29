import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const { name, email, profile, service, budget, project } = data

    // Basic validation
    if (!name || !email || !project || project.length < 20) {
      return NextResponse.json({ error: 'Validation failed' }, { status: 422 })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 422 })
    }

    // ──────────────────────────────────────────────────────────────────────
    // Option A: Use Nodemailer / SMTP on your VPS
    // Install: npm i nodemailer @types/nodemailer
    // Then uncomment and configure:
    //
    // const nodemailer = await import('nodemailer')
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: Number(process.env.SMTP_PORT) || 587,
    //   auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    // })
    // await transporter.sendMail({
    //   from: `"BenRaff Studio" <noreply@benraffstudio.com>`,
    //   to: 'contact@benraffstudio.com',
    //   replyTo: email,
    //   subject: `[BenRaff Studio] Nouveau projet · ${name}`,
    //   text: `Nom: ${name}\nEmail: ${email}\nProfil: ${profile}\nPrestation: ${service}\nBudget: ${budget}\n\n${project}`,
    // })
    //
    // Option B: Use Resend (recommended, free tier 100 emails/day)
    // Install: npm i resend
    // Then uncomment:
    //
    // const { Resend } = await import('resend')
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'BenRaff Studio <noreply@benraffstudio.com>',
    //   to: 'contact@benraffstudio.com',
    //   replyTo: email,
    //   subject: `[BenRaff Studio] Nouveau projet · ${name}`,
    //   text: `Nom: ${name}\nEmail: ${email}\nProfil: ${profile}\nPrestation: ${service}\nBudget: ${budget}\n\n${project}`,
    // })
    // ──────────────────────────────────────────────────────────────────────

    // Temporary: log to console (remove in prod)
    console.log('[Contact Form]', { name, email, profile, service, budget, project })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[Contact API]', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
