"use client"
import InteractiveImageBentoGallery, { type ImageItem } from "@/components/ui/bento-gallery"

const portfolioItems: ImageItem[] = [
  // ── Projet 1 : Aménagement extérieur ─────────────────────────────────────
  {
    id: 1,
    title: "Aménagement extérieur · Bretagne",
    desc: "Terrasse · Pool house · Ambiance fin de journée d'été",
    url: "/projets/pool-house/Vue 2_final.png",
    span: "row-span-2 col-span-2",
    category: "Étude de cas",
    year: "2024",
    tags: ["Extérieur", "Pool house", "Fire pit", "4K", "Cuisine outdoor", "Sauna"],
    fullDesc: "Étude de cas autour d'un projet d'aménagement extérieur complet en Bretagne. L'intention : capturer l'atmosphère d'une fin de journée d'été, lumière dorée rasante, ombres longues, chaleur douce. Terrasse bois avec fire pit, piscine, pool house, cuisine outdoor, sauna. Chaque vue a été composée pour faire ressentir ce moment précis où l'on n'a plus envie d'être ailleurs.",
    brief: "Aménagement extérieur haut de gamme en Bretagne. Objectif : traduire visuellement l'atmosphère d'un soir d'été pour permettre la projection émotionnelle d'un futur acquéreur.",
    livraison: "5 vues 4K · Modélisation complète du terrain et des structures · Post-production ambiance dorée · Livrées en 5 jours",
    images: [
      "/projets/pool-house/Vue 2_final.png",
      "/projets/pool-house/Vie 1.png",
      "/projets/pool-house/Vue 3.png",
      "/projets/pool-house/Vue 4.png",
      "/projets/pool-house/Vue 5.png",
    ],
  },

  // ── Projet 2 : Cuisine rose & noire ──────────────────────────────────────
  {
    id: 2,
    title: "Cuisine rose & noire",
    desc: "Façade · Angle · Close-up plan de travail",
    url: "/projets/cuisine-rose/Face cuisine.png",
    span: "row-span-1",
    category: "Étude de cas",
    year: "2024",
    tags: ["Intérieur", "Cuisine", "Terrazzo", "4K", "Close-up"],
    fullDesc: "Étude de cas autour d'une cuisine bicolore noir/rose. La vue frontale met en scène l'îlot et la crédence carrelage rose terracotta. La vue latérale révèle la profondeur du plan de travail et la cave à vin intégrée. Le close-up valorise le terrazzo et les détails de robinetterie, exercice de cadrage et de rendu matière.",
    brief: "Cuisine de showroom bicolore. Objectif : valoriser chaque angle de l'espace et mettre en avant la qualité des matériaux (terrazzo, carrelage artisanal, robinetterie design).",
    livraison: "3 vues 4K · Frontale, latérale et close-up matière · Rendu photoréaliste complet",
    images: [
      "/projets/cuisine-rose/Face cuisine.png",
      "/projets/cuisine-rose/Vue coté final 4K.png",
      "/projets/cuisine-rose/Close up final 4K.png",
    ],
  },

  // ── Projet 3 : Intérieur scandinave ──────────────────────────────────────
  {
    id: 3,
    title: "Intérieur scandinave",
    desc: "Salon · Cuisine · Salle à manger · Close-up",
    url: "/projets/Intérieur scandinave/Salon face.jpeg",
    span: "row-span-2",
    category: "Étude de cas",
    year: "2025",
    tags: ["Intérieur", "Scandinave", "Salon", "Cuisine", "Lumière naturelle", "4K"],
    fullDesc: "Étude de cas explorant un intérieur aux codes scandinaves : matières naturelles, palette neutre, lumière douce et abondante. Cinq vues couvrent l'ensemble de l'espace : salon en face et en close-up, cuisine ouverte, salle à manger et vue d'ensemble. Un exercice sur la cohérence des matériaux et la narration lumineuse à travers les pièces.",
    brief: "Résidence aux codes nordiques. Objectif : créer une série de vues cohérentes capables de couvrir toutes les pièces de vie pour une présentation complète à un maître d'ouvrage.",
    livraison: "5 vues 4K · Couverture complète salon, cuisine, salle à manger, close-up · Cohérence lumineuse maintenue sur toutes les vues",
    images: [
      "/projets/Intérieur scandinave/Salon face.jpeg",
      "/projets/Intérieur scandinave/Vue d'ensemble.jpeg",
      "/projets/Intérieur scandinave/Cuisine.jpeg",
      "/projets/Intérieur scandinave/Salle à manger.jpeg",
      "/projets/Intérieur scandinave/Close up Salon.jpeg",
    ],
  },

  // ── Projet 4 : Allée paysagée ─────────────────────────────────────────────
  {
    id: 4,
    title: "Allée paysagée",
    desc: "Accès végétalisé · Ambiance forêt",
    url: "/projets/allee-paysagee/Scène 10 final 4K.jpg",
    span: "row-span-1 col-span-2",
    category: "Étude de cas",
    year: "2024",
    tags: ["Paysagisme", "Allée", "Végétation", "4K"],
    fullDesc: "Étude de cas autour d'une allée carrossable entièrement végétalisée. La voiture permet d'ancrer l'échelle du projet. La végétation dense (arbres à houppier, couvre-sol et bambous) crée une sensation de chemin privé et secret. Exercice sur l'intégration paysagère et la profondeur de champ en extérieur.",
    brief: "Allée d'accès à une propriété privée. Objectif : rendre tangible l'intimité et la végétalisation dense du projet pour convaincre le client final de valider l'aménagement paysager.",
    livraison: "1 vue 4K · Profondeur de champ travaillée · Végétation haute densité modélisée manuellement",
    images: [
      "/projets/allee-paysagee/Scène 10 final 4K.jpg",
    ],
  },

  // ── Projet 5 : Maison moderne ─────────────────────────────────────────────
  {
    id: 5,
    title: "Maison moderne · Intérieur & Extérieur",
    desc: "Vues intérieures · Extérieur · Zoom mobilier & textures",
    url: "/projets/interieur/Scène 37_2_inpainting02.png",
    span: "row-span-1",
    category: "Étude de cas",
    year: "2023",
    tags: ["Intérieur", "Extérieur", "Maison moderne", "Mobilier", "Textures", "4K"],
    fullDesc: "Étude de cas explorant une maison moderne de l'enveloppe extérieure aux détails intérieurs. Les vues intérieures travaillent la cohérence du mobilier et des textures : matières, finitions, lumière naturelle. Les zooms sur les détails permettent de pousser la précision du rendu matière jusqu'aux reflets et micro-surfaces.",
    brief: "Maison individuelle contemporaine. Objectif : couvrir à la fois l'enveloppe architecturale et les espaces intérieurs pour une présentation complète (promoteur ou architecte).",
    livraison: "6 vues 4K + 1 animation · Extérieur, intérieur, close-up textures · Intégration IA pour les vues généralistes",
    images: [
      "/projets/interieur/Scène 37_2_inpainting02.png",
      "/projets/interieur/Vue d'ensemble maison_upscale04.png",
      "/projets/interieur/V2Scène 41.png",
      "/projets/interieur/Generated Image May 08, 2026 - 7_13PM.jpg",
      "/projets/interieur/Generated Image May 08, 2026 - 7_19PM.jpg",
      "/projets/interieur/kling_20260516_作品_the_camera_4692_0.mp4",
    ],
  },

  // ── Projet 6 : Lodge privatif ─────────────────────────────────────────────
  {
    id: 6,
    title: "Lodge privatif",
    desc: "Vue d'ensemble · Close-up matières",
    url: "/projets/Lodge privatif/Vue d'ensemble.jpeg",
    span: "row-span-1 col-span-2",
    category: "Étude de cas",
    year: "2025",
    tags: ["Extérieur", "Lodge", "Bois", "Naturel", "4K"],
    fullDesc: "Étude de cas autour d'un lodge privatif intégré dans son environnement naturel. La vue d'ensemble ancre le volume dans le paysage, le close-up explore les textures : bois, pierre, végétation environnante. Exercice sur l'intégration architecturale et la lisibilité des matériaux en lumière naturelle.",
    brief: "Lodge privatif en milieu naturel. Objectif : montrer l'intégration paysagère et valoriser la matérialité brute de la structure (bois massif, pierre locale) en lumière naturelle.",
    livraison: "2 vues 4K · Vue d'ensemble + close-up matière · Végétation environnante modélisée",
    images: [
      "/projets/Lodge privatif/Vue d'ensemble.jpeg",
      "/projets/Lodge privatif/Close up.jpeg",
    ],
  },

  // ── Projet 7 : Lycée ──────────────────────────────────────────────────────
  {
    id: 7,
    title: "Lycée",
    desc: "Vue extérieure · Vue intérieure",
    url: "/projets/Lycée/Vue éloignée.jpeg",
    span: "row-span-2",
    category: "Étude de cas",
    year: "2025",
    tags: ["Architecture", "Équipement public", "Extérieur", "Intérieur", "4K"],
    fullDesc: "Étude de cas autour de la visualisation d'un lycée, bâtiment d'équipement public à vocation éducative. La vue éloignée présente l'insertion urbaine et le volume général. La vue intérieure explore la qualité des espaces communs, la lumière et l'atmosphère du lieu de vie que l'architecture promet aux usagers.",
    brief: "Équipement public éducatif. Objectif : produire des rendus convaincants pour présentation en comité de validation ou dossier de concours d'architecture.",
    livraison: "2 vues 4K · Vue urbaine éloignée + espace intérieur commun · Lumière réaliste de mi-journée",
    images: [
      "/projets/Lycée/Vue éloignée.jpeg",
      "/projets/Lycée/Vue intérieur.jpeg",
    ],
  },

  // ── Projet 8 : Médiathèque ────────────────────────────────────────────────
  {
    id: 8,
    title: "Médiathèque",
    desc: "Vue d'ensemble · Zoom façade",
    url: "/projets/Médiathèque/Vue d'ensemble 1.jpeg",
    span: "row-span-1 col-span-2",
    category: "Étude de cas",
    year: "2025",
    tags: ["Architecture", "Équipement public", "Façade", "Lumière", "4K"],
    fullDesc: "Étude de cas autour d'une médiathèque contemporaine. Deux vues d'ensemble montrent l'édifice sous des angles complémentaires : implantation, volumétrie, dialogue avec l'espace public. Le zoom façade permet de lire les détails architecturaux, les jeux de transparence et la matérialité du projet.",
    brief: "Équipement culturel public. Objectif : rendre lisibles les choix architecturaux (transparence, dialogue avec l'espace urbain) pour un dossier de présentation institutionnelle.",
    livraison: "3 vues 4K · Deux angles d'ensemble + zoom façade · Traitement de la lumière urbaine et des reflets",
    images: [
      "/projets/Médiathèque/Vue d'ensemble 1.jpeg",
      "/projets/Médiathèque/Vue d'ensemble 2.jpeg",
      "/projets/Médiathèque/Zoom.jpeg",
    ],
  },
]

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-[#f5f4f0] py-24 sm:py-32 overflow-hidden"
      aria-labelledby="portfolio-title"
    >
      <InteractiveImageBentoGallery
        imageItems={portfolioItems}
        title="Des études de cas"
        description="Glissez pour explorer. Cliquez pour ouvrir le projet complet."
      />

      {/* CTA strip */}
      <div className="mt-14 mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <div className="pt-12 border-t border-black/[0.08] flex flex-col sm:flex-row
                        items-start sm:items-center justify-between gap-6">
          <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#0f0f0f]">
            Vous avez un projet à visualiser ?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-xs font-semibold tracking-wider
                       uppercase text-[#080808] bg-[#c8e84e] px-8 py-4 rounded-full flex-shrink-0
                       hover:bg-[#d4f05a] hover:-translate-y-0.5
                       hover:shadow-[0_8px_32px_rgba(200,232,78,0.35)]
                       transition-all duration-200"
          >
            Parler de mon projet
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
