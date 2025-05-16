"use client";

import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  paddingClass: string;
}

const Navbar = ({ paddingClass }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

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
          <div className="hidden md:flex items-center">
            <ul className="flex space-x-8 font-medium font-poppins text-sm">
              <li className="text-gray-700 hover:text-black hover:scale-95 transition-all duration-200 cursor-pointer">
                <Link href="/prepviaclients">Clients</Link>
              </li>
              <li className="text-gray-700 hover:text-black hover:scale-95 transition-all duration-200 cursor-pointer">
                <Link href="/prepviaservices">Services</Link>
              </li>
              <li className="text-gray-700 hover:text-black hover:scale-95 transition-all duration-200 cursor-pointer">
                <Link href="/blogs">Blog</Link>
              </li>
              <li className="text-gray-700 hover:text-black hover:scale-95 transition-all duration-200 cursor-pointer">
                <Link href="/prepviaprofits">Profits</Link>
              </li>
              <li className="text-gray-700 hover:text-black hover:scale-95 transition-all duration-200 cursor-pointer">
                <Link href="/pricing">Pricing</Link>
              </li>
            </ul>
          </div>

          {/* Desktop Right Side */}
          <Link href="/contactus">
            <button className="hidden md:flex bg-[#00BCD4] text-white rounded-full px-4 py-2 items-center justify-between transition-colors duration-200 font-medium hover:bg-primary-cyan/70">
              <span className="mr-2">Contact Us</span>
              <div className="bg-white rounded-full p-1.5">
                <ArrowRight className="h-3.5 w-3.5 text-black" />
              </div>
            </button>
          </Link>

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
            <ul className="flex flex-col space-y-4 font-poppins">
              <li className="text-gray-700 hover:text-black transition-colors duration-200 py-2">
                <Link href="/prepviaclients">Clients</Link>
              </li>
              <li className="text-gray-700 hover:text-black transition-colors duration-200 py-2">
                <Link href="/prepviaservices">Services</Link>
              </li>
              <li className="text-gray-700 hover:text-black transition-colors duration-200 py-2">
                <Link href="/blogs">Blog</Link>
              </li>
              <li className="text-gray-700 hover:text-black transition-colors duration-200 py-2">
                <Link href="/prepviaprofits">Profits</Link>
              </li>
              <li className="text-gray-700 hover:text-black transition-colors duration-200 py-2">
                <Link href="/pricing">Pricing</Link>
              </li>
            </ul>
            <div className="mt-6">
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
