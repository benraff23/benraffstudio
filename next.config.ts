import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Standalone mode — required for Node.js VPS deployment (PM2 + Nginx)
  output: 'standalone',
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.pixabay.com' },
    ],
  },
  async redirects() {
    return [
      { source: '/portfolio', destination: '/projets', permanent: true },
      { source: '/portfolio/:path*', destination: '/projets', permanent: true },
      // Pages secteurs supprimées : la homepage porte désormais tout le tunnel.
      { source: '/secteurs', destination: '/', permanent: true },
      { source: '/secteurs/:path*', destination: '/', permanent: true },
      // Landing /paysagistes fusionnée dans la homepage.
      { source: '/paysagistes', destination: '/', permanent: true },
    ]
  },
}

export default nextConfig
