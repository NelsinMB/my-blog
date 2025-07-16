// posts/index.js
import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDir = join(process.cwd(), 'posts')

export function getAllPosts() {
  return fs
    .readdirSync(postsDir)
    .filter((fn) => fn.endsWith('.md'))
    .map((filename) => {
      const fullPath = join(postsDir, filename)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data: meta, content } = matter(fileContents)
      return { meta, content }
    })
    .sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
}
