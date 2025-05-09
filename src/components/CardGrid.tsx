"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Package, Archive, Barcode, Box } from "lucide-react";

const cardsData = [
  {
    id: 1,
    title: "Receiving & Inspection",
    description:
      "We inspect and check in your inventory to ensure it matches order specs. Every shipment is verified for accuracy before storage.",
    icon: Box,
    accentColor: "bg-amber-50 text-amber-600",
    iconBg: "bg-amber-100",
  },
  {
    id: 2,
    title: "Barcode Scanning & Amazon Labeling",
    description:
      "Products are labeled in full compliance with Amazon standards. We guarantee proper placement and scannability for fast processing.",
    icon: Barcode,
    accentColor: "bg-emerald-50 text-emerald-600",
    iconBg: "bg-emerald-100",
  },
  {
    id: 3,
    title: "Short-Term Storage",
    description:
      "Secure, organized inventory management until fulfillment. Our facility keeps your products safe, clean, and ready for dispatch.",
    icon: Archive,
    accentColor: "bg-sky-50 text-sky-600",
    iconBg: "bg-sky-100",
  },
  {
    id: 4,
    title: "Order Prep & Amazon Pickup Coordination",
    description:
      "We prepare and schedule shipments to Amazon FCs with speed and accuracy. Every order is packed with care and tracked until pickup.",
    icon: Package,
    accentColor: "bg-purple-100 text-purple-600",
    iconBg: "bg-purple-100",
  },
];

const CardGrid = () => {
  return (
    <section className="container mx-auto py-16 px-4">
      <p className="text-center max-w-4xl mx-auto text-gray-600 mb-12">
        Whether {"you're"} just getting started or managing multiple SKUs across
        global markets, PrepVia is designed to serve.
      </p>

      <div className="relative max-w-7xl mx-auto pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardsData.map((card, index) => {
            const IconComponent = card.icon;
            const isLast = index === cardsData.length - 1;

            return (
              <div key={card.id} className="relative flex">
                <div className="bg-white rounded-xl p-8 shadow-md flex-grow">
                  <div className="flex flex-col items-start justify-between">
                    <div
                      className={cn("p-3 rounded-full w-fit mb-4", card.iconBg)}
                    >
                      <IconComponent
                        className={cn("h-6 w-6", card.accentColor)}
                      />
                    </div>
                    <h3 className="text-gray-800 text-sm font-medium uppercase tracking-wider mb-3">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mt-6">
                      {card.description}
                    </p>
                  </div>
                </div>

                {!isLast && (
                  <div className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 z-10 hidden md:block">
                    <div className="bg-sky-500/80 rounded-full p-2 shadow-sm">
                      <ArrowRight className="text-white h-4 w-4" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CardGrid;
