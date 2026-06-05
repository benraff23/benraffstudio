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
      {/* Filtres catégories */}
      <div className="flex flex-wrap gap-2 mb-12">
        {chips.map((c) => (
          <button
            key={c}
            onClick={() => { setCategory(c); setPage(1) }}
            className={`text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full border transition-all duration-200
              ${category === c
                ? 'bg-[#c8e84e] text-[#080808] border-[#c8e84e]'
                : 'text-[#b8b8b8] border-white/[0.14] hover:border-white/30 hover:text-white'}`}
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
              className="group flex flex-col rounded-2xl overflow-hidden border border-white/[0.06]
                         bg-[#111111] hover:border-white/[0.14] transition-all duration-300
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c8e84e]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#1a1a1a]">
                {post.cover ? (
                  <img
                    src={post.cover}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#080808]" />
                )}
                <span className="absolute top-3 left-3 text-[10px] font-semibold tracking-wider uppercase
                                 bg-black/50 backdrop-blur-sm text-[#c8e84e] px-2.5 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-center gap-2 text-[11px] text-[#7a7a7a] mb-3">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span>·</span>
                  <span>{post.readingTime} min</span>
                </div>
                <h2 className="text-lg font-semibold text-white leading-snug mb-2 group-hover:text-[#c8e84e] transition-colors">
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

      {/* Pagination — "charger plus" */}
      {page < totalPages && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setPage((p) => p + 1)}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase
                       text-white border border-white/[0.14] px-8 py-4 rounded-full
                       hover:border-white/30 hover:-translate-y-0.5 transition-all duration-200"
          >
            Charger plus d&apos;articles
          </button>
        </div>
      )}
    </>
  )
}
