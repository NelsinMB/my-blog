// app/blog/[id]/page.js
import { getSortedPostsData, getPostData } from '@/lib/posts';

// 1) Pre-generate dynamic routes (App Router replacement for getStaticPaths)
export async function generateStaticParams() {
  // Assuming getSortedPostsData returns [{ id, title, date }, ...]
  const posts = getSortedPostsData();
  return posts.map(p => ({ id: p.id })); // Next will build /blog/<id> for each
}

// Optional: ISR or fully static controls
// export const revalidate = 3600;    // re-generate every hour
// export const dynamic = 'force-static'; // fail if data needed at runtime

// 2) The page component receives { params } automatically
export default async function PostPage({ params }) {

  /*
  - await means "Pause here until this Promise finishes, then provide the result"
  - 'const {id} = await params;' is equivalent to
      const id = (await params).id
  This is JS object destructuring syntax. 
  */

  const {id} = await params;
  const post = await getPostData(id); // your helper should read /posts/<id>.md and return HTML/string

  return (
    <article>
      <h1>{post.title}</h1>
      {post.date && <p>{post.date}</p>}
      {/* If you converted markdown to HTML */}
      {post.contentHtml && (
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      )}
    </article>
  );
}
