import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { HeroAngled } from "@/components/HeroAngled";
import {FeatureImageManyToMany, FeatureImageHubSpoke} from "@/components/FeatureImageLeft";
import ValueProposition from "@/components/ValueProposition";
import Logo1000 from "@/images/LexPipe-White-Sq-1000-Pipes.png";
import type {Metadata} from "next";

function convertToRelative(url: string): string {
    // Split the URL by "/"
    const parts = url.split("/");

    // Remove the scheme and domain parts. The first part is empty due to the split at "http://",
    // and the next two parts are the domain. Therefore, we start from the fourth part (index 3).
    const relativePath = parts.slice(3).join("/");

    // Return the relative path
    return "/" + relativePath;
}
export const metadata: Metadata = {
    title: {
        template: 'LexPipe',
        default: 'LexPipe - Legal workflow automation for law firms',
    },
    // Add the logo to the openGraph
    openGraph : {
        images: [{
            url : convertToRelative(Logo1000.src),
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
