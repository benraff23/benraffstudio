// ─── Vision ─────────────────────────────────────────────────────────────────
// Section 2 du tunnel — "Un œil, pas un logiciel."

export default function Vision() {
  return (
    <section id="vision" className="bg-[#080808] py-24 sm:py-32" aria-labelledby="vision-title">
      <div className="max-w-[1400px] mx-auto px-[var(--gutter)]">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Portrait */}
          <div className="reveal-left relative aspect-[4/5] lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden bg-[#111111]">
            <img
              src="/Portrait benjamin Raffegeau.webp"
              alt="Benjamin Raffegeau, directeur artistique et perspectiviste, fondateur de BenRaff Studio à Rennes"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,8,8,0.65)] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 bg-[rgba(8,8,8,0.85)] backdrop-blur-xl border border-white/[0.06] rounded-2xl p-5 flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-[#c8e84e] flex-shrink-0" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
              <div className="text-sm text-[#b8b8b8]">
                <strong className="text-white font-semibold">Benjamin Raffegeau</strong><br />
                Directeur artistique &amp; perspectiviste · Rennes
              </div>
            </div>
          </div>

          {/* Texte */}
          <div>
            <span className="label reveal">Vision</span>
            <h2 id="vision-title" className="reveal delay-1 mt-4 mb-8 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-white">
              Un œil, pas un logiciel.
            </h2>
            <div className="flex flex-col gap-6 text-lg font-light text-[#9a9a9a] leading-relaxed">
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
              className="reveal delay-4 inline-flex items-center gap-2 mt-10 text-xs font-semibold tracking-wider uppercase
                         text-[#080808] bg-[#c8e84e] px-7 py-3.5 rounded-full
                         hover:bg-[#d4f05a] hover:-translate-y-0.5
                         hover:shadow-[0_8px_32px_rgba(200,232,78,0.35)]
                         transition-all duration-200"
            >
              En savoir plus sur moi
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
