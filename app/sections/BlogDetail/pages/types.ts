import type { BlogDetailData } from '@/lib/blog-detail-data'

/**
 * Props for a custom blog detail page component.
 * Use when a post needs a completely different layout (hero, content, sidebar).
 */
export interface BlogDetailPageProps {
  post: BlogDetailData
}
