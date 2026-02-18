'use client'

import Image from 'next/image'
import Link from 'next/link'
import Container from '../../components/ui/Container'
import MarqueeLogos from './MarqueeLogos'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen overflow-hidden bg-white flex flex-col pt-[80px] lg:pt-[90px]">
      <div className="relative z-10 w-full flex-1 flex items-center">
        <Container>
          <div className="flex flex-col items-center justify-center text-center max-w-[1200px] mx-auto px-4 py-12 md:py-20">
            {/* Main Heading */}
            <h1 className="text-[40px] sm:text-[50px] md:text-[64px] lg:text-[80px] leading-[1.1] font-medium text-black tracking-tight mb-6 md:mb-8">
              <span className="block flex flex-wrap justify-center items-center gap-x-3 gap-y-1">
                <span>We Build</span>
                <span className="text-primary">Digital Solutions</span>
                <div className="relative w-[60px] h-[45px] sm:w-[75px] sm:h-[55px] md:w-[90px] md:h-[65px] lg:w-[110px] lg:h-[80px] rounded-lg overflow-hidden inline-flex items-center justify-center">
                  <Image
                    src="/home/hero/after-solutions.png"
                    alt="Digital Solutions"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </span>
              <span className="block flex flex-wrap justify-center items-center gap-x-3 gap-y-1 mt-1 md:mt-2">
                <span>That Move</span>
                <div className="relative w-[60px] h-[45px] sm:w-[75px] sm:h-[55px] md:w-[90px] md:h-[65px] lg:w-[110px] lg:h-[80px] rounded-lg overflow-hidden inline-flex items-center justify-center">
                  <Image
                    src="/home/hero/after-move.png"
                    alt="Move Brands"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <span>Brands Forward</span>
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-[16px] sm:text-[18px] md:text-[20px] text-gray-600 max-w-[800px] mx-auto mb-10 md:mb-12 leading-relaxed">
              We help businesses evolve with web development, AI integration, and digital marketing built for today&apos;s fast-changing world.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
              <Link 
                href="/projects" 
                className="group flex items-center justify-center gap-2 bg-white border border-gray-100 text-primary rounded-full px-8 py-3.5 text-[16px] sm:text-[18px] font-medium shadow-[0_2px_10px_rgba(0,0,0,0.05)] hover:shadow-[0_5px_20px_rgba(0,0,0,0.1)] transition-all duration-300 min-w-[180px]"
              >
                Our Work
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              
              <Link 
                href="/contact" 
                className="group flex items-center justify-center gap-2 bg-primary text-white rounded-full px-8 py-3.5 text-[16px] sm:text-[18px] font-medium shadow-[0_4px_14px_rgba(151,84,216,0.3)] hover:bg-primary/90 hover:shadow-[0_6px_20px_rgba(151,84,216,0.4)] transition-all duration-300 min-w-[180px]"
              >
                Contact Us
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </Container>
      </div>
      
      <div className="w-full mt-auto">
        <MarqueeLogos />
      </div>
    </section>
  )
}
