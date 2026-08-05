export type Region = {
  slug: string
  name: string
  seoTitle: string
  seoDescription: string
  /** Ce qui rend cette région réellement différente à traiter en visualisation. */
  intro: string
  body: string[]
  /** Spécificités paysagères concrètes, pas du remplissage. */
  specifics: string[]
  cities: string[]
  keywords: string[]
}

/** 6 régions retenues au lancement : uniquement celles pour lesquelles un contenu
 *  réellement différencié existe (contexte paysager, climat, typologie de projets).
 *  Ne pas ajouter de région sans contenu spécifique — cf. règle anti doorway pages. */
export const regions: Region[] = [
  {
    slug: 'bretagne',
    name: 'Bretagne',
    seoTitle: 'Rendu 3D paysagiste en Bretagne · Jardins littoraux',
    seoDescription:
      'Images 3D pour paysagistes et piscinistes bretons. Basé à Rennes, je connais les contraintes du littoral : vent, embruns, lumière changeante.',
    intro:
      'Je suis basé à Rennes. La Bretagne est le terrain que je connais le mieux, et c\'est aussi celui qui pardonne le moins l\'approximation dans une image : ici, la lumière change toutes les heures et un jardin qui ne tient pas compte du vent ne ressemble à rien au bout de deux ans.',
    body: [
      'Les projets d\'aménagement extérieur bretons ont une contrainte que peu de régions partagent : l\'exposition. Embruns, vent dominant, sols souvent acides. Les palettes végétales sont spécifiques — persistants résistants au sel, graminées, hortensias, pins maritimes en bord de côte — et une image qui plante des essences méditerranéennes dans un jardin de Saint-Malo se disqualifie immédiatement auprès du client.',
      'La lumière bretonne est le second point. Ciels changeants, lumière diffuse une grande partie de l\'année, mais des fins de journée d\'été exceptionnelles sur le littoral nord. Une image de jardin breton qui utilise une lumière de carte postale méditerranéenne sonne faux pour quelqu\'un qui vit ici. Je travaille les ambiances en cohérence avec ce que votre client connaît de son propre terrain.',
      'Concrètement, j\'accompagne des paysagistes concepteurs, des piscinistes et des concepteurs de pool houses sur l\'ensemble de la région, en visio et via la plateforme de suivi. Étant à Rennes, un déplacement sur site reste possible quand le projet le justifie.',
    ],
    specifics: [
      'Palettes végétales littorales : persistants résistants aux embruns, graminées, hortensias',
      'Traitement des ciels bretons plutôt qu\'une lumière méditerranéenne générique',
      'Prise en compte du vent dominant dans les brise-vues et masses végétales',
      'Ambiances de fin de journée d\'été sur le littoral nord',
    ],
    cities: ['Rennes', 'Saint-Malo', 'Vannes', 'Brest', 'Quimper', 'Lorient', 'Dinard'],
    keywords: [
      'rendu 3D paysagiste Bretagne',
      'visualisation jardin Rennes',
      'rendu 3D piscine Bretagne',
      'perspective 3D jardin littoral',
    ],
  },
  {
    slug: 'pays-de-la-loire',
    name: 'Pays de la Loire',
    seoTitle: 'Rendu 3D paysagiste en Pays de la Loire',
    seoDescription:
      'Images 3D pour paysagistes et piscinistes en Pays de la Loire, du val de Loire à la côte vendéenne, avec les codes végétaux de chaque contexte.',
    intro:
      'Les Pays de la Loire concentrent deux contextes paysagers très différents à moins de deux heures l\'un de l\'autre : les jardins de bord de Loire, tempérés et généreux, et la côte vendéenne, exposée et minérale. Une même image ne fonctionne pas pour les deux.',
    body: [
      'Le val de Loire bénéficie d\'un climat doux qui autorise une palette végétale large : magnolias, camélias, érables du Japon, bambous. Les jardins y sont souvent structurés autour de la maison de maître ou de la longère, avec un rapport fort au bâti ancien — tuffeau, ardoise, murs de clôture en pierre. La visualisation doit tenir ce dialogue entre végétal généreux et bâti patrimonial, sinon le projet paraît plaqué.',
      'La côte vendéenne et le littoral nazairien imposent l\'inverse : sols sableux, exposition, végétation basse et résistante. Les projets y sont davantage tournés vers la piscine, la terrasse et l\'espace de vie extérieur que vers la collection végétale.',
      'J\'interviens à distance sur toute la région depuis Rennes, avec un temps de trajet réduit si une visite de terrain devient nécessaire sur un projet important.',
    ],
    specifics: [
      'Dialogue entre végétal et bâti ancien : tuffeau, ardoise, murs de pierre',
      'Palette tempérée du val de Loire : magnolias, camélias, érables du Japon',
      'Traitement distinct pour la côte vendéenne : sols sableux, végétation basse',
      'Projets piscine et espace de vie extérieur sur le littoral',
    ],
    cities: ['Nantes', 'Angers', 'Le Mans', 'La Roche-sur-Yon', 'Saint-Nazaire', 'Les Sables-d\'Olonne'],
    keywords: [
      'rendu 3D paysagiste Nantes',
      'visualisation jardin Pays de la Loire',
      'rendu 3D piscine Vendée',
      'perspective 3D jardin val de Loire',
    ],
  },
  {
    slug: 'ile-de-france',
    name: 'Île-de-France',
    seoTitle: 'Rendu 3D paysagiste en Île-de-France · Cours et patios',
    seoDescription:
      'Images 3D pour paysagistes et promoteurs franciliens : végétalisation de cours, patios et îlots de fraîcheur. Comparatif avant/après.',
    intro:
      'L\'Île-de-France est la région où le sujet de l\'îlot de fraîcheur est le plus concret. Densité bâtie, cours minérales, patios sans végétation, parkings en enrobé : les projets y sont souvent des transformations d\'existant, pas des créations sur terrain nu. Ça change complètement la façon de construire une image.',
    body: [
      'Quand le projet consiste à transformer une cour goudronnée en espace planté, le visuel le plus efficace n\'est pas la belle perspective isolée : c\'est le comparatif avant/après au même cadrage. Le client, qu\'il soit hôtelier, syndic, promoteur ou direction d\'entreprise, doit voir immédiatement ce qu\'il gagne. C\'est le format que je privilégie sur les projets franciliens.',
      'La contrainte technique est spécifique : espaces contraints, vis-à-vis permanent, ombre portée des bâtiments une grande partie de la journée, contraintes de sol sur dalle ou en sous-œuvre. La visualisation doit être crédible sur ces points, sinon le projet perd sa valeur d\'aide à la décision. Une cour parisienne baignée de soleil toute la journée ne trompe personne.',
      'Les projets que j\'accompagne en Île-de-France sont privés : cours d\'hôtels, patios de résidences, parvis d\'entreprises, jardins de copropriété, terrasses en toiture.',
    ],
    specifics: [
      'Comparatifs avant/après au même cadrage, format le plus convaincant sur l\'existant',
      'Gestion réaliste de l\'ombre portée des bâtiments et du vis-à-vis',
      'Végétalisation sur dalle, en bac et en pleine terre reconstituée',
      'Sols perméables et revêtements drainants représentés dans le détail',
    ],
    cities: ['Paris', 'Versailles', 'Boulogne-Billancourt', 'Saint-Germain-en-Laye', 'Neuilly-sur-Seine'],
    keywords: [
      'rendu 3D paysagiste Paris',
      'visualisation cour végétalisée',
      'rendu 3D désimperméabilisation Île-de-France',
      'image 3D patio Paris',
    ],
  },
  {
    slug: 'nouvelle-aquitaine',
    name: 'Nouvelle-Aquitaine',
    seoTitle: 'Rendu 3D paysagiste en Nouvelle-Aquitaine · Piscines',
    seoDescription:
      'Images 3D pour paysagistes et piscinistes en Nouvelle-Aquitaine : bassin d\'Arcachon, Pays basque, Bordelais. Traitement spécifique des pinèdes et des piscines.',
    intro:
      'La Nouvelle-Aquitaine est un des marchés les plus actifs de France sur la piscine et le pool house. Le bassin d\'Arcachon, le Pays basque et la périphérie bordelaise concentrent des projets où l\'extérieur représente une part importante du budget global.',
    body: [
      'Le contexte de la pinède landaise et arcachonnaise a une signature visuelle immédiatement reconnaissable : troncs hauts et espacés, lumière filtrée qui tombe en taches sur le sol, sous-bois de fougères, sols sableux. Restituer cette lumière filtrée est techniquement exigeant, et c\'est précisément ce qui fait qu\'une image de villa au Cap Ferret paraît juste ou complètement générique.',
      'Le Pays basque impose d\'autres codes : relief marqué, hortensias, rapport à l\'océan, architecture néo-basque avec ses colombages rouges. Le Bordelais penche vers le jardin de propriété structuré, avec un vocabulaire plus classique.',
      'Sur cette région, la majorité des demandes que je reçois portent sur des projets avec bassin. Le traitement de l\'eau — transparence, réseaux lumineux au fond, reflets de fin de journée, éclairage immergé — est le point sur lequel se joue la crédibilité de l\'image.',
    ],
    specifics: [
      'Lumière filtrée de pinède : taches solaires au sol, troncs hauts, sous-bois',
      'Traitement approfondi de l\'eau pour les projets à bassin',
      'Codes du Pays basque : relief, hortensias, architecture à colombages',
      'Jardin de propriété structuré pour le Bordelais',
    ],
    cities: ['Bordeaux', 'Biarritz', 'Arcachon', 'Cap Ferret', 'Bayonne', 'La Rochelle', 'Anglet'],
    keywords: [
      'rendu 3D paysagiste Bordeaux',
      'rendu 3D piscine bassin d\'Arcachon',
      'visualisation jardin Pays basque',
      'image 3D villa Cap Ferret',
    ],
  },
  {
    slug: 'provence-alpes-cote-azur',
    name: 'Provence-Alpes-Côte d\'Azur',
    seoTitle: 'Rendu 3D paysagiste en PACA · Jardins méditerranéens',
    seoDescription:
      'Images 3D pour paysagistes et piscinistes en Provence-Alpes-Côte d\'Azur : jardins secs, restanques, piscines à débordement, ombrage et îlots de fraîcheur.',
    intro:
      'En PACA, le sujet de la fraîcheur n\'est plus un argument de confort, c\'est une contrainte de conception. Les projets s\'organisent autour de l\'ombre, de l\'eau et de la sobriété en arrosage — et l\'image doit rendre ce climat perceptible.',
    body: [
      'Le jardin méditerranéen contemporain a un vocabulaire précis : oliviers, cyprès, lavandes, agaves, graminées sèches, restanques en pierre sèche, paillages minéraux. Une image qui pose une pelouse anglaise dans un jardin varois disqualifie le projet auprès d\'un client qui connaît son terrain et ses contraintes d\'eau.',
      'La lumière méditerranéenne est dure, très contrastée, avec des ombres nettes et une réverbération forte sur les surfaces claires. C\'est l\'opposé technique de la lumière bretonne. Restituer cette dureté sans que l\'image devienne illisible fait partie du travail — c\'est ce qui donne à la scène sa véracité climatique.',
      'La piscine à débordement, avec vue dégagée sur le paysage, est la figure imposée de la région. L\'enjeu de l\'image est de faire tenir ensemble la ligne d\'eau, l\'horizon et le jardin sans que la composition devienne une carte postale sans échelle.',
      'Le sujet de l\'îlot de fraîcheur y est traité en contexte privé : pergolas végétalisées, ombrage porté, bassins de rafraîchissement, sols perméables clairs.',
    ],
    specifics: [
      'Palette méditerranéenne : oliviers, cyprès, lavandes, agaves, paillages minéraux',
      'Lumière dure et contrastée, ombres nettes, réverbération sur surfaces claires',
      'Composition des piscines à débordement avec ligne d\'horizon',
      'Ombrage, pergolas végétalisées et stratégies de fraîcheur en jardin privé',
    ],
    cities: ['Marseille', 'Aix-en-Provence', 'Nice', 'Cannes', 'Saint-Tropez', 'Toulon', 'Avignon'],
    keywords: [
      'rendu 3D paysagiste PACA',
      'visualisation jardin méditerranéen',
      'rendu 3D piscine à débordement',
      'image 3D jardin sec Provence',
    ],
  },
  {
    slug: 'auvergne-rhone-alpes',
    name: 'Auvergne-Rhône-Alpes',
    seoTitle: 'Rendu 3D paysagiste en Auvergne-Rhône-Alpes',
    seoDescription:
      'Images 3D pour paysagistes en Auvergne-Rhône-Alpes : végétalisation urbaine lyonnaise, jardins de montagne, terrasses de chalets et projets de fraîcheur.',
    intro:
      'La région combine deux marchés qui n\'ont presque rien en commun : l\'agglomération lyonnaise, où la question de la chaleur urbaine est devenue centrale, et l\'arc alpin, où les projets d\'extérieur se pensent avec la neige et la pente.',
    body: [
      'Lyon et sa périphérie figurent parmi les zones françaises les plus exposées à l\'îlot de chaleur urbain. Les projets privés y basculent nettement vers la désimperméabilisation de cours, la végétalisation de terrasses et la création d\'ombre sur des espaces auparavant entièrement minéraux. Le comparatif avant/après y est, comme en Île-de-France, le format le plus efficace.',
      'L\'arc alpin appelle un traitement radicalement différent. Terrains en pente, terrasses de chalets, murs de soutènement en pierre, palette végétale d\'altitude, et surtout une double lecture saisonnière : le même aménagement doit être crédible en été et sous la neige. Les projets de chalets et de lodges se présentent presque toujours en deux ambiances.',
      'Entre les deux, les jardins de la Drôme et de l\'Ardèche empruntent au vocabulaire méditerranéen, avec les mêmes contraintes d\'eau et de sécheresse estivale.',
    ],
    specifics: [
      'Désimperméabilisation et création d\'ombre en contexte urbain lyonnais',
      'Double ambiance été / neige pour les projets de montagne',
      'Terrains en pente : restanques, soutènements, terrasses étagées',
      'Palette d\'altitude distincte de la palette de plaine',
    ],
    cities: ['Lyon', 'Annecy', 'Grenoble', 'Chambéry', 'Clermont-Ferrand', 'Megève', 'Courchevel'],
    keywords: [
      'rendu 3D paysagiste Lyon',
      'visualisation terrasse chalet',
      'rendu 3D jardin montagne',
      'image 3D végétalisation Lyon',
    ],
  },
]

export function getRegionBySlug(slug: string): Region | undefined {
  return regions.find((r) => r.slug === slug)
}
