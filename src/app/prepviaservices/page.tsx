"use client";
import { useEffect, useState } from "react";

import Announcement from "@/components/Annoucment";
import Navbar from "@/components/Navbar";
import React from "react";
import FAQSection from "@/components/FAQ";
import Footer from "@/components/Footer";
import HeroSection from "./components/hero";
import MainServicesSection from "./components/mainservices";
import LogisticsStorageSection from "./components/logistics";
import OversizedItemSection from "./components/oversized";
import AddOnServicesSection from "./components/addon";
import CostCalculatorSection from "../pricing/components/calculator";
import CostCalculatorFree from "./components/calculator";

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
      <main>
        <HeroSection />
        <MainServicesSection />
        <LogisticsStorageSection />
        <OversizedItemSection />
        <AddOnServicesSection />
        <CostCalculatorFree />
        <CostCalculatorSection />
      </main>
      <FAQSection />
      <Footer />
    </>
  );
};

export default Profits;
