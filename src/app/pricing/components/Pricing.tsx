"use client"

import { useState } from "react"
import HeroSection from "./hero"
import CalculatorSection from "./calculator"
import PricingTabs from "../components/ui/pricing-tab"
import PromoCard from "../components/ui/promocard"

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly")
  const [activeTab, setActiveTab] = useState<"subscription" | "services">("subscription")

  return (
    <div className="bg-white">
      <HeroSection />
      <CalculatorSection />
      <PricingTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        billingPeriod={billingPeriod}
        setBillingPeriod={setBillingPeriod}
      />
      <section className="py-16">
        <PromoCard />
      </section>
    </div>
  )
}
