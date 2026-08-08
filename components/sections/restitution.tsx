import { Kicker, Visuel, PlanCallout } from '@/components/ui/frame'
import BrowserMock from '@/components/ui/browser-mock'

/** Éléments du mini-site. La maquette est un onglet de navigation
 *  comme les autres — pas un lien externe ni un téléchargement. */
const items: [string, boolean][] = [
  ['Plan 2D côté', true],
  ['Plan 3D', true],
  ['Images', true],
  ['Maquette', false],
  ['Vidéo', true],
]

export default function Restitution() {
  return (
    <section id="restitution" className="bg-white py-24 sm:py-28 px-[var(--gutter)]">
      <div className="max-w-[1080px] mx-auto reveal">
        <div className="text-center mb-12">
          <Kicker>La restitution</Kicker>
          <h2 className="font-bold tracking-tight text-[clamp(1.85rem,3.2vw,2.5rem)] leading-tight mb-4 max-w-[680px] mx-auto">
            Le tout livré sur un mini-site, à votre image de marque.
          </h2>
          <p className="text-[1.03rem] font-light text-[#6b6b6b] max-w-[640px] mx-auto leading-relaxed">
            Il réunit tous vos livrables dans un espace privé, ouvert en direct pendant votre
            rendez-vous et consultable par votre client à tête reposée ensuite. Votre logo,
            votre nom : c&apos;est votre marque que votre client a sous les yeux, pas la mienne.
          </p>
        </div>

        {/* PLACEHOLDER — URL du mini-site exemple à brancher */}
        <BrowserMock url="projet.benraffstudio.com/votre-projet">
          <div className="flex flex-col sm:flex-row min-h-[340px]">
            <div className="sm:w-[190px] bg-[#faf9f6] sm:border-r border-b sm:border-b-0 border-[rgba(28,28,28,0.08)] p-5 flex sm:flex-col gap-1 overflow-x-auto">
              {/* PLACEHOLDER — logo et nom du concepteur paysagiste */}
              <div className="hidden sm:block text-[0.6rem] font-semibold tracking-[0.18em] uppercase text-[#9a9a9a] mb-4">
                Votre logo
              </div>
              {items.map(([item, downloadable], i) => (
                <div
                  key={item}
                  className={`text-[0.82rem] px-3 py-2.5 rounded-sm flex justify-between items-center gap-3 whitespace-nowrap
                              ${i === 0 ? 'bg-[#1c1c1c] text-[#f7f5f1]' : 'text-[#6b6b6b]'}`}
                >
                  <span>{item}</span>
                  {downloadable && (
                    <span className={`text-[0.65rem] ${i === 0 ? 'text-[#f7f5f1]/50' : 'text-[#9a9a9a]'}`}>↓</span>
                  )}
                </div>
              ))}
            </div>
            <div className="flex-1 p-6">
              <Visuel ratio="aspect-video" className="mb-4">
                <PlanCallout top="20%" left="15%" label="Terrasse bois" />
                <PlanCallout top="55%" left="55%" label="Bassin à débordement" />
              </Visuel>
              <p className="text-[0.78rem] text-[#6b6b6b]">
                Plan de composition — jardin littoral
              </p>
            </div>
          </div>
        </BrowserMock>

        <div className="max-w-[640px] mx-auto mt-14 text-center">
          <h3 className="font-bold tracking-tight text-[1.6rem] mb-4">Le moment du rendez-vous.</h3>
          <p className="text-[1.03rem] font-light text-[#6b6b6b] mb-4 leading-relaxed">
            Face à votre client, vous ouvrez le mini-site en direct. Les images signature
            défilent, la maquette se parcourt, le projet prend vie sous ses yeux. Vous ne
            présentez plus un plan qu&apos;il faut expliquer — vous montrez un jardin
            qu&apos;il reconnaît déjà comme le sien.
          </p>
          <p className="text-[1.03rem] font-light text-[#6b6b6b] leading-relaxed">
            C&apos;est là que la conversation change de nature. On ne parle plus de
            &laquo;&nbsp;est-ce que ça vous plaît&nbsp;&raquo;, on parle de
            &laquo;&nbsp;quand est-ce qu&apos;on commence&nbsp;&raquo;. Votre expertise reste
            au centre ; je lui donne simplement la présentation qu&apos;elle mérite.
          </p>
        </div>
      </div>
    </section>
  )
}
