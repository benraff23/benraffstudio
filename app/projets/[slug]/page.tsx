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
    title: `${project.title} · ${project.category} · BenRaff Studio`,
    description: project.intention,
    alternates: { canonical: url },
    openGraph: {
      title: `${project.title} · BenRaff Studio`,
      description: project.intention,
      url,
      siteName: 'BenRaff Studio',
      type: 'article',
      locale: 'fr_FR',
      images: [{ url: project.image, width: 1920, height: 1080, alt: project.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} · BenRaff Studio`,
      description: project.intention,
      images: [project.image],
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
        name: project.title,
        description: project.fullDesc,
        dateCreated: project.year,
        genre: project.category,
        url,
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
    <div className="min-h-screen bg-[#1e1e1e] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <ClientEffects />
      <FloatingCta />
      <Nav base="/" />

      <main className="max-w-[1100px] mx-auto px-[var(--gutter)] pt-40 pb-20">
        {/* Fil d'Ariane */}
        <nav aria-label="Fil d'Ariane" className="mb-10 flex items-center gap-2 text-xs text-[#7a7a7a]">
          <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
          <span>/</span>
          <Link href="/projets" className="hover:text-white transition-colors">Projets</Link>
          <span>/</span>
          <span className="text-[#9a9a9a]">{project.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#c8e84e]">
              {project.category}
            </span>
            <span className="text-[11px] text-white/40">· {project.year}</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05] text-white mb-6 max-w-[18ch]">
            {project.title}
          </h1>
          <p className="text-xl sm:text-2xl font-light text-[#b8b8b8] leading-relaxed max-w-[56ch]">
            {project.intention}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="text-[10px] font-medium tracking-wider uppercase
                                         bg-white/[0.06] text-white/70 px-2.5 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Série complète en pleine largeur */}
        <ProjectGallery images={galleryImages} title={project.title} />

        {/* Vidéo si disponible */}
        {project.video && (
          <div className="mt-6 sm:mt-10 rounded-2xl sm:rounded-3xl overflow-hidden bg-black">
            <video src={project.video} controls playsInline className="w-full h-auto" />
          </div>
        )}

        {/* Contexte & choix artistiques */}
        <section className="mt-16 grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Le contexte &amp; les choix artistiques.
          </h2>
          <div className="flex flex-col gap-5 text-base text-[#9a9a9a] font-light leading-relaxed">
            <p>{project.fullDesc}</p>
            <p>{project.context}</p>
          </div>
        </section>

        {/* Brief & Livraison */}
        <section className="mt-12 grid sm:grid-cols-2 gap-4">
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
            <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#5a5a5a] mb-2">
              Brief &amp; Objectif
            </p>
            <p className="text-sm text-[#9a9a9a] leading-relaxed">{project.brief}</p>
          </div>
          <div className="bg-[rgba(200,232,78,0.04)] border border-[rgba(200,232,78,0.12)] rounded-2xl p-6">
            <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#c8e84e] mb-2">
              Livraison
            </p>
            <p className="text-sm text-[#9a9a9a] leading-relaxed">{project.livraison}</p>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-20 pt-16 border-t border-white/[0.06] text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Une série comme celle-ci pour votre projet ?
          </h2>
          <p className="text-[#9a9a9a] text-lg font-light mb-8 max-w-[44ch] mx-auto">
            Partagez-moi votre projet. Je vous réponds personnellement sous 24h.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 text-sm font-semibold tracking-wider uppercase
                       text-[#1e1e1e] bg-[#c8e84e] px-10 py-5 rounded-full
                       hover:bg-[#d4f05a] hover:-translate-y-0.5
                       hover:shadow-[0_8px_40px_rgba(200,232,78,0.4)]
                       transition-all duration-200"
          >
            Démarrer mon projet
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </main>

      <footer className="border-t border-white/[0.06] px-[var(--gutter)] py-10">
        <div className="max-w-[1100px] mx-auto flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="hover:opacity-70 transition-opacity">
            <img src="/logo-blanc.webp" alt="BenRaff Studio" className="h-7 w-auto" />
          </Link>
          <div className="flex items-center gap-5">
            <Link href="/projets" className="text-xs text-[#7a7a7a] hover:text-white transition-colors">Tous les projets</Link>
            <Link href="/mentions-legales" className="text-xs text-[#7a7a7a] hover:text-white transition-colors">Mentions légales</Link>
            <Link href="/politique-de-confidentialite" className="text-xs text-[#7a7a7a] hover:text-white transition-colors">Confidentialité</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
