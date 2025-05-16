"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PricingCard from "../components/ui/pricingcard";
import type { PricingPlan } from "./../types/pricing";
import { TabButtons } from "@/components/Tabbutton";

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
    "monthly"
  );

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

           <TabButtons title="Month" title2="Yearly" />
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

        <div className="text-center mt-12">
          <p className="text-gray-500 mb-6 text-lg font-semibold">
            Need a custom solution? Contact our sales team for a tailored
            package.
          </p>
          <Link
            href="/contact"
            className="text-white bg-cyan-600 rounded-full py-3 px-6 font-medium inline-flex items-center"
          >
            Contact Sales <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
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
    name: "Platinum Plan",
    description: "Monthly Fee: $70 (Amazon Sellers Only)",
    subDescription: "2,500+ units/month + 10% discount",
    icon: "Bell",
    iconBgClass: "bg-purple-50",
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
];
