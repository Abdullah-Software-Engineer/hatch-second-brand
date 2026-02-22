'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '../../components/ui/Container'
import { cn } from '@/lib/utils'
import type { ProjectDetailTestimonial } from '@/lib/project-detail-data'

export interface ProjectDetailTestimonialsProps {
  testimonials: ProjectDetailTestimonial[]
  title?: string
  subtitle?: string
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

export default function ProjectDetailTestimonials({
  testimonials,
  title = 'What Clients Say',
  subtitle = "Don't just take our word for it, hear what our clients have to say.",
}: ProjectDetailTestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (testimonials.length === 0) return null

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  const current = testimonials[currentIndex]

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <Container>
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3">
            {title}
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="rounded-3xl p-8 md:p-12 min-h-[280px] flex flex-col justify-between bg-black border border-white/10 shadow-xl">
            <div>
              <StarRating count={current.rating ?? 5} />
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={currentIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="text-white text-lg md:text-xl leading-relaxed"
                >
                  &quot;{current.quote}&quot;
                </motion.blockquote>
              </AnimatePresence>
            </div>
            <div className="mt-8 flex items-end justify-between flex-wrap gap-4">
              <div>
                <p className="text-white font-semibold text-base md:text-lg">{current.author}</p>
                {current.location && (
                  <p className="text-white/60 text-sm md:text-base">{current.location}</p>
                )}
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white"
                  aria-label="Previous testimonial"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white"
                  aria-label="Next testimonial"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-1.5 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                className={cn(
                  'w-2 h-2 rounded-full transition-all duration-300',
                  i === currentIndex ? 'bg-primary w-6' : 'bg-gray-300 hover:bg-gray-400'
                )}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
