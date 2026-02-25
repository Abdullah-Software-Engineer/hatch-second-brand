'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Container from '../../components/ui/Container'
import { cn } from '@/lib/utils'
import { BLOG_DETAIL_LIST, getBlogCategories } from '@/lib/blog-detail-data'

const CATEGORIES = ['All', ...getBlogCategories()]

export default function BlogInsights() {
  const [activeCategory, setActiveCategory] = useState('All')

  // Filter blog posts based on active category
  const filteredPosts = activeCategory === 'All'
    ? BLOG_DETAIL_LIST
    : BLOG_DETAIL_LIST.filter((post) => post.category === activeCategory)

  return (
    <section className="w-full bg-[#EDEDED] py-12 md:py-16 lg:py-20 rounded-tl-[50px] rounded-tr-[50px] mb-[90px]">
      <Container>
        <div className="w-full flex flex-col items-center">
          {/* Subtitle Text */}
          <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 text-center">
            Get insights that help you stay ahead in the digital world
          </p>

          {/* Heading Image */}
          <div className="mb-8 md:mb-12">
            <Image
              src="/home/blog/blogheading.webp"
              alt="Blog Insights"
              width={800}
              height={200}
              className="w-auto h-auto max-w-full"
              priority
            />
          </div>

          {/* Category Filters */}
          <div className="w-full flex justify-center px-4 sm:px-6">
            <div className="bg-white rounded-lg sm:rounded-full px-2 py-2 sm:px-3 sm:py-2.5 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 shadow-sm w-full max-w-max">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    'px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium transition-all duration-300 whitespace-nowrap',
                    activeCategory === category
                      ? 'bg-primary text-white'
                      : 'text-gray-700 hover:text-gray-900'
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="w-full mt-12 md:mt-16">
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {filteredPosts.map((post) => (
                  <BlogPostCard key={post.slug} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No posts found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}

function BlogPostCard({ post }: { post: (typeof BLOG_DETAIL_LIST)[0] }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col h-full rounded-lg overflow-hidden transition-shadow hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      {/* Image */}
      <div className="relative w-full h-[400px] bg-gray-300 rounded-lg overflow-hidden shadow-md mb-6">
        <Image
          src={post.image || '/home/blog/post-1.webp'}
          alt=""
          fill
          className="object-cover transition-transform group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">
          {post.title}
        </h3>

        <p className="text-base md:text-lg text-gray-700 mb-4 flex-1">
          {post.description}
        </p>

        <div className="flex justify-end mt-auto">
          <span className="bg-[#2A2A2A] text-white px-5 py-2.5 rounded-full text-sm font-medium">
            {post.readTime}
          </span>
        </div>
      </div>
    </Link>
  )
}