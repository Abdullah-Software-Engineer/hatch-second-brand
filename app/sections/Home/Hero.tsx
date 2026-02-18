'use client'

import Container from '../../components/ui/Container'
import PhoneButton from '../../components/ui/PhoneButton'

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-primary">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent" />
      </div>
      <div className="relative z-10 w-full h-full">
        <Container>
          <div className="flex flex-col justify-between min-h-screen py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="flex items-center justify-center flex-1 pt-12 sm:pt-16 md:pt-20 lg:pt-[120px] xl:pt-[200px]">
              <div className="text-center w-full px-4 sm:px-6">
                <h1 className="text-[36px] md:text-[48px] lg:text-[56px] xl:text-[56px] font-playfair font-light text-white mb-3 sm:mb-4">
                  WELCOME TO
                </h1>
                <h1 className="text-[36px] md:text-[48px] lg:text-[56px] xl:text-[56px] font-playfair font-bold text-secondary">
                  HATCH SECOND BRAND
                </h1>
              </div>
            </div>
            <div className="flex items-center justify-center mt-6 sm:mt-8 md:mt-10 pb-8 sm:pb-10 md:pb-12 lg:pb-[50px]">
              <PhoneButton size="md" />
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
