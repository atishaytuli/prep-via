"use client"

import { TabButtons } from "@/components/Tabbutton"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="py-20 mt-16 md:mt-32">
      <div className="container flex flex-col items-center mx-auto px-4">
               <TabButtons title="Pricing" title2="" />
        <div className="max-w-4xl mx-auto text-center mt-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-semibold text-gray-900 mb-6 font-inter"
          >
            PrepVia Cost <span className="text-cyan-600 font-light font-serif italic">Calculation.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-gray-600 mb-8"
          >
            Clear, transparent pricing with no hidden fees. Choose the perfect plan and services for your business.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
