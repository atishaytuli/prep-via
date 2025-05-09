import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What is Prepvia and what do you offer?",
    answer:
      "Prepvia is a tech-driven logistics and product prep partner for e-commerce sellers. We specialize in Amazon FBA and other marketplace fulfillment, handling everything from inspection to labeling and shipping. Our goal is to simplify your operations so you can focus on growing your business.",
  },
  {
    question: "Which marketplaces do you support?",
    answer:
      "While we specialize in Amazon FBA, we also support other marketplaces like Walmart, eBay, Etsy, and more. Our flexible prep services can be customized to fit your selling platform's requirements. No matter where you sell, we’ve got you covered with reliable service.",
  },
  {
    question: "Do you provide real-time tracking and updates?",
    answer:
      "Yes! We use a tech-driven system that keeps you updated on every step of the prep process. You'll have access to a dashboard where you can track your inventory in real time. Transparency and control are at the core of our service.",
  },
  {
    question: "Is there a minimum order size?",
    answer:
      "No minimums! Whether you're just starting out or scaling up, we work with businesses of all sizes. We're here to grow with you at your pace. Every seller matters to us, big or small.",
  },
  {
    question: "How do I get started with Prepvia?",
    answer:
      "It's easy just reach out to us through our contact page or sign up for an account. We'll walk you through the onboarding process and get you set up fast. Our team is ready to support you every step of the way.",
  },
];

export default function FAQSection() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <p className="sub-heading">FAQs</p>
      <h2 className="heading">
        Common Questions
      </h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqData.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index + 1}`}
            className="group border border-gray-200 rounded-2xl transition-all duration-300 overflow-hidden bg-gray-50 shadow-sm data-[state=open]:rounded-3xl"
          >
            <AccordionTrigger className="px-6 py-4 flex items-center justify-between w-full hover:no-underline font-roboto">
              <span className="text-left font-medium text-base">
                {faq.question}
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 pt-2 text-gray-600 transition-all duration-300">
              <div className="prose max-w-none">{faq.answer}</div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
