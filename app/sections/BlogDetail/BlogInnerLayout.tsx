'use client'

import { motion } from 'framer-motion'
import Container from '@/app/components/ui/Container'
import BlogSidebar from './BlogSidebar'
import type { TocItem } from './BlogSidebar'
import type { BlogPostDetail } from '@/lib/blog-detail-data'

export interface BlogInnerLayoutProps {
  toc: TocItem[]
  relatedPosts?: BlogPostDetail[]
  children: React.ReactNode
}

/**
 * Two-column blog detail layout: main content (left) + sidebar with CTA and "In this article" (right).
 * Top padding clears the fixed header so the hero/title are not covered.
 */
export default function BlogInnerLayout({
  toc,
  relatedPosts = [],
  children,
}: BlogInnerLayoutProps) {
  return (
    <section className="relative bg-white pt-[80px] lg:pt-[90px] pb-16 md:pb-24">
      <Container className="max-w-[1390px] pt-[90px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 lg:gap-14">
          <motion.main
            className="min-w-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
          >
            {children}
          </motion.main>
          {/* Sidebar column stretches to match main content so sticky card stays visible until end of scroll. No overflow-hidden. */}
          <div className="lg:flex lg:flex-col lg:pl-2">
            <BlogSidebar toc={toc} relatedPosts={relatedPosts} />
          </div>
        </div>
      </Container>
    </section>
  )
}
