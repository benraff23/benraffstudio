"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

const steps = [
  ["00", "Espace créé",          "Vous remplissez votre brief en ligne : type de projet, vues, surfaces, références visuelles, deadline et budget."],
  ["01", "Brief",                "Benjamin analyse votre brief. Il peut vous poser des questions directement via la plateforme ; vous répondez en ligne."],
  ["02", "Proposition",          "Vous recevez la proposition commerciale (PDF) avec le détail des prestations, le tarif et le délai. Notification email."],
  ["03", "Validation & Acompte", "Vous validez la proposition ou demandez des ajustements, puis réglez l'acompte via un lien de paiement sécurisé."],
  ["04", "Démarrage",            "Réception de l'acompte confirmée. Le projet démarre officiellement."],
  ["05", "Clay Render",          "Le modèle 3D non texturé est soumis à validation : proportions, angles de vue et composition avant rendu final."],
  ["06", "Rendus",               "Les premiers rendus sont disponibles. Annotez directement sur les images. Itérations jusqu'à validation complète."],
  ["07", "Paiement solde",       "Vous réglez le solde via un lien de paiement sur la plateforme avant de recevoir vos livrables finaux."],
  ["08", "Livraison finale",     "Fichiers haute résolution téléchargeables depuis votre espace. Visites virtuelles et vidéos inclus si applicable."],
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
    /* 400vh → ~44vh par étape */
    <div ref={containerRef} style={{ height: "400vh" }} id="process">
      <div className="sticky top-0 bg-[#1e1e1e] py-24 sm:py-32 min-h-screen flex flex-col justify-center">
        <div className="max-w-[1400px] mx-auto px-[var(--gutter)] w-full">

          {/* Header */}
          <div className="text-center max-w-[50ch] mx-auto mb-16 sm:mb-20">
            <span className="label">Process</span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-white">
              Neuf étapes. Zéro surprise.
            </h2>
            <p className="mt-4 text-base font-light text-[#9a9a9a]">
              Du brief à la livraison finale, tout se passe sur votre espace client. Pas d&apos;emails perdus, pas d&apos;ambiguïté.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-9 gap-0 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-7 left-[calc(100%/18)] right-[calc(100%/18)] h-px
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
