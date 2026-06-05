'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const heroImages = [
  { src: '/hero.png',                                              alt: 'Rendu 3D architectural ultra-réaliste · BenRaff Studio, perspectiviste à Rennes' },
  { src: '/projets/pool-house/Vue 2_final.png',                   alt: 'Rendu 3D pool-house aménagement extérieur Bretagne · visualisation architecturale Rennes' },
  { src: '/projets/pool-house/Vue 3.png',                         alt: 'Perspectiviste 3D cuisine extérieure et piscine · studio 3D Rennes' },
  { src: '/projets/pool-house/Vue 4.png',                         alt: 'Visualisation 3D terrasse pergola coucher de soleil · rendu architectural Rennes' },
  { src: "/projets/Intérieur scandinave/Salon face.jpeg",         alt: 'Rendu 3D intérieur scandinave salon · BenRaff Studio visualisation architecturale' },
  { src: "/projets/Intérieur scandinave/Vue d'ensemble.jpeg",     alt: 'Visualisation 3D intérieur nordique vue ensemble · perspectiviste Rennes' },
]

const INTERVAL = 5000 // 5 secondes par image

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
      className="hero relative min-h-svh flex flex-col justify-end overflow-hidden"
      id="accueil"
      aria-label="Accueil"
    >
      <style>{`
        .hero__bg-image { transform: scale(1.05); transition: transform 12s cubic-bezier(0.16,1,0.3,1); }
        .hero.loaded .hero__bg-image { transform: scale(1); }
        .hero__accent { width: 0; transition: width 1.5s cubic-bezier(0.16,1,0.3,1) 0.5s; }
        .hero.loaded .hero__accent { width: 40%; }
        .hero__eyebrow { opacity: 0; transform: translateY(16px); transition: opacity 0.8s 0.3s, transform 0.8s 0.3s; }
        .hero.loaded .hero__eyebrow { opacity: 1; transform: none; }
        .hero__title   { opacity: 0; transform: translateY(24px); transition: opacity 0.9s 0.5s, transform 0.9s 0.5s; }
        .hero.loaded .hero__title   { opacity: 1; transform: none; }
        .hero__sub     { opacity: 0; transform: translateY(24px); transition: opacity 0.9s 0.7s, transform 0.9s 0.7s; }
        .hero.loaded .hero__sub     { opacity: 1; transform: none; }
        .hero__actions { opacity: 0; transform: translateY(24px); transition: opacity 0.9s 0.9s, transform 0.9s 0.9s; }
        .hero.loaded .hero__actions { opacity: 1; transform: none; }
        .hero__stats   { opacity: 0; transform: translateY(20px); transition: opacity 0.9s 1.1s, transform 0.9s 1.1s; }
        .hero.loaded .hero__stats   { opacity: 1; transform: none; }
        .hero__scroll  { opacity: 0; transition: opacity 0.8s 1.4s; }
        .hero.loaded .hero__scroll  { opacity: 1; }
        @keyframes scrollLine {
          0%  { transform: scaleY(1); transform-origin: top; opacity: 1; }
          50% { transform: scaleY(0); transform-origin: top; opacity: 0; }
          51% { transform: scaleY(0); transform-origin: bottom; }
          100%{ transform: scaleY(1); transform-origin: bottom; opacity: 1; }
        }
      `}</style>

      {/* Background slideshow */}
      <div className="absolute inset-0">
        <div id="heroParallax" className="absolute inset-[-10%] w-[120%] h-[120%] will-change-transform">
          <AnimatePresence mode="sync">
            <motion.img
              key={index}
              src={current.src}
              alt={current.alt}
              className="absolute inset-0 w-full h-full object-cover object-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </AnimatePresence>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(8,8,8,0.55)] via-[rgba(8,8,8,0.35)] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,8,8,0.97)] via-[rgba(8,8,8,0.75)] to-transparent" />
      </div>

      {/* Dots indicator */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {heroImages.map((_img, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Image ${i + 1}`}
            className={`h-0.5 rounded-full transition-all duration-500 ${
              i === index ? 'w-6 bg-[#c8e84e]' : 'w-2 bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      <div className="hero__accent absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#c8e84e] to-transparent z-10" />

      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-[var(--gutter)] pb-20 pt-24">
        <div className="hero__eyebrow flex items-center gap-3 mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-[#c8e84e]" />
          <span className="text-xs font-medium tracking-[0.15em] uppercase text-[#c8e84e]">Séries cinématographiques · Visualisation architecturale · Rennes</span>
        </div>

        <h1 className="hero__title text-[clamp(3rem,7vw,6.5rem)] font-bold leading-[1.05] tracking-tight text-white max-w-[16ch] mb-6">
          Vous cherchez plus qu&apos;un <em className="not-italic text-[#c8e84e]">rendu 3D.</em>
        </h1>

        <p className="hero__sub text-[clamp(1.1rem,1.8vw,1.25rem)] font-light text-[#b8b8b8] max-w-[52ch] mb-6 leading-normal">
          Je crée des séries cinématographiques qui font ressentir vos projets avant qu&apos;ils existent.
          Et je vous accompagne pas à pas pour y arriver.
        </p>

        <p className="hero__sub text-base font-light text-[#9a9a9a] max-w-[50ch] mb-12 leading-relaxed">
          Si vous êtes ici, c&apos;est que vous savez qu&apos;une belle image ne suffit plus.
          Vos clients ont besoin d&apos;être transportés. Pas informés.
        </p>

        <div className="hero__actions flex items-center gap-5 flex-wrap">
          <a href="#contact" className="inline-flex items-center gap-3 text-xs font-semibold tracking-wider uppercase text-[#080808] bg-[#c8e84e] px-8 py-4 rounded-full hover:bg-[#d4f05a] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(200,232,78,0.35)] transition-all duration-200">
            Démarrer mon projet
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
        <div className="hero__sub flex items-center gap-2 mt-6">
          <div className="w-1.5 h-1.5 rounded-full bg-[#c8e84e] flex-shrink-0"
               style={{ animation: 'pulse 2s ease-in-out infinite' }} />
          <span className="text-xs text-[#c8e84e] font-medium">
            Disponible pour nouveaux projets — Juin 2026
          </span>
        </div>
      </div>

      <div className="hero__scroll absolute bottom-8 right-[var(--gutter)] flex flex-col items-center gap-3 z-10 hidden lg:flex">
        <span className="text-xs font-medium tracking-[0.15em] uppercase text-[#7a7a7a]" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-[#c8e84e] to-transparent" style={{ animation: 'scrollLine 2s cubic-bezier(0.65,0,0.35,1) infinite 1.6s' }} />
      </div>
    </section>
  )
}
