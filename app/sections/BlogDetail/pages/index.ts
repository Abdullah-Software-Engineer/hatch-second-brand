import type { ComponentType } from 'react'
import type { BlogDetailData } from '@/lib/blog-detail-data'
import type { BlogDetailPageProps } from './types'
import DesignThinkingPage from './DesignThinkingPage'

/**
 * Registry of custom page components per blog slug.
 *
 * Use when a blog needs a completely different page layout (e.g. different hero, no sidebar,
 * or custom sections). When a slug is listed here, the blog detail page renders this component
 * instead of the default (BlogDetailHero + BlogInnerLayout + content).
 *
 * How to add a different full page for a blog:
 * 1. Create a new file in pages/ (e.g. MyBlogPage.tsx) that accepts { post }: BlogDetailPageProps.
 * 2. Optionally use BlogDetailHero, BlogInnerLayout, and getBlogDetailContent(post.slug) to reuse layout.
 * 3. Add the slug → component mapping below.
 */
const CUSTOM_PAGE_MAP: Partial<Record<string, ComponentType<BlogDetailPageProps>>> = {
  'design-thinking-digital-transformation': DesignThinkingPage,
}

/**
 * Returns the custom page component for a slug, or null to use the default layout.
 */
export function getBlogPageComponent(
  slug: string
): ComponentType<BlogDetailPageProps> | null {
  return CUSTOM_PAGE_MAP[slug] ?? null
}

export type { BlogDetailPageProps } from './types'
