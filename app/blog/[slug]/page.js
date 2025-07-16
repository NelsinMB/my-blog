// app/blog/[slug]/page.js
import { notFound } from 'next/navigation'
import { getAllPosts } from '@/posts'
import { join } from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

export async function generateStaticParams() {
  return getAllPosts().map(({ meta }) => ({
    slug: meta.slug
  }))
}

export default function BlogPostPage({ params }) {
  const { slug } = params
  const post = getAllPosts().find(p => p.meta.slug === slug)
  if (!post) return notFound()

  return (
    <article className="prose mx-auto p-6">
      <h1>{post.meta.title}</h1>
      <time className="block mb-6 text-sm opacity-70">{post.meta.date}</time>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  )
}
