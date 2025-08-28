import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import styles from "./Blog.module.css"

export default function BlogPage() {
    const posts = getSortedPostsData();
    return (
        <main className = {styles.page}>
            {/* */}
            <section>
                <h2 className = {styles.title}>Blog</h2>
                <ul>
                    {posts.map(({ id, date, title }) => (
                        <li key={id}>
                            <Link href={`/blog/${id}`}>{title ?? id}</Link>
                            <br />
                            {id}
                            <br />
                            <small> {date} </small>
                        </li>
                    ))}
                </ul>
            </section>

    

            </main>


    )
}