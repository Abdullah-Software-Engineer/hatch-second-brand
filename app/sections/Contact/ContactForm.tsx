'use client'

import { useState } from 'react'
import Container from '../../components/ui/Container'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    description: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="w-full bg-[#EDEDED] py-12 md:py-16 lg:py-20 rounded-tl-[50px] rounded-tr-[50px] mb-[90px]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-stretch">
          {/* Left Section - Get In Touch Form */}
          <div className="w-full">
            <p className="text-sm md:text-base text-gray-500 mb-2">(Contact)</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8 md:mb-10">
              Get In Touch
            </h2>

            <form className="space-y-5 md:space-y-6">
              {/* Name Input */}
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 md:py-4 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />

              {/* Email Input */}
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 md:py-4 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />

              {/* Service Dropdown */}
              <div className="relative">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 md:py-4 bg-white border border-gray-300 rounded-lg text-gray-800 appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all cursor-pointer"
                >
                  <option value="" disabled>What do you need from us</option>
                  <option value="web-development">Web Development</option>
                  <option value="app-development">App Development</option>
                  <option value="ai-integration">AI Integration</option>
                  <option value="branding">Branding & Strategy</option>
                  <option value="marketing">Marketing</option>
                  <option value="content">Content & Creatives</option>
                  <option value="lead-generation">Lead Generation</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6L8 10L12 6" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Description Textarea */}
              <textarea
                name="description"
                placeholder="Project description"
                value={formData.description}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 md:py-4 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
              />

              {/* Send Button */}
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-primary text-white rounded-lg font-medium text-base md:text-lg shadow-[0_14px_30px_rgba(0,0,0,0.16)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 hover:scale-[1.02] transition-transform transition-shadow duration-300"
              >
                Send now!
              </button>
            </form>
          </div>

          {/* Right Section - Find Us Here Panel */}
          <div className="w-full lg:flex">
            <div className="bg-[#2A2A2A] rounded-2xl overflow-hidden w-full flex flex-col">
              {/* Placeholder for map / image */}
              <div className="w-full aspect-4/3 min-h-[180px] bg-[#1a1a1a] flex items-center justify-center">
                <span className="text-gray-500 text-sm">Map or image</span>
              </div>
              <div className="p-8 md:p-10 lg:p-12 flex flex-col">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 md:mb-10">
                  Find Us Here
                </h3>

              {/* Social Media Icons */}
              <div className="flex items-center gap-6 md:gap-8 mb-6 md:mb-8">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>

              {/* Contact Information */}
              <div className="space-y-3 text-left">
                <p className="text-white text-base md:text-lg">
                  <span className="text-gray-400 mr-2">Email:</span> sales@digitallyhatch.com
                </p>
                <p className="text-white text-base md:text-lg">
                  <span className="text-gray-400 mr-2">Phone:</span> +92 3003535893
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
