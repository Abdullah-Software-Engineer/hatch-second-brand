import Layout from '../components/layout/Layout'
import ProjectsHero from '../sections/Projects/ProjectsHero'
import RecentProjects from '../sections/Home/RecentProjects'
import FAQ from '../sections/Home/FAQ'

export default function ProjectsPage() {
  return (
    <Layout>
      <ProjectsHero />
      <RecentProjects />
      <FAQ />
    </Layout>
  )
}
