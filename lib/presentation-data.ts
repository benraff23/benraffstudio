// Mini-sites de présentation client — données.
//
// Un projet = un objet PresentationProjet ici + un dossier d'assets dans public/.
// Les pages sont privées : noindex, absentes du sitemap, aucun lien depuis le site.
// Elles sont ouvertes en rendez-vous par le paysagiste devant son client final.
//
// Aucun texte de commentaire dans ce fichier : titre, localisation et labels courts
// uniquement. Le template met en scène les livrables, il ne les raconte pas.

export interface Hotspot {
  /** Position en % (0-100) sur l'image du plan — responsive quelle que soit la taille. */
  x: number
  y: number
  /** Label court, vocabulaire paysagiste : « Bassin miroir », « Terrasse bois ». */
  label: string
  /** Index dans imagesSignature : le clic ouvre la vue correspondante en plein écran. */
  imageIndex?: number
}

export interface ImageSignature {
  src: string
  alt: string
  /** Libellé de zone, court. Pas de commentaire. */
  zone?: string
  downloadHd?: string
}

export interface PresentationProjet {
  slug: string
  titre: string
  localisation?: string
  paysagiste?: { nom?: string; logoUrl?: string }
  /** Image d'ouverture. Par défaut : imagesSignature[0]. */
  heroImage?: string

  plan3d: {
    image: string
    hotspots?: Hotspot[]
    download: string
  }
  /** Plan 2D côté avec métrés. Quantitatif uniquement : surfaces, mètres
   *  linéaires, volumes. Jamais de chiffrage ni de prix. */
  metre?: { download: string; label?: string }
  imagesSignature: ImageSignature[]
  /** Maquette D5 XR Tour — toujours intégrée en iframe, jamais en lien externe. */
  maquetteXR?: { embedUrl: string }
  video?: { url: string; poster?: string; download?: string }

  /** whiteLabel: true → aucune mention BenRaff. Défaut : signature discrète en pied de page. */
  branding?: { whiteLabel?: boolean }
}

const DEMO = '/presentation-demo'

// Vues partagées par les deux projets de démonstration.
const demoVues: ImageSignature[] = [
  { src: `${DEMO}/terrasse-bois.svg`,  alt: 'Terrasse bois en surplomb du jardin',        zone: 'Terrasse bois',   downloadHd: `${DEMO}/terrasse-bois.svg` },
  { src: `${DEMO}/bassin-miroir.svg`,  alt: 'Bassin miroir bordé de pierre sèche',        zone: 'Bassin miroir',   downloadHd: `${DEMO}/bassin-miroir.svg` },
  { src: `${DEMO}/massif-entree.svg`,  alt: "Massif d'entrée en graminées et vivaces",    zone: "Massif d'entrée", downloadHd: `${DEMO}/massif-entree.svg` },
  { src: `${DEMO}/allee-acces.svg`,    alt: "Allée d'accès en pas japonais",              zone: "Allée d'accès",   downloadHd: `${DEMO}/allee-acces.svg` },
  { src: `${DEMO}/pool-house.svg`,     alt: 'Pool house ouvert sur la plage de bassin',   zone: 'Pool house',      downloadHd: `${DEMO}/pool-house.svg` },
]

const VEILLAIS = '/presentation/veillais-saint-gregoire'
const POUPIN = '/presentation/poupin-chateaubourg'
const LANGLAIS = '/presentation/rue-jean-langlais'
const LOGO_AC = 'logo-ac-concept-paysage.svg'

// Téléchargements HD : on sert les WebP 2560 px du dossier de présentation.
// Les masters PNG restent hors dépôt (_originaux/), trop lourds pour le déploiement.
const VEILLAIS_HD = VEILLAIS

