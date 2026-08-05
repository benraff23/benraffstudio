'use client'

import { useState } from 'react'
import Lightbox from './lightbox'
import Reveal from './reveal'
import type { Hotspot, ImageSignature } from '@/lib/presentation-data'

type Source = 'plan' | 'vues'

export default function PlanEtVues({
  planImage,
  planDownload,
  hotspots,
  images,
  titre,
}: {
  planImage: string
  planDownload: string
  hotspots: Hotspot[]
  images: ImageSignature[]
  titre: string
}) {
  const [lightbox, setLightbox] = useState<{ source: Source; index: number } | null>(null)
  const [active, setActive] = useState<number | null>(null)

  const openVue = (i: number) => setLightbox({ source: 'vues', index: i })

  const lightboxImages =
    lightbox?.source === 'plan'
      ? [{ src: planImage, alt: `Plan de composition — ${titre}` }]
      : images

  return (
    <>
      {/* ── Plan de composition ───────────────────────────────────────────── */}
      <section className="bg-[#ede9e2] py-20 sm:py-28 px-[var(--gutter)]" aria-labelledby="plan-title">
        <style>{`
          @keyframes hs-ring {
            0%   { transform: scale(1);   opacity: 0.55; }
            70%  { transform: scale(2.1); opacity: 0; }
            100% { transform: scale(2.1); opacity: 0; }
          }
          .hs-ring { animation: hs-ring 2.6s cubic-bezier(0.16,1,0.3,1) infinite; }
          @media (prefers-reduced-motion: reduce) { .hs-ring { animation: none; } }
        `}</style>

        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <h2 id="plan-title" className="label mb-8">Plan de composition</h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-[#f7f5f1]
                            border border-[rgba(28,28,28,0.08)]">
              <img
                src={planImage}
                alt={`Plan de composition — ${titre}`}
                className="w-full h-auto block select-none"
                draggable={false}
              />

              {hotspots.map((h, i) => {
                const linked = h.imageIndex !== undefined && images[h.imageIndex] !== undefined
                const shown = active === i
                return (
                  <button
                    key={`${h.label}-${i}`}
                    type="button"
                    style={{ left: `${h.x}%`, top: `${h.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center
                               rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1c1c1c]"
                    onMouseEnter={() => setActive(i)}
                    onMouseLeave={() => setActive((a) => (a === i ? null : a))}
                    onFocus={() => setActive(i)}
                    onBlur={() => setActive((a) => (a === i ? null : a))}
                    onClick={() => (linked ? openVue(h.imageIndex!) : setActive(i))}
                    aria-label={linked ? `${h.label} — voir la vue` : h.label}
                  >
                    <span className="absolute w-3 h-3 rounded-full bg-[#1c1c1c]/45 hs-ring" aria-hidden="true" />
                    <span
                      className={`relative w-3 h-3 rounded-full bg-[#1c1c1c] ring-2 ring-[#f7f5f1]
                                  transition-transform duration-300 ${shown ? 'scale-[1.4]' : ''}`}
                      aria-hidden="true"
                    />
                    <span
                      className={`absolute bottom-[26px] left-1/2 -translate-x-1/2 whitespace-nowrap
                                  bg-[#1c1c1c] text-[#f7f5f1] text-[10px] font-medium tracking-[0.14em] uppercase
                                  px-3 py-1.5 rounded-full transition-all duration-200
                                  ${shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 pointer-events-none'}`}
                    >
                      {h.label}
                    </span>
                  </button>
                )
              })}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setLightbox({ source: 'plan', index: 0 })}
                className="inline-flex items-center gap-2 text-[10px] font-medium tracking-[0.14em] uppercase
                           text-[#1c1c1c] border border-[rgba(28,28,28,0.2)] px-6 py-3 rounded-full
                           hover:border-[rgba(28,28,28,0.5)] transition-colors duration-200"
              >
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M1 5V1h4M11 1h4v4M15 11v4h-4M5 15H1v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Agrandir le plan
              </button>
              <a
                href={planDownload}
                download
                className="inline-flex items-center gap-2 text-[10px] font-medium tracking-[0.14em] uppercase
                           text-[#f7f5f1] bg-[#1c1c1c] px-6 py-3 rounded-full
                           hover:bg-[#333333] transition-colors duration-200"
              >
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M8 2v9m0 0l-3.5-3.5M8 11l3.5-3.5M2 14h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Télécharger le plan
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Vues du projet ────────────────────────────────────────────────── */}
      <section className="bg-[#1c1c1c] py-20 sm:py-28" aria-labelledby="vues-title">
        <div className="px-[var(--gutter)] max-w-[1400px] mx-auto">
          <Reveal>
            <h2 id="vues-title" className="label label-on-dark mb-10">Vues du projet</h2>
          </Reveal>
        </div>

        <div className="flex flex-col gap-4 sm:gap-8">
          {images.map((img, i) => (
            <Reveal key={img.src + i}>
              <div className="group relative w-full">
                <button
                  type="button"
                  onClick={() => openVue(i)}
                  className="block w-full cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f7f5f1]"
                  aria-label={img.zone ? `Agrandir : ${img.zone}` : `Agrandir la vue ${i + 1}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto object-cover select-none"
                    loading={i === 0 ? 'eager' : 'lazy'}
                    draggable={false}
                  />
                </button>

                {img.zone && (
                  <span className="absolute bottom-4 left-[var(--gutter)] text-[10px] font-medium
                                   tracking-[0.18em] uppercase text-[#f7f5f1]/75
                                   bg-[rgba(28,28,28,0.45)] backdrop-blur-sm px-3 py-1.5 rounded-full
                                   pointer-events-none">
                    {img.zone}
                  </span>
                )}

                {img.downloadHd && (
                  <a
                    href={img.downloadHd}
                    download
                    className="absolute top-4 right-[var(--gutter)] inline-flex items-center gap-2
                               text-[10px] font-medium tracking-[0.14em] uppercase text-[#1c1c1c]
                               bg-[#f7f5f1] px-4 py-2.5 rounded-full opacity-0
                               group-hover:opacity-100 focus:opacity-100 focus-visible:opacity-100
                               hover:bg-white transition-opacity duration-200"
                    aria-label={img.zone ? `Télécharger en HD : ${img.zone}` : `Télécharger la vue ${i + 1} en HD`}
                  >
                    <svg width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M8 2v9m0 0l-3.5-3.5M8 11l3.5-3.5M2 14h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    HD
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {lightbox && (
        <Lightbox
          images={lightboxImages}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
          onChange={(i) => setLightbox({ source: lightbox.source, index: i })}
        />
      )}
    </>
  )
}
