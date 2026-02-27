'use client'

const PURPLE_MARQUEE_ITEMS = [
  'Global Reach',
  '1100+ Projects',
  'Think Digital',
  'User Centric',
  'Data Driven',
  'Trusted by',
]

const BLACK_MARQUEE_ITEMS = [
  'Digital First',
  'Scalable Systems',
  'Built to Scale',
  'Think Digital',
  'User Centric',
]

export default function ScrollingTaglineBands() {
  return (
    <section className="relative w-full bg-white overflow-hidden py-0">
      <div className="relative w-full h-[280px] md:h-[320px] overflow-hidden">
        {/* Purple band - tilted, moving right */}
        <div
          className="absolute z-10"
          style={{
            width: '140%',
            left: '-20%',
            top: '35%',
            transformOrigin: 'center center',
            transform: 'rotate(-4deg)',
          }}
        >
          <div className="bg-primary py-3 md:py-5 shadow-xl">
            <div className="flex w-max animate-marquee-scroll-reverse">
              {[...PURPLE_MARQUEE_ITEMS, ...PURPLE_MARQUEE_ITEMS, ...PURPLE_MARQUEE_ITEMS, ...PURPLE_MARQUEE_ITEMS].map((item, index) => (
                <div key={index} className="flex items-center mx-4 md:mx-8">
                  <span className="text-white text-[24px] sm:text-[32px] md:text-[38px] font-medium whitespace-nowrap">{item}</span>
                  <span className="text-white/70 ml-8 md:ml-12 text-sm">✕</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Black band - tilted, moving left */}
        <div
          className="absolute z-20"
          style={{
            width: '140%',
            left: '-20%',
            top: '35%',
            transformOrigin: 'center center',
            transform: 'rotate(4deg)',
          }}
        >
          <div className="bg-black py-3 md:py-5 shadow-xl">
            <div className="flex w-max animate-marquee-scroll">
              {[...BLACK_MARQUEE_ITEMS, ...BLACK_MARQUEE_ITEMS, ...BLACK_MARQUEE_ITEMS, ...BLACK_MARQUEE_ITEMS].map((item, index) => (
                <div key={index} className="flex items-center mx-4 md:mx-8">
                  <span className="text-white text-[24px] sm:text-[32px] md:text-[38px] font-medium whitespace-nowrap">{item}</span>
                  <span className="text-white/70 ml-8 md:ml-12 text-sm">✕</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
