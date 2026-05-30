"use client"
import { useState, useRef } from 'react'
import Link from 'next/link'

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
    formRef.current?.querySelectorAll('input,select,textarea').forEach(el => {
      ;(el as HTMLElement).style.borderColor = ''
    })
  }

  const validate = (): boolean => {
    if (!formRef.current) return false
    clearErrors()
    let valid = true
    const get = (id: string) => formRef.current!.querySelector(`#${id}`) as HTMLInputElement

    const name = get('name'); const email = get('email')
    const profile = get('profile'); const service = get('service')
    const budget = get('budget'); const project = get('project')

    if (!name.value.trim()) { showError(name, 'Votre nom est requis.'); valid = false }
    if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      showError(email, 'Adresse email invalide.'); valid = false
    }
    if (!profile.value) { showError(profile, 'Veuillez sélectionner votre profil.'); valid = false }
    if (!service.value) { showError(service, 'Veuillez choisir une prestation.'); valid = false }
    if (!budget.value) { showError(budget, 'Veuillez indiquer votre budget.'); valid = false }
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
      name: get('name'), email: get('email'), profile: get('profile'),
      service: get('service'), budget: get('budget'), project: get('project'),
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
      const subject = encodeURIComponent(`[BenRaff Studio] Demande de projet · ${data.name}`)
      const body = encodeURIComponent(
        `Nom : ${data.name}\nEmail : ${data.email}\nProfil : ${data.profile}\nPrestation : ${data.service}\nBudget : ${data.budget}\n\nProjet :\n${data.project}`
      )
      window.location.href = `mailto:contact@benraffstudio.com?subject=${subject}&body=${body}`
      setStatus('idle')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 rounded-full bg-[rgba(200,232,78,0.12)] flex items-center justify-center mx-auto mb-6">
          <svg className="w-7 h-7 text-[#6b8a00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-[#0f0f0f] mb-2">Demande envoyée.</h3>
        <p className="text-[#6a6a6a] text-base">Je reviens vers vous sous 24h. Merci pour votre confiance.</p>
      </div>
    )
  }

  const inputCls = `w-full bg-[#ece9e3] border border-black/[0.15] rounded-lg px-5 py-4
    font-sans text-base text-[#0f0f0f] placeholder-[#888888] outline-none appearance-none
    focus:border-[rgba(200,232,78,0.6)] focus:bg-[#e5e2dc] transition-colors duration-200`

  const selectStyle: React.CSSProperties = { colorScheme: 'light' }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate>
      <h3 className="text-xl font-semibold text-[#0f0f0f] mb-8">Décrivez votre projet</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold tracking-widest uppercase text-[#4a4a4a]" htmlFor="name">Nom / Société</label>
          <input className={inputCls} type="text" id="name" name="name" placeholder="Jean Dupont" autoComplete="name" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold tracking-widest uppercase text-[#4a4a4a]" htmlFor="email">Email</label>
          <input className={inputCls} type="email" id="email" name="email" placeholder="jean@studio.fr" autoComplete="email" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold tracking-widest uppercase text-[#4a4a4a]" htmlFor="profile">Votre profil</label>
          <select className={`${inputCls} cursor-pointer`} style={selectStyle} id="profile" name="profile" defaultValue="">
            <option value="" disabled>Sélectionnez</option>
            <option value="architecte">Architecte</option>
            <option value="promoteur">Promoteur immobilier</option>
            <option value="paysagiste">Paysagiste / Aménageur</option>
            <option value="moa">Maître d&apos;ouvrage</option>
            <option value="autre">Autre</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold tracking-widest uppercase text-[#4a4a4a]" htmlFor="service">Type de prestation</label>
          <select className={`${inputCls} cursor-pointer`} style={selectStyle} id="service" name="service" defaultValue="">
            <option value="" disabled>Sélectionnez</option>
            <option value="rendu-fixe">Rendus fixes</option>
            <option value="animation">Animation vidéo</option>
            <option value="visite-virtuelle">Visite virtuelle</option>
            <option value="pack">Pack complet</option>
            <option value="autre">À définir</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label className="text-xs font-semibold tracking-widest uppercase text-[#4a4a4a]" htmlFor="budget">Budget envisagé</label>
          <select className={`${inputCls} cursor-pointer`} style={selectStyle} id="budget" name="budget" defaultValue="">
            <option value="" disabled>Fourchette budgétaire</option>
            <option value="500-1500">500 € – 1 500 €</option>
            <option value="1500-3000">1 500 € – 3 000 €</option>
            <option value="3000-6000">3 000 € – 6 000 €</option>
            <option value="6000+">6 000 € et plus</option>
            <option value="a-definir">À définir selon les besoins</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label className="text-xs font-semibold tracking-widest uppercase text-[#4a4a4a]" htmlFor="project">Décrivez votre projet</label>
          <textarea
            className={`${inputCls} resize-none min-h-[120px]`}
            id="project" name="project"
            placeholder="Type de projet, localisation, objectif (vendre, présenter, valider), délai souhaité…"
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
        <label htmlFor="rgpd" className="text-xs text-[#6a6a6a] leading-relaxed cursor-pointer">
          J&apos;accepte que BenRaff Studio traite mes données personnelles afin de répondre à ma demande.{' '}
          <Link href="/politique-de-confidentialite" target="_blank" className="text-[#6b8a00] hover:underline">
            Politique de confidentialité
          </Link>
          {' · '}
          <Link href="/mentions-legales" target="_blank" className="text-[#6b8a00] hover:underline">
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
        {status === 'sending' ? 'Envoi en cours…' : 'Envoyer ma demande'}
        {status !== 'sending' && (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>
      <p className="text-center text-xs text-[#6a6a6a] mt-5 leading-relaxed">
        Réponse garantie sous 24h, je réponds personnellement à chaque demande sérieuse.
      </p>
    </form>
  )
}
