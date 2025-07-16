import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


const POSTS_DIR = path.join(process.cwd(), 'posts');

export function getSlugs() {
  return fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.md'));
}

export function getPost(slug) {
  const file = fs.readFileSync(path.join(POSTS_DIR, slug + '.md'), 'utf8');
  const { data, content } = matter(file);
  return { meta: { slug, ...data }, content };
}

export function getAllPosts() {
  return getSlugs()
    .map(s => s.replace(/\.md$/, ''))
    .map(getPost)
    .filter(p => !p.meta.draft)
    .sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1));
}