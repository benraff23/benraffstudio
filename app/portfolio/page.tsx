import type { Metadata } from 'next'
import Link from 'next/link'
import ClientEffects from '@/components/layout/client-effects'
import { portfolioProjects } from '@/components/sections/portfolio'

export const metadata: Metadata = {
  title: 'Portfolio · Rendus 3D architecturaux · BenRaff Studio',
  description: 'Études de cas en visualisation architecturale : aménagements extérieurs, intérieurs, équipements publics, paysagisme. Rendus 4K photoréalistes par BenRaff Studio, Rennes.',
  openGraph: {
    title: 'Portfolio · BenRaff Studio',
    description: 'Études de cas en visualisation architecturale — rendus 3D photoréalistes pour architectes, promoteurs et paysagistes.',
    images: ['/projets/pool-house/Vue 2_final.png'],
  },
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white">
      <ClientEffects />

      {/* Nav */}
      <header className="border-b border-white/[0.06] px-6 py-5 flex items-center justify-between max-w-[1400px] mx-auto">
        <Link href="/" className="hover:opacity-70 transition-opacity">
          <img src="/logo-blanc.webp" alt="BenRaff Studio" className="h-7 w-auto" />
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/#contact"
            className="text-xs font-semibold tracking-wider uppercase
                       text-[#1e1e1e] bg-[#c8e84e] px-6 py-3 rounded-full
                       hover:bg-[#d4f05a] transition-colors duration-200">
            Démarrer un projet
          </Link>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-6 py-20">

        {/* Header */}
        <div className="mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.15em] uppercase text-[#c8e84e] mb-5">
            <span className="block w-4 h-px bg-[#c8e84e]" />
            Études de cas
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05] text-white mb-6 max-w-[18ch]">
            Chaque projet est une intention.
          </h1>
          <p className="text-lg font-light text-[#9a9a9a] leading-relaxed max-w-[52ch]">
            Architectes, promoteurs, paysagistes, maîtres d&apos;ouvrage — voici comment je traduis
            un projet en image. Brief, objectif, livraison : la transparence fait partie du rendu.
          </p>
        </div>

        {/* Grille projets */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioProjects.map((project) => (
            <article
              key={project.id}
              id={`projet-${project.id}`}
              className="group flex flex-col rounded-2xl overflow-hidden border border-white/[0.06]
                         bg-white/[0.02] hover:border-white/[0.12] transition-all duration-300"
            >
              {/* Image uniforme */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center
                             transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {/* Tags */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {project.tags.slice(0, 2).map(tag => (
                    <span key={tag}
                      className="text-[10px] font-medium tracking-wider uppercase
                                 bg-black/40 backdrop-blur-sm text-white/80 px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#c8e84e]">
                    {project.category} · {project.year}
                  </span>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6 flex flex-col gap-4 flex-1">
                <div>
                  <h2 className="text-lg font-bold text-white mb-2 leading-snug">
                    {project.title}
                  </h2>
                  <p className="text-sm text-[#9a9a9a] leading-relaxed">
                    {project.fullDesc}
                  </p>
                </div>

                {/* Brief & Livraison */}
                <div className="grid sm:grid-cols-2 gap-3 mt-auto pt-4 border-t border-white/[0.06]">
                  <div className="bg-white/[0.03] rounded-xl p-4">
                    <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#5a5a5a] mb-2">
                      Brief & Objectif
                    </p>
                    <p className="text-xs text-[#9a9a9a] leading-relaxed">{project.brief}</p>
                  </div>
                  <div className="bg-[rgba(200,232,78,0.04)] border border-[rgba(200,232,78,0.12)] rounded-xl p-4">
                    <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#c8e84e] mb-2">
                      Livraison
                    </p>
                    <p className="text-xs text-[#9a9a9a] leading-relaxed">{project.livraison}</p>
                  </div>
                </div>

                {/* Galerie miniatures */}
                {project.images.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
                    {project.images.filter(img => !img.endsWith('.mp4')).slice(1).map((img, i) => (
                      <div key={i} className="flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden">
                        <img
                          src={img}
                          alt={`${project.title} · vue ${i + 2}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* CTA bas de page */}
        <div className="mt-24 pt-16 border-t border-white/[0.06] text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Votre projet mérite ce niveau de soin.
          </h2>
          <p className="text-[#9a9a9a] text-lg font-light mb-8 max-w-[44ch] mx-auto">
            Premier rendu livré en 72h. Retravail sans frais si le résultat ne correspond pas au brief.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 text-sm font-semibold tracking-wider uppercase
                       text-[#1e1e1e] bg-[#c8e84e] px-10 py-5 rounded-full
                       hover:bg-[#d4f05a] hover:-translate-y-0.5
                       hover:shadow-[0_8px_40px_rgba(200,232,78,0.4)]
                       transition-all duration-200"
          >
            Démarrer un projet
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] px-6 py-8 mt-16">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="hover:opacity-70 transition-opacity">
            <img src="/logo-blanc.webp" alt="BenRaff Studio" className="h-6 w-auto" />
          </Link>
          <p className="text-xs text-[#5a5a5a]">
            BenRaff Studio · Perspectiviste indépendant · Rennes · contact@benraffstudio.com
          </p>
          <Link href="/" className="text-xs text-[#9a9a9a] hover:text-white transition-colors">
            ← Retour au site
          </Link>
        </div>
      </footer>
    </div>
  )
}
