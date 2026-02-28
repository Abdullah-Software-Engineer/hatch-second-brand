'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export interface ProjectDetailHeroProps {
  titleAccent: string
  titleRest: string
  tagline: string
  iconSrc?: string
  categories?: string
  heroMediaSrc?: string
}

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  }),
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

const iconMotion = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: 'easeOut' as const },
  },
}

const mediaMotion = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const, delay: 0.2 },
  },
}

export default function ProjectDetailHero({
  titleAccent,
  titleRest,
  tagline,
  iconSrc,
  categories,
  heroMediaSrc,
}: ProjectDetailHeroProps) {
  return (
    <section className="relative min-h-[380px] sm:min-h-[440px] overflow-hidden bg-white flex flex-col pt-[80px] lg:pt-[90px] rounded-bl-[50px] rounded-br-[50px]">
      <div className="relative z-10 w-full flex-1 flex items-center justify-center px-4 py-10 md:py-14">
        <motion.div
          className="flex flex-col items-center text-center max-w-[1000px] mx-auto"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-[32px] sm:text-[44px] md:text-[54px] lg:text-[64px] leading-[1.12] font-medium text-black tracking-tight mb-2 sm:mb-3">
            <span className="flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-3 gap-y-1">
              <motion.span variants={item} className="text-primary font-bold">
                {titleAccent}
              </motion.span>
              {iconSrc && (
                <motion.span
                  variants={iconMotion}
                  className="relative w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] md:w-[60px] md:h-[60px] rounded-full overflow-hidden inline-flex items-center justify-center shrink-0 border-2 border-black/10"
                >
                  <Image
                    src={iconSrc}
                    alt=""
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 52px, 60px"
                  />
                </motion.span>
              )}
              <motion.span variants={item} className="font-bold text-black">
                {titleRest}
              </motion.span>
            </span>
          </h1>
          {categories && (
            <motion.p
              variants={item}
              className="text-[14px] sm:text-[15px] text-gray-400 mb-2"
            >
              {categories}
            </motion.p>
          )}
          <motion.p
            variants={item}
            className="text-[15px] sm:text-[17px] md:text-[18px] text-gray-600 max-w-[640px] leading-relaxed"
          >
            {tagline}
          </motion.p>
        </motion.div>
      </div>

      {heroMediaSrc && (
        <motion.div
          className="relative w-full max-w-[1390px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16"
          variants={mediaMotion}
          initial="hidden"
          animate="visible"
        >
          <div className="relative w-full aspect-[2.2/1] rounded-3xl overflow-hidden bg-black border border-white/10 shadow-xl">
            <Image
              src={heroMediaSrc}
              alt=""
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 1390px"
            />
          </div>
        </motion.div>
      )}
    </section>
  )
}
