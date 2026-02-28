'use client'

import Image from 'next/image'
import Container from '../../components/ui/Container'

const LOGOS = [
  '/home/hero/marquee-logos/challenge.webp',
  '/home/hero/marquee-logos/3.webp',
  '/home/hero/marquee-logos/4.webp',
  '/home/hero/marquee-logos/5.webp',
  '/home/hero/marquee-logos/6.webp',
  '/home/hero/marquee-logos/gasior laww 1.webp',
  '/home/hero/marquee-logos/zoundz.webp',
  '/home/hero/marquee-logos/grep.webp',
  '/home/hero/marquee-logos/sexner logo 1.webp',
]

export default function ClientsSection() {
  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gray-500 text-sm md:text-base mb-3 tracking-wide">(Clients)</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
            Brands we&apos;ve helped grow
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Driving measurable impact through creative digital solutions.
          </p>
        </div>
      </Container>
      {/* Running logo marquee - duplicate logos for seamless loop */}
      <div className="w-full overflow-hidden">
        <div className="flex w-max animate-marquee-scroll hover:[animation-play-state:paused]">
          {[...LOGOS, ...LOGOS].map((src, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-6 sm:mx-8 lg:mx-10 min-w-[120px] sm:min-w-[140px] md:min-w-[160px]  opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <div className="relative h-10 md:h-12 w-[120px] md:w-[140px]">
                <Image
                  src={src}
                  alt="Client logo"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
