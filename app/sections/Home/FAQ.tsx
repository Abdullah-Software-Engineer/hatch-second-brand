'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '../../components/ui/Container'
import { cn } from '@/lib/utils'

const FAQS = [
  {
    question: "How does the project process work?",
    answer: "Our process begins with a discovery phase to understand your goals. We then move to planning, design, development, and finally deployment. Throughout each stage, we maintain open communication to ensure the final product aligns with your vision."
  },
  {
    question: "What is your typical timeline for a project?",
    answer: "Timelines vary depending on the project's complexity and scope. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. We provide a detailed timeline during the initial consultation."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes, we offer various maintenance and support packages to ensure your digital product remains secure, up-to-date, and performs optimally after launch."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in modern web technologies including React, Next.js, Node.js, and TypeScript. for mobile apps, we use React Native. We also have expertise in AI integration and cloud solutions."
  },
  {
    question: "Can you help with rebranding?",
    answer: "Absolutely. Our design team specializes in creating cohesive brand identities, including logo design, typography, color palettes, and brand guidelines that resonate with your target audience."
  },
  {
    question: "How do you handle project pricing?",
    answer: "We offer both fixed-price and time-and-materials engagement models. After assessing your requirements, we provide a transparent proposal outlining the costs and deliverables."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-white py-20 md:py-32">
      <Container>
        {/* Header */}
        <div className="flex flex-col items-center mb-16 md:mb-20 text-center">
          <span className="text-gray-500 text-sm md:text-base mb-4 tracking-wide">(FAQs)</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">Your Questions, Answered</h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl">
            Helping you understand our process and offerings at Hatch.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full items-start">
          {FAQS.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

function FAQItem({ question, answer, isOpen, onToggle }: { question: string, answer: string, isOpen: boolean, onToggle: () => void }) {
  return (
    <div className="bg-[#F3F4F6] rounded-2xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between text-left transition-colors hover:bg-gray-200/50"
      >
        <span className="text-lg md:text-xl font-medium text-black pr-4">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 text-black"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 md:px-8 md:pb-8 text-gray-600 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
