"use client";

import { useEffect, useState } from "react";
import ClientHero from "../Client";
import MembershipCard from "../membership-card";
import PricingSection from "../Pricing";
import FeaturesSection from "../features";
import WhyChooseSection from "../benifit";
import Announcement from "@/components/Annoucment";
import Navbar from "@/components/Navbar";
import FAQSection from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function ClientPage() {
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
        <ClientHero />
        <MembershipCard />
        <PricingSection />
        <FeaturesSection />
        <WhyChooseSection />
      </main>
      <FAQSection />
      <Footer />
    </>
  );
}
