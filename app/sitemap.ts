import type { MetadataRoute } from 'next'
import { portfolioProjects } from '@/lib/portfolio-data'
import { getAllPosts } from '@/lib/blog'
import { secteurs } from '@/lib/secteurs-data'

const SITE = 'https://benraffstudio.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE}/`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE}/projets`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE}/benjamin-raffegeau`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${SITE}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE}/secteurs`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE}/mentions-legales`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${SITE}/politique-de-confidentialite`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ]

  const secteurPages: MetadataRoute.Sitemap = secteurs.map((s) => ({
    url: `${SITE}/secteurs/${s.slug}`,
    lastModified: now,
    changeFrequency: 'yearly',
    priority: 0.8,
  }))

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

  return [...staticPages, ...secteurPages, ...projectPages, ...blogPages]
}
