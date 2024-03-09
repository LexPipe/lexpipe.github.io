import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { HeroAngled } from "@/components/HeroAngled";
import {FeatureImageManyToMany, FeatureImageHubSpoke, FeatureImageProps} from "@/components/FeatureImageLeft";
import diagramManyToMany from "@/images/diagram-many_to_many.png";
import {CloudArrowUpIcon, LockClosedIcon, ServerIcon} from "@heroicons/react/20/solid";
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
