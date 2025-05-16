"use client";

import { useRef } from "react";
import { Crown, Zap, BarChart, Clock, Cpu, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { TabButtons } from "@/components/Tabbutton";

export default function WhyChooseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Simplified, transparent pricing & cost management.",
      description:
        "No hidden fees or confusing rate structures—just clear, easy-to-understand pricing that helps you stay in control of your costs.",
      color: "text-cyan-600",
      bgColor: "bg-cyan-100",
      lightBgColor: "bg-cyan-600/10",
    },
    {
      icon: <Cpu className="h-5 w-5" />,
      title: "Advanced, proprietary logistics technology.",
      description:
        "Our custom-built logistics platform uses smart automation to enhance delivery accuracy, tracking, and performance.",
      color: "text-cyan-600",
      bgColor: "bg-cyan-100",
      lightBgColor: "bg-cyan-600/10",
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Priority customer support and operational efficiency",
      description:
        "Enjoy responsive support and optimized workflows that minimize delays and maximize satisfaction.",
      color: "text-cyan-600",
      bgColor: "bg-cyan-100",
      lightBgColor: "bg-cyan-600/10",
    },
    {
      icon: <BarChart className="h-5 w-5" />,
      title: "Seamless API integration and streamlined processes.",
      description:
        "Easily connect your systems through powerful APIs, enabling faster operations and reduced manual tasks.",
      color: "text-cyan-600",
      bgColor: "bg-cyan-100",
      lightBgColor: "bg-cyan-600/10",
    },
    {
      icon: <Crown className="h-5 w-5" />,
      title:
        "We invest in innovation and technology to accelerate your inventory sales.",
      description:
        "Stay ahead of the competition with data-driven insights, smart tools, and dedicated innovation to boost your revenue.",
      color: "text-cyan-600",
      bgColor: "bg-cyan-100",
      lightBgColor: "bg-cyan-600/10",
    },
  ];

  return (
    <section ref={sectionRef} className="relative min-h-screen py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left column - Fixed */}
            <div className="flex flex-col justify-center lg:sticky lg:top-24 h-fit max-w-lg">
              <div className="flex space-x-4 pt-8 mb-8">
                <TabButtons title="Benefits" title2="Why Choose PrepVia?" />
              </div>
              <h2 className="text-4xl font-semibold text-gray-900 leading-tight mb-6 font-poppins">
                Why to Choose <span className="text-cyan-600">Prep Via? </span>
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Ready to elevate your logistics operations?
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-cyan-500 px-4 py-1 rounded-full text-white hover:bg-cyan-600 transition-colors">
                  <span>Join PrepVia Now</span>
                </button>
                <a
                  href="#"
                  className="group flex items-center justify-center p-2"
                >
                  Request a Consulation
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
                  <div key={index} className="relative pl-8">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-cyan-300 to-transparent">
                      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent"></div>
                    </div>
                    <div className="flex gap-2 items-center justify-start mb-2">
                      <div
                        className={cn(
                          "inline-flex items-center justify-center p-2 rounded-full",
                          feature.lightBgColor
                        )}
                      >
                        <div className={feature.color}>{feature.icon}</div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                    </div>

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
}
