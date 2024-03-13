// pages/document.tsx
import Document, {Html, Head, Main, NextScript} from 'next/document'
import {GoogleTagManager} from "@next/third-parties/google";
import clsx from "clsx";
import {inter, lexend} from "@/fonts";
import type {Metadata} from "next";
import Logo1000 from "@/images/LexPipe-White-Sq-630-Pipes.png";
import {metadata} from "./_app"

export function LexPipeHeaderInfo() {
    return (<Head>
        {/* Tags like meta, link for CSS, etc. */}
        <meta name="description" content={metadata.description}/>
        {/* Open Graph Tags */}
        <meta property="og:title" content={metadata.title.default}/>
        <meta property="og:description" content={metadata.description}/>
        <meta property="og:image" content={metadata.openGraph.images[0].url}/>
        {/* Twitter Card Tags */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:title" content={metadata.title.default}/>
        <meta property="twitter:description" content={metadata.description}/>
        <meta property="twitter:image" content={metadata.openGraph.images[0].url}/>
    </Head>);
}

export default class LexPipeDocument extends Document {
    render() {
        return <Html lang="en"
                     className={clsx('h-full scroll-smooth bg-white antialiased',
                         inter.variable,
                         lexend.variable,
                     )}>

            <body>
            <LexPipeHeaderInfo/>
            <GoogleTagManager gtmId="GTM-PX3WB949"/>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    }
}

