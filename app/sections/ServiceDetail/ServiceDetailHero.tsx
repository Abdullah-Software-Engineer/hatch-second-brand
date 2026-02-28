'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export interface ServiceDetailHeroProps {
  titlePart1: string
  titlePart2: string
  tagline: string
  iconSrc?: string
  /** Path to creative image shown below the heading (e.g. /services/1.webp) */
  heroImage?: string
}

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.04 },
  }),
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

const iconMotion = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

export default function ServiceDetailHero({
  titlePart1,
  titlePart2,
  tagline,
  iconSrc,
  heroImage,
}: ServiceDetailHeroProps) {
  return (
    <section className="relative overflow-hidden flex flex-col pt-[80px] lg:pt-[90px] bg-gradient-to-b from-white via-[#FAFAFA] to-white rounded-bl-[50px] rounded-br-[50px]">
      <div className="relative z-10 w-full flex flex-col items-center px-4 pt-20 md:pt-28 pb-0">
        <motion.div
          className="flex flex-col items-center text-center max-w-[1000px] mx-auto w-full"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-[36px] sm:text-[48px] md:text-[58px] lg:text-[72px] leading-[1.1] font-medium text-black tracking-tight mb-4 sm:mb-5">
            <span className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2">
              <motion.span variants={item} className="font-bold">
                {titlePart1}
              </motion.span>
              {iconSrc && (
                <motion.span
                  variants={iconMotion}
                  className="relative w-[56px] h-[42px] sm:w-[70px] sm:h-[52px] md:w-[84px] md:h-[62px] lg:w-[100px] lg:h-[74px] rounded-xl overflow-hidden inline-flex items-center justify-center "
                >
                  <Image
                    src={iconSrc}
                    alt=""
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 70px, 100px"
                  />
                </motion.span>
              )}
              {titlePart2 && (
                <motion.span variants={item} className="text-primary font-bold">
                  {titlePart2}
                </motion.span>
              )}
            </span>
          </h1>
          <motion.p
            variants={item}
            className="text-[15px] sm:text-[17px] md:text-[18px] text-gray-600 max-w-[640px] leading-relaxed"
          >
            {tagline}
          </motion.p>
        </motion.div>

        {heroImage && (
          <motion.div
            className="w-full max-w-[1200px] mx-auto "
            variants={item}
            initial="hidden"
            animate="visible"
          >
            <div className="relative w-full aspect-[16/10] sm:aspect-[2/1] rounded-2xl overflow-hidden ">
              <Image
                src={heroImage}
                alt=""
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
