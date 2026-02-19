'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Marquee from 'react-fast-marquee'

export default function LifeAthatch() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  // ONE frame image
  const frameImage = '/About/About-us-loop.png'

  // duplicate same image for infinite scroll
  const marqueeItems = Array(3).fill(frameImage)

  return (
    <section
      ref={ref}
      className="relative min-h-[80vh] md:min-h-screen overflow-hidden"
    >
     

      {/* Text content */}
      <div className="relative z-10 text-center pt-24 pb-20 max-w-7xl mx-auto">
       <p className=" text-sm  mb-4">(Life at Hatch)</p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl lg:text-5xl font-semibold  mb-4"
        >
          The People Behind the Products <br />
          Where Innovation Lives
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg  max-w-3xl mx-auto"
        >
          A creative force behind delivering smart and scalable digital solutions.
        </motion.p>
      </div>

      {/* IMAGE-LIKE MARQUEE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.4 }}
        className="relative z-10 w-full pb-12"
      >
        <Marquee speed={40} gradient={false} pauseOnHover={false}>
          {marqueeItems.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt="About us frame"
              width={2400}
              height={500}
              unoptimized
              draggable={false}
              className="
                w-screen
                h-[240px]
                md:h-[320px]
                lg:h-[360px]
                object-contain
              "
            />
          ))}
        </Marquee>
      </motion.div>
    </section>
  )
}
