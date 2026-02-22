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
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          Next Project
        </motion.h2>

        <motion.article
          className="rounded-3xl overflow-hidden bg-black border border-white/10 shadow-2xl flex flex-col lg:flex-row min-h-[420px] lg:min-h-[480px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={cardMotion}
        >
          <div className="flex-1 p-8 md:p-10 lg:p-14 flex flex-col justify-center">
            <motion.span
              className="text-white/60 text-sm font-medium mb-2 block"
              variants={contentMotion}
            >
              Project Name
            </motion.span>
            <motion.h3
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
              variants={contentMotion}
            >
              {project.title}
            </motion.h3>
            <motion.p
              className="text-white/70 text-base md:text-lg leading-relaxed mb-6 max-w-lg"
              variants={contentMotion}
            >
              {project.description}
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-2 mb-8"
              variants={contentMotion}
            >
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full border border-white/25 text-white text-sm hover:bg-white/10 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
            <motion.div variants={contentMotion}>
              <Link
                href={href}
                className="inline-flex items-center gap-2 bg-primary text-white rounded-full px-6 py-3.5 font-medium text-sm md:text-base hover:bg-primary/90 transition-all duration-300 group"
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
                  className="group-hover:translate-x-0.5 transition-transform"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </Link>
            </motion.div>
          </div>

          <div className="flex-1 min-h-[280px] lg:min-h-full relative bg-[#1a1a1a]">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-white/20 text-sm font-medium">
                Project preview
              </div>
            )}
          </div>
        </motion.article>
      </Container>
    </section>
  )
}
