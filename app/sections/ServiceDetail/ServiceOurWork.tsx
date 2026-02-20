'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export interface WorkItem {
  image?: string
  title?: string
  href?: string
}

export interface ServiceOurWorkProps {
  title?: string
  subtitle?: string
  items?: WorkItem[]
}

const defaultItems: WorkItem[] = [
  { image: '/home/projects/project-1.png', title: 'Project 1', href: '/projects' },
  { image: '/home/projects/project-2.png', title: 'Project 2', href: '/projects' },
  { image: '/home/projects/project-3.png', title: 'Project 3', href: '/projects' },
]

export default function ServiceOurWork({
  title = 'Our Work',
  subtitle = 'See how we create visuals that stand out.',
  items = defaultItems,
}: ServiceOurWorkProps) {
  const list = items.length > 0 ? items : defaultItems
  const marqueeItems = [...list, ...list]

  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="text-center mb-12 md:mb-16 px-4">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-gray-600 text-base md:text-lg max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          {subtitle}
        </motion.p>
      </div>

      {/* Horizontal scrolling marquee of cards */}
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee-scroll gap-5 md:gap-6 pl-4 md:pl-6">
          {marqueeItems.map((item, index) => (
            <Link
              key={index}
              href={item.href ?? '/projects'}
              className="group shrink-0 w-[280px] sm:w-[320px] md:w-[360px] rounded-2xl overflow-hidden bg-[#E5E7EB] aspect-4/3 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative w-full h-full">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title ?? `Project ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="360px"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">
                    {item.title ?? `Project ${(index % list.length) + 1}`}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
