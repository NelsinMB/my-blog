// app/writing/page.js
import { getSortedPostsData } from '@/app/posts.js'

export default async function WritingPage() {
  // Fetch data directly in the component
  const allPostsData = getSortedPostsData();

  return (
    <div className="container">
      {allPostsData.map(post => (
        <div key={post.slug}>{post.title}</div>
      ))}
    </div>
  );
}
