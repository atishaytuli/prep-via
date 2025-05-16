export function ServicePricing() {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4 font-inter">
          Clear, Transparent, & Competitive Pricing
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Prep Via offers clear and competitive pricing, with no hidden fees. Our detailed price list makes it simple to
          manage logistics expenses effectively.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Main Prep Services Table */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 font-inter">Main Prep Services (Core Services)</h3>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left py-3 px-4 text-gray-700 font-semibold border-b border-gray-200">Service</th>
                  <th className="text-left py-3 px-4 text-gray-700 font-semibold border-b border-gray-200">Pricing</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700">FNSKU/UPC Labeling</td>
                  <td className="py-3 px-4 text-gray-700 font-medium">$0.40/unit</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700">Poly Bagging / Shrink Wrapping</td>
                  <td className="py-3 px-4 text-gray-700 font-medium">$0.35/unit (automatic machine)</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700">Bubble Wrapping (up to 15 inches)</td>
                  <td className="py-3 px-4 text-gray-700 font-medium">
                    $0.45/unit (additional charges apply if larger)
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700">Boxing</td>
                  <td className="py-3 px-4 text-gray-700 font-medium">$2.00/box</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700">Multipack/Bundling (2-6 items, includes FNSKU/UPC)</td>
                  <td className="py-3 px-4 text-gray-700 font-medium">$1.40–$2.60/pack</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700">Expiration Date Labeling</td>
                  <td className="py-3 px-4 text-gray-700 font-medium">Included (no extra charge)</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700">Palletizing (includes 80-gauge black film & forwarding)</td>
                  <td className="py-3 px-4 text-gray-700 font-medium">$18.00/pallet</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Logistics & Storage Services Table */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 font-inter">Logistics & Storage Services</h3>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left py-3 px-4 text-gray-700 font-semibold border-b border-gray-200">Service</th>
                  <th className="text-left py-3 px-4 text-gray-700 font-semibold border-b border-gray-200">Pricing</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700">Container Receiving</td>
                  <td className="py-3 px-4 text-gray-700 font-medium">20': $250/container, 40': $500/container</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700">Carton Receiving</td>
                  <td className="py-3 px-4 text-gray-700 font-medium">Free</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700">
                    Carton Forwarding (only for cartons arriving ready-to-ship)
                  </td>
                  <td className="py-3 px-4 text-gray-700 font-medium">$2.00/carton</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700">Pallet Receiving</td>
                  <td className="py-3 px-4 text-gray-700 font-medium">Free</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700">
                    Pallet Forwarding (only for pallets arriving ready-to-ship)
                  </td>
                  <td className="py-3 px-4 text-gray-700 font-medium">$15/pallet (up to 10), $12/pallet (11+)</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700">Storage Fees</td>
                  <td className="py-3 px-4 text-gray-700 font-medium">$0.07/cubic ft per day</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Oversized Items */}
          <div className="mt-8">
            <h4 className="text-xl font-semibold text-gray-900 mb-4 font-inter">Oversized Items:</h4>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-3">
              <OversizedItem weight="20–30 lbs" price="+$2.00/item" />
              <OversizedItem weight="30.1–40 lbs" price="+$3.00/item" />
              <OversizedItem weight="40.1–50 lbs" price="+$4.00/item" />
              <OversizedItem weight="50.1–100 lbs" price="+$10.00/item" />
              <OversizedItem weight="100 lbs+" price="+$15.00/item" />
            </div>
          </div>
        </div>

        {/* Optional Add-on Services Table */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 font-inter">
            Optional Add-on Services (upon client request only)
          </h3>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left py-3 px-4 text-gray-700 font-semibold border-b border-gray-200">Service</th>
                  <th className="text-left py-3 px-4 text-gray-700 font-semibold border-b border-gray-200">Pricing</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700">Sticker Removal</td>
                  <td className="py-3 px-4 text-gray-700 font-medium">$0.25/unit</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700">Additional Labeling</td>
                  <td className="py-3 px-4 text-gray-700 font-medium">$0.15/label</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700">Package Inserts</td>
                  <td className="py-3 px-4 text-gray-700 font-medium">$0.20/unit</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700">Fragile Item Special Handling</td>
                  <td className="py-3 px-4 text-gray-700 font-medium">$0.50/unit</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700">Returns Management</td>
                  <td className="py-3 px-4 text-gray-700 font-medium">$2.00/item</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700">Disposal Fee (Standard/Oversized)</td>
                  <td className="py-3 px-4 text-gray-700 font-medium">$1.50/item / $3.00/item</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700">Inspection & Quality Control</td>
                  <td className="py-3 px-4 text-gray-700 font-medium">Free</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Professional Palletizing */}
        <div className="border border-gray-200 rounded-lg p-6 mb-12 bg-gray-50">
          <h3 className="text-xl font-semibold text-gray-900 mb-3 font-inter">Professional Palletizing</h3>
          <p className="text-gray-700">
            We utilize premium 80-gauge black pallet wrap film to ensure maximum security, stability, and complete
            privacy for your products during transit. Reduce receiving times and avoid shipping damages with Prep Via.
          </p>
        </div>
      </div>
    </div>
  )
}

interface OversizedItemProps {
  weight: string
  price: string
}

function OversizedItem({ weight, price }: OversizedItemProps) {
  return (
    <div className="border border-gray-200 p-3 rounded-md hover:border-cyan-200 hover:bg-cyan-50 transition-colors">
      <p className="text-gray-700 font-medium text-sm">{weight}</p>
      <p className="text-cyan-600 font-semibold">{price}</p>
    </div>
  )
}
