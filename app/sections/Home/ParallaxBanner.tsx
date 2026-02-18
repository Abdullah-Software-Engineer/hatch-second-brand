'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

interface ParallaxBannerProps {
  imageSrc: string
  alt?: string
}

export default function ParallaxBanner({ imageSrc, alt = 'Banner' }: ParallaxBannerProps) {
  const [offset, setOffset] = useState(0)
  const bannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (bannerRef.current) {
        const rect = bannerRef.current.getBoundingClientRect()
        const scrolled = window.scrollY
        const rate = scrolled * 0.5
        setOffset(rate)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="w-full my-0 py-0 mb-5">
      <div 
        ref={bannerRef}
        className="mx-[12px] rounded-2xl overflow-hidden h-[600px] relative"
      >
        <div 
          className="absolute inset-0 w-full h-[130%]"
          style={{
            transform: `translateY(${-offset * 0.3}px)`,
            willChange: 'transform'
          }}
        >
          <Image
            src={imageSrc}
            alt={alt}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
