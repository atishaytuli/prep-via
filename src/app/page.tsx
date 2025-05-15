import React from "react";

import Hero from "@/pages/Hero";
import IntegrationSection from "@/components/Integration";
import WhatWeDo from "@/pages/whatwedo";
import Competitive from "@/pages/Competitive";
import MarqueeDemo from "@/pages/MarqueePage";
import PromoCard from "@/components/PromoCard";
import TestimonialSection from "@/components/Testimonials";
import ContactForm from "@/pages/Contact-Form";
import FAQSection from "@/components/FAQ";
import Footer from "@/components/Footer";
// import PrepViaProfit from "@/pages/Profit";
// import PrepVia from "@/pages/Profits2";

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
      {/* <PrepViaProfit /> */}
      {/* <PrepVia /> */}
    </main>
  );
};

export default page;
