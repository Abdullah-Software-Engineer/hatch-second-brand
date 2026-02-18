'use client'

import { useState } from 'react'
import Image from 'next/image'
import Container from '../../components/ui/Container'
import { cn } from '@/lib/utils'

const TESTIMONIALS = [
  {
    quote: "Hatch delivered a smooth, professional experience with clear communication and excellent results. Highly recommended.",
    author: "Gasior Law Office, LLC",
    location: "Illinois, United States",
  },
  {
    quote: "Working with Hatch was a game-changer for our business. Their strategic approach and technical expertise helped us scale faster than we imagined.",
    author: "TechFlow Solutions",
    location: "California, United States",
  },
  {
    quote: "The team at Hatch is simply outstanding. They understood our vision perfectly and executed it with precision and creativity.",
    author: "Creative Minds Agency",
    location: "London, United Kingdom",
  },
]

const STATS = [
  { label: 'Members', value: '90+' },
  { label: 'Years of collective experience', value: '30+' },
  { label: 'Projects', value: '1100+' },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  return (
    <section className="bg-white py-20 md:py-32 overflow-hidden">
      <Container>
        <div className="flex flex-col items-center mb-0 relative z-0">
          <span className="text-gray-500 text-sm md:text-base mb-4 tracking-wide">(Why clients love Hatch)</span>
          <div className="relative w-[280px] h-[60px] md:w-[400px] md:h-[90px] mb-8">
            <Image
              src="/home/testimonials/testimonials-word.png"
              alt="Testimonials"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch relative z-10 -mt-10 md:-mt-12">
          {/* Left Stats Box */}
          <div className="lg:col-span-5 relative h-full min-h-[400px]">
            <div 
              className="w-full h-full rounded-[32px] p-8 md:p-12 flex flex-col justify-center gap-12 text-white shadow-2xl relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #060B11 0%, #9754D8 100%)'
              }}
            >
              {STATS.map((stat, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <span className="text-5xl md:text-6xl font-bold tracking-tight">{stat.value}</span>
                  <span className="text-white/80 text-lg md:text-xl font-light">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Carousel */}
          <div className="lg:col-span-7 relative flex items-center min-h-[450px] md:min-h-[550px] pt-12 md:pt-16">
            <div className="relative w-full h-[400px] md:h-[450px]">
              {TESTIMONIALS.map((testimonial, index) => {
                // Calculate position relative to current index
                const offset = (index - currentIndex + TESTIMONIALS.length) % TESTIMONIALS.length;
                
                // We want: 0 = front, 1 = behind 1, 2 = behind 2
                // If we have 3 items:
                // index=0 (current): offset=0 -> Front
                // index=1: offset=1 -> Behind 1
                // index=2: offset=2 -> Behind 2 (or hidden/transitioning)

                let zIndex = 0;
                let scale = 1;
                let translateY = 0;
                let opacity = 1;
                
                if (offset === 0) {
                  zIndex = 30;
                  scale = 1;
                  translateY = 0;
                  opacity = 1;
                } else if (offset === 1) {
                  zIndex = 20;
                  scale = 0.95; // Less scaling
                  translateY = -35; // More visible peek
                  opacity = 1; // Full opacity
                } else if (offset === 2) {
                  zIndex = 10;
                  scale = 0.9;
                  translateY = -70; // Even more visible peek
                  opacity = 1;
                } else {
                    // Hide others
                    zIndex = 0;
                    opacity = 0;
                }

                return (
                  <div
                    key={index}
                    className="absolute top-0 left-0 w-full h-full bg-black rounded-[24px] p-8 md:p-12 flex flex-col justify-between text-white transition-all duration-500 ease-in-out origin-bottom shadow-2xl border border-white/5"
                    style={{
                      zIndex,
                      transform: `translateY(${translateY}px) scale(${scale})`,
                      opacity,
                      filter: offset === 0 ? 'none' : 'brightness(0.4)', // Darker background cards
                    }}
                  >
                    {/* Header: Counter & Pagination Dots (optional) */}
                    <div className="flex justify-between items-start border-b border-white/10 pb-6 mb-auto w-full">
                      <span className="text-white/60 font-mono text-sm md:text-base">
                        {String(index + 1).padStart(2, '0')}/{String(TESTIMONIALS.length).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Content: Quote */}
                    <div className="mb-12 mt-8">
                      <p className="text-xl md:text-3xl leading-relaxed font-light">
                        &quot;{testimonial.quote}&quot;
                      </p>
                    </div>

                    {/* Footer: Author & Nav */}
                    <div className="flex items-end justify-between mt-auto w-full">
                      <div>
                        <h4 className="text-lg md:text-xl font-bold mb-1 text-white">{testimonial.author}</h4>
                        <p className="text-white/50 text-sm md:text-base">{testimonial.location}</p>
                      </div>

                      {/* Navigation Buttons - Only show on active card */}
                        <div className={`flex gap-3 transition-opacity duration-300 ${offset === 0 ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                          <button 
                            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#2A2A2A] flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                            aria-label="Previous testimonial"
                          >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M15 18l-6-6 6-6"/>
                            </svg>
                          </button>
                          <button 
                            onClick={(e) => { e.stopPropagation(); handleNext(); }}
                            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#2A2A2A] flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                            aria-label="Next testimonial"
                          >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M9 18l6-6-6-6"/>
                            </svg>
                          </button>
                        </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
