"use client";

import React, { useRef } from "react";
import { Crown, Zap, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const Competitive = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: <Crown className="h-5 w-5" />,
      title: "Speed Through Automation",
      description:
        "Our proprietary labeling machines (launching soon) increase labeling speed by 800% compared to manual processes—setting a new industry standard.",
      color: "text-primary-cyan",
      bgColor: "bg-blue-100",
      lightBgColor: "bg-blue-100",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Strategic Miami Location",
      description:
        "Close proximity to the Port of Miami, Homestead, and other key industrial zones enables fast, cost-effective shipping.",
      color: "text-primary-cyan",
      bgColor: "bg-blue-100",
      lightBgColor: "bg-blue-100",
    },
    {
      icon: <Settings className="h-5 w-5" />,
      title: "Amazon FBA Experts",
      description:
        "We stay current on all FBA requirements so you don't have to. Avoid compliance issues and focus on scaling your business.",
      color: "text-primary-cyan",
      bgColor: "bg-blue-100",
      lightBgColor: "bg-blue-100",
    },
    {
      icon: <Settings className="h-5 w-5" />,
      title: "Transparent, Scalable Solutions",
      description:
        "Whether you're shipping 50 units or 5,000, our pricing and processes scale with you—no hidden fees or surprises.",
      color: "text-primary-cyan",
      bgColor: "bg-blue-100",
      lightBgColor: "bg-blue-100",
    },
    {
      icon: <Settings className="h-5 w-5" />,
      title: "White-Glove Support",
      description:
        "Dedicated account support, flexible plans, and real-time updates (with client portal access in development.",
      color: "text-primary-cyan",
      bgColor: "bg-blue-100",
      lightBgColor: "bg-blue-100",
    },
        {
      icon: <Settings className="h-5 w-5" />,
      title: "Transparent, Scalable Solutions",
      description:
        "Whether you're shipping 50 units or 5,000, our pricing and processes scale with you—no hidden fees or surprises.",
      color: "text-primary-cyan",
      bgColor: "bg-blue-100",
      lightBgColor: "bg-blue-100",
    },
        {
      icon: <Crown className="h-5 w-5" />,
      title: "Speed Through Automation",
      description:
        "Our proprietary labeling machines (launching soon) increase labeling speed by 800% compared to manual processes—setting a new industry standard.",
      color: "text-primary-cyan",
      bgColor: "bg-blue-100",
      lightBgColor: "bg-blue-100",
    },
  ];

  return (
    <section ref={sectionRef} className="relative min-h-screen py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left column - Fixed */}
            
            <div className="flex flex-col justify-center lg:sticky lg:top-24 h-fit">
                        <div className="flex space-x-4 pt-8 mb-8">
            <button
              className= "px-4 py-2 rounded-full bg-primary-cyan/40 text-sm font-medium transition-colors flex items-center"
            >
              <span className="w-4 h-4 mr-2 text-black">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 16L7 11L8.4 9.55L12 13.15L19.6 5.5L21 7L12 16Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              Why Sellers Choose PrepVia?
            </button>
          </div>
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6">
                Unlock a competitive edge for your Amazon business
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Build stronger sales performance with faster inventory
                processing, more reliable fulfillment, and more professional
                preparation services.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary-cyan px-6 py-3 rounded-full text-white">
                  Chat With Us
                </button>
                <a
                  href="#"
                  className="group flex items-center justify-center px-6 py-3"
                >
                  How It Works
                  <span className="relative ml-2 flex items-center">
                    <svg
                      aria-hidden="true"
                      className="arrow-svg overflow-visible pointer-events-none w-[70px] h-[12px]"
                    >
                      <g
                        transform="translate(0 .6)"
                        stroke="currentColor"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                        strokeLinecap="round"
                      >
                        <line
                          pathLength="1"
                          className="arrow-line"
                          x1="34.5"
                          y1="4.9"
                          x2="29.7"
                        ></line>
                        <line
                          pathLength="1"
                          className="arrow-line"
                          x1="34.5"
                          y1="4.9"
                          x2="29.7"
                          y2="10"
                        ></line>
                        <line
                          pathLength="1"
                          className="arrow-line"
                          x1=".5"
                          y1="4.9"
                          x2="34.5"
                          y2="4.9"
                        ></line>
                      </g>
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            {/* Right column - Features */}
            <div className="py-8">
              <div className="space-y-16">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="relative pl-8 border-l-2 border-blue-100"
                  >
                    {/* Colored dot on the border - fully visible */}
                    <div className="absolute left-[-6px] top-0 w-3 h-3 rounded-full bg-primary-cyan border-2 border-white"></div>

                    <div className="mb-2">
                      <div
                        className={cn(
                          "inline-flex  items-center justify-center p-2 rounded-lg",
                          feature.lightBgColor
                        )}
                      >
                        <div className={feature.color}>{feature.icon}</div>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>

                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competitive;
