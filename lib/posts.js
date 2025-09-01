import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import 'server-only';
import { remark } from 'remark';
import html from'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts'); // process.cwd is wherever the process was launched

export function getSortedPostsData() {

    const fileNames = fs.readdirSync(postsDirectory); // reads the contents of the directory

    const allPostsData = fileNames.map(
        (fileName) => {
        
        const id = fileName.replace(/\.md$/, ''); // Remove ".md" from file name
        
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const matterResult = matter(fileContents);

        /*
            The brackets create a JavaScript object.
            Including id as shown below is short hand for id: id, meaning we create a field id with the value equal to id which is set above. TODO: review how this happens.
            ... is the spread operator which copies all key-value pairs from matterResult.data into this object  TODO: how does it access all key-value pairs?
            Since each post file we are creating has a 'title' and 'date' field, these will be accessible variables in each object.

        */


        return { 
            id,
            ...matterResult.data,
        };
    }
    );

    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
        
    });
        
}


/*TODO: Review this syntax */
export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            },
        };

    });
}

/*TODO: comphrehend*/
export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const {data, content} = matter(fileContents);
    const processed = await remark().use(html).process(content);
    const contentHtml = processed.toString();


    return {
        id, 
        contentHtml,
        ...data
    };



}


