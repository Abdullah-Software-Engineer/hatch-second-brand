'use client'

import Image from 'next/image'
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
  subtitle = 'Helping you understand our process and offerings.',
}: ProjectDetailTestimonialsProps) {
  if (testimonials.length === 0) return null

  const marqueeItems = [...testimonials, ...testimonials]

  return (
    <section className="bg-white py-20 md:py-32 overflow-hidden">
      <div className="flex flex-col items-center mb-16 md:mb-20 text-center">
        <span className="text-gray-500 text-sm md:text-base mb-4 tracking-wide">(Testimonials)</span>
        <h2 className="text-[28px] md:text-[34px] lg:text-[38px] xl:text-[42px] font-bold text-black mb-6">{title}</h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl">
          {subtitle}
        </p>
      </div>

      {/* Horizontal scrolling marquee of testimonial cards */}
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee-scroll gap-5 md:gap-6 pl-4 md:pl-6">
          {marqueeItems.map((t, index) => (
            <div
              key={index}
              className="shrink-0 w-[320px] sm:w-[360px] md:w-[400px] rounded-3xl p-6 md:p-8 text-white min-h-[280px] flex flex-col justify-between relative overflow-hidden"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/testi-bg.png"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 320px, (max-width: 768px) 360px, 400px"
                />
              </div>
              
              {/* Content */}
              <div className="relative z-10">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
