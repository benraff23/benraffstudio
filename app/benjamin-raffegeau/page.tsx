import type { Metadata } from 'next'
import Link from 'next/link'
import ClientEffects from '@/components/layout/client-effects'
import FloatingCta from '@/components/layout/floating-cta'
import Nav from '@/components/layout/nav'

export const metadata: Metadata = {
  title: 'Perspectiviste 3D indépendant à Rennes · Benjamin Raffegeau',
  description:
    'Perspectiviste 3D à Rennes, fondateur de BenRaff Studio. Je conçois seul les visualisations 3D des concepteurs paysagistes, piscinistes et concepteurs de pool houses.',
  keywords: [
    'Benjamin Raffegeau',
    'BenRaff Studio',
    'rendu 3D paysagiste Rennes',
    'visualisation 3D aménagement extérieur Bretagne',
    'perspectiviste indépendant Rennes',
    'SketchUp D5 Render',
  ],
  openGraph: {
    images: ['/og.jpg'],
    title: 'Qui suis-je ? · Benjamin Raffegeau, BenRaff Studio',
    description: 'Je conçois seul des visualisations 3D pour les concepteurs paysagistes, piscinistes et concepteurs de pool houses. Basé à Rennes, actif dans toute la France.',
    type: 'profile',
    url: 'https://benraffstudio.com/benjamin-raffegeau',
  },
  alternates: { canonical: 'https://benraffstudio.com/benjamin-raffegeau' },
}

const SITE = 'https://benraffstudio.com'

// L'entité Person complète est déclarée une seule fois, dans app/layout.tsx.
// La redéclarer ici avec le même @id créait deux nœuds concurrents pour la
// même entité : on se contente de la référencer.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfilePage',
      '@id': `${SITE}/benjamin-raffegeau#page`,
      url: `${SITE}/benjamin-raffegeau`,
      name: 'Qui suis-je ? · Benjamin Raffegeau',
      mainEntity: { '@id': `${SITE}/#person` },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Benjamin Raffegeau', item: `${SITE}/benjamin-raffegeau` },
      ],
    },
  ],
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
  { icon: 'M5 3l14 9-14 9V3z', label: 'Vidéo immersive de projet extérieur' },
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
    title: 'Formation spécialisée : Visualisation architecturale & photoréalisme 3D',
    school: 'D5 Render · avec Kevin Leclerc',
    desc: "Maîtrise du rendu photoréaliste sous D5 Render, composition d'image, éclairage naturel et artificiel, post-production et livraison client.",
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

// Uniquement le projet pool house : le cas de référence de la niche.
const projects = [
  {
    title: 'Bassin à débordement · Bretagne',
    tags: ['Piscine', 'Pierre sèche', 'Graminées', 'Golden hour'],
    img: '/projets/pool-house/vie-1.webp',
    desc: "Bassin à débordement posé sur un mur en pierre sèche, massifs de graminées, lumière rasante de fin de journée.",
  },
  {
    title: 'Terrasse & foyer extérieur · Bretagne',
    tags: ['Terrasse bois', 'Foyer', 'Extérieur', '4K'],
    img: '/projets/pool-house/vue-2_final.webp',
    desc: "Le foyer extérieur comme point d'ancrage du regard, au moment où la lumière réchauffe le bois de la terrasse.",
  },
  {
    title: 'Plage de bassin au crépuscule · Bretagne',
    tags: ['Piscine', 'Crépuscule', 'Éclairage', 'Extérieur'],
    img: '/projets/pool-house/vue-4.webp',
    desc: "Traitement de l'eau et de l'éclairage en fin de journée : reflets, lame débordante, balisage des cheminements.",
  },
  {
    title: 'Cuisine extérieure sous pergola · Bretagne',
    tags: ['Pool house', 'Cuisine extérieure', 'Pergola', 'Extérieur'],
    img: '/projets/pool-house/vue-3.webp',
    desc: "L'espace de vie abrité du pool house : cuisine extérieure, bar et assises, ouvert sur la plage de bassin.",
  },
]

