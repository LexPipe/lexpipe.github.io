// pages/_app.tsx
import '@/styles/tailwind.css';
import { AppProps } from 'next/app';
import { inter, lexend } from '@/fonts';
import {GoogleTagManager} from "@next/third-parties/google";

export default function LexPipeSite({ Component, pageProps }: AppProps) {
  return (<>
      <style jsx global>{`
        body {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <GoogleTagManager gtmId="GTM-PX3WB949" />
      <Component {...pageProps} /></>)
  ;
};
