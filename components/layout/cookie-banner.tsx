'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'benraff_cookie_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY)
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Consentement aux cookies"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-[2000] px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div className="max-w-2xl mx-auto bg-[#141414] border border-white/[0.1] rounded-2xl p-5 sm:p-6
                      shadow-[0_-4px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl">
        <div className="flex items-start gap-4">
          {/* Icône */}
          <div className="w-9 h-9 rounded-xl bg-[rgba(200,232,78,0.1)] flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg className="w-4 h-4 text-[#6b8a00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm-1-5h2v2h-2zm0-8h2v6h-2z"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Texte */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white mb-1">Ce site utilise des cookies</p>
            <p className="text-xs text-[#9a9a9a] leading-relaxed">
              Uniquement des cookies techniques nécessaires au fonctionnement du site.
              Aucun cookie publicitaire ou de suivi sans votre accord.{' '}
              <Link
                href="/politique-de-confidentialite"
                className="text-[#6b8a00] hover:underline"
              >
                En savoir plus
              </Link>
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 mt-5 flex-wrap">
          <button
            onClick={accept}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2
                       text-xs font-semibold tracking-wider uppercase text-[#080808]
                       bg-[#c8e84e] px-6 py-3 rounded-full
                       hover:bg-[#d4f05a] hover:-translate-y-px
                       hover:shadow-[0_4px_20px_rgba(200,232,78,0.3)]
                       transition-all duration-200"
          >
            Accepter
          </button>
          <button
            onClick={decline}
            className="flex-1 sm:flex-none inline-flex items-center justify-center
                       text-xs font-medium tracking-wider uppercase text-[#9a9a9a]
                       border border-white/[0.12] px-6 py-3 rounded-full
                       hover:text-white hover:border-white/30
                       transition-all duration-200"
          >
            Refuser
          </button>
          <Link
            href="/politique-de-confidentialite"
            className="text-xs text-[#5a5a5a] hover:text-[#9a9a9a] transition-colors sm:ml-auto"
          >
            Politique de confidentialité
          </Link>
        </div>
      </div>
    </div>
  )
}
