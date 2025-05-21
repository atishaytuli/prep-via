import Link from "next/link";

export default function MembershipCard() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden border border-white">
            <div className="bg-cyan-600/70 text-white p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-medium font-poppins">
                  Amazon Sellers Membership
                </h3>
                <div className="bg-white text-cyan-600 rounded-full px-4 py-1 font-medium shadow-inner">
                  Required
                </div>
              </div>
            </div>
            <div className="p-6 mt-4">
              <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
                <div className="mb-4 md:mb-0 md:mr-6">
                  <p className="text-gray-600 mb-8">
                    Required for Amazon sellers, includes mandatory 2D Workflow
                    API integration for accelerated check-ins and real-time
                    inventory management.
                  </p>
                  <Link
                    href="/contact"
                    className="text-cyan-600 font-medium hover:text-cyan-700"
                  >
                    Learn more about Amazon integration →
                  </Link>
                </div>
                <div className="min-w-fit flex flex-col bg-gray-50 shadow-inner rounded-3xl">
                  <div className="px-6 py-4 sm:p-6 sm:pb-6">
                    <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                      <div>
                        <h2 className="text-xl font-medium tracking-tighter text-gray-600">
                          Monthly Fee
                        </h2>
                      </div>
                      <div className="mt-2">
                        <p>
                          <span className="text-xl font-light tracking-tight text-black">
                            $70
                          </span>
                          <span className="text-base font-medium text-gray-500">
                            {" "}
                            /mo{" "}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex px-6 pb-4 sm:px-8">
                    <a
                      aria-describedby="tier-company"
                      className="flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-cyan-600 border-2 border-cyan-600 rounded-full nline-flex hover:scale-95 focus:outline-none focus-visible:outline-cyan-600 text-sm focus-visible:ring-cyan-600"
                      href="#"
                    >
                      Get started
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col space-y-2">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-4 bg-gray-100 rounded-r-full"
                ></div>
              ))}
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col space-y-2">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-4 bg-gray-100 rounded-l-full"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
