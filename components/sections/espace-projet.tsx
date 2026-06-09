export default function EspaceProjet() {
  return (
    <section id="espace-projet" className="py-24 sm:py-32 bg-[#ede9e2]" aria-labelledby="espace-title">
      <div className="max-w-[1400px] mx-auto px-[var(--gutter)]">

        {/* Header */}
        <div className="max-w-[60ch] mx-auto text-center mb-16">
          <span className="label reveal">Espace projet</span>
          <h2 id="espace-title" className="reveal delay-1 mt-5 mb-5 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.08] text-[#1c1c1c]">
            Votre projet mérite un espace à sa hauteur.
          </h2>
          <p className="reveal delay-2 text-lg font-light text-[#6b6b6b] leading-relaxed">
            Dès votre brief validé, je vous ouvre un espace projet privé. Brief interactif guidé,
            directions artistiques à valider, suivi en temps réel, livrables en téléchargement.
            <br className="hidden sm:block" />
            Pas d&apos;emails perdus. Pas de fichiers éparpillés.
          </p>
        </div>

        {/* Mockup navigateur */}
        <div className="reveal bg-[#f7f5f1] border border-[rgba(28,28,28,0.07)] rounded-2xl overflow-hidden
                        shadow-[0_16px_60px_rgba(28,28,28,0.07)]">
          {/* Barre navigateur */}
          <div className="bg-white px-5 py-3 flex items-center gap-3 border-b border-[rgba(28,28,28,0.06)]">
            <div className="flex gap-1.5">
              {['#ff5f57', '#febc2e', '#28c840'].map(c => (
                <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
              ))}
            </div>
            <div className="flex-1 bg-[#f7f5f1] rounded-lg px-4 py-1.5 text-xs text-[#9a9a9a] text-center max-w-sm mx-auto">
              Espace projet · Pool house · Bretagne
            </div>
          </div>

          {/* Contenu mockup */}
          <div className="p-6 sm:p-8 grid lg:grid-cols-[1fr_1.4fr] gap-8 items-start">
            {/* Infos projet */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-[#9a9a9a] mb-1 font-light">Projet en cours</p>
                  <h3 className="text-base font-semibold text-[#1c1c1c]">Pool house · Bretagne</h3>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1c1c1c]
                                 bg-[rgba(28,28,28,0.06)] px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1c1c1c]"
                    style={{ animation: 'pulse-dot 2s ease-in-out infinite' }} />
                  En cours
                </span>
              </div>

              {/* Étapes */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-xs text-[#9a9a9a] font-light">Étape 04 / 05 — Production</span>
                  <span className="text-xs font-medium text-[#1c1c1c]">80%</span>
                </div>
                <div className="flex gap-1.5">
                  {Array.from({ length: 5 }, (_, i) => (
                    <div key={i} className="flex-1 h-1 rounded-full"
                      style={{ background: i < 4 ? '#1c1c1c' : 'rgba(28,28,28,0.1)' }} />
                  ))}
                </div>
                <div className="flex justify-between mt-2">
                  {['Brief', 'Série', 'Direction', 'Production', 'Livraison'].map((label, i) => (
                    <span key={label} className={`text-[9px] font-light ${i < 4 ? 'text-[#1c1c1c]' : 'text-[#9a9a9a]'}`}>
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3">
                {[['Étape', '04 / Production'], ['Direction', 'Validée ✓'], ['Livraison', 'J + 4']].map(([l, v]) => (
                  <div key={l} className="bg-white border border-[rgba(28,28,28,0.07)] rounded-xl p-3">
                    <p className="text-[10px] text-[#9a9a9a] font-light mb-1">{l}</p>
                    <p className="text-xs font-medium text-[#1c1c1c]">{v}</p>
                  </div>
                ))}
              </div>

              {/* Guide contextuel */}
              <div className="bg-white border border-[rgba(28,28,28,0.08)] rounded-xl p-4">
                <p className="text-[10px] font-medium tracking-wider uppercase text-[#6b6b6b] mb-1.5">
                  Guide · Étape en cours
                </p>
                <p className="text-xs text-[#6b6b6b] leading-relaxed font-light">
                  Votre série est en production. Suivez l&apos;avancement de chaque image en temps réel,
                  et annotez directement les rendus dès qu&apos;ils sont disponibles.
                </p>
              </div>
            </div>

            {/* Rendu avec annotation */}
            <div className="relative rounded-xl overflow-hidden aspect-video">
              <img
                src="/projets/pool-house/Vue 2_final.png"
                alt="Aperçu d'un rendu dans l'espace projet privé · BenRaff Studio"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              {/* Annotations simulées */}
              <div className="absolute top-[35%] left-[38%] flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#f7f5f1] flex items-center justify-center
                                text-[11px] font-bold text-[#1c1c1c] shadow-lg flex-shrink-0">1</div>
                <div className="bg-[#f7f5f1] text-[#1c1c1c] text-[10px] font-semibold
                                px-2.5 py-1 rounded-lg shadow-lg whitespace-nowrap">
                  Lumière dorée parfaite
                </div>
              </div>
              <div className="absolute top-[58%] left-[60%] flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-white/80 backdrop-blur flex items-center justify-center
                                text-[11px] font-semibold text-[#1c1c1c] shadow flex-shrink-0">2</div>
                <div className="bg-white/80 backdrop-blur text-[#1c1c1c] text-[10px] font-medium
                                px-2.5 py-1 rounded-lg shadow whitespace-nowrap">
                  Cadrage validé ✓
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
