"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

const steps = [
  ["01", "Brief",        "Appel ou formulaire détaillé. Compréhension des objectifs, des contraintes et de la cible."],
  ["02", "Analyse",      "Étude des plans, des références visuelles, définition de l'ambiance et du cadrage."],
  ["03", "Modélisation", "Construction du modèle 3D fidèle. Matériaux, végétation, environnement contextualisés."],
  ["04", "Rendu",        "Calcul lumière, post-traitement. Livraison du premier rendu pour validation dans la plateforme."],
  ["05", "Ajustements",  "Corrections directement annotées sur le rendu. Itérations rapides et traçables."],
  ["06", "Livraison",    "Tous les fichiers dans vos formats, dans votre espace client. Page de présentation générée."],
]

function ProcessStep({ num, title, text, isActive }: {
  num: string; title: string; text: string; isActive: boolean
}) {
  return (
    <div className="relative z-10 p-6 lg:p-8 text-center">
      <motion.div
        animate={isActive ? {
          borderColor: "#c8e84e",
          color: "#c8e84e",
          backgroundColor: "rgba(200,232,78,0.10)",
          boxShadow: "0 0 28px rgba(200,232,78,0.25)",
        } : {
          borderColor: "rgba(0,0,0,0.12)",
          color: "#b0b0b0",
          backgroundColor: "#f5f4f0",
          boxShadow: "0 0 0px rgba(200,232,78,0)",
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-16 h-16 rounded-full border flex items-center justify-center
                   text-lg font-bold mx-auto mb-6"
      >
        {num}
      </motion.div>

      <motion.h3
        animate={{ color: isActive ? "#0f0f0f" : "#b0b0b0" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-base font-semibold mb-3"
      >
        {title}
      </motion.h3>

      <motion.p
        animate={{ opacity: isActive ? 1 : 0.4, color: isActive ? "#6a6a6a" : "#9a9a9a" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-sm leading-relaxed max-w-[18ch] mx-auto"
      >
        {text}
      </motion.p>
    </div>
  )
}

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeCount, setActiveCount] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.65", "end 0.65"],
  })

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setActiveCount(Math.min(6, Math.ceil(latest * 6)))
  })

  return (
    /* Conteneur scrollable · 300vh pour que chaque 1/6 ≈ 50vh de scroll */
    <div ref={containerRef} style={{ height: "300vh" }} id="process">
      <div className="sticky top-0 bg-[#f5f4f0] py-24 sm:py-32 min-h-screen flex flex-col justify-center">
        <div className="max-w-[1400px] mx-auto px-[var(--gutter)] w-full">

          {/* Header */}
          <div className="text-center max-w-[50ch] mx-auto mb-16 sm:mb-20">
            <span className="label">Process</span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-[#0f0f0f]">
              Six étapes. Zéro surprise.
            </h2>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-0 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-8 left-[calc(100%/12)] right-[calc(100%/12)] h-px
                            bg-gradient-to-r from-transparent via-[rgba(200,232,78,0.12)] to-transparent" />

            {steps.map(([num, title, text], i) => (
              <ProcessStep
                key={num}
                num={num}
                title={title}
                text={text}
                isActive={i < activeCount}
              />
            ))}
          </div>

          {/* Scroll hint · disparaît quand tout est allumé */}
          <motion.p
            animate={{ opacity: activeCount >= 6 ? 0 : 0.35 }}
            transition={{ duration: 0.5 }}
            className="text-center text-xs text-[#6a6a6a] tracking-widest uppercase mt-16 select-none"
          >
            ↓ Continuez à défiler
          </motion.p>

        </div>
      </div>
    </div>
  )
}
