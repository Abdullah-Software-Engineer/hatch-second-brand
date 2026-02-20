'use client'

import { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import Container from '../../components/ui/Container'
import { useRef } from 'react'

export interface ProcessStep {
  title: string
  description: string
}

export interface ServiceProcessProps {
  steps: ProcessStep[]
  sectionLabel?: string
}

export default function ServiceProcess({
  steps,
  sectionLabel = 'Process',
}: ServiceProcessProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  const sectionInView = useInView(sectionRef, { amount: 0.2, once: false })

  useEffect(() => {
    if (!sectionInView || steps.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const index = stepRefs.current.findIndex((el) => el === entry.target)
          if (index >= 0) setActiveIndex(index)
        })
      },
      { rootMargin: '-20% 0px -40% 0px', threshold: 0 }
    )

    stepRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [sectionInView, steps.length])

  return (
    <section ref={sectionRef} className="bg-white py-16 md:py-24">
      <Container>
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-gray-500 text-sm md:text-base mb-2 block tracking-wide">
            ({sectionLabel})
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            Our Process
          </h2>
        </motion.div>

        <div className="max-w-3xl">
          {steps.map((step, index) => {
            const isActive = activeIndex === index
            return (
              <motion.div
                key={index}
                ref={(el) => {
                  stepRefs.current[index] = el
                }}
                className="flex gap-6 md:gap-8 pb-10 md:pb-12 last:pb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                {/* Left: number circle + dotted line */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <motion.div
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-sm md:text-base font-bold transition-colors duration-300 ${
                      isActive ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500 border-2 border-gray-200'
                    }`}
                    animate={{ scale: isActive ? 1.05 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {index + 1}
                  </motion.div>
                  {index < steps.length - 1 && (
                    <div
                      className="w-0.5 flex-1 min-h-[40px] mt-2 border-l-2 border-dashed border-gray-200"
                      aria-hidden
                    />
                  )}
                </div>

                {/* Right: content */}
                <div className="flex-1 min-w-0 pt-0.5">
                  <div className="flex items-center gap-2 mb-2">
                    {isActive && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-6 h-6 rounded bg-primary flex items-center justify-center flex-shrink-0"
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-white">
                          <path d="M2 6l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </motion.span>
                    )}
                    <h3
                      className={`text-xl md:text-2xl font-bold transition-all duration-300 ${
                        isActive ? 'text-black' : 'text-gray-400'
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <motion.p
                    className={`text-base md:text-lg leading-relaxed transition-all duration-300 ${
                      isActive ? 'text-gray-700' : 'text-gray-400 blur-[2px] select-none'
                    }`}
                    animate={{ filter: isActive ? 'blur(0px)' : 'blur(2px)' }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.description}
                  </motion.p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
