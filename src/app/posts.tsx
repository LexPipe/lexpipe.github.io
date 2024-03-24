// app/posts.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const BASE_DIR = process.env.BASE_DIR || process.cwd();
const postsDirectory = path.join(BASE_DIR, '_posts');
const contentDirectory = path.join(BASE_DIR, '_content'); // Change to your directory name if different

export interface PostData {
    id: string;
    date: string;
    title: string;
    contentHtml?: string;
}

// Utility function to read and parse markdown files
async function parseMarkdown(filePath: string): Promise<{ contentHtml: string; data: any }> {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const matterResult = matter(fileContents);
    const processedContent = await remark().use(html).process(matterResult.content);
    return {
        contentHtml: processedContent.toString(),
        data: matterResult.data,
    };
}

// Function implementations using the utility function
export async function getContentData(filePath: string): Promise<{ contentHtml: string }> {
    const fullPath = !filePath.startsWith('/') ? path.join(contentDirectory, filePath) : filePath;
    const { contentHtml } = await parseMarkdown(fullPath);
    return { contentHtml };
}

export function getSortedPostsData(): PostData[] {
    return fs.readdirSync(postsDirectory).map(fileName => {
        const id = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const { data } = matter(fs.readFileSync(fullPath, 'utf8'));
        return { id, ...data as { date: string; title: string } };
    }).sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(id: string): Promise<PostData> {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const { contentHtml, data } = await parseMarkdown(fullPath);
    return { id, contentHtml, ...data as { date: string; title: string } };
}