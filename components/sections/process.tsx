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
          borderColor: "rgba(247,245,241,0.7)",
          color: "#f7f5f1",
          backgroundColor: "rgba(247,245,241,0.07)",
        } : {
          borderColor: "rgba(247,245,241,0.1)",
          color: "rgba(247,245,241,0.25)",
          backgroundColor: "rgba(247,245,241,0)",
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-12 h-12 rounded-full border flex items-center justify-center
                   text-sm font-light mx-auto mb-5 tracking-widest"
      >
        {num}
      </motion.div>

      <motion.h3
        animate={{ color: isActive ? "#f7f5f1" : "rgba(247,245,241,0.25)" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-sm font-medium mb-2 tracking-wide"
      >
        {title}
      </motion.h3>

      <motion.p
        animate={{ opacity: isActive ? 0.55 : 0.15 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-xs text-[#f7f5f1] leading-relaxed max-w-[16ch] mx-auto font-light"
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
    <div ref={containerRef} style={{ height: "250vh" }} id="process">
      <div className="sticky top-0 bg-[#1c1c1c] py-24 sm:py-32 min-h-screen flex flex-col justify-center">
        <div className="max-w-[1400px] mx-auto px-[var(--gutter)] w-full">

          {/* Header */}
          <div className="text-center max-w-[52ch] mx-auto mb-16 sm:mb-20">
            <span className="label label-on-dark">Process</span>
            <h2 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.08] text-[#f7f5f1]">
              Comment on travaille ensemble.
            </h2>
            <p className="mt-4 text-base font-light text-[#f7f5f1]/45 leading-relaxed">
              Pas de devis envoyé dans le vide. Pas d&apos;aller-retour sans fin.
              Un process pensé pour que vous sachiez exactement où on en est à chaque moment.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-0 relative">
            {/* Ligne de connexion desktop */}
            <div className="hidden lg:block absolute top-6 left-[calc(100%/10)] right-[calc(100%/10)] h-px
                            bg-gradient-to-r from-transparent via-[rgba(247,245,241,0.08)] to-transparent" />
            {steps.map(([num, title, text], i) => (
              <ProcessStep key={num} num={num} title={title} text={text} isActive={i < activeCount} />
            ))}
          </div>

          <motion.p
            animate={{ opacity: activeCount >= TOTAL ? 0 : 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-center text-[10px] text-[#f7f5f1] tracking-[0.2em] uppercase mt-16 select-none font-light"
          >
            ↓ Continuez à défiler
          </motion.p>

        </div>
      </div>
    </div>
  )
}
