'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { NAVIGATION_LINKS, RESOURCES_DROPDOWN_LINKS, PRACTICE_AREAS_FULL, SITE_CONFIG, THEME } from '@/lib/constants'
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
          'fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-300 bg-white/90 backdrop-blur-sm border-b border-transparent',
          isScrolled && 'bg-white/95 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border-b border-gray-200'
        )}
        role="banner"
      >
        <div className="w-full">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 relative" style={{ maxWidth: THEME.container.maxWidth }}>
            <div
              className={cn(
                'flex items-center justify-between transition-all duration-300',
                isScrolled ? 'h-[68px] lg:h-[78px]' : 'h-[80px] lg:h-[90px]'
              )}
            >
              <div className="flex-shrink-0">
                <Link href="/" aria-label={`${SITE_CONFIG.name} Home`} onClick={() => setIsMenuOpen(false)}>
                  <Image
                    src="/header/logo-dark.webp"
                    alt={SITE_CONFIG.name}
                    width={180}
                    height={48}
                    className="h-8 sm:h-10 w-auto"
                    priority
                  />
                </Link>
              </div>

              <nav className="hidden lg:flex items-center justify-center gap-7 xl:gap-10 absolute left-1/2 -translate-x-1/2" aria-label="Main navigation">
                {NAVIGATION_LINKS.map((link) => {
                  const isActive = link.href === '/' ? pathname === '/' : pathname === link.href || pathname.startsWith(link.href + '/')
                  
                  return (
                    <Link 
                      key={link.href} 
                      href={link.href} 
                      className={cn(
                        'text-[18px] font-normal transition-colors relative py-1',
                        isActive ? 'text-primary border-b-2 border-primary' : 'text-[#444444] hover:text-primary'
                      )}
                    >
                      {link.label}
                    </Link>
                  )
                })}
              </nav>

              <div className="flex items-center gap-4">
                <div className="hidden lg:block">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-2 bg-primary text-white rounded-full px-6 py-2.5 text-[16px] font-medium shadow-[0_14px_30px_rgba(0,0,0,0.16)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 hover:scale-[1.02] transition-transform transition-shadow"
                  >
                    Contact
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
                <button type="button" onClick={() => setIsMenuOpen((o) => !o)} className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full text-[#444444] hover:bg-gray-100 focus:outline-none transition-colors" aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} aria-controls="mobile-nav" aria-expanded={isMenuOpen}>
                  {isMenuOpen ? <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg> : <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div id="mobile-nav" role="dialog" aria-modal="true" aria-label="Mobile navigation" className={cn('lg:hidden fixed top-[68px] sm:top-[76px] left-0 right-0 bottom-0 z-[99] bg-black/50 backdrop-blur-2xl transition-opacity duration-300', isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none')} onClick={() => setIsMenuOpen(false)} />

      <div className={cn('lg:hidden fixed z-[101] bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ease-out left-0 right-0', isMenuOpen ? 'top-[80px] opacity-100 visible translate-y-0 bottom-0' : 'top-[80px] opacity-0 invisible -translate-y-4 h-0')}>
        <nav className="flex flex-col py-4 px-4 h-full overflow-y-auto" aria-label="Mobile navigation">
          {NAVIGATION_LINKS.map((link) => {
            const isActive = link.href === '/' ? pathname === '/' : pathname === link.href || pathname.startsWith(link.href + '/')
            
            return (
              <Link 
                key={link.href} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)} 
                className={cn(
                  'text-[18px] font-normal py-4 border-b border-gray-100',
                  isActive ? 'text-primary' : 'text-[#444444]'
                )}
              >
                {link.label}
              </Link>
            )
          })}
          <div className="mt-8">
            <Link 
              href="/contact" 
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-primary text-white rounded-full w-full py-3 text-[18px] font-medium"
            >
              Contact
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}
