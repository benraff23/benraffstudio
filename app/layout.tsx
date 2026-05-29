import type { Metadata } from 'next'
import './globals.css'
import SmoothScroll from '@/components/layout/smooth-scroll'
import CookieBanner from '@/components/layout/cookie-banner'

// ─── Schema JSON-LD ─────────────────────────────────────────────────────────
const schemaOrg = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': 'https://benraffstudio.com/#business',
      name: 'BenRaff Studio',
      description:
        'Studio de visualisation 3D architecturale à Rennes. Perspectiviste spécialisé en rendus fixes, animations vidéo et visites virtuelles pour architectes, promoteurs et paysagistes.',
      url: 'https://benraffstudio.com',
      telephone: '+33624517641',
      email: 'contact@benraffstudio.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Rennes',
        addressRegion: 'Ille-et-Vilaine',
        postalCode: '35000',
        addressCountry: 'FR',
      },
      areaServed: [
        { '@type': 'City', name: 'Rennes' },
        { '@type': 'AdministrativeArea', name: 'Bretagne' },
        { '@type': 'Country', name: 'France' },
      ],
      serviceType: [
        'Rendu 3D architectural',
        'Visualisation architecturale',
        'Perspectiviste 3D',
        'Animation 3D architecture',
        'Visite virtuelle 360°',
      ],
      priceRange: '€€€',
      image: 'https://benraffstudio.com/logo-blanc.webp',
      logo: {
        '@type': 'ImageObject',
        url: 'https://benraffstudio.com/logo-blanc.webp',
      },
    },
    {
      '@type': 'Person',
      '@id': 'https://benraffstudio.com/#person',
      name: 'Benjamin Raffegeau',
      jobTitle: 'Perspectiviste 3D & fondateur',
      worksFor: { '@id': 'https://benraffstudio.com/#business' },
      url: 'https://benraffstudio.com',
      email: 'contact@benraffstudio.com',
      telephone: '+33624517641',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Rennes',
        addressRegion: 'Ille-et-Vilaine',
        postalCode: '35000',
        addressCountry: 'FR',
      },
      knowsAbout: [
        'Visualisation architecturale 3D',
        'Perspectiviste',
        'Rendu 3D architectural',
        'Animation 3D',
        'Visite virtuelle 360°',
        'Architecture extérieure',
        'Aménagement paysager',
      ],
    },
    {
      '@type': 'Organization',
      '@id': 'https://benraffstudio.com/#organization',
      name: 'BenRaff Studio',
      url: 'https://benraffstudio.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://benraffstudio.com/logo-blanc.webp',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'contact@benraffstudio.com',
        availableLanguage: 'French',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'BenRaff Studio · Rendu 3D & Visualisation Architecturale à Rennes',
  description:
    'Studio de visualisation 3D architecturale à Rennes. Perspectiviste spécialisé en rendus fixes 4K, animations vidéo et visites virtuelles pour architectes, promoteurs et paysagistes. Premier rendu en 72h.',
  keywords: [
    'rendu 3D Rennes',
    'visualisation architecturale Rennes',
    'studio 3D Rennes',
    'perspectiviste Rennes',
    'infographiste 3D Rennes',
    'rendu 3D architecture Rennes',
    'visualisation 3D extérieur Rennes',
    'animation 3D architecture Rennes',
    'visite virtuelle 3D Rennes',
    'visualisation architecturale Bretagne',
    'perspectiviste architecture extérieur',
    'BenRaff Studio',
  ],
  openGraph: {
    title: 'BenRaff Studio · Rendu 3D & Visualisation Architecturale à Rennes',
    description:
      'Perspectiviste à Rennes. Des rendus 3D qui vendent : composition, lumière, intention. Pas des images générées.',
    type: 'website',
    url: 'https://benraffstudio.com',
    locale: 'fr_FR',
    siteName: 'BenRaff Studio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BenRaff Studio · Rendu 3D Rennes',
    description:
      'Studio de visualisation architecturale à Rennes. Rendus ultra-réalistes pour architectes et promoteurs.',
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
  alternates: {
    canonical: 'https://benraffstudio.com',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="bg-[#080808] text-[#f5f5f0] antialiased overflow-x-hidden" suppressHydrationWarning>
        <SmoothScroll />
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
