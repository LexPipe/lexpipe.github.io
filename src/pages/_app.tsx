// pages/_app.tsx
import '@/styles/tailwind.css';
import { AppProps } from 'next/app';
import { inter, lexend } from '@/fonts';
import {GoogleTagManager} from "@next/third-parties/google";
import Logo1000 from "@/images/LexPipe-White-Sq-630-Pipes.png";



// Hard-code the base URL for production environment
const BASE_URL = 'https://lexpipe.com';

function generateAbsoluteUrl(path: string): string {
    // Ensure the path does not start with a slash to avoid double slashes in the URL
    const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
    return `${BASE_URL}/${normalizedPath}`;
}

function convertToRelative(url: string): string {
    // Use a regex to remove the protocol and domain part of the URL
    // This regex matches any string that starts with a scheme followed by "://",
    // optionally followed by any characters (non-greedy) until the first slash after the domain
    const regex = /^[a-zA-Z]+:\/\/[^\/]+/;

    // Replace the matched scheme and domain with an empty string, effectively removing them
    // Prepend "/" to ensure the result is a relative path, unless the URL is already relative
    return url.replace(regex, '');
}

export const metadata = {
    title: {
        template: '%s | LexPipe',
        default: 'LexPipe: Workflow automation for law firms.',
    },
    // Add the logo to the openGraph
    openGraph : {
        images: [{
            url : generateAbsoluteUrl(convertToRelative(Logo1000.src)),
            width : Logo1000.width,
            height : Logo1000.height,
        }],
    },
    description:
        'LexPipe transforms the way law firms and corporates use legal information to develop new business and manage matters.',
}

export default function LexPipeSite({ Component, pageProps }: AppProps) {

  return (<>
      <style jsx global>{`
        body {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>

      <GoogleTagManager gtmId="GTM-PX3WB949"/>

      <Component {...pageProps} /></>)
      ;
};
