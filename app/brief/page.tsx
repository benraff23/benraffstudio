import type { Metadata } from 'next'
import Link from 'next/link'
import ClientEffects from '@/components/layout/client-effects'
import Nav from '@/components/layout/nav'
import BriefForm from './brief-form'

const SITE = 'https://benraffstudio.com'

export const metadata: Metadata = {
  title: 'Brief interactif · Lancer un projet · BenRaff Studio',
  description:
    'Décrivez votre projet d\'aménagement extérieur : site, programme, palette végétale, matériaux, ambiances et livrables. Réponse personnelle sous 24h.',
  alternates: { canonical: `${SITE}/brief` },
  openGraph: {
    images: ['/og.jpg'],
    title: 'Brief interactif · BenRaff Studio',
    description:
      'Tout ce dont j\'ai besoin pour démarrer votre Book de Présentation Client, en un seul formulaire.',
    url: `${SITE}/brief`,
    siteName: 'BenRaff Studio',
    locale: 'fr_FR',
    type: 'website',
  },
}

const repere = [
  ['Ce que ça vous prend', '10 à 15 minutes, à partir de documents que vous avez déjà.'],
  ['Ce que ça m’évite', 'Trois allers-retours par mail avant même de commencer.'],
  ['Ce que vous recevez', 'Une réponse personnelle sous 24h, avec un planning et un chiffrage ferme.'],
]

export default function BriefPage() {
  return (
    <div className="min-h-screen bg-[#f7f5f1] text-[#1c1c1c]">
      <ClientEffects />
      <Nav base="/" />

      <main className="max-w-[900px] mx-auto px-[var(--gutter)] pt-40 pb-24">
        {/* Fil d'Ariane */}
        <nav aria-label="Fil d'Ariane" className="mb-8 text-xs text-[#9a9a9a] font-light">
          <Link href="/" className="hover:text-[#1c1c1c] transition-colors">Accueil</Link>
          <span className="mx-2">/</span>
          <span className="text-[#6b6b6b]">Brief interactif</span>
        </nav>

        <header className="mb-12">
          <span className="label mb-5">Brief interactif</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.06] mb-6 max-w-[20ch]">
            Tout ce dont j&apos;ai besoin pour démarrer.
          </h1>
          <p className="text-lg font-light text-[#6b6b6b] leading-relaxed max-w-[62ch]">
            Ce formulaire reprend, dans l&apos;ordre, les questions que je vous poserais de toute
            façon. Le remplir sérieusement une fois vaut mieux qu&apos;un échange de mails étalé
            sur une semaine — et ça me permet de vous donner un délai et un chiffrage fermes
            dès ma réponse.
          </p>
        </header>

        {/* Repères */}
        <div className="grid sm:grid-cols-3 gap-4 mb-14">
          {repere.map(([titre, texte]) => (
            <div key={titre} className="bg-white border border-[rgba(28,28,28,0.08)] rounded-2xl p-6">
              <p className="text-[10px] font-medium tracking-[0.15em] uppercase text-[#9a9a9a] mb-2">
                {titre}
              </p>
              <p className="text-sm font-light text-[#6b6b6b] leading-relaxed">{texte}</p>
            </div>
          ))}
        </div>

        <BriefForm />

        {/* Sortie de secours */}
        <div className="mt-14 pt-10 border-t border-[rgba(28,28,28,0.08)] text-center">
          <p className="text-[#6b6b6b] font-light leading-relaxed max-w-[52ch] mx-auto mb-6">
            Première collaboration, ou vous préférez en parler de vive voix avant de remplir
            quoi que ce soit ? C&apos;est aussi très bien.
          </p>
          <a
            href="https://calendly.com/contact-benraffstudio/nouvelle-reunion"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-xs font-medium tracking-[0.1em] uppercase
                       text-[#1c1c1c] border border-[rgba(28,28,28,0.2)] px-7 py-4 rounded-full
                       hover:border-[rgba(28,28,28,0.5)] transition-colors duration-200"
          >
            Réserver un appel
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </main>

      <footer className="border-t border-[rgba(28,28,28,0.07)] px-[var(--gutter)] py-10 bg-white">
        <div className="max-w-[900px] mx-auto flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="hover:opacity-60 transition-opacity">
            <img src="/logo-noir.webp" alt="BenRaff Studio" className="h-7 w-auto" />
          </Link>
          <div className="flex items-center gap-5">
            <a href="mailto:contact@benraffstudio.com" className="text-xs text-[#9a9a9a] hover:text-[#1c1c1c] transition-colors font-light">contact@benraffstudio.com</a>
            <Link href="/mentions-legales" className="text-xs text-[#9a9a9a] hover:text-[#1c1c1c] transition-colors font-light">Mentions légales</Link>
            <Link href="/politique-de-confidentialite" className="text-xs text-[#9a9a9a] hover:text-[#1c1c1c] transition-colors font-light">Confidentialité</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
