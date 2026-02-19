'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

const LOGOS = [
  '/home/hero/marquee-logos/2.png',
  '/home/hero/marquee-logos/3.png',
  '/home/hero/marquee-logos/4.png',
  '/home/hero/marquee-logos/5.png',
  '/home/hero/marquee-logos/6.png',
  '/home/hero/marquee-logos/challenge.png',
  '/home/hero/marquee-logos/gasior laww 1.png',
  '/home/hero/marquee-logos/grep.png',
  '/home/hero/marquee-logos/sexner logo 1.png',
  '/home/hero/marquee-logos/zoundz.png',
]

export default function MarqueeLogos() {
  return (
    <div className="w-full overflow-hidden bg-white py-8 border-t border-gray-100">
      <div className="flex w-max animate-marquee-scroll hover:[animation-play-state:paused]">
        {[...LOGOS, ...LOGOS].map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center mx-6 sm:mx-8 lg:mx-10 min-w-[140px] sm:min-w-[180px] lg:min-w-[200px]"
          >
            <div className="relative w-full h-[50px] sm:h-[60px] lg:h-[70px] transition-all duration-300">
              <Image
                src={logo}
                alt="Partner logo"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
