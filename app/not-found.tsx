import Link from 'next/link'
import ClientEffects from '@/components/layout/client-effects'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white flex flex-col">
      <ClientEffects />

      {/* Nav minimaliste */}
      <header className="border-b border-white/[0.06] px-6 py-5 flex items-center justify-between max-w-[1400px] mx-auto w-full">
        <Link href="/" className="hover:opacity-70 transition-opacity">
          <img src="/logo-blanc.webp" alt="BenRaff Studio" className="h-7 w-auto" />
        </Link>
      </header>

      {/* Contenu centré */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">

        {/* Grand 404 décoratif */}
        <p className="text-[clamp(120px,20vw,220px)] font-bold leading-none tracking-tighter
                      text-transparent bg-clip-text select-none"
           style={{ backgroundImage: 'linear-gradient(135deg, rgba(200,232,78,0.15) 0%, rgba(200,232,78,0.04) 100%)' }}>
          404
        </p>

        <div className="-mt-4 mb-8">
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#c8e84e]" />
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-[#c8e84e]">
              Page introuvable
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Cette page n&apos;existe pas.
          </h1>
          <p className="text-[#9a9a9a] text-base leading-relaxed max-w-[40ch] mx-auto">
            Elle a peut-être été déplacée ou supprimée.
            Revenez à l&apos;accueil pour explorer le studio.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase
                       text-[#080808] bg-[#c8e84e] px-8 py-4 rounded-full
                       hover:bg-[#d4f05a] hover:-translate-y-0.5
                       hover:shadow-[0_8px_32px_rgba(200,232,78,0.35)]
                       transition-all duration-200"
          >
            Retour à l&apos;accueil
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase
                       text-white border border-white/[0.14] px-8 py-4 rounded-full
                       hover:border-black/30 hover:-translate-y-0.5
                       transition-all duration-200"
          >
            Décrire un projet
          </Link>
        </div>
      </main>

      {/* Footer minimaliste */}
      <footer className="border-t border-white/[0.06] px-6 py-5 text-center">
        <p className="text-xs text-[#7a7a7a]">
          BenRaff Studio · Perspectiviste indépendant · Rennes
        </p>
      </footer>
    </div>
  )
}
