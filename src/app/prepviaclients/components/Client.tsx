"use client"
import MembershipCard from "./membership-card"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import { TabButtons } from "@/components/Tabbutton"

export default function ClientHero() {
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const paddingClass = isScrolled ? "py-4" : "py-12"
  return (
    <section className="relative py-16 bg-gradient-to-b from-cyan-50 via-white to-white overflow-hidden ">
      <Navbar paddingClass={paddingClass} />
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5 pointer-events-none" />
      <div className="container mx-auto px-4 mt-24 flex flex-col items-center justify-center">
        <TabButtons title="Become Clients" title2="" />
        <div className="max-w-4xl mx-auto text-center mt-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 font-inter">
              Become a <span className="italic font-light text-cyan-600 relative font-serif">PrepVia</span> Client
            </h1>
            <p className="text-base text-gray-600 max-w-3xl mx-auto mb-10">
              Unlock advanced logistics solutions, powerful technology tools, and unmatched operational efficiency when
              you partner with PrepVia.
            </p>
          </motion.div>
        </div>
        <MembershipCard />
      </div>
    </section>
  )
}
