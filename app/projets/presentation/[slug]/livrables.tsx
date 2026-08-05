'use client'

import { useRef, useState, useEffect } from 'react'
import Reveal from './reveal'

export interface Livrable {
  href: string
  label: string
  format: string
}

export default function Livrables({ items }: { items: Livrable[] }) {
  const [done, setDone] = useState<string | null>(null)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const flag = (href: string) => {
    window.clearTimeout(timer.current)
    setDone(href)
    timer.current = window.setTimeout(() => setDone(null), 2400)
  }

  return (
    <section className="bg-[#ffffff] py-20 sm:py-28 px-[var(--gutter)]" aria-labelledby="livrables-title">
      <div className="max-w-[1000px] mx-auto">
        <Reveal>
          <h2 id="livrables-title" className="label mb-8">À télécharger</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="border-t border-[rgba(28,28,28,0.1)]">
            {items.map((item) => (
              <li key={item.href + item.label} className="border-b border-[rgba(28,28,28,0.1)]">
                <a
                  href={item.href}
                  download
                  onClick={() => flag(item.href)}
                  className="group flex items-center gap-4 py-5 focus:outline-none
                             focus-visible:ring-2 focus-visible:ring-[#1c1c1c] rounded-sm"
                >
                  <span className="flex-1 min-w-0 text-base sm:text-lg font-light text-[#1c1c1c] truncate">
                    {item.label}
                  </span>
                  <span className="text-[10px] font-medium tracking-[0.14em] uppercase text-[#9a9a9a] shrink-0">
                    {item.format}
                  </span>
                  <span
                    className={`inline-flex items-center gap-2 shrink-0 text-[10px] font-medium tracking-[0.14em]
                                uppercase px-5 py-2.5 rounded-full transition-colors duration-200
                                ${done === item.href
                                  ? 'bg-[#1c1c1c] text-[#f7f5f1]'
                                  : 'border border-[rgba(28,28,28,0.2)] text-[#1c1c1c] group-hover:border-[rgba(28,28,28,0.5)]'}`}
                    aria-live="polite"
                  >
                    {done === item.href ? (
                      <>
                        <svg width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path d="M3 8.5l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Téléchargé
                      </>
                    ) : (
                      <>
                        <svg width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path d="M8 2v9m0 0l-3.5-3.5M8 11l3.5-3.5M2 14h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Télécharger
                      </>
                    )}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
