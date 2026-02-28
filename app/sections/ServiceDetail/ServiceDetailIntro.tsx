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
        className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-center"
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
            className="group inline-flex items-center justify-center gap-2 bg-primary text-white rounded-full px-10 py-4 text-[16px] sm:text-[18px] font-medium shadow-[0_8px_24px_rgba(0,0,0,0.18),0_4px_12px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.22),0_6px_16px_rgba(0,0,0,0.14)] hover:-translate-y-0.5 hover:scale-[1.02] transition duration-300"
          >
            {ctaText}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden>
              <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
