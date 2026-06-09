import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import ClientEffects from '@/components/layout/client-effects'
import FloatingCta from '@/components/layout/floating-cta'
import Nav from '@/components/layout/nav'
import { mdxComponents } from '../mdx-components'
import { getAllPosts, getPostBySlug } from '@/lib/blog'

const SITE = 'https://benraffstudio.com'

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  const { meta } = post
  const url = `${SITE}/blog/${meta.slug}`
  return {
    title: `${meta.title} · BenRaff Studio`,
    description: meta.description,
    alternates: { canonical: url },
    openGraph: {
      title: meta.title, description: meta.description,
      url, siteName: 'BenRaff Studio', type: 'article', locale: 'fr_FR',
      publishedTime: meta.date,
      images: meta.cover ? [{ url: meta.cover }] : undefined,
    },
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const { meta, content } = post
  const url = `${SITE}/blog/${meta.slug}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: meta.title, description: meta.description,
        datePublished: meta.date, articleSection: meta.category, url,
        ...(meta.cover ? { image: `${SITE}${meta.cover}` } : {}),
        author: { '@type': 'Person', name: 'Benjamin Raffegeau', url: `${SITE}/benjamin-raffegeau` },
        publisher: { '@type': 'Organization', name: 'BenRaff Studio', url: SITE },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
          { '@type': 'ListItem', position: 3, name: meta.title, item: url },
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

      <main className="max-w-[760px] mx-auto px-[var(--gutter)] pt-40 pb-20">
        {/* Fil d'Ariane */}
        <nav aria-label="Fil d'Ariane" className="mb-10 flex items-center gap-2 text-xs text-[#9a9a9a] font-light">
          <Link href="/" className="hover:text-[#1c1c1c] transition-colors">Accueil</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#1c1c1c] transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-[#6b6b6b] truncate max-w-[40ch]">{meta.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 text-xs text-[#9a9a9a] font-light mb-5">
            <span className="text-[9px] font-medium tracking-[0.2em] uppercase text-[#6b6b6b]">{meta.category}</span>
            <span>·</span>
            <time dateTime={meta.date}>{formatDate(meta.date)}</time>
            <span>·</span>
            <span>{meta.readingTime} min de lecture</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-[#1c1c1c] mb-6">
            {meta.title}
          </h1>
          <p className="text-xl font-light text-[#6b6b6b] leading-relaxed">{meta.description}</p>
        </header>

        {meta.cover && (
          <div className="mb-12 rounded-xl overflow-hidden bg-[#ede9e2]">
            <img src={meta.cover} alt={meta.title} className="w-full h-auto object-cover" />
          </div>
        )}

        <article>
          <MDXRemote source={content} components={mdxComponents} />
        </article>

        {/* CTA */}
        <div className="mt-16 pt-12 border-t border-[rgba(28,28,28,0.08)] text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1c1c1c] mb-4">
            Un projet à faire ressentir ?
          </h2>
          <p className="text-[#6b6b6b] text-lg font-light mb-8 max-w-[40ch] mx-auto">
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
        <div className="max-w-[760px] mx-auto flex flex-wrap items-center justify-between gap-4">
          <Link href="/blog" className="text-xs text-[#9a9a9a] hover:text-[#1c1c1c] transition-colors font-light">← Tous les articles</Link>
          <div className="flex items-center gap-5">
            <Link href="/mentions-legales" className="text-xs text-[#9a9a9a] hover:text-[#1c1c1c] transition-colors font-light">Mentions légales</Link>
            <Link href="/politique-de-confidentialite" className="text-xs text-[#9a9a9a] hover:text-[#1c1c1c] transition-colors font-light">Confidentialité</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
