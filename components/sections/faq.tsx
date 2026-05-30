'use client'

import { useState } from 'react'

const faqs = [
  {
    question: "Combien coûte un rendu 3D d'architecture à Rennes ?",
    answer:
      "Le tarif varie selon la complexité du projet, le nombre de vues souhaitées et le format de livraison (rendu fixe, animation, visite virtuelle). Chaque projet est unique : contactez-moi pour recevoir un devis personnalisé sous 24h.",
  },
  {
    question: "Quelle est la différence entre un perspectiviste 3D et une image générée par IA ?",
    answer:
      "Un perspectiviste prend des décisions conscientes : choix du cadrage, de la hauteur de point de vue, de l'heure de la journée, du rapport entre végétation et minéral, de la profondeur de champ. Chaque choix guide le regard et provoque une émotion précise. L'IA génère une image plausible sans intention : les incohérences architecturales et l'absence de maîtrise narrative la rendent difficilement présentable devant un investisseur ou un comité d'architectes.",
  },
  {
    question: "Quel délai pour recevoir un premier rendu 3D ?",
    answer:
      "Le premier rendu est livré en 72 heures après réception du brief complet (plans, références visuelles, intentions). Les projets plus complexes (animations vidéo, visites virtuelles 360°) font l'objet d'un planning défini ensemble dès le départ, sans surprise.",
  },
  {
    question: "Travaillez-vous uniquement à Rennes ou dans toute la France ?",
    answer:
      "Basé à Rennes, j'interviens pour des clients dans toute la France et à l'international. La collaboration se déroule entièrement à distance via ma plateforme dédiée : brief, suivi d'avancement, annotations directes sur les rendus et livraison finale, sans réunion physique nécessaire.",
  },
  {
    question: "Pour quels types de projets faites-vous appel à un perspectiviste ?",
    answer:
      "J'accompagne architectes, promoteurs immobiliers, paysagistes et maîtres d'ouvrage sur : aménagements extérieurs (terrasses, piscines, jardins, pool-house), architecture résidentielle et tertiaire, concours d'architecture, commercialisation de programmes neufs.",
  },
  {
    question: "Proposez-vous des visites virtuelles 360° à Rennes ?",
    answer:
      "Oui. Je réalise des visites virtuelles interactives à 360° pour des espaces non encore construits. Vos clients naviguent librement dans le projet, ressentent les volumes et valident les choix architecturaux avant la pose de la première pierre.",
  },
]

// ─── Schema FAQPage JSON-LD ───────────────────────────────────────────────────
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: answer,
    },
  })),
}

// ─── Accordion item ───────────────────────────────────────────────────────────
function FaqItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-black/[0.1]">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-start justify-between gap-6 py-6 text-left group"
        aria-expanded={open}
      >
        <span className="flex items-start gap-4">
          <span className="text-xs font-medium tabular-nums text-[#6b8a00] mt-0.5 flex-shrink-0">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-base font-semibold text-[#0f0f0f] group-hover:text-[#4a4a4a] transition-colors leading-snug">
            {question}
          </span>
        </span>
        <span
          className="flex-shrink-0 w-6 h-6 rounded-full border border-black/20 flex items-center justify-center transition-all duration-300 mt-0.5"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M5 1v8M1 5h8" stroke="#c8e84e" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      {open && (
        <div className="pb-6 pl-10 pr-6">
          <p className="text-base font-light text-[#6a6a6a] leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

// ─── Section exportée ─────────────────────────────────────────────────────────
export default function Faq() {
  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#f5f4f0]" aria-label="Questions fréquentes">
      {/* Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-[1400px] mx-auto px-[var(--gutter)]">
        <div className="grid lg:grid-cols-[5fr_7fr] gap-16 lg:gap-24">
          {/* Left */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="label reveal">Questions fréquentes</span>
            <h2 className="reveal delay-1 mt-4 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-[#0f0f0f]">
              Tout ce que vous voulez savoir.
            </h2>
            <p className="reveal delay-2 mt-6 text-lg font-light text-[#6a6a6a] leading-relaxed">
              Perspectiviste basé à Rennes, j&apos;accompagne des projets d&apos;architecture dans
              toute la France. Retrouvez ci-dessous les réponses aux questions les plus courantes.
            </p>
            <a
              href="#contact"
              className="reveal delay-3 inline-flex items-center gap-2 mt-8 text-xs font-semibold tracking-wider uppercase
                         text-[#080808] bg-[#c8e84e] px-7 py-3.5 rounded-full
                         hover:bg-[#d4f05a] hover:-translate-y-0.5
                         hover:shadow-[0_8px_32px_rgba(200,232,78,0.35)]
                         transition-all duration-200"
            >
              Poser une question
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Right · accordion */}
          <div className="divide-y divide-black/[0.1] border-t border-black/[0.1]">
            {faqs.map(({ question, answer }, i) => (
              <FaqItem key={question} question={question} answer={answer} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
