import { notFound } from 'next/navigation'
import Layout from '../../components/layout/Layout'
import {
  getBlogBySlug,
  getAllBlogSlugs,
  getTocFromBody,
  getRelatedPosts,
} from '@/lib/blog-detail-data'
import { getBlogPageComponent } from '@/app/sections/BlogDetail/pages'
import { getBlogDetailContent } from '@/app/sections/BlogDetail/contents'
import BlogDetailHero from '@/app/sections/BlogDetail/BlogDetailHero'
import BlogInnerLayout from '@/app/sections/BlogDetail/BlogInnerLayout'

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

  const CustomPage = getBlogPageComponent(slug)

  if (CustomPage) {
    return (
      <Layout>
        <CustomPage post={post} />
      </Layout>
    )
  }

  const toc = getTocFromBody(post.body)
  const relatedPosts = getRelatedPosts(slug)
  const ContentComponent = getBlogDetailContent(slug)

  return (
    <Layout>
      <BlogInnerLayout toc={toc} relatedPosts={relatedPosts}>
        <>
          <BlogDetailHero post={post} />
          <ContentComponent post={post} />
        </>
      </BlogInnerLayout>
    </Layout>
  )
}
