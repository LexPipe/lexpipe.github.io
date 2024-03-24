import '@/styles/tailwind.css'

import Link from 'next/link';
import { useState } from 'react';
import { getSortedPostsData } from '@/app/posts';
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";

const POSTS_PER_PAGE = 5;
interface PostData {
    id: string;
    title: string;
    date: string;
}

interface PostsPageProps {
    allPostsData: PostData[];
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function PostsPage({ allPostsData } : PostsPageProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const filteredPosts = allPostsData.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
    const currentPageData = filteredPosts.slice(
        (currentPage - 1) * POSTS_PER_PAGE,
        currentPage * POSTS_PER_PAGE
    );

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1); // Reset to first page with new search
    };

    return (
        <div>
            <Header/>
        <div className="max-w-4xl mx-auto px-5 mt-10 min-h-[800px]">
            <div className="mb-10">
                <input
                    type="text"
                    placeholder="Search posts..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
            </div>
            <ul className="space-y-4">
                {currentPageData.map(({ id, date, title }) => (
                    <li key={id} className="bg-white shadow overflow-hidden rounded-md px-6 py-4">
                        <Link href={`/posts/${id}`} className="hover:underline text-xl font-semibold text-primary-600">
                            {title}
                        </Link>
                        <p className="text-md text-gray-500">{new Date(date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}</p>
                    </li>
                ))}
            </ul>
            <div className="mt-8 flex justify-center space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-4 py-2 rounded-md ${currentPage === page ? 'bg-indigo-500 text-white' : 'bg-white text-gray-900 border'}`}
                    >
                        {page}
                    </button>
                ))}
            </div>
        </div>
        <Footer/></div>
    );
}
