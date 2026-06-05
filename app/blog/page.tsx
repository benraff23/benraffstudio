import type { Metadata } from 'next'
import Link from 'next/link'
import ClientEffects from '@/components/layout/client-effects'
import FloatingCta from '@/components/layout/floating-cta'
import Nav from '@/components/layout/nav'
import BlogList from './blog-list'
import { getAllPosts } from '@/lib/blog'

const SITE = 'https://benraffstudio.com'

export const metadata: Metadata = {
  title: 'Blog · Visualisation architecturale & image cinématographique · BenRaff Studio',
  description:
    'Articles sur le métier de perspectiviste, le process de création de séries cinématographiques et les marchés de la visualisation architecturale. BenRaff Studio, Rennes.',
  alternates: { canonical: `${SITE}/blog` },
  openGraph: {
    title: 'Blog · BenRaff Studio',
    description: 'Métier, process et marchés de la visualisation architecturale cinématographique.',
    url: `${SITE}/blog`,
    siteName: 'BenRaff Studio',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Blog · BenRaff Studio',
    description: 'Métier, process et marchés de la visualisation architecturale cinématographique.',
    url: `${SITE}/blog`,
    publisher: { '@type': 'Organization', name: 'BenRaff Studio', url: SITE },
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      description: p.description,
      datePublished: p.date,
      url: `${SITE}/blog/${p.slug}`,
    })),
  }

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <ClientEffects />
      <FloatingCta />
      <Nav base="/" />

      <main className="max-w-[1400px] mx-auto px-[var(--gutter)] pt-40 pb-20">
        <div className="mb-12">
          <span className="label mb-5">Blog</span>
          <h1 className="mt-4 text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05] text-white mb-6 max-w-[20ch]">
            Le métier, le process, les marchés.
          </h1>
          <p className="text-lg font-light text-[#9a9a9a] leading-relaxed max-w-[56ch]">
            Pourquoi une image cinématographique convainc là où un rendu technique laisse froid.
            Des réflexions sur la visualisation architecturale, son processus et ses usages.
          </p>
        </div>

        <BlogList posts={posts} />
      </main>

      <footer className="border-t border-white/[0.06] px-[var(--gutter)] py-10 mt-8">
        <div className="max-w-[1400px] mx-auto flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="hover:opacity-70 transition-opacity">
            <img src="/logo-blanc.webp" alt="BenRaff Studio" className="h-7 w-auto" />
          </Link>
          <div className="flex items-center gap-5">
            <Link href="/projets" className="text-xs text-[#7a7a7a] hover:text-white transition-colors">Projets</Link>
            <Link href="/mentions-legales" className="text-xs text-[#7a7a7a] hover:text-white transition-colors">Mentions légales</Link>
            <Link href="/politique-de-confidentialite" className="text-xs text-[#7a7a7a] hover:text-white transition-colors">Confidentialité</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
