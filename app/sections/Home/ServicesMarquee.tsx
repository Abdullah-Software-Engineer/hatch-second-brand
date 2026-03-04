'use client'

import Container from '../../components/ui/Container'

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

const DEFAULT_TAGS = [
  { label: 'Web development' },
  { label: 'Mobile apps' },
  { label: 'AI integration' },
  { label: 'UI/UX design' },
  { label: 'Marketing' },
  { label: 'Content & creatives' },
  { label: 'Lead generation' },
]

export interface ServicesMarqueeProps {
  /** Items for the purple (primary) scrolling band */
  purpleItems?: string[]
  /** Items for the black scrolling band */
  blackItems?: string[]
  /** 'full' = marquee + script/description/tags (home). 'marquee-only' = just the bands (e.g. service detail) */
  variant?: 'full' | 'marquee-only'
  /** Script/cursive headline (only when variant="full") */
  scriptText?: string
  /** Main description paragraph (only when variant="full") */
  description?: React.ReactNode
  /** Tag pills (only when variant="full") */
  tags?: { label: string }[]
}

export default function ServicesMarquee({
  purpleItems = DEFAULT_PURPLE_ITEMS,
  blackItems = DEFAULT_BLACK_ITEMS,
  variant = 'full',
  scriptText = 'hello',
  description,
  tags = DEFAULT_TAGS,
}: ServicesMarqueeProps) {
  const purple = purpleItems.length > 0 ? purpleItems : DEFAULT_PURPLE_ITEMS
  const black = blackItems.length > 0 ? blackItems : DEFAULT_BLACK_ITEMS
  const isMarqueeOnly = variant === 'marquee-only'

  return (
    <section
      className={`relative w-full bg-[#F3F4F6] overflow-hidden ${isMarqueeOnly ? 'min-h-[320px] md:min-h-[360px] pt-32 pb-16 md:pt-40 md:pb-20' : 'pt-48 pb-24 md:pt-60 md:pb-32'}`}
    >
      {/* Tilted Marquees Container */}
      <div className={`absolute top-0 left-0 w-full overflow-visible z-0 pointer-events-none ${isMarqueeOnly ? 'h-[280px] md:h-[320px]' : 'h-[400px]'}`}>
        {/* Purple Marquee - Tilted and moving right */}
        <div
          className="absolute z-10"
          style={{
            width: '140%',
            left: '-20%',
            top: isMarqueeOnly ? '45%' : '38%',
            transformOrigin: 'center center',
            transform: 'rotate(-7deg)',
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
            top: isMarqueeOnly ? '45%' : '38%',
            transformOrigin: 'center center',
            transform: 'rotate(7deg)',
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

      {/* Main Content (only when variant="full") */}
      {!isMarqueeOnly && (
        <div className="relative z-30 mt-32 md:mt-40 lg:mt-48">
          <Container>
            <div className="flex flex-col items-center text-center max-w-[900px] mx-auto">
              <h3 className="font-arizona font-normal italic text-[30px] md:text-[38px] lg:text-[42px] text-primary mb-3 relative">
                {scriptText}
              </h3>
              <div className="p-4 md:p-0 mb-4 md:mb-6 bg-transparent relative">
                {description ?? (
                  <p className="text-xl md:text-2xl lg:text-[28px] leading-tight font-medium text-black">
                    We are a service design studio delivering tailored solutions through a team of <span className="text-primary font-bold">90+ skilled experts</span>. We simplify complex challenges and turn ideas into scalable, lasting impact.
                  </p>
                )}
              </div>
              <div className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-[800px]">
                {tags.slice(0, 4).map((tag, index) => (
                  <TagPill key={index} label={tag.label} />
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-3 md:mt-4 max-w-[800px]">
                {tags.slice(4).map((tag, index) => (
                  <TagPill key={index + 4} label={tag.label} />
                ))}
              </div>
            </div>
          </Container>
        </div>
      )}
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
