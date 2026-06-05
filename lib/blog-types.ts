// Types & constantes du blog — sans dépendance Node (importable côté client).

export const BLOG_CATEGORIES = ['Métier', 'Process', 'Marchés'] as const
export type BlogCategory = (typeof BLOG_CATEGORIES)[number]

export type PostMeta = {
  slug: string
  title: string
  description: string
  date: string // ISO (YYYY-MM-DD)
  category: BlogCategory
  cover?: string
  excerpt: string
  readingTime: number // minutes
}

export type Post = {
  meta: PostMeta
  content: string
}
