'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Container from '../../components/ui/Container'
import { cn } from '@/lib/utils'
import { BLOG_DETAIL_LIST, getBlogCategories } from '@/lib/blog-detail-data'

const CATEGORIES = ['All', ...getBlogCategories()]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function BlogInsights() {
  const [activeCategory, setActiveCategory] = useState('All')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Filter blog posts based on active category
  const filteredPosts = activeCategory === 'All'
    ? BLOG_DETAIL_LIST
    : BLOG_DETAIL_LIST.filter((post) => post.category === activeCategory)

  return (
    <section ref={ref} className="w-full bg-gradient-to-b from-[#EDEDED] via-[#F5F5F5] to-[#EDEDED] py-12 md:py-16 lg:py-20 rounded-tl-[50px] rounded-tr-[50px] mb-[90px]">
      <Container>
        <motion.div
          className="w-full flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Subtitle Text */}
          <motion.p
            className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 text-center"
            variants={itemVariants}
          >
            Get insights that help you stay ahead in the digital world
          </motion.p>

          {/* Heading Image */}
          <motion.div
            className="mb-8 md:mb-12"
            variants={itemVariants}
          >
            <Image
              src="/home/blog/blogheading.webp"
              alt="Blog Insights"
              width={800}
              height={200}
              className="w-auto h-auto max-w-full drop-shadow-lg"
              priority
            />
          </motion.div>

          {/* Category Filters */}
          <motion.div
            className="w-full flex justify-center px-4 sm:px-6"
            variants={itemVariants}
          >
            <div className="bg-white rounded-lg sm:rounded-full px-2 py-2 sm:px-3 sm:py-2.5 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 shadow-[0_14px_30px_rgba(0,0,0,0.08)] w-full max-w-max">
              {CATEGORIES.map((category, index) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    'px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium transition-all duration-300 whitespace-nowrap shadow-[0_10px_24px_rgba(0,0,0,0.08)]',
                    activeCategory === category
                      ? 'bg-primary text-white shadow-[0_14px_30px_rgba(0,0,0,0.16)]'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Blog Posts Grid */}
          <motion.div
            className="w-full mt-12 md:mt-16"
            variants={itemVariants}
          >
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {filteredPosts.map((post, index) => (
                  <BlogPostCard key={post.slug} post={post} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No posts found in this category.</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

function BlogPostCard({ post, index }: { post: (typeof BLOG_DETAIL_LIST)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group flex flex-col h-full rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 bg-white"
      >
        {/* Image */}
        <div className="relative w-full h-[400px] bg-gradient-to-br from-gray-200 to-gray-300 rounded-t-xl overflow-hidden shadow-lg mb-6">
          <Image
            src={post.image || '/home/blog/post-1.webp'}
            alt=""
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col px-6 pb-6">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors duration-300">
            {post.title}
          </h3>

          <p className="text-base md:text-lg text-gray-700 mb-4 flex-1 leading-relaxed">
            {post.description}
          </p>

          <div className="flex justify-end mt-auto">
            <span className="bg-[#2A2A2A] text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-[0_10px_24px_rgba(0,0,0,0.16)] group-hover:shadow-[0_14px_32px_rgba(0,0,0,0.2)] group-hover:-translate-y-0.5 group-hover:scale-[1.02] transition-transform transition-shadow duration-300">
              {post.readTime}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}