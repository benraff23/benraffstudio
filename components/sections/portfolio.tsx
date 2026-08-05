'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import { nicheProjects } from '@/lib/portfolio-data'

// Accueil : uniquement l'aménagement extérieur. Les autres secteurs
// restent accessibles depuis /projets, pas depuis le tunnel.
const displayedProjects = nicheProjects

export default function Portfolio() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'right' ? 380 : -380, behavior: 'smooth' })
  }

  return (
    <section
      id="portfolio"
      className="bg-[#f7f5f1] py-24 sm:py-32 overflow-hidden"
      aria-labelledby="portfolio-title"
    >
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-[var(--gutter)] mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <span className="label">Projets récents</span>
          <h2 id="portfolio-title" className="mt-4 font-bold tracking-tight text-[clamp(1.85rem,3.2vw,2.5rem)] leading-tight text-[#1c1c1c]">
            Du jardin littoral à la piscine à débordement.
          </h2>
          <p className="mt-3 text-base font-light text-[#6b6b6b] max-w-[46ch]">
            Une sélection de projets réalisés avec des concepteurs paysagistes, des piscinistes
            et des concepteurs de pool houses.
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              aria-label="Projet précédent"
              className="w-10 h-10 rounded-full border border-[rgba(28,28,28,0.14)] flex items-center justify-center
                         text-[#1c1c1c] hover:border-[rgba(28,28,28,0.4)] hover:bg-[rgba(28,28,28,0.04)] transition-all duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M10 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Projet suivant"
              className="w-10 h-10 rounded-full border border-[rgba(28,28,28,0.14)] flex items-center justify-center
                         text-[#1c1c1c] hover:border-[rgba(28,28,28,0.4)] hover:bg-[rgba(28,28,28,0.04)] transition-all duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <Link
            href="/projets"
            className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.1em] uppercase
                       text-[#1c1c1c] border border-[rgba(28,28,28,0.2)] px-6 py-3 rounded-full
                       hover:border-[rgba(28,28,28,0.5)] hover:-translate-y-0.5 transition-all duration-200"
          >
            Voir tous les projets
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto pb-4 px-[var(--gutter)]
                   snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        data-lenis-prevent
      >
        {displayedProjects.map((project) => (
          <Link
            key={project.id}
            href={`/projets/${project.slug}`}
            className="flex-shrink-0 w-[300px] sm:w-[360px] snap-start group"
          >
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-[#ede9e2]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 300px, 360px"
                className="object-cover object-center
                           transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Overlay au hover */}
              <div className="absolute inset-0 bg-[rgba(28,28,28,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              {/* Tags */}
              <div className="absolute top-4 left-4 flex gap-1.5 flex-wrap">
                {project.tags.slice(0, 1).map(tag => (
                  <span key={tag}
                    className="text-[9px] font-medium tracking-widest uppercase
                               bg-[rgba(247,245,241,0.9)] text-[#1c1c1c] px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {/* Légende */}
            <div className="mt-4 px-0.5">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-[#9a9a9a]">
                  {project.category}
                </span>
                <span className="text-[10px] text-[#9a9a9a]">· {project.year}</span>
              </div>
              <h3 className="text-base font-semibold text-[#1c1c1c] mb-1 leading-snug group-hover:text-[#6b6b6b] transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-xs text-[#9a9a9a] font-light leading-relaxed line-clamp-2">
                {project.intention}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA strip */}
      <div className="mt-16 mx-auto max-w-[1400px] px-[var(--gutter)]">
        <div className="pt-12 border-t border-[rgba(28,28,28,0.08)] flex flex-col sm:flex-row
                        items-start sm:items-center justify-between gap-6">
          <p className="font-bold text-2xl sm:text-3xl tracking-tight text-[#1c1c1c]">
            Un projet d&apos;aménagement extérieur à faire signer ?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              href="/projets"
              className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.1em]
                         uppercase text-[#1c1c1c] border border-[rgba(28,28,28,0.2)] px-6 py-4 rounded-full
                         hover:border-[rgba(28,28,28,0.5)] hover:-translate-y-0.5 transition-all duration-200"
            >
              Voir tous les projets
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 text-xs font-medium tracking-[0.1em]
                         uppercase text-[#f7f5f1] bg-[#1c1c1c] px-8 py-4 rounded-full
                         hover:bg-[#333333] hover:-translate-y-0.5 transition-all duration-200"
            >
              Démarrer mon projet
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
