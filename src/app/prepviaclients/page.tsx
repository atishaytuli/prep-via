"use client"

import ClientHero from "./components/Client"
import PricingSection from "./components/Pricing"
import FeaturesSection from "./components/features"
import WhyChooseSection from "./components/benifit"
import Announcement from "@/components/Annoucment"
import FAQSection from "@/components/FAQ"
import Footer from "@/components/Footer"

export default function ClientPage() {

  return (
    <>
      <Announcement />
      <main>
        <ClientHero />
        <PricingSection />
        <FeaturesSection />
        <WhyChooseSection />
      </main>
      <FAQSection />
      <Footer />
    </>
  )
}
