import { notFound } from 'next/navigation'
import Layout from '../../components/layout/Layout'
import { getServiceBySlug, getAllServiceSlugs } from '@/lib/service-detail-data'
import {
  ServiceDetailHero,
  ServiceDetailIntro,
  ServiceOurWork,
  ServiceProcess,
  ServiceTestimonialsSection,
  ServiceFAQSection,
} from '../../sections/ServiceDetail'
import ServiceDetailMarquee from '../../sections/ServiceDetail/ServiceDetailMarquee'

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }))
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) notFound()

  return (
    <Layout>
      <ServiceDetailHero
        titlePart1={service.titlePart1}
        titlePart2={service.titlePart2}
        titlePart3={service.titlePart3}
        tagline={service.tagline}
        iconSrc={service.iconSrc}
        iconSrc2={service.iconSrc2}
        heroImage={service.heroImage}
      />
      <ServiceDetailIntro description={service.description} />
      <ServiceDetailMarquee
        purpleItems={service.purpleTags}
        blackItems={service.blackTags}
      />

      <ServiceOurWork
        title={service.workTitle}
        subtitle={service.workSubtitle}
        items={service.workItems}
      />
      <ServiceProcess steps={service.processSteps} />
      {service.testimonials && service.testimonials.length > 0 && (
        <ServiceTestimonialsSection testimonials={service.testimonials} />
      )}
      {service.faqs && service.faqs.length > 0 && (
        <ServiceFAQSection faqs={service.faqs} />
      )}
    </Layout>
  )
}
