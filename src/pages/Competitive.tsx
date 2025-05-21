"use client";

import React, { useRef } from "react";
import { Crown, Zap, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { TabButtons } from "@/components/Tabbutton";

const Competitive = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Strategic Florida Location",
      description:
        "Conveniently located close to major ports in Florida and South Carolina, enabling ultra-fast check-ins and shipping. LTL shipments checked in within 4 business days, and same-day check-in for FTL.",
      color: "text-cyan-600",
      bgColor: "bg-cyan-100",
      lightBgColor: "bg-cyan-600/10",
    },
    {
      icon: <Crown className="h-5 w-5" />,
      title: "Faster Inventory Checked With 2D Barcodes",
      description:
        "Prep Via utilizes advanced 2D barcode technology, ensuring priority Amazon check-in, reduced placement fees, fewer errors, and faster availability for your products.",
      color: "text-cyan-600",
      bgColor: "bg-cyan-100",
      lightBgColor: "bg-cyan-600/10",
    },
    {
      icon: <Settings className="h-5 w-5" />,
      title: "Rapid 48-Hour Prep",
      description:
        "Your products are guaranteed to be prepped and shipped within 48 hours, ensuring maximum efficiency and customer satisfaction.",
      color: "text-cyan-600",
      bgColor: "bg-cyan-100",
      lightBgColor: "bg-cyan-600/10",
    },
    {
      icon: <Settings className="h-5 w-5" />,
      title: "Tech-Driven Labeling & Packing",
      description:
        "Featuring Prep Via’s proprietary LabelShot™ and MagLabel™ technologies, we streamline labeling and packing to unmatched speed and accuracy.",
      color: "text-cyan-600",
      bgColor: "bg-cyan-100",
      lightBgColor: "bg-cyan-600/10",
    },
    {
      icon: <Settings className="h-5 w-5" />,
      title: "Transparent & Predictable Pricing",
      description:
        "Enjoy clear, upfront costs with our automated pricing calculations, eliminating surprise fees and hidden expenses.",
      color: "text-cyan-600",
      bgColor: "bg-cyan-100",
      lightBgColor: "bg-cyan-600/10",
    },
    {
      icon: <Settings className="h-5 w-5" />,
      title: "Dedicated Warehouse for Standard Size Items",
      description:
        "Our specialized warehouse in Homestead, FL - just 70 miles from key logistics hubs - provides optimized handling specifically for standard-size inventory, accelerating your fulfillment cycle..",
      color: "text-cyan-600",
      bgColor: "bg-cyan-100",
      lightBgColor: "bg-cyan-600/10",
    },
    {
      icon: <Crown className="h-5 w-5" />,
      title: "Multi-Marketplace Fulfillment",
      description:
        "Seamless preparation and fulfillment for Amazon, Walmart, eBay, Shopify, Etsy, WooCommerce, and more—expand effortlessly into new sales channels.",
      color: "text-cyan-600",
      bgColor: "bg-cyan-100",
      lightBgColor: "bg-cyan-600/10",
    },
    {
      icon: <Crown className="h-5 w-5" />,
      title: "Real-Time Inventory Control",
      description:
        "Gain full visibility of your inventory status with live updates, keeping you informed at all times.",
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
                <TabButtons title="Benifits" title2="Why Sellers Choose PrepVia?" />
              </div>
              <h2 className="text-4xl font-semibold text-gray-900 leading-tight mb-6 font-poppins">
                Unlock a New Era of <span className="text-cyan-600">
                  Inventory Management</span> and Fulfillment
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Build a more efficient, scalable, and profitable e-commerce
                business by leveraging Prep {"Via's"} unique technologies and
                innovative solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary-cyan px-4 py-1 rounded-full text-white flex items-center gap-2 hover:bg-[#36a745] hover:scale-95 transition-all duration-200">
                  <span>{"Let's Chat"}</span>
                  <svg
                    viewBox="0 0 46 46"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-white"
                  >
                    <path
                      d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                      fill="#40c351"
                    ></path>
                    <path
                      clipRule="evenodd"
                      d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                      fillRule="evenodd"
                      fill="#fff"
                    ></path>
                  </svg>
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
                  <div key={index} className="relative pl-8">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-cyan-300 to-transparent">
                      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent"></div>
                    </div>
                    <div className="flex gap-2 items-center justify-start mb-2">
                      <div
                        className={cn(
                          "inline-flex  items-center justify-center p-2 rounded-full",
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
};

export default Competitive;