const stats = [
  { value: '100%', label: 'Sur-mesure' },
  { value: 'France', label: '100 % à distance' },
  { value: 'Peu', label: 'de projets à la fois' },
  { value: '0', label: 'Compromis qualité' },
]

// ─── Composants ────────────────────────────────────────────────────────────────

function SkillBar({ name, level, category }: { name: string; level: number; category: string }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <div>
          <span className="text-sm font-semibold text-[#1c1c1c]">{name}</span>
          <span className="ml-2 text-xs text-[#9a9a9a]">{category}</span>
        </div>
        <span className="text-xs font-medium text-[#1c1c1c] tabular-nums">{level}%</span>
      </div>
      <div className="h-1 bg-black/[0.1] rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#1c1c1c] to-[#333333] rounded-full"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function BenjaminRaffegeau() {
  return (
    <div className="min-h-screen bg-[#f7f5f1] text-[#1c1c1c]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ClientEffects />
      <FloatingCta />
      <Nav base="/" />

      <main className="max-w-[1200px] mx-auto px-6 pt-40 pb-20">

        {/* ── Hero ── */}
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 mb-28 items-center">
          {/* Photo */}
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-[#ede9e2] max-w-sm mx-auto w-full lg:max-w-none">
            <img
              src="/portrait-benjamin-raffegeau.webp"
              alt="Benjamin Raffegeau, perspectiviste 3D et fondateur BenRaff Studio à Rennes"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,8,8,0.7)] via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 bg-[rgba(8,8,8,0.85)] backdrop-blur-xl
                            border border-[rgba(28,28,28,0.08)] rounded-2xl px-4 py-3 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#1c1c1c] flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold text-[#1c1c1c]">Disponible pour missions</p>
                <p className="text-[11px] text-[#9a9a9a]">Rennes · France · Remote</p>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <span className="inline-flex items-center gap-2 text-[#1c1c1c] text-xs font-medium tracking-[0.15em] uppercase mb-5">
              <span className="block w-4 h-px bg-[#1c1c1c]" />
              Qui suis-je ?
            </span>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02] text-[#1c1c1c] mb-6">
              Benjamin<br />Raffegeau
            </h1>

            {/* Paragraphe factuel et déclaratif — lisible par un humain
                comme par un moteur de réponse. */}
            <p className="text-xl font-light text-[#6b6b6b] leading-relaxed mb-8 max-w-[50ch]">
              Je suis le fondateur de <strong className="text-[#1c1c1c] font-semibold">BenRaff Studio</strong>.
              Je conçois des visualisations 3D pour les concepteurs paysagistes, piscinistes et
              créateurs de pool houses qui veulent que leurs clients se projettent immédiatement
              dans le projet fini.
            </p>

            <p className="text-base font-light text-[#9a9a9a] leading-relaxed mb-10 max-w-[50ch]">
              Basé à Rennes, je travaille seul, du premier échange à la livraison finale.
              C&apos;est un choix : ça garantit une direction cohérente sur chaque projet, sans
              dilution entre plusieurs intervenants. J&apos;interviens partout en France grâce à
              un workflow pensé pour ça : brief interactif, échanges en visio, livraison en ligne.
            </p>

            {/* Contact chips */}
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:contact@benraffstudio.com"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase
                           text-[#f7f5f1] bg-[#1c1c1c] px-6 py-3 rounded-full
                           hover:bg-[#333333] hover:-translate-y-px
                           
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
                           text-[#6b6b6b] border border-[rgba(28,28,28,0.12)] px-6 py-3 rounded-full
                           hover:text-[#1c1c1c] hover:border-black/30 transition-all duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91A16 16 0 0 0 16 17l.91-.85a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 23 18.2v.72z"/>
                </svg>
                06 24 51 76 41
              </a>
              <a
                href="https://benraffstudio.com"
                className="inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase
                           text-[#6b6b6b] border border-[rgba(28,28,28,0.12)] px-6 py-3 rounded-full
                           hover:text-[#1c1c1c] hover:border-black/30 transition-all duration-200"
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

        {/* ── Ma manière de travailler ── */}
        <div className="mb-28 bg-white border border-[rgba(28,28,28,0.08)] rounded-3xl p-9 sm:p-12">
          <span className="inline-flex items-center gap-2 text-[#1c1c1c] text-xs font-medium tracking-[0.15em] uppercase mb-4">
            <span className="block w-4 h-px bg-[#1c1c1c]" />
            Ma manière de travailler
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1c1c1c] mb-6 max-w-[26ch]">
            Un interlocuteur unique, du brief à la livraison.
          </h2>
          <div className="flex flex-col gap-5 text-base font-light text-[#6b6b6b] leading-relaxed max-w-[68ch]">
            <p>
              Vous ne passez pas d&apos;un chargé de projet à un modeleur puis à un monteur vidéo.
              Je suis présent à chaque étape — de la lecture de votre plan de plantation jusqu&apos;à
              l&apos;ouverture du mini-site en rendez-vous client. Ça simplifie les échanges, et ça
              garantit une cohérence de regard sur l&apos;ensemble du projet.
            </p>
            <p>
              Mon outil principal : SketchUp et D5 Render pour la modélisation et le rendu,
              complétés par une retouche assistée par IA générative pour le photoréalisme final.
              L&apos;IA est un allié en post-production, jamais un raccourci qui remplace le travail
              de composition.
            </p>
            <p>
              Mon rôle n&apos;est pas de redessiner votre projet : c&apos;est de sublimer votre
              conception. La composition, l&apos;implantation, le choix des essences restent
              votre travail.
            </p>
          </div>
        </div>

        {/* ── Stats ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-black/[0.06] border border-black/[0.06] rounded-2xl overflow-hidden mb-28">
          {stats.map(({ value, label }) => (
            <div key={label} className="bg-white px-8 py-8 hover:bg-[#ede9e2] transition-colors">
              <div className="text-4xl font-bold tracking-tight text-[#1c1c1c] leading-none mb-2">{value}</div>
              <div className="text-xs font-medium tracking-wider uppercase text-[#9a9a9a]">{label}</div>
            </div>
          ))}
        </div>

        {/* ── Histoire ── */}
        <div className="mb-28 grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
          <div>
            <span className="inline-flex items-center gap-2 text-[#1c1c1c] text-xs font-medium tracking-[0.15em] uppercase mb-3">
              <span className="block w-4 h-px bg-[#1c1c1c]" />
              Parcours
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1c1c1c]">Mon histoire.</h2>
          </div>
          <div className="flex flex-col gap-5 text-[#9a9a9a] text-base font-light leading-relaxed">
            <p>
              Tout a commencé par une obsession pour les images, pas les images qui décorent,
              mais celles qui font ressentir quelque chose. En classe prépa arts appliqués, j&apos;apprends
              à regarder autrement : la composition, la lumière, le rapport entre les formes et le vide.
              C&apos;est là que naît une conviction que je n&apos;ai jamais quittée : <strong className="text-[#1c1c1c] font-medium">une image est une décision, pas un résultat.</strong>
            </p>
            <p>
              À LISAA Rennes, l&apos;architecture intérieure me donne un langage plus précis.
              J&apos;apprends à penser l&apos;espace : ses proportions, ses matières, la façon dont
              la lumière naturelle change un volume au fil des heures. Je comprends que représenter
              un projet, c&apos;est déjà interpréter une intention architecturale.
            </p>
            <p>
              Avant de me spécialiser dans la visualisation 3D, j&apos;exerce pendant plusieurs années
              en tant que <strong className="text-[#1c1c1c] font-medium">graphiste 360</strong>, une expérience atypique qui forge une polyvalence rare
              dans le secteur. Identité visuelle, direction artistique, motion design, webdesign :
              je développe une maîtrise complète de la chaîne de création visuelle, de la conception
              jusqu&apos;à la livraison finale. C&apos;est cette vision globale qui change ma façon
              d&apos;aborder un rendu : je ne pense pas seulement l&apos;image, <strong className="text-[#1c1c1c] font-medium">je pense l&apos;écosystème dans lequel elle va vivre.</strong>
            </p>
            <p>
              Cette double compétence (image 3D et création digitale) me permet aujourd&apos;hui
              de proposer des livrables que peu de perspectivistes peuvent offrir : des
              <strong className="text-[#1c1c1c] font-medium"> mini-sites de présentation</strong> intégrant directement
              le plan de composition en 3D, la maquette interactive, les images et la vidéo du projet.
              Un projet, une page, une présentation cohérente de bout en bout.
            </p>
            <p>
              En 2025, je fonde <strong className="text-[#1c1c1c] font-medium">BenRaff Studio</strong> à Rennes pour
              réunir ces disciplines sous un même toit, et je concentre progressivement mon activité
              sur l&apos;aménagement extérieur premium : jardins, bassins, terrasses et pool houses.
              C&apos;est là que l&apos;écart entre le plan de composition et l&apos;expérience vécue
              est le plus grand — et donc là où une visualisation juste change le plus de choses
              en rendez-vous client.
            </p>
            <p className="text-[#9a9a9a]">
              Ce qui me motive chaque jour, c&apos;est cette tension entre technique et narration.
              L&apos;IA générative fait partie de mon workflow, non pas comme raccourci, mais comme
              un outil supplémentaire au service d&apos;une vision. Le regard, lui, reste humain.
            </p>
          </div>
        </div>

        {/* ── Expertise ── */}
        <div className="mb-28">
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 text-[#1c1c1c] text-xs font-medium tracking-[0.15em] uppercase mb-3">
              <span className="block w-4 h-px bg-[#1c1c1c]" />
              Domaines d'expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1c1c1c]">Ce que je maîtrise.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {expertise.map(({ icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-4 bg-[#ede9e2] border border-black/[0.06]
                           rounded-xl px-5 py-4 hover:border-[rgba(28,28,28,0.12)] hover:bg-white transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-[rgba(28,28,28,0.06)] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#1c1c1c]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d={icon} strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-sm font-medium text-[#1c1c1c]">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Outils ── */}
        <div className="grid lg:grid-cols-2 gap-16 mb-28 items-start">
          <div>
            <span className="inline-flex items-center gap-2 text-[#1c1c1c] text-xs font-medium tracking-[0.15em] uppercase mb-3">
              <span className="block w-4 h-px bg-[#1c1c1c]" />
              Outils & logiciels
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1c1c1c] mb-8">Stack technique.</h2>
            <div className="flex flex-col gap-6">
              {tools.map((tool) => (
                <SkillBar key={tool.name} {...tool} />
              ))}
            </div>
          </div>

          {/* Soft skills */}
          <div className="bg-[#ede9e2] border border-black/[0.06] rounded-2xl p-8">
            <h3 className="text-lg font-semibold text-[#1c1c1c] mb-6">Approche de travail</h3>
            <div className="flex flex-col gap-5">
              {[
                ['Écoute du brief', "Chaque projet commence par comprendre l'objectif, pas juste les dimensions du terrain."],
                ['Composition narrative', "Cadrage, point de vue, heure de la journée : chaque choix guide le regard du futur client."],
                ['Rigueur technique', "Cohérence des matériaux, des échelles et des ombres. Aucun détail incohérent ne passe."],
                ['Livraison structurée', "Plateforme de suivi, versioning, annotations directes sur les rendus. Zéro email perdu."],
              ].map(([titre, desc]) => (
                <div key={titre} className="flex gap-4 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1c1c1c] mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[#1c1c1c] mb-1">{titre}</p>
                    <p className="text-sm text-[#9a9a9a] leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Formation ── */}
        <div className="mb-28">
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 text-[#1c1c1c] text-xs font-medium tracking-[0.15em] uppercase mb-3">
              <span className="block w-4 h-px bg-[#1c1c1c]" />
              Parcours
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1c1c1c]">Formation.</h2>
          </div>
          <div className="relative">
            {/* Ligne verticale */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-black/[0.1] hidden sm:block" />
            <div className="flex flex-col gap-10">
              {formation.map(({ period, title, school, desc }, i) => (
                <div key={i} className="sm:pl-10 relative">
                  <div className="hidden sm:block absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full
                                  border-2 border-[#1c1c1c] bg-white" />
                  <p className="text-xs font-medium tracking-wider uppercase text-[#1c1c1c] mb-2">{period}</p>
                  <h3 className="text-base font-semibold text-[#1c1c1c] mb-0.5">{title}</h3>
                  <p className="text-xs text-[#9a9a9a] mb-3 tracking-wide">{school}</p>
                  <p className="text-sm text-[#9a9a9a] leading-relaxed max-w-[52ch]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Projets sélectionnés ── */}
        <div className="mb-28">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <span className="inline-flex items-center gap-2 text-[#1c1c1c] text-xs font-medium tracking-[0.15em] uppercase mb-3">
                <span className="block w-4 h-px bg-[#1c1c1c]" />
                Réalisations
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1c1c1c]">Projets sélectionnés.</h2>
            </div>
            <Link
              href="/projets"
              className="text-xs font-medium tracking-wider uppercase text-[#9a9a9a]
                         border border-[rgba(28,28,28,0.12)] px-5 py-2.5 rounded-full
                         hover:text-[#1c1c1c] hover:border-black/30 transition-all"
            >
              Voir tous les projets →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {projects.map(({ title, tags, img, desc }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl bg-[#ede9e2]
                           border border-black/[0.06] hover:border-[rgba(28,28,28,0.12)] transition-all"
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
                  <h3 className="text-sm font-semibold text-[#1c1c1c] mb-2">{title}</h3>
                  <p className="text-xs text-[#9a9a9a] leading-relaxed mb-3">{desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map(tag => (
                      <span key={tag} className="text-[10px] font-medium tracking-wider text-[#9a9a9a]
                                                  border border-[rgba(28,28,28,0.1)] px-2 py-1 rounded-full">
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
        <div className="bg-[#ede9e2] border border-[rgba(28,28,28,0.1)] rounded-3xl p-10 sm:p-14 text-center">
          <span className="inline-flex items-center gap-2 text-[#1c1c1c] text-xs font-medium tracking-[0.15em] uppercase mb-4">
            <span className="block w-4 h-px bg-[#1c1c1c]" />
            Collaboration
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1c1c1c] mb-4">
            Un projet à faire ressentir ?
          </h2>
          <p className="text-lg font-light text-[#9a9a9a] mb-8 max-w-[44ch] mx-auto leading-relaxed">
            Studio indépendant basé à Rennes, disponible pour de nouveaux projets en France,
            100 % à distance. Je vous réponds personnellement sous 24h.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase
                         text-[#f7f5f1] bg-[#1c1c1c] px-8 py-4 rounded-full
                         hover:bg-[#333333] hover:-translate-y-0.5
                         
                         transition-all duration-200"
            >
              Démarrer mon projet
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link
              href="/projets"
              className="inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase
                         text-[#6b6b6b] border border-[rgba(28,28,28,0.12)] px-8 py-4 rounded-full
                         hover:text-[#1c1c1c] hover:border-black/30 transition-all duration-200"
            >
              Voir les projets
            </Link>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-[rgba(28,28,28,0.07)] mt-20 py-8 px-6">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between flex-wrap gap-4">
          <p className="text-xs text-[#9a9a9a]">© 2026 BenRaff Studio · Benjamin Raffegeau · Rennes</p>
          <div className="flex items-center gap-5">
            <Link href="/mentions-legales" className="text-xs text-[#9a9a9a] hover:text-[#1c1c1c] transition-colors">Mentions légales</Link>
            <Link href="/politique-de-confidentialite" className="text-xs text-[#9a9a9a] hover:text-[#1c1c1c] transition-colors">Confidentialité</Link>
            <Link href="/" className="text-xs text-[#9a9a9a] hover:text-[#1c1c1c] transition-colors">← Site principal</Link>
          </div>
        </div>
      </footer>

    </div>
  )
}
