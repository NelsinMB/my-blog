import Link from 'next/link'
import { getAllPosts } from '../posts'

export const metadata = {
  title: 'Blog',
  description: 'Latest posts and notes',
}

export default function BlogPage() {
  const posts = getAllPosts()
  return (
    <main className="prose mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <ul>
        {posts.map(({ meta }) => (
          <li key={meta.slug}>
            <Link href={`/blog/${meta.slug}`}>{meta.title}</Link>
            <time className="ml-2 text-sm opacity-70">{meta.date}</time>
            {meta.summary && <p>{meta.summary}</p>}
          </li>
        ))}
      </ul>
    </main>
  )
}
