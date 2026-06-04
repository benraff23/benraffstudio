'use client'
import Link from 'next/link'
import { useRef } from 'react'

export const portfolioProjects = [
  {
    id: 1,
    category: 'Aménagement extérieur',
    year: '2024',
    title: 'Pool house · Bretagne',
    desc: "Terrasse bois, fire pit, piscine, cuisine outdoor. Ambiance fin de journée d'été en lumière dorée.",
    image: '/projets/pool-house/Vue 2_final.png',
    tags: ['Extérieur', '5 vues 4K'],
    fullDesc: "Étude de cas autour d'un projet d'aménagement extérieur complet en Bretagne. L'intention : capturer l'atmosphère d'une fin de journée d'été, lumière dorée rasante, ombres longues, chaleur douce. Terrasse bois avec fire pit, piscine, pool house, cuisine outdoor, sauna.",
    brief: "Aménagement extérieur haut de gamme en Bretagne. Objectif : traduire visuellement l'atmosphère d'un soir d'été pour permettre la projection émotionnelle d'un futur acquéreur.",
    livraison: "5 vues 4K · Modélisation complète du terrain et des structures · Post-production ambiance dorée · Livrées en 5 jours",
    images: [
      '/projets/pool-house/Vue 2_final.png',
      '/projets/pool-house/Vie 1.png',
      '/projets/pool-house/Vue 3.png',
      '/projets/pool-house/Vue 4.png',
      '/projets/pool-house/Vue 5.png',
    ],
  },
  {
    id: 2,
    category: 'Design intérieur',
    year: '2024',
    title: 'Cuisine rose & noire',
    desc: 'Îlot central, crédence terracotta, plan de travail terrazzo. Trois angles, un seul espace.',
    image: '/projets/cuisine-rose/Face cuisine.png',
    tags: ['Intérieur', '3 vues 4K'],
    fullDesc: "Étude de cas autour d'une cuisine bicolore noir/rose. La vue frontale met en scène l'îlot et la crédence carrelage rose terracotta. La vue latérale révèle la profondeur du plan de travail et la cave à vin intégrée. Le close-up valorise le terrazzo et les détails de robinetterie.",
    brief: "Cuisine de showroom bicolore. Objectif : valoriser chaque angle de l'espace et mettre en avant la qualité des matériaux.",
    livraison: "3 vues 4K · Frontale, latérale et close-up matière · Rendu photoréaliste complet",
    images: [
      '/projets/cuisine-rose/Face cuisine.png',
      '/projets/cuisine-rose/Vue coté final 4K.png',
      '/projets/cuisine-rose/Close up final 4K.png',
    ],
  },
  {
    id: 3,
    category: 'Design intérieur',
    year: '2025',
    title: 'Intérieur scandinave',
    desc: 'Salon, cuisine ouverte, salle à manger. Matières naturelles, lumière douce, cohérence totale.',
    image: '/projets/Intérieur scandinave/Salon face.jpeg',
    tags: ['Intérieur', '5 vues 4K'],
    fullDesc: "Étude de cas explorant un intérieur aux codes scandinaves : matières naturelles, palette neutre, lumière douce et abondante. Cinq vues couvrent l'ensemble de l'espace.",
    brief: "Résidence aux codes nordiques. Objectif : créer une série de vues cohérentes capables de couvrir toutes les pièces de vie.",
    livraison: "5 vues 4K · Couverture complète salon, cuisine, salle à manger, close-up",
    images: [
      '/projets/Intérieur scandinave/Salon face.jpeg',
      '/projets/Intérieur scandinave/Vue d\'ensemble.jpeg',
      '/projets/Intérieur scandinave/Cuisine.jpeg',
      '/projets/Intérieur scandinave/Salle à manger.jpeg',
      '/projets/Intérieur scandinave/Close up Salon.jpeg',
    ],
  },
  {
    id: 4,
    category: 'Paysagisme',
    year: '2024',
    title: 'Allée paysagée',
    desc: 'Allée végétalisée dense. Bambous, houppiers, couvre-sol. Un chemin privé, secret, à échelle réelle.',
    image: '/projets/allee-paysagee/Scène 10 final 4K.jpg',
    tags: ['Extérieur', '1 vue 4K'],
    fullDesc: "Étude de cas autour d'une allée carrossable entièrement végétalisée. La voiture permet d'ancrer l'échelle du projet. La végétation dense crée une sensation de chemin privé et secret.",
    brief: "Allée d'accès à une propriété privée. Objectif : rendre tangible l'intimité et la végétalisation dense du projet.",
    livraison: "1 vue 4K · Profondeur de champ travaillée · Végétation haute densité modélisée manuellement",
    images: ['/projets/allee-paysagee/Scène 10 final 4K.jpg'],
  },
  {
    id: 5,
    category: 'Architecture résidentielle',
    year: '2023',
    title: 'Maison moderne',
    desc: "De l'enveloppe extérieure aux détails intérieurs. Mobilier, textures, lumière naturelle.",
    image: '/projets/interieur/Scène 37_2_inpainting02.png',
    tags: ['Intérieur', 'Extérieur', '6 vues + animation'],
    fullDesc: "Étude de cas explorant une maison moderne de l'enveloppe extérieure aux détails intérieurs. Les vues intérieures travaillent la cohérence du mobilier et des textures.",
    brief: "Maison individuelle contemporaine. Objectif : couvrir à la fois l'enveloppe architecturale et les espaces intérieurs.",
    livraison: "6 vues 4K + 1 animation · Extérieur, intérieur, close-up textures",
    images: [
      '/projets/interieur/Scène 37_2_inpainting02.png',
      '/projets/interieur/Vue d\'ensemble maison_upscale04.png',
      '/projets/interieur/V2Scène 41.png',
    ],
  },
  {
    id: 6,
    category: 'Architecture nature',
    year: '2025',
    title: 'Lodge privatif',
    desc: 'Volume bois intégré dans le paysage. Matérialité brute, lumière naturelle, ancrage au sol.',
    image: '/projets/Lodge privatif/Vue d\'ensemble.jpeg',
    tags: ['Extérieur', '2 vues 4K'],
    fullDesc: "Étude de cas autour d'un lodge privatif intégré dans son environnement naturel. La vue d'ensemble ancre le volume dans le paysage, le close-up explore les textures.",
    brief: "Lodge privatif en milieu naturel. Objectif : montrer l'intégration paysagère et valoriser la matérialité brute.",
    livraison: "2 vues 4K · Vue d'ensemble + close-up matière",
    images: [
      '/projets/Lodge privatif/Vue d\'ensemble.jpeg',
      '/projets/Lodge privatif/Close up.jpeg',
    ],
  },
  {
    id: 7,
    category: 'Équipement public',
    year: '2025',
    title: 'Lycée',
    desc: "Insertion urbaine, volume général, espaces communs. Un équipement éducatif présenté pour concours.",
    image: '/projets/Lycée/Vue éloignée.jpeg',
    tags: ['Architecture', '2 vues 4K'],
    fullDesc: "Étude de cas autour de la visualisation d'un lycée, bâtiment d'équipement public à vocation éducative. Vue éloignée et vue intérieure.",
    brief: "Équipement public éducatif. Objectif : produire des rendus convaincants pour dossier de concours d'architecture.",
    livraison: "2 vues 4K · Vue urbaine éloignée + espace intérieur commun",
    images: [
      '/projets/Lycée/Vue éloignée.jpeg',
      '/projets/Lycée/Vue intérieur.jpeg',
    ],
  },
  {
    id: 8,
    category: 'Équipement public',
    year: '2025',
    title: 'Médiathèque',
    desc: "Transparence, volumétrie, dialogue avec l'espace urbain. Trois vues pour un dossier institutionnel.",
    image: '/projets/Médiathèque/Vue d\'ensemble 1.jpeg',
    tags: ['Architecture', '3 vues 4K'],
    fullDesc: "Étude de cas autour d'une médiathèque contemporaine. Deux vues d'ensemble et un zoom façade.",
    brief: "Équipement culturel public. Objectif : rendre lisibles les choix architecturaux pour un dossier institutionnel.",
    livraison: "3 vues 4K · Deux angles d'ensemble + zoom façade",
    images: [
      '/projets/Médiathèque/Vue d\'ensemble 1.jpeg',
      '/projets/Médiathèque/Vue d\'ensemble 2.jpeg',
      '/projets/Médiathèque/Zoom.jpeg',
    ],
  },
]

