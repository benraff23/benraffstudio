import type { Metadata } from 'next'
import Link from 'next/link'
import ClientEffects from '@/components/layout/client-effects'
import FloatingCta from '@/components/layout/floating-cta'
import Nav from '@/components/layout/nav'
import ProjetsGrid from './projets-grid'
import { portfolioProjects } from '@/lib/portfolio-data'

export const metadata: Metadata = {
  title: 'Projets · Séries cinématographiques · BenRaff Studio',
  description: 'Des projets, pas des rendus. Séries cinématographiques en visualisation architecturale : aménagements extérieurs, intérieurs, équipements publics, paysagisme. BenRaff Studio, Rennes.',
  alternates: { canonical: 'https://benraffstudio.com/projets' },
  openGraph: {
    title: 'Projets · BenRaff Studio',
    description: "Chaque série raconte l'histoire d'un espace avant qu'il existe.",
    url: 'https://benraffstudio.com/projets',
    siteName: 'BenRaff Studio',
    images: [{ url: '/projets/pool-house/Vue 2_final.png', width: 1920, height: 1080 }],
    locale: 'fr_FR', type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Projets · BenRaff Studio',
  description: 'Séries cinématographiques en visualisation architecturale.',
  url: 'https://benraffstudio.com/projets',
  publisher: { '@type': 'LocalBusiness', name: 'BenRaff Studio', url: 'https://benraffstudio.com' },
  hasPart: portfolioProjects.map((p) => ({
    '@type': 'CreativeWork', name: p.title, description: p.intention,
    dateCreated: p.year, url: `https://benraffstudio.com/projets/${p.slug}`,
    image: `https://benraffstudio.com${p.image}`, genre: p.category,
  })),
}

const FooterLight = () => (
  <footer className="border-t border-[rgba(28,28,28,0.07)] px-[var(--gutter)] py-10 mt-8 bg-white">
    <div className="max-w-[1400px] mx-auto">
      <div className="flex flex-wrap items-center justify-between gap-6 mb-6">
        <Link href="/" className="hover:opacity-60 transition-opacity">
          <img src="/logo-noir.webp" alt="BenRaff Studio" className="h-7 w-auto" />
        </Link>
        <a href="mailto:contact@benraffstudio.com" className="text-sm text-[#9a9a9a] hover:text-[#1c1c1c] transition-colors font-light">
          contact@benraffstudio.com
        </a>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[rgba(28,28,28,0.06)]">
        <p className="text-xs text-[#9a9a9a] font-light">&copy; {new Date().getFullYear()} BenRaff Studio · Perspectiviste indépendant · Rennes</p>
        <nav className="flex items-center gap-5" aria-label="Liens légaux">
          <Link href="/mentions-legales" className="text-xs text-[#9a9a9a] hover:text-[#1c1c1c] transition-colors font-light">Mentions légales</Link>
          <Link href="/politique-de-confidentialite" className="text-xs text-[#9a9a9a] hover:text-[#1c1c1c] transition-colors font-light">Confidentialité</Link>
        </nav>
      </div>
    </div>
  </footer>
)

export default function ProjetsPage() {
  return (
    <div className="min-h-screen bg-[#f7f5f1] text-[#1c1c1c]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ClientEffects />
      <FloatingCta />
      <Nav base="/" />

      <main className="max-w-[1400px] mx-auto px-[var(--gutter)] pt-40 pb-20">
        <div className="mb-16">
          <span className="label mb-5">Portfolio</span>
          <h1 className="mt-4 text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05] text-[#1c1c1c] mb-6 max-w-[18ch]">
            Ce qui n&apos;existe pas encore, rendu réel.
          </h1>
          <p className="text-lg font-light text-[#6b6b6b] leading-relaxed max-w-[52ch]">
            Chaque série raconte l&apos;histoire d&apos;un espace avant qu&apos;il existe.
            Cliquez sur un projet pour découvrir la série complète et l&apos;intention derrière chaque image.
          </p>
        </div>

        <ProjetsGrid projects={portfolioProjects} />

        <div className="mt-24 pt-16 border-t border-[rgba(28,28,28,0.08)] text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1c1c1c] mb-4">
            Votre projet mérite d&apos;être ressenti.
          </h2>
          <p className="text-[#6b6b6b] text-lg font-light mb-8 max-w-[46ch] mx-auto">
            Partagez-moi votre projet. Je vous réponds personnellement sous 24h.
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
