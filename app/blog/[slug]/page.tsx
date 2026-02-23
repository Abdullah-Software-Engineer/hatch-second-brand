import { notFound } from 'next/navigation'
import Image from 'next/image'
import Layout from '../../components/layout/Layout'
import { getBlogBySlug, getAllBlogSlugs } from '@/lib/blog-detail-data'

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

  return (
    <Layout>
      <article className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p className="text-muted-foreground text-sm mb-4">
          {post.date} · {post.readTime} · {post.category}
        </p>
        {post.image && (
          <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <p className="text-lg text-muted-foreground mb-8">{post.description}</p>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          {post.body.map((block, i) =>
            block.type === 'heading' ? (
              <h2 key={i} className="text-xl font-semibold mt-8 mb-4">
                {block.text}
              </h2>
            ) : (
              <p key={i} className="mb-4">
                {block.text}
              </p>
            )
          )}
        </div>
      </article>
    </Layout>
  )
}
