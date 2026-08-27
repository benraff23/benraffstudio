import { Kicker } from '@/components/ui/frame'

/** Questions réelles, réponses sans chiffre inventé et sans tarif. */
export const homeFaq: [string, string][] = [
  [
    'Combien coûte un Book de Présentation Client ?',
    'Sur devis, selon l’ampleur du projet. Le chiffrage dépend du nombre de scènes, de la présence d’un bassin, de la surface du terrain et des livrables retenus. Je vous donne un montant ferme après le brief, avant toute production.',
  ],
  [
    'Quel délai faut-il prévoir avant mon rendez-vous client ?',
    'Le délai se compte en jours, pas en semaines, à condition que le brief soit complet. Transmettez-moi vos plans et votre listing matériaux, et je vous confirme une date de livraison ferme dès le lancement.',
  ],
  [
    'Que dois-je fournir pour démarrer ?',
    'Vos plans, le lieu du projet, votre listing mobilier et matériaux (type, désignation, référence, quantité, finition) et des photos du terrain avant travaux. Ce sont des documents que vous avez déjà dans votre dossier de conception.',
  ],
  [
    'Vous travaillez avec plusieurs professionnels sur un même secteur ?',
    'Je travaille avec peu de projets à la fois, ce qui limite naturellement le nombre de confrères accompagnés sur une même zone. Si l’exclusivité géographique est un sujet pour vous, parlons-en dès le premier échange.',
  ],
  [
    'Est-ce que je peux utiliser les images dans mes propres supports ?',
    'Oui. Les livrables sont téléchargeables en haute définition et vous êtes libre de les utiliser dans vos devis, votre site, vos réseaux sociaux et vos supports de salon.',
  ],
  [
    'Vous intervenez seulement en Bretagne ?',
    'Non. Je suis basé à Rennes mais je travaille dans toute la France, en 100 % à distance : brief en ligne, échanges en visio, livraison sur un mini-site dédié.',
  ],
]

export default function Faq() {
  return (
    <section id="faq" className="bg-[#f7f5f1] py-24 sm:py-28 px-[var(--gutter)]">
      <div className="max-w-[820px] mx-auto reveal">
        <Kicker>Questions fréquentes</Kicker>
        <h2 className="font-bold tracking-tight text-[clamp(1.85rem,3.2vw,2.5rem)] leading-tight mb-10">
          Ce qu&apos;on me demande avant de démarrer.
        </h2>
        {homeFaq.map(([q, a], i, arr) => (
          <details
            key={q}
            className={`group py-6 border-t border-[rgba(28,28,28,0.12)] ${i === arr.length - 1 ? 'border-b' : ''}`}
          >
            <summary className="font-bold tracking-tight text-[1.1rem] cursor-pointer list-none flex justify-between items-center gap-6">
              {q}
              <span className="text-[#6b6b6b] text-xl flex-shrink-0 group-open:rotate-45 transition-transform duration-200">
                +
              </span>
            </summary>
            <p className="mt-4 text-[#6b6b6b] font-light leading-relaxed">{a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
