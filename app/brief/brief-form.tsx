'use client'
import { useRef, useState } from 'react'
import Link from 'next/link'

/* ─── Primitives ────────────────────────────────────────────────────────────── */

const inputCls = `w-full bg-white border border-[rgba(28,28,28,0.12)] rounded-lg px-4 py-3.5
  font-sans text-base text-[#1c1c1c] placeholder-[#aaaaaa] outline-none appearance-none
  focus:border-[rgba(28,28,28,0.4)] transition-colors duration-200`

const labelCls = 'text-xs font-medium tracking-widest uppercase text-[#9a9a9a]'

function Field({
  id, label, hint, required, children,
}: { id?: string; label: string; hint?: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label className={labelCls} htmlFor={id}>
        {label} {required && <span className="text-[#1c1c1c]">*</span>}
      </label>
      {hint && <p className="text-xs font-light text-[#9a9a9a] -mt-1">{hint}</p>}
      {children}
    </div>
  )
}

function Section({
  num, title, desc, children,
}: { num: string; title: string; desc?: string; children: React.ReactNode }) {
  return (
    <fieldset className="bg-white border border-[rgba(28,28,28,0.08)] rounded-2xl p-6 sm:p-9">
      <legend className="sr-only">{title}</legend>
      <div className="flex items-baseline gap-4 mb-2">
        <span className="text-sm font-medium text-[#9a9a9a] tabular-nums">{num}</span>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1c1c1c]">{title}</h2>
      </div>
      {desc && <p className="text-sm font-light text-[#6b6b6b] mb-7 sm:ml-9 max-w-[62ch]">{desc}</p>}
      <div className={`flex flex-col gap-6 sm:ml-9 ${desc ? '' : 'mt-7'}`}>{children}</div>
    </fieldset>
  )
}

