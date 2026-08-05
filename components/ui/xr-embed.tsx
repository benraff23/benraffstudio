'use client'
import { useState } from 'react'
import Image from 'next/image'

/** Maquette 3D interactive intégrée à la page.
 *
 *  Chargement au clic : le viewer D5 est une scène WebGL lourde, la charger
 *  pour tous les visiteurs pénaliserait le LCP de l'accueil. Tant qu'on n'a
 *  pas cliqué, on n'affiche qu'une image. Après clic, l'iframe remplace
 *  l'image au même endroit — on ne quitte jamais la page. */
export default function XrEmbed({
  src, poster, posterAlt, caption,
}: { src: string; poster: string; posterAlt: string; caption: string }) {
  const [actif, setActif] = useState(false)

  return (
    <div className="rounded-md overflow-hidden shadow-[0_20px_45px_rgba(28,28,28,0.14)] bg-[#2a2620]">
      <div className="relative aspect-video">
        {actif ? (
          <iframe
            src={src}
            title="Maquette 3D interactive du projet, explorable dans la page"
            className="absolute inset-0 w-full h-full border-0"
            allow="fullscreen; xr-spatial-tracking; accelerometer; gyroscope"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setActif(true)}
            className="group absolute inset-0 w-full h-full cursor-pointer
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1c1c1c] focus-visible:ring-offset-2"
          >
            <Image
              src={poster}
              alt={posterAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 520px"
              className="object-cover"
            />
            <span className="absolute inset-0 bg-[rgba(28,28,28,0.28)] group-hover:bg-[rgba(28,28,28,0.14)] transition-colors duration-300" />
            {/* Un seul bouton, au style CTA du site : l'icône de déplacement
                dit « scène explorable » là où un triangle de lecture aurait
                laissé croire à une vidéo. */}
            <span
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                         inline-flex items-center gap-3 whitespace-nowrap
                         text-xs font-medium tracking-[0.1em] uppercase
                         text-[#f7f5f1] bg-[#1c1c1c] px-7 py-4 rounded-full
                         shadow-[0_8px_28px_rgba(28,28,28,0.35)]
                         group-hover:bg-[#333333] group-hover:-translate-y-[calc(50%+2px)]
                         transition-all duration-200"
            >
              Explorer la maquette
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M6 2H2v4M10 14h4v-4M14 6V2h-4M2 10v4h4"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <p className="bg-white border-t border-[rgba(28,28,28,0.06)] px-5 py-4 text-[0.78rem] text-[#6b6b6b]">
        {caption}
      </p>
    </div>
  )
}
