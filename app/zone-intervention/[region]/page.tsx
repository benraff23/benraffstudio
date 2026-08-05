import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ClientEffects from '@/components/layout/client-effects'
import FloatingCta from '@/components/layout/floating-cta'
import Nav from '@/components/layout/nav'
import { regions, getRegionBySlug } from '@/lib/regions-data'

const SITE = 'https://benraffstudio.com'

export function generateStaticParams() {
  return regions.map((r) => ({ region: r.slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ region: string }> }
): Promise<Metadata> {
  const { region: slug } = await params
  const region = getRegionBySlug(slug)
  if (!region) return {}

  return {
    title: region.seoTitle,
    description: region.seoDescription,
    keywords: region.keywords,
    alternates: { canonical: `${SITE}/zone-intervention/${region.slug}` },
    openGraph: {
    images: ['/og.jpg'],
      title: region.seoTitle,
      description: region.seoDescription,
      url: `${SITE}/zone-intervention/${region.slug}`,
      siteName: 'BenRaff Studio',
      locale: 'fr_FR',
      type: 'article',
    },
  }
}

export default async function RegionPage(
  { params }: { params: Promise<{ region: string }> }
) {
  const { region: slug } = await params
  const region = getRegionBySlug(slug)
  if (!region) notFound()

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Zone d\'intervention', item: `${SITE}/zone-intervention` },
      { '@type': 'ListItem', position: 3, name: region.name, item: `${SITE}/zone-intervention/${region.slug}` },
    ],
  }

  return (
    <div className="min-h-screen bg-[#f7f5f1] text-[#1c1c1c]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ClientEffects />
      <FloatingCta />
      <Nav base="/" />

      <main className="max-w-[1080px] mx-auto px-[var(--gutter)] pt-40 pb-24">
        <nav aria-label="Fil d'Ariane" className="mb-8 text-xs text-[#9a9a9a] font-light">
          <Link href="/zone-intervention" className="hover:text-[#1c1c1c] transition-colors">
            Zone d&apos;intervention
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#6b6b6b]">{region.name}</span>
        </nav>

        <div className="max-w-[62ch] mb-16">
          <span className="label mb-5">{region.name}</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.06] mb-7">
            Rendu 3D d&apos;aménagement extérieur en {region.name}.
          </h1>
          <p className="text-lg font-light text-[#6b6b6b] leading-relaxed">{region.intro}</p>
        </div>

        {/* Spécificités */}
        <section className="mb-16 bg-[#1c1c1c] rounded-2xl p-9 sm:p-11">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#f7f5f1] mb-7">
            Ce que je traite spécifiquement ici.
          </h2>
          <ul className="flex flex-col gap-4" role="list">
            {region.specifics.map((item) => (
              <li key={item} className="flex items-start gap-3.5 text-[#f7f5f1]/70 font-light leading-relaxed">
                <span className="mt-2 w-1 h-1 rounded-full bg-[#f7f5f1]/50 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Corps */}
        <section className="max-w-[65ch] mb-16 flex flex-col gap-6">
          {region.body.map((p, i) => (
            <p key={i} className="text-[1.03rem] font-light text-[#6b6b6b] leading-relaxed">{p}</p>
          ))}
        </section>

        {/* Villes */}
        <section className="mb-16 pt-10 border-t border-[rgba(28,28,28,0.08)]">
          <h2 className="text-lg font-semibold mb-4">Principales villes couvertes</h2>
          <div className="flex flex-wrap gap-2.5">
            {region.cities.map((city) => (
              <span key={city}
                className="text-xs font-medium tracking-wide text-[#6b6b6b] bg-white
                           border border-[rgba(28,28,28,0.08)] px-4 py-2 rounded-full">
                {city}
              </span>
            ))}
          </div>
          <p className="mt-5 text-sm text-[#9a9a9a] font-light max-w-[60ch]">
            Cette liste est indicative : j&apos;interviens sur toute la région, quelle que soit
            la commune. Le workflow est entièrement à distance.
          </p>
        </section>

        {/* CTA */}
        <section className="pt-12 border-t border-[rgba(28,28,28,0.08)] text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 max-w-[26ch] mx-auto">
            Un projet à présenter en {region.name} ?
          </h2>
          <p className="text-[#6b6b6b] font-light mb-9 max-w-[48ch] mx-auto">
            Le Book de Présentation Client réunit plan 3D, maquette interactive, images signature
            et vidéo sur un mini-site prêt pour votre rendez-vous.
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
            <Link href="/zone-intervention" className="text-xs text-[#9a9a9a] hover:text-[#1c1c1c] transition-colors font-light">Toutes les régions</Link>
            <Link href="/#book" className="text-xs text-[#9a9a9a] hover:text-[#1c1c1c] transition-colors font-light">Le Book de Présentation Client</Link>
            <Link href="/mentions-legales" className="text-xs text-[#9a9a9a] hover:text-[#1c1c1c] transition-colors font-light">Mentions légales</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
