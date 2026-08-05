import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ClientEffects from '@/components/layout/client-effects'
import FloatingCta from '@/components/layout/floating-cta'
import Nav from '@/components/layout/nav'
import ProjectGallery from '../project-gallery'
import { portfolioProjects, getProjectBySlug } from '@/lib/portfolio-data'

const SITE = 'https://benraffstudio.com'

export function generateStaticParams() {
  return portfolioProjects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}
  const url = `${SITE}/projets/${project.slug}`
  return {
    title: `${project.title} · ${project.category}`,
    description: project.intention,
    alternates: { canonical: url },
    openGraph: {
      title: `${project.title} · BenRaff Studio`,
      description: project.intention,
      url, siteName: 'BenRaff Studio', type: 'article', locale: 'fr_FR',
      images: [{ url: project.image, width: 1920, height: 1080, alt: project.title }],
    },
  }
}

export default async function ProjetPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const galleryImages = project.images.filter((img) => !img.endsWith('.mp4'))
  const url = `${SITE}/projets/${project.slug}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CreativeWork',
        name: project.title, description: project.fullDesc,
        dateCreated: project.year, genre: project.category, url,
        image: galleryImages.map((img) => `${SITE}${img}`),
        creator: { '@type': 'Person', name: 'Benjamin Raffegeau', url: `${SITE}/benjamin-raffegeau` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE },
          { '@type': 'ListItem', position: 2, name: 'Projets', item: `${SITE}/projets` },
          { '@type': 'ListItem', position: 3, name: project.title, item: url },
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

      <main className="max-w-[1100px] mx-auto px-[var(--gutter)] pt-40 pb-20">
        {/* Fil d'Ariane */}
        <nav aria-label="Fil d'Ariane" className="mb-10 flex items-center gap-2 text-xs text-[#9a9a9a] font-light">
          <Link href="/" className="hover:text-[#1c1c1c] transition-colors">Accueil</Link>
          <span>/</span>
          <Link href="/projets" className="hover:text-[#1c1c1c] transition-colors">Projets</Link>
          <span>/</span>
          <span className="text-[#6b6b6b]">{project.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-14">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#9a9a9a]">
              {project.category}
            </span>
            <span className="text-[10px] text-[#9a9a9a]">· {project.year}</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05] text-[#1c1c1c] mb-6 max-w-[18ch]">
            {project.title}
          </h1>
          <p className="text-xl sm:text-2xl font-light text-[#6b6b6b] leading-relaxed max-w-[56ch]">
            {project.intention}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag}
                className="text-[9px] font-medium tracking-widest uppercase
                           bg-[rgba(28,28,28,0.06)] text-[#6b6b6b] px-2.5 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </header>

        <ProjectGallery images={galleryImages} title={project.title} />

        {project.video && (
          <div className="mt-6 sm:mt-10 rounded-xl overflow-hidden bg-[#1c1c1c]">
            <video src={project.video} controls playsInline className="w-full h-auto" />
          </div>
        )}

        {/* Contexte */}
        <section className="mt-16 grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1c1c1c]">
            Le contexte &amp; les choix de composition.
          </h2>
          <div className="flex flex-col gap-5 text-base text-[#6b6b6b] font-light leading-relaxed">
            <p>{project.fullDesc}</p>
            <p>{project.context}</p>
          </div>
        </section>

        {/* Brief & Livraison */}
        <section className="mt-10 grid sm:grid-cols-2 gap-4">
          <div className="bg-white border border-[rgba(28,28,28,0.07)] rounded-2xl p-6">
            <p className="text-[10px] font-medium tracking-[0.15em] uppercase text-[#9a9a9a] mb-2">Brief &amp; Objectif</p>
            <p className="text-sm text-[#6b6b6b] leading-relaxed font-light">{project.brief}</p>
          </div>
          <div className="bg-[#1c1c1c] rounded-2xl p-6">
            <p className="text-[10px] font-medium tracking-[0.15em] uppercase text-[rgba(247,245,241,0.4)] mb-2">Livraison</p>
            <p className="text-sm text-[#f7f5f1]/70 leading-relaxed font-light">{project.livraison}</p>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-20 pt-16 border-t border-[rgba(28,28,28,0.08)] text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1c1c1c] mb-4">
            Un Book de Présentation Client pour votre projet ?
          </h2>
          <p className="text-[#6b6b6b] text-lg font-light mb-8 max-w-[44ch] mx-auto">
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

      <footer className="border-t border-[rgba(28,28,28,0.07)] px-[var(--gutter)] py-10 bg-white">
        <div className="max-w-[1100px] mx-auto flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="hover:opacity-60 transition-opacity">
            <img src="/logo-noir.webp" alt="BenRaff Studio" className="h-7 w-auto" />
          </Link>
          <div className="flex items-center gap-5">
            <Link href="/projets" className="text-xs text-[#9a9a9a] hover:text-[#1c1c1c] transition-colors font-light">Tous les projets</Link>
            <Link href="/mentions-legales" className="text-xs text-[#9a9a9a] hover:text-[#1c1c1c] transition-colors font-light">Mentions légales</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
