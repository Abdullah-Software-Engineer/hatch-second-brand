'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export interface WorkItem {
  title?: string
  href?: string
}

export interface ServiceOurWorkProps {
  title?: string
  subtitle?: string
  items?: WorkItem[]
}

const defaultItems: WorkItem[] = [
  { title: 'Web Development', href: '/projects' },
  { title: 'App & Software', href: '/projects' },
  { title: 'Branding', href: '/projects' },
  { title: 'AI Integration', href: '/projects' },
  { title: 'Marketing', href: '/projects' },
  { title: 'Content & Creatives', href: '/projects' },
  { title: 'Lead Generation', href: '/projects' },
  { title: 'Our Work', href: '/projects' },
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
      <div className="overflow-hidden min-h-[220px] sm:min-h-[250px] md:min-h-[280px]">
        <div className="flex w-max animate-marquee-scroll gap-5 md:gap-6 pl-4 md:pl-6">
          {marqueeItems.map((item, index) => (
            <Link
              key={index}
              href={item.href ?? '/projects'}
              className="group shrink-0 w-[280px] sm:w-[320px] md:w-[360px] rounded-2xl overflow-hidden bg-[#E5E7EB] shadow-[0_10px_24px_rgba(0,0,0,0.12)] hover:shadow-[0_16px_34px_rgba(0,0,0,0.18)] transition-all duration-300 flex items-center justify-center min-h-[210px] sm:min-h-[240px] md:min-h-[270px] aspect-[4/3]"
            >
              <span className="text-gray-700 font-medium text-center px-4 group-hover:text-black transition-colors">
                {item.title ?? `Project ${(index % list.length) + 1}`}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
