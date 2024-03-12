import clsx from "clsx";
import { GoogleTagManager } from '@next/third-parties/google'
import {inter, lexend} from "@/fonts";
import { Html, Head, Main, NextScript } from 'next/document';

export function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html
            lang="en"
            className={clsx('h-full scroll-smooth bg-white antialiased',
                inter.variable,
                lexend.variable,
            )}
        >
        <body className="flex h-full flex-col">
        <GoogleTagManager gtmId="GTM-PX3WB949" />

        {children}</body>
        </html>
    )
}

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

