import Link from 'next/link'
import { getAllPosts } from '../posts.js'

export const metadata = {
  title: 'Blog',
  description: 'Latest posts and notes',
}

export default function BlogIndex() {
  const posts = getAllPosts()

  return (
    <main className="prose mx-auto p-6">
      <h1>Blog</h1>
      <ul>
        {posts.map(({ meta }) => (
          <li key={meta.slug} className="mb-4">
            <Link
              href={`/blog/${meta.slug}`}
              className="text-xl font-semibold"
            >
              {meta.title}
            </Link>
            <br />
            <time className="text-sm opacity-70">{meta.date}</time>
            {meta.summary && <p className="mt-1">{meta.summary}</p>}
          </li>
        ))}
      </ul>
    </main>
  )
}
