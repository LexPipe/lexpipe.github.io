// pages/privacy-policy.tsx
import {GetStaticProps, NextPage} from 'next';
import { getContentData } from '@/app/posts'; // Update the import path based on where you placed your function
import {Footer} from "@/components/Footer";
import {Header} from "@/components/Header";
import Head from "next/head";
import {metadata} from "@/pages/_app";

interface PrivacyPolicyProps {
    contentHtml: string;
}

export default function PrivacyPolicy({ contentHtml } : PrivacyPolicyProps) {
    return (
        <>
            <Head><title>LexPipe Privacy Policy</title></Head>

            <Header />
            <div className="max-w-4xl mx-auto px-5 mt-10 min-h-[800px] prose">
                    <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </div>
            <Footer />
        </>
    );
};

export const getStaticProps: GetStaticProps<PrivacyPolicyProps> = async () => {
    const { contentHtml } = await getContentData("privacy-policy.md");
    return {
        props: {
            contentHtml,
        },
    };
};
