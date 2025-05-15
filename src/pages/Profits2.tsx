import {
  ClipboardCheck,
  PackageCheck,
  Truck,
  Receipt,
  DollarSign,
  TrendingUp,
  FileText,
  BarChart4,
  Play,
  CheckCircle,
} from "lucide-react"

export default function PrepViaProfit() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Header */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 shadow-sm">
            <DollarSign className="w-4 h-4 text-cyan-500" />
            <span className="text-gray-700 font-medium">PrepViaProfit™</span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            Prep Now, Pay 30 Days Later.
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            PrepViaProfit™ is an exclusive, cashflow-friendly service allowing qualified sellers to pay for inventory
            preparation up to 30 days after products are shipped. Boost your cash flow, reduce upfront investment, and
            scale your inventory effortlessly.
          </p>
        </div>

        {/* How it works */}
        <div className="text-center mb-4">
          <span className="text-sm text-gray-500 uppercase tracking-wide font-medium">How it works</span>
        </div>

        {/* How PrepViaProfit Works */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">How PrepViaProfit™ Works</h2>
          <p className="text-2xl sm:text-3xl font-bold text-cyan-500">Simple 4-Step Process</p>
        </div>

        {/* Steps */}
        <div className="relative mb-24">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-8 top-8 bottom-0 w-0.5 bg-cyan-200 hidden sm:block"></div>

          {/* Step 1 */}
          <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 mb-8 sm:mb-12 sm:ml-16 relative">
            <div className="absolute left-0 top-8 w-8 h-8 bg-cyan-500 rounded-full text-white flex items-center justify-center -translate-x-1/2 hidden sm:flex">
              <span className="font-bold text-sm">01</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start">
              <div className="flex items-center gap-3 sm:hidden">
                <div className="bg-cyan-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-sm">
                  01
                </div>
                <h3 className="text-xl font-bold text-gray-800">Apply Online</h3>
              </div>
              <div className="bg-cyan-500 text-white p-3 rounded-lg hidden sm:block">
                <ClipboardCheck className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 hidden sm:block">Apply Online</h3>
                <p className="text-gray-600">
                  Apply online for PrepViaProfit™ eligibility. Our streamlined process makes it quick and easy to get
                  started.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 mb-8 sm:mb-12 sm:ml-16 relative">
            <div className="absolute left-0 top-8 w-8 h-8 bg-cyan-500 rounded-full text-white flex items-center justify-center -translate-x-1/2 hidden sm:flex">
              <span className="font-bold text-sm">02</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start">
              <div className="flex items-center gap-3 sm:hidden">
                <div className="bg-cyan-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-sm">
                  02
                </div>
                <h3 className="text-xl font-bold text-gray-800">Send Your Products</h3>
              </div>
              <div className="bg-cyan-500 text-white p-3 rounded-lg hidden sm:block">
                <PackageCheck className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 hidden sm:block">Send Your Products</h3>
                <p className="text-gray-600">
                  Send your products to Prep Via for fast, professional preparation. We handle everything with care and
                  precision.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 mb-8 sm:mb-12 sm:ml-16 relative">
            <div className="absolute left-0 top-8 w-8 h-8 bg-cyan-500 rounded-full text-white flex items-center justify-center -translate-x-1/2 hidden sm:flex">
              <span className="font-bold text-sm">03</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start">
              <div className="flex items-center gap-3 sm:hidden">
                <div className="bg-cyan-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-sm">
                  03
                </div>
                <h3 className="text-xl font-bold text-gray-800">Quick Shipping</h3>
              </div>
              <div className="bg-cyan-500 text-white p-3 rounded-lg hidden sm:block">
                <Truck className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 hidden sm:block">Quick Shipping</h3>
                <p className="text-gray-600">
                  Your products are prepped and shipped quickly to fulfillment centers, ensuring minimal delay in your
                  sales cycle.
                </p>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 sm:ml-16 relative">
            <div className="absolute left-0 top-8 w-8 h-8 bg-cyan-500 rounded-full text-white flex items-center justify-center -translate-x-1/2 hidden sm:flex">
              <span className="font-bold text-sm">04</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start">
              <div className="flex items-center gap-3 sm:hidden">
                <div className="bg-cyan-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-sm">
                  04
                </div>
                <h3 className="text-xl font-bold text-gray-800">30-Day Payment Terms</h3>
              </div>
              <div className="bg-cyan-500 text-white p-3 rounded-lg hidden sm:block">
                <Receipt className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 hidden sm:block">
                  30-Day Payment Terms
                </h3>
                <p className="text-gray-600">
                  Receive an invoice with payment terms of 30 days after prep is completed, giving you time to generate
                  revenue.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Benefits */}
        <div className="text-center mb-4">
          <span className="text-sm text-gray-500 uppercase tracking-wide font-medium">Main Benefits</span>
        </div>

        {/* Benefits Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">Grow your business</h2>
          <p className="text-3xl sm:text-4xl font-bold text-gray-800">with financial flexibility</p>
        </div>

        {/* Benefits Cards */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-20">
          {/* Benefit 1 */}
          <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 flex flex-col">
            <div className="bg-cyan-500 text-white p-4 rounded-lg mb-6 w-14 h-14 flex items-center justify-center">
              <DollarSign className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Improved Cash Flow</h3>
            <p className="text-gray-600">
              Pay 30 days after prep, freeing immediate cash for other business needs and opportunities.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 flex flex-col">
            <div className="bg-cyan-500 text-white p-4 rounded-lg mb-6 w-14 h-14 flex items-center justify-center">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Reduced Financial Pressure</h3>
            <p className="text-gray-600">
              Scale inventory without immediate upfront payments, reducing strain on your business finances.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 flex flex-col">
            <div className="bg-cyan-500 text-white p-4 rounded-lg mb-6 w-14 h-14 flex items-center justify-center">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Predictable Billing</h3>
            <p className="text-gray-600">
              Clear and transparent payment schedules help you plan your finances with confidence.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 flex flex-col">
            <div className="bg-cyan-500 text-white p-4 rounded-lg mb-6 w-14 h-14 flex items-center justify-center">
              <BarChart4 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Easy Inventory Scaling</h3>
            <p className="text-gray-600">
              Grow your business with minimal financial friction, allowing for faster expansion and increased profits.
            </p>
          </div>
        </div>

        {/* Video Section */}
        <div className="mb-24">
          <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 flex flex-col items-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">See How PrepViaProfit™ Works</h3>
            <div className="relative w-full aspect-video bg-gray-200 rounded-lg overflow-hidden mb-6 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-cyan-500 text-white rounded-full w-16 h-16 flex items-center justify-center cursor-pointer hover:bg-cyan-600 transition-colors shadow-lg">
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
              Watch our detailed explanation of how PrepViaProfit™ can transform your business operations and improve
              your cash flow.
            </p>
          </div>
        </div>

        {/* Eligibility Requirements - Redesigned */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Eligibility Requirements</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              PrepViaProfit™ eligibility requires a proven sales history and stable business performance.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
            <p className="text-gray-700 mb-8 text-center">Approval depends on the following criteria:</p>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-cyan-50 rounded-xl p-6 flex flex-col items-center text-center">
                <div className="bg-white rounded-full p-3 mb-4 shadow-sm">
                  <CheckCircle className="w-6 h-6 text-cyan-500" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Proven Sales History</h4>
                <p className="text-gray-600 text-sm">Demonstrated consistent sales performance over time</p>
              </div>

              <div className="bg-cyan-50 rounded-xl p-6 flex flex-col items-center text-center">
                <div className="bg-white rounded-full p-3 mb-4 shadow-sm">
                  <CheckCircle className="w-6 h-6 text-cyan-500" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Stable Business</h4>
                <p className="text-gray-600 text-sm">Established business with consistent operational performance</p>
              </div>

              <div className="bg-cyan-50 rounded-xl p-6 flex flex-col items-center text-center">
                <div className="bg-white rounded-full p-3 mb-4 shadow-sm">
                  <CheckCircle className="w-6 h-6 text-cyan-500" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Good Account Health</h4>
                <p className="text-gray-600 text-sm">Positive financial standing and reliable payment history</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Ready to boost your cash flow?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium px-8 py-3 rounded-lg transition-colors shadow-sm">
              Apply for PrepViaProfit™
            </button>
            <button className="border border-cyan-500 text-cyan-500 hover:bg-cyan-50 font-medium px-8 py-3 rounded-lg transition-colors">
              Schedule Your Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
