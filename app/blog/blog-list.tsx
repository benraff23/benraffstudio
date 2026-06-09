'use client'
import { useState, useMemo } from 'react'
import Link from 'next/link'
import { BLOG_CATEGORIES, type PostMeta } from '@/lib/blog-types'

const PER_PAGE = 9

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function BlogList({ posts }: { posts: PostMeta[] }) {
  const [category, setCategory] = useState<'Tous' | (typeof BLOG_CATEGORIES)[number]>('Tous')
  const [page, setPage] = useState(1)

  const filtered = useMemo(
    () => (category === 'Tous' ? posts : posts.filter((p) => p.category === category)),
    [posts, category],
  )

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE))
  const visible = filtered.slice(0, page * PER_PAGE)
  const chips: Array<'Tous' | (typeof BLOG_CATEGORIES)[number]> = ['Tous', ...BLOG_CATEGORIES]

  return (
    <>
      {/* Filtres */}
      <div className="flex flex-wrap gap-2 mb-12">
        {chips.map((c) => (
          <button
            key={c}
            onClick={() => { setCategory(c); setPage(1) }}
            className={`text-xs font-medium tracking-[0.1em] uppercase px-4 py-2 rounded-full border transition-all duration-200
              ${category === c
                ? 'bg-[#1c1c1c] text-[#f7f5f1] border-[#1c1c1c]'
                : 'text-[#6b6b6b] border-[rgba(28,28,28,0.15)] hover:border-[rgba(28,28,28,0.4)] hover:text-[#1c1c1c]'}`}
          >
            {c}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-[#9a9a9a] font-light">Aucun article dans cette catégorie pour le moment.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-xl overflow-hidden border border-[rgba(28,28,28,0.07)]
                         bg-white hover:border-[rgba(28,28,28,0.14)] transition-all duration-300
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1c1c1c]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#ede9e2]">
                {post.cover ? (
                  <img
                    src={post.cover} alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#ede9e2] to-[#f7f5f1]" />
                )}
                <span className="absolute top-3 left-3 text-[9px] font-medium tracking-widest uppercase
                                 bg-[rgba(247,245,241,0.9)] text-[#1c1c1c] px-2.5 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-center gap-2 text-[11px] text-[#9a9a9a] font-light mb-3">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span>·</span>
                  <span>{post.readingTime} min</span>
                </div>
                <h2 className="text-base font-semibold text-[#1c1c1c] leading-snug mb-2 group-hover:text-[#6b6b6b] transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-[#9a9a9a] font-light leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}

      {page < totalPages && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setPage((p) => p + 1)}
            className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.1em] uppercase
                       text-[#1c1c1c] border border-[rgba(28,28,28,0.2)] px-8 py-4 rounded-full
                       hover:border-[rgba(28,28,28,0.5)] hover:-translate-y-0.5 transition-all duration-200"
          >
            Charger plus d&apos;articles
          </button>
        </div>
      )}
    </>
  )
}
