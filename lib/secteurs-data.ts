export type Secteur = {
  slug: string
  title: string
  seoTitle: string
  description: string
  seoDescription: string
  intro: string
  body: string[]          // paragraphes de contenu
  challenges: string[]    // problématiques spécifiques
  benefits: string[]      // ce qu'apporte la série ciné dans ce secteur
  projectSlugs: string[]  // projets portfolio associés
  keywords: string[]
}

export const secteurs: Secteur[] = [
  {
    slug: 'loisirs-plein-air',
    title: 'Loisirs & Plein Air',
    seoTitle: 'Visualisation architecturale Loisirs & Plein Air — Lodges, Glamping, Pool Houses',
    description: 'Lodges privatifs, glamping, hébergements insolites, pool houses, espaces de loisirs.',
    seoDescription:
      'Séries cinématographiques pour les professionnels du tourisme et des loisirs : lodges, glamping, hébergements insolites, pool houses. Des images qui donnent envie de réserver avant même l\'ouverture.',
    intro:
      'Dans le secteur des loisirs et du plein air, l\'image n\'est pas un support de communication — c\'est le premier argument de vente. Votre client réserve une expérience avant de la vivre. La visualisation est ce qui rend cette expérience tangible.',
    body: [
      'Les hébergements de loisirs haut de gamme — lodges privatifs, glamping, tiny houses, chalets, pool houses — partagent un enjeu commun : convaincre un visiteur de réserver un espace qu\'il ne peut pas visiter physiquement. La décision se prend uniquement sur l\'image.',
      'Dans ce contexte, la différence entre une belle photo et une image cinématographique est directement commerciale. Une image cinématographique ne montre pas votre hébergement. Elle fait ressentir l\'atmosphère, l\'intimité, le dépaysement que vous avez voulu créer. Et c\'est cette sensation qui déclenche la réservation.',
      'Basé à Rennes, j\'interviens pour des porteurs de projets de tourisme et de loisirs dans toute la France — avant même que l\'hébergement soit construit. Mes séries permettent d\'ouvrir les précommandes, de lancer des campagnes de financement participatif, ou de démarrer la commercialisation avec des visuels professionnels.',
    ],
    challenges: [
      'Commercialiser un hébergement non encore construit',
      'Susciter l\'envie de réserver sans visite physique possible',
      'Se différencier dans un marché où les plateformes comparent tout',
      'Justifier un positionnement premium face à des concurrents moins chers',
    ],
    benefits: [
      'Des images qui mettent en scène l\'atmosphère et l\'expérience vécue',
      'Lumière dorée, matières naturelles, ambiances saisonnières — tout pour déclencher le désir',
      'Visuels prêts pour les plateformes de réservation (Airbnb, Booking, site propre)',
      'Production avant l\'ouverture : commercialiser sans attendre la construction',
    ],
    projectSlugs: ['lodge-privatif', 'pool-house-bretagne'],
    keywords: [
      'visualisation lodge privatif',
      'rendu 3D glamping',
      'image de synthèse hébergement insolite',
      'visualisation pool house',
      'rendu 3D tiny house',
      'image 3D hébergement plein air',
    ],
  },
  {
    slug: 'paysagisme',
    title: 'Paysagisme & Extérieur',
    seoTitle: 'Visualisation architecturale Paysagisme — Jardins, Allées, Terrasses',
    description: 'Jardins privés, allées paysagées, terrasses, aménagements extérieurs haut de gamme.',
    seoDescription:
      'Séries cinématographiques pour paysagistes : jardins à maturité, allées végétalisées, terrasses. Montrez à vos clients ce que sera leur espace dans cinq ans — avant même la première plantation.',
    intro:
      'En paysagisme, vous vendez une vision à long terme. Votre client ne peut pas voir ce que sera son jardin à maturité. La visualisation est l\'outil qui rend cette vision tangible — et qui lève les dernières hésitations avant la signature.',
    body: [
      'Le défi spécifique du paysagisme est la temporalité. Un jardin se construit sur des années. La végétation met du temps à atteindre sa hauteur, sa densité, son caractère. Comment convaincre un client d\'investir dans un projet dont le résultat final n\'est visible qu\'en imagination ?',
      'Mes séries cinématographiques pour paysagistes montrent le projet tel qu\'il sera à maturité : végétation haute densité modélisée avec cohérence botanique, lumière saisonnière adaptée au projet, échelle humaine pour ancrer les volumes dans le réel.',
      'Je travaille avec des paysagistes concepteurs, des aménageurs extérieurs et des maîtres d\'ouvrage dans toute la France. Chaque série est pensée pour répondre à un objectif précis : valider le projet avec le client, déclencher la décision d\'investissement, ou enrichir un dossier de présentation.',
    ],
    challenges: [
      'Montrer la végétation à maturité sur un projet non encore réalisé',
      'Faire valider une direction créative avant les premiers travaux',
      'Justifier un budget paysager important sans visite de référence',
      'Se démarquer des devis visuels génériques sur des projets haut de gamme',
    ],
    benefits: [
      'Végétation modélisée à maturité avec cohérence botanique et saisonnière',
      'Lumière choisie pour valoriser l\'orientation et l\'usage de l\'espace',
      'Échelle humaine pour rendre chaque volume compréhensible et désirable',
      'Images exploitables pour dossiers clients, réseaux sociaux, site web',
    ],
    projectSlugs: ['allee-paysagee', 'pool-house-bretagne'],
    keywords: [
      'rendu 3D paysagiste',
      'visualisation jardin haut de gamme',
      'image de synthèse aménagement extérieur',
      'rendu 3D terrasse',
      'visualisation paysagère',
      'rendu 3D allée végétalisée',
    ],
  },
  {
    slug: 'architecture-interieure',
    title: 'Architecture Intérieure',
    seoTitle: 'Visualisation Architecture Intérieure — Cuisines, Salons, Showrooms',
    description: 'Cuisines, salons, showrooms, rénovations, espaces de vie.',
    seoDescription:
      'Séries cinématographiques pour architectes d\'intérieur, décorateurs et cuisinistes : valorisez vos créations avec des images qui transmettent matières, lumière et atmosphère avant la réalisation.',
    intro:
      'En architecture intérieure, la qualité d\'une création se perçoit dans les détails — la texture d\'un matériau, le rapport entre une lumière et un volume, la cohérence d\'une palette. La visualisation cinématographique est l\'outil qui donne à voir ces détails avant qu\'ils existent.',
    body: [
      'Architectes d\'intérieur, décorateurs, cuisinistes, concepteurs d\'espaces commerciaux : votre travail se distingue par la précision des choix et la cohérence de l\'ensemble. Les rendus 3D standard ne rendent pas justice à cette finesse.',
      'Mes séries pour l\'architecture intérieure travaillent sur la matière, la lumière et la narration spatiale. Close-ups sur les textures pour valoriser la qualité des matériaux, cadrages narratifs pour raconter comment l\'espace se vit, lumière naturelle et artificielle choisies pour révéler les ambiances souhaitées.',
      'Je collabore avec des architectes d\'intérieur, des maîtres d\'ouvrage et des fabricants de cuisines et de mobilier dans toute la France. Chaque série est construite autour d\'une intention : montrer non pas comment l\'espace est fait, mais comment il se ressent.',
    ],
    challenges: [
      'Valoriser la finesse des matériaux et des détails de conception',
      'Faire valider une direction créative avant fabrication ou travaux',
      'Se différencier avec un book professionnel de haut niveau',
      'Convaincre un maître d\'ouvrage exigeant sur un projet ambitieux',
    ],
    benefits: [
      'Close-ups matière pour révéler textures, finitions et cohérence chromatique',
      'Lumière naturelle et artificielle pensées pour chaque ambiance',
      'Cadrages narratifs qui racontent l\'usage et l\'habitabilité de l\'espace',
      'Images exploitables en book, réseaux sociaux, book clients, concours',
    ],
    projectSlugs: ['cuisine-rose-noire', 'interieur-scandinave'],
    keywords: [
      'rendu 3D architecture intérieure',
      'visualisation cuisiniste',
      'image de synthèse intérieur',
      'rendu 3D décoration intérieure',
      'visualisation showroom cuisine',
      'rendu 3D rénovation intérieure',
    ],
  },
  {
    slug: 'promotion-immobiliere',
    title: 'Promotion Immobilière',
    seoTitle: 'Visualisation Promotion Immobilière — Résidentiel, Villas, Programmes Neufs',
    description: 'Programmes résidentiels, villas, appartements, maisons individuelles, commercialisation de projets neufs.',
    seoDescription:
      'Séries cinématographiques pour promoteurs immobiliers : commercialisez vos programmes résidentiels avant construction avec des visuels qui déclenchent la décision d\'achat.',
    intro:
      'Dans la promotion immobilière, la qualité des visuels est directement liée à la vitesse de commercialisation. Des images qui font ressentir le projet réduisent les délais de vente et justifient le positionnement prix.',
    body: [
      'La commercialisation d\'un programme résidentiel neuf repose entièrement sur la capacité à projeter l\'acquéreur dans un bien qu\'il ne peut pas visiter. La qualité des visuels n\'est pas une question d\'esthétique — c\'est un outil commercial.',
      'Les acquéreurs du résidentiel haut de gamme en France ont des attentes visuelles qui ont profondément évolué. Les images génériques ne suffisent plus. Ce qui déclenche l\'acte d\'achat, c\'est l\'image qui permet de se projeter — de sentir la lumière dans le salon, d\'imaginer la vie sur la terrasse, de ressentir le standing de l\'entrée.',
      'Mes séries pour la promotion immobilière sont construites autour de l\'acheteur final : qui est-il ? À quelle heure de la journée vit-il dans cet espace ? Qu\'est-ce qui le fait hésiter, et comment l\'image peut-elle lever ce frein ? Chaque angle, chaque lumière, chaque détail de mise en scène sert cet objectif commercial.',
    ],
    challenges: [
      'Commercialiser sur plan sans bien existant à visiter',
      'Justifier un positionnement prix élevé sans références tangibles',
      'Se démarquer dans un marché où les programmes se ressemblent visuellement',
      'Accélérer les délais de commercialisation en VEFA',
    ],
    benefits: [
      'Images pensées pour l\'acquéreur final, pas pour le dossier technique',
      'Lumière, heure et saison choisies pour maximiser le désir d\'achat',
      'Formats adaptés : brochures, site web, réseaux sociaux, affichage',
      'Production avant construction : commencer à vendre sans attendre',
    ],
    projectSlugs: ['maison-moderne', 'interieur-scandinave'],
    keywords: [
      'rendu 3D promotion immobilière',
      'visualisation programme résidentiel',
      'image de synthèse VEFA',
      'rendu 3D villa contemporaine',
      'visualisation appartement neuf',
      'image architecturale commercialisation',
    ],
  },
  {
    slug: 'architecture-publique',
    title: 'Architecture Publique & Concours',
    seoTitle: 'Visualisation Architecture Publique — Équipements, Concours, Dossiers Institutionnels',
    description: 'Équipements publics, dossiers de concours, bâtiments institutionnels, collectivités.',
    seoDescription:
      'Séries cinématographiques pour architectes : visualisation d\'équipements publics, dossiers de concours et bâtiments institutionnels. Des images qui font lire l\'intention architecturale au premier regard.',
    intro:
      'Un dossier de concours se joue en quelques secondes. La visualisation architecturale n\'est pas un habillage — c\'est le premier argument qui accroche l\'attention du jury et rend vos intentions lisibles avant même qu\'on lise une ligne.',
    body: [
      'Les concours d\'architecture publique et les dossiers institutionnels ont une contrainte spécifique : convaincre un jury ou une commission qui évalue simultanément plusieurs projets de qualité comparable. Dans ce contexte, la lisibilité visuelle de vos intentions architecturales est décisive.',
      'Mes séries pour l\'architecture publique travaillent sur deux niveaux simultanément. D\'abord, l\'insertion urbaine et contextuelle : comment le projet s\'intègre dans son tissu, dialogue avec son environnement, répond à l\'espace public. Ensuite, l\'usage humain : comment les espaces se vivent, qui les habite, quelle atmosphère ils créent.',
      'Je collabore avec des agences d\'architecture sur des projets d\'équipements publics, scolaires, culturels et sportifs, ainsi que sur des consultations et appels d\'offres. Chaque série est construite pour rendre les intentions du projet immédiatement perceptibles — même pour un jury qui dispose de peu de temps.',
    ],
    challenges: [
      'Rendre les intentions architecturales lisibles en quelques secondes',
      'Insérer le projet dans son contexte urbain de façon convaincante',
      'Humaniser des équipements publics souvent représentés de façon froide',
      'Se distinguer dans un concours compétitif avec des projets de niveau comparable',
    ],
    benefits: [
      'Cadrages stratégiques qui révèlent l\'intention architecturale au premier regard',
      'Insertion contextuelle réaliste avec environnement urbain et végétation',
      'Silhouettes et scènes de vie pour humaniser les espaces publics',
      'Lumière et atmosphère cohérentes avec la vocation de l\'équipement',
    ],
    projectSlugs: ['lycee', 'mediatheque'],
    keywords: [
      'rendu 3D concours architecture',
      'visualisation équipement public',
      'image de synthèse bâtiment public',
      'rendu 3D médiathèque',
      'visualisation architecturale lycée',
      'rendu 3D appel d\'offres architecture',
    ],
  },
]

export function getSecteurBySlug(slug: string): Secteur | undefined {
  return secteurs.find((s) => s.slug === slug)
}
