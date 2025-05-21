"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Menu, Sparkles, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  paddingClass: string;
}

const Navbar = ({ paddingClass }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${paddingClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav
          className={`flex items-center justify-between w-full rounded-full px-4 py-2 bg-white shadow-sm transition-all duration-300`}
        >
          {/* Logo */}
          <div className="flex-shrink-0 h-10 w-32 relative">
            <Link href="/">
              <Image
                alt="logo"
                src="/PREPVIA__Logo Electric Cyan.jpg"
                fill
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <ul className="flex space-x-10 font-medium font-poppins text-sm">
              <li className="p-[1px] rounded-full bg-gradient-to-r from-[#E5B808] via-[#b4b4ff] to-cyan-400 hover:scale-95 transition-all duration-300">
                <div
                  className={`group relative overflow-hidden px-3 py-1.5 font-semibold transition-all duration-200 cursor-pointer rounded-full w-full h-full ${
                    isActive("/prepviaprofits") ? "bg-blue-50" : "bg-[#fff8dc]"
                  }`}
                >
                  {/* Hover shimmer animation */}
                  <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-amber-500 opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
                  <span className="absolute right-0 top-0 h-full w-12 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40 pointer-events-none"></span>

                  <Link
                    href="/prepviaprofits"
                    className="inline-flex items-center text-gray-700 space-x-1 z-10 relative"
                  >
                    <span className="z-10">PrepVia Profits</span>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 10,
                        ease: "linear",
                      }}
                      className="h-3 w-3 text-cyan-500 align-super z-10"
                    >
                      <Sparkles
                        className="h-3 w-3 text-[#E5B808] align-super"
                        fill="currentColor"
                      />
                    </motion.div>
                  </Link>
                </div>
              </li>

              <li
                className={`${
                  isActive("/prepviaclients") ? "bg-cyan-600/10 rounded-full" : ""
                } px-3 py-1.5 text-gray-700 hover:text-black hover:scale-95 transition-all duration-200 cursor-pointer`}
              >
                <Link href="/prepviaclients">Clients</Link>
              </li>
              <li
                className={`${
                  isActive("/prepviaservices") ? "bg-cyan-600/10 rounded-full" : ""
                } px-3 py-1.5 text-gray-700 hover:text-black hover:scale-95 transition-all duration-200 cursor-pointer`}
              >
                <Link href="/prepviaservices">Services</Link>
              </li>
              <li
                className={`${
                  isActive("/blogs") ? "bg-cyan-600/10 rounded-full" : ""
                } px-3 py-1.5 text-gray-700 hover:text-black hover:scale-95 transition-all duration-200 cursor-pointer`}
              >
                <Link href="/blogs">Blog</Link>
              </li>
              <li
                className={`${
                  isActive("/pricing") ? "bg-cyan-600/10 rounded-full" : ""
                } px-3 py-1.5 text-gray-700 hover:text-black hover:scale-95 transition-all duration-200 cursor-pointer`}
              >
                <Link href="/pricing">Pricing</Link>
              </li>
            </ul>
          </div>

          {/* Right Side - Contact Button and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Contact Us Button - Hidden on small screens, visible on medium and up */}
            <Link href="/contactus" className="hidden md:block">
              <button className="bg-[#00BCD4] text-white rounded-full px-4 py-2 flex items-center justify-between hover:scale-95 transition-all duration-200  font-medium">
                <span className="mr-2">Contact Us</span>
                <div className="bg-white rounded-full p-1.5">
                  <ArrowRight className="h-3.5 w-3.5 text-black" />
                </div>
              </button>
            </Link>

            {/* Mobile menu button - Visible on all screens below large */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden rounded-full bg-black p-2 text-white transition-transform duration-200 hover:scale-105"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile menu dropdown - Visible on all screens below large when open */}
        {isOpen && (
          <div className="lg:hidden bg-white rounded-2xl mt-1 pt-4 pb-6 px-6 shadow-md animate-in fade-in fade-out transition-all duration-300">
            <ul className="flex flex-col space-y-4 font-poppins">
              <li
                className={`group relative overflow-hidden px-3 py-1.5 font-semibold transition-all duration-200 cursor-pointer ${
                  isActive("/prepviaprofits")
                    ? "bg-cyan-600/10 rounded-full border border-cyan-300"
                    : "bg-[#e5b9083c] rounded-full border border-[#E5B808]"
                }`}
              >
                <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-amber-500 opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
                {/* Hover shimmer animation */}
                <span className="absolute right-0 top-0 h-full w-12 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40 pointer-events-none"></span>

                <Link
                  href="/prepviaprofits"
                  className="inline-flex items-center text-gray-700 space-x-1 z-10 relative"
                >
                  <span className="z-10">PrepVia Profits</span>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 10,
                      ease: "linear",
                    }}
                    className="h-3 w-3 text-cyan-500 align-super z-10"
                  >
                    <Sparkles
                      className="h-3 w-3 text-[#E5B808] align-super"
                      fill="currentColor"
                    />
                  </motion.div>
                </Link>
              </li>
              <li
                className={`${
                  isActive("/prepviaclients") ? "bg-cyan-600/10 rounded-full" : ""
                } px-3 py-2 text-gray-700 hover:text-black transition-colors duration-200`}
              >
                <Link href="/prepviaclients">Clients</Link>
              </li>
              <li
                className={`${
                  isActive("/prepviaservices") ? "bg-cyan-600/10 rounded-full" : ""
                } px-3 py-2 text-gray-700 hover:text-black transition-colors duration-200`}
              >
                <Link href="/prepviaservices">Services</Link>
              </li>
              <li
                className={`${
                  isActive("/blogs") ? "bg-cyan-600/10 rounded-full" : ""
                } px-3 py-2 text-gray-700 hover:text-black transition-colors duration-200`}
              >
                <Link href="/blogs">Blog</Link>
              </li>
              <li
                className={`${
                  isActive("/pricing") ? "bg-cyan-600/10 rounded-full" : ""
                } px-3 py-2 text-gray-700 hover:text-black transition-colors duration-200`}
              >
                <Link href="/pricing">Pricing</Link>
              </li>
            </ul>

            {/* Only show Contact Us button in mobile menu on small screens */}
            <div className="mt-6 md:hidden">
              <Link href="/contactus">
                <button className="bg-primary-cyan/50 text-black rounded-full w-full px-6 py-3 flex items-center justify-between font-medium hover:bg-primary-cyan/70 transition-colors duration-200">
                  <span>Contact Us</span>
                  <div className="bg-black rounded-full p-1.5">
                    <ArrowRight className="h-3.5 w-3.5 text-white" />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
