"use server"

import {HeroSection} from "@/components/sections/HeroSection"

import {FranchiseSection} from "@/components/sections/FranchiseSection"
import {DarkKitchenSection} from "@/components/sections/DarkKitchenSection"
import {IslandKitchenSection} from "@/components/sections/DarkKitchenSection"
import {FranchiseSupportSection} from "@/components/sections/FranchiseSupportSection"
import {SushiGallery} from "@/components/sections/GridGallerySection";
import {ContactBarSection} from "@/components/sections/ContactBarSection";
import FranchiseBannerSection from "@/components/sections/FranchiseBannerSection"
import { FAQSection } from "@/components/sections/FAQSection"

 async function Page() {
  return (
  <div className="relative overflow-hidden h-auto">
      <HeroSection/>
      <FranchiseBannerSection/>
      <FranchiseSection/>
      {/* <img src="/seperator.png" alt="Section Separator" className="mx-auto" /> */}
      <DarkKitchenSection/>
      <img src="/seperator.png" alt="Section Separator" className="mx-auto" />
      <IslandKitchenSection/>
      <FranchiseSupportSection/>
      <FAQSection/>
      <SushiGallery/>
      <img src="/seperator.png" alt="Section Separator" className="mx-auto" />
      <ContactBarSection/>
    </div>  
  )
}

export default Page;