"use client"

export default function HeroSection() {
  return (
    <section className="relative mt-36 py-12 overflow-hidden">
      {/* Cyan Radial Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.15) 0%, rgba(255, 255, 255, 0.05) 70%, rgba(255, 255, 255, 0) 100%)",
        }}
      />

      {/* Subtle White Radial Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 30%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 70%)",
        }}
      />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-semibold font-inter tracking-tight text-gray-800 mb-6">
            PrepVia <span className=" text-cyan-600 relative "> Services.</span>
          </h1>
          <p className="text-xl font-poppins text-gray-700 mb-8">Complete Solutions for Your Logistics Needs</p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Prep Via offers a comprehensive range of specialized preparation, logistics, and storage services, tailored
            specifically for Amazon, Walmart, and other major marketplaces.
          </p>
        </div>
      </div>
    </section>
  )
}