/** Cases à cocher multiples : name partagé, lu via FormData.getAll(). */
function CheckGroup({ name, options, cols = 2 }: { name: string; options: string[]; cols?: number }) {
  return (
    <div className={`grid gap-2.5 ${cols === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}>
      {options.map((opt) => (
        <label
          key={opt}
          className="flex items-start gap-3 text-sm font-light text-[#1c1c1c] cursor-pointer
                     border border-[rgba(28,28,28,0.1)] rounded-lg px-4 py-3
                     hover:border-[rgba(28,28,28,0.3)] transition-colors has-[:checked]:border-[#1c1c1c]
                     has-[:checked]:bg-[rgba(28,28,28,0.03)]"
        >
          <input type="checkbox" name={name} value={opt}
            className="mt-0.5 w-4 h-4 flex-shrink-0 accent-[#1c1c1c] cursor-pointer" />
          {opt}
        </label>
      ))}
    </div>
  )
}

function RadioGroup({ name, options }: { name: string; options: string[] }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {options.map((opt) => (
        <label
          key={opt}
          className="flex items-center gap-2.5 text-sm font-light text-[#1c1c1c] cursor-pointer
                     border border-[rgba(28,28,28,0.1)] rounded-full px-4 py-2.5
                     hover:border-[rgba(28,28,28,0.3)] transition-colors has-[:checked]:border-[#1c1c1c]
                     has-[:checked]:bg-[rgba(28,28,28,0.03)]"
        >
          <input type="radio" name={name} value={opt}
            className="w-4 h-4 flex-shrink-0 accent-[#1c1c1c] cursor-pointer" />
          {opt}
        </label>
      ))}
    </div>
  )
}

/* ─── Options ───────────────────────────────────────────────────────────────── */

const TYPES = [
  'Jardin privé', 'Piscine & plage de bassin', 'Pool house & espace de vie extérieur',
  'Cour ou patio végétalisé', 'Terrasse ou toiture-terrasse', 'Projet mixte', 'Autre',
]
const PROGRAMME = [
  'Terrasse bois', 'Terrasse minérale', 'Bassin à débordement', 'Bassin miroir',
  'Piscine classique', 'Plage de bassin', 'Pool house', 'Cuisine extérieure',
  'Foyer ou brasero', 'Pergola', 'Cheminements et allées', 'Massifs et haies',
  'Clôtures et brise-vues', 'Éclairage extérieur', 'Mobilier extérieur', 'Stationnement',
]
const MOMENTS = ['Matin', 'Milieu de journée', 'Golden hour', 'Crépuscule', 'Nuit']
const SAISONS = ['Printemps', 'Été', 'Automne', 'Hiver']
const LIVRABLES = [
  'Plan de composition en 3D annoté', 'Maquette 3D interactive',
  'Images signature', 'Vidéo immersive', 'À définir ensemble',
]

/* ─── Formulaire ────────────────────────────────────────────────────────────── */

export default function BriefForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle')
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return
    const fd = new FormData(formRef.current)
    const one = (k: string) => String(fd.get(k) ?? '').trim()
    const many = (k: string) => fd.getAll(k).map(String)

    if (!one('name') || !one('email') || !one('address')) {
      setError('Nom, email et adresse du terrain sont nécessaires pour démarrer.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(one('email'))) {
      setError('Adresse email invalide.')
      return
    }
    setError(null)
    setStatus('sending')

    const payload = {
      name: one('name'), company: one('company'), email: one('email'),
      phone: one('phone'), website: one('website'),
      projectName: one('projectName'), projectType: one('projectType'),
      projectNature: one('projectNature'),
      address: one('address'), coords: one('coords'),
      surface: one('surface'), siteContext: one('siteContext'),
      programme: many('programme'), programmeAutre: one('programmeAutre'),
      plantationPlan: one('plantationPlan'), essences: one('essences'),
      maturite: one('maturite'),
      materialsListing: one('materialsListing'), materials: one('materials'),
      moments: many('moments'), saisons: many('saisons'), intention: one('intention'),
      livrables: many('livrables'), nbVues: one('nbVues'),
      rdvDate: one('rdvDate'), delai: one('delai'),
      documentsLink: one('documentsLink'), complement: one('complement'),
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('send failed')
      setStatus('success')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch {
      setStatus('idle')
      setError(
        'L’envoi a échoué. Réessayez, ou envoyez-moi directement un mail à contact@benraffstudio.com.'
      )
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-white border border-[rgba(28,28,28,0.08)] rounded-2xl p-10 sm:p-16 text-center">
        <div className="w-16 h-16 rounded-full bg-[rgba(28,28,28,0.06)] flex items-center justify-center mx-auto mb-7">
          <svg className="w-7 h-7 text-[#1c1c1c]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-[#1c1c1c] mb-3">Brief reçu.</h2>
        <p className="text-[#6b6b6b] font-light leading-relaxed max-w-[46ch] mx-auto mb-8">
          Je le lis en entier et je reviens vers vous personnellement sous 24h, avec mes
          questions s’il en reste et une proposition de planning.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-3 text-xs font-medium tracking-[0.1em] uppercase
                     text-[#1c1c1c] border border-[rgba(28,28,28,0.2)] px-7 py-3.5 rounded-full
                     hover:border-[rgba(28,28,28,0.5)] transition-colors duration-200"
        >
          Retour à l’accueil
        </Link>
      </div>
    )
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* 01 — Vous */}
      <Section num="01" title="Vous" desc="Pour savoir à qui je réponds, et par quel canal.">
        <div className="grid sm:grid-cols-2 gap-6">
          <Field id="name" label="Nom et prénom" required>
            <input className={inputCls} id="name" name="name" type="text" autoComplete="name" placeholder="Jean Dupont" />
          </Field>
          <Field id="company" label="Structure ou agence">
            <input className={inputCls} id="company" name="company" type="text" autoComplete="organization" placeholder="Atelier Dupont Paysage" />
          </Field>
          <Field id="email" label="Email" required>
            <input className={inputCls} id="email" name="email" type="email" autoComplete="email" placeholder="jean@atelier-dupont.fr" />
          </Field>
          <Field id="phone" label="Téléphone">
            <input className={inputCls} id="phone" name="phone" type="tel" autoComplete="tel" placeholder="06 12 34 56 78" />
          </Field>
          <div className="sm:col-span-2">
            <Field id="website" label="Site ou Instagram">
              <input className={inputCls} id="website" name="website" type="text" placeholder="atelier-dupont.fr" />
            </Field>
          </div>
        </div>
      </Section>

      {/* 02 — Le projet */}
      <Section num="02" title="Le projet" desc="Le cadre général : de quoi on parle, et où.">
        <Field id="projectName" label="Nom ou référence du projet">
          <input className={inputCls} id="projectName" name="projectName" type="text" placeholder="Villa Le Clos — M. et Mme Martin" />
        </Field>
        <Field label="Type de projet">
          <RadioGroup name="projectType" options={TYPES} />
        </Field>
        <Field label="Nature de l’intervention">
          <RadioGroup name="projectNature" options={['Création sur terrain nu', 'Rénovation d’un existant', 'Extension d’un aménagement existant']} />
        </Field>
        <Field
          id="address"
          label="Adresse précise du terrain"
          required
          hint="J’ouvre le site sur Google Earth avant de modéliser : relief réel, orientation, masques végétaux, vis-à-vis et bâti voisin. Une adresse exacte change la justesse du rendu."
        >
          <input className={inputCls} id="address" name="address" type="text"
            placeholder="12 rue des Ajoncs, 35800 Saint-Lunaire" />
        </Field>
        <div className="grid sm:grid-cols-2 gap-6">
          <Field
            id="coords"
            label="Coordonnées GPS"
            hint="Si l’adresse ne suffit pas (terrain nu, lieu-dit) : clic droit sur le point dans Google Maps, les coordonnées se copient."
          >
            <input className={inputCls} id="coords" name="coords" type="text" placeholder="48.6321, -2.1094" />
          </Field>
          <Field id="surface" label="Surface approximative">
            <input className={inputCls} id="surface" name="surface" type="text" placeholder="1 200 m² de terrain, 180 m² aménagés" />
          </Field>
        </div>
        <Field
          id="siteContext"
          label="Contexte du site"
          hint="Topographie, exposition, nature du sol, vis-à-vis, arbres ou murs existants à conserver."
        >
          <textarea className={`${inputCls} resize-none min-h-[120px]`} id="siteContext" name="siteContext"
            placeholder="Terrain en pente douce orientée sud-ouest, vis-à-vis sur la limite est, deux pins maritimes existants à conserver…" />
        </Field>
      </Section>

      {/* 03 — Le programme */}
      <Section num="03" title="Le programme à représenter" desc="Cochez ce qui figure au projet. C’est ce qui détermine le travail de modélisation.">
        <CheckGroup name="programme" options={PROGRAMME} />
        <Field id="programmeAutre" label="Autres éléments">
          <input className={inputCls} id="programmeAutre" name="programmeAutre" type="text" placeholder="Sauna extérieur, potager en carrés, bassin de rafraîchissement…" />
        </Field>
      </Section>

      {/* 04 — Palette végétale */}
      <Section num="04" title="Palette végétale" desc="Le point le plus déterminant pour la justesse de l’image.">
        <Field label="Plan de plantation">
          <RadioGroup name="plantationPlan" options={['Disponible', 'En cours', 'Pas encore établi']} />
        </Field>
        <Field id="essences" label="Essences structurantes"
          hint="Les sujets qui portent la composition : arbres, haies, masses de graminées, couvre-sol.">
          <textarea className={`${inputCls} resize-none min-h-[110px]`} id="essences" name="essences"
            placeholder="Haie mixte de charmes et viornes, trois oliviers en cépée, massifs de miscanthus et stipa, couvre-sol de lierre…" />
        </Field>
        <Field label="Maturité à représenter">
          <RadioGroup name="maturite" options={['À la livraison du chantier', 'À 3-5 ans', 'À maturité']} />
        </Field>
      </Section>

      {/* 05 — Matériaux & mobilier */}
      <Section num="05" title="Matériaux et mobilier" desc="Références précises = rendu crédible. Approximations = rendu générique.">
        <Field label="Listing matériaux et mobilier">
          <RadioGroup name="materialsListing" options={['Disponible', 'Partiel', 'Pas encore établi']} />
        </Field>
        <Field id="materials" label="Références principales"
          hint="Revêtements, margelles, bardage, garde-corps, mobilier, luminaires : type, désignation, référence, finition.">
          <textarea className={`${inputCls} resize-none min-h-[130px]`} id="materials" name="materials"
            placeholder="Terrasse en ipé lames 145 mm, margelles en pierre de Bourgogne adoucie, bardage douglas claire-voie, mobilier Tribù Natal…" />
        </Field>
      </Section>

      {/* 06 — Ambiances */}
      <Section num="06" title="Ambiances souhaitées" desc="L’heure et la saison décident de ce que votre client va ressentir.">
        <Field label="Moment de la journée">
          <CheckGroup name="moments" options={MOMENTS} cols={3} />
        </Field>
        <Field label="Saison">
          <CheckGroup name="saisons" options={SAISONS} cols={2} />
        </Field>
        <Field id="intention" label="Ce que vous voulez que votre client ressente"
          hint="C’est le champ le plus utile du brief. Décrivez l’intention, pas la technique.">
          <textarea className={`${inputCls} resize-none min-h-[130px]`} id="intention" name="intention"
            placeholder="Qu’il comprenne que la terrasse devient la pièce de vie de l’été, et que le bassin n’écrase pas le jardin mais le prolonge…" />
        </Field>
      </Section>

      {/* 07 — Livrables */}
      <Section num="07" title="Livrables souhaités" desc="Si vous hésitez, cochez « À définir ensemble » : on cadrera à l’appel.">
        <CheckGroup name="livrables" options={LIVRABLES} />
        <Field id="nbVues" label="Nombre de vues envisagé">
          <input className={inputCls} id="nbVues" name="nbVues" type="text" placeholder="3 à 5 vues" />
        </Field>
      </Section>

      {/* 08 — Échéance */}
      <Section num="08" title="Échéance" desc="La date qui compte vraiment, c’est celle de votre rendez-vous client.">
        <div className="grid sm:grid-cols-2 gap-6">
          <Field id="rdvDate" label="Date du rendez-vous de présentation">
            <input className={inputCls} id="rdvDate" name="rdvDate" type="date" />
          </Field>
          <Field id="delai" label="Autres contraintes de délai">
            <input className={inputCls} id="delai" name="delai" type="text" placeholder="Dépôt du dossier fin septembre" />
          </Field>
        </div>
      </Section>

      {/* 09 — Documents */}
      <Section num="09" title="Vos documents" desc="Relevé, plan de composition, plan de plantation, listing matériaux, photos du terrain avant travaux.">
        <Field id="documentsLink" label="Lien de partage"
          hint="WeTransfer, Google Drive, Dropbox, SwissTransfer… Vous pouvez aussi me les envoyer par mail après l’envoi de ce brief.">
          <input className={inputCls} id="documentsLink" name="documentsLink" type="text" placeholder="https://we.tl/…" />
        </Field>
        <Field id="complement" label="Quelque chose à ajouter ?">
          <textarea className={`${inputCls} resize-none min-h-[110px]`} id="complement" name="complement"
            placeholder="Une contrainte, une référence visuelle que vous aimez, un point de vigilance…" />
        </Field>
      </Section>

      {/* RGPD + envoi */}
      <div className="bg-white border border-[rgba(28,28,28,0.08)] rounded-2xl p-6 sm:p-9">
        <div className="flex items-start gap-3 mb-6">
          <input type="checkbox" id="rgpd" name="rgpd" required
            className="mt-1 w-4 h-4 flex-shrink-0 accent-[#1c1c1c] cursor-pointer" />
          <label htmlFor="rgpd" className="text-xs text-[#9a9a9a] leading-relaxed cursor-pointer font-light">
            J&apos;accepte que BenRaff Studio traite mes données personnelles afin de répondre à ma demande.{' '}
            <Link href="/politique-de-confidentialite" target="_blank" className="text-[#1c1c1c] underline underline-offset-2 hover:text-[#6b6b6b]">
              Politique de confidentialité
            </Link>
            {' · '}
            <Link href="/mentions-legales" target="_blank" className="text-[#1c1c1c] underline underline-offset-2 hover:text-[#6b6b6b]">
              Mentions légales
            </Link>
          </label>
        </div>

        {error && (
          <p role="alert" className="mb-5 text-sm text-[#b3261e] bg-[rgba(179,38,30,0.06)] rounded-lg px-4 py-3">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full flex items-center justify-center gap-3 text-sm font-medium
            tracking-[0.1em] uppercase text-[#f7f5f1] bg-[#1c1c1c] py-5 rounded-lg
            hover:bg-[#333333] hover:-translate-y-0.5 active:translate-y-0
            transition-all duration-200
            disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0"
        >
          {status === 'sending' ? 'Envoi en cours…' : 'Envoyer mon brief'}
          {status !== 'sending' && (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
        <p className="text-center text-xs text-[#9a9a9a] mt-5 leading-relaxed">
          Seuls le nom, l&apos;email et l&apos;adresse du terrain sont obligatoires. Le reste peut se
          compléter à l&apos;appel — mais plus le brief est précis, plus le devis l&apos;est aussi.
        </p>
      </div>
    </form>
  )
}
