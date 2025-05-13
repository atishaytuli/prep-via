import React from "react";
// import CardLayout from "@/pages/Technology";
import Hero from "@/pages/Hero";
import Footer from "@/components/Footer";
// import Annoucment from "@/components/Annoucment";
import FAQSection from "@/components/FAQ";
import WhatWeDo from "@/pages/whatwedo";
// import About from "@/pages/About";
import { TestimonialSection } from "@/components/Testimonials";
// import Wedo from "@/pages/whowesupport";
import Competitive from "@/pages/Competitive";
import IntegrationSection from "@/components/Integration";
import MarqueeDemo from "@/pages/MarqueePage";
import ContactForm from "@/pages/Contact-Form";
import PromoCard from "@/components/PromoCard";

const page = () => {
  return (
    <main>
      <Hero />
      <IntegrationSection />
      <WhatWeDo />
      <Competitive />
      <MarqueeDemo />
      <PromoCard />
      <TestimonialSection />
      <ContactForm />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default page;
