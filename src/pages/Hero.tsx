"use client";
import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const trustPoints = [
  "Pay After You Sell",
  "Tech-Driven Fast Prep",
  "Clear Upfront Pricing",
  "Auto Price Calculation",
  "48-Hour Prep Time",
];

export default function Hero() {
  return (
    <main className=" container mx-auto bg-[linear-gradient(to_top_right,_#ccf1f6,_white,_#f9fafb,_#bfdbfe)]">
      <Navbar />
      <section className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-12">
        <div className="w-full p-8 mt-8 md:mt-16 flex flex-col items-center justify-between rounded-3xl">
          <Badge variant="outline" className="text-xs md:text-sm py-2 md:mt-12">
            <span className="mr-2 text-primary">
              <Badge className="bg-cyan-600/70">
                <motion.span
                  style={{
                    display: "inline-block",
                    transformOrigin: "bottom center",
                  }}
                  animate={{
                    rotate: [0, 10, -10, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  📦
                </motion.span>
              </Badge>
            </span>
            <span>
              {" "}
              We {"don't"} just move boxes - we move business forward!{" "}
            </span>
          </Badge>
          <div className="w-full px-4 md:px-0 md:max-w-6xl mt-10">
            <h1 className="text-4xl md:text-6xl font-normal mb-6 text-center font-poppins">
              Accelerate Your{" "}
              <span className="font-semibold italic">Amazon</span> FBA{" "}
              <br className="hidden md:block" /> Business with{" "}
              <span className="italic font-light text-cyan-600 relative font-serif mt-1">
                {" "}
                Precision{" "}
              </span>{" "}
              Prep Services
            </h1>
            {/* <p className="text-base md:text-lg md:max-w-4xl mt-12 text-center mx-auto">
              The only prep center where you can pay after your inventory sells.
              Based in Miami, we offer streamlined logistics and prep solutions
              for Amazon sellers.
            </p> */}

            <div className="flex flex-row flex-wrap justify-center gap-x-4 md:gap-x-8 gap-y-3 mb-8 lg:mb-0 mt-12">
              {trustPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="bg-cyan-50 rounded-full flex items-center justify-center p-[4px]">
                    <span className="w-1 h-1 bg-cyan-400 rounded-full block"></span>
                  </div>
                  <span className="text-gray-700 font-robotot">{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-10">
            <div className="flex -space-x-3">
              <img
                className="h-8 w-8 rounded-full border-2 border-white"
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User"
              />
              <img
                className="h-8 w-8 rounded-full border-2 border-white"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User"
              />
              <img
                className="h-8 w-8 rounded-full border-2 border-white"
                src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User"
              />
              <img
                className="h-8 w-8 rounded-full border-2 border-white"
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User"
              />
            </div>
            <p className="text-sm text-gray-600 font-roboto">
              Trusted by <span className="font-bold text-cyan-600"> 100+</span>{" "}
              sellers.
            </p>
          </div>
          <div className="flex flex-wrap gap-1 mt-20 justify-center">
            <button className="bg-primary-cyan px-6 py-3 rounded-full text-white hover:scale-95 transition-all duration-300">
              Get Free Quote
            </button>
            <a
              href="#"
              className="group flex items-center justify-center px-6 py-3 ml-3 sm:ml-0"
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
        {/* <div className="relative group -mt-4">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[80%] mx-auto h-24 lg:h-80 bg-blue-300/70 rounded-full blur-3xl"></div>
          <Image
            width={800}
            height={1000}
            className="w-full md:w-[1150px] mx-auto rounded-3xl relative leading-none flex items-center"
            src={"/02.png"}
            alt="dashboard"
          />

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-primary-cyan/0 via-blue-300/40 to-blue-300/70 rounded-lg"></div>
        </div> */}
      </section>
    </main>
  );
}
