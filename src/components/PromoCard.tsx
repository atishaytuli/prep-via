"use client";

export default function PromoCard() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
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
                How We Work
              </button>

              <button className="flex bg-white text-cyan-600 font-medium py-2.5 px-6 rounded-full hover:bg-gray-100 transition-colors">
                Get Started{" "}
                <span className="relative ml-2 flex items-center">
                  <svg
                    aria-hidden="true"
                    className="arrow-svg overflow-visible pointer-events-none w-[40px] h-[12px]"
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
              </button>
            </div>
          </div>

          {/* Right content - Phone image */}
          <div className="w-full md:w-2/5 relative h-[280px] md:h-[320px] lg:h-[380px] flex justify-end overflow-visible">
            <div className="relative h-full w-full flex justify-center items-end md:items-center">
              <img
                src="/phone.png"
                alt="Prep Via mobile app"
                className="w-full md:w-auto object-contain drop-shadow-xl phone-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
