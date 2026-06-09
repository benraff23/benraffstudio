import type { Metadata } from 'next'
import Link from 'next/link'
import ClientEffects from '@/components/layout/client-effects'
import FloatingCta from '@/components/layout/floating-cta'
import Nav from '@/components/layout/nav'
import { secteurs } from '@/lib/secteurs-data'

const SITE = 'https://benraffstudio.com'

export const metadata: Metadata = {
  title: 'Secteurs · Visualisation architecturale par marché · BenRaff Studio',
  description:
    'Séries cinématographiques spécialisées par marché : loisirs & plein air, paysagisme, architecture intérieure, promotion immobilière, architecture publique. BenRaff Studio, Rennes.',
  alternates: { canonical: `${SITE}/secteurs` },
  openGraph: {
    title: 'Secteurs · BenRaff Studio',
    description: 'Visualisation architecturale spécialisée par marché.',
    url: `${SITE}/secteurs`, siteName: 'BenRaff Studio', locale: 'fr_FR', type: 'website',
  },
}

const FooterLight = () => (
  <footer className="border-t border-[rgba(28,28,28,0.07)] px-[var(--gutter)] py-10 bg-white">
    <div className="max-w-[1400px] mx-auto flex flex-wrap items-center justify-between gap-4">
      <Link href="/" className="hover:opacity-60 transition-opacity">
        <img src="/logo-noir.webp" alt="BenRaff Studio" className="h-7 w-auto" />
      </Link>
      <div className="flex items-center gap-5">
        <Link href="/projets" className="text-xs text-[#9a9a9a] hover:text-[#1c1c1c] transition-colors font-light">Projets</Link>
        <Link href="/mentions-legales" className="text-xs text-[#9a9a9a] hover:text-[#1c1c1c] transition-colors font-light">Mentions légales</Link>
      </div>
    </div>
  </footer>
)

export default function SecteursPage() {
  return (
    <div className="min-h-screen bg-[#f7f5f1] text-[#1c1c1c]">
      <ClientEffects />
      <FloatingCta />
      <Nav base="/" />

      <main className="max-w-[1400px] mx-auto px-[var(--gutter)] pt-40 pb-20">
        {/* Header */}
        <div className="mb-16 max-w-[54ch]">
          <span className="label mb-5">Secteurs</span>
          <h1 className="mt-4 text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05] text-[#1c1c1c] mb-6">
            Une approche sur-mesure pour chaque marché.
          </h1>
          <p className="text-lg font-light text-[#6b6b6b] leading-relaxed">
            Chaque secteur a ses enjeux, ses clients, ses codes visuels.
            Je construis des séries cinématographiques adaptées à votre marché
            et à l&apos;objectif que vous voulez atteindre.
          </p>
        </div>

        {/* Grille secteurs */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {secteurs.map((secteur) => (
            <Link
              key={secteur.slug}
              href={`/secteurs/${secteur.slug}`}
              className="group flex flex-col rounded-2xl border border-[rgba(28,28,28,0.08)] bg-white
                         hover:border-[rgba(28,28,28,0.18)] hover:-translate-y-1
                         transition-all duration-300 overflow-hidden
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1c1c1c]"
            >
              <div className="p-8 flex flex-col flex-1">
                <span className="label mb-6 group-hover:opacity-70 transition-opacity">
                  {secteur.title}
                </span>
                <p className="text-base font-light text-[#6b6b6b] leading-relaxed flex-1 mb-8">
                  {secteur.description}
                </p>
                <div className="flex items-center gap-2 text-xs font-medium tracking-[0.1em] uppercase text-[#1c1c1c]
                                group-hover:gap-4 transition-all duration-300">
                  Découvrir
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 pt-16 border-t border-[rgba(28,28,28,0.08)] text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1c1c1c] mb-4">
            Votre secteur n&apos;est pas listé ?
          </h2>
          <p className="text-[#6b6b6b] text-lg font-light mb-8 max-w-[44ch] mx-auto">
            Partagez-moi votre projet. J&apos;interviens sur tout type d&apos;opération architecturale.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 text-sm font-medium tracking-[0.1em] uppercase
                       text-[#f7f5f1] bg-[#1c1c1c] px-10 py-5 rounded-full
                       hover:bg-[#333333] hover:-translate-y-0.5 transition-all duration-200"
          >
            Démarrer mon projet
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </main>

      <FooterLight />
    </div>
  )
}
