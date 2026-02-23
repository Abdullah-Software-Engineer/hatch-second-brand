import Layout from '../components/layout/Layout'
import BlogHero from '../sections/Blog/BlogHero'
import BlogInsights from '../sections/Blog/BlogListing'

export default function BlogPage() {
  return (
    <Layout>
      <main>
        <BlogHero />
        <BlogInsights />
      </main>
    </Layout>
  )
}
