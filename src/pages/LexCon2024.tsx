import { useEffect } from 'react';
import { useRouter } from 'next/router';

const YourComponent = () => {
    const router = useRouter();
    useEffect(() => {
        router.push('/LexConf2024'); // Redirect
    }, [router]);

    return (
        <div className="max-w-4xl text-2xl text-center">No 404 here... </div>
    );
}

export default YourComponent;
