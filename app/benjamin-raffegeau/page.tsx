import type { Metadata } from 'next'
import Link from 'next/link'
import ClientEffects from '@/components/layout/client-effects'

export const metadata: Metadata = {
  title: 'Benjamin Raffegeau · Perspectiviste 3D & Visualisation Architecturale · Rennes',
  description:
    'Perspectiviste 3D basé à Rennes, fondateur de BenRaff Studio. Spécialisé en visualisation architecturale ultra-réaliste : rendus fixes, animations, visites virtuelles. SketchUp, D5 Render, Photoshop.',
  openGraph: {
    title: 'Benjamin Raffegeau · Perspectiviste 3D à Rennes',
    description: 'Fondateur de BenRaff Studio. Visualisation architecturale ultra-réaliste pour architectes, promoteurs et paysagistes.',
    type: 'profile',
    url: 'https://benraffstudio.com/benjamin-raffegeau',
  },
  alternates: { canonical: 'https://benraffstudio.com/benjamin-raffegeau' },
}

// ─── Data ──────────────────────────────────────────────────────────────────────

const tools = [
  { name: 'SketchUp', level: 95, category: 'Modélisation' },
  { name: 'D5 Render', level: 92, category: 'Rendu temps réel' },
  { name: 'Photoshop', level: 88, category: 'Post-production' },
  { name: 'IA générative', level: 85, category: 'Production' },
]

