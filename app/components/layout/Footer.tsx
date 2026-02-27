'use client'

import Link from 'next/link'
import {
  FOOTER_AREAS_SERVED,
  FOOTER_SHORTCUTS,
  FOOTER_LEGAL_LINKS,
  FOOTER_SOCIAL_LINKS,
  FOOTER_COPYRIGHT,
  THEME,
} from '@/lib/constants'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const socialIconMap = {
  facebook: FaFacebookF,
  x: FaXTwitter,
  linkedin: FaLinkedinIn,
}

export default function Footer() {
  return (
    <footer className="bg-black text-white" role="contentinfo">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16" style={{ maxWidth: THEME.container.maxWidth }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div>
            <h3 className="font-semibold text-lg lg:text-xl text-white mb-5">Areas served</h3>
            <ul className="space-y-3">
              {FOOTER_AREAS_SERVED.map((area) => (
                <li key={area}>
                  <Link href={`/areas/${area.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-300 hover:text-primary transition-colors text-sm lg:text-base">
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg lg:text-xl text-white mb-5">Shortcuts</h3>
            <ul className="space-y-3">
              {FOOTER_SHORTCUTS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-primary transition-colors text-sm lg:text-base">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg lg:text-xl text-white mb-5">Locations</h3>
            <div className="rounded-lg overflow-hidden border border-white/10 shadow-lg aspect-4/3 max-h-[200px] bg-white/5">
              <iframe
                title="Office location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190255.339435352!2d-87.904!3d41.878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a94ad948c65c!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[180px]"
              />
            </div>
          </div>
          <div>
            <p className="text-gray-200 text-sm lg:text-base mb-4">Get in touch with us today.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white font-medium px-5 py-3 rounded-full shadow-[0_14px_30px_rgba(0,0,0,0.16)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 hover:scale-[1.02] transition-transform transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black" aria-label="Contact us">
              <span>Contact us</span>
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white text-primary shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </span>
            </Link>
            <p className="text-gray-200 text-sm lg:text-base mt-8 mb-4">Follow us</p>
            <div className="flex items-center gap-5">
              {FOOTER_SOCIAL_LINKS.map((social) => {
                const Icon = socialIconMap[social.icon]
                return (
                  <a key={social.icon} href={social.href} target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary rounded" aria-label={social.label}>
                    <Icon className="w-6 h-6" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8">
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8" aria-label="Legal and site links">
            {FOOTER_LEGAL_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="text-gray-300 hover:text-primary transition-colors text-sm">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="bg-primary py-4">
        <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: THEME.container.maxWidth }}>
          <p className="text-white text-center text-sm">{FOOTER_COPYRIGHT}</p>
        </div>
      </div>
    </footer>
  )
}
