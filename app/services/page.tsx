import Layout from '../components/layout/Layout'
import ServicesHero from '../sections/Services/ServicesHero'
import WhatWeDo from '../sections/Services/WhatWeDo'
import FAQ from '../sections/Home/FAQ'

export default function ServicesPage() {
  return (
    <Layout>
      <ServicesHero />
      <WhatWeDo />
      <FAQ />
    </Layout>
  )
}
