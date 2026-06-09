export default function Vision() {
  return (
    <section id="vision" className="bg-white py-24 sm:py-36" aria-labelledby="vision-title">
      <div className="max-w-[1400px] mx-auto px-[var(--gutter)]">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">
          {/* Portrait */}
          <div className="reveal-left relative aspect-[4/5] lg:aspect-auto lg:h-[620px] rounded-2xl overflow-hidden bg-[#ede9e2]">
            <img
              src="/Portrait benjamin Raffegeau.webp"
              alt="Benjamin Raffegeau, directeur artistique et perspectiviste, fondateur de BenRaff Studio à Rennes"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(28,28,28,0.5)] via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 bg-[rgba(247,245,241,0.95)] backdrop-blur-sm
                            border border-[rgba(28,28,28,0.06)] rounded-xl p-4 flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1c1c1c] flex-shrink-0"
                style={{ animation: 'pulse-dot 2s ease-in-out infinite' }} />
              <div className="text-sm text-[#1c1c1c]">
                <strong className="font-semibold">Benjamin Raffegeau</strong>
                <span className="text-[#6b6b6b]"> · Directeur artistique · Rennes</span>
              </div>
            </div>
          </div>

          {/* Texte */}
          <div>
            <span className="label reveal">Vision</span>
            <h2 id="vision-title" className="reveal delay-1 mt-5 mb-10 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.08] text-[#1c1c1c]">
              Un œil, pas un logiciel.
            </h2>
            <div className="flex flex-col gap-6 text-lg font-light text-[#6b6b6b] leading-relaxed">
              <p className="reveal delay-2">
                Je m&apos;appelle Benjamin. Je ne livre pas des fichiers 3D.
                Je construis des images qui déclenchent une décision.
              </p>
              <p className="reveal delay-2">
                Mon approche est celle d&apos;un photographe — lumière, cadrage, atmosphère, émotion.
                Chaque série est pensée pour faire ressentir quelque chose de précis chez votre client.
              </p>
              <p className="reveal delay-3">
                Je ne travaille pas en volume. Je travaille avec peu de projets à la fois,
                pour être vraiment présent à chaque étape du vôtre.
              </p>
            </div>
            <a
              href="/benjamin-raffegeau"
              className="reveal delay-4 inline-flex items-center gap-2 mt-10 text-xs font-medium tracking-[0.1em] uppercase
                         text-[#f7f5f1] bg-[#1c1c1c] px-7 py-3.5 rounded-full
                         hover:bg-[#333333] hover:-translate-y-0.5
                         transition-all duration-200"
            >
              En savoir plus sur moi
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
