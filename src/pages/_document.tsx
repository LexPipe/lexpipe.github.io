import Document, {Head, Html, Main, NextScript} from 'next/document'
import {GoogleTagManager} from "@next/third-parties/google";
import clsx from "clsx";
import {inter, lexend} from "@/fonts";

export function RootDocumentLayout() {
    return (
        <Html lang="en"
              className={clsx('h-full scroll-smooth bg-white antialiased',
                  inter.variable,
                  lexend.variable,
              )}>
            <Head>
                {/* Tags like meta, link for CSS, etc. */}
            </Head>
            <body>
            <GoogleTagManager gtmId="GTM-PX3WB949" />
            <Main />
            <NextScript />
            </body>
        </Html>
    );
}

export default class LexPipeDocument extends Document {
    render() {
        return <RootDocumentLayout/>;
    }
}