export const presentations: PresentationProjet[] = [
  {
    slug: 'rue-jean-langlais',
    titre: 'Terrasse travertin et mini piscine',
    localisation: 'La Bouëxière (35)',
    paysagiste: {
      nom: 'AC Concept Paysage',
      logoUrl: `${LANGLAIS}/${LOGO_AC}`,
    },
    heroImage: `${LANGLAIS}/vue-ensemble.webp`,
    plan3d: {
      image: `${LANGLAIS}/plan-3d.webp`,
      download: `${LANGLAIS}/plan-3d.webp`,
    },
    metre: { download: `${LANGLAIS}/metre.pdf` },
    imagesSignature: [
      {
        src: `${LANGLAIS}/vue-ensemble.webp`,
        alt: 'Vue plongeante sur la mini piscine, la terrasse minérale et le platelage bois le long de la maison',
        zone: 'Vue d’ensemble',
        downloadHd: `${LANGLAIS}/vue-ensemble.webp`,
      },
      {
        src: `${LANGLAIS}/bassin.webp`,
        alt: 'Mini piscine encadrée par la terrasse minérale et le mur en pierre de la maison',
        zone: 'Bassin',
        downloadHd: `${LANGLAIS}/bassin.webp`,
      },
      {
        src: `${LANGLAIS}/bains-de-soleil.webp`,
        alt: 'Bains de soleil au bord de la piscine, clôture grillagée et haie en arrière-plan',
        zone: 'Bains de soleil',
        downloadHd: `${LANGLAIS}/bains-de-soleil.webp`,
      },
    ],
  },

  {
    slug: 'poupin-chateaubourg',
    titre: 'Bassin et terrasse d’été',
    localisation: 'Châteaubourg (35)',
    paysagiste: {
      nom: 'AC Concept Paysage',
      logoUrl: `${POUPIN}/${LOGO_AC}`,
    },
    heroImage: `${POUPIN}/plage-bassin.webp`,
    plan3d: {
      image: `${POUPIN}/plan-3d.webp`,
      download: `${POUPIN}/plan-3d.webp`,
      hotspots: [
        { x: 27, y: 47, label: 'Bassin',          imageIndex: 1 },
        { x: 38, y: 43, label: 'Plage de bassin', imageIndex: 4 },
        { x: 47, y: 57, label: 'Bains de soleil', imageIndex: 5 },
        { x: 62, y: 50, label: 'Terrasse repas',  imageIndex: 2 },
        { x: 24, y: 63, label: 'Mur en pierre',   imageIndex: 0 },
        { x: 52, y: 84, label: 'Pelouse',         imageIndex: 3 },
      ],
    },
    metre: { download: `${POUPIN}/metre.pdf` },
    imagesSignature: [
      {
        src: `${POUPIN}/vue-ensemble.webp`,
        alt: 'Vue plongeante sur le bassin, le mur en pierre et la terrasse bois abritée sous les arbres',
        zone: 'Vue d’ensemble',
        downloadHd: `${POUPIN}/vue-ensemble.webp`,
      },
      {
        src: `${POUPIN}/bassin.webp`,
        alt: 'Bassin bordé de bananiers, mur en pierre ajouré en arrière-plan',
        zone: 'Bassin',
        downloadHd: `${POUPIN}/bassin.webp`,
      },
      {
        src: `${POUPIN}/terrasse-repas.webp`,
        alt: 'Table dressée sous l’arbre, cuisine extérieure et plancha en arrière-plan',
        zone: 'Terrasse repas',
        downloadHd: `${POUPIN}/terrasse-repas.webp`,
      },
      {
        src: `${POUPIN}/pelouse.webp`,
        alt: 'Pelouse et mur en pierre de parement, bananiers et enrochement en pied',
        zone: 'Pelouse',
        downloadHd: `${POUPIN}/pelouse.webp`,
      },
      {
        src: `${POUPIN}/plage-bassin.webp`,
        alt: 'Plage de bassin, platelage bois et bains de soleil ouverts sur la cuisine extérieure',
        zone: 'Plage de bassin',
        downloadHd: `${POUPIN}/plage-bassin.webp`,
      },
      {
        src: `${POUPIN}/bains-de-soleil.webp`,
        alt: 'Bains de soleil sur platelage bois au bord du bassin, terrasse repas en arrière-plan',
        zone: 'Bains de soleil',
        downloadHd: `${POUPIN}/bains-de-soleil.webp`,
      },
    ],
  },

  {
    slug: 'veillais-saint-gregoire',
    titre: 'Jardin contemporain avec bassin',
    localisation: 'Saint-Grégoire (35)',
    paysagiste: {
      nom: 'AC Concept Paysage',
      logoUrl: `${VEILLAIS}/logo-ac-concept-paysage.svg`,
    },
    heroImage: `${VEILLAIS}/enrochement.webp`,
    plan3d: {
      image: `${VEILLAIS}/plan-3d.webp`,
      download: `${VEILLAIS_HD}/plan-3d.webp`,
      hotspots: [
        { x: 62, y: 28, label: 'Terrasse repas',   imageIndex: 3 },
        { x: 60, y: 58, label: 'Bassin',           imageIndex: 0 },
        { x: 72, y: 58, label: 'Plage de bassin',  imageIndex: 2 },
        { x: 48, y: 55, label: 'Brise-vue fleuri', imageIndex: 4 },
        { x: 74, y: 84, label: 'Enrochement',      imageIndex: 1 },
      ],
    },
    metre: { download: `${VEILLAIS}/metre.pdf` },
    imagesSignature: [
      {
        src: `${VEILLAIS}/vue-ensemble.webp`,
        alt: "Vue plongeante sur le bassin, la terrasse repas sous parasol et les bains de soleil",
        zone: 'Vue d’ensemble',
        downloadHd: `${VEILLAIS_HD}/vue-ensemble.webp`,
      },
      {
        src: `${VEILLAIS}/enrochement.webp`,
        alt: "Enrochement, pas japonais et jardin de graviers devant la maison, bassin en arrière-plan",
        zone: 'Enrochement',
        downloadHd: `${VEILLAIS_HD}/enrochement.webp`,
      },
      {
        src: `${VEILLAIS}/plage-bassin.webp`,
        alt: 'Plage de bassin, bains de soleil, brise-vue bois et abri de jardin',
        zone: 'Plage de bassin',
        downloadHd: `${VEILLAIS_HD}/plage-bassin.webp`,
      },
      {
        src: `${VEILLAIS}/terrasse-repas.webp`,
        alt: 'Terrasse repas dressée sous parasol, bassin et haie taillée en arrière-plan',
        zone: 'Terrasse repas',
        downloadHd: `${VEILLAIS_HD}/terrasse-repas.webp`,
      },
      {
        src: `${VEILLAIS}/brise-vue.webp`,
        alt: 'Claustras bois habillés de grimpantes, palmiers et vivaces en pied de bassin',
        zone: 'Brise-vue fleuri',
        downloadHd: `${VEILLAIS_HD}/brise-vue.webp`,
      },
    ],
  },

  // Projet complet : plan à hotspots + vues + maquette XR + vidéo.
  {
    slug: 'jardin-saint-lunaire',
    titre: 'Jardin littoral',
    localisation: 'Saint-Lunaire (35)',
    paysagiste: { nom: 'Atelier Kerlan' },
    heroImage: `${DEMO}/hero.svg`,
    plan3d: {
      image: `${DEMO}/plan-3d.svg`,
      download: `${DEMO}/plan-3d.svg`,
      hotspots: [
        { x: 44, y: 33, label: 'Terrasse bois',   imageIndex: 0 },
        { x: 74, y: 39, label: 'Bassin miroir',   imageIndex: 1 },
        { x: 44, y: 72, label: "Massif d'entrée", imageIndex: 2 },
        { x: 19, y: 71, label: "Allée d'accès",   imageIndex: 3 },
        { x: 81, y: 68, label: 'Pool house',      imageIndex: 4 },
        { x: 20, y: 24, label: 'Maison existante' },
      ],
    },
    imagesSignature: demoVues,
    // Remplacer par l'URL d'embed du D5 XR Tour du projet.
    maquetteXR: { embedUrl: `${DEMO}/xr-placeholder.html` },
    // Démo : pointe sur une vidéo déjà présente dans public/. Pour un vrai projet,
    // déposer le .mp4 dans le dossier d'assets du projet et mettre ce chemin à jour.
    video: {
      url: '/projets/interieur/kling_20260516_作品_the_camera_4692_0.mp4',
      poster: `${DEMO}/hero.svg`,
      download: '/projets/interieur/kling_20260516_作品_the_camera_4692_0.mp4',
    },
  },

  // Version allégée : ni maquette XR ni vidéo — les sections disparaissent.
  {
    slug: 'terrasse-dinard',
    titre: 'Terrasse et plage de bassin',
    localisation: 'Dinard (35)',
    paysagiste: { nom: 'Atelier Kerlan' },
    heroImage: `${DEMO}/bassin-miroir.svg`,
    plan3d: {
      image: `${DEMO}/plan-3d.svg`,
      download: `${DEMO}/plan-3d.svg`,
      hotspots: [
        { x: 44, y: 33, label: 'Terrasse bois', imageIndex: 0 },
        { x: 74, y: 39, label: 'Bassin miroir', imageIndex: 1 },
        { x: 81, y: 68, label: 'Pool house',    imageIndex: 2 },
      ],
    },
    imagesSignature: [demoVues[0], demoVues[1], demoVues[4]],
  },
]

export function getPresentationBySlug(slug: string) {
  return presentations.find((p) => p.slug === slug)
}
