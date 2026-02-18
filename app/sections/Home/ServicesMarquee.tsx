'use client'

import Container from '../../components/ui/Container'
import { cn } from '@/lib/utils'

const PURPLE_MARQUEE_ITEMS = [
  'Global Reach',
  '1100+ Projects',
  'Data Driven',
  'Trusted by',
  'Global Reach',
  '1100+ Projects',
  'Data Driven',
  'Trusted by',
]

const BLACK_MARQUEE_ITEMS = [
  'Digital First',
  'Scalable Systems',
  'Built to Scale',
  'Think Digital',
  'User Centric',
  'Digital First',
  'Scalable Systems',
  'Built to Scale',
  'Think Digital',
  'User Centric',
]

const TAGS = [
  { label: 'Web development', icon: 'globe' },
  { label: 'Mobile apps', icon: 'mobile' },
  { label: 'AI integration', icon: 'ai' },
  { label: 'UI/UX design', icon: 'design' },
  { label: 'Marketing', icon: 'chart' },
  { label: 'Content & creatives', icon: 'content' },
  { label: 'Lead generation', icon: 'users' },
]

export default function ServicesMarquee() {
  return (
    <section className="relative w-full bg-[#F3F4F6] overflow-hidden pt-48 pb-24 md:pt-60 md:pb-32">
      {/* Tilted Marquees Container */}
      <div className="absolute top-0 left-0 w-full h-[400px] overflow-hidden z-0 pointer-events-none">
        
        {/* Purple Marquee - Tilted and moving right */}
        <div className="absolute top-[60px] sm:top-[80px] md:top-[100px] left-[-10%] w-[120%] -rotate-3 sm:-rotate-6 z-10 origin-center">
          <div className="bg-primary py-3 md:py-5 shadow-xl">
            <div className="flex w-max animate-marquee-scroll-reverse">
              {[...PURPLE_MARQUEE_ITEMS, ...PURPLE_MARQUEE_ITEMS].map((item, index) => (
                <div key={index} className="flex items-center mx-4 md:mx-8">
                  <span className="text-white text-[24px] sm:text-[32px] md:text-[38px] font-medium whitespace-nowrap">{item}</span>
                  <span className="text-white/70 ml-8 md:ml-12 text-sm">✕</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Black Marquee - Tilted and moving left */}
        <div className="absolute top-[100px] sm:top-[140px] md:top-[180px] left-[-10%] w-[120%] rotate-3 sm:rotate-6 z-20 origin-center">
          <div className="bg-black py-3 md:py-5 shadow-xl">
            <div className="flex w-max animate-marquee-scroll">
              {[...BLACK_MARQUEE_ITEMS, ...BLACK_MARQUEE_ITEMS].map((item, index) => (
                <div key={index} className="flex items-center mx-4 md:mx-8">
                  <span className="text-white text-[24px] sm:text-[32px] md:text-[38px] font-medium whitespace-nowrap">{item}</span>
                  <span className="text-white/70 ml-8 md:ml-12 text-sm">✕</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-30 mt-20">
        <Container>
          <div className="flex flex-col items-center text-center max-w-[900px] mx-auto">
            
            {/* Script Text */}
            <h3 className="font-arizona italic text-4xl md:text-5xl text-primary mb-6 relative transform -rotate-6">
              hello
            </h3>

            {/* Main Description */}
            <div className="p-4 md:p-0 mb-12 bg-transparent relative">
              <p className="text-2xl md:text-3xl lg:text-4xl leading-tight font-medium text-black">
                We are a service design studio delivering tailored solutions through a team of <span className="text-primary font-bold">90+ skilled experts</span>. We simplify complex challenges and turn ideas into scalable, lasting impact.
              </p>
            </div>

            {/* Tags Grid */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-[800px]">
              {TAGS.slice(0, 4).map((tag, index) => (
                <TagPill key={index} label={tag.label} />
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-3 md:mt-4 max-w-[800px]">
              {TAGS.slice(4).map((tag, index) => (
                <TagPill key={index + 4} label={tag.label} />
              ))}
            </div>

          </div>
        </Container>
      </div>
    </section>
  )
}

function TagPill({ label }: { label: string }) {
  return (
    <div className="bg-[#2A2A2A] text-white px-5 py-2.5 rounded-full flex items-center gap-2 text-sm md:text-base font-medium hover:bg-black transition-colors cursor-default">
      {/* Generic icon placeholder - can replace with specific icons if needed */}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
      {label}
    </div>
  )
}
