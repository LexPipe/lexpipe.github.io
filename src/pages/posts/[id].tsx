// pages/posts/[id].tsx
import '@/styles/tailwind.css'
import { GetStaticProps, GetStaticPaths, type Metadata } from 'next';
import { PostData, getPostData, getSortedPostsData } from '@/app/posts';
import PostContent from '../../components/PostContent';

import {Header} from "@/components/Header";
export const metadata: Metadata = {
    title: {
        template: 'LexPipe',
        default: 'LexPipe: Workflow automation for law firms.',
    },
    description:
        'LexPipe transforms the way law firms and corporates use legal information to develop new business and manage matters.',
}

interface PostProps {
    postData: PostData;
}

export default function Post({ postData }: PostProps) {
    return (
        <div>
            <Header />
            <PostContent title={postData.title} date={postData.date} contentHtml={postData.contentHtml as string} />
        </div>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getSortedPostsData().map(post => ({
        params: { id: post.id },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getPostData(params!.id as string);
    return {
        props: {
            postData,
        },
    };
};
