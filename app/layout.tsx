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
        'Studio de visualisation architecturale à Rennes. Directeur artistique à l\'œil de photographe, je crée des séries cinématographiques qui font ressentir les projets d\'architectes, promoteurs et paysagistes avant qu\'ils existent.',
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
        'Série cinématographique en visualisation architecturale',
        'Visualisation architecturale',
        'Perspectiviste',
        'Direction artistique',
        'Rendu 3D architectural',
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
      jobTitle: 'Directeur artistique & perspectiviste',
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
  metadataBase: new URL('https://benraffstudio.com'),
  title: 'BenRaff Studio · Séries cinématographiques & visualisation architecturale à Rennes',
  description:
    'Vous cherchez plus qu\'un rendu 3D. Directeur artistique à l\'œil de photographe, je crée des séries cinématographiques qui font ressentir vos projets avant qu\'ils existent. Perspectiviste à Rennes, toute la France.',
  keywords: [
    'perspectiviste Rennes',
    'rendu 3D Rennes',
    'visualisation architecturale Rennes',
    'visualisation architecturale Bretagne',
    'studio 3D Rennes',
    'image cinématographique architecture',
    'série cinématographique architecture',
    'directeur artistique 3D',
    'perspectiviste architecture extérieur',
    'BenRaff Studio',
  ],
  openGraph: {
    title: 'BenRaff Studio · Séries cinématographiques & visualisation architecturale',
    description:
      'Je crée des séries cinématographiques qui font ressentir vos projets avant qu\'ils existent. Pas des images générées : une intention, composée et éclairée.',
    type: 'website',
    url: 'https://benraffstudio.com',
    locale: 'fr_FR',
    siteName: 'BenRaff Studio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BenRaff Studio · Visualisation architecturale cinématographique · Rennes',
    description:
      'Des séries cinématographiques qui font ressentir vos projets avant qu\'ils existent. Perspectiviste à Rennes.',
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
      <body className="bg-[#f7f5f1] text-[#1c1c1c] antialiased overflow-x-hidden" suppressHydrationWarning>
        <SmoothScroll />
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
