export type PortfolioProject = {
  id: number
  slug: string
  category: string
  /** true = aménagement extérieur (paysagisme, piscine, pool house) : le cœur de cible.
   *  false = autres secteurs, regroupés à part et masqués par défaut sur /projets. */
  niche: boolean
  year: string
  title: string
  desc: string
  intention: string
  image: string
  tags: string[]
  fullDesc: string
  context: string
  brief: string
  livraison: string
  images: string[]
  video?: string
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    slug: 'pool-house-bretagne',
    category: 'Aménagement extérieur',
    niche: true,
    year: '2024',
    title: 'Pool house · Bretagne',
    desc: "Terrasse bois, fire pit, piscine, cuisine outdoor. Ambiance fin de journée d'été en lumière dorée.",
    intention: "Faire ressentir la douceur d'un soir d'été avant même que le premier mur ne sorte de terre.",
    image: '/projets/pool-house/vue-2_final.webp',
    tags: ['Extérieur', '5 vues 4K'],
    fullDesc: "Étude de cas autour d'un projet d'aménagement extérieur complet en Bretagne. L'intention : capturer l'atmosphère d'une fin de journée d'été, lumière dorée rasante, ombres longues, chaleur douce. Terrasse bois avec fire pit, piscine, pool house, cuisine outdoor, sauna.",
    context: "Tout le travail s'est concentré sur l'heure : une lumière dorée rasante de fin de journée, qui allonge les ombres et réchauffe le bois de la terrasse. Le fire pit devient le point d'ancrage émotionnel de la série, là où l'œil se pose et où le futur acquéreur se projette. Chaque cadrage a été pensé pour donner envie de s'y trouver, pas seulement pour documenter l'aménagement.",
    brief: "Aménagement extérieur haut de gamme en Bretagne. Objectif : traduire visuellement l'atmosphère d'un soir d'été pour permettre la projection émotionnelle d'un futur acquéreur.",
    livraison: "5 vues 4K · Modélisation complète du terrain et des structures · Post-production ambiance dorée · Livrées en 5 jours",
    images: [
      '/projets/pool-house/vue-2_final.webp',
      '/projets/pool-house/vie-1.webp',
      '/projets/pool-house/vue-3.webp',
      '/projets/pool-house/vue-4.webp',
      '/projets/pool-house/vue-5.webp',
    ],
  },
  {
    id: 4,
    slug: 'allee-paysagee',
    category: 'Paysagisme',
    niche: true,
    year: '2024',
    title: 'Allée paysagée',
    desc: 'Cheminement végétalisé dense. Bambous, houppiers, couvre-sol. Une allée privée, intime, à échelle réelle.',
    intention: "Rendre tangible l'intimité d'un cheminement privé que l'on a envie de remonter.",
    image: '/projets/allee-paysagee/scene-10-final-4k.webp',
    tags: ['Extérieur', '1 vue 4K'],
    fullDesc: "Étude de cas autour d'une allée carrossable entièrement végétalisée. La voiture permet d'ancrer l'échelle du projet. La masse végétale dense crée une sensation de cheminement privé et abrité.",
    context: "Une seule vue, mais une vue qui devait tout dire. La profondeur de champ guide le regard le long de l'allée, tandis que la palette végétale dense, modélisée manuellement, crée une sensation d'intimité. La voiture n'est pas décorative : elle ancre l'échelle et rend l'implantation immédiatement crédible.",
    brief: "Allée d'accès à une propriété privée. Objectif : rendre tangible l'intimité et la densité végétale du projet.",
    livraison: "1 vue 4K · Profondeur de champ travaillée · Palette végétale haute densité modélisée manuellement",
    images: ['/projets/allee-paysagee/scene-10-final-4k.webp'],
  },
  {
    id: 6,
    slug: 'lodge-privatif',
    category: 'Architecture nature',
    niche: true,
    year: '2025',
    title: 'Lodge privatif',
    desc: 'Volume bois intégré dans le paysage. Matérialité brute, lumière naturelle, ancrage au sol.',
    intention: "Montrer un volume qui appartient déjà à son paysage, comme s'il avait toujours été là.",
    image: "/projets/lodge-privatif/vue-d-ensemble.webp",
    tags: ['Extérieur', '2 vues 4K'],
    fullDesc: "Étude de cas autour d'un lodge privatif intégré dans son environnement naturel. La vue d'ensemble ancre le volume dans le paysage, le close-up explore les textures.",
    context: "Le travail s'est porté sur l'intégration paysagère : un volume bois qui ne s'impose pas mais dialogue avec son environnement. La vue d'ensemble ancre le bâtiment dans le sol et la végétation ; le close-up révèle la matérialité brute du bois, sa texture, sa vérité.",
    brief: "Lodge privatif en milieu naturel. Objectif : montrer l'intégration paysagère et valoriser la matérialité brute.",
    livraison: "2 vues 4K · Vue d'ensemble + close-up matière",
    images: [
      "/projets/lodge-privatif/vue-d-ensemble.webp",
      '/projets/lodge-privatif/close-up.webp',
    ],
  },
  {
    id: 2,
    slug: 'cuisine-rose-noire',
    category: 'Design intérieur',
    niche: false,
    year: '2024',
    title: 'Cuisine rose & noire',
    desc: 'Îlot central, crédence terracotta, plan de travail terrazzo. Trois angles, un seul espace.',
    intention: "Donner à un showroom la présence d'une cuisine déjà habitée, matière par matière.",
    image: '/projets/cuisine-rose/face-cuisine.webp',
    tags: ['Intérieur', '3 vues 4K'],
    fullDesc: "Étude de cas autour d'une cuisine bicolore noir/rose. La vue frontale met en scène l'îlot et la crédence carrelage rose terracotta. La vue latérale révèle la profondeur du plan de travail et la cave à vin intégrée. Le close-up valorise le terrazzo et les détails de robinetterie.",
    context: "La série joue sur le contraste entre le noir profond des meubles et la chaleur du terracotta. Trois angles complémentaires racontent le même espace : l'ensemble, la profondeur, puis le détail de matière. Le close-up sur le terrazzo et la robinetterie sert à crédibiliser la qualité, un argument décisif en showroom.",
    brief: "Cuisine de showroom bicolore. Objectif : valoriser chaque angle de l'espace et mettre en avant la qualité des matériaux.",
    livraison: "3 vues 4K · Frontale, latérale et close-up matière · Rendu photoréaliste complet",
    images: [
      '/projets/cuisine-rose/face-cuisine.webp',
      '/projets/cuisine-rose/vue-cote-final-4k.webp',
      '/projets/cuisine-rose/close-up-final-4k.webp',
    ],
  },
  {
    id: 3,
    slug: 'interieur-scandinave',
    category: 'Design intérieur',
    niche: false,
    year: '2025',
    title: 'Intérieur scandinave',
    desc: 'Salon, cuisine ouverte, salle à manger. Matières naturelles, lumière douce, cohérence totale.',
    intention: "Faire sentir la lumière du Nord : douce, abondante, qui apaise l'espace.",
    image: '/projets/interieur-scandinave/salon-face.webp',
    tags: ['Intérieur', '5 vues 4K'],
    fullDesc: "Étude de cas explorant un intérieur aux codes scandinaves : matières naturelles, palette neutre, lumière douce et abondante. Cinq vues couvrent l'ensemble de l'espace.",
    context: "L'enjeu était la cohérence : cinq vues qui doivent appartenir au même monde, partager la même lumière et la même palette. La lumière naturelle douce, diffuse, sans contraste agressif, devient le fil conducteur. Les matières naturelles et les tons neutres assurent une continuité de lecture d'une pièce à l'autre.",
    brief: "Résidence aux codes nordiques. Objectif : créer une série de vues cohérentes capables de couvrir toutes les pièces de vie.",
    livraison: "5 vues 4K · Couverture complète salon, cuisine, salle à manger, close-up",
    images: [
      "/projets/interieur-scandinave/salon-face.webp",
      "/projets/interieur-scandinave/vue-d-ensemble.webp",
      '/projets/interieur-scandinave/cuisine.webp',
      '/projets/interieur-scandinave/salle-a-manger.webp',
      '/projets/interieur-scandinave/close-up-salon.webp',
    ],
  },
  {
    id: 5,
    slug: 'maison-moderne',
    category: 'Architecture résidentielle',
    niche: false,
    year: '2023',
    title: 'Maison moderne',
    desc: "De l'enveloppe extérieure aux détails intérieurs. Mobilier, textures, lumière naturelle.",
    intention: "Raconter une maison comme un lieu de vie continu, du dehors au dedans.",
    image: '/projets/interieur/scene-37_2_inpainting02.webp',
    tags: ['Intérieur', 'Extérieur', '6 vues + animation'],
    fullDesc: "Étude de cas explorant une maison moderne de l'enveloppe extérieure aux détails intérieurs. Les vues intérieures travaillent la cohérence du mobilier et des textures.",
    context: "La série relie deux univers souvent traités séparément : l'enveloppe architecturale et les espaces intérieurs. L'enjeu narratif était la continuité, faire sentir qu'on passe du dehors au dedans sans rupture de lumière ni de matière. Une animation prolonge l'expérience en mouvement.",
    brief: "Maison individuelle contemporaine. Objectif : couvrir à la fois l'enveloppe architecturale et les espaces intérieurs.",
    livraison: "6 vues 4K + 1 animation · Extérieur, intérieur, close-up textures",
    images: [
      '/projets/interieur/scene-37_2_inpainting02.webp',
      "/projets/interieur/vue-d-ensemble-maison_upscale04.webp",
      '/projets/interieur/v2scene-41.webp',
    ],
  },
  {
    id: 7,
    slug: 'lycee',
    category: 'Équipement public',
    niche: false,
    year: '2025',
    title: 'Lycée',
    desc: "Insertion urbaine, volume général, espaces communs. Un équipement éducatif présenté pour concours.",
    intention: "Donner à un jury la conviction d'un projet, pas seulement la lecture d'un plan.",
    image: '/projets/lycee/vue-eloignee.webp',
    tags: ['Architecture', '2 vues 4K'],
    fullDesc: "Étude de cas autour de la visualisation d'un lycée, bâtiment d'équipement public à vocation éducative. Vue éloignée et vue intérieure.",
    context: "En contexte de concours, l'image doit emporter la conviction d'un jury. La vue urbaine éloignée situe le bâtiment dans son tissu et révèle son insertion ; la vue intérieure humanise l'équipement et fait sentir l'usage. Deux échelles, une même intention : convaincre.",
    brief: "Équipement public éducatif. Objectif : produire des rendus convaincants pour dossier de concours d'architecture.",
    livraison: "2 vues 4K · Vue urbaine éloignée + espace intérieur commun",
    images: [
      '/projets/lycee/vue-eloignee.webp',
      '/projets/lycee/vue-interieur.webp',
    ],
  },
  {
    id: 8,
    slug: 'mediatheque',
    category: 'Équipement public',
    niche: false,
    year: '2025',
    title: 'Médiathèque',
    desc: "Transparence, volumétrie, dialogue avec l'espace urbain. Trois vues pour un dossier institutionnel.",
    intention: "Rendre lisible la transparence d'un équipement culturel et son dialogue avec la ville.",
    image: "/projets/mediatheque/vue-d-ensemble-1.webp",
    tags: ['Architecture', '3 vues 4K'],
    fullDesc: "Étude de cas autour d'une médiathèque contemporaine. Deux vues d'ensemble et un zoom façade.",
    context: "La série met en valeur la transparence et la volumétrie de l'équipement. Deux angles d'ensemble racontent le dialogue du bâtiment avec l'espace urbain ; le zoom façade rend lisibles les choix architecturaux, un point décisif pour un dossier institutionnel.",
    brief: "Équipement culturel public. Objectif : rendre lisibles les choix architecturaux pour un dossier institutionnel.",
    livraison: "3 vues 4K · Deux angles d'ensemble + zoom façade",
    images: [
      "/projets/mediatheque/vue-d-ensemble-1.webp",
      "/projets/mediatheque/vue-d-ensemble-2.webp",
      '/projets/mediatheque/zoom.webp',
    ],
  },
]

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((p) => p.slug === slug)
}

/** Cœur de cible : aménagement extérieur. Seuls ces projets sont mis en avant. */
export const nicheProjects = portfolioProjects.filter((p) => p.niche)

/** Autres secteurs : repliés par défaut sur /projets, jamais sur l'accueil. */
export const autresSecteursProjects = portfolioProjects.filter((p) => !p.niche)
