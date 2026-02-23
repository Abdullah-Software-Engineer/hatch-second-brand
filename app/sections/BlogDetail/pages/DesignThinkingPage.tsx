'use client'

import BlogDetailHero from '../BlogDetailHero'
import BlogInnerLayout from '../BlogInnerLayout'
import { getTocFromBody, getRelatedPosts } from '@/lib/blog-detail-data'
import { getBlogDetailContent } from '../contents'
import type { BlogDetailPageProps } from './types'

/**
 * Example: custom full page for "Design Thinking in Digital Transformation".
 * Use this as a template when a blog needs its own layout.
 * Register in pages/index.ts.
 */
export default function DesignThinkingPage({ post }: BlogDetailPageProps) {
  const toc = getTocFromBody(post.body)
  const relatedPosts = getRelatedPosts(post.slug)
  const ContentComponent = getBlogDetailContent(post.slug)

  return (
    <BlogInnerLayout toc={toc} relatedPosts={relatedPosts}>
      <>
        <BlogDetailHero post={post} />
        <ContentComponent post={post} />
      </>
    </BlogInnerLayout>
  )
}
