import { Kicker } from '@/components/ui/frame'

/** Ces objections alimentent aussi le schema FAQPage de la homepage. */
export const objections: [string, string][] = [
  [
    'Je fais déjà mes rendus dans SketchUp, pourquoi payer plus ?',
    'Un rendu SketchUp montre une volumétrie. Une image signature fait ressentir un lieu. La différence, c’est celle entre « votre client comprend le projet » et « votre client tombe amoureux du projet ». Sur un chantier à fort budget, cette différence se compte en signatures, pas en euros de rendu.',
  ],
  [
    'L’IA, ça ne va pas dénaturer mon travail ?',
    'Au contraire. Je ne demande jamais à une machine d’inventer votre jardin — c’est le vôtre, dessiné par vous. L’IA intervient uniquement en post-production, comme un outil de réalisme, pour pousser la matière, la lumière, l’atmosphère. Votre conception reste intacte, sublimée.',
  ],
  [
    'Est-ce que le métré m’engage sur les quantités ?',
    'Je vous livre des métrés indicatifs, calculés à partir de votre relevé. Ils vous donnent une base fiable pour dimensionner vos commandes, avec la marge de sécurité d’usage. Vous restez maître de vos achats — je vous évite simplement de commander dans le flou.',
  ],
]

export default function Objections() {
  return (
    <section id="objections" className="bg-white py-24 sm:py-28 px-[var(--gutter)]">
      <div className="max-w-[1080px] mx-auto reveal">
        <Kicker>Objections</Kicker>
        <h2 className="font-bold tracking-tight text-[clamp(1.85rem,3.2vw,2.5rem)] leading-tight mb-10 max-w-[640px]">
          Ce que vous vous demandez peut-être.
        </h2>

        {objections.map(([q, a], i, arr) => (
          <div
            key={q}
            className={`py-8 border-t border-[rgba(28,28,28,0.1)] ${i === arr.length - 1 ? 'border-b' : ''}`}
          >
            <h3 className="font-bold tracking-tight text-[1.15rem] mb-3">&laquo;&nbsp;{q}&nbsp;&raquo;</h3>
            <p className="text-[#6b6b6b] font-light max-w-[640px] leading-relaxed">{a}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
