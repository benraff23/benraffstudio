import type { Metadata } from 'next'
import Link from 'next/link'
import ClientEffects from '@/components/layout/client-effects'
import FloatingCta from '@/components/layout/floating-cta'
import Nav from '@/components/layout/nav'
import ProjetsGrid from './projets-grid'
import { portfolioProjects, nicheProjects, autresSecteursProjects } from '@/lib/portfolio-data'

export const metadata: Metadata = {
  title: 'Projets réalisés · Rendu 3D d\'aménagement extérieur',
  description: 'Jardins, cheminements végétalisés, bassins à débordement et pool houses visualisés en 3D avant travaux. BenRaff Studio, Rennes.',
  alternates: { canonical: 'https://benraffstudio.com/projets' },
  openGraph: {
    title: 'Projets réalisés · BenRaff Studio',
    description: "Des plans de composition transformés en lieux que l'on a envie d'habiter.",
    url: 'https://benraffstudio.com/projets',
    siteName: 'BenRaff Studio',
    images: [{ url: '/projets/pool-house/vue-2_final.webp', width: 1920, height: 1080 }],
    locale: 'fr_FR', type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Projets réalisés · BenRaff Studio',
  description: 'Projets de visualisation 3D d\'aménagement extérieur et d\'architecture.',
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
        <p className="text-xs text-[#9a9a9a] font-light">&copy; {new Date().getFullYear()} BenRaff Studio · Visualisation 3D d&apos;aménagement extérieur · Rennes</p>
        <nav className="flex items-center gap-5" aria-label="Liens légaux">
          <Link href="/zone-intervention" className="text-xs text-[#9a9a9a] hover:text-[#1c1c1c] transition-colors font-light">Zone d&apos;intervention</Link>
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
          <span className="label mb-5">Projets réalisés</span>
          <h1 className="mt-4 text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05] text-[#1c1c1c] mb-6 max-w-[20ch]">
            Des plans de composition transformés en lieux que l&apos;on a envie d&apos;habiter.
          </h1>
          <p className="text-lg font-light text-[#6b6b6b] leading-relaxed max-w-[54ch]">
            Une sélection de projets réalisés avec des concepteurs paysagistes, des piscinistes
            et des concepteurs de pool houses — du cheminement végétalisé au bassin à débordement.
            Cliquez sur un projet pour découvrir toutes les vues et l&apos;intention derrière chacune.
          </p>
        </div>

        <ProjetsGrid projects={nicheProjects} />

        {/* Autres secteurs — repliés par défaut, hors du récit principal.
            <details> : pas de JS, fonctionne avant hydratation. */}
        <details className="group mt-20 border-t border-[rgba(28,28,28,0.08)] pt-10">
          <summary className="cursor-pointer list-none flex items-center justify-between gap-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1c1c1c]">
                Autres secteurs d&apos;intervention
              </h2>
              <p className="mt-2 text-sm font-light text-[#6b6b6b] max-w-[58ch]">
                Projets d&apos;architecture et d&apos;intérieur réalisés avant que je concentre
                mon activité sur l&apos;aménagement extérieur.
              </p>
            </div>
            <span
              aria-hidden="true"
              className="flex-shrink-0 w-10 h-10 rounded-full border border-[rgba(28,28,28,0.14)]
                         flex items-center justify-center text-xl text-[#6b6b6b]
                         group-open:rotate-45 transition-transform duration-200"
            >
              +
            </span>
          </summary>

          <div className="mt-10">
            <ProjetsGrid projects={autresSecteursProjects} />
          </div>
        </details>

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
