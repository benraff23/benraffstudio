'use client'

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function HeroPresentation({
  image,
  alt,
  titre,
  localisation,
  logoUrl,
  nomPaysagiste,
}: {
  image: string
  alt: string
  titre: string
  localisation?: string
  logoUrl?: string
  nomPaysagiste?: string
}) {
  const reduced = useReducedMotion()
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 900], [0, 140])

  return (
    <section className="relative min-h-svh flex flex-col justify-end overflow-hidden bg-[#1c1c1c]" aria-label={titre}>
      <motion.div
        className="absolute inset-[-8%] w-[116%] h-[116%] will-change-transform"
        style={reduced ? undefined : { y }}
        initial={reduced ? false : { opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ opacity: { duration: 1.4, ease: EASE }, scale: { duration: 2.4, ease: EASE } }}
      >
        <img src={image} alt={alt} className="w-full h-full object-cover object-center" />
      </motion.div>

      {/* Voile de lisibilité — jamais de couleur */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(28,28,28,0.86)] via-[rgba(28,28,28,0.28)] to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(28,28,28,0.42)] via-transparent to-transparent" />

      <motion.div
        className="relative z-10 max-w-[1400px] w-full mx-auto px-[var(--gutter)] pb-20 pt-28"
        initial={reduced ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
      >
        {/* Plaque claire sous le logo : le logo du paysagiste garde ses couleurs
            et reste lisible quelle que soit l'image de fond. */}
        {logoUrl ? (
          <div className="inline-flex items-center bg-[#f7f5f1]/95 backdrop-blur-sm rounded-lg px-5 py-3.5 mb-8">
            <img
              src={logoUrl}
              alt={nomPaysagiste ? `Logo ${nomPaysagiste}` : 'Logo'}
              className="h-8 sm:h-10 w-auto object-contain"
            />
          </div>
        ) : nomPaysagiste ? (
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-1 rounded-full bg-[#f7f5f1]/60 flex-shrink-0" />
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#f7f5f1]/60">
              {nomPaysagiste}
            </span>
          </div>
        ) : null}

        <h1 className="text-[clamp(2.4rem,5.8vw,5rem)] font-bold leading-[1.05] tracking-tight text-[#f7f5f1] max-w-[18ch]">
          {titre}
        </h1>

        {localisation && (
          <p className="mt-5 text-xs font-medium tracking-[0.2em] uppercase text-[#f7f5f1]/55">
            {localisation}
          </p>
        )}
      </motion.div>

      <motion.div
        className="absolute bottom-8 right-[var(--gutter)] z-10 hidden lg:flex flex-col items-center gap-3"
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        aria-hidden="true"
      >
        <div
          className="w-px h-14 bg-gradient-to-b from-[#f7f5f1]/30 to-transparent"
          style={{ animation: 'scrollLine 2s cubic-bezier(0.65,0,0.35,1) infinite 1.6s' }}
        />
      </motion.div>
    </section>
  )
}
