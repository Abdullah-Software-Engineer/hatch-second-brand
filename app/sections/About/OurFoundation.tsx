'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Container from '../../components/ui/Container'

const CARDS = [
  {
    title: 'Our Mission',
    description:
      'To help brands and businesses grow by creating thoughtful, scalable digital solutions that are rooted in strategy, clarity, and real-world impact.',
  },
  {
    title: 'Our Vision',
    description:
      'To be a trusted digital partner for teams worldwide, shaping meaningful products, brands, and experiences through design, technology, and collaboration.',
  },
]

export default function OurFoundation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="bg-[#f5f5f5] py-20 md:py-28">
      <Container>
        <div className="text-center mb-14 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4"
          >
            Our Foundation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Speed, Clarity, and Purpose guided by what we believe and why we exist.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {CARDS.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-sm text-left"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                {card.title}
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
