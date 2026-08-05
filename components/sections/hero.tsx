'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

// next/image animé : évite de perdre l'optimisation sur l'image LCP.
const MotionImage = motion.create(Image)

/* Uniquement le projet pool house : c'est le cas de référence de la niche.
   vue-5 est réservée à la section vidéo, plus bas dans la page. */
const heroImages = [
  { src: '/projets/pool-house/vie-1.webp',       alt: 'Pool house et bassin à débordement sur mur en pierre sèche, graminées, lumière de fin de journée' },
  { src: '/projets/pool-house/vue-2_final.webp', alt: 'Terrasse bois, foyer extérieur et bassin visualisés avant le premier coup de pelle' },
  { src: '/projets/pool-house/vue-4.webp',       alt: 'Plage de bassin et bains de soleil au crépuscule, pool house en arrière-plan' },
  { src: '/projets/pool-house/vue-3.webp',       alt: 'Cuisine extérieure et bar abrités sous la pergola du pool house' },
]

const INTERVAL = 5000

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(i => (i + 1) % heroImages.length)
    }, INTERVAL)
    return () => clearInterval(timer)
  }, [])

  const current = heroImages[index]

  return (
    <section
      className="hero relative min-h-svh flex flex-col justify-end overflow-hidden bg-[#1c1c1c]"
      id="accueil"
      aria-label="Accueil"
    >
      <style>{`
        .hero__bg-image { transform: scale(1.05); transition: transform 12s cubic-bezier(0.16,1,0.3,1); }
        .hero.loaded .hero__bg-image { transform: scale(1); }
        .hero__eyebrow { opacity: 0; transform: translateY(16px); transition: opacity 0.8s 0.3s, transform 0.8s 0.3s; }
        .hero.loaded .hero__eyebrow { opacity: 1; transform: none; }
        .hero__title   { opacity: 0; transform: translateY(24px); transition: opacity 0.9s 0.5s, transform 0.9s 0.5s; }
        .hero.loaded .hero__title   { opacity: 1; transform: none; }
        .hero__sub     { opacity: 0; transform: translateY(24px); transition: opacity 0.9s 0.7s, transform 0.9s 0.7s; }
        .hero.loaded .hero__sub     { opacity: 1; transform: none; }
        .hero__actions { opacity: 0; transform: translateY(24px); transition: opacity 0.9s 0.9s, transform 0.9s 0.9s; }
        .hero.loaded .hero__actions { opacity: 1; transform: none; }
        .hero__scroll  { opacity: 0; transition: opacity 0.8s 1.4s; }
        .hero.loaded .hero__scroll  { opacity: 1; }
      `}</style>

      {/* Background slideshow */}
      <div className="absolute inset-0">
        <div id="heroParallax" className="absolute inset-[-10%] w-[120%] h-[120%] will-change-transform">
          <AnimatePresence mode="sync">
            <MotionImage
              key={index}
              src={current.src}
              alt={current.alt}
              fill
              sizes="100vw"
              // La première vue est le LCP : préchargée, jamais différée.
              priority={index === 0}
              quality={80}
              className="object-cover object-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          </AnimatePresence>
        </div>
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(28,28,28,0.5)] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(28,28,28,0.92)] via-[rgba(28,28,28,0.4)] to-transparent" />
      </div>

      {/* Dots indicator */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {heroImages.map((_img, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Image ${i + 1}`}
            className={`h-px rounded-full transition-all duration-500 ${
              i === index ? 'w-8 bg-[#f7f5f1]' : 'w-2.5 bg-white/25 hover:bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Ligne décorative bas gauche */}
      <div className="absolute bottom-0 left-0 w-24 h-px bg-[#f7f5f1]/20 z-10" />

      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-[var(--gutter)] pb-20 pt-24">
        <div className="hero__eyebrow flex items-center gap-3 mb-8">
          <div className="w-1 h-1 rounded-full bg-[#f7f5f1]/60 flex-shrink-0" />
          <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#f7f5f1]/60">
            Conception paysagère haut de gamme · Rennes · Toute la France
          </span>
        </div>

        <h1 className="hero__title text-[clamp(2.6rem,6.2vw,5.6rem)] font-bold leading-[1.05] tracking-tight text-[#f7f5f1] max-w-[19ch] mb-6">
          Faites vivre votre plan d&apos;aménagement avant le premier coup de pelle.
        </h1>

        <p className="hero__sub text-[clamp(1rem,1.6vw,1.2rem)] font-light text-[#f7f5f1]/70 max-w-[54ch] mb-5 leading-relaxed">
          Le Book de Présentation Client transforme votre projet paysager en une expérience
          que votre client ressent dès la présentation — terrasse, bassin, plantations,
          dans leur ambiance réelle.
        </p>

        <p className="hero__sub text-sm font-light text-[#f7f5f1]/45 max-w-[50ch] mb-12 leading-relaxed">
          Pour les concepteurs paysagistes, piscinistes et concepteurs de pool houses :
          votre client ne signe pas ce qu&apos;il ne voit pas.
        </p>

        <div className="hero__actions flex items-center gap-5 flex-wrap">
          <a
            href="#book"
            className="inline-flex items-center gap-3 text-xs font-medium tracking-[0.1em] uppercase
                       text-[#1c1c1c] bg-[#f7f5f1] px-8 py-4 rounded-full
                       hover:bg-white hover:-translate-y-0.5
                       hover:shadow-[0_8px_32px_rgba(247,245,241,0.2)]
                       transition-all duration-200"
          >
            Découvrir Le Book de Présentation Client
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.1em] uppercase
                       text-[#f7f5f1] border border-[rgba(247,245,241,0.3)] px-8 py-4 rounded-full
                       hover:border-[rgba(247,245,241,0.6)] hover:bg-[rgba(247,245,241,0.08)]
                       transition-all duration-200"
          >
            Voir des projets
          </a>
        </div>

        <div className="hero__sub flex items-center gap-2 mt-7">
          <div className="w-1 h-1 rounded-full bg-[#f7f5f1]/50 flex-shrink-0"
            style={{ animation: 'pulse-dot 2s ease-in-out infinite' }} />
          <span className="text-xs text-[#f7f5f1]/50 font-light tracking-wide">
            Disponible pour nouveaux projets — Juillet 2026
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll absolute bottom-8 right-[var(--gutter)] flex flex-col items-center gap-3 z-10 hidden lg:flex">
        <span className="text-[9px] font-medium tracking-[0.2em] uppercase text-[#f7f5f1]/35"
          style={{ writingMode: 'vertical-rl' }}>Scroll</span>
        <div className="w-px h-14 bg-gradient-to-b from-[#f7f5f1]/30 to-transparent"
          style={{ animation: 'scrollLine 2s cubic-bezier(0.65,0,0.35,1) infinite 1.6s' }} />
      </div>
    </section>
  )
}
