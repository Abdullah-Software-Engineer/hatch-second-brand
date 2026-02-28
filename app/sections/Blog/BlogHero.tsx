'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Container from '../../components/ui/Container'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

export default function BlogHero() {
  return (
    <section className="relative h-[500px] sm:h-[550px] md:h-[600px] lg:h-[700px] overflow-hidden bg-gradient-to-b from-white via-[#FAFAFA] to-white flex flex-col pt-[80px] lg:pt-[90px] rounded-bl-[50px] rounded-br-[50px]">
      {/* Background Creative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 w-full flex-1 flex items-center">
        <Container>
          <motion.div
            className="flex flex-col items-center justify-center text-center max-w-[1200px] mx-auto px-4 py-6 sm:py-8 md:py-12 lg:py-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main Heading */}
            <motion.h1
              className="text-[40px] sm:text-[50px] md:text-[64px] lg:text-[80px] leading-[1.1] font-medium text-black tracking-tight mb-4 sm:mb-5 md:mb-6 lg:mb-8"
              variants={itemVariants}
            >
              <span className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1">
                <span>Our Blog</span>
                <motion.div
                  className="relative w-[60px] h-[45px] sm:w-[75px] sm:h-[55px] md:w-[90px] md:h-[65px] lg:w-[110px] lg:h-[80px] rounded-[18px] sm:rounded-[20px] md:rounded-[22px] lg:rounded-[24px] overflow-hidden inline-flex items-center justify-center "
                  variants={imageVariants}
                >
                  <Image
                    src="/home/hero/after-solutions.webp"
                    alt="Blog"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
                <span className="text-primary">Insights</span>
              </span>
              <span className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 mt-1 md:mt-2">
                <span className="text-primary">Behind the</span>
                <motion.div
                  className="relative w-[60px] h-[45px] sm:w-[75px] sm:h-[55px] md:w-[90px] md:h-[65px] lg:w-[110px] lg:h-[80px] rounded-[18px] sm:rounded-[20px] md:rounded-[22px] lg:rounded-[24px] overflow-hidden inline-flex items-center justify-center "
                  variants={imageVariants}
                >
                  <Image
                    src="/home/hero/after-move.webp"
                    alt="Builts"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
                <span>Builts</span>
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="text-[16px] sm:text-[18px] md:text-[20px] text-gray-600 max-w-[800px] mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12 leading-relaxed"
              variants={itemVariants}
            >
              Our blog are curated for tech geeks as well as tech you are researching on
            </motion.p>

            {/* Contact Us Button */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto"
              variants={itemVariants}
            >
              <Link
                href="/contact"
                className="group flex items-center justify-center gap-2 bg-primary text-white rounded-full px-8 py-3.5 text-[16px] sm:text-[18px] font-medium shadow-[0_14px_30px_rgba(0,0,0,0.16)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 hover:scale-[1.02] transition-transform transition-shadow duration-300 min-w-[180px]"
              >
                Contact Us
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </div>
    </section>
  )
}