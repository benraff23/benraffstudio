'use client'

import { useEffect, useState } from 'react'
import Reveal from './reveal'

const STALL_MS = 15000

// La maquette est montée dès l'ouverture de la page : elle est prête quand on
// arrive dessus en rendez-vous, plutôt que de faire attendre le client.
//
// Le voile de chargement se retire soit au `load` de l'iframe, soit au bout de
// STALL_MS : un embed lent mais fonctionnel ne doit jamais rester masqué par un
// écran d'erreur pendant un rendez-vous. Le repli se limite alors à une pastille
// « Réessayer » posée sur la maquette.
export default function MaquetteXr({ embedUrl, titre }: { embedUrl: string; titre: string }) {
  const [ready, setReady] = useState(false)
  const [stalled, setStalled] = useState(false)
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    if (ready) return
    const t = window.setTimeout(() => setStalled(true), STALL_MS)
    return () => window.clearTimeout(t)
  }, [ready, attempt])

  const retry = () => {
    setReady(false)
    setStalled(false)
    setAttempt((a) => a + 1)
  }

  return (
    <section className="bg-[#ede9e2] py-20 sm:py-28 px-[var(--gutter)]" aria-labelledby="xr-title">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <h2 id="xr-title" className="label mb-8">Maquette 3D interactive</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative w-full aspect-video overflow-hidden rounded-2xl sm:rounded-3xl
                          bg-[#1c1c1c] border border-[rgba(28,28,28,0.08)]">
            <iframe
              key={attempt}
              src={embedUrl}
              title={`Maquette 3D interactive - ${titre}`}
              className="absolute inset-0 w-full h-full border-0"
              allow="fullscreen; xr-spatial-tracking; gyroscope; accelerometer"
              allowFullScreen
              onLoad={() => setReady(true)}
            />

            {!ready && !stalled && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#1c1c1c]"
                   aria-live="polite">
                <div className="w-8 h-8 rounded-full border border-[rgba(247,245,241,0.15)]
                                border-t-[rgba(247,245,241,0.7)] animate-spin" />
                <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#f7f5f1]/40">
                  Chargement
                </span>
              </div>
            )}

            {!ready && stalled && (
              <button
                type="button"
                onClick={retry}
                className="absolute bottom-4 right-4 inline-flex items-center gap-2
                           text-[10px] font-medium tracking-[0.14em] uppercase
                           text-[#1c1c1c] bg-[#f7f5f1]/90 backdrop-blur-sm px-5 py-2.5 rounded-full
                           hover:bg-white transition-colors duration-200"
              >
                <svg width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M13.5 8a5.5 5.5 0 1 1-1.9-4.2M13 1.5V4h-2.5" stroke="currentColor"
                        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Réessayer
              </button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
