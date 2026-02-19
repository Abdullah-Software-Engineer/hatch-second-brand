'use client'

import Image from 'next/image'
import Container from '../../components/ui/Container'

export default function WhatWeDo() {
  return (
    <section className="w-full bg-[#EDEDED] py-12 md:py-16 lg:py-20 rounded-tl-[60px] rounded-tr-[60px]">
      <Container>
        <div className="w-full">
          {/* Header Section */}
          <div className="mb-8 md:mb-12">
            <p className="text-sm md:text-base text-gray-400 mb-2 text-center">(Services)</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 text-center mb-6 pb-5">
              What We Do
            </h2>
            {/* Divider Line */}
            <div className="w-full h-px bg-gray-300"></div>
          </div>

          {/* Content Block */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Left Side - Image Placeholder */}
            <div className="w-full lg:w-1/3 flex-shrink-0">
              <div className="relative w-full aspect-[4/3] bg-gray-300 rounded-lg overflow-hidden">
                {/* Placeholder for image - can be replaced with actual Image component */}
                <div className="w-full h-full bg-gray-300"></div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex-1 flex flex-col">
              {/* Title */}
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-800 mb-4 md:mb-6">
                Web Development
              </h3>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
                Your website should work as hard as you do. We design conversion-focused websites and online platforms that grow with your business, including e-commerce, frontend, and PHP development.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-8 md:mb-10">
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
              <button className="group flex items-center justify-center gap-2 bg-primary text-white rounded-full px-8 py-3.5 text-[16px] sm:text-[18px] font-medium shadow-[0_4px_14px_rgba(151,84,216,0.3)] hover:bg-primary/90 hover:shadow-[0_6px_20px_rgba(151,84,216,0.4)] transition-all duration-300 w-full sm:w-[30%] self-start">
                Learn More
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-full h-px bg-gray-300 my-12 md:my-16"></div>

          {/* Second Content Block */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Left Side - Image Placeholder */}
            <div className="w-full lg:w-1/3 flex-shrink-0">
              <div className="relative w-full aspect-[4/3] bg-gray-300 rounded-lg overflow-hidden">
                {/* Placeholder for image - can be replaced with actual Image component */}
                <div className="w-full h-full bg-gray-300"></div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex-1 flex flex-col">
              {/* Title */}
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-800 mb-4 md:mb-6">
                App & Software Development
              </h3>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
                We build custom applications and software tailored to your business needs, from cross-platform apps to e-commerce and on-demand solutions, helping you reach more customers efficiently.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-8 md:mb-10">
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
              <button className="group flex items-center justify-center gap-2 bg-primary text-white rounded-full px-8 py-3.5 text-[16px] sm:text-[18px] font-medium shadow-[0_4px_14px_rgba(151,84,216,0.3)] hover:bg-primary/90 hover:shadow-[0_6px_20px_rgba(151,84,216,0.4)] transition-all duration-300 w-full sm:w-[30%] self-start">
                Learn More
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-full h-px bg-gray-300 my-12 md:my-16"></div>

          {/* Third Content Block */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Left Side - Image Placeholder */}
            <div className="w-full lg:w-1/3 flex-shrink-0">
              <div className="relative w-full aspect-[4/3] bg-gray-300 rounded-lg overflow-hidden">
                {/* Placeholder for image - can be replaced with actual Image component */}
                <div className="w-full h-full bg-gray-300"></div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex-1 flex flex-col">
              {/* Title */}
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-800 mb-4 md:mb-6">
                Branding & Positioning
              </h3>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
                We create professional, cohesive visual identities that make your business stand out, build trust and leave a lasting impression through brand strategy, graphic design and UI/UX solutions.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-8 md:mb-10">
                <span className="bg-[#2A2A2A] text-white px-5 py-2.5 rounded-full text-sm md:text-base font-medium">
                  Brand Strategy
                </span>
                <span className="bg-[#2A2A2A] text-white px-5 py-2.5 rounded-full text-sm md:text-base font-medium">
                  Visual Identity
                </span>
              </div>

              {/* Learn More Button */}
              <button className="group flex items-center justify-center gap-2 bg-primary text-white rounded-full px-8 py-3.5 text-[16px] sm:text-[18px] font-medium shadow-[0_4px_14px_rgba(151,84,216,0.3)] hover:bg-primary/90 hover:shadow-[0_6px_20px_rgba(151,84,216,0.4)] transition-all duration-300 w-full sm:w-[30%] self-start">
                Learn More
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-full h-px bg-gray-300 my-12 md:my-16"></div>

          {/* Fourth Content Block */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Left Side - Image Placeholder */}
            <div className="w-full lg:w-1/3 flex-shrink-0">
              <div className="relative w-full aspect-[4/3] bg-gray-300 rounded-lg overflow-hidden">
                {/* Placeholder for image - can be replaced with actual Image component */}
                <div className="w-full h-full bg-gray-300"></div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex-1 flex flex-col">
              {/* Title */}
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-800 mb-4 md:mb-6">
                AI Integration
              </h3>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
                Our AI solutions enhance performance, automate workflows, and provide predictive analytics, powering smarter growth for your business.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-8 md:mb-10">
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
              <button className="group flex items-center justify-center gap-2 bg-primary text-white rounded-full px-8 py-3.5 text-[16px] sm:text-[18px] font-medium shadow-[0_4px_14px_rgba(151,84,216,0.3)] hover:bg-primary/90 hover:shadow-[0_6px_20px_rgba(151,84,216,0.4)] transition-all duration-300 w-full sm:w-[30%] self-start">
                Learn More
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-full h-px bg-gray-300 my-12 md:my-16"></div>

          {/* Fifth Content Block */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Left Side - Image Placeholder */}
            <div className="w-full lg:w-1/3 flex-shrink-0">
              <div className="relative w-full aspect-[4/3] bg-gray-300 rounded-lg overflow-hidden">
                {/* Placeholder for image - can be replaced with actual Image component */}
                <div className="w-full h-full bg-gray-300"></div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex-1 flex flex-col">
              {/* Title */}
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-800 mb-4 md:mb-6">
                Marketing
              </h3>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
                We connect you with customers where they spend their time, running strategic campaigns that boost engagement, build communities, and drive qualified leads through social media, SEO, PPC, and email marketing.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-8 md:mb-10">
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
              <button className="group flex items-center justify-center gap-2 bg-primary text-white rounded-full px-8 py-3.5 text-[16px] sm:text-[18px] font-medium shadow-[0_4px_14px_rgba(151,84,216,0.3)] hover:bg-primary/90 hover:shadow-[0_6px_20px_rgba(151,84,216,0.4)] transition-all duration-300 w-full sm:w-[30%] self-start">
                Learn More
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-full h-px bg-gray-300 my-12 md:my-16"></div>

          {/* Sixth Content Block */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Left Side - Image Placeholder */}
            <div className="w-full lg:w-1/3 flex-shrink-0">
              <div className="relative w-full aspect-[4/3] bg-gray-300 rounded-lg overflow-hidden">
                {/* Placeholder for image - can be replaced with actual Image component */}
                <div className="w-full h-full bg-gray-300"></div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex-1 flex flex-col">
              {/* Title */}
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-800 mb-4 md:mb-6">
                Content & Creatives
              </h3>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
                We create valuable, relevant content that attracts customers, showcases your expertise, and helps potential clients find your business online through content marketing and video production.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-8 md:mb-10">
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
              <button className="group flex items-center justify-center gap-2 bg-primary text-white rounded-full px-8 py-3.5 text-[16px] sm:text-[18px] font-medium shadow-[0_4px_14px_rgba(151,84,216,0.3)] hover:bg-primary/90 hover:shadow-[0_6px_20px_rgba(151,84,216,0.4)] transition-all duration-300 w-full sm:w-[30%] self-start">
                Learn More
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-full h-px bg-gray-300 my-12 md:my-16"></div>

          {/* Seventh Content Block */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Left Side - Image Placeholder */}
            <div className="w-full lg:w-1/3 flex-shrink-0">
              <div className="relative w-full aspect-[4/3] bg-gray-300 rounded-lg overflow-hidden">
                {/* Placeholder for image - can be replaced with actual Image component */}
                <div className="w-full h-full bg-gray-300"></div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex-1 flex flex-col">
              {/* Title */}
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-800 mb-4 md:mb-6">
                Lead Generation
              </h3>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
                We deliver professional lead generation services that connect you with qualified prospects ready to engage with your business.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-8 md:mb-10">
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
              <button className="group flex items-center justify-center gap-2 bg-primary text-white rounded-full px-8 py-3.5 text-[16px] sm:text-[18px] font-medium shadow-[0_4px_14px_rgba(151,84,216,0.3)] hover:bg-primary/90 hover:shadow-[0_6px_20px_rgba(151,84,216,0.4)] transition-all duration-300 w-full sm:w-[30%] self-start">
                Learn More
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
