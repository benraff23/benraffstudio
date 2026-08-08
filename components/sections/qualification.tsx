/** Bandeau de qualification — deux questions filtrantes juste après le hero. */
export default function Qualification() {
  return (
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
  )
}
