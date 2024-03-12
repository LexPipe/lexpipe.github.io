import '@/styles/tailwind.css';
import { AppProps } from 'next/app';
import {RootLayout} from '@/components/RootLayout';
import { inter, lexend } from '@/fonts';

export default function LexPipeSite({ Component, pageProps }: AppProps) {
  return (<>
      <style jsx global>{`
        body {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} /></>)
  ;
};
