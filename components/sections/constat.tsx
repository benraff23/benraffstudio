import { Kicker, Visuel } from '@/components/ui/frame'

export default function Constat() {
  return (
    <>
      {/* Qualification — bandeau court */}
      <section className="bg-white py-16 px-[var(--gutter)] text-center border-b border-[rgba(28,28,28,0.08)]">
        <div className="max-w-[640px] mx-auto reveal">
          <p className="text-[1.15rem] font-light text-[#6b6b6b] mb-3">
            Vous êtes concepteur paysagiste ?
          </p>
          <p className="text-[1.15rem] font-light text-[#6b6b6b] mb-7">
            Vous êtes convaincu qu&apos;une présentation réussie en rendez-vous client
            fait toute la différence ?
          </p>
          <h2 className="font-bold tracking-tight text-2xl text-[#1c1c1c]">
            Alors Le Book de Présentation Client est fait pour vous.
          </h2>
        </div>
      </section>

      {/* Constat */}
      <section id="constat" className="bg-white py-24 sm:py-28 px-[var(--gutter)]">
        <div className="max-w-[1080px] mx-auto grid lg:grid-cols-2 gap-14 items-center reveal">
          <div>
            <Kicker>Le constat</Kicker>
            <h2 className="font-bold tracking-tight text-[clamp(1.85rem,3.2vw,2.5rem)] leading-tight mb-6">
              Un plan de composition ne suffit plus à emporter la décision.
            </h2>
            <p className="text-[1.03rem] font-light text-[#6b6b6b] mb-4 leading-relaxed">
              Vos clients peinent à se projeter dans un plan 2D ou un carnet de plantation.
              Ils imaginent difficilement le volume d&apos;une haie à maturité,
              l&apos;ambiance d&apos;une terrasse au crépuscule, l&apos;échelle réelle
              d&apos;un bassin à débordement.
            </p>
            <p className="text-[1.03rem] font-light text-[#6b6b6b] leading-relaxed">
              Le Book de Présentation Client transforme votre esquisse en jardin qu&apos;on peut
              déjà habiter du regard — au moment précis où vous défendez votre projet
              et votre chiffrage.
            </p>
          </div>
          {/* PLACEHOLDER — visuel comparatif "plan de composition seul" à produire */}
          <Visuel caption="Avant / Plan de composition seul" />
        </div>
      </section>
    </>
  )
}
