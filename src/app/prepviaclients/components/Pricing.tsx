"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PricingCard from "../components/ui/pricingcard";
import type { PricingPlan } from "./../types/pricing";
import { TabButtons } from "@/components/Tabbutton";

export default function PricingSection() {
  const [billingPeriod] = useState<"monthly" | "yearly">("monthly");

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
  };

  return (
    <section id="pricing" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center flex flex-col items-center mb-16">
          <h2 className="text-3xl font-bold font-inter text-gray-900 mb-4">
            Subscription Plans
          </h2>
          <p className="text-gray-600 max-w-2xl mb-6 mx-auto">
            Choose the perfect plan for your business needs with transparent
            pricing and no hidden fees.
          </p>

          <TabButtons title="Monthly" title2="" />
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

        <div className="text-center mt-16 flex justify-center items-center max-w-2xl mx-auto">
          <p className="w-1/2 text-gray-500 mb-6 text-base text-left">
            Need a custom solution? Contact our sales team for a tailored
            package.
          </p>
          <button className="bg-cyan-600 text-white rounded-full px-4 py-2 flex items-center justify-between transition-all duration-200 font-medium hover:scale-95 ">
            <span className="mr-2">Contact Sales</span>
            <div className="bg-white rounded-full p-1.5">
              <ArrowRight className="h-3.5 w-3.5 text-black" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

// Pricing plans data
const pricingPlans: PricingPlan[] = [
  {
    name: "Standard Plan",
    description: "Monthly Fee: $70 (Amazon Sellers Only)",
    subDescription: "Standard Prep Pricing + 48hr Turnaround",
    icon: "Users",
    price: {
      monthly: 50,
      yearly: 50 * 12 * 0.8,
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
    subDescription: "+ 5% discount From requirements 1,000+ units/month",
    icon: "Sparkles",
    isPopular: true,
    iconBgClass: "bg-yellow-50",
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
    name: "Big Game Plan",
    description: "Full Customize Plan - No membership fee",
    subDescription: "5000+ units/month + 10% discount",
    icon: "Bell",
    isbig: true,
    iconBgClass: "bg-purple-50",
    iconColorClass: "text-purple-600",
    checkIconColorClass: "text-purple-500",
    price: {
      monthly: "Custom Plan",
      yearly: 0,
    },
    features: [
      { text: "Minimum 5000 units/month", included: true },
      { text: "10% Discount on Prep (excl. add-ons)", included: true },
      { text: "Guaranteed 48-hour Prep Turnaround", included: true },
      { text: "Highest Priority Support (Dedicated Manager)", included: true },
      { text: "Priority Processing (First-in-line)", included: true },
      { text: "Full API Access (2D Workflow)", included: true },
    ],
  },
];
