'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
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

export default function WhatWeDo() {
  return (
    <section className="w-full bg-[#EDEDED] py-12 md:py-16 lg:py-20 rounded-tl-[60px] rounded-tr-[60px]">
      <Container>
        <div className="w-full">
          {/* Header Section */}
          <motion.div
            className="mb-8 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm md:text-base text-gray-400 mb-2 text-center">(Services)</p>
            <h2 className="text-[28px] md:text-[34px] lg:text-[38px] xl:text-[42px] font-bold text-gray-800 text-center mb-6 pb-5">
              What We Do
            </h2>
            {/* Divider Line */}
            <div className="w-full h-px bg-gray-300"></div>
          </motion.div>

          {/* Content Block */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left Side - Image Placeholder */}
            <div className="w-full lg:w-1/3 flex-shrink-0">
              <div className="relative w-full aspect-[4/3] bg-gray-300 rounded-lg overflow-hidden">
                <Image src="/services/web.webp" alt="Web Development" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex-1 flex flex-col">
              {/* Title */}
              <h3 className="text-[22px] md:text-[26px] lg:text-[30px] font-semibold text-[#444444] mb-3 md:mb-4">
                Web Development
              </h3>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-700 leading-normal tracking-tight mb-4 md:mb-5">
                Your website should work as hard as you do. We design conversion-focused websites and online platforms that grow with your business, including e-commerce, frontend, and PHP development.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5 md:mb-6">
                <span className="bg-[#2A2A2A] text-white px-5 py-2.5 rounded-full text-sm md:text-base font-medium">
                  Frontend
                </span>
                <span className="bg-[#2A2A2A] text-white px-5 py-2.5 rounded-full text-sm md:text-base font-medium">
                  Backend
                </span>
                <span className="bg-[#2A2A2A] text-white px-5 py-2.5 rounded-full text-sm md:text-base font-medium">
                  SaaS Platforms
                </span>
              </div>

              {/* Learn More Button */}
              <Link href={`/services/${SERVICE_SLUGS[0]}`} className="group flex items-center justify-center gap-2 bg-primary text-white rounded-full px-8 py-3.5 text-[16px] sm:text-[18px] font-medium shadow-[0_14px_30px_rgba(0,0,0,0.16)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 hover:scale-[1.02] transition-transform transition-shadow duration-300 w-full sm:w-[30%] self-start">
                Learn More
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-full h-px bg-gray-300 my-12 md:my-16"></div>

          {/* Second Content Block */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left Side - Image Placeholder */}
            <div className="w-full lg:w-1/3 flex-shrink-0">
              <div className="relative w-full aspect-[4/3] bg-gray-300 rounded-lg overflow-hidden">
                <Image src="/services/app.webp" alt="App & Software Development" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex-1 flex flex-col">
              {/* Title */}
              <h3 className="text-[22px] md:text-[26px] lg:text-[30px] font-semibold text-[#444444] mb-3 md:mb-4">
                App & Software Development
              </h3>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-700 leading-normal tracking-tight mb-4 md:mb-5">
                We build custom applications and software tailored to your business needs, from cross-platform apps to e-commerce and on-demand solutions, helping you reach more customers efficiently.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5 md:mb-6">
                <span className="bg-[#2A2A2A] text-white px-5 py-2.5 rounded-full text-sm md:text-base font-medium">
                  Mobile Apps
                </span>
                <span className="bg-[#2A2A2A] text-white px-5 py-2.5 rounded-full text-sm md:text-base font-medium">
                  Web Apps
                </span>
                <span className="bg-[#2A2A2A] text-white px-5 py-2.5 rounded-full text-sm md:text-base font-medium">
                  React
                </span>
                <span className="bg-[#2A2A2A] text-white px-5 py-2.5 rounded-full text-sm md:text-base font-medium">
                  Flutter
                </span>
              </div>

              {/* Learn More Button */}
              <Link href={`/services/${SERVICE_SLUGS[1]}`} className="group flex items-center justify-center gap-2 bg-primary text-white rounded-full px-8 py-3.5 text-[16px] sm:text-[18px] font-medium shadow-[0_14px_30px_rgba(0,0,0,0.16)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 hover:scale-[1.02] transition-transform transition-shadow duration-300 w-full sm:w-[30%] self-start">
                Learn More
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-full h-px bg-gray-300 my-12 md:my-16"></div>

          {/* Third Content Block */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left Side - Image Placeholder */}
            <div className="w-full lg:w-1/3 flex-shrink-0">
              <div className="relative w-full aspect-[4/3] bg-gray-300 rounded-lg overflow-hidden">
                <Image src="/services/brand.webp" alt="Branding & Positioning" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex-1 flex flex-col">
              {/* Title */}
              <h3 className="text-[22px] md:text-[26px] lg:text-[30px] font-semibold text-[#444444] mb-3 md:mb-4">
                Branding & Positioning
              </h3>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-700 leading-normal tracking-tight mb-4 md:mb-5">
                We create professional, cohesive visual identities that make your business stand out, build trust and leave a lasting impression through brand strategy, graphic design and UI/UX solutions.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5 md:mb-6">
                <span className="bg-[#2A2A2A] text-white px-5 py-2.5 rounded-full text-sm md:text-base font-medium">
                  Brand Strategy
                </span>
                <span className="bg-[#2A2A2A] text-white px-5 py-2.5 rounded-full text-sm md:text-base font-medium">
                  Visual Identity
                </span>
              </div>

              {/* Learn More Button */}
              <Link href={`/services/${SERVICE_SLUGS[2]}`} className="group flex items-center justify-center gap-2 bg-primary text-white rounded-full px-8 py-3.5 text-[16px] sm:text-[18px] font-medium shadow-[0_14px_30px_rgba(0,0,0,0.16)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 hover:scale-[1.02] transition-transform transition-shadow duration-300 w-full sm:w-[30%] self-start">
                Learn More
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-full h-px bg-gray-300 my-12 md:my-16"></div>

          {/* Fourth Content Block */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left Side - Image Placeholder */}
            <div className="w-full lg:w-1/3 flex-shrink-0">
              <div className="relative w-full aspect-[4/3] bg-gray-300 rounded-lg overflow-hidden">
                <Image src="/services/ai.webp" alt="AI Integration" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex-1 flex flex-col">
              {/* Title */}
              <h3 className="text-[22px] md:text-[26px] lg:text-[30px] font-semibold text-[#444444] mb-3 md:mb-4">
                AI Integration
              </h3>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-700 leading-normal tracking-tight mb-4 md:mb-5">
                Our AI solutions enhance performance, automate workflows, and provide predictive analytics, powering smarter growth for your business.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5 md:mb-6">
                <span className="bg-[#2A2A2A] text-white px-5 py-2.5 rounded-full text-sm md:text-base font-medium">
                  Chatbots
                </span>
                <span className="bg-[#2A2A2A] text-white px-5 py-2.5 rounded-full text-sm md:text-base font-medium">
                  Automation
                </span>
                <span className="bg-[#2A2A2A] text-white px-5 py-2.5 rounded-full text-sm md:text-base font-medium">
                  RAG Systems
                </span>
              </div>

              {/* Learn More Button */}
              <Link href={`/services/${SERVICE_SLUGS[3]}`} className="group flex items-center justify-center gap-2 bg-primary text-white rounded-full px-8 py-3.5 text-[16px] sm:text-[18px] font-medium shadow-[0_14px_30px_rgba(0,0,0,0.16)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 hover:scale-[1.02] transition-transform transition-shadow duration-300 w-full sm:w-[30%] self-start">
                Learn More
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-full h-px bg-gray-300 my-12 md:my-16"></div>

          {/* Fifth Content Block */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left Side - Image Placeholder */}
            <div className="w-full lg:w-1/3 flex-shrink-0">
              <div className="relative w-full aspect-[4/3] bg-gray-300 rounded-lg overflow-hidden">
                <Image src="/services/marketing.webp" alt="Marketing" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex-1 flex flex-col">
              {/* Title */}
              <h3 className="text-[22px] md:text-[26px] lg:text-[30px] font-semibold text-[#444444] mb-3 md:mb-4">
                Marketing
              </h3>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-700 leading-normal tracking-tight mb-4 md:mb-5">
                We connect you with customers where they spend their time, running strategic campaigns that boost engagement, build communities, and drive qualified leads through social media, SEO, PPC, and email marketing.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5 md:mb-6">
                <span className="bg-[#2A2A2A] text-white px-5 py-2.5 rounded-full text-sm md:text-base font-medium">
                  Social Media
                </span>
                <span className="bg-[#2A2A2A] text-white px-5 py-2.5 rounded-full text-sm md:text-base font-medium">
                  Paid Ads
                </span>
                <span className="bg-[#2A2A2A] text-white px-5 py-2.5 rounded-full text-sm md:text-base font-medium">
                  SEO
                </span>
              </div>

              {/* Learn More Button */}
              <Link href={`/services/${SERVICE_SLUGS[4]}`} className="group flex items-center justify-center gap-2 bg-primary text-white rounded-full px-8 py-3.5 text-[16px] sm:text-[18px] font-medium shadow-[0_14px_30px_rgba(0,0,0,0.16)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 hover:scale-[1.02] transition-transform transition-shadow duration-300 w-full sm:w-[30%] self-start">
                Learn More
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-full h-px bg-gray-300 my-12 md:my-16"></div>

          {/* Sixth Content Block */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left Side - Image Placeholder */}
            <div className="w-full lg:w-1/3 flex-shrink-0">
              <div className="relative w-full aspect-[4/3] bg-gray-300 rounded-lg overflow-hidden">
                <Image src="/services/content.webp" alt="Content & Creatives" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex-1 flex flex-col">
              {/* Title */}
              <h3 className="text-[22px] md:text-[26px] lg:text-[30px] font-semibold text-[#444444] mb-3 md:mb-4">
                Content & Creatives
              </h3>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-700 leading-normal tracking-tight mb-4 md:mb-5">
                We create valuable, relevant content that attracts customers, showcases your expertise, and helps potential clients find your business online through content marketing and video production.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5 md:mb-6">
                <span className="bg-[#2A2A2A] text-white px-5 py-2.5 rounded-full text-sm md:text-base font-medium">
                  Content Strategy
                </span>
                <span className="bg-[#2A2A2A] text-white px-5 py-2.5 rounded-full text-sm md:text-base font-medium">
                  Motion & Animation
                </span>
                <span className="bg-[#2A2A2A] text-white px-5 py-2.5 rounded-full text-sm md:text-base font-medium">
                  Photo & video
                </span>
              </div>

              {/* Learn More Button */}
              <Link href={`/services/${SERVICE_SLUGS[5]}`} className="group flex items-center justify-center gap-2 bg-primary text-white rounded-full px-8 py-3.5 text-[16px] sm:text-[18px] font-medium shadow-[0_14px_30px_rgba(0,0,0,0.16)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 hover:scale-[1.02] transition-transform transition-shadow duration-300 w-full sm:w-[30%] self-start">
                Learn More
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-full h-px bg-gray-300 my-12 md:my-16"></div>

          {/* Seventh Content Block */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left Side - Image Placeholder */}
            <div className="w-full lg:w-1/3 flex-shrink-0">
              <div className="relative w-full aspect-[4/3] bg-gray-300 rounded-lg overflow-hidden">
                <Image src="/services/lead.webp" alt="Lead Generation" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex-1 flex flex-col">
              {/* Title */}
              <h3 className="text-[22px] md:text-[26px] lg:text-[30px] font-semibold text-[#444444] mb-3 md:mb-4">
                Lead Generation
              </h3>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-700 leading-normal tracking-tight mb-4 md:mb-5">
                We deliver professional lead generation services that connect you with qualified prospects ready to engage with your business.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5 md:mb-6">
                <span className="bg-[#2A2A2A] text-white px-5 py-2.5 rounded-full text-sm md:text-base font-medium">
                  CRM Setup
                </span>
                <span className="bg-[#2A2A2A] text-white px-5 py-2.5 rounded-full text-sm md:text-base font-medium">
                  Conversion Optimization
                </span>
                <span className="bg-[#2A2A2A] text-white px-5 py-2.5 rounded-full text-sm md:text-base font-medium">
                  Funnel Strategy
                </span>
              </div>

              {/* Learn More Button */}
              <Link href={`/services/${SERVICE_SLUGS[6]}`} className="group flex items-center justify-center gap-2 bg-primary text-white rounded-full px-8 py-3.5 text-[16px] sm:text-[18px] font-medium shadow-[0_14px_30px_rgba(0,0,0,0.16)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 hover:scale-[1.02] transition-transform transition-shadow duration-300 w-full sm:w-[30%] self-start">
                Learn More
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
