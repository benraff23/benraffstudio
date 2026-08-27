import type { Metadata } from 'next'
import Link from 'next/link'
import ClientEffects from '@/components/layout/client-effects'
import FloatingCta from '@/components/layout/floating-cta'
import Nav from '@/components/layout/nav'
import { regions } from '@/lib/regions-data'

const SITE = 'https://benraffstudio.com'

export const metadata: Metadata = {
  title: 'Zone d\'intervention · Rendu 3D partout en France',
  description:
    'Basé à Rennes, je travaille avec des paysagistes et piscinistes dans toute la France : brief en ligne, échanges en visio, livraison sur mini-site.',
  alternates: { canonical: `${SITE}/zone-intervention` },
  openGraph: {
    images: ['/og.jpg'],
    title: 'Zone d\'intervention · BenRaff Studio',
    description: 'Rendu 3D d\'aménagement extérieur dans toute la France, 100 % à distance.',
    url: `${SITE}/zone-intervention`,
    siteName: 'BenRaff Studio',
    locale: 'fr_FR',
    type: 'website',
  },
}

const steps: [string, string][] = [
  ['Brief en ligne', 'Vous transmettez relevé, plan de plantation, listing mobilier et photos du terrain via un formulaire guidé. Tout ce dont j\'ai besoin est déjà dans votre dossier de conception.'],
  ['Échanges en visio', 'Un point de cadrage au lancement, un autre à la validation de la direction. Trente minutes suffisent quand le brief est complet.'],
  ['Allers-retours cadrés', 'Vous validez les cadrages, puis une version de travail avant le rendu final. Vos retours se font par message ou en visio, regroupés à chaque étape.'],
  ['Livraison en ligne', 'Vos livrables sont réunis sur un mini-site dédié, ouvrable en direct pendant votre rendez-vous client et téléchargeables en haute définition.'],
]

export default function ZoneInterventionPage() {
  return (
    <div className="min-h-screen bg-[#f7f5f1] text-[#1c1c1c]">
      <ClientEffects />
      <FloatingCta />
      <Nav base="/" />

      <main className="max-w-[1080px] mx-auto px-[var(--gutter)] pt-40 pb-24">
        <div className="max-w-[62ch] mb-16">
          <span className="label mb-5">Zone d&apos;intervention</span>
          <h1 className="mt-4 text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05] mb-7">
            Basé à Rennes. Au travail dans toute la France.
          </h1>
          <p className="text-lg font-light text-[#6b6b6b] leading-relaxed mb-5">
            Je travaille avec des paysagistes concepteurs, des piscinistes et des concepteurs
            de pool houses partout en France, en 100 % à distance. La distance ne change rien
            à la qualité du rendu, et rien au suivi — précisément parce que je suis seul sur
            votre projet du premier brief à la livraison.
          </p>
          <p className="text-lg font-light text-[#6b6b6b] leading-relaxed">
            Vous ne passez jamais par un chef de projet, un commercial ou un studio de production.
            Vous parlez directement à la personne qui fabrique vos images.
          </p>
        </div>

        {/* Workflow */}
        <section className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-10">
            Comment ça se passe concrètement.
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {steps.map(([title, desc], i) => (
              <div key={title} className="bg-white border border-[rgba(28,28,28,0.08)] rounded-2xl p-7">
                <span className="text-xs font-medium tracking-[0.15em] uppercase text-[#9a9a9a]">
                  0{i + 1}
                </span>
                <h3 className="mt-3 mb-2 text-lg font-semibold">{title}</h3>
                <p className="text-[#6b6b6b] font-light leading-relaxed text-[0.95rem]">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Régions */}
        <section className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
            Ce qui change d&apos;une région à l&apos;autre.
          </h2>
          <p className="text-[#6b6b6b] font-light leading-relaxed max-w-[62ch] mb-10">
            Un jardin breton et un jardin varois n&apos;ont ni la même palette végétale,
            ni la même lumière. Une image qui ignore ça se voit immédiatement, et votre client
            le sent avant même de savoir l&apos;expliquer.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {regions.map((region) => (
              <Link
                key={region.slug}
                href={`/zone-intervention/${region.slug}`}
                className="group bg-white border border-[rgba(28,28,28,0.08)] rounded-2xl p-7
                           hover:border-[rgba(28,28,28,0.18)] hover:-translate-y-1
                           transition-all duration-300"
              >
                <h3 className="text-lg font-semibold mb-2">{region.name}</h3>
                <p className="text-sm text-[#6b6b6b] font-light leading-relaxed mb-5 line-clamp-3">
                  {region.specifics[0]}
                </p>
                <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.1em] uppercase
                                 group-hover:gap-4 transition-all duration-300">
                  Découvrir
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="pt-14 border-t border-[rgba(28,28,28,0.08)] text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Votre région n&apos;est pas listée ?
          </h2>
          <p className="text-[#6b6b6b] text-lg font-light mb-9 max-w-[46ch] mx-auto">
            Ça ne change rien. Le workflow est le même partout en France.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 text-sm font-medium tracking-[0.1em] uppercase
                       text-[#f7f5f1] bg-[#1c1c1c] px-10 py-5 rounded-full
                       hover:bg-[#333333] hover:-translate-y-0.5 transition-all duration-200"
          >
            Parler de votre projet
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </section>
      </main>

      <footer className="border-t border-[rgba(28,28,28,0.07)] px-[var(--gutter)] py-10 bg-white">
        <div className="max-w-[1080px] mx-auto flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="hover:opacity-60 transition-opacity">
            <img src="/logo-noir.webp" alt="BenRaff Studio" className="h-7 w-auto" />
          </Link>
          <div className="flex items-center gap-5">
            <Link href="/#book" className="text-xs text-[#9a9a9a] hover:text-[#1c1c1c] transition-colors font-light">Le Book de Présentation Client</Link>
            <Link href="/projets" className="text-xs text-[#9a9a9a] hover:text-[#1c1c1c] transition-colors font-light">Projets</Link>
            <Link href="/mentions-legales" className="text-xs text-[#9a9a9a] hover:text-[#1c1c1c] transition-colors font-light">Mentions légales</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
