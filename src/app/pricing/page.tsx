"use client";
import { useEffect, useState } from "react";

import Announcement from "@/components/Annoucment";
import Navbar from "@/components/Navbar";
import React from "react";
import FAQSection from "@/components/FAQ";
import Footer from "@/components/Footer";
import TestimonialSection from "@/components/Testimonials";
import PricingPage from "./components/Pricing";

const Profits = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const paddingClass = isScrolled ? "py-4" : "py-12";
  return (
    <>
      <Announcement />
      <Navbar paddingClass={paddingClass} />
      <PricingPage />
      <TestimonialSection />
      <FAQSection />
      <Footer />
    </>
  );
};

export default Profits;
