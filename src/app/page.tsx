import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { HeroAngled } from "@/components/HeroAngled";
import {FeatureImageManyToMany, FeatureImageHubSpoke} from "@/components/FeatureImageLeft";
import ValueProposition from "@/components/ValueProposition";
import Logo1000 from "@/images/LexPipe-White-Sq-1000-Pipes.png";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: {
        template: 'LexPipe',
        default: 'LexPipe - Legal workflow automation for law firms',
    },
    // Add the logo to the openGraph
    openGraph : {
        images: [{
            url : Logo1000.src,
            width : Logo1000.width,
            height : Logo1000.height,
        }],
    },
    description:
        'LexPipe transforms the way law firms and corporates use legal information to develop new business and manage matters.',
}


export default function Home() {
  return (
    <>
      <Header />
        <main>
            <HeroAngled/>
            <FeatureImageHubSpoke/>
            <FeatureImageManyToMany/>
            <ValueProposition/>
            <CallToAction/>

        </main>
        <Footer/>
    </>
  )
}
