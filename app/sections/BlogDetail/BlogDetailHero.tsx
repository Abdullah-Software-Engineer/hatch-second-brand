'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Container from '../../components/ui/Container'
import type { BlogDetailData } from '@/lib/blog-detail-data'

export interface BlogDetailHeroProps {
  post: BlogDetailData
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
}

export default function BlogDetailHero({ post }: BlogDetailHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white flex flex-col pt-[80px] lg:pt-[90px] rounded-bl-[50px] rounded-br-[50px]">
      <Container className="pb-8 md:pb-10">
        <motion.div
          className="max-w-[900px]"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={item}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-primary text-sm md:text-base font-medium mb-6 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              Back to Blog
            </Link>
          </motion.div>

          <motion.span
            variants={item}
            className="inline-block text-primary font-medium text-sm md:text-base mb-3"
          >
            {post.category}
          </motion.span>

          <h1 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.15] font-bold text-black tracking-tight mb-4">
            <motion.span variants={item} className="block">
              {post.title}
            </motion.span>
          </h1>

          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-3 text-gray-600 text-sm md:text-base"
          >
            {post.date && <span>{post.date}</span>}
            {post.author && (
              <>
                <span className="text-gray-400">·</span>
                <span>{post.author}</span>
              </>
            )}
            <span className="text-gray-400">·</span>
            <span className="bg-[#2A2A2A] text-white px-3 py-1.5 rounded-full text-xs font-medium">
              {post.readTime}
            </span>
          </motion.div>
        </motion.div>
      </Container>

      <motion.div
        className="relative w-full max-w-[1390px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative w-full aspect-[2.2/1] min-h-[240px] rounded-2xl overflow-hidden bg-gray-200 border border-gray-200/80 shadow-lg">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 1390px"
          />
        </div>
      </motion.div>
    </section>
  )
}
