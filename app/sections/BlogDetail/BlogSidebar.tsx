'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { BlogPostDetail } from '@/lib/blog-detail-data'

/** Sticky top offset: clears fixed header (80px sm / 90px lg) so sidebar card stays visible below it */
const STICKY_TOP_OFFSET_PX = 100

export interface TocItem {
  id: string
  text: string
}

export interface BlogSidebarProps {
  toc: TocItem[]
  relatedPosts?: BlogPostDetail[]
}

function truncateTitle(title: string, maxLength = 50) {
  if (title.length <= maxLength) return title
  return title.slice(0, maxLength).trim() + '…'
}

function InThisArticleCard({ toc }: { toc: TocItem[] }) {
  const [activeId, setActiveId] = useState<string | null>(toc[0]?.id ?? null)

  useEffect(() => {
    if (toc.length === 0) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
            break
          }
        }
      },
      {
        rootMargin: `-${STICKY_TOP_OFFSET_PX + 80}px 0px -60% 0px`,
        threshold: 0,
      }
    )
    toc.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [toc])

  if (toc.length === 0) return null

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <h3 className="text-base font-bold text-gray-900 mb-4">In this article</h3>
      <nav aria-label="Article contents" className="flex flex-col gap-1">
        {toc.map((item) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault()
              document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
            }}
            className={cn(
              'flex items-start gap-2 py-2 pr-2 text-left text-sm transition-colors rounded-r-md -ml-1 pl-3 border-l-2',
              activeId === item.id
                ? 'border-primary text-primary font-medium'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            )}
          >
            {item.text}
          </Link>
        ))}
      </nav>
    </div>
  )
}

const cardMotion = {
  hidden: { opacity: 0, x: 12 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: 0.1 + i * 0.06, ease: 'easeOut' as const },
  }),
}

export default function BlogSidebar({ toc, relatedPosts = [] }: BlogSidebarProps) {
  return (
    <aside
      className="flex flex-col gap-6 lg:min-w-[300px]"
      aria-label="Blog sidebar"
    >
      {/* Sticky wrapper: CTA + In this article stay visible while scrolling. No overflow on parents so sticky works. */}
      <div className="flex flex-col gap-6 lg:sticky lg:top-[100px] lg:z-10 lg:self-start">
        {/* Have a project in mind? — purple gradient card */}
        <motion.div
          className="rounded-2xl bg-linear-to-br from-primary to-primary/80 p-6 text-white shadow-lg"
          variants={cardMotion}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <h3 className="text-lg font-bold mb-4">Have a project in mind?</h3>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-gray-900 font-medium px-5 py-2.5 rounded-full hover:bg-gray-100 transition-colors"
          >
            Contact Us
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
              <path
                d="M1 11L11 1M11 1H3M11 1V9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </motion.div>

        {/* In this article — TOC (inside sticky wrapper) */}
        <motion.div
          variants={cardMotion}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          <InThisArticleCard toc={toc} />
        </motion.div>
      </div>

      {/* Explore All Articles + Related Articles — scrolls with page */}
      <motion.div
        className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
        variants={cardMotion}
        initial="hidden"
        animate="visible"
        custom={2}
      >
        <div className="flex flex-col gap-3 mb-4">
          <h3 className="text-base font-bold text-gray-900">Explore All Articles</h3>
          <Link
            href="/blog"
            className="inline-flex justify-center w-full sm:w-auto bg-primary text-white text-sm font-medium px-4 py-2.5 rounded-full shadow-[0_14px_30px_rgba(0,0,0,0.16)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 hover:scale-[1.02] transition-transform transition-shadow"
          >
            View All
          </Link>
        </div>
        {relatedPosts.length > 0 && (
          <>
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Related Articles</h4>
            <ul className="flex flex-col gap-2 list-none pl-0">
              {relatedPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm text-gray-600 hover:text-primary transition-colors line-clamp-2"
                  >
                    {truncateTitle(post.title)}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </motion.div>
    </aside>
  )
}
