export type PortfolioProject = {
  id: number
  slug: string
  category: string
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
    year: '2024',
    title: 'Pool house · Bretagne',
    desc: "Terrasse bois, fire pit, piscine, cuisine outdoor. Ambiance fin de journée d'été en lumière dorée.",
    intention: "Faire ressentir la douceur d'un soir d'été avant même que le premier mur ne sorte de terre.",
    image: '/projets/pool-house/Vue 2_final.png',
    tags: ['Extérieur', '5 vues 4K'],
    fullDesc: "Étude de cas autour d'un projet d'aménagement extérieur complet en Bretagne. L'intention : capturer l'atmosphère d'une fin de journée d'été, lumière dorée rasante, ombres longues, chaleur douce. Terrasse bois avec fire pit, piscine, pool house, cuisine outdoor, sauna.",
    context: "Tout le travail s'est concentré sur l'heure : une lumière dorée rasante de fin de journée, qui allonge les ombres et réchauffe le bois de la terrasse. Le fire pit devient le point d'ancrage émotionnel de la série, là où l'œil se pose et où le futur acquéreur se projette. Chaque cadrage a été pensé pour donner envie de s'y trouver, pas seulement pour documenter l'aménagement.",
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
    slug: 'cuisine-rose-noire',
    category: 'Design intérieur',
    year: '2024',
    title: 'Cuisine rose & noire',
    desc: 'Îlot central, crédence terracotta, plan de travail terrazzo. Trois angles, un seul espace.',
    intention: "Donner à un showroom la présence d'une cuisine déjà habitée, matière par matière.",
    image: '/projets/cuisine-rose/Face cuisine.png',
    tags: ['Intérieur', '3 vues 4K'],
    fullDesc: "Étude de cas autour d'une cuisine bicolore noir/rose. La vue frontale met en scène l'îlot et la crédence carrelage rose terracotta. La vue latérale révèle la profondeur du plan de travail et la cave à vin intégrée. Le close-up valorise le terrazzo et les détails de robinetterie.",
    context: "La série joue sur le contraste entre le noir profond des meubles et la chaleur du terracotta. Trois angles complémentaires racontent le même espace : l'ensemble, la profondeur, puis le détail de matière. Le close-up sur le terrazzo et la robinetterie sert à crédibiliser la qualité, un argument décisif en showroom.",
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
    slug: 'interieur-scandinave',
    category: 'Design intérieur',
    year: '2025',
    title: 'Intérieur scandinave',
    desc: 'Salon, cuisine ouverte, salle à manger. Matières naturelles, lumière douce, cohérence totale.',
    intention: "Faire sentir la lumière du Nord : douce, abondante, qui apaise l'espace.",
    image: '/projets/Intérieur scandinave/Salon face.jpeg',
    tags: ['Intérieur', '5 vues 4K'],
    fullDesc: "Étude de cas explorant un intérieur aux codes scandinaves : matières naturelles, palette neutre, lumière douce et abondante. Cinq vues couvrent l'ensemble de l'espace.",
    context: "L'enjeu était la cohérence : cinq vues qui doivent appartenir au même monde, partager la même lumière et la même palette. La lumière naturelle douce, diffuse, sans contraste agressif, devient le fil conducteur. Les matières naturelles et les tons neutres assurent une continuité de lecture d'une pièce à l'autre.",
    brief: "Résidence aux codes nordiques. Objectif : créer une série de vues cohérentes capables de couvrir toutes les pièces de vie.",
    livraison: "5 vues 4K · Couverture complète salon, cuisine, salle à manger, close-up",
    images: [
      "/projets/Intérieur scandinave/Salon face.jpeg",
      "/projets/Intérieur scandinave/Vue d'ensemble.jpeg",
      '/projets/Intérieur scandinave/Cuisine.jpeg',
      '/projets/Intérieur scandinave/Salle à manger.jpeg',
      '/projets/Intérieur scandinave/Close up Salon.jpeg',
    ],
  },
  {
    id: 4,
    slug: 'allee-paysagee',
    category: 'Paysagisme',
    year: '2024',
    title: 'Allée paysagée',
    desc: 'Allée végétalisée dense. Bambous, houppiers, couvre-sol. Un chemin privé, secret, à échelle réelle.',
    intention: "Rendre tangible l'intimité d'un chemin privé que l'on a envie de remonter.",
    image: '/projets/allee-paysagee/Scène 10 final 4K.jpg',
    tags: ['Extérieur', '1 vue 4K'],
    fullDesc: "Étude de cas autour d'une allée carrossable entièrement végétalisée. La voiture permet d'ancrer l'échelle du projet. La végétation dense crée une sensation de chemin privé et secret.",
    context: "Une seule vue, mais une vue qui devait tout dire. La profondeur de champ guide le regard le long de l'allée, tandis que la végétation dense, modélisée manuellement, crée une sensation d'intimité et de secret. La voiture n'est pas décorative : elle ancre l'échelle et rend le projet immédiatement crédible.",
    brief: "Allée d'accès à une propriété privée. Objectif : rendre tangible l'intimité et la végétalisation dense du projet.",
    livraison: "1 vue 4K · Profondeur de champ travaillée · Végétation haute densité modélisée manuellement",
    images: ['/projets/allee-paysagee/Scène 10 final 4K.jpg'],
  },
  {
    id: 5,
    slug: 'maison-moderne',
    category: 'Architecture résidentielle',
    year: '2023',
    title: 'Maison moderne',
    desc: "De l'enveloppe extérieure aux détails intérieurs. Mobilier, textures, lumière naturelle.",
    intention: "Raconter une maison comme un lieu de vie continu, du dehors au dedans.",
    image: '/projets/interieur/Scène 37_2_inpainting02.png',
    tags: ['Intérieur', 'Extérieur', '6 vues + animation'],
    fullDesc: "Étude de cas explorant une maison moderne de l'enveloppe extérieure aux détails intérieurs. Les vues intérieures travaillent la cohérence du mobilier et des textures.",
    context: "La série relie deux univers souvent traités séparément : l'enveloppe architecturale et les espaces intérieurs. L'enjeu narratif était la continuité, faire sentir qu'on passe du dehors au dedans sans rupture de lumière ni de matière. Une animation prolonge l'expérience en mouvement.",
    brief: "Maison individuelle contemporaine. Objectif : couvrir à la fois l'enveloppe architecturale et les espaces intérieurs.",
    livraison: "6 vues 4K + 1 animation · Extérieur, intérieur, close-up textures",
    images: [
      '/projets/interieur/Scène 37_2_inpainting02.png',
      "/projets/interieur/Vue d'ensemble maison_upscale04.png",
      '/projets/interieur/V2Scène 41.png',
    ],
  },
  {
    id: 6,
    slug: 'lodge-privatif',
    category: 'Architecture nature',
    year: '2025',
    title: 'Lodge privatif',
    desc: 'Volume bois intégré dans le paysage. Matérialité brute, lumière naturelle, ancrage au sol.',
    intention: "Montrer un volume qui appartient déjà à son paysage, comme s'il avait toujours été là.",
    image: "/projets/Lodge privatif/Vue d'ensemble.jpeg",
    tags: ['Extérieur', '2 vues 4K'],
    fullDesc: "Étude de cas autour d'un lodge privatif intégré dans son environnement naturel. La vue d'ensemble ancre le volume dans le paysage, le close-up explore les textures.",
    context: "Le travail s'est porté sur l'intégration paysagère : un volume bois qui ne s'impose pas mais dialogue avec son environnement. La vue d'ensemble ancre le bâtiment dans le sol et la végétation ; le close-up révèle la matérialité brute du bois, sa texture, sa vérité.",
    brief: "Lodge privatif en milieu naturel. Objectif : montrer l'intégration paysagère et valoriser la matérialité brute.",
    livraison: "2 vues 4K · Vue d'ensemble + close-up matière",
    images: [
      "/projets/Lodge privatif/Vue d'ensemble.jpeg",
      '/projets/Lodge privatif/Close up.jpeg',
    ],
  },
  {
    id: 7,
    slug: 'lycee',
    category: 'Équipement public',
    year: '2025',
    title: 'Lycée',
    desc: "Insertion urbaine, volume général, espaces communs. Un équipement éducatif présenté pour concours.",
    intention: "Donner à un jury la conviction d'un projet, pas seulement la lecture d'un plan.",
    image: '/projets/Lycée/Vue éloignée.jpeg',
    tags: ['Architecture', '2 vues 4K'],
    fullDesc: "Étude de cas autour de la visualisation d'un lycée, bâtiment d'équipement public à vocation éducative. Vue éloignée et vue intérieure.",
    context: "En contexte de concours, l'image doit emporter la conviction d'un jury. La vue urbaine éloignée situe le bâtiment dans son tissu et révèle son insertion ; la vue intérieure humanise l'équipement et fait sentir l'usage. Deux échelles, une même intention : convaincre.",
    brief: "Équipement public éducatif. Objectif : produire des rendus convaincants pour dossier de concours d'architecture.",
    livraison: "2 vues 4K · Vue urbaine éloignée + espace intérieur commun",
    images: [
      '/projets/Lycée/Vue éloignée.jpeg',
      '/projets/Lycée/Vue intérieur.jpeg',
    ],
  },
  {
    id: 8,
    slug: 'mediatheque',
    category: 'Équipement public',
    year: '2025',
    title: 'Médiathèque',
    desc: "Transparence, volumétrie, dialogue avec l'espace urbain. Trois vues pour un dossier institutionnel.",
    intention: "Rendre lisible la transparence d'un équipement culturel et son dialogue avec la ville.",
    image: "/projets/Médiathèque/Vue d'ensemble 1.jpeg",
    tags: ['Architecture', '3 vues 4K'],
    fullDesc: "Étude de cas autour d'une médiathèque contemporaine. Deux vues d'ensemble et un zoom façade.",
    context: "La série met en valeur la transparence et la volumétrie de l'équipement. Deux angles d'ensemble racontent le dialogue du bâtiment avec l'espace urbain ; le zoom façade rend lisibles les choix architecturaux, un point décisif pour un dossier institutionnel.",
    brief: "Équipement culturel public. Objectif : rendre lisibles les choix architecturaux pour un dossier institutionnel.",
    livraison: "3 vues 4K · Deux angles d'ensemble + zoom façade",
    images: [
      "/projets/Médiathèque/Vue d'ensemble 1.jpeg",
      "/projets/Médiathèque/Vue d'ensemble 2.jpeg",
      '/projets/Médiathèque/Zoom.jpeg',
    ],
  },
]

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((p) => p.slug === slug)
}
