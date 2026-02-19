import Layout from '../components/layout/Layout'
import AboutHero from '../sections/About/Hero'
import AboutIntro from '../sections/About/AboutIntro'
import OurFoundation from '../sections/About/OurFoundation'
import ClientsSection from '../sections/About/ClientsSection'
import ScrollingTaglineBands from '../sections/Home/ScrollingTaglineBands'
import LifeAthatch from '../sections/About/lifeathatch'

export default function AboutPage() {
  return (
    <Layout>
      <AboutHero />
      <AboutIntro />
      <OurFoundation />
      <ClientsSection />
      <ScrollingTaglineBands />
      <LifeAthatch />
    </Layout>
  )
}
