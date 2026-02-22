'use client'

import { motion } from 'framer-motion'
import Container from '../../components/ui/Container'
import ProjectDetailMediaBlock from './ProjectDetailMediaBlock'
import type {
  ProjectDetailSection as SectionType,
  OverviewSection,
  ListSection,
  ParagraphSection,
  SolutionSection,
} from '@/lib/project-detail-data'
import { cn } from '@/lib/utils'

const sectionMotion = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
}

const itemMotion = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
}

function SectionHeading({ title }: { title: string }) {
  return (
    <motion.h2
      className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6 md:mb-8"
      variants={sectionMotion}
    >
      {title}
    </motion.h2>
  )
}

function OverviewContent({ section }: { section: OverviewSection }) {
  return (
    <>
      <motion.p
        className="text-gray-600 text-base md:text-lg leading-relaxed mb-6"
        variants={itemMotion}
      >
        {section.intro}
      </motion.p>
      <motion.div className="flex flex-wrap gap-2 sm:gap-3" variants={stagger}>
        {section.tags.map((tag, i) => (
          <motion.span
            key={i}
            variants={itemMotion}
            className="inline-block px-4 py-2 rounded-lg bg-black text-white text-sm font-medium hover:bg-black/90 transition-colors"
          >
            {tag}
          </motion.span>
        ))}
      </motion.div>
    </>
  )
}

function ListContent({ section }: { section: ListSection }) {
  const hasMedia = section.type === 'solution' && (section as SolutionSection).mediaSrcs
  const mediaSrcs = hasMedia ? (section as SolutionSection).mediaSrcs : undefined

  return (
    <>
      {section.intro && (
        <motion.p className="text-gray-600 text-base md:text-lg mb-4" variants={itemMotion}>
          {section.intro}
        </motion.p>
      )}
      <motion.ul className="space-y-2 mb-6" variants={stagger}>
        {section.items.map((bullet, i) => (
          <motion.li
            key={i}
            className="flex gap-3 text-gray-700 text-base md:text-lg"
            variants={itemMotion}
          >
            <span className="text-primary mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary" />
            <span>{bullet}</span>
          </motion.li>
        ))}
      </motion.ul>
      {section.closing && (
        <motion.p className="text-gray-600 text-base md:text-lg" variants={itemMotion}>
          {section.closing}
        </motion.p>
      )}
      {mediaSrcs && (mediaSrcs[0] || mediaSrcs[1]) && (
        <div className="mt-8 md:mt-10">
          <ProjectDetailMediaBlock variant="dual" srcs={mediaSrcs} />
        </div>
      )}
    </>
  )
}

function ParagraphContent({ section }: { section: ParagraphSection }) {
  return (
    <>
      <div className="space-y-4 mb-8">
        {section.paragraphs.map((p, i) => (
          <motion.p
            key={i}
            className="text-gray-600 text-base md:text-lg leading-relaxed"
            variants={itemMotion}
          >
            {p}
          </motion.p>
        ))}
      </div>
      {section.mediaSrc && (
        <ProjectDetailMediaBlock variant="single" src={section.mediaSrc} />
      )}
    </>
  )
}

export default function ProjectDetailSection({ section }: { section: SectionType }) {
  return (
    <section
      className={cn(
        'py-12 md:py-16 bg-white'
      )}
    >
      <Container className="max-w-[800px]">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <SectionHeading title={section.title} />
          {section.type === 'overview' && <OverviewContent section={section} />}
          {(section.type === 'challenges' || section.type === 'objectives' || section.type === 'solution' || section.type === 'deliverables') && (
            <ListContent section={section as ListSection} />
          )}
          {(section.type === 'strategy' || section.type === 'results') && (
            <ParagraphContent section={section as ParagraphSection} />
          )}
        </motion.div>
      </Container>
    </section>
  )
}
