import type { Metadata } from 'next'
import Layout from '../components/layout/Layout'
import ContactHero from '../sections/Contact/ContactHero'
import ContactForm from '../sections/Contact/ContactForm'
import OurLocations from '../sections/Contact/OurLocations'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: "Get in touch with Hatch. Let's build something together.",
}

export default function ContactPage() {
  return (
    <Layout>
      <ContactHero />
      <ContactForm />
      <OurLocations />
    </Layout>
  )
}
