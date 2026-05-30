const WA_URL =
  'https://wa.me/33624517641?text=Bonjour%20Benjamin%2C%20je%20souhaite%20discuter%20d%27un%20projet%20de%20visualisation%20architecturale.'

const avantages = [
  {
    num: '01',
    title: 'La personne qui vous lit fait vos images',
    text: "Je réponds à vos messages, je construis le modèle, je fais le rendu, je livre. Vous ne parlez qu'à moi — et c'est moi qui tiens le crayon.",
  },
  {
    num: '02',
    title: 'Premier rendu en 72h',
    text: "Garanti dès réception d'un brief complet. Si ce délai n'est pas tenu, le rendu est offert.",
  },
  {
    num: '03',
    title: 'Retravail sans frais',
    text: "Si le premier rendu ne correspond pas à votre brief, on le refait. Sans supplément, sans discussion.",
  },
]

export default function LaunchOffer() {
  return (
    <section
      id="offre-lancement"
      className="py-24 sm:py-32 bg-[#f5f4f0] relative overflow-hidden"
      aria-label="Offre de lancement"
    >
      {/* Fond décoratif */}
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(200,232,78,0.06) 0%, transparent 70%)' }} />

      <div className="max-w-[1400px] mx-auto px-[var(--gutter)] relative">

        {/* Header centré */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#c8e84e]"
                 style={{ animation: 'pulse 2s ease-in-out infinite' }} />
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-[#6b8a00]">
              Studio en lancement · 3 créneaux disponibles
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-[#0f0f0f] mb-6 max-w-[22ch] mx-auto">
            Avant que l&apos;agenda soit plein.
          </h2>
          <p className="text-lg font-light text-[#6a6a6a] leading-relaxed max-w-[54ch] mx-auto">
            Je vis de mes images — pas d&apos;équipe, pas d&apos;ambition de croissance.
            Juste moi, mes outils, et l&apos;obsession de livrer un rendu qui fait son travail.
            C&apos;est aussi pour ça que chaque projet compte.
          </p>
        </div>

        {/* Compteur de créneaux */}
        <div className="flex items-center justify-center gap-4 mb-14">
          {[1, 2, 3].map((n) => (
            <div key={n} className="flex flex-col items-center gap-2">
              <div className={`w-10 h-10 rounded-full border flex items-center justify-center text-xs font-semibold
                ${n <= 2
                  ? 'border-black/[0.12] bg-black/[0.04] text-[#5a5a5a] line-through'
                  : 'border-[#c8e84e] bg-[rgba(200,232,78,0.1)] text-[#6b8a00]'
                }`}>
                {n}
              </div>
              <span className="text-[10px] tracking-widest uppercase text-[#5a5a5a]">
                {n <= 2 ? 'Réservé' : 'Libre'}
              </span>
            </div>
          ))}
          <div className="h-px w-20 bg-black/[0.08] hidden sm:block" />
          <span className="text-xs text-[#6a6a6a] hidden sm:block">Livraison en juin</span>
        </div>

        {/* Avantages */}
        <div className="grid sm:grid-cols-3 gap-4 mb-14">
          {avantages.map(({ num, title, text }) => (
            <div key={num}
                 className="bg-[#e8e5df] border border-black/[0.08] rounded-2xl p-7
                            hover:border-black/[0.15] hover:bg-[#dedad4] transition-all duration-300">
              <span className="text-xs font-medium tracking-[0.15em] uppercase text-[#6b8a00] mb-4 block">
                {num}
              </span>
              <h3 className="text-base font-semibold text-[#0f0f0f] mb-2 leading-snug">{title}</h3>
              <p className="text-sm text-[#5a5a5a] leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-xs font-semibold tracking-wider uppercase
                       text-white bg-[#25D366] px-8 py-4 rounded-full
                       hover:bg-[#20b957] hover:-translate-y-0.5
                       hover:shadow-[0_8px_32px_rgba(37,211,102,0.35)]
                       transition-all duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Réserver un créneau
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase
                       text-[#080808] bg-[#c8e84e] px-8 py-4 rounded-full
                       hover:bg-[#d4f05a] hover:-translate-y-0.5
                       hover:shadow-[0_8px_32px_rgba(200,232,78,0.35)]
                       transition-all duration-200"
          >
            Décrire mon projet
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Note de transparence */}
        <p className="text-center text-xs text-[#6a6a6a] mt-8 max-w-[44ch] mx-auto leading-relaxed">
          Perspectiviste indépendant basé à Rennes. Je travaille seul, avec intention.
          Une fois ces créneaux occupés, les délais s&apos;allongent naturellement.
        </p>
      </div>
    </section>
  )
}
