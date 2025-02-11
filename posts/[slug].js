import { getAllPostsSlugs, getPostData } from "@/app/posts";

export default function Post( {postData}) {
    return (
        <article> 
            <h1>{postData.title}</h1>
            <div>
                <small>{postData.date}</small>
            </div>

            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>


    )
}

export async function getStaticPaths() {
    const paths = getAllPostSlugs()
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps ({params}) {
    const postData = await getPostData(params.slug);
    return {
        props: {
            postData,

        },
    };
}