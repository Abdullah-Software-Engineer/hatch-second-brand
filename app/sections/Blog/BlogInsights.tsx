'use client'

import { useState } from 'react'
import Image from 'next/image'
import Container from '../../components/ui/Container'
import { cn } from '@/lib/utils'

const CATEGORIES = [
  'All',
  'AI Trends',
  'Design',
  'Branding & Strategy',
  'Leadership',
  'Marketing'
]

const BLOG_POSTS = [
  {
    id: 1,
    title: "Beyond Automation: How Al Integration is Redefining Business Workflows",
    description: "Discover how Al integration and Al workflow automation drive business Al trends for smarter growth.",
    readTime: "2 min read",
    image: "/home/blog/post-1.png",
    category: "AI Trends"
  },
  {
    id: 2,
    title: "The Future of Custom Al: Why Off-the-Shelf Tools Aren't Enough for Enterprise",
    description: "Discover why Custom Al Solutions beat off-the-shelf tools for Enterprise Al Integration.",
    readTime: "2 min read",
    image: "/home/blog/post-2.png",
    category: "AI Trends"
  },
  {
    id: 3,
    title: "Design Thinking in Digital Transformation",
    description: "Explore how design thinking principles can transform your digital strategy and user experience.",
    readTime: "3 min read",
    image: "/home/blog/post-3.png",
    category: "Design"
  },
  {
    id: 4,
    title: "UI/UX Best Practices for Modern Web Applications",
    description: "Learn the essential UI/UX principles that create engaging and intuitive user experiences.",
    readTime: "4 min read",
    image: "/home/blog/post-4.png",
    category: "Design"
  },
  {
    id: 5,
    title: "Building a Strong Brand Identity in 2025",
    description: "Learn the key strategies for creating a cohesive brand identity that resonates with modern audiences.",
    readTime: "4 min read",
    image: "/home/blog/post-5.png",
    category: "Branding & Strategy"
  },
  {
    id: 6,
    title: "Strategic Brand Positioning in Competitive Markets",
    description: "Discover how to position your brand effectively in crowded marketplaces and stand out from competitors.",
    readTime: "5 min read",
    image: "/home/blog/post-6.png",
    category: "Branding & Strategy"
  },
  {
    id: 7,
    title: "Leading Remote Teams: Best Practices for 2025",
    description: "Explore effective leadership strategies for managing and motivating remote teams in the modern workplace.",
    readTime: "3 min read",
    image: "/home/blog/post-7.png",
    category: "Leadership"
  },
  {
    id: 8,
    title: "Digital Marketing Strategies That Drive Results",
    description: "Learn proven digital marketing tactics that generate leads, increase engagement, and boost conversions.",
    readTime: "4 min read",
    image: "/home/blog/post-8.png",
    category: "Marketing"
  }
]

export default function BlogInsights() {
  const [activeCategory, setActiveCategory] = useState('All')

  // Filter blog posts based on active category
  const filteredPosts = activeCategory === 'All' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === activeCategory)

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
                  <BlogPostCard key={post.id} post={post} />
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

function BlogPostCard({ post }: { post: typeof BLOG_POSTS[0] }) {
  return (
    <div className="flex flex-col h-full">
      {/* Image Placeholder with Float Effect */}
      <div className="relative w-full h-[400px] bg-gray-300 rounded-lg overflow-hidden shadow-md mb-6">
        <div className="w-full h-full bg-gray-300"></div>
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col">
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
          {post.title}
        </h3>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-700 mb-4 flex-1">
          {post.description}
        </p>

        {/* Read Time Button - Bottom Right */}
        <div className="flex justify-end mt-auto">
          <span className="bg-[#2A2A2A] text-white px-5 py-2.5 rounded-full text-sm font-medium">
            {post.readTime}
          </span>
        </div>
      </div>
    </div>
  )
}
