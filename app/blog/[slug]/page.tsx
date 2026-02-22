import { notFound } from 'next/navigation'
import Layout from '../../components/layout/Layout'
import { getBlogBySlug, getAllBlogSlugs, getRelatedPosts } from '@/lib/blog-detail-data'
import {
  BlogDetailHero,
  BlogDetailContent,
  BlogDetailRelated,
} from '../../sections/BlogDetail'

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }))
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogBySlug(slug)

  if (!post) notFound()

  const related = getRelatedPosts(slug, 3)

  return (
    <Layout>
      <BlogDetailHero post={post} />
      <BlogDetailContent post={post} />
      <BlogDetailRelated posts={related} />
    </Layout>
  )
}
