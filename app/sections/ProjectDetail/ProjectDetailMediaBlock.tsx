'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface ProjectDetailMediaBlockProps {
  /** Single full-width block, or two side-by-side */
  variant: 'single' | 'dual'
  src?: string
  srcs?: [string?, string?]
  className?: string
}

const blockMotion = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

function MediaPlaceholder({ src, className }: { src?: string; className?: string }) {
  return (
    <div
      className={cn(
        'relative w-full aspect-[2.2/1] rounded-2xl overflow-hidden bg-black border border-white/10',
        className
      )}
    >
      {src ? (
        <Image src={src} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-white/20 text-sm font-medium">
          Media
        </div>
      )}
    </div>
  )
}

export default function ProjectDetailMediaBlock({
  variant,
  src,
  srcs,
  className,
}: ProjectDetailMediaBlockProps) {
  if (variant === 'single') {
    return (
      <motion.div
        className={cn('w-full max-w-[1390px] mx-auto', className)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={blockMotion}
      >
        <MediaPlaceholder src={src} />
      </motion.div>
    )
  }

  return (
    <motion.div
      className={cn('w-full max-w-[1390px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6', className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={blockMotion}
    >
      <MediaPlaceholder src={srcs?.[0]} />
      <MediaPlaceholder src={srcs?.[1]} />
    </motion.div>
  )
}
