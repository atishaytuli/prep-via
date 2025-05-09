"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const logos = [
  { name: "Brigit", width: 100, src: "/amazon.png" },
  { name: "Blackhawk", width: 100, src: "/ebay.png" },
  { name: "Neo", width: 100, src: "/amazon.png" },
  { name: "Zoominfo", width: 100, src: "/ebay.png" }
]

export default function LogoScroll() {
  return (
    <div className="overflow-hidden w-full">
      <div className="flex items-center justify-center">
        <motion.div
          className="flex gap-12 md:gap-16"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div
              key={`logo-${index}`}
              className="flex-shrink-0 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={60}
                className="object-contain"
              />
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div
              key={`logo-dup-${index}`}
              className="flex-shrink-0 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
