'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Container from '../../components/ui/Container'
import {
  HiGlobeAlt,
  HiDevicePhoneMobile,
  HiCpuChip,
  HiPencilSquare,
  HiChartBar,
  HiDocumentText,
  HiUserPlus,
} from 'react-icons/hi2'

// Row 1: 4 tags | Row 2: 3 tags (slightly indented in image)
const SERVICE_TAGS_ROW1 = [
  { label: 'Web development', icon: HiGlobeAlt },
  { label: 'Mobile apps', icon: HiDevicePhoneMobile },
  { label: 'AI integration', icon: HiCpuChip },
  { label: 'UI/UX design', icon: HiPencilSquare },
]
const SERVICE_TAGS_ROW2 = [
  { label: 'Marketing', icon: HiChartBar },
  { label: 'Content & creatives', icon: HiDocumentText },
  { label: 'Lead generation', icon: HiUserPlus },
]

const STATS = [
  {
    value: 90,
    suffix: '+',
    label: 'Members',
    description: 'Top-tier full-stack, mobile, AI, UI/UX specialists.',
  },
  {
    value: 30,
    suffix: '+',
    label: 'Years of collective experience',
    description: 'Building scalable products, digital platforms, and brand-led experiences.',
  },
  {
    value: 1100,
    suffix: '+',
    label: 'Projects',
    description: 'SaaS platforms, marketplaces, mobile apps, AI-driven tools & more.',
  },
]

function useCountUp(end: number, duration: number, isInView: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!isInView) return
    let startTime: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [end, duration, isInView])
  return count
}

function StatCard({
  stat,
  index,
  isInView,
}: {
  stat: (typeof STATS)[0]
  index: number
  isInView: boolean
}) {
  const count = useCountUp(stat.value, 1600, isInView)
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-3">
        {count}
        {stat.suffix}
      </div>
      <div className="text-gray-800 font-medium text-xl mb-2">{stat.label}</div>
      <p className="text-gray-600 text-base md:text-lg max-w-xs mx-auto leading-relaxed">
        {stat.description}
      </p>
    </motion.div>
  )
}

export default function AboutIntro() {
  const ref = useRef(null)
  const statsRef = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 })

  return (
    <section ref={ref}>
      {/* Top: light grey — text + tags only */}
      <div className="w-full bg-[#EDEDED] py-12 md:py-16 lg:py-20 rounded-tl-[60px] rounded-tr-[60px]">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-black text-xl md:text-2xl lg:text-3xl leading-snug tracking-tight font-medium"
            >
              We are a service-first digital studio delivering tailored solutions through a team of{' '}
              <span className="text-primary font-semibold">90+ skilled experts.</span> We simplify
              complex challenges and turn ideas into scalable, lasting impact.
            </motion.p>
          </div>

          {/* Service tags — two rows, second row slightly indented */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="flex flex-wrap justify-center gap-3">
              {SERVICE_TAGS_ROW1.map((tag, i) => (
                <motion.div
                  key={tag.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.05 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="inline-flex items-center gap-2 bg-[#363636] text-white rounded-full px-5 py-3 text-base font-medium"
                >
                  <tag.icon className="w-5 h-5 text-white shrink-0" />
                  <span>{tag.label}</span>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-3 md:pl-12">
              {SERVICE_TAGS_ROW2.map((tag, i) => (
                <motion.div
                  key={tag.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.05 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="inline-flex items-center gap-2 bg-[#363636] text-white rounded-full px-5 py-3 text-base font-medium"
                >
                  <tag.icon className="w-5 h-5 text-white shrink-0" />
                  <span>{tag.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </div>

      {/* Divider line where grey meets white */}
      <div className="bg-white border-t border-gray-200" />

      {/* Bottom: white — three stats columns */}
      <div ref={statsRef} className="bg-white py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12">
            {STATS.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} isInView={isStatsInView} />
            ))}
          </div>
        </Container>
      </div>
    </section>
  )
}