const expertise = [
  { icon: 'M3 3h18v18H3zM3 9h18M9 21V9', label: 'Rendus fixes 4K / 8K' },
  { icon: 'M5 3l14 9-14 9V3z', label: 'Animation vidéo cinématique' },
  { icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM2 12h20', label: 'Visite virtuelle 360°' },
  { icon: 'M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2', label: 'Étude de lumière & ambiance' },
  { icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', label: 'Conseil & brief créatif' },
  { icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', label: 'Architecture extérieure & paysagisme' },
  { icon: 'M4 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5zM8 20h8M12 16v4', label: 'Mini-site immobilier' },
  { icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5', label: 'Identité visuelle & graphisme' },
]

const formation = [
  {
    period: 'Avril 2025',
    title: 'Formation spécialisée : Visualisation architecturale 3D',
    school: 'Formation professionnelle',
    desc: "Maîtrise des outils de rendu photoréaliste, composition architecturale, éclairage artificiel et naturel, post-production et livraison client.",
  },
  {
    period: '2016 / 2017',
    title: "Architecture intérieure & Design",
    school: "LISAA Rennes",
    desc: "Étude des espaces, des proportions, des matériaux et des ambiances. Apprentissage du dessin technique, de la modélisation et de la représentation architecturale.",
  },
  {
    period: '2015 / 2016',
    title: "Classe préparatoire · Arts appliqués",
    school: "Classe prépa",
    desc: "Fondamentaux des arts appliqués : culture visuelle, composition, couleur, typographie et pratiques plastiques.",
  },
]

const projects = [
  {
    title: 'Aménagement extérieur · Bretagne',
    tags: ['Pool house', 'Terrasse', 'Fire pit', 'Extérieur'],
    img: '/projets/pool-house/Vue 2_final.png',
    desc: "Visualisation complète d'un aménagement extérieur haut de gamme en Bretagne. Ambiance fin de journée d'été.",
  },
  {
    title: 'Intérieur scandinave',
    tags: ['Salon', 'Cuisine', 'Lumière naturelle', 'Intérieur'],
    img: '/projets/Intérieur scandinave/Salon face.jpeg',
    desc: "Série de 5 vues explorant une maison aux codes scandinaves : matières naturelles, palette neutre, lumière douce.",
  },
  {
    title: 'Cuisine rose & noire',
    tags: ['Cuisine', 'Close-up', 'Matières', 'Intérieur'],
    img: '/projets/cuisine-rose/Close up final 4K.png',
    desc: "Rendu de cuisine bicolore avec focus sur la matière : terrazzo, carrelage rose, robinetterie design.",
  },
  {
    title: 'Allée paysagée',
    tags: ['Paysagisme', 'Végétation', 'Extérieur', '4K'],
    img: '/projets/allee-paysagee/Scène 10 final 4K.jpg',
    desc: "Allée carrossable entièrement végétalisée. Exercice sur la profondeur de champ et l'intégration paysagère.",
  },
]

const stats = [
  { value: '100%', label: 'Sur-mesure' },
  { value: '72h', label: 'Premier rendu' },
  { value: '3+', label: "Années d'expérience" },
  { value: '0', label: 'Compromis qualité' },
]

// ─── Composants ────────────────────────────────────────────────────────────────

function SkillBar({ name, level, category }: { name: string; level: number; category: string }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <div>
          <span className="text-sm font-semibold text-[#0f0f0f]">{name}</span>
          <span className="ml-2 text-xs text-[#5a5a5a]">{category}</span>
        </div>
        <span className="text-xs font-medium text-[#6b8a00] tabular-nums">{level}%</span>
      </div>
      <div className="h-1 bg-black/[0.1] rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#c8e84e] to-[#a8c83e] rounded-full"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function BenjaminRaffegeau() {
  return (
    <div className="min-h-screen bg-[#f5f4f0] text-[#0f0f0f]">
      <ClientEffects />

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-black/[0.08] px-6 py-4
                         bg-[rgba(245,244,240,0.92)] backdrop-blur-xl">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <Link href="/" className="hover:opacity-70 transition-opacity">
            <img src="/logo-noir.webp" alt="BenRaff Studio" className="h-7 w-auto" />
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/#portfolio"
              className="text-xs font-medium tracking-wider uppercase text-[#6a6a6a] hover:text-[#0f0f0f] transition-colors hidden sm:block"
            >
              Portfolio
            </Link>
            <a
              href="mailto:contact@benraffstudio.com"
              className="text-xs font-semibold tracking-wider uppercase text-[#080808]
                         bg-[#c8e84e] px-5 py-2.5 rounded-full
                         hover:bg-[#d4f05a] transition-colors"
            >
              Me contacter
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-6 py-20">

        {/* ── Hero ── */}
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 mb-28 items-center">
          {/* Photo */}
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-[#e8e5df] max-w-sm mx-auto w-full lg:max-w-none">
            <img
              src="/Portrait benjamin Raffegeau.webp"
              alt="Benjamin Raffegeau, perspectiviste 3D et fondateur BenRaff Studio à Rennes"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,8,8,0.7)] via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 bg-[rgba(8,8,8,0.85)] backdrop-blur-xl
                            border border-white/[0.08] rounded-2xl px-4 py-3 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#c8e84e] flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold text-white">Disponible pour missions</p>
                <p className="text-[11px] text-[#7a7a7a]">Rennes · France · Remote</p>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <span className="inline-flex items-center gap-2 text-[#6b8a00] text-xs font-medium tracking-[0.15em] uppercase mb-5">
              <span className="block w-4 h-px bg-[#c8e84e]" />
              Perspectiviste 3D · Rennes
            </span>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02] text-[#0f0f0f] mb-6">
              Benjamin<br />Raffegeau
            </h1>

            <p className="text-xl font-light text-[#4a4a4a] leading-relaxed mb-8 max-w-[48ch]">
              Fondateur de <strong className="text-[#0f0f0f] font-semibold">BenRaff Studio</strong>, je conçois des visualisations
              architecturales qui font vendre des projets non encore construits. Chaque image est
              le résultat d'une intention, pas d'un rendu aléatoire.
            </p>

            <p className="text-base font-light text-[#6a6a6a] leading-relaxed mb-10 max-w-[46ch]">
              Spécialisé en aménagement extérieur et intérieur, j'interviens pour des architectes,
              promoteurs et paysagistes partout en France. Mon approche : composition narrative,
              lumière choisie, cohérence des matériaux.
            </p>

            {/* Contact chips */}
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:contact@benraffstudio.com"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase
                           text-[#080808] bg-[#c8e84e] px-6 py-3 rounded-full
                           hover:bg-[#d4f05a] hover:-translate-y-px
                           hover:shadow-[0_4px_20px_rgba(200,232,78,0.3)]
                           transition-all duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                contact@benraffstudio.com
              </a>
              <a
                href="tel:+33624517641"
                className="inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase
                           text-[#4a4a4a] border border-black/[0.12] px-6 py-3 rounded-full
                           hover:text-[#0f0f0f] hover:border-black/30 transition-all duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91A16 16 0 0 0 16 17l.91-.85a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 23 18.2v.72z"/>
                </svg>
                06 24 51 76 41
              </a>
              <a
                href="https://benraffstudio.com"
                className="inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase
                           text-[#4a4a4a] border border-black/[0.12] px-6 py-3 rounded-full
                           hover:text-[#0f0f0f] hover:border-black/30 transition-all duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                benraffstudio.com
              </a>
            </div>
          </div>
        </div>

        {/* ── Stats ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-black/[0.06] border border-black/[0.06] rounded-2xl overflow-hidden mb-28">
          {stats.map(({ value, label }) => (
            <div key={label} className="bg-[#f5f4f0] px-8 py-8 hover:bg-[#e8e5df] transition-colors">
              <div className="text-4xl font-bold tracking-tight text-[#0f0f0f] leading-none mb-2">{value}</div>
              <div className="text-xs font-medium tracking-wider uppercase text-[#5a5a5a]">{label}</div>
            </div>
          ))}
        </div>

        {/* ── Histoire ── */}
        <div className="mb-28 grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
          <div>
            <span className="inline-flex items-center gap-2 text-[#6b8a00] text-xs font-medium tracking-[0.15em] uppercase mb-3">
              <span className="block w-4 h-px bg-[#c8e84e]" />
              Parcours
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0f0f0f]">Mon histoire.</h2>
          </div>
          <div className="flex flex-col gap-5 text-[#6a6a6a] text-base font-light leading-relaxed">
            <p>
              Tout a commencé par une obsession pour les images, pas les images qui décorent,
              mais celles qui font ressentir quelque chose. En classe prépa arts appliqués, j&apos;apprends
              à regarder autrement : la composition, la lumière, le rapport entre les formes et le vide.
              C&apos;est là que naît une conviction que je n&apos;ai jamais quittée : <strong className="text-[#0f0f0f] font-medium">une image est une décision, pas un résultat.</strong>
            </p>
            <p>
              À LISAA Rennes, l&apos;architecture intérieure me donne un langage plus précis.
              J&apos;apprends à penser l&apos;espace : ses proportions, ses matières, la façon dont
              la lumière naturelle change un volume au fil des heures. Je comprends que représenter
              un projet, c&apos;est déjà interpréter une intention architecturale.
            </p>
            <p>
              Avant de me spécialiser dans la visualisation 3D, j&apos;exerce pendant plusieurs années
              en tant que <strong className="text-[#0f0f0f] font-medium">graphiste 360</strong>, une expérience atypique qui forge une polyvalence rare
              dans le secteur. Identité visuelle, direction artistique, motion design, webdesign :
              je développe une maîtrise complète de la chaîne de création visuelle, de la conception
              jusqu&apos;à la livraison finale. C&apos;est cette vision globale qui change ma façon
              d&apos;aborder un rendu : je ne pense pas seulement l&apos;image, <strong className="text-[#0f0f0f] font-medium">je pense l&apos;écosystème dans lequel elle va vivre.</strong>
            </p>
            <p>
              Cette double compétence (image 3D et création digitale) me permet aujourd&apos;hui
              de proposer des livrables que peu de perspectivistes peuvent offrir : des
              <strong className="text-[#0f0f0f] font-medium"> mini-sites de présentation immobilière</strong> intégrant directement les rendus,
              les plans et les éléments de commercialisation pour les promoteurs.
              Un projet, une plateforme, une expérience de vente cohérente de bout en bout.
            </p>
            <p>
              En 2025, je fonde <strong className="text-[#0f0f0f] font-medium">BenRaff Studio</strong> à Rennes pour
              réunir ces disciplines sous un même toit. Visualisation architecturale ultra-réaliste,
              animation vidéo, visite virtuelle et supports digitaux : tout ce dont un promoteur
              ou un architecte a besoin pour présenter, convaincre et vendre, sans multiplier les prestataires.
            </p>
            <p className="text-[#888888]">
              Ce qui me motive chaque jour, c&apos;est cette tension entre technique et narration.
              L&apos;IA générative fait partie de mon workflow, non pas comme raccourci, mais comme
              un outil supplémentaire au service d&apos;une vision. Le regard, lui, reste humain.
            </p>
          </div>
        </div>

        {/* ── Expertise ── */}
        <div className="mb-28">
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 text-[#6b8a00] text-xs font-medium tracking-[0.15em] uppercase mb-3">
              <span className="block w-4 h-px bg-[#c8e84e]" />
              Domaines d'expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0f0f0f]">Ce que je maîtrise.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {expertise.map(({ icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-4 bg-[#e8e5df] border border-black/[0.06]
                           rounded-xl px-5 py-4 hover:border-black/[0.12] hover:bg-[#dedad4] transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-[rgba(200,232,78,0.1)] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#6b8a00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d={icon} strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-sm font-medium text-[#0f0f0f]">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Outils ── */}
        <div className="grid lg:grid-cols-2 gap-16 mb-28 items-start">
          <div>
            <span className="inline-flex items-center gap-2 text-[#6b8a00] text-xs font-medium tracking-[0.15em] uppercase mb-3">
              <span className="block w-4 h-px bg-[#c8e84e]" />
              Outils & logiciels
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0f0f0f] mb-8">Stack technique.</h2>
            <div className="flex flex-col gap-6">
              {tools.map((tool) => (
                <SkillBar key={tool.name} {...tool} />
              ))}
            </div>
          </div>

          {/* Soft skills */}
          <div className="bg-[#e8e5df] border border-black/[0.06] rounded-2xl p-8">
            <h3 className="text-lg font-semibold text-[#0f0f0f] mb-6">Approche de travail</h3>
            <div className="flex flex-col gap-5">
              {[
                ['Écoute du brief', "Chaque projet commence par comprendre l'objectif, pas juste les dimensions du terrain."],
                ['Composition narrative', "Cadrage, point de vue, heure de la journée : chaque choix guide le regard du futur client."],
                ['Rigueur technique', "Cohérence des matériaux, des échelles et des ombres. Aucun détail incohérent ne passe."],
                ['Livraison structurée', "Plateforme de suivi, versioning, annotations directes sur les rendus. Zéro email perdu."],
              ].map(([titre, desc]) => (
                <div key={titre} className="flex gap-4 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c8e84e] mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[#0f0f0f] mb-1">{titre}</p>
                    <p className="text-sm text-[#5a5a5a] leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Formation ── */}
        <div className="mb-28">
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 text-[#6b8a00] text-xs font-medium tracking-[0.15em] uppercase mb-3">
              <span className="block w-4 h-px bg-[#c8e84e]" />
              Parcours
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0f0f0f]">Formation.</h2>
          </div>
          <div className="relative">
            {/* Ligne verticale */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-black/[0.1] hidden sm:block" />
            <div className="flex flex-col gap-10">
              {formation.map(({ period, title, school, desc }, i) => (
                <div key={i} className="sm:pl-10 relative">
                  <div className="hidden sm:block absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full
                                  border-2 border-[#c8e84e] bg-[#f5f4f0]" />
                  <p className="text-xs font-medium tracking-wider uppercase text-[#6b8a00] mb-2">{period}</p>
                  <h3 className="text-base font-semibold text-[#0f0f0f] mb-0.5">{title}</h3>
                  <p className="text-xs text-[#5a5a5a] mb-3 tracking-wide">{school}</p>
                  <p className="text-sm text-[#6a6a6a] leading-relaxed max-w-[52ch]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Projets sélectionnés ── */}
        <div className="mb-28">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <span className="inline-flex items-center gap-2 text-[#6b8a00] text-xs font-medium tracking-[0.15em] uppercase mb-3">
                <span className="block w-4 h-px bg-[#c8e84e]" />
                Réalisations
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0f0f0f]">Projets sélectionnés.</h2>
            </div>
            <Link
              href="/#portfolio"
              className="text-xs font-medium tracking-wider uppercase text-[#6a6a6a]
                         border border-black/[0.12] px-5 py-2.5 rounded-full
                         hover:text-[#0f0f0f] hover:border-black/30 transition-all"
            >
              Voir tout le portfolio →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {projects.map(({ title, tags, img, desc }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl bg-[#e8e5df]
                           border border-black/[0.06] hover:border-black/[0.12] transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={img}
                    alt={`${title} · rendu 3D BenRaff Studio`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-sm font-semibold text-[#0f0f0f] mb-2">{title}</h3>
                  <p className="text-xs text-[#5a5a5a] leading-relaxed mb-3">{desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map(tag => (
                      <span key={tag} className="text-[10px] font-medium tracking-wider text-[#5a5a5a]
                                                  border border-black/[0.1] px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA Contact ── */}
        <div className="bg-[#e8e5df] border border-black/[0.1] rounded-3xl p-10 sm:p-14 text-center">
          <span className="inline-flex items-center gap-2 text-[#6b8a00] text-xs font-medium tracking-[0.15em] uppercase mb-4">
            <span className="block w-4 h-px bg-[#c8e84e]" />
            Collaboration
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0f0f0f] mb-4">
            Un projet à visualiser ?
          </h2>
          <p className="text-lg font-light text-[#6a6a6a] mb-8 max-w-[44ch] mx-auto leading-relaxed">
            Studio indépendant basé à Rennes, disponible pour des missions en France et à l'international.
            Premier rendu livré en 72h.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="mailto:contact@benraffstudio.com"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase
                         text-[#080808] bg-[#c8e84e] px-8 py-4 rounded-full
                         hover:bg-[#d4f05a] hover:-translate-y-0.5
                         hover:shadow-[0_8px_32px_rgba(200,232,78,0.35)]
                         transition-all duration-200"
            >
              Écrire un message
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <Link
              href="/#portfolio"
              className="inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase
                         text-[#4a4a4a] border border-black/[0.12] px-8 py-4 rounded-full
                         hover:text-[#0f0f0f] hover:border-black/30 transition-all duration-200"
            >
              Voir le portfolio
            </Link>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-black/[0.08] mt-20 py-8 px-6">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between flex-wrap gap-4">
          <p className="text-xs text-[#5a5a5a]">© 2026 BenRaff Studio · Benjamin Raffegeau · Rennes</p>
          <div className="flex items-center gap-5">
            <Link href="/mentions-legales" className="text-xs text-[#5a5a5a] hover:text-[#0f0f0f] transition-colors">Mentions légales</Link>
            <Link href="/politique-de-confidentialite" className="text-xs text-[#5a5a5a] hover:text-[#0f0f0f] transition-colors">Confidentialité</Link>
            <Link href="/" className="text-xs text-[#5a5a5a] hover:text-[#0f0f0f] transition-colors">← Site principal</Link>
          </div>
        </div>
      </footer>

    </div>
  )
}
