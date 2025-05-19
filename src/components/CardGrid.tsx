"use client"

import { cn } from "@/lib/utils"
import { type FC, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface CardData {
  id: number
  imageUrl: string
  alt: string
  title: string
  description: string
}

const cardsData: CardData[] = [
  {
    id: 1,
    imageUrl: "./20250514_2151_Warehouse Parcel Scanning_simple_compose_01jv94dmw1fjyvsqsk5xdc99m9.png",
    alt: "Warehouse inspection process",
    title: "Receiving & Inspection",
    description:
      "We inspect and check in your inventory to ensure it matches order specs. Every shipment is verified for accuracy before storage.",
  },
  {
    id: 2,
    imageUrl: "./20250514_2145_Barcode Scanning Parcel_simple_compose_01jv94494vfg68qbt3z2w87h86.png",
    alt: "Labeling station",
    title: "Barcode Scanning & Amazon Labeling",
    description:
      "Products are labeled in full compliance with Amazon standards. We guarantee proper placement and scannability for fast processing.",
  },
  {
    id: 3,
    imageUrl: "./20250514_2145_Barcode Scanning Parcel_simple_compose_01jv94494wfb69ket9wzdx6qxv.png",
    alt: "Storage facility",
    title: "Short-Term Storage",
    description:
      "Secure, organized inventory management until fulfillment. Our facility keeps your products safe, clean, and ready for dispatch.",
  },
  {
    id: 4,
    imageUrl: "./20250514_2208_Warehouse Parcel Coordination_simple_compose_01jv95dy48ee6sg2rpbpy9tgx2.png",
    alt: "Amazon pickup coordination",
    title: "Order Prep & Amazon Pickup Coordination",
    description:
      "We prepare and schedule shipments to Amazon FCs with speed and accuracy. Every order is packed with care and tracked until pickup.",
  },
]

const CardGrid: FC = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  }

  // Content animation variants
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  }

  // Image animation variants
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="container mx-auto py-16" ref={sectionRef}>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cardsData.map((card, index) => (
            <motion.div
              key={card.id}
              className={cn(
                "overflow-hidden gap-2 flex flex-col md:flex-row",
                card.id > 2 ? "md:flex-row-reverse" : "",
              )}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={index} // Pass the index for staggered animations
            >
              {/* Image Section */}
              <motion.div className="md:w-2/5 h-64 md:h-auto relative" variants={imageVariants}>
                <img
                  src={card.imageUrl || "/placeholder.svg"}
                  alt={card.alt}
                  className="w-full h-full object-cover rounded-lg"
                />
              </motion.div>

              {/* Content Section */}
              <motion.div
                className={cn(
                  "md:w-3/5 min-h-[375px] p-6 flex flex-col justify-between border rounded-xl shadow-inner bg-gray-50",
                )}
                variants={contentVariants}
              >
                <h3 className={cn("text-4xl font-medium text-gray-900")}>{card.title}</h3>
                <div className="flex-1" />

                <p className={cn("text-sm text-gray-600")}>{card.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CardGrid
