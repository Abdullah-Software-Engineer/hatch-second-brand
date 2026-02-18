'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { NAVIGATION_LINKS, RESOURCES_DROPDOWN_LINKS, PRACTICE_AREAS_FULL, SITE_CONFIG } from '@/lib/constants'
import { cn, throttle } from '@/lib/utils'
import PhoneButton from '../ui/PhoneButton'

export default function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const [isResourcesMobileOpen, setIsResourcesMobileOpen] = useState(false)
  const [isPracticeAreasOpen, setIsPracticeAreasOpen] = useState(false)
  const [isPracticeAreasMobileOpen, setIsPracticeAreasMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = throttle(() => setIsScrolled(window.scrollY > 50), 100)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
      const handleEscape = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsMenuOpen(false) }
      window.addEventListener('keydown', handleEscape)
      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', handleEscape)
      }
    }
  }, [isMenuOpen])

  return (
    <>
      <header
        className={cn(
          'fixed left-1/2 -translate-x-1/2 z-[100] bg-primary transition-all duration-300',
          'w-[calc(100%-16px)] sm:w-[calc(100%-32px)] md:w-[calc(100%-48px)] lg:w-[calc(100%-48px)] lg:max-w-[1200px] xl:w-[1470px] xl:max-w-[calc(100%-140px)]',
          'rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-[60px] overflow-visible',
          isScrolled ? 'top-2 sm:top-[10px] lg:top-[10px]' : 'top-2 sm:top-4 md:top-5 lg:top-[30px]'
        )}
        role="banner"
      >
        <div className="w-full overflow-visible relative">
          <div className="max-w-[1390px] mx-auto px-3 sm:px-4 md:px-6 lg:px-6 xl:px-8 relative overflow-visible">
            <div className="flex items-center justify-between gap-2 sm:gap-3 md:gap-3 lg:gap-4 xl:gap-10 py-2 sm:py-2.5 lg:py-3 xl:py-3 min-h-[52px] sm:min-h-[60px]">
              <Link href="/" className="flex-shrink-0 min-w-0" aria-label={`${SITE_CONFIG.name} Home`} onClick={() => setIsMenuOpen(false)}>
                <span className="text-white font-playfair font-semibold text-lg sm:text-xl lg:text-2xl">{SITE_CONFIG.name}</span>
              </Link>

              <nav className="hidden lg:flex items-center flex-1 justify-center min-w-0" aria-label="Main navigation">
                {NAVIGATION_LINKS.map((link) => {
                  let isActive = link.href === '/' ? pathname === '/' : pathname === link.href || pathname.startsWith(link.href + '/')
                  if (link.label === 'Resources') {
                    isActive = isActive || RESOURCES_DROPDOWN_LINKS.some(s => pathname === s.href || pathname.startsWith(s.href + '/'))
                  }
                  if (link.label === 'Practice Areas') isActive = pathname === '/practice-areas' || pathname.startsWith('/practice-areas/')

                  return link.label === 'Practice Areas' ? (
                    <div key={link.href} className="relative" onMouseEnter={() => setIsPracticeAreasOpen(true)} onMouseLeave={() => setIsPracticeAreasOpen(false)}>
                      <Link href={link.href} className={cn('text-sm lg:text-[14px] xl:text-base font-poppins font-medium tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary rounded-lg px-2 lg:px-2.5 xl:px-3 py-2 whitespace-nowrap flex items-center gap-1 relative', isPracticeAreasOpen ? 'text-secondary' : 'text-white hover:text-secondary', isActive && 'border-b-2 border-secondary pb-1')}>
                        Practice Areas
                        <svg className={cn('w-4 h-4 transition-transform duration-200', isPracticeAreasOpen && 'rotate-180')} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                      </Link>
                      <div className={cn('absolute top-full pt-4 z-[110] transition-all duration-300 ease-out lg:left-3/4 -translate-x-1/2 w-[calc(100vw-32px)] md:w-[calc(100vw-64px)] lg:w-[320px] xl:w-[380px] max-w-[calc(100vw-32px)] pointer-events-auto', isPracticeAreasOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible pointer-events-none -translate-y-2')} onMouseEnter={() => setIsPracticeAreasOpen(true)} onMouseLeave={() => setIsPracticeAreasOpen(false)}>
                        <div className="bg-primary text-white rounded-xl shadow-2xl border border-white/10 overflow-hidden w-full">
                          <div className="flex flex-col">
                            {PRACTICE_AREAS_FULL.map((area) => (
                              <Link key={area.slug} href={`/practice-areas/${area.slug}`} className="block px-4 py-2 text-white/95 hover:bg-white/10 hover:text-secondary transition-all duration-200 font-poppins text-xs lg:text-[13px] font-medium uppercase tracking-wide border-b border-white/5 last:border-0">
                                {area.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : link.label === 'Resources' ? (
                    <div key={link.href} className="relative" onMouseEnter={() => setIsResourcesOpen(true)} onMouseLeave={() => setIsResourcesOpen(false)}>
                      <button type="button" className={cn('text-sm lg:text-[14px] xl:text-base font-poppins font-medium tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary rounded-lg px-2 lg:px-2.5 xl:px-3 py-2 whitespace-nowrap flex items-center gap-1 relative', isResourcesOpen ? 'text-secondary' : 'text-white hover:text-secondary', isActive && 'border-b-2 border-secondary pb-1')} aria-expanded={isResourcesOpen} aria-haspopup="true" onClick={() => setIsResourcesOpen((o) => !o)}>
                        Resources
                        <svg className={cn('w-4 h-4 transition-transform duration-300', isResourcesOpen && 'rotate-180')} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                      </button>
                      <div className={cn('absolute left-1/2 -translate-x-1/2 top-full pt-3 z-[110] transition-all duration-300 ease-out w-[calc(100vw-32px)] md:w-auto max-w-[calc(100vw-32px)] md:max-w-none pointer-events-auto', isResourcesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible pointer-events-none -translate-y-2')} onMouseEnter={() => setIsResourcesOpen(true)} onMouseLeave={() => setIsResourcesOpen(false)}>
                        <ul className="bg-primary text-white rounded-xl shadow-2xl border border-white/10 overflow-hidden backdrop-blur-sm py-2 min-w-[200px] md:min-w-[220px]">
                          {RESOURCES_DROPDOWN_LINKS.map((item) => (
                            <li key={`${item.href}-${item.label}`} className="border-b border-white/10 last:border-0">
                              <Link href={item.href} className="group flex items-center font-poppins text-sm md:text-[13px] text-white/95 hover:text-secondary hover:bg-white/10 px-4 md:px-3 py-3 md:py-2 transition-all duration-200">
                                {item.label}
                                <svg className="ml-auto w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <Link key={link.href} href={link.href} className={cn('text-white text-sm lg:text-[14px] xl:text-base font-poppins hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary rounded px-1.5 lg:px-2 xl:px-2 py-1 whitespace-nowrap relative', isActive && 'border-b-2 border-secondary pb-1')}>
                      {link.label}
                    </Link>
                  )
                })}
              </nav>

              <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 min-w-0">
                <div className="hidden lg:block flex-shrink-0">
                  <PhoneButton size="md" />
                </div>
                <button type="button" onClick={() => setIsMenuOpen((o) => !o)} className="lg:hidden flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full text-white hover:bg-white/10 active:bg-white/20 focus:outline-none focus:ring-2 focus:ring-secondary transition-colors flex-shrink-0" aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} aria-controls="mobile-nav" aria-expanded={isMenuOpen}>
                  {isMenuOpen ? <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg> : <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div id="mobile-nav" role="dialog" aria-modal="true" aria-label="Mobile navigation" className={cn('lg:hidden fixed top-[68px] sm:top-[76px] left-0 right-0 bottom-0 z-[99] bg-black/50 backdrop-blur-2xl transition-opacity duration-300', isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none')} onClick={() => setIsMenuOpen(false)} />

      <div className={cn('lg:hidden fixed z-[101] bg-primary rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ease-out left-2 right-2 sm:left-4 sm:right-4', isMenuOpen ? 'top-[68px] sm:top-[76px] opacity-100 visible translate-y-0' : 'top-[60px] opacity-0 invisible -translate-y-4')}>
        <nav className="flex flex-col py-2 sm:py-4" aria-label="Mobile navigation">
          {NAVIGATION_LINKS.map((link) => {
            let isActive = link.href === '/' ? pathname === '/' : pathname === link.href || pathname.startsWith(link.href + '/')
            if (link.label === 'Resources') isActive = isActive || RESOURCES_DROPDOWN_LINKS.some(s => pathname === s.href || pathname.startsWith(s.href + '/'))
            if (link.label === 'Practice Areas') isActive = pathname === '/practice-areas' || pathname.startsWith('/practice-areas/')

            return link.label === 'Practice Areas' ? (
              <div key={link.href} className="border-b border-white/10">
                <button type="button" onClick={() => setIsPracticeAreasMobileOpen((o) => !o)} className={cn('w-full text-left font-poppins font-medium text-sm sm:text-base py-3 sm:py-3.5 px-4 sm:px-6 transition-colors flex items-center justify-between rounded-lg mx-2 relative', isPracticeAreasMobileOpen ? 'text-secondary bg-white/10' : 'text-white hover:bg-white/10 hover:text-secondary active:bg-white/15', isActive && 'border-b-2 border-secondary')} aria-expanded={isPracticeAreasMobileOpen}>
                  Practice Areas
                  <svg className={cn('w-5 h-5 transition-transform duration-200', isPracticeAreasMobileOpen && 'rotate-180')} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
                {isPracticeAreasMobileOpen && (
                  <ul className="py-2 pb-3 max-h-[60vh] overflow-y-auto">
                    <li><Link href="/practice-areas" onClick={() => { setIsMenuOpen(false); setIsPracticeAreasMobileOpen(false); }} className="block font-poppins text-[15px] text-white/90 hover:text-secondary py-2.5 pl-8 pr-4 border-l-2 border-transparent hover:border-secondary hover:bg-white/5 ml-2 mr-2 rounded-r transition-colors duration-150">All Practice Areas</Link></li>
                    {PRACTICE_AREAS_FULL.map((area) => (
                      <li key={area.slug}><Link href={`/practice-areas/${area.slug}`} onClick={() => { setIsMenuOpen(false); setIsPracticeAreasMobileOpen(false); }} className="block font-poppins text-[15px] text-white/90 hover:text-secondary py-2.5 pl-8 pr-4 border-l-2 border-transparent hover:border-secondary hover:bg-white/5 ml-2 mr-2 rounded-r transition-colors duration-150">{area.title}</Link></li>
                    ))}
                  </ul>
                )}
              </div>
            ) : link.label === 'Resources' ? (
              <div key={link.href} className="border-b border-white/10">
                <button type="button" onClick={() => setIsResourcesMobileOpen((o) => !o)} className={cn('w-full text-left font-poppins font-medium text-sm sm:text-base py-3 sm:py-3.5 px-4 sm:px-6 transition-colors flex items-center justify-between rounded-lg mx-2 relative', isResourcesMobileOpen ? 'text-secondary bg-white/10' : 'text-white hover:bg-white/10 hover:text-secondary active:bg-white/15', isActive && 'border-b-2 border-secondary')} aria-expanded={isResourcesMobileOpen}>
                  Resources
                  <svg className={cn('w-5 h-5 transition-transform duration-200', isResourcesMobileOpen && 'rotate-180')} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
                {isResourcesMobileOpen && (
                  <ul className="py-2 pb-3">
                    {RESOURCES_DROPDOWN_LINKS.map((item) => (
                      <li key={`${item.href}-${item.label}`}><Link href={item.href} onClick={() => { setIsMenuOpen(false); setIsResourcesMobileOpen(false); }} className="block font-poppins text-[15px] text-white/90 hover:text-secondary py-2.5 pl-8 pr-4 border-l-2 border-transparent hover:border-secondary hover:bg-white/5 ml-2 mr-2 rounded-r transition-colors duration-150">{item.label}</Link></li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className={cn('text-white font-poppins text-sm sm:text-base md:text-lg py-2.5 sm:py-3.5 px-4 sm:px-6 hover:bg-white/10 hover:text-secondary active:bg-white/15 transition-colors border-b border-white/10 relative', isActive && 'border-b-2 border-secondary')}>
                {link.label}
              </Link>
            )
          })}
          <div className="p-3 sm:p-4 pt-2 sm:pt-3 lg:hidden">
            <PhoneButton size="md" className="w-full justify-center" />
          </div>
        </nav>
      </div>
    </>
  )
}
