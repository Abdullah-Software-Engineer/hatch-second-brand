'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function LifeAthatch() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  // All team images separately
  const teamImages = [
    '/About/team1.webp',
    '/About/team2.webp',
    '/About/team3.webp',
    '/About/team4.webp',
    '/About/team5.webp',
    '/About/team6.webp',
    '/About/team7.webp',
    '/About/team8.webp',
    '/About/team9.webp',
    '/About/team10.webp',
    '/About/team11.webp',
    '/About/team12.webp',
    '/About/team13.webp',
  ]

  // Duplicate images for seamless loop
  const marqueeItems = [...teamImages, ...teamImages, ...teamImages]

  return (
    <section
      ref={ref}
      className="relative min-h-[80vh] md:min-h-screen overflow-hidden"
    >
     

      {/* Text content */}
      <div className="relative z-10 pt-24 pb-20">
        <div className="flex flex-col items-center mb-6 md:mb-16 lg:mb-20 text-center">
          <span className="text-gray-500 text-sm md:text-base mb-4 tracking-wide">(Life at Hatch)</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
            The People Behind the Products <br />
            Where Innovation Lives
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl">
            A creative force behind delivering smart and scalable digital solutions.
          </p>
        </div>
      </div>

      {/* IMAGE MARQUEE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.4 }}
        className="relative z-10 w-full pb-12"
      >
        <div className="overflow-hidden">
          <div className="flex w-max animate-marquee-scroll gap-2 sm:gap-3 md:gap-4 lg:gap-6 items-end">
            {marqueeItems.map((src, index) => (
              <div key={`${src}-${index}`} className="flex-shrink-0 flex items-end">
                <Image
                  src={src}
                  alt={`Team member ${index + 1}`}
                  width={0}
                  height={0}
                  sizes="(max-width: 640px) 120px, (max-width: 1024px) 180px, 300px"
                  unoptimized
                  draggable={false}
                  className="h-auto w-auto max-w-[120px] sm:max-w-[150px] md:max-w-[180px] lg:max-w-none"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
