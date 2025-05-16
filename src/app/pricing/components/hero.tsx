"use client"

import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold text-gray-900 mb-6 font-inter"
          >
            Prep Via Pricing & Cost Calculation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 mb-8"
          >
            Clear, transparent pricing with no hidden fees. Choose the perfect plan and services for your business.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