export default function Portfolio() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section
      id="portfolio"
      className="bg-[#1e1e1e] py-24 sm:py-32 overflow-hidden"
      aria-labelledby="portfolio-title"
    >
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-[var(--gutter)] mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <span className="label">Études de cas</span>
          <h2 id="portfolio-title" className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-white">
            Projets réalisés.
          </h2>
          <p className="mt-3 text-base font-light text-[#9a9a9a]">
            Glissez pour explorer · Chaque projet raconte une intention.
          </p>
        </div>
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase
                     text-white border border-white/[0.14] px-6 py-3 rounded-full flex-shrink-0
                     hover:border-white/30 hover:-translate-y-0.5 transition-all duration-200"
        >
          Voir tous les projets
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>

      {/* Carousel horizontal */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 px-[var(--gutter)]
                   snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        data-lenis-prevent
      >
        {portfolioProjects.map((project) => (
          <Link
            key={project.id}
            href={`/portfolio#projet-${project.id}`}
            className="flex-shrink-0 w-[300px] sm:w-[360px] snap-start group"
          >
            {/* Image uniforme */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center
                           transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              {/* Tags */}
              <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                {project.tags.slice(0, 2).map(tag => (
                  <span key={tag}
                    className="text-[10px] font-medium tracking-wider uppercase
                               bg-white/10 backdrop-blur-sm text-white/80 px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#c8e84e]">
                    {project.category}
                  </span>
                  <span className="text-[10px] text-white/40">· {project.year}</span>
                </div>
                <h3 className="text-base font-bold text-white mb-1.5 leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs text-white/60 leading-relaxed line-clamp-2">
                  {project.desc}
                </p>
              </div>
            </div>
          </Link>
        ))}

        {/* Dernière carte CTA */}
        <Link
          href="/portfolio"
          className="flex-shrink-0 w-[200px] sm:w-[240px] snap-start"
        >
          <div className="aspect-[3/4] rounded-2xl border border-white/[0.08] flex flex-col
                          items-center justify-center gap-4 text-center p-6
                          hover:border-[#c8e84e]/40 hover:bg-white/[0.02] transition-all duration-300">
            <div className="w-12 h-12 rounded-full border border-[#c8e84e]/40 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="#c8e84e" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-white mb-1">Tous les projets</p>
              <p className="text-xs text-[#9a9a9a]">8 études de cas</p>
            </div>
          </div>
        </Link>
      </div>

      {/* CTA strip */}
      <div className="mt-14 mx-auto max-w-[1400px] px-[var(--gutter)]">
        <div className="pt-12 border-t border-white/[0.06] flex flex-col sm:flex-row
                        items-start sm:items-center justify-between gap-6">
          <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
            Vous avez un projet à visualiser ?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider
                         uppercase text-white border border-white/[0.14] px-6 py-4 rounded-full
                         hover:border-white/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              Voir le portfolio
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 text-xs font-semibold tracking-wider
                         uppercase text-[#1e1e1e] bg-[#c8e84e] px-8 py-4 rounded-full
                         hover:bg-[#d4f05a] hover:-translate-y-0.5
                         hover:shadow-[0_8px_32px_rgba(200,232,78,0.35)]
                         transition-all duration-200"
            >
              Démarrer un projet
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
