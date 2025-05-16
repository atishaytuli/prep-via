"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function PromoCard() {

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
              Ready to optimize your logistics?
            </h2>
            <p className="text-white/90 text-base md:text-lg mb-6 max-w-2xl">
              Prefer speaking directly with our logistics experts? We offer free
              consultation calls to discuss your specific needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                className="bg-white text-cyan-600 hover:bg-gray-100 font-medium py-2.5 px-6 rounded-full border-none h-auto"
                size="lg"
              >
                Request a Custom Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

                            <Button
                className="bg-white text-cyan-600 hover:bg-gray-100 font-medium py-2.5 px-6 rounded-full border-none h-auto"
                size="lg"
              >
                Schedule Your Free Consultation <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right content - Phone image */}
          <div className="w-full md:w-2/5 relative h-[280px] md:h-[320px] lg:h-[380px] flex justify-center md:justify-end overflow-visible">
            <div className="relative h-full w-full flex justify-center items-end md:items-center">
              <img
                src="/logistics.png"
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
