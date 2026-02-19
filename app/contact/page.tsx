import Layout from '../components/layout/Layout'
import ContactHero from '../sections/Contact/ContactHero'
import ContactForm from '../sections/Contact/ContactForm'
import OurLocations from '../sections/Contact/OurLocations'

export default function ContactPage() {
  return (
    <Layout>
      <ContactHero />
      <ContactForm />
      <OurLocations />
    </Layout>
  )
}
