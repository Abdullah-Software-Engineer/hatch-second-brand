'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import Container from '../../components/ui/Container'
import { cn } from '@/lib/utils'

const PROJECTS = [
  {
    slug: "green",
    title: "Green",
    category: "Web Design",
    description: "We help startups launch, grow, and scale through clean, conversion-focused design.",
    tags: ["Web design", "UI/UX design", "Web development"],
    image: "/home/projects/project-1.webp",
    color: "#000000"
  },
  {
    slug: "bookworm",
    title: "Bookworm",
    category: "App Design",
    description: "Bookworm is a dynamic platform designed for book enthusiasts, offering the ability to borrow, rent, or buy books. It is a generative AI-based book recommendation system offering personalized book suggestions, ensuring users find the most relevant titles.",
    tags: ["App design", "UI/UX design", "App development"],
    image: "/home/projects/project-1.webp",
    color: "#000000"
  },
  {
    slug: "aintanet",
    title: "Aintanet",
    category: "Pitch Deck & Development",
    description: "Aintanet is a next-generation blockchain protocol built to power the digital economy through privacy-complete architecture and dense-load scalability.",
    tags: ["Pitch Deck", "Development"],
    image: "/home/projects/project-2.webp",
    color: "#000000"
  }
]

export default function RecentProjects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  return (
    <section ref={containerRef} className="bg-primary py-20 md:py-32 relative">
      <Container>
        <div className="flex flex-col items-center mb-16 md:mb-24 text-white text-center sticky top-20 z-0">
          <span className="text-sm md:text-base mb-4 tracking-wide opacity-90">(Our Recent Work)</span>
          <h2 className="text-[28px] md:text-[34px] lg:text-[38px] xl:text-[42px] font-bold">Recent Projects</h2>
        </div>
      </Container>

      <div className="w-full px-[15px] flex flex-col gap-8 md:gap-12 pb-20 relative z-10">
        {PROJECTS.map((project, index) => {
          // Calculate a scale based on scroll position for a nice effect
          // We need to pass the index and total to calculate the target scale
          const targetScale = 1 - (PROJECTS.length - index) * 0.05
          return (
            <Card 
              key={index} 
              project={project} 
              index={index} 
              total={PROJECTS.length}
              progress={scrollYProgress}
              range={[index * 0.25, 1]}
              targetScale={targetScale}
            />
          )
        })}
      </div>
    </section>
  )
}

function Card({ 
  project, 
  index, 
  total,
  progress,
  range,
  targetScale
}: { 
  project: typeof PROJECTS[0], 
  index: number, 
  total: number,
  progress: MotionValue<number>,
  range: [number, number],
  targetScale: number
}) {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  // Scale effect: as the card reaches the top, it scales down slightly if it's not the last one
  // But for a simple sticky stack, we might just want them to stick.
  // The user asked for "stacking above", which implies the new one covers the old one.
  // Sticky positioning does this naturally.
  // We can add a subtle scale to the *previous* cards as they go up, but that requires more complex logic.
  // Let's stick to a clean sticky implementation with a slight top offset for each card so they stack visibly.
  
  const topOffset = 120 + index * 20 // Base offset + increment

  return (
    <div 
      ref={container}
      className="sticky w-full"
      style={{ top: `${topOffset}px` }}
    >
      <motion.div 
        className="bg-black rounded-[32px] overflow-hidden border border-white/10 shadow-2xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true, margin: "-10%" }}
      >
        <div className="flex flex-col lg:flex-row min-h-[500px] lg:h-[600px] items-center">
          {/* Content Side */}
          <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <span className="text-white/60 text-sm md:text-base font-medium mb-2">{project.category}</span>
            <h3 className="text-[28px] md:text-[34px] lg:text-[38px] xl:text-[42px] font-bold text-white mb-6">{project.title}</h3>
            
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {project.tags.map((tag, i) => (
                <span 
                  key={i} 
                  className="px-5 py-2 rounded-full border border-white/20 text-white text-sm hover:bg-white/10 transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div>
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium shadow-[0_14px_30px_rgba(0,0,0,0.16)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 hover:scale-[1.02] transition-transform transition-shadow duration-300 group text-sm md:text-base"
              >
                View Full Case Study
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </Link>
            </div>
          </div>

          {/* Image Side */}
          <div className="flex-1 w-full h-[300px] lg:h-[500px] bg-[#D9D9D9] relative m-4 lg:m-12 rounded-[32px] overflow-hidden group">
             {/* Placeholder for project image */}
             <div className="absolute inset-0 flex items-center justify-center text-black/20">
                <span className="text-lg font-medium">Project Preview</span>
             </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
