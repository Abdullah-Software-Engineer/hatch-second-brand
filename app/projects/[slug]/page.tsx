import { notFound } from 'next/navigation'
import Layout from '../../components/layout/Layout'
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/project-detail-data'
import AboutHero from '../../sections/About/Hero'
import {
  ProjectDetailSection,
  ProjectDetailNextProject,
  ProjectDetailTestimonials,
} from '../../sections/ProjectDetail'

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }))
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) notFound()

  return (
    <Layout>
      <AboutHero />

      {project.sections.map((section) => (
        <ProjectDetailSection key={section.id} section={section} />
      ))}

      {project.testimonials && project.testimonials.length > 0 && (
        <ProjectDetailTestimonials testimonials={project.testimonials} />
      )}

      {project.nextProject && (
        <ProjectDetailNextProject project={project.nextProject} />
      )}
    </Layout>
  )
}
