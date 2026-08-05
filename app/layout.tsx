import type { Metadata } from 'next'
import './globals.css'
import SmoothScroll from '@/components/layout/smooth-scroll'
import CookieBanner from '@/components/layout/cookie-banner'

// ─── Schema JSON-LD ─────────────────────────────────────────────────────────
// Régions couvertes — doit rester aligné avec lib/regions-data.ts.
const AREA_SERVED = [
  { '@type': 'Country', name: 'France' },
  { '@type': 'AdministrativeArea', name: 'Bretagne' },
  { '@type': 'AdministrativeArea', name: 'Pays de la Loire' },
  { '@type': 'AdministrativeArea', name: 'Île-de-France' },
  { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
  { '@type': 'AdministrativeArea', name: 'Provence-Alpes-Côte d\'Azur' },
  { '@type': 'AdministrativeArea', name: 'Auvergne-Rhône-Alpes' },
]

const POSTAL_ADDRESS = {
  '@type': 'PostalAddress',
  addressLocality: 'Rennes',
  addressRegion: 'Ille-et-Vilaine',
  postalCode: '35000',
  addressCountry: 'FR',
}

// BenRaff Studio est un nom commercial : Benjamin Raffegeau, seul, est
// l'entité principale. L'activité est rattachée à lui, pas à une équipe.
const schemaOrg = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://benraffstudio.com/#person',
      name: 'Benjamin Raffegeau',
      jobTitle: 'Spécialiste de la visualisation 3D d\'aménagement extérieur',
      description:
        'Benjamin Raffegeau conçoit seul, à Rennes, des visualisations 3D pour les concepteurs paysagistes, piscinistes et concepteurs de pool houses. Il suit chaque projet du premier brief à la livraison, sans intermédiaire.',
      url: 'https://benraffstudio.com/benjamin-raffegeau',
      mainEntityOfPage: 'https://benraffstudio.com',
      email: 'contact@benraffstudio.com',
      telephone: '+33624517641',
      image: 'https://benraffstudio.com/portrait-benjamin-raffegeau.webp',
      address: POSTAL_ADDRESS,
      alumniOf: { '@type': 'CollegeOrUniversity', name: 'LISAA Rennes' },
      owns: { '@id': 'https://benraffstudio.com/#business' },
      knowsAbout: [
        'Visualisation 3D d\'aménagement extérieur',
        'Plan de composition paysager en 3D',
        'Rendu 3D pour concepteur paysagiste',
        'Rendu 3D de piscine à débordement et de pool house',
        'Maquette 3D interactive de jardin',
        'Vidéo 3D immersive de projet paysager',
        'SketchUp',
        'D5 Render',
      ],
    },
    {
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': 'https://benraffstudio.com/#business',
      name: 'BenRaff Studio',
      description:
        'Nom commercial de l\'activité indépendante de Benjamin Raffegeau : visualisation 3D d\'aménagement extérieur pour concepteurs paysagistes, piscinistes et concepteurs de pool houses. Basé à Rennes, actif dans toute la France.',
      url: 'https://benraffstudio.com',
      telephone: '+33624517641',
      email: 'contact@benraffstudio.com',
      founder: { '@id': 'https://benraffstudio.com/#person' },
      employee: { '@id': 'https://benraffstudio.com/#person' },
      numberOfEmployees: { '@type': 'QuantitativeValue', value: 1 },
      address: POSTAL_ADDRESS,
      areaServed: AREA_SERVED,
      serviceType: [
        'Visualisation 3D d\'aménagement extérieur',
        'Plan de composition en 3D annoté',
        'Maquette 3D interactive de projet paysager',
        'Images signature de jardin, terrasse et bassin',
        'Vidéo 3D immersive de projet extérieur',
      ],
      priceRange: '€€€',
      image: 'https://benraffstudio.com/logo-blanc.webp',
      logo: {
        '@type': 'ImageObject',
        url: 'https://benraffstudio.com/logo-blanc.webp',
      },
    },
    {
      '@type': 'Organization',
      '@id': 'https://benraffstudio.com/#organization',
      name: 'BenRaff Studio',
      url: 'https://benraffstudio.com',
      founder: { '@id': 'https://benraffstudio.com/#person' },
      logo: {
        '@type': 'ImageObject',
        url: 'https://benraffstudio.com/logo-blanc.webp',
      },
    },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://benraffstudio.com'),
  title: 'BenRaff Studio · Visualisation 3D pour concepteurs paysagistes · Rennes',
  description:
    'Faites vivre votre plan d\'aménagement avant le premier coup de pelle. Visualisation 3D d\'aménagement extérieur pour concepteurs paysagistes, piscinistes et concepteurs de pool houses. Rennes, toute la France.',
  keywords: [
    'rendu 3D paysagiste',
    'visualisation 3D aménagement extérieur',
    'plan de composition en 3D',
    'rendu 3D piscine à débordement',
    'rendu 3D pool house',
    'visualisation 3D jardin avant travaux',
    'perspective 3D paysagiste Rennes',
    'maquette 3D interactive jardin',
    'vidéo 3D projet paysager',
    'BenRaff Studio',
  ],
  openGraph: {
    title: 'BenRaff Studio · Faites vivre votre plan d\'aménagement avant le premier coup de pelle',
    description:
      'Visualisation 3D d\'aménagement extérieur pour concepteurs paysagistes, piscinistes et concepteurs de pool houses. Rennes, toute la France.',
    type: 'website',
    url: 'https://benraffstudio.com',
    locale: 'fr_FR',
    siteName: 'BenRaff Studio',
    // Image par défaut héritée par toutes les pages qui n'en déclarent pas.
    images: [{
      url: '/og.jpg',
      width: 1200,
      height: 630,
      alt: 'Pool house et bassin à débordement visualisés en 3D avant travaux · BenRaff Studio',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BenRaff Studio · Visualisation 3D pour concepteurs paysagistes · Rennes',
    description:
      'Faites vivre votre plan d\'aménagement avant le premier coup de pelle. Plan de composition 3D, maquette interactive, images signature et vidéo immersive.',
    images: ['/og.jpg'],
  },
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-icon.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/icon.png',
  },
  // Pas de canonical global : il serait hérité par toute page n'en déclarant
  // pas (mentions légales, confidentialité), qui pointerait alors vers
  // l'accueil et se ferait désindexer. Chaque page déclare le sien.
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="bg-[#f7f5f1] text-[#1c1c1c] antialiased overflow-x-hidden" suppressHydrationWarning>
        <SmoothScroll />
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
