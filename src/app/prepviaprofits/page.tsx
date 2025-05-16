"use client";
import { useEffect, useState } from "react";

import Announcement from "@/components/Annoucment";
import Navbar from "@/components/Navbar";
import React from "react";
import PrepViaProfit from "./components/Profit";
import FAQSection from "@/components/FAQ";
import Footer from "@/components/Footer";

const profits = () => {
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
      <PrepViaProfit />
      <FAQSection />
      <Footer />
    </>
  );
};

export default profits;
