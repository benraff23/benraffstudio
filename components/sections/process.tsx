import { Kicker } from '@/components/ui/frame'

const steps: [string, string, string][] = [
  ['01', 'Le brief', 'Tout commence par un brief. On fait le point ensemble sur votre projet : le lieu, le relevé, le plan de plantation, les matériaux, le mobilier, les photos de l’existant. Plus votre relevé est précis, plus le métré et l’image le seront — c’est votre matière première.'],
  ['02', 'L’étude et la production', 'Ensuite, j’étudie la composition et je construis votre projet en 3D, image par image, avec le même soin que vous mettez dans votre conception. Le photoréalisme se travaille en post-production, où j’utilise les outils les plus avancés, l’IA comprise, comme un amplificateur de réalisme au service de votre projet.'],
  ['03', 'La livraison', 'À la livraison, vous récupérez votre Book complet, prêt pour le rendez-vous. Chaque livrable est aussi téléchargeable individuellement, quand vous en avez besoin.'],
]

export default function Process() {
  return (
    <section id="process" className="bg-[#1c1c1c] py-24 sm:py-28 px-[var(--gutter)]">
      <div className="max-w-[1080px] mx-auto">
        <div className="mb-10 reveal">
          <Kicker onDark>Comment ça se construit</Kicker>
          <h2 className="font-bold tracking-tight text-[clamp(1.85rem,3.2vw,2.5rem)] leading-tight text-[#f7f5f1] max-w-[640px]">
            De votre relevé à votre rendez-vous, sans friction.
          </h2>
        </div>

        <div className="reveal">
          {steps.map(([num, title, desc], i, arr) => (
            <div
              key={num}
              className={`grid grid-cols-[56px_1fr] sm:grid-cols-[70px_1fr] gap-6 sm:gap-8 py-8
                          border-t border-[rgba(247,245,241,0.12)]
                          ${i === arr.length - 1 ? 'border-b' : ''}`}
            >
              <div className="font-bold tracking-tight text-[1.6rem] text-[#f7f5f1]/35">{num}</div>
              <div>
                <h3 className="font-bold tracking-tight text-[1.2rem] text-[#f7f5f1] mb-2">{title}</h3>
                <p className="text-[#f7f5f1]/65 font-light max-w-[560px] leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="reveal mt-10 text-[#f7f5f1]/65 font-light max-w-[640px] leading-relaxed">
          Et parce que je travaille seul, sous mon nom, vous avez un seul interlocuteur du début
          à la fin. Pas d&apos;équipe qui se renvoie la balle, pas de brief qui se dilue.
          Juste un suivi personnel et une exigence constante.
        </p>
      </div>
    </section>
  )
}
