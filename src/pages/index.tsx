// /app/privacy.tsx
import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { HeroAngled } from "@/components/HeroAngled";
import {FeatureImageManyToMany, FeatureImageHubSpoke} from "@/components/FeatureImageLeft";
import ValueProposition from "@/components/ValueProposition";
import Head from "next/head";
import {metadata} from "./_app"

export default function Home() {
  return (
    <>
        <Head><title>{metadata.title.default}</title></Head>
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
