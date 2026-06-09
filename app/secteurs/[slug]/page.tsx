import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ClientEffects from '@/components/layout/client-effects'
import FloatingCta from '@/components/layout/floating-cta'
import Nav from '@/components/layout/nav'
import { secteurs, getSecteurBySlug } from '@/lib/secteurs-data'
import { portfolioProjects } from '@/lib/portfolio-data'

const SITE = 'https://benraffstudio.com'

export function generateStaticParams() {
  return secteurs.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const secteur = getSecteurBySlug(slug)
  if (!secteur) return {}
  const url = `${SITE}/secteurs/${secteur.slug}`
  return {
    title: `${secteur.seoTitle} · BenRaff Studio`,
    description: secteur.seoDescription,
    keywords: secteur.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: secteur.seoTitle,
      description: secteur.seoDescription,
      url, siteName: 'BenRaff Studio', type: 'website', locale: 'fr_FR',
    },
  }
}

export default async function SecteurPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const secteur = getSecteurBySlug(slug)
  if (!secteur) notFound()

  const url = `${SITE}/secteurs/${secteur.slug}`
  const relatedProjects = portfolioProjects.filter((p) =>
    secteur.projectSlugs.includes(p.slug)
  )

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: secteur.seoTitle,
        description: secteur.seoDescription,
        url,
        provider: {
          '@type': 'LocalBusiness',
          name: 'BenRaff Studio',
          url: SITE,
          address: { '@type': 'PostalAddress', addressLocality: 'Rennes', addressCountry: 'FR' },
        },
        areaServed: { '@type': 'Country', name: 'France' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE },
          { '@type': 'ListItem', position: 2, name: 'Secteurs', item: `${SITE}/secteurs` },
          { '@type': 'ListItem', position: 3, name: secteur.title, item: url },
        ],
      },
    ],
  }

  return (
    <div className="min-h-screen bg-[#f7f5f1] text-[#1c1c1c]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ClientEffects />
      <FloatingCta />
      <Nav base="/" />

      <main>
        {/* ── Hero section ── */}
        <section className="max-w-[1400px] mx-auto px-[var(--gutter)] pt-40 pb-20">
          {/* Fil d'Ariane */}
          <nav aria-label="Fil d'Ariane" className="mb-12 flex items-center gap-2 text-xs text-[#9a9a9a] font-light">
            <Link href="/" className="hover:text-[#1c1c1c] transition-colors">Accueil</Link>
            <span>/</span>
            <Link href="/secteurs" className="hover:text-[#1c1c1c] transition-colors">Secteurs</Link>
            <span>/</span>
            <span className="text-[#6b6b6b]">{secteur.title}</span>
          </nav>

          <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-start">
            <div>
              <span className="label mb-5">Secteur</span>
              <h1 className="mt-4 text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05] text-[#1c1c1c] mb-8">
                {secteur.title}
              </h1>
              <p className="text-xl font-light text-[#6b6b6b] leading-relaxed mb-10">
                {secteur.intro}
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-3 text-sm font-medium tracking-[0.1em] uppercase
                           text-[#f7f5f1] bg-[#1c1c1c] px-8 py-4 rounded-full
                           hover:bg-[#333333] hover:-translate-y-0.5 transition-all duration-200"
              >
                Démarrer mon projet
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            {/* Enjeux spécifiques */}
            <div className="bg-white rounded-2xl border border-[rgba(28,28,28,0.07)] p-8">
              <h2 className="text-sm font-medium tracking-[0.15em] uppercase text-[#9a9a9a] mb-6">
                Vos enjeux
              </h2>
              <ul className="flex flex-col gap-4">
                {secteur.challenges.map((c) => (
                  <li key={c} className="flex items-start gap-4">
                    <span className="w-1 h-1 rounded-full bg-[#1c1c1c] mt-2.5 flex-shrink-0" />
                    <span className="text-base font-light text-[#4a4a4a] leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Corps ── */}
        <section className="bg-white py-20">
          <div className="max-w-[1400px] mx-auto px-[var(--gutter)]">
            <div className="grid lg:grid-cols-[2fr_1fr] gap-16 items-start">
              <div className="flex flex-col gap-6">
                {secteur.body.map((para, i) => (
                  <p key={i} className="text-lg font-light text-[#4a4a4a] leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
              {/* Ce que j'apporte */}
              <div className="bg-[#1c1c1c] rounded-2xl p-8 sticky top-28">
                <h3 className="text-sm font-medium tracking-[0.15em] uppercase text-[rgba(247,245,241,0.4)] mb-6">
                  Ce que j&apos;apporte
                </h3>
                <ul className="flex flex-col gap-5">
                  {secteur.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-[#f7f5f1] mt-2.5 flex-shrink-0 opacity-60" />
                      <span className="text-sm font-light text-[#f7f5f1]/70 leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Projets liés ── */}
        {relatedProjects.length > 0 && (
          <section className="py-20 bg-[#f7f5f1]">
            <div className="max-w-[1400px] mx-auto px-[var(--gutter)]">
              <div className="mb-10">
                <span className="label">Projets</span>
                <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-[#1c1c1c]">
                  Réalisations dans ce secteur.
                </h2>
              </div>
              <div className={`grid gap-6 ${relatedProjects.length === 1 ? 'sm:grid-cols-1 max-w-lg' : 'sm:grid-cols-2'}`}>
                {relatedProjects.map((project) => (
                  <Link
                    key={project.id}
                    href={`/projets/${project.slug}`}
                    className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1c1c1c] rounded-xl"
                  >
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-[#ede9e2]">
                      <img
                        src={project.image}
                        alt={`${project.title} — ${project.category}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[rgba(28,28,28,0.2)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="bg-[rgba(247,245,241,0.9)] text-[#1c1c1c] text-xs font-medium tracking-wider uppercase px-4 py-2 rounded-full">
                          Voir le projet
                        </span>
                      </div>
                    </div>
                    <h3 className="text-base font-semibold text-[#1c1c1c] group-hover:text-[#6b6b6b] transition-colors mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm font-light text-[#9a9a9a]">{project.intention}</p>
                  </Link>
                ))}
              </div>
              <div className="mt-10">
                <Link href="/projets"
                  className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.1em] uppercase
                             text-[#1c1c1c] border border-[rgba(28,28,28,0.2)] px-6 py-3 rounded-full
                             hover:border-[rgba(28,28,28,0.5)] hover:-translate-y-0.5 transition-all duration-200">
                  Voir tous les projets →
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* ── CTA final ── */}
        <section className="bg-[#1c1c1c] py-20">
          <div className="max-w-[760px] mx-auto px-[var(--gutter)] text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f7f5f1] mb-5">
              Un projet dans ce secteur ?
            </h2>
            <p className="text-lg font-light text-[#f7f5f1]/55 mb-10 leading-relaxed">
              Partagez-moi votre projet. Je vous réponds personnellement sous 24h.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 text-sm font-medium tracking-[0.1em] uppercase
                         text-[#1c1c1c] bg-[#f7f5f1] px-10 py-5 rounded-full
                         hover:bg-white hover:-translate-y-0.5 transition-all duration-200"
            >
              Démarrer mon projet
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-[rgba(28,28,28,0.07)] px-[var(--gutter)] py-10 bg-white">
        <div className="max-w-[1400px] mx-auto flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="hover:opacity-60 transition-opacity">
            <img src="/logo-noir.webp" alt="BenRaff Studio" className="h-7 w-auto" />
          </Link>
          <div className="flex items-center gap-5">
            <Link href="/secteurs" className="text-xs text-[#9a9a9a] hover:text-[#1c1c1c] transition-colors font-light">Tous les secteurs</Link>
            <Link href="/projets" className="text-xs text-[#9a9a9a] hover:text-[#1c1c1c] transition-colors font-light">Projets</Link>
            <Link href="/mentions-legales" className="text-xs text-[#9a9a9a] hover:text-[#1c1c1c] transition-colors font-light">Mentions légales</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
