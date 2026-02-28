'use client'

import Image from 'next/image'

interface ProjectFeaturedImageProps {
  imageSrc: string
  alt: string
}

export default function ProjectFeaturedImage({ imageSrc, alt }: ProjectFeaturedImageProps) {
  return (
    <section className="w-full px-[10px] py-8 md:py-12">
      <div className="relative w-full h-[800px] rounded-2xl overflow-hidden">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  )
}
