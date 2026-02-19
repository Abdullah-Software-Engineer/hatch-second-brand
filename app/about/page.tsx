import Layout from '../components/layout/Layout'
import AboutHero from '../sections/About/Hero'
import AboutIntro from '../sections/About/AboutIntro'
import OurFoundation from '../sections/About/OurFoundation'
import LifeAthatch from '../sections/About/lifeathatch'

export default function AboutPage() {
  return (
    <Layout>
      <AboutHero />
      <AboutIntro />
      <OurFoundation />
      <LifeAthatch />
    </Layout>
  )
}
