interface EligibilitySectionProps {
  title: string
  description: string
  imageSrc: string
}

export function EligibilitySection({ title, description, imageSrc }: EligibilitySectionProps) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 sm:py-20">
      <div
        className="rounded-3xl overflow-hidden shadow-lg"
        style={{
          background: "linear-gradient(90deg, #0ea5e9 0%, #22d3ee 100%)",
          color: "white",
        }}
      >
        <div className="flex flex-col md:flex-row items-center">
          {/* Left content */}
          <div className="p-6 md:p-8 lg:p-10 md:w-3/5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-3 leading-tight font-inter">
              {title}
            </h2>
            <p className="text-white/90 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 max-w-2xl">{description}</p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <button className="flex gap-3 bg-white text-cyan-600 font-medium py-2.5 px-6 rounded-full hover:bg-gray-100 transition-colors">
                Apply Now
              </button>
              <a href="#" className="group flex items-center justify-center py-3 px-1">
                Schedule Free Consultation
                <span className="relative ml-2 flex items-center">
                  <svg aria-hidden="true" className="arrow-svg overflow-visible pointer-events-none w-[70px] h-[12px]">
                    <g
                      transform="translate(0 .6)"
                      stroke="currentColor"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                      strokeLinecap="round"
                    >
                      <line pathLength="1" className="arrow-line" x1="34.5" y1="4.9" x2="29.7"></line>
                      <line pathLength="1" className="arrow-line" x1="34.5" y1="4.9" x2="29.7" y2="10"></line>
                      <line pathLength="1" className="arrow-line" x1=".5" y1="4.9" x2="34.5" y2="4.9"></line>
                    </g>
                  </svg>
                </span>
              </a>
            </div>
          </div>

          <div className="w-full md:w-2/5 relative h-[220px] sm:h-[280px] md:h-[320px] lg:h-[380px] flex justify-end overflow-visible">
            <div className="relative h-full w-full flex justify-center items-end md:items-center">
              <img
                src={imageSrc || "/placeholder.svg"}
                alt="Prep Via mobile app"
                className="w-36 sm:w-48 md:w-auto max-w-full object-contain drop-shadow-xl"
                style={{
                  filter: "drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.2))",
                  transform: "translate(5%, 32%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
