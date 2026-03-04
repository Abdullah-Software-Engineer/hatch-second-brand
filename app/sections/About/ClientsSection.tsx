'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Container from '../../components/ui/Container'

const LOGOS = [
  '/home/hero/marquee-logos/challenge.webp',
  '/home/hero/marquee-logos/3.webp',
  '/home/hero/marquee-logos/4.webp',
  '/home/hero/marquee-logos/5.webp',
  '/home/hero/marquee-logos/6.webp',
  '/home/hero/marquee-logos/gasior laww 1.webp',
  '/home/hero/marquee-logos/zoundz.webp',
  '/home/hero/marquee-logos/grep.webp',
  '/home/hero/marquee-logos/sexner logo 1.webp',
]

export default function ClientsSection() {
  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <Container>
        <motion.div
          className="flex flex-col items-center mb-16 md:mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-gray-500 text-sm md:text-base mb-4 tracking-wide">(Clients)</span>
          <h2 className="text-[28px] md:text-[34px] lg:text-[38px] xl:text-[42px] font-bold text-black mb-6">
            Brands we&apos;ve helped grow
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl">
            Driving measurable impact through creative digital solutions.
          </p>
        </motion.div>
      </Container>
      {/* Running logo marquee - duplicate logos for seamless loop */}
      <div className="w-full overflow-hidden">
        <div className="flex w-max animate-marquee-scroll hover:[animation-play-state:paused]">
          {[...LOGOS, ...LOGOS].map((src, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-6 sm:mx-8 lg:mx-10 min-w-[180px] sm:min-w-[200px] md:min-w-[240px]"
            >
              <div className="relative h-16 md:h-20 w-[180px] md:w-[220px]">
                <Image
                  src={src}
                  alt="Client logo"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
