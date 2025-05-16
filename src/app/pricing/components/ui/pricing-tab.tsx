"use client"

import { motion } from "framer-motion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sparkles } from "lucide-react"
import PricingCard from "./pricing-cards"
import type { PricingPlan } from "../../../prepviaclients/types/pricing"
import { BillingToggle } from "../billing-toggle"
import { ServicePricing } from "./service"

interface PricingTabsProps {
  activeTab: "subscription" | "services"
  setActiveTab: (tab: "subscription" | "services") => void
  billingPeriod: "monthly" | "yearly"
  setBillingPeriod: (period: "monthly" | "yearly") => void
}

export default function PricingTabs({ activeTab, setActiveTab, billingPeriod, setBillingPeriod }: PricingTabsProps) {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  const handleTabChange = (value: string) => {
    setActiveTab(value as "subscription" | "services")
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-12">
            <Tabs value={activeTab} onValueChange={handleTabChange} className="w-fit">
              <TabsList className="bg-white p-0.5 rounded-full border border-gray-200 shadow-sm">
                <TabsTrigger
                  value="subscription"
                  className="rounded-full text-xs px-4 py-2 text-gray-700 font-medium 
                  data-[state=active]:bg-cyan-600/80 
                  data-[state=active]:text-white 
                  data-[state=active]:shadow-sm"
                >
                  Subscription Plans
                </TabsTrigger>
                <TabsTrigger
                  value="services"
                  className="rounded-full text-xs px-4 py-2 flex items-center gap-1.5 text-gray-700 font-medium 
                  data-[state=active]:bg-gray-100 
                  data-[state=active]:text-black 
                  data-[state=active]:shadow-sm"
                >
                  <Sparkles className="h-3.5 w-3.5 text-cyan-600" fill="currentColor" />
                  Service Pricing
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {activeTab === "subscription" && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4 font-inter">Subscription Plans</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Choose the perfect plan for your business needs with transparent pricing and no hidden fees.
                </p>

                <BillingToggle billingPeriod={billingPeriod} setBillingPeriod={setBillingPeriod} />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricingPlans.map((plan, index) => (
                  <motion.div
                    key={plan.name}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeIn}
                  >
                    <PricingCard plan={plan} billingPeriod={billingPeriod} />
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "services" && <ServicePricing />}
        </div>
      </div>
    </section>
  )
}

// Pricing plans data
const pricingPlans: PricingPlan[] = [
  {
    name: "Silver Plan (Standard)",
    description: "Monthly Fee: $70 (Amazon Sellers Only)",
    subDescription: "Standard Prep Pricing + 48hr Turnaround",
    icon: "Users",
    price: {
      monthly: 70,
      yearly: 70 * 12 * 0.8, // 20% discount for yearly
    },
    features: [
      { text: "Standard Prep Pricing", included: true },
      { text: "Guaranteed 48-hour Prep Turnaround", included: true },
      { text: "Full API Access (2D Workflow)", included: true },
    ],
  },
  {
    name: "Gold Plan",
    description: "Monthly Fee: $70 (Amazon Sellers Only)",
    subDescription: "1,000+ units/month + 5% discount",
    icon: "Sparkles",
    isPopular: true,
    iconBgClass: "bg-white",
    iconColorClass: "text-yellow-600",
    checkIconColorClass: "text-yellow-500",
    price: {
      monthly: 70,
      yearly: 70 * 12 * 0.8,
    },
    features: [
      { text: "Minimum 1,000 units/month", included: true },
      { text: "5% Discount on all Prep Services", included: true },
      { text: "Guaranteed 48-hour Prep Turnaround", included: true },
      { text: "Priority Customer Support", included: true },
      { text: "Full API Access (2D Workflow)", included: true },
    ],
  },
  {
    name: "Platinum Plan",
    description: "Monthly Fee: $70 (Amazon Sellers Only)",
    subDescription: "2,500+ units/month + 10% discount",
    icon: "Bell",
    iconBgClass: "bg-white",
    iconColorClass: "text-purple-600",
    checkIconColorClass: "text-purple-500",
    price: {
      monthly: 70,
      yearly: 70 * 12 * 0.8,
    },
    features: [
      { text: "Minimum 2,500 units/month", included: true },
      { text: "10% Discount on Prep (excl. add-ons)", included: true },
      { text: "Guaranteed 48-hour Prep Turnaround", included: true },
      { text: "Highest Priority Support (Dedicated Manager)", included: true },
      { text: "Priority Processing (First-in-line)", included: true },
      { text: "Full API Access (2D Workflow)", included: true },
    ],
  },
]
