import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {remark} from 'remark'; //Why is remark in curly brackets?
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDirectory); //What does readdirSync do?
    const allPostsData = fileNames.map((fileName) => {
        
        const slug = fileName.replace(/\.md$/, ''); //What are slugs?

        const fullPath = path.join(postsDierctory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const matterResult = matter(fileContents);

        return {
            slug,
            ...matterResult.data, //Why the three dots?
        }
    });

    return allPostsData.sort((a,b) => new Date(b.date) - new Date(a.date));
}

/*
- Read all file names from the posts directory.
- Map each file name to an object.
- Remove the .md extension from the file name to produce a slug. A slug is a URL-friendly string that identifies a resource.
- Wrap the slug inside an object under the params key, which is the fomrat that Next.js expects for dynamic routing.

*/

export function getAllPostsSlugs() {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
        return {
            params: {
                slug: fileName.replace(/\.md$/, ''),
            },
        };
    });
}

export async function getPostData(slug) { //async allows the usage of the await keyword, which allows for a pause in execution until asynchronous opertions complete.
    const fullPath = path.join(postsDirectory, '${slug}.md'); // Builds the full path to the Markdown file.
    const fileContents = fs.readFileSync(fullpath, 'utf8');

    const matterResult = matter(fileContents);

    const processedContent = await remark().use(html).process(matterResult.content);
    const contentHTML = processedContent.toString();




}