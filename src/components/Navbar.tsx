"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Menu, X } from "lucide-react"
import Image from "next/image"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "py-2" : "py-6"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav
          className={`flex items-center justify-between w-full rounded-full px-4 py-2 bg-white shadow-sm transition-all duration-300`}
        >
          {/* Logo */}
          <div className="flex-shrink-0 h-10 w-32 relative">
            <Image alt="logo" src="/PREPVIA__Logo Electric Cyan.jpg" fill className="object-contain" priority />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <ul className="flex space-x-8 font-medium text-sm">
              <li className="text-gray-700 hover:text-black hover:scale-95 transition-all duration-200 cursor-pointer">About</li>
              <li className="text-gray-700 hover:text-black hover:scale-95 transition-all duration-200 cursor-pointer">Services</li>
              <li className="text-gray-700 hover:text-black hover:scale-95 transition-all duration-200 cursor-pointer">Blog</li>
              <li className="text-gray-700 hover:text-black hover:scale-95 transition-all duration-200 cursor-pointer">Pricing</li>
              <li className="text-gray-700 hover:text-black hover:scale-95 transition-all duration-200 cursor-pointer">Support</li>
            </ul>
          </div>

          {/* Desktop Right Side */}
          <button className="hidden md:flex bg-[#00BCD4] text-white rounded-full px-4 py-2 items-center justify-between transition-colors duration-200 font-medium hover:bg-primary-cyan/70">
            <span className="mr-2">Contact Us</span>
            <div className="bg-white rounded-full p-1.5">
              <ArrowRight className="h-3.5 w-3.5 text-black" />
            </div>
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-full bg-black p-2 text-white transition-transform duration-200 hover:scale-105"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mobile menu dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white rounded-2xl mt-1 pt-4 pb-6 px-6 shadow-md animate-in fade-in fade-out transition-all duration-300">
            <ul className="flex flex-col space-y-4">
              <li className="text-gray-700 hover:text-black transition-colors duration-200 py-2">About</li>
              <li className="text-gray-700 hover:text-black transition-colors duration-200 py-2">Services</li>
              <li className="text-gray-700 hover:text-black transition-colors duration-200 py-2">Blog</li>
              <li className="text-gray-700 hover:text-black transition-colors duration-200 py-2">Pricing</li>
              <li className="text-gray-700 hover:text-black transition-colors duration-200 py-2">Support</li>
            </ul>
            <div className="mt-6">
              <button className="bg-primary-cyan/50 text-black rounded-full w-full px-6 py-3 flex items-center justify-between font-medium hover:bg-primary-cyan/70 transition-colors duration-200">
                <span>Contact Us</span>
                <div className="bg-black rounded-full p-1.5">
                  <ArrowRight className="h-3.5 w-3.5 text-white" />
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
