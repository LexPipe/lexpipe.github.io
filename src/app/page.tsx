import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { HeroAngled } from "@/components/HeroAngled";
import {FeatureImageManyToMany, FeatureImageHubSpoke} from "@/components/FeatureImageLeft";
import ValueProposition from "@/components/ValueProposition";



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
