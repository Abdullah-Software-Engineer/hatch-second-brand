import Layout from './components/layout/Layout'
import Hero from './sections/Home/Hero'
import ParallaxBanner from './sections/Home/ParallaxBanner'
import ServicesMarquee from './sections/Home/ServicesMarquee'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ParallaxBanner imageSrc="/home/banner/lee-campbell-DtDlVpy-vvQ-unsplash.webp" alt="Banner" />
      <ServicesMarquee />
    </Layout>
  )
}
