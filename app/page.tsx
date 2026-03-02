import Layout from './components/layout/Layout'
import Hero from './sections/Home/Hero'
import ParallaxBanner from './sections/Home/ParallaxBanner'
import ServicesMarquee from './sections/Home/ServicesMarquee'
import Testimonials from './sections/Home/Testimonials'
import RecentProjects from './sections/Home/RecentProjects'
import Services from './sections/Home/Services'
import FAQ from './sections/Home/FAQ'

export default function Home() {
  return (
    <Layout>
      <Hero />
      {/* <ParallaxBanner imageSrc="/home/banner-img.webp" alt="Banner" /> */}
      <ServicesMarquee />
     
      <Testimonials />
      <RecentProjects />
      <Services />
      <FAQ />
    </Layout>
  )
}
