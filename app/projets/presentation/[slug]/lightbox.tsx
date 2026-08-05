'use client'

import { useEffect, useCallback } from 'react'

export interface LightboxImage {
  src: string
  alt: string
  zone?: string
}

export default function Lightbox({
  images,
  index,
  onClose,
  onChange,
}: {
  images: LightboxImage[]
  index: number
  onClose: () => void
  onChange: (i: number) => void
}) {
  const many = images.length > 1
  const prev = useCallback(() => onChange((index - 1 + images.length) % images.length), [index, images.length, onChange])
  const next = useCallback(() => onChange((index + 1) % images.length), [index, images.length, onChange])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && many) prev()
      if (e.key === 'ArrowRight' && many) next()
    }
    window.addEventListener('keydown', handleKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = prevOverflow
    }
  }, [onClose, prev, next, many])

  const current = images[index]

  return (
    <div
      className="fixed inset-0 z-[1100] bg-[#1c1c1c]/96 flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={current.zone || current.alt}
      data-lenis-prevent
    >
      <img
        src={current.src}
        alt={current.alt}
        className="max-w-full max-h-full object-contain select-none"
        onClick={(e) => e.stopPropagation()}
        draggable={false}
      />

      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#f7f5f1]/10 flex items-center
                   justify-center text-[#f7f5f1] hover:bg-[#f7f5f1]/25 transition-colors"
        aria-label="Fermer le plein écran"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      {many && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full
                       bg-[#f7f5f1]/10 flex items-center justify-center text-[#f7f5f1]
                       hover:bg-[#f7f5f1]/25 transition-colors"
            aria-label="Vue précédente"
          >
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M10 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full
                       bg-[#f7f5f1]/10 flex items-center justify-center text-[#f7f5f1]
                       hover:bg-[#f7f5f1]/25 transition-colors"
            aria-label="Vue suivante"
          >
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </>
      )}

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-4">
        {current.zone && (
          <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#f7f5f1]/70">
            {current.zone}
          </span>
        )}
        {many && (
          <span className="text-[10px] font-medium tracking-[0.18em] text-[#f7f5f1]/40 tabular-nums">
            {index + 1} / {images.length}
          </span>
        )}
      </div>
    </div>
  )
}
