import { TabButtons } from "@/components/Tabbutton";
import { DollarSign, TrendingUp, FileText, BarChart4 } from "lucide-react";
import { VideoPlayer } from "./VideoPlayer";
import { ProcessSteps } from "./ProcessSteps";
import { BenefitGrid } from "./BenifitsCard";
import { EligibilitySection } from "./Eligibility";

const processSteps = [
  {
    number: "01",
    title: "Apply for Eligibility",
    description:
      "To get started, simply apply online for PrepViaProfit™ eligibility. This step ensures you can take advantage of our exclusive program benefits.",
  },
  {
    number: "02",
    title: "Send Your Products",
    description:
      "Once approved, send your products to Prep Via for fast, professional preparation, ensuring they're handled with care and efficiency.",
  },
  {
    number: "03",
    title: "Prep & Ship",
    description:
      "Your products are prepped and shipped quickly to fulfillment centers, helping you save time and get your inventory listed faster.",
  },
  {
    number: "04",
    title: "Get Invoiced",
    description:
      "Receive an invoice with payment terms of 30 days after prep is completed, giving you flexibility to manage your cash flow confidently.",
  },
];

const benefits = [
  {
    icon: DollarSign,
    title: "Improved Cash Flow",
    description:
      "Pay 30 days after prep, freeing immediate cash for other business needs and opportunities.",
  },
  {
    icon: FileText,
    title: "Predictable Billing",
    description:
      "Clear and transparent payment schedules help you plan your finances with confidence.",
  },
  {
    icon: TrendingUp,
    title: "Reduced Financial Pressure",
    description:
      "Scale inventory without immediate upfront payments, reducing strain on your business finances.",
  },
  {
    icon: BarChart4,
    title: "Easy Inventory Scaling",
    description:
      "Grow your business with minimal financial friction, allowing for faster expansion and increased profits.",
  },
];

export default function PrepViaProfit() {
  return (
    <div className="container mx-auto mt-8 sm:mt-32 px-4 py-20 sm:py-12">
      <div className="flex justify-center mb-6 sm:mb-8">
        <TabButtons title="PrepViaProfit™" title2="" />
      </div>

      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold font-inter mb-4 sm:mb-8">
          Prep Now, <span className="text-cyan-600"> Pay 30 Days Later.</span>
        </h2>

        <p className="text-base md:text-lg max-w-3xl mx-auto text-center text-gray-600 mb-4 sm:mb-8 px-2">
          PrepViaProfit™ is an exclusive, cashflow-friendly service allowing
          qualified sellers to pay for inventory preparation up to 30 days after
          products are shipped. Boost your cash flow, reduce upfront investment,
          and scale your inventory effortlessly.
        </p>
      </div>

      {/* Video Section */}
      <VideoPlayer
        videoSrc="https://videos.pexels.com/video-files/6169088/6169088-uhd_2560_1440_25fps.mp4"
        title="See How PrepViaProfit™ Works"
        description="Watch our detailed explanation of how PrepViaProfit™ can transform your business operations and improve your cash flow."
      />

      {/* Steps */}
      <section className="py-8 sm:py-16 px-4 md:px-8 max-w-5xl mx-auto">
        <div className=" mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-2">
            How PrepViaProfit™ Works
          </h2>
          <p className="text-3xl md:text-4xl font-semibold text-cyan-500">
            Simple 4-Step Process.
          </p>
        </div>
        <ProcessSteps steps={processSteps} />
      </section>

      <section className="flex items-center justify-center">
        <TabButtons title="Main Benifits" title2="" />
      </section>

      {/* Benefits Section */}
      <div className="text-center mb-12 sm:mb-16 max-w-xl mx-auto px-2 mt-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-inter text-gray-800">
          Grow your business with financial flexibility
        </h2>
      </div>

      {/* Benefits Cards */}
      <BenefitGrid benefits={benefits} />

      {/* Eligibility Section */}
      <EligibilitySection
        title="Eligibility Requirements"
        description="PrepViaProfit™ eligibility requires a proven sales history and stable business performance. Approval depends on sales volume, account health, and financial reliability."
        imageSrc="/growth.png"
      />
    </div>
  );
}
