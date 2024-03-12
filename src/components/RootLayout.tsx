import clsx from "clsx";
import { GoogleTagManager } from '@next/third-parties/google'
import {inter, lexend} from "@/app/fonts";

export function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html
            lang="en"
            className={clsx(
                'h-full scroll-smooth bg-white antialiased',
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
