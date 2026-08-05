import { Kicker } from '@/components/ui/frame'

const steps: [string, string, string][] = [
  ['01', 'Brief interactif', 'Vous transmettez relevé, lieu du projet, plan de plantation, listing mobilier et matériaux, et photos du terrain avant travaux, via un formulaire guidé. Tout existe déjà dans votre dossier de conception.'],
  ['02', 'Étude de composition', 'Sélection des points de vue et des ambiances qui serviront le mieux votre projet. Vous validez la direction avant que je produise la moindre image.'],
  ['03', 'Production', 'Modélisation, rendus haute-définition, post-production assistée par IA générative pour un réalisme maximal.'],
  ['04', 'Livraison', 'Votre mini-site dédié est prêt, ouvert en direct pendant votre rendez-vous de présentation. Chaque livrable reste téléchargeable pour votre devis.'],
]

export default function Process() {
  return (
    <section id="process" className="bg-[#1c1c1c] py-24 sm:py-28 px-[var(--gutter)]">
      <div className="max-w-[1080px] mx-auto">
        <div className="mb-10 reveal">
          <Kicker onDark>Comment ça se construit</Kicker>
          <h2 className="font-bold tracking-tight text-[clamp(1.85rem,3.2vw,2.5rem)] leading-tight text-[#f7f5f1] max-w-[640px]">
            De votre relevé à la présentation client.
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
      </div>
    </section>
  )
}
