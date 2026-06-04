'use client'
import Link from 'next/link'
import { useRef } from 'react'
import { portfolioProjects } from '@/lib/portfolio-data'

// 6 derniers projets affichés (teaser)
const displayedProjects = portfolioProjects.slice(-6)

export default function Portfolio() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'right' ? 380 : -380, behavior: 'smooth' })
  }

  return (
    <section
      id="portfolio"
      className="bg-[#1e1e1e] py-24 sm:py-32 overflow-hidden"
      aria-labelledby="portfolio-title"
    >
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-[var(--gutter)] mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <span className="label">Études de cas</span>
          <h2 id="portfolio-title" className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-white">
            Projets réalisés.
          </h2>
          <p className="mt-3 text-base font-light text-[#9a9a9a]">
            6 projets récents · Portfolio complet sur la page dédiée.
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Flèches navigation */}
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              aria-label="Projet précédent"
              className="w-10 h-10 rounded-full border border-white/[0.14] flex items-center justify-center
                         text-white hover:border-white/40 hover:bg-white/[0.05] transition-all duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M10 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Projet suivant"
              className="w-10 h-10 rounded-full border border-white/[0.14] flex items-center justify-center
                         text-white hover:border-white/40 hover:bg-white/[0.05] transition-all duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase
                       text-white border border-white/[0.14] px-6 py-3 rounded-full
                       hover:border-white/30 hover:-translate-y-0.5 transition-all duration-200"
          >
            Voir tous les projets
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Carousel horizontal */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 px-[var(--gutter)]
                   snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        data-lenis-prevent
      >
        {displayedProjects.map((project) => (
          <Link
            key={project.id}
            href={`/portfolio#projet-${project.id}`}
            className="flex-shrink-0 w-[300px] sm:w-[360px] snap-start group"
          >
            {/* Image uniforme */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center
                           transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              {/* Tags */}
              <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                {project.tags.slice(0, 2).map(tag => (
                  <span key={tag}
                    className="text-[10px] font-medium tracking-wider uppercase
                               bg-white/10 backdrop-blur-sm text-white/80 px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#c8e84e]">
                    {project.category}
                  </span>
                  <span className="text-[10px] text-white/40">· {project.year}</span>
                </div>
                <h3 className="text-base font-bold text-white mb-1.5 leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs text-white/60 leading-relaxed line-clamp-2">
                  {project.desc}
                </p>
              </div>
            </div>
          </Link>
        ))}

      </div>

      {/* CTA strip */}
      <div className="mt-14 mx-auto max-w-[1400px] px-[var(--gutter)]">
        <div className="pt-12 border-t border-white/[0.06] flex flex-col sm:flex-row
                        items-start sm:items-center justify-between gap-6">
          <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
            Vous avez un projet à visualiser ?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider
                         uppercase text-white border border-white/[0.14] px-6 py-4 rounded-full
                         hover:border-white/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              Voir le portfolio
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 text-xs font-semibold tracking-wider
                         uppercase text-[#1e1e1e] bg-[#c8e84e] px-8 py-4 rounded-full
                         hover:bg-[#d4f05a] hover:-translate-y-0.5
                         hover:shadow-[0_8px_32px_rgba(200,232,78,0.35)]
                         transition-all duration-200"
            >
              Démarrer un projet
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
