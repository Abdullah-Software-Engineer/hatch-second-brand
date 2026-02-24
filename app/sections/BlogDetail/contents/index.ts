import type { BlogDetailData } from '@/lib/blog-detail-data'
import type { ComponentType } from 'react'
import DefaultBlogContent from './DefaultBlogContent'
import BeyondAutomationContent from './BeyondAutomationContent'
import UIUXDesignTrends2026Content from './UIUXDesignTrends2026Content'
import FutureCustomAIContent from './FutureCustomAIContent'
import ConversionFocusedWebDesignContent from './ConversionFocusedWebDesignContent'
import type { BlogContentProps } from './types'

export type { BlogContentProps }

/**
 * Registry of custom content components per blog slug.
 *
 * How to add a different component for a blog:
 * 1. Create a new file in contents/ (e.g. MyBlogContent.tsx).
 * 2. Export a default component that accepts { post }: BlogContentProps.
 * 3. Compose content using shared blocks from ../blocks (SectionHeading, BarChart, ComparisonTable, BulletList).
 * 4. Add the slug → component mapping below.
 *
 * If a slug is not listed, DefaultBlogContent is used (renders post.body paragraphs and headings).
 */
const CONTENT_MAP: Partial<Record<string, ComponentType<BlogContentProps>>> = {
  'beyond-automation-ai-integration-business-workflows': BeyondAutomationContent,
  'ui-ux-design-trends-2026': UIUXDesignTrends2026Content,
  'future-of-custom-ai-enterprise': FutureCustomAIContent,
  'conversion-focused-web-design-frontend-performance': ConversionFocusedWebDesignContent,
}

/**
 * Returns the content component for a blog slug. Always returns a component (default if not registered).
 */
export function getBlogDetailContent(slug: string): ComponentType<BlogContentProps> {
  return CONTENT_MAP[slug] ?? DefaultBlogContent
}

export { DefaultBlogContent }
