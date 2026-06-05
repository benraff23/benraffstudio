"use client"
import { useState, useRef } from 'react'
import Link from 'next/link'

const WA_URL =
  'https://wa.me/33624517641?text=Bonjour%20Benjamin%2C%20je%20souhaite%20discuter%20d%27un%20projet%20de%20visualisation%20architecturale.'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  const showError = (field: HTMLElement, msg: string) => {
    field.style.borderColor = 'rgba(255,80,80,0.5)'
    let err = field.parentElement?.querySelector('.form__error')
    if (!err) {
      err = document.createElement('span')
      err.className = 'form__error'
      ;(err as HTMLElement).style.cssText = 'font-size:0.75rem;color:#ff5252;margin-top:4px;display:block;'
      field.parentElement?.appendChild(err)
    }
    err.textContent = msg
  }

  const clearErrors = () => {
    formRef.current?.querySelectorAll('.form__error').forEach(e => e.remove())
    formRef.current?.querySelectorAll('input,textarea').forEach(el => {
      ;(el as HTMLElement).style.borderColor = ''
    })
  }

  const validate = (): boolean => {
    if (!formRef.current) return false
    clearErrors()
    let valid = true
    const get = (id: string) => formRef.current!.querySelector(`#${id}`) as HTMLInputElement

    const name = get('name'); const email = get('email')
    const projectType = get('projectType'); const project = get('project')

    if (!name.value.trim()) { showError(name, 'Votre nom est requis.'); valid = false }
    if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      showError(email, 'Adresse email invalide.'); valid = false
    }
    if (!projectType.value.trim()) { showError(projectType, 'Indiquez le type de projet.'); valid = false }
    if (!project.value.trim() || project.value.trim().length < 20) {
      showError(project, 'Décrivez votre projet (min. 20 caractères).'); valid = false
    }
    return valid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('sending')

    const get = (id: string) =>
      (formRef.current!.querySelector(`#${id}`) as HTMLInputElement).value
    const data = {
      name: get('name'), email: get('email'),
      projectType: get('projectType'), project: get('project'),
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) { setStatus('success'); return }
      throw new Error('Server error')
    } catch {
      // Fallback to mailto
      const subject = encodeURIComponent(`[BenRaff Studio] Nouveau brief · ${data.name}`)
      const body = encodeURIComponent(
        `Nom : ${data.name}\nEmail : ${data.email}\nType de projet : ${data.projectType}\n\nProjet :\n${data.project}`
      )
      window.location.href = `mailto:contact@benraffstudio.com?subject=${subject}&body=${body}`
      setStatus('idle')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 rounded-full bg-[rgba(200,232,78,0.12)] flex items-center justify-center mx-auto mb-6">
          <svg className="w-7 h-7 text-[#c8e84e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Brief envoyé.</h3>
        <p className="text-[#9a9a9a] text-base">Je reviens vers vous personnellement sous 24h. Merci pour votre confiance.</p>
      </div>
    )
  }

  const inputCls = `w-full bg-[#1e1e1e] border border-white/[0.14] rounded-lg px-5 py-4
    font-sans text-base text-white placeholder-[#888888] outline-none appearance-none
    focus:border-[rgba(200,232,78,0.6)] focus:bg-[#222222] transition-colors duration-200`

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate>
      <h3 className="text-xl font-semibold text-white mb-8">Décrivez votre projet</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold tracking-widest uppercase text-[#b8b8b8]" htmlFor="name">Votre nom</label>
          <input className={inputCls} type="text" id="name" name="name" placeholder="Jean Dupont" autoComplete="name" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold tracking-widest uppercase text-[#b8b8b8]" htmlFor="email">Votre email</label>
          <input className={inputCls} type="email" id="email" name="email" placeholder="jean@studio.fr" autoComplete="email" />
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label className="text-xs font-semibold tracking-widest uppercase text-[#b8b8b8]" htmlFor="projectType">Type de projet</label>
          <input className={inputCls} type="text" id="projectType" name="projectType" placeholder="Promotion immobilière, villa, aménagement extérieur, concours…" />
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label className="text-xs font-semibold tracking-widest uppercase text-[#b8b8b8]" htmlFor="project">Décrivez votre projet et ce que vous voulez déclencher chez votre client</label>
          <textarea
            className={`${inputCls} resize-none min-h-[140px]`}
            id="project" name="project"
            placeholder="Le projet, vos clients, l'émotion ou la décision que vous voulez provoquer, vos échéances…"
          />
        </div>
      </div>
      {/* RGPD consent */}
      <div className="flex items-start gap-3 mt-5">
        <input
          type="checkbox"
          id="rgpd"
          name="rgpd"
          required
          className="mt-1 w-4 h-4 flex-shrink-0 accent-[#c8e84e] cursor-pointer"
        />
        <label htmlFor="rgpd" className="text-xs text-[#9a9a9a] leading-relaxed cursor-pointer">
          J&apos;accepte que BenRaff Studio traite mes données personnelles afin de répondre à ma demande.{' '}
          <Link href="/politique-de-confidentialite" target="_blank" className="text-[#c8e84e] hover:underline">
            Politique de confidentialité
          </Link>
          {' · '}
          <Link href="/mentions-legales" target="_blank" className="text-[#c8e84e] hover:underline">
            Mentions légales
          </Link>
        </label>
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full mt-3 flex items-center justify-center gap-3 text-sm font-semibold
          tracking-wider uppercase text-[#080808] bg-[#c8e84e] py-5 rounded-lg
          hover:bg-[#d4f05a] hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(200,232,78,0.3)]
          active:translate-y-0 transition-all duration-200
          disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
      >
        {status === 'sending' ? 'Envoi en cours…' : 'Envoyer mon brief'}
        {status !== 'sending' && (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>
      <p className="text-center text-xs text-[#9a9a9a] mt-5 leading-relaxed">
        Ou directement sur{' '}
        <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="text-[#c8e84e] hover:underline">
          WhatsApp
        </a>
        .
      </p>
    </form>
  )
}
