'use client'

import Image from 'next/image'
import Link from 'next/link'
import Container from '../../components/ui/Container'

const SERVICE_SLUGS = [
  'web-development',
  'app-software-development',
  'branding-positioning',
  'ai-integration',
  'marketing',
  'content-creatives',
  'lead-generation',
] as const

const SERVICES = [
  {
    title: 'Web Development',
    description: 'Your website should work as hard as you do. We design conversion-focused websites and online platforms that grow with your business, including e-commerce, frontend, and PHP development.',
    tags: ['Frontend', 'Backend', 'SaaS Platforms'],
    slug: SERVICE_SLUGS[0],
  },
  {
    title: 'App & Software Development',
    description: 'We build custom applications and software tailored to your business needs, from cross-platform apps to e-commerce and on-demand solutions, helping you reach more customers efficiently.',
    tags: ['Mobile Apps', 'Web Apps', 'React', 'Flutter'],
    slug: SERVICE_SLUGS[1],
  },
  {
    title: 'Branding & Positioning',
    description: 'We create professional, cohesive visual identities that make your business stand out, build trust and leave a lasting impression through brand strategy, graphic design and UI/UX solutions.',
    tags: ['Brand Strategy', 'Visual Identity'],
    slug: SERVICE_SLUGS[2],
  },
  {
    title: 'AI Integration',
    description: 'Our AI solutions enhance performance, automate workflows, and provide predictive analytics, powering smarter growth for your business.',
    tags: ['Chatbots', 'Automation', 'RAG Systems'],
    slug: SERVICE_SLUGS[3],
  },
  {
    title: 'Marketing',
    description: 'We connect you with customers where they spend their time, running strategic campaigns that boost engagement, build communities, and drive qualified leads through social media, SEO, PPC, and email marketing.',
    tags: ['Social Media', 'Paid Ads', 'SEO'],
    slug: SERVICE_SLUGS[4],
  },
  {
    title: 'Content & Creatives',
    description: 'We create valuable, relevant content that attracts customers, showcases your expertise, and helps potential clients find your business online through content marketing and video production.',
    tags: ['Content Strategy', 'Motion & Animation', 'Photo & Video'],
    slug: SERVICE_SLUGS[5],
  },
  {
    title: 'Lead Generation',
    description: 'We deliver professional lead generation services that connect you with qualified prospects ready to engage with your business.',
    tags: ['CRM Setup', 'Conversion Optimization', 'Funnel Strategy'],
    slug: SERVICE_SLUGS[6],
  },
]

export default function WhatWeDo() {
  return (
    <section className="w-full bg-[#EDEDED] py-12 md:py-16 lg:py-20 rounded-tl-[60px] rounded-tr-[60px]">
      <Container>
        <div className="w-full">
          <div className="mb-8 md:mb-12">
            <p className="text-sm md:text-base text-gray-400 mb-2 text-center">(Services)</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#444444] text-center mb-6 pb-5">
              What We Do
            </h2>
            <div className="w-full h-px bg-gray-300"></div>
          </div>

          <div className="flex flex-col gap-6">
            {SERVICES.map((service, index) => (
              <div
                key={service.slug}
                className="bg-white rounded-[28px] md:rounded-[36px] overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 p-5 md:p-8 items-center">
                  <div className="w-full lg:w-[320px] flex-shrink-0">
                    <div className="relative w-full aspect-[4/3] bg-gray-200 rounded-[20px] md:rounded-[24px] overflow-hidden border-2 border-primary/20">
                      <div className="w-full h-full bg-gray-200"></div>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col">
                    <h3 className="text-2xl md:text-3xl font-medium text-[#444444] mb-3">
                      {service.title}
                    </h3>

                    <p className="text-sm md:text-base text-[#444444] leading-normal mb-5">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-[#F0F0F0] text-[#444444] px-4 py-1.5 rounded-full text-xs md:text-sm font-medium border border-gray-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/services/${service.slug}`}
                      className="group inline-flex items-center justify-center gap-2 bg-primary text-white rounded-full px-6 py-2.5 text-sm md:text-base font-medium shadow-[0_14px_30px_rgba(0,0,0,0.16)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 hover:scale-[1.02] transition-transform transition-shadow duration-300 w-auto self-start"
                    >
                      Learn More
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
