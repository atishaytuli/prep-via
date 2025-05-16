"use client"
import { useEffect, useState } from "react"
import type React from "react"

import { motion } from "framer-motion"
import Announcement from "../../components/Annoucment"
import Navbar from "@/components/Navbar"

export default function ComingSoonPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const paddingClass = isScrolled ? "py-4" : "py-12"

  // Floating animation variants
  const floatingAnimation = {
    y: [0, -15, 0],
    rotate: [0, 2, 0, -2, 0],
    transition: {
      y: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
      rotate: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  // Cloud animation variants
  const cloudVariants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 0.8, x: 0, transition: { duration: 1.5 } },
  }

  const cloudVariants2 = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 0.6, x: 0, transition: { duration: 1.5, delay: 0.3 } },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white overflow-hidden">
      <Announcement />
      <Navbar paddingClass={paddingClass} />

      <section className="relative h-[calc(100vh-80px)] flex flex-col items-center justify-center px-4">
        {/* Background elements */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-16 bg-white/30 rounded-full blur-xl"
          initial="initial"
          animate="animate"
          variants={cloudVariants}
        />

        <motion.div
          className="absolute bottom-40 right-10 w-40 h-20 bg-white/40 rounded-full blur-xl"
          initial="initial"
          animate="animate"
          variants={cloudVariants2}
        />

        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center w-full max-w-3xl mt-8 p-8 text-center">
          <div className="relative mb-8">
            <motion.div
              className="absolute -inset-1 opacity-20 blur-md bg-cyan-200 rounded-full"
              animate={{
                scale: [1, 1.05, 1],
                transition: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              }}
            />
            <motion.img
              src="./flying.png"
              width={280}
              alt="Coming Soon"
              className="relative z-10 drop-shadow-xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{
                ...floatingAnimation,
                opacity: 1,
              }}
            />

            {/* Shadow that moves slightly differently than the image */}
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-gray-400/20 rounded-full blur-md"
              animate={{
                width: ["40%", "45%", "40%"],
                opacity: [0.2, 0.15, 0.2],
                transition: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.2 },
              }}
            />
          </div>

          {/* Text content with animations */}
          <motion.h1
            className="text-4xl md:text-6xl font-semibold text-gray-800 mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Coming <span className="text-cyan-600 italic font-light font-serif">Soon.</span>
          </motion.h1>

          <motion.p
            className="text-base text-gray-600 mb-10 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            PrepVia Blogs are on the way! {"We're"} crafting insightful content to help you optimize your prep and
            fulfillment processes.
          </motion.p>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/4 w-2 h-2 bg-cyan-400 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5],
            transition: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
        />
        <motion.div
          className="absolute top-1/4 right-1/4 w-3 h-3 bg-cyan-400 rounded-full"
          animate={{
            y: [0, -30, 0],
            opacity: [0.5, 1, 0.5],
            transition: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 },
          }}
        />
        <motion.div
          className="absolute top-1/3 left-1/3 w-2 h-2 bg-blue-400 rounded-full"
          animate={{
            y: [0, -15, 0],
            opacity: [0.5, 1, 0.5],
            transition: { duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 },
          }}
        />
      </section>
    </div>
  )
}
