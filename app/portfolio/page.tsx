import type { Metadata } from 'next'
import Link from 'next/link'
import ClientEffects from '@/components/layout/client-effects'
import FloatingCta from '@/components/layout/floating-cta'
import Nav from '@/components/layout/nav'
import PortfolioGrid from './portfolio-grid'
import { portfolioProjects } from '@/lib/portfolio-data'

export const metadata: Metadata = {
  title: 'Portfolio · Rendus 3D architecturaux · BenRaff Studio',
  description: 'Études de cas en visualisation architecturale : aménagements extérieurs, intérieurs, équipements publics, paysagisme. Rendus 4K photoréalistes par BenRaff Studio, Rennes.',
  alternates: {
    canonical: 'https://www.benraffstudio.com/portfolio',
  },
  openGraph: {
    title: 'Portfolio · BenRaff Studio',
    description: 'Études de cas en visualisation architecturale — rendus 3D photoréalistes pour architectes, promoteurs et paysagistes.',
    url: 'https://www.benraffstudio.com/portfolio',
    siteName: 'BenRaff Studio',
    images: [
      {
        url: '/projets/pool-house/Vue 2_final.png',
        width: 1920,
        height: 1080,
        alt: 'Portfolio rendus 3D architecturaux BenRaff Studio',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio · BenRaff Studio',
    description: 'Études de cas en visualisation architecturale — rendus 3D photoréalistes.',
    images: ['/projets/pool-house/Vue 2_final.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Portfolio · BenRaff Studio',
  description: 'Études de cas en visualisation architecturale 3D : extérieurs, intérieurs, équipements publics.',
  url: 'https://www.benraffstudio.com/portfolio',
  publisher: {
    '@type': 'LocalBusiness',
    name: 'BenRaff Studio',
    url: 'https://www.benraffstudio.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Rennes',
      addressCountry: 'FR',
    },
    sameAs: ['https://www.benraffstudio.com'],
  },
  hasPart: portfolioProjects.map((p) => ({
    '@type': 'CreativeWork',
    name: p.title,
    description: p.desc,
    dateCreated: p.year,
    image: `https://www.benraffstudio.com${p.image}`,
    genre: p.category,
  })),
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ClientEffects />
      <FloatingCta />
      <Nav base="/" />

      <main className="max-w-[1400px] mx-auto px-6 pt-40 pb-20">

        {/* Header */}
        <div className="mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.15em] uppercase text-[#c8e84e] mb-5">
            <span className="block w-4 h-px bg-[#c8e84e]" />
            Études de cas
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05] text-white mb-6 max-w-[18ch]">
            Chaque projet est une intention.
          </h1>
          <p className="text-lg font-light text-[#9a9a9a] leading-relaxed max-w-[52ch]">
            Architectes, promoteurs, paysagistes, maîtres d&apos;ouvrage — voici comment je traduis
            un projet en image. Cliquez sur un projet pour voir le détail complet.
          </p>
        </div>

        {/* Grille projets — image + titre, popup au clic */}
        <PortfolioGrid projects={portfolioProjects} />

        {/* CTA bas de page */}
        <div className="mt-24 pt-16 border-t border-white/[0.06] text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Votre projet mérite ce niveau de soin.
          </h2>
          <p className="text-[#9a9a9a] text-lg font-light mb-8 max-w-[44ch] mx-auto">
            Premier rendu livré en 72h. Retravail sans frais si le résultat ne correspond pas au brief.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 text-sm font-semibold tracking-wider uppercase
                       text-[#1e1e1e] bg-[#c8e84e] px-10 py-5 rounded-full
                       hover:bg-[#d4f05a] hover:-translate-y-0.5
                       hover:shadow-[0_8px_40px_rgba(200,232,78,0.4)]
                       transition-all duration-200"
          >
            Démarrer un projet
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </main>

      <footer className="border-t border-white/[0.06] px-6 py-10 mt-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-6 mb-6">
            <Link href="/" className="hover:opacity-70 transition-opacity">
              <img src="/logo-blanc.webp" alt="BenRaff Studio" className="h-7 w-auto" />
            </Link>
            <a href="mailto:contact@benraffstudio.com" className="text-sm text-[#7a7a7a] hover:text-white transition-colors">
              contact@benraffstudio.com
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/[0.05]">
            <p className="text-xs text-[#7a7a7a]">
              &copy; {new Date().getFullYear()} BenRaff Studio · Perspectiviste indépendant · Rennes
            </p>
            <nav className="flex items-center gap-5" aria-label="Liens légaux">
              <Link href="/mentions-legales" className="text-xs text-[#7a7a7a] hover:text-[#9a9a9a] transition-colors">
                Mentions légales
              </Link>
              <Link href="/politique-de-confidentialite" className="text-xs text-[#7a7a7a] hover:text-[#9a9a9a] transition-colors">
                Confidentialité
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
