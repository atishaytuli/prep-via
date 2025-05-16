"use client"

import { motion } from "framer-motion"
import { Shield, Zap, BarChart, Clock } from "lucide-react"
import FeatureCard from "../components/ui/features-card"

export default function FeaturesSection() {
  const features = [
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Instant Cost Calculation",
      description:
        "Calculate accurate prep costs per unit, multipack, or entire shipments through our proprietary software.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Real-Time Inventory Management",
      description: "Full real-time visibility and control over your inventory with detailed analytics and reporting.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "2D Barcode Technology",
      description:
        "Rapid scanning and verification processes for Amazon Sellers, ensuring significantly faster inventory check-ins.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "48-hour Preparation Guarantee",
      description:
        "All inventory is prepared and ready to ship within 48 hours, keeping your business moving at top speed.",
    },
  ]

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

  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-inter text-gray-900 mb-4">Exclusive Client <span className="text-cyan-600">Features.</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Enjoy these powerful features when you become a PrepVia client.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeIn}
            >
              <FeatureCard icon={feature.icon} title={feature.title} description={feature.description} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
