// app/blog/[slug]/page.js
import { notFound }         from 'next/navigation'
import ReactMarkdown        from 'react-markdown'
import { getAllPosts, getPost } from '../../posts.js'  // ← relative path from app/blog/[slug]

export async function generateStaticParams() {
  // tell Next.js which pages to pre-render
  return getAllPosts().map(({ meta }) => ({
    slug: meta.slug
  }))
}

export default function BlogPostPage({ params }) {
  const { slug } = params
  const post      = getPost(slug)      // returns { meta, content }
  if (!post) return notFound()

  const { meta, content } = post

  return (
    <article className="prose mx-auto p-6">
      <h1>{meta.title}</h1>
      <time className="block mb-4 text-sm opacity-70">
        {meta.date}
      </time>
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  )
}
