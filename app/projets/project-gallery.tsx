'use client'
import { useState, useEffect, useCallback } from 'react'

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
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = prevOverflow
    }
  }, [onClose, prev, next])

  return (
    <div
      className="fixed inset-0 z-[1100] bg-black/95 flex items-center justify-center"
      onClick={onClose}
      data-lenis-prevent
    >
      <img
        src={images[index]}
        alt={`Vue ${index + 1}`}
        className="max-w-full max-h-full object-contain select-none"
        onClick={e => e.stopPropagation()}
        draggable={false}
      />

      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 flex items-center
                   justify-center text-white hover:bg-white/25 transition-colors"
        aria-label="Fermer le plein écran"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

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
              <path d="M10 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
              <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </>
      )}

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs font-medium
                      text-white/50 tracking-widest tabular-nums">
        {index + 1} / {images.length}
      </div>
    </div>
  )
}

// Série complète en pleine largeur. Clic → plein écran.
export default function ProjectGallery({ images, title }: { images: string[]; title: string }) {
  const [lightbox, setLightbox] = useState<number | null>(null)

  return (
    <>
      <div className="flex flex-col gap-6 sm:gap-10">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setLightbox(i)}
            className="group relative w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-[#111111]
                       cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f7f5f1]"
            aria-label={`Agrandir la vue ${i + 1} de ${title}`}
          >
            <img
              src={src}
              alt={`${title} · vue ${i + 1}`}
              className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
            <div className="absolute inset-0 flex items-center justify-center
                            opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              <span className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-full
                               px-4 py-2 flex items-center gap-2 text-white text-xs font-medium tracking-wide">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M1 5V1h4M11 1h4v4M15 11v4h-4M5 15H1v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Plein écran
              </span>
            </div>
          </button>
        ))}
      </div>

      {lightbox !== null && (
        <Lightbox
          images={images}
          index={lightbox}
          onClose={() => setLightbox(null)}
          onChange={setLightbox}
        />
      )}
    </>
  )
}
