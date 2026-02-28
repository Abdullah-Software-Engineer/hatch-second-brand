'use client'

export interface ServiceDetailMarqueeProps {
  /** Items for the purple (primary) scrolling band */
  purpleItems?: string[]
  /** Items for the black scrolling band */
  blackItems?: string[]
}

const DEFAULT_PURPLE_ITEMS = [
  'Global Reach',
  '1100+ Projects',
  'Data Driven',
  'Trusted by',
]

const DEFAULT_BLACK_ITEMS = [
  'Digital First',
  'Scalable Systems',
  'Built to Scale',
  'Think Digital',
  'User Centric',
]

export default function ServiceDetailMarquee({
  purpleItems = DEFAULT_PURPLE_ITEMS,
  blackItems = DEFAULT_BLACK_ITEMS,
}: ServiceDetailMarqueeProps) {
  const purple = purpleItems.length > 0 ? purpleItems : DEFAULT_PURPLE_ITEMS
  const black = blackItems.length > 0 ? blackItems : DEFAULT_BLACK_ITEMS

  return (
    <section className="relative w-full bg-white overflow-hidden pt-16 pb-12 sm:pt-24 sm:pb-16 md:pt-32 md:pb-20 lg:pt-[250px] lg:pb-[90px] min-h-[200px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[600px]">
      {/* Tilted Marquees Container */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        {/* Purple Marquee - Tilted and moving right */}
        <div
          className="absolute z-10"
          style={{
            width: '140%',
            left: '-20%',
            top: '50%',
            transformOrigin: 'center center',
            transform: 'translateY(-50%) rotate(-7deg)',
          }}
        >
          <div className="bg-primary py-3 md:py-5 shadow-xl">
            <div className="flex w-max animate-marquee-scroll-reverse">
              {[...purple, ...purple, ...purple, ...purple].map((item, index) => (
                <div key={index} className="flex items-center mx-4 md:mx-8">
                  <span className="text-white text-[24px] sm:text-[32px] md:text-[38px] font-medium whitespace-nowrap">{item}</span>
                  <span className="text-white/70 ml-8 md:ml-12 text-sm">✕</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Black Marquee - Tilted and moving left */}
        <div
          className="absolute z-20"
          style={{
            width: '140%',
            left: '-20%',
            top: '50%',
            transformOrigin: 'center center',
            transform: 'translateY(-50%) rotate(7deg)',
          }}
        >
          <div className="bg-black py-3 md:py-5 shadow-xl">
            <div className="flex w-max animate-marquee-scroll">
              {[...black, ...black, ...black, ...black].map((item, index) => (
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
