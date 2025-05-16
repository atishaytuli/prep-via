"use client"
import { useEffect, useState } from "react"
import ContactSection from "./components/contact"
import PromoCard from "./components/promocard"
import Announcement from "@/components/Annoucment"
import Navbar from "@/components/Navbar"
import FAQSection from "@/components/FAQ"
import Footer from "@/components/Footer"

export default function ContactPage() {
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
    <>
      <Announcement />
      <Navbar paddingClass={paddingClass} />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-8 md:py-16">
        <div className="max-w-4xl mx-auto mt-16 sm:mt-24 md:mt-32">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-inter mb-4 sm:mb-6">
              We're Here to Help!
            </h1>
            <p className="text-gray-600 sm:text-lg max-w-3xl mx-auto">
              Reach out to our friendly, expert team for any questions, assistance, or a custom quote tailored
              specifically to your needs. Our dedicated support team is ready to help you optimize your logistics and
              accelerate your e-commerce growth.
            </p>
          </div>
        </div>
        <ContactSection />
        <PromoCard />
      </main>
      <FAQSection />
      <Footer />
    </>
  )
}
