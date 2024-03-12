// pages/document.tsx
import Document, {Head, Html, Main, NextScript} from 'next/document'
import {GoogleTagManager} from "@next/third-parties/google";
import clsx from "clsx";
import {inter, lexend} from "@/fonts";

export default class LexPipeDocument extends Document {
    render() {
        return <Html lang="en"
                     className={clsx('h-full scroll-smooth bg-white antialiased',
                         inter.variable,
                         lexend.variable,
                     )}>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    }
}

