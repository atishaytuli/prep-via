"use client";
import { Play } from "lucide-react";

export default function PromoCard() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div
        className="rounded-3xl overflow-hidden"
        style={{
          background: "linear-gradient(90deg, #0ea5e9 0%, #22d3ee 100%)",
          color: "white",
        }}
      >
        <div className="flex flex-col md:flex-row items-center">
          {/* Left content */}
          <div className="p-6 md:p-8 lg:p-10 md:w-3/5">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
              Discover how Prep Via works
            </h2>
            <p className="text-white/90 text-base md:text-lg mb-6 max-w-2xl">
              Experience how our tech-driven prep center streamlines your
              inventory management, accelerates your shipments, and boosts your
              business performance — even when {"you're"} not around.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-cyan-600 font-medium py-2.5 px-6 rounded-full hover:bg-gray-100 transition-colors">
                Call to test for free
              </button>

              {/* Audio player container */}
              <div className="flex items-center bg-white/10 rounded-full text-white">
                <div className="flex items-center gap-2 w-full py-1.5 px-2">
                  <button className="bg-white text-cyan-600 rounded-full p-1.5 flex items-center justify-center">
                    <Play className="h-4 w-4" />
                  </button>
                  <span className="text-sm whitespace-nowrap">0:00/1:51</span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    defaultValue="0"
                    className="w-full h-1 bg-white/30 rounded-full appearance-none cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Phone image */}
          <div className="w-full md:w-2/5 relative h-[280px] md:h-[320px] lg:h-[380px] flex justify-end overflow-visible">
            <div className="relative h-full w-full flex justify-center items-end md:items-center">
              <img
                src="/phone.png"
                alt="Prep Via mobile app"
                className="w-48 sm:w-64 md:w-auto object-contain drop-shadow-xl"
                style={{
                  filter: "drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.2))",
                  transform: "translate(10%, 31%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
