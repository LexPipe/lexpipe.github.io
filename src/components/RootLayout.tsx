import clsx from "clsx";
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
        <body className="flex h-full flex-col">{children}</body>
        </html>
    )
}
