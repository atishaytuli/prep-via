import React from "react";
import CardLayout from "@/pages/Technology";
import Hero from "@/pages/Hero";
import Footer from "@/components/Footer";
// import Annoucment from "@/components/Annoucment";
import FAQSection from "@/components/FAQ";
import WhatWeDo from "@/pages/whatwedo";
import About from "@/pages/About";
import { TestimonialSection } from "@/components/Testimonials";
import Wedo from "@/pages/whowesupport";
import Competitive from "@/pages/Competitive";

const page = () => {
  return (
    <main>
      {/* <Annoucment /> */}
      <Hero />
      <About />
      <WhatWeDo />
      <Competitive />
      <CardLayout/>
      <Wedo />
      <TestimonialSection />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default page;
