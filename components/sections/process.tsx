"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

const steps = [
  ["01", "Vous démarrez votre projet",        "Vous m'envoyez votre brief via le formulaire. Je prends connaissance de votre projet et vous envoie un magic link vers votre espace projet privé."],
  ["02", "On définit la série ensemble",       "Dans votre espace, vous accédez à un brief interactif guidé. Je vous accompagne question par question pour comprendre votre projet, vos clients, et ce que vous voulez leur faire ressentir."],
  ["03", "Je vous propose une direction",      "Sur la base de votre brief, je définis le nombre d'images, les angles, les ambiances, les livrables — fixes ou vidéo. Vous validez l'intention avant que je produise la moindre image."],
  ["04", "Je produis votre série",             "Vous suivez l'avancement en temps réel dans votre espace projet. Chaque étape est visible. Rien ne se passe dans le noir."],
  ["05", "Vous recevez vos livrables",         "Votre série est disponible en téléchargement dans votre espace, en haute définition, dans les formats adaptés à vos supports de présentation."],
]

const TOTAL = steps.length

function ProcessStep({ num, title, text, isActive }: {
  num: string; title: string; text: string; isActive: boolean
}) {
  return (
    <div className="relative z-10 p-4 lg:p-6 text-center">
      <motion.div
        animate={isActive ? {
          borderColor: "#c8e84e",
          color: "#c8e84e",
          backgroundColor: "rgba(200,232,78,0.10)",
          boxShadow: "0 0 28px rgba(200,232,78,0.25)",
        } : {
          borderColor: "rgba(0,0,0,0.12)",
          color: "#b0b0b0",
          backgroundColor: "#1e1e1e",
          boxShadow: "0 0 0px rgba(200,232,78,0)",
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-14 h-14 rounded-full border flex items-center justify-center
                   text-base font-bold mx-auto mb-5"
      >
        {num}
      </motion.div>

      <motion.h3
        animate={{ color: isActive ? "#ffffff" : "#b0b0b0" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-sm font-semibold mb-2"
      >
        {title}
      </motion.h3>

      <motion.p
        animate={{ opacity: isActive ? 1 : 0.4, color: isActive ? "#9a9a9a" : "#9a9a9a" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-xs leading-relaxed max-w-[16ch] mx-auto"
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
    setActiveCount(Math.min(TOTAL, Math.ceil(latest * TOTAL)))
  })

  return (
    /* 250vh → ~50vh par étape */
    <div ref={containerRef} style={{ height: "250vh" }} id="process">
      <div className="sticky top-0 bg-[#1e1e1e] py-24 sm:py-32 min-h-screen flex flex-col justify-center">
        <div className="max-w-[1400px] mx-auto px-[var(--gutter)] w-full">

          {/* Header */}
          <div className="text-center max-w-[52ch] mx-auto mb-16 sm:mb-20">
            <span className="label">Process</span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-white">
              Comment on travaille ensemble.
            </h2>
            <p className="mt-4 text-base font-light text-[#9a9a9a]">
              Pas de devis envoyé dans le vide. Pas d&apos;aller-retour sans fin. Un process pensé pour que vous sachiez exactement où on en est à chaque moment.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-0 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-7 left-[calc(100%/10)] right-[calc(100%/10)] h-px
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

          {/* Scroll hint */}
          <motion.p
            animate={{ opacity: activeCount >= TOTAL ? 0 : 0.35 }}
            transition={{ duration: 0.5 }}
            className="text-center text-xs text-[#9a9a9a] tracking-widest uppercase mt-16 select-none"
          >
            ↓ Continuez à défiler
          </motion.p>

        </div>
      </div>
    </div>
  )
}
