'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export interface ServiceDetailIntroProps {
  description: string
  ctaText?: string
  ctaHref?: string
}

export default function ServiceDetailIntro({
  description,
  ctaText = 'Contact Us',
  ctaHref = '/contact',
}: ServiceDetailIntroProps) {
  return (
    <section className="bg-[#E5E7EB] py-16 md:py-24">
      <motion.div
        className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <p className="text-[#1a1a1a] text-lg md:text-xl leading-relaxed">
          {description}
        </p>
        <div className="mt-14 md:mt-16 flex justify-center">
          <Link
            href={ctaHref}
            className="group inline-flex items-center justify-center gap-2 bg-primary text-white rounded-full px-10 py-4 text-[16px] sm:text-[18px] font-medium shadow-[0_14px_30px_rgba(0,0,0,0.16)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 hover:scale-[1.02] transition-transform transition-shadow duration-300"
          >
            {ctaText}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden>
              <path d="M7 17L17 7M17 7V3M17 7H21" />
            </svg>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
