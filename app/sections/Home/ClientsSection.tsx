'use client'

import Image from 'next/image'
import Container from '../../components/ui/Container'

const LOGOS = [
  '/home/hero/marquee-logos/challenge.png',
  '/home/hero/marquee-logos/3.png',
  '/home/hero/marquee-logos/4.png',
  '/home/hero/marquee-logos/5.png',
  '/home/hero/marquee-logos/6.png',
  '/home/hero/marquee-logos/gasior laww 1.png',
  '/home/hero/marquee-logos/zoundz.png',
  '/home/hero/marquee-logos/grep.png',
  '/home/hero/marquee-logos/sexner logo 1.png',
]

export default function ClientsSection() {
  return (
    <section className="bg-white py-16 md:py-24">
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
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {LOGOS.map((src, index) => (
            <div
              key={index}
              className="relative h-10 md:h-12 w-[120px] md:w-[140px] grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={src}
                alt="Client logo"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
