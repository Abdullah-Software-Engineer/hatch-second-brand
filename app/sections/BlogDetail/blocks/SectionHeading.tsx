'use client'

/**
 * Section heading with stable id for TOC and scroll-into-view.
 * Use for each major section in a blog so "In this article" links work.
 */
export interface SectionHeadingProps {
  id: string
  children: React.ReactNode
  className?: string
}

export default function SectionHeading({ id, children, className = '' }: SectionHeadingProps) {
  return (
    <h2
      id={id}
      className={`text-xl md:text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24 first:mt-0 ${className}`.trim()}
    >
      {children}
    </h2>
  )
}
