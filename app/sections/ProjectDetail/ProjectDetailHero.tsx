'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export interface ProjectDetailHeroProps {
  titleAccent: string
  titleRest: string
  tagline: string
  iconSrc?: string
  iconSrc2?: string
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

function InlineIcon({ src }: { src: string }) {
  return (
    <motion.span
      variants={iconMotion}
      className="relative w-[36px] h-[36px] sm:w-[44px] sm:h-[44px] md:w-[52px] md:h-[52px] lg:w-[60px] lg:h-[60px] rounded-full overflow-hidden inline-flex items-center justify-center shrink-0 border-2 border-black/10"
    >
      <Image
        src={src}
        alt=""
        fill
        className="object-cover"
        priority
        sizes="(max-width: 768px) 44px, 60px"
      />
    </motion.span>
  )
}

export default function ProjectDetailHero({
  titleAccent,
  titleRest,
  tagline,
  iconSrc,
  iconSrc2,
  categories,
}: ProjectDetailHeroProps) {
  return (
    <section className="relative min-h-[380px] sm:min-h-[440px] overflow-hidden bg-white flex flex-col pt-[80px] lg:pt-[90px]">
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
              {iconSrc && <InlineIcon src={iconSrc} />}
              <motion.span variants={item} className="font-bold text-black">
                {titleRest}
              </motion.span>
              {iconSrc2 && <InlineIcon src={iconSrc2} />}
            </span>
          </h1>
          <motion.p
            variants={item}
            className="text-[15px] sm:text-[17px] md:text-[18px] text-gray-600 max-w-[640px] leading-relaxed"
          >
            {tagline}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
