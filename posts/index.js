// posts/index.js
import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDir = join(process.cwd(), 'posts')

export function getAllPosts() {
  return fs
    .readdirSync(postsDir)
    .filter(f => f.endsWith('.md'))
    .map(filename => {
      const file = fs.readFileSync(join(postsDir, filename), 'utf8')
      const { data: meta, content } = matter(file)
      return { meta, content }
    })
    .sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
}
