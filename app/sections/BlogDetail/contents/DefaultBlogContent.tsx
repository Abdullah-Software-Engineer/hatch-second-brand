'use client'

import { headingToId } from '@/lib/blog-detail-data'
import type { BlogDetailData } from '@/lib/blog-detail-data'

export interface BlogContentProps {
  post: BlogDetailData
}

/**
 * Default blog content: renders body as paragraphs and headings.
 * Use this when a post doesn't have a custom content component.
 */
export default function DefaultBlogContent({ post }: BlogContentProps) {
  return (
    <article className="prose prose-gray max-w-none">
      {post.body.map((block, i) => {
        if (block.type === 'heading') {
          const id = headingToId(block.text)
          return (
            <h2
              key={i}
              id={id}
              className="text-xl md:text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24"
            >
              {block.text}
            </h2>
          )
        }
        if (block.type === 'paragraph') {
          return (
            <p key={i} className="text-gray-700 leading-relaxed mb-4">
              {block.text}
            </p>
          )
        }
        return null
      })}
    </article>
  )
}
