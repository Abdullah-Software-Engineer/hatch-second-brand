'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '../../components/ui/Container'
import { cn } from '@/lib/utils'

const SERVICES = [
  {
    id: 'web-dev',
    label: 'Web Development',
    description: "We build high-performance, scalable websites tailored to your business needs. From simple landing pages to complex web applications, our solutions are designed to drive growth and engagement.",
    images: ["/home/services/web-1.webp", "/home/services/web-2.webp", "/home/services/web-3.webp"]
  },
  {
    id: 'app-dev',
    label: 'App Development',
    description: "We design and develop custom software solutions that perform across every platform. Whether it's cross-platform mobile apps, e-commerce systems, or on-demand solutions, our team builds scalable, secure, and seamless experiences that turn users into loyal customers.",
    images: ["/home/services/app-1.webp", "/home/services/app-2.webp", "/home/services/app-3.webp"]
  },
  {
    id: 'content',
    label: 'Content & Creatives',
    description: "Our creative team crafts compelling content that tells your brand's story. From copywriting to visual assets, we ensure your message resonates with your audience and strengthens your brand identity.",
    images: ["/home/services/content-1.webp", "/home/services/content-2.webp", "/home/services/content-3.webp"]
  },
  {
    id: 'ui-ux',
    label: 'UI/UX Design',
    description: "User-centric design is at the heart of everything we do. We create intuitive, aesthetically pleasing interfaces that enhance user satisfaction and ensure a seamless interaction with your digital products.",
    images: ["/home/services/ui-1.webp", "/home/services/ui-2.webp", "/home/services/ui-3.webp"]
  },
  {
    id: 'marketing',
    label: 'Marketing',
    description: "Data-driven marketing strategies to boost your online presence. We specialize in SEO, social media marketing, and paid advertising to help you reach your target audience and achieve your business goals.",
    images: ["/home/services/marketing-1.webp", "/home/services/marketing-2.webp", "/home/services/marketing-3.webp"]
  },
  {
    id: 'ai',
    label: 'AI Integration',
    description: "Leverage the power of Artificial Intelligence to optimize your operations. We integrate AI solutions that automate processes, provide predictive analytics, and enhance decision-making capabilities.",
    images: ["/home/services/ai-1.webp", "/home/services/ai-2.webp", "/home/services/ai-3.webp"]
  }
]

const MARQUEE_ITEMS = [
  "Web Development",
  "App Development",
  "Content & Creatives",
  "UI/UX Design",
  "Marketing",
  "AI Integration",
  "Lead Generation"
]

export default function Services() {
  const [activeTab, setActiveTab] = useState(SERVICES[1].id) // Default to App Development as in image

  const activeService = SERVICES.find(s => s.id === activeTab) || SERVICES[0]

  return (
    <section className="bg-white pt-20 md:pt-32 pb-0">
      <Container>
        {/* Header */}
        <div className="flex flex-col items-center mb-12 md:mb-16 text-center">
          <span className="text-gray-500 text-sm md:text-base mb-4 tracking-wide">(Services)</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">What We Do</h2>
        </div>

        {/* Tabs Navigation */}
        <div className="flex justify-center mb-16 md:mb-24 w-full">
          <div className="flex flex-wrap justify-center gap-2 p-2 rounded-full border border-gray-200 bg-white shadow-sm overflow-x-auto w-full">
            {SERVICES.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={cn(
                  "px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap shadow-[0_10px_24px_rgba(0,0,0,0.08)]",
                  activeTab === service.id
                    ? "bg-[#9754D8] text-white shadow-[0_14px_30px_rgba(0,0,0,0.16)]"
                    : "bg-transparent text-gray-600 hover:bg-gray-50"
                )}
              >
                {activeTab === service.id && (
                  <span className="w-2 h-2 rounded-full bg-white block" />
                )}
                {service.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              {/* Images Layout */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12 mb-12 md:mb-16 h-[400px] md:h-[500px]">
                {/* Left Image */}
                <div className="w-full md:w-1/4 h-[200px] md:h-[300px] bg-[#D9D9D9] rounded-[24px] relative overflow-hidden order-2 md:order-1">
                  {/* Placeholder */}
                </div>

                {/* Center Image (Main) */}
                <div className="w-full md:w-2/4 h-[300px] md:h-[450px] bg-[#D9D9D9] rounded-[32px] relative overflow-hidden shadow-lg order-1 md:order-2 z-10">
                  {/* Placeholder */}
                </div>

                {/* Right Image */}
                <div className="w-full md:w-1/4 h-[200px] md:h-[300px] bg-[#D9D9D9] rounded-[24px] relative overflow-hidden order-3">
                  {/* Placeholder */}
                </div>
              </div>

              {/* Description */}
              <div className="max-w-3xl mx-auto text-center px-4">
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                  {activeService.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>

      {/* Bottom Marquee */}
      <div className="w-full overflow-hidden bg-white mt-20 md:mt-32 border-t border-gray-100 py-6 md:py-8">
        <div className="flex w-max animate-marquee-scroll">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, index) => (
            <div key={index} className="flex items-center mx-4">
              <span className="text-[#9754D8] text-2xl md:text-3xl font-bold whitespace-nowrap">{item}</span>
              <span className="text-[#9754D8] text-xl md:text-2xl mx-6 md:mx-8">❋</span> 
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
