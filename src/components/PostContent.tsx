// components/PostContent.tsx
import React from 'react';

interface PostContentProps {
    title: string;
    date: string;
    contentHtml: string;
}

const PostContent: React.FC<PostContentProps> = ({ title, date, contentHtml }) => {
    // Format the date. You can adjust this format as needed.
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <article className="max-w-4xl mx-auto mt-10 mb-16 px-5">
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
            <p className="text-md text-gray-600 mb-8">{formattedDate}</p>
            <div className="prose lg:prose-xl prose-indigo mx-auto" dangerouslySetInnerHTML={{ __html: contentHtml }} />
            {/* Tailwind CSS typography plugin is used here with a prose class for nice default styling of HTML content. */}
        </article>
    );
};

export default PostContent;
