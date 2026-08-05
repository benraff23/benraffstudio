import { Kicker } from '@/components/ui/frame'

/** Ces 4 objections alimentent aussi le schema FAQPage de la homepage. */
export const roiObjections: [string, string][] = [
  [
    'C’est un coût en plus sur mon projet ?',
    'Le Book de Présentation Client s’intègre à votre chiffrage, pas à côté. Un seul chantier supplémentaire signé grâce à une présentation qui marque suffit largement à couvrir son coût — le reste, c’est de la marge sur votre pouvoir de conviction.',
  ],
  [
    'Mes clients ont-ils vraiment besoin de ça pour signer ?',
    'Vos clients investissent souvent plusieurs dizaines de milliers d’euros dans un projet qu’ils ne peuvent pas voir avant travaux. Moins ils se projettent, plus ils hésitent, demandent des révisions, ou comparent sur le prix plutôt que sur la vision. Un visuel qui fait ressentir le lieu déplace la conversation du prix vers la valeur.',
  ],
  [
    'Combien de temps ça ajoute avant mon rendez-vous client ?',
    'Le brief interactif est pensé pour être rempli en quelques minutes à partir de documents que vous avez déjà — relevé, lieu du projet, plan de plantation, listing mobilier et photos du terrain. Vous ne repartez pas de zéro, vous transmettez ce qui existe déjà dans votre dossier de conception.',
  ],
  [
    'Pourquoi un rendu aussi réaliste, alors qu’un rendu SketchUp classique ferait l’affaire ?',
    'Un rendu SketchUp brut reste un plan en volume : utile pour vérifier une implantation, mais il documente, il ne convainc pas. Le photoréalisme change la nature de l’échange avec votre client — il ne regarde plus un logiciel, il regarde son futur jardin. Et contrairement à une idée reçue, ce niveau de finition ne coûte pas plus cher : mon pipeline SketchUp + D5 Render, complété par une retouche assistée par IA générative, supprime l’essentiel du travail manuel qui rendait autrefois le photoréalisme long et coûteux à produire.',
  ],
]

export default function Roi() {
  return (
    <section id="roi" className="bg-white py-24 sm:py-28 px-[var(--gutter)]">
      <div className="max-w-[1080px] mx-auto reveal">
        <Kicker>Ce que ça change pour votre chiffre d&apos;affaires</Kicker>
        <h2 className="font-bold tracking-tight text-[clamp(1.85rem,3.2vw,2.5rem)] leading-tight mb-10 max-w-[640px]">
          Un devis qui ne se signe pas coûte plus cher qu&apos;une image qui convainc.
        </h2>

        {roiObjections.map(([q, a], i, arr) => (
          <div
            key={q}
            className={`py-8 border-t border-[rgba(28,28,28,0.1)] ${i === arr.length - 1 ? 'border-b' : ''}`}
          >
            <h3 className="font-bold tracking-tight text-[1.15rem] mb-3">&laquo;&nbsp;{q}&nbsp;&raquo;</h3>
            <p className="text-[#6b6b6b] font-light max-w-[640px] leading-relaxed">{a}</p>
          </div>
        ))}

        <div className="bg-[#1c1c1c] p-9 rounded-sm mt-10">
          <p className="text-[#f7f5f1]/80 text-[1.05rem] font-light leading-relaxed">
            <strong className="text-[#f7f5f1] font-semibold">Le calcul est simple :</strong> le coût
            d&apos;un Book de Présentation Client se compare à la marge d&apos;un seul chantier — pas à celle de tous vos
            projets de l&apos;année. Une présentation qui fait signer plus vite, avec moins
            d&apos;allers-retours, se rentabilise dès le premier &laquo;&nbsp;oui&nbsp;&raquo;
            qu&apos;elle accélère.
          </p>
        </div>
      </div>
    </section>
  )
}
