import type { MetadataRoute } from 'next'
import { portfolioProjects } from '@/lib/portfolio-data'
import { getAllPosts } from '@/lib/blog'
import { regions } from '@/lib/regions-data'

const SITE = 'https://benraffstudio.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE}/`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE}/projets`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE}/benjamin-raffegeau`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${SITE}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE}/brief`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${SITE}/zone-intervention`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    // Mentions légales et confidentialité sont volontairement en noindex :
    // les lister ici déclencherait un avertissement « URL envoyée avec
    // balise noindex » dans la Search Console.
  ]

  const projectPages: MetadataRoute.Sitemap = portfolioProjects.map((p) => ({
    url: `${SITE}/projets/${p.slug}`,
    lastModified: now,
    changeFrequency: 'yearly',
    priority: 0.8,
  }))

  const blogPages: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${SITE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly',
    priority: 0.6,
  }))

  const regionPages: MetadataRoute.Sitemap = regions.map((r) => ({
    url: `${SITE}/zone-intervention/${r.slug}`,
    lastModified: now,
    changeFrequency: 'yearly',
    priority: 0.5,
  }))

  return [...staticPages, ...regionPages, ...projectPages, ...blogPages]
}
