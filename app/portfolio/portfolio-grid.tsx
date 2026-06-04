'use client'
import { useState, useEffect, useCallback } from 'react'
import type { PortfolioProject } from '@/lib/portfolio-data'

function Lightbox({ images, index, onClose, onChange }: {
  images: string[]
  index: number
  onClose: () => void
  onChange: (i: number) => void
}) {
  const prev = useCallback(() => onChange((index - 1 + images.length) % images.length), [index, images.length, onChange])
  const next = useCallback(() => onChange((index + 1) % images.length), [index, images.length, onChange])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose, prev, next])

  return (
    <div
      className="fixed inset-0 z-[1100] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Image */}
      <img
        src={images[index]}
        alt={`Vue ${index + 1}`}
        className="max-w-full max-h-full object-contain select-none"
        onClick={e => e.stopPropagation()}
        draggable={false}
      />

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 flex items-center
                   justify-center text-white hover:bg-white/25 transition-colors"
        aria-label="Fermer le plein écran"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>

      {/* Prev / Next */}
      {images.length > 1 && (
        <>
          <button
            onClick={e => { e.stopPropagation(); prev() }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full
                       bg-white/10 flex items-center justify-center text-white
                       hover:bg-white/25 transition-colors"
            aria-label="Image précédente"
          >
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M10 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            onClick={e => { e.stopPropagation(); next() }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full
                       bg-white/10 flex items-center justify-center text-white
                       hover:bg-white/25 transition-colors"
            aria-label="Image suivante"
          >
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </>
      )}

      {/* Counter */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs font-medium
                      text-white/50 tracking-widest tabular-nums">
        {index + 1} / {images.length}
      </div>
    </div>
  )
}

function ProjectModal({ project, onClose }: { project: PortfolioProject; onClose: () => void }) {
  const [activeImg, setActiveImg] = useState(0)
  const [lightbox, setLightbox] = useState(false)
  const images = project.images.filter(img => !img.endsWith('.mp4'))

  // Lock body scroll
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [])

  // Keyboard: Escape closes modal
  useEffect(() => {
    if (lightbox) return
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightbox, onClose])

  return (
    <>
      <div
        className="fixed inset-0 z-[900] flex items-center justify-center p-4 sm:p-8"
        onClick={onClose}
        data-lenis-prevent
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

        {/* Modal */}
        <div
          className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto
                     bg-[#1a1a1a] border border-white/[0.1] rounded-3xl"
          onClick={e => e.stopPropagation()}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/[0.08]
                       flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Fermer"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>

          {/* Image principale */}
          <div className="relative aspect-video rounded-t-3xl overflow-hidden group/img cursor-zoom-in"
               onClick={() => setLightbox(true)}>
            <img
              src={images[activeImg] ?? project.image}
              alt={`${project.title} · vue ${activeImg + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            {/* Fullscreen hint */}
            <div className="absolute inset-0 flex items-center justify-center
                            opacity-0 group-hover/img:opacity-100 transition-opacity duration-200">
              <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-full
                              px-4 py-2 flex items-center gap-2 text-white text-xs font-medium tracking-wide">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M1 5V1h4M11 1h4v4M15 11v4h-4M5 15H1v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Plein écran
              </div>
            </div>

            <div className="absolute bottom-4 left-5">
              <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#c8e84e]">
                {project.category} · {project.year}
              </span>
            </div>
          </div>

          {/* Miniatures */}
          {images.length > 1 && (
            <div className="flex gap-2 px-6 pt-4 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all
                              ${i === activeImg ? 'border-[#c8e84e]' : 'border-transparent opacity-60 hover:opacity-100'}`}
                >
                  <img src={img} alt={`${project.title} ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Contenu */}
          <div className="p-6 sm:p-8 flex flex-col gap-6">
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-medium tracking-wider uppercase
                                             bg-white/[0.06] text-white/70 px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">{project.title}</h2>
              <p className="text-sm text-[#9a9a9a] leading-relaxed">{project.fullDesc}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5">
                <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#5a5a5a] mb-2">
                  Brief & Objectif
                </p>
                <p className="text-sm text-[#9a9a9a] leading-relaxed">{project.brief}</p>
              </div>
              <div className="bg-[rgba(200,232,78,0.04)] border border-[rgba(200,232,78,0.12)] rounded-2xl p-5">
                <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#c8e84e] mb-2">
                  Livraison
                </p>
                <p className="text-sm text-[#9a9a9a] leading-relaxed">{project.livraison}</p>
              </div>
            </div>

            <a
              href="/#contact"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase
                         text-[#1e1e1e] bg-[#c8e84e] px-8 py-4 rounded-full self-start
                         hover:bg-[#d4f05a] transition-colors duration-200"
            >
              Démarrer un projet similaire
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox plein écran */}
      {lightbox && (
        <Lightbox
          images={images}
          index={activeImg}
          onClose={() => setLightbox(false)}
          onChange={setActiveImg}
        />
      )}
    </>
  )
}

export default function PortfolioGrid({ projects }: { projects: PortfolioProject[] }) {
  const [selected, setSelected] = useState<PortfolioProject | null>(null)

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {projects.map((project) => (
          <button
            key={project.id}
            id={`projet-${project.id}`}
            onClick={() => setSelected(project)}
            className="group text-left focus:outline-none focus-visible:ring-2
                       focus-visible:ring-[#c8e84e] rounded-2xl"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center
                           transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white
                                 text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full">
                  Voir le projet
                </span>
              </div>
              <div className="absolute top-3 left-3">
                <span className="text-[10px] font-medium tracking-wider uppercase
                                 bg-black/50 backdrop-blur-sm text-white/80 px-2.5 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
            </div>
            <h2 className="text-sm font-semibold text-white leading-snug group-hover:text-[#c8e84e] transition-colors duration-200">
              {project.title}
            </h2>
          </button>
        ))}
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  )
}
