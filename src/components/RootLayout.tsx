import clsx from "clsx";
import Head from "next/head";
import {inter, lexend} from "@/app/fonts";


const GTMScript = () => (
    <Head>{/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PX3WB949');
    ` }} />
        {/* End Google Tag Manager */}</Head>
);

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
        {GTMScript()}
        <body className="flex h-full flex-col">
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PX3WB949"
                          height="0" width="0" className="hidden invisible"></iframe></noscript>
        {children}</body>
        </html>
    )
}
