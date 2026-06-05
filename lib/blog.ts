import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { BlogCategory, Post, PostMeta } from './blog-types'

export { BLOG_CATEGORIES } from './blog-types'
export type { BlogCategory, Post, PostMeta } from './blog-types'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

function estimateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length
  return Math.max(1, Math.round(words / 200))
}

function readPost(fileName: string): Post {
  const slug = fileName.replace(/\.mdx?$/, '')
  const raw = fs.readFileSync(path.join(BLOG_DIR, fileName), 'utf-8')
  const { data, content } = matter(raw)
  const meta: PostMeta = {
    slug,
    title: data.title ?? slug,
    description: data.description ?? '',
    date: data.date ? new Date(data.date).toISOString().slice(0, 10) : '1970-01-01',
    category: (data.category as BlogCategory) ?? 'Métier',
    cover: data.cover,
    excerpt: data.excerpt ?? data.description ?? '',
    readingTime: estimateReadingTime(content),
  }
  return { meta, content }
}

function listFiles(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs.readdirSync(BLOG_DIR).filter((f) => /\.mdx?$/.test(f))
}

export function getAllPosts(): PostMeta[] {
  return listFiles()
    .map((f) => readPost(f).meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string): Post | null {
  const file = listFiles().find((f) => f.replace(/\.mdx?$/, '') === slug)
  if (!file) return null
  return readPost(file)
}
