import { TabButtons } from "@/components/Tabbutton";
import {
  DollarSign,
  TrendingUp,
  FileText,
  BarChart4,
  Play,
} from "lucide-react";

export default function PrepViaProfit() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 bg-gray-50">
      <div className="flex justify-center mb-8">
        <TabButtons title="PrepViaProfit™" title2="" />
      </div>

      <div className="text-center mb-16">
        <h2 className="text-4xl font-semibold font-inter mb-8">
          Prep Now, <span className="text-cyan-600"> Pay 30 Days Later.</span>
        </h2>

        <p className="text-lg max-w-3xl mx-auto text-center text-gray-600 mb-12">
          PrepViaProfit™ is an exclusive, cashflow-friendly service allowing
          qualified sellers to pay for inventory preparation up to 30 days after
          products are shipped. Boost your cash flow, reduce upfront investment,
          and scale your inventory effortlessly.
        </p>
      </div>

      {/* How it works */}
      <div className=" mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">
          How PrepViaProfit™ Works
        </h2>
        <p className="text-3xl font-semibold text-cyan-500">
          Simple 4-Step Process
        </p>
      </div>

      {/* Steps */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid gap-16 mb-24 relative">
          {/* Vertical line connecting all steps */}
          <div className="absolute left-[20px] top-[35px] bottom-0 w-0.5 bg-cyan-400"></div>

          {/* Step 1 */}
          <div className="flex gap-8 items-start">
            <div className="relative">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-cyan-400 bg-white text-cyan-600 font-bold z-10">
                01
              </div>
            </div>
            <div className="flex-1">
              <div className="mb-3">
                <h3 className="text-2xl font-bold text-gray-800">
                  Understand & Analyze
                </h3>
              </div>
              <p className="text-gray-600">
                We start by understanding your business needs and identifying
                opportunities to streamline operations and boost efficiency.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-8 items-start">
            <div className="relative">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-cyan-400 bg-white text-cyan-600 font-bold z-10">
                02
              </div>
            </div>
            <div className="flex-1">
              <div className="mb-3">
                <h3 className="text-2xl font-bold text-gray-800">
                  Strategize & Plan
                </h3>
              </div>
              <p className="text-gray-600">
                We develop AI-driven strategies tailored to help you convert
                more leads, manage appointments, and maximize revenue.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-8 items-start">
            <div className="relative">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-cyan-400 bg-white text-cyan-600 font-bold z-10">
                03
              </div>
            </div>
            <div className="flex-1">
              <div className="mb-3">
                <h3 className="text-2xl font-bold text-gray-800">
                  Execute & Deliver
                </h3>
              </div>
              <p className="text-gray-600">
                Our platform seamlessly integrates into your workflow,
                automating tasks and ensuring real, measurable growth.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex gap-8 items-start">
            <div className="relative">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-cyan-400 bg-white text-cyan-600 font-bold z-10">
                04
              </div>
            </div>
            <div className="flex-1">
              <div className="mb-3">
                <h3 className="text-2xl font-bold text-gray-800">
                  Track Results
                </h3>
              </div>
              <p className="text-gray-600">
                Monitor your growth with detailed analytics and reporting,
                allowing you to see the direct impact on your business
                performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Benefits */}
      <div className="text-center mb-4">
        <span className="text-sm text-gray-500 uppercase tracking-wide">
          Main Benefits
        </span>
      </div>

      {/* Benefits Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">
          Grow your business
        </h2>
        <p className="text-4xl font-bold text-gray-800">
          with financial flexibility
        </p>
      </div>

      {/* Benefits Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {/* Benefit 1 */}
        <div className="flex flex-col bg-white p-6 rounded-3xl">
          <div className="bg-cyan-500 text-white p-4 rounded-2xl mb-12 w-14 h-14 flex items-center justify-center">
            <DollarSign className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-medium text-gray-800 mb-4">
            Improved Cash Flow
          </h3>
          <p className="text-[#636363] text-lg text-poppins">
            Pay 30 days after prep, freeing immediate cash for other business
            needs and opportunities.
          </p>
        </div>

        {/* Benefit 2 */}
        <div className="flex flex-col bg-white p-6 rounded-3xl">
          <div className="bg-cyan-500 text-white p-4 rounded-2xl mb-12 w-14 h-14 flex items-center justify-center">
            <FileText className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-medium text-gray-800 mb-4">
            Predictable Billing
          </h3>
          <p className="text-[#636363] text-lg text-poppins">
            Clear and transparent payment schedules help you plan your finances
            with confidence.
          </p>
        </div>

        {/* Benefit 3 */}

        <div className="flex flex-col bg-white p-6 rounded-3xl">
          <div className="bg-cyan-500 text-white p-4 rounded-2xl mb-12 w-14 h-14 flex items-center justify-center">
            <TrendingUp className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-medium text-gray-800 mb-4">
            Reduced Financial Pressure
          </h3>
          <p className="text-[#636363] text-lg text-poppins">
            Scale inventory without immediate upfront payments, reducing strain
            on your business finances.
          </p>
        </div>

        {/* Benefit 4 */}
        <div className="flex flex-col bg-white p-6 rounded-3xl">
          <div className="bg-cyan-500 text-white p-4 rounded-2xl mb-12 w-14 h-14 flex items-center justify-center">
            <BarChart4 className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-medium text-gray-800 mb-4">
            Easy Inventory Scaling
          </h3>
          <p className="text-[#636363] text-lg text-poppins">
            Grow your business with minimal financial friction, allowing for
            faster expansion and increased profits.
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div className="mb-24">
        <div className="bg-gray-100 rounded-xl p-8 flex flex-col items-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            See How PrepViaProfit™ Works
          </h3>
          <div className="relative w-full aspect-video bg-gray-200 rounded-lg overflow-hidden mb-6 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-cyan-500 text-white rounded-full w-16 h-16 flex items-center justify-center cursor-pointer hover:bg-cyan-600 transition-colors">
                <Play className="w-6 h-6 ml-1" />
              </div>
            </div>
            <img
              src="/placeholder.svg?height=480&width=854"
              alt="PrepViaProfit video thumbnail"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-gray-600 text-center max-w-2xl">
            Watch our detailed explanation of how PrepViaProfit™ can transform
            your business operations and improve your cash flow.
          </p>
        </div>
      </div>

      {/* Eligibility Requirements */}
      <div className="bg-cyan-50 rounded-xl p-8 mb-20">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Eligibility Requirements
        </h3>
        <p className="text-gray-700 mb-6">
          PrepViaProfit™ eligibility requires a proven sales history and stable
          business performance. Approval depends on sales volume, account
          health, and financial reliability.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg">
            <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
            <span className="text-gray-700">Proven sales history</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg">
            <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
            <span className="text-gray-700">Stable business performance</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg">
            <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
            <span className="text-gray-700">Good account health</span>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex flex-wrap gap-1 mt-20 justify-center">
        <button className="bg-primary-cyan px-6 py-3 rounded-full text-white hover:scale-95 transition-all duration-300">
          Apply for PrepViaProfit™
        </button>
        <a
          href="#"
          className="group flex items-center justify-center px-6 py-3 ml-3 sm:ml-0"
        >
          Schedule Your Free Consultation
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
  );
}
