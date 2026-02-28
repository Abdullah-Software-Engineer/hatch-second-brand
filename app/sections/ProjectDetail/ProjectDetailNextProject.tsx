'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Container from '../../components/ui/Container'
import type { NextProjectPreview } from '@/lib/project-detail-data'

export interface ProjectDetailNextProjectProps {
  project: NextProjectPreview
}

const cardMotion = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' as const },
  },
}

const contentMotion = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, delay: 0.1, ease: 'easeOut' as const },
  },
}

export default function ProjectDetailNextProject({ project }: ProjectDetailNextProjectProps) {
  const href = `/projects/${project.slug}`

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <motion.div
          className="flex flex-col items-center mb-[10px] text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-[10px]">
            Next Project
          </h2>
        </motion.div>
      </Container>

      <div className="w-full px-[10px]">
        <motion.article
          className="w-full rounded-2xl bg-black border border-white/10 shadow-2xl flex flex-col lg:flex-row min-h-[500px] lg:min-h-[600px] relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={cardMotion}
        >
          {/* Left Content - 800px container to match project detail sections */}
          <div className="w-full max-w-[800px] p-12 md:p-16 lg:p-20 flex flex-col justify-center relative z-10">
            <motion.span
              className="text-white/60 text-sm md:text-base font-medium mb-2"
              variants={contentMotion}
            >
              Project Name
            </motion.span>
            <motion.h3
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              variants={contentMotion}
            >
              {project.title}
            </motion.h3>
            <motion.p
              className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-lg"
              variants={contentMotion}
            >
              {project.description}
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-3 mb-10"
              variants={contentMotion}
            >
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-5 py-2 rounded-full border border-white/20 text-white text-sm hover:bg-white/10 transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
            <motion.div variants={contentMotion}>
              <Link
                href={href}
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
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Right Image - positioned on right side with 20px margins */}
          <div className="flex-1 flex items-center justify-center p-5 lg:flex hidden">
            <div className="w-full h-full min-h-[400px] bg-[#D9D9D9] relative m-4 lg:m-12 rounded-[32px] overflow-hidden group">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 0vw, calc((100vw - 800px - 20px) - 40px)"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-black/20">
                  <span className="text-lg font-medium">Project Preview</span>
                </div>
              )}
            </div>
          </div>

          {/* Mobile/Tablet Image */}
          <div className="lg:hidden w-full min-h-[300px] relative bg-gray-300 rounded-b-2xl overflow-hidden mt-8">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm font-medium">
                Project preview
              </div>
            )}
          </div>
        </motion.article>
      </div>
    </section>
  )
}
