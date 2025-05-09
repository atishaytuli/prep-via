"use client";
import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <main className="container h-screen w-full mx-auto bg-[linear-gradient(to_top_right,_#9fe9f4,_white,_#f9fafb,_#60a5fa)]">
      <Navbar />
      <section className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-12">
        <div className="w-full p-8 mt-8 md:mt-24 flex flex-col items-center justify-between font-poppins  rounded-3xl">
          <Badge variant="outline" className="text-xs md:text-sm py-2 mt-8">
            <span className="mr-2 text-primary">
              <Badge className="bg-primary-cyan/50">
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
            <span> We {"don't"} just move boxes - we move business forward! </span>
          </Badge>
          <div className="max-w-5xl mt-10">
            <h1 className="text-4xl md:text-6xl font-normal mb-6 text-center">
              Accelerate Your{" "}
              <span className="font-semibold italic">Amazon</span> FBA{" "}
              <br className="hidden md:block" /> Business with{" "}
              <span className="italic font-light text-primary-cyan relative font-serif mt-1">
                {" "}
                Precision{" "}
                {/* <svg
                  viewBox="0 0 161.000719 65.0007725"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute w-[140%] h-[120%] left-[35%] top-1/2 -translate-x-1/2 -translate-y-1/2 text-black"
                >
                  <path
                    d="M108.01778 11.319704c14.250219.255278 24.614537 1.487241 33.586013 4.542631 10.977278 3.738501 18.615153 10.512516 18.888807 17.6144.308501 7.931621-8.185074 15.480466-21.43794 20.884931-13.35894 5.447362-29.517041 8.674151-47.202974 9.730548-15.093167.901908-31.003844.287007-49.812369-1.628284-8.162882-.830885-14.445504-1.805451-20.032187-3.262451-6.903804-1.800502-12.241615-4.257496-15.970252-7.585311-7.132003-6.365307-7.261114-15.737337-1.033844-23.467054 5.314829-6.597128 14.564839-12.043814 27.153852-16.694902 25.28764-9.343471 56.04235-12.847594 85.813681-9.979644 9.57465.922949 16.784556 2.321837 22.890098 4.75479.093776.037368.142271.151325.108317.254531"
                    fillRule="nonzero"
                    stroke="currentColor"
                    className="md:stroke-[1px] opacity-50"
                    fill="none"
                    pathLength="1"
                    strokeDasharray="1"
                    style={{ strokeDashoffset: 0 }}
                  />
                </svg>{" "} */}
              </span>{" "}
              Prep Services
            </h1>
            <p className="text-base md:text-lg md:max-w-4xl mt-12 text-center mx-auto">
              Based in Miami, PrepVia offers streamlined logistics and prep
              solutions for Amazon sellers - powered by automation, speed, and
              strategic location.
            </p>

            <div className="flex flex-wrap gap-1 mt-16 justify-center">
              <button className="bg-primary-cyan px-6 py-3 rounded-full text-white">
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
        </div>
        {/* <div className="relative group mt-4">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[80%] mx-auto h-24 lg:h-80 bg-blue-300/70 rounded-full blur-3xl"></div>
          <Image
            width={1000}
            height={1000}
            className="w-full md:w-[1200px] mx-auto rounded-3xl relative leading-none flex items-center"
            src={"/02.png"}
            alt="dashboard"
          />

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-primary-cyan/0 via-blue-300/40 to-blue-300/70 rounded-lg"></div>
        </div> */}
      </section>
    </main>
  );
}
