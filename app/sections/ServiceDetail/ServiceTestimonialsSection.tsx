'use client'

import { motion } from 'framer-motion'

export interface TestimonialItem {
  quote: string
  author: string
  location: string
  rating?: number
}

export interface ServiceTestimonialsSectionProps {
  sectionLabel?: string
  title?: string
  subtitle?: string
  testimonials: TestimonialItem[]
}

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-yellow-400"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function ServiceTestimonialsSection({
  sectionLabel = 'Testimonials',
  title = 'What Clients Say',
  subtitle = 'Helping you understand our process and offerings.',
  testimonials,
}: ServiceTestimonialsSectionProps) {
  if (testimonials.length === 0) return null

  const marqueeItems = [...testimonials, ...testimonials]

  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="text-center mb-12 md:mb-16 px-4">
        <motion.span
          className="text-gray-500 text-sm md:text-base mb-2 block tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          ({sectionLabel})
        </motion.span>
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-gray-600 text-base md:text-lg max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      </div>

      {/* Horizontal scrolling marquee of testimonial cards */}
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee-scroll gap-5 md:gap-6 pl-4 md:pl-6">
          {marqueeItems.map((t, index) => (
            <div
              key={index}
              className="shrink-0 w-[320px] sm:w-[360px] md:w-[400px] rounded-3xl p-6 md:p-8 text-white min-h-[280px] flex flex-col justify-between"
              style={{
                background: 'linear-gradient(180deg, #1a0a2e 0%, #2a1a3a 50%, #3d2a4d 100%)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
              }}
            >
              <div>
                <StarRating count={t.rating ?? 5} />
                <p className="text-base md:text-lg leading-relaxed text-white/95 line-clamp-4">
                  &quot;{t.quote}&quot;
                </p>
              </div>
              <p className="mt-5 text-white/70 text-sm md:text-base">
                {t.author}
                {t.location && `, ${t.location}`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
