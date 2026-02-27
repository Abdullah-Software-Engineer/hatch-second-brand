'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Container from '../../components/ui/Container'

const EMAILS = [
  "sales@digitallyhatch.com",
  "sales@digitallyhatch.com",
  "sales@digitallyhatch.com",
  "sales@digitallyhatch.com",
  "sales@digitallyhatch.com",
  "sales@digitallyhatch.com",
  "sales@digitallyhatch.com",
  "sales@digitallyhatch.com",
]

const FOOTER_LINKS = {
  navigation: [
    { label: 'About', href: '/about' },
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
    { label: 'Blog', href: '/blog' },
  ],
  projects: [
    { label: 'Project 1', href: '/project-1' },
    { label: 'Project 1', href: '/project-1' },
    { label: 'Project 1 Project 1', href: '/project-1' },
    { label: 'Project 1 Project 1', href: '/project-1' },
  ],
  social: [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'Facebook', href: 'https://facebook.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
  ]
}

export default function FooterContact() {
  const pathname = usePathname()
  const isContactPage = pathname === '/contact'

  return (
    <section className={`bg-white pb-4 ${isContactPage ? 'pt-12' : 'pt-20'} relative`}>
        {!isContactPage && (
          <>
            {/* Top Image - Centered and overlapping */}
            <div className="absolute -top-10 md:-top-16 left-1/2 -translate-x-1/2 w-[400px] md:w-[700px] h-[100px] md:h-[160px] z-0 pointer-events-none">
                 <Image
                    src="/home/connect/Lets-Connect.webp"
                    alt="Let's Connect"
                    fill
                    className="object-contain"
                 />
            </div>

            {/* Contact Form Container */}
            <div className="mx-[15px] bg-black rounded-[40px] relative pt-24 md:pt-32 pb-0 overflow-hidden mb-[15px]">
            <Container className="w-full">
                <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20 mb-20 md:mb-32 w-full">
                    {/* Left Content */}
                    <div className="flex-1 max-w-2xl">
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-8">
                            Let's bring<br />
                            your idea to<br />
                            life.
                        </h2>
                        <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed">
                            Let's talk strategy, innovation, and impact to make your next move your best one.
                        </p>
                    </div>

                    {/* Right Form */}
                    <div className="flex-1 max-w-xl w-full pt-4 lg:pt-8">
                        <form className="space-y-8">
                            <div className="space-y-2">
                                <input 
                                    type="text" 
                                    placeholder="Enter your name"
                                    className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-white transition-colors text-lg"
                                />
                            </div>
                            <div className="space-y-2">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email"
                                    className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-white transition-colors text-lg"
                                />
                            </div>
                            <div className="space-y-2">
                                <input 
                                    type="text" 
                                    placeholder="Project description"
                                    className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-white transition-colors text-lg"
                                />
                            </div>
                            <div className="pt-8">
                                <button type="submit" className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors w-full sm:w-auto">
                                    Send now!
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>

             {/* Bottom Marquee */}
             <div className="relative w-full overflow-hidden py-5 border-t border-white/10 bg-black">
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
                <div className="flex w-max animate-marquee-scroll whitespace-nowrap">
                  {[...Array(2)].map((_, setIndex) => (
                    <div key={setIndex} className="flex items-center">
                      {EMAILS.map((email, index) => (
                        <div key={`${setIndex}-${index}`} className="flex items-center">
                          <span className="text-gray-500 text-sm md:text-base tracking-wide">{email}</span>
                          <span className="text-primary text-lg mx-6">•</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
             </div>
            </div>
          </>
        )}

        {/* Footer Links Container */}
        <div className={`mx-[15px] rounded-[40px] relative overflow-hidden min-h-[600px] ${isContactPage ? 'mt-0' : ''}`}>
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/home/connect/Rectangle.webp"
                    alt="Footer Background"
                    fill
                    className="object-cover"
                />
                {/* Gradient Overlay to ensure text readability if needed */}
                <div className="absolute inset-0 bg-black/20" />
            </div>

            <div className="relative z-10 pt-20 pb-12 h-full flex flex-col justify-between">
                <Container className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 w-full">
                        {/* Navigation Column */}
                        <div>
                            <h3 className="text-gray-400 text-lg mb-8 font-medium">Navigation</h3>
                            <ul className="space-y-4">
                                {FOOTER_LINKS.navigation.map((link, index) => (
                                    <li key={index}>
                                        <Link href={link.href} className="text-white text-2xl md:text-3xl font-medium hover:text-white/80 transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Projects Column */}
                        <div>
                            <h3 className="text-gray-400 text-lg mb-8 font-medium">Projects</h3>
                            <ul className="space-y-4">
                                {FOOTER_LINKS.projects.map((link, index) => (
                                    <li key={index}>
                                        <Link href={link.href} className="text-white text-2xl md:text-3xl font-medium hover:text-white/80 transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Social Links Column */}
                        <div>
                            <h3 className="text-gray-400 text-lg mb-8 font-medium">Social Links</h3>
                            <ul className="space-y-4">
                                {FOOTER_LINKS.social.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-white text-2xl md:text-3xl font-medium hover:text-white/80 transition-colors">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Location Column */}
                        <div>
                            <h3 className="text-gray-400 text-lg mb-8 font-medium">Location</h3>
                            <p className="text-white text-2xl md:text-3xl font-medium">
                                Headquater
                            </p>
                        </div>
                    </div>
                </Container>

                <div className="mt-32">
                    <Container className="w-full">
                        <p className="text-gray-400 text-sm">
                            © 2025 Digitally Hatch. All rights reserved.
                        </p>
                    </Container>
                </div>
            </div>
        </div>
    </section>
  )
}
