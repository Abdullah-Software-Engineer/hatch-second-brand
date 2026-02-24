'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import type { BlogPostDetail } from '@/lib/blog-detail-data'

export interface BlogDetailHeroProps {
  /** Pass the full post to fill hero fields (title, description, image, date, author, readTime, category). */
  post?: BlogPostDetail
  title?: string
  description?: string
  image?: string
  date?: string
  author?: string
  readTime?: string
  category?: string
}

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  }),
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' as const },
  },
}

const imageMotion = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const, delay: 0.1 },
  },
}

export default function BlogDetailHero(props: BlogDetailHeroProps) {
  const {
    title = props.post?.title ?? '',
    description = props.post?.description ?? '',
    image = props.post?.image ?? '',
    date = props.post?.date ?? '',
    author = props.post?.author ?? '',
    readTime = props.post?.readTime ?? '',
    category = props.post?.category,
  } = props
  const minimal = props.post?.heroMinimal ?? false

  return (
    <motion.article
      className="flex flex-col"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {!minimal && (
        <motion.div
          className="relative w-full aspect-[2.2/1] min-h-[220px] sm:min-h-[280px] rounded-2xl overflow-hidden bg-gray-200"
          variants={imageMotion}
        >
          <Image
            src={image}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 66vw"
          />
        </motion.div>
      )}
      <div className={minimal ? 'pt-0 pb-10' : 'pt-6 sm:pt-8 md:pt-10'}>
        <motion.h1
          className={`font-bold text-gray-900 leading-tight max-w-3xl ${
            minimal
              ? 'text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] mb-10'
              : 'text-2xl sm:text-3xl md:text-4xl lg:text-[42px] mb-4'
          }`}
          variants={item}
        >
          {title}
        </motion.h1>
        {!minimal && (
          <>
            <motion.p
              className="text-base sm:text-lg text-gray-600 leading-relaxed mb-5"
              variants={item}
            >
              {description}
            </motion.p>
            <motion.div
              className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500"
              variants={item}
            >
              <span>{date}</span>
              <span aria-hidden>·</span>
              <span>{author}</span>
              <span aria-hidden>·</span>
              <span>{readTime}</span>
              {category && (
                <>
                  <span aria-hidden>·</span>
                  <span className="text-primary font-medium">{category}</span>
                </>
              )}
            </motion.div>
          </>
        )}
      </div>
    </motion.article>
  )
}
