'use client'

import Image from 'next/image'
import Link from 'next/link'
import Container from '../../components/ui/Container'

export default function BlogHero() {
  return (
    <section className="relative h-[500px] sm:h-[550px] md:h-[600px] lg:h-[700px] overflow-hidden bg-white flex flex-col pt-[80px] lg:pt-[90px] rounded-bl-[50px] rounded-br-[50px]">
      <div className="relative z-10 w-full flex-1 flex items-center">
        <Container>
          <div className="flex flex-col items-center justify-center text-center max-w-[1200px] mx-auto px-4 py-6 sm:py-8 md:py-12 lg:py-20">
            {/* Main Heading */}
            <h1 className="text-[40px] sm:text-[50px] md:text-[64px] lg:text-[80px] leading-[1.1] font-medium text-black tracking-tight mb-4 sm:mb-5 md:mb-6 lg:mb-8">
              <span className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1">
                <span>Our Blog</span>
                <div className="relative w-[60px] h-[45px] sm:w-[75px] sm:h-[55px] md:w-[90px] md:h-[65px] lg:w-[110px] lg:h-[80px] rounded-lg overflow-hidden inline-flex items-center justify-center">
                  <Image
                    src="/home/hero/after-solutions.png"
                    alt="Blog"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <span className="text-primary">Insights</span>
              </span>
              <span className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 mt-1 md:mt-2">
                <span className="text-primary">Behind the</span>
                <div className="relative w-[60px] h-[45px] sm:w-[75px] sm:h-[55px] md:w-[90px] md:h-[65px] lg:w-[110px] lg:h-[80px] rounded-lg overflow-hidden inline-flex items-center justify-center">
                  <Image
                    src="/home/hero/after-move.png"
                    alt="Builts"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <span>Builts</span>
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-[16px] sm:text-[18px] md:text-[20px] text-gray-600 max-w-[800px] mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12 leading-relaxed">
              Our blog are curated for tech geeks as well as tech you are researching on
            </p>

            {/* Contact Us Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
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
    </section>
  )
}