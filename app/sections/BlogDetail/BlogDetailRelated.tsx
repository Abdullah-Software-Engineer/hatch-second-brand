'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Container from '../../components/ui/Container'
import type { BlogDetailData } from '@/lib/blog-detail-data'

export interface BlogDetailRelatedProps {
  posts: BlogDetailData[]
}

const cardMotion = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: 'easeOut' },
  }),
}

export default function BlogDetailRelated({ posts }: BlogDetailRelatedProps) {
  if (posts.length === 0) return null

  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-black text-center mb-10 md:mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45 }}
        >
          Related Articles
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={cardMotion}
              custom={i}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col h-full rounded-2xl overflow-hidden border border-gray-200 bg-white hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="relative w-full aspect-[16/10] bg-gray-200 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5 md:p-6 flex flex-col flex-1">
                  <span className="text-primary text-sm font-medium mb-2">
                    {post.category}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-black mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base line-clamp-2 flex-1">
                    {post.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gray-500 group-hover:text-primary transition-colors">
                    Read more
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-0.5 transition-transform">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white rounded-full px-8 py-3.5 text-base font-medium shadow-[0_4px_14px_rgba(151,84,216,0.3)] hover:bg-primary/90 transition-all duration-300"
          >
            View All Posts
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </Link>
        </motion.div>
      </Container>
    </section>
  )
}
