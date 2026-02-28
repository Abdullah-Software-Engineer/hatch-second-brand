import { notFound } from 'next/navigation'
import Layout from '../../components/layout/Layout'
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/project-detail-data'
import ProjectDetailHero from '../../sections/ProjectDetail/ProjectDetailHero'
import {
  ProjectDetailSection,
  ProjectDetailNextProject,
  ProjectDetailTestimonials,
} from '../../sections/ProjectDetail'
import ProjectFeaturedImage from '../../sections/ProjectDetail/ProjectFeaturedImage'

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
      <ProjectDetailHero
        titleAccent={project.titleAccent}
        titleRest={project.titleRest}
        tagline={project.tagline}
        iconSrc={project.iconSrc}
        iconSrc2={project.iconSrc2}
        categories={project.categories}
      />

      {project.featuredImage && (
        <ProjectFeaturedImage 
          imageSrc={project.featuredImage} 
          alt={`${project.titleAccent} ${project.titleRest} - Featured Image`}
        />
      )}

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
