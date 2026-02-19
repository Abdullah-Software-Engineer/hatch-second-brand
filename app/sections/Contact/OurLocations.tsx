'use client'

import Image from 'next/image'
import Container from '../../components/ui/Container'

const LOCATIONS = [
  {
    office: "Australia Office",
    address: [
      "575 Darling Street",
      "Balmain Town Hall",
      "Balmain NSW 2041",
      "Australia"
    ]
  },
  {
    office: "USA Office",
    address: [
      "9501 Lavergne Ave, Skokie, IL",
      "60077"
    ]
  }
]

export default function OurLocations() {
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20">
      <Container>
        <div className="w-full flex flex-col">
          {/* Header Section */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 md:mb-6">
              Our Locations
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
              Working across regions to support teams worldwide.
            </p>
          </div>

          {/* Location Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-4 md:mb-6">
            {LOCATIONS.map((location, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden shadow-lg"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src="/contact/card-bg.png"
                    alt={location.office}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Content Overlay */}
                <div className="relative z-10 p-8 md:p-10">
                  {/* Office Name with Icon */}
                  <div className="flex items-center gap-3 mb-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white flex-shrink-0">
                      <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {location.office}
                    </h3>
                  </div>

                  {/* Address */}
                  <div className="space-y-2">
                    {location.address.map((line, lineIndex) => (
                      <p key={lineIndex} className="text-white text-base md:text-lg">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Map Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[1, 2].map((index) => (
              <div key={index} className="relative w-full aspect-square rounded-lg overflow-hidden shadow-md">
                <div className="w-full h-full bg-gray-200">
                  {/* Placeholder for map - can be replaced with actual map image */}
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Map {index}</span>
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
