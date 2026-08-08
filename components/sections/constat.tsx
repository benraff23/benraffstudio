import { Kicker, Visuel } from '@/components/ui/frame'

export default function Constat() {
  return (
    <section id="constat" className="bg-white py-24 sm:py-28 px-[var(--gutter)]">
      <div className="max-w-[1080px] mx-auto grid lg:grid-cols-2 gap-14 items-center reveal">
        <div>
          <Kicker>Le constat</Kicker>
          <h2 className="font-bold tracking-tight text-[clamp(1.85rem,3.2vw,2.5rem)] leading-tight mb-6">
            Votre conception est excellente. Encore faut-il que votre client la ressente.
          </h2>
          <p className="text-[1.03rem] font-light text-[#6b6b6b] mb-4 leading-relaxed">
            Vous dessinez un jardin qui va transformer un lieu de vie. Mais entre le croquis,
            le plan 2D et l&apos;imagination de votre client, il y a un vide. Il hoche la tête,
            il trouve ça &laquo;&nbsp;joli&nbsp;&raquo;, il demande à réfléchir. Il n&apos;hésite
            pas parce que votre projet est faible — il hésite parce qu&apos;il ne le voit pas encore.
          </p>
          <p className="text-[1.03rem] font-light text-[#6b6b6b] mb-6 leading-relaxed">
            C&apos;est exactement le moment où la vente se gagne ou se perd. Et c&apos;est là que
            je travaille : je transforme votre intention en une image que votre client ressent
            avant le premier coup de pelle. Une image assez juste pour qu&apos;il se projette,
            se reconnaisse chez lui, et signe.
          </p>
          <p className="font-bold tracking-tight text-[1.35rem] text-[#1c1c1c]">
            L&apos;image qui fait signer.
          </p>
        </div>
        {/* PLACEHOLDER — visuel comparatif "plan de composition seul" à produire */}
        <Visuel caption="Avant / Plan de composition seul" />
      </div>
    </section>
  )
}
