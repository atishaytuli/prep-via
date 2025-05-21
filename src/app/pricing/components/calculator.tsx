"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Calculator,
  Download,
  FileUp,
  Search,
  ArrowRight,
  Lock,
} from "lucide-react";
import { FeatureItem } from "./feature-item";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import Link from "next/link";

export default function CalculatorSection() {
  const [calculationType, setCalculationType] = useState<"asin" | "bulk">(
    "asin"
  );
  const [asinInput, setAsinInput] = useState("");
  const [showPaywallModal, setShowPaywallModal] = useState(false);

  // For demo purposes, set this to true to simulate a paid user
  const isPaidUser = false;

  const handleCalculateClick = () => {
    if (!isPaidUser) {
      setShowPaywallModal(true);
    } else {
      // Handle calculation logic for paid users
      console.log("Calculating for ASIN:", asinInput);
      // Actual calculation logic would go here
    }
  };

  const handleBulkUploadClick = () => {
    if (!isPaidUser) {
      setShowPaywallModal(true);
    } else {
      // Handle bulk upload logic for paid users
      console.log("Handling bulk upload");
      // Actual upload logic would go here
    }
  };

  return (
    <section className="mb-16 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto relative">
          {/* Improved gradient - more subtle and centered */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-[60%] h-16 bg-gradient-to-r from-cyan-300/30 via-cyan-400/40 to-cyan-300/30 rounded-full blur-3xl"></div>

          <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm bg-white relative z-10">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold font-inter mb-4 text-gray-900">
                    Instant Cost Calculator Tool
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Simplify your logistics with our advanced proprietary tool.
                    Instantly calculate precise preparation costs for your
                    inventory.
                  </p>

                  {/* Calculator Input Section */}
                  <div className="mb-8 bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <Tabs
                      value={calculationType}
                      onValueChange={(v) =>
                        setCalculationType(v as "asin" | "bulk")
                      }
                      className="w-fit mb-4"
                    >
                      <TabsList className="bg-white p-0.5 rounded-full border border-gray-200 shadow-sm flex gap-1">
                        {/* ASIN Tab with shake if not active */}
                        <motion.div
                          animate={
                            calculationType !== "asin"
                              ? { rotate: [0, -2, 2, -1, 1, 0] }
                              : {}
                          }
                          transition={
                            calculationType !== "asin"
                              ? {
                                  duration: 1.2,
                                  ease: "easeInOut",
                                  repeat: Infinity,
                                  repeatDelay: 3,
                                }
                              : {}
                          }
                        >
                          <TabsTrigger
                            value="asin"
                            className="rounded-full text-xs px-4 py-2 transition-all duration-200 text-gray-700 bg-cyan-600/10 font-medium cursor-pointer hover:scale-[1.03] hover:shadow data-[state=active]:bg-cyan-600/80 data-[state=active]:text-white data-[state=active]:shadow-md data-[state=active]:font-semibold"
                          >
                            ASIN Calculation
                          </TabsTrigger>
                        </motion.div>

                        {/* Bulk Tab with shake if not active */}
                        <motion.div
                          animate={
                            calculationType !== "bulk"
                              ? { rotate: [0, -2, 2, -1, 1, 0] }
                              : {}
                          }
                          transition={
                            calculationType !== "bulk"
                              ? {
                                  duration: 1.2,
                                  ease: "easeInOut",
                                  repeat: Infinity,
                                  repeatDelay: 3,
                                }
                              : {}
                          }
                        >
                          <TabsTrigger
                            value="bulk"
                            className="rounded-full text-xs px-4 py-2 flex items-center gap-1.5 text-gray-700 bg-cyan-600/10 font-medium cursor-pointer hover:scale-[1.03] hover:shadow data-[state=active]:bg-cyan-600/80 data-[state=active]:text-white data-[state=active]:shadow-md data-[state=active]:font-semibold"
                          >
                            Bulk Calculation
                          </TabsTrigger>
                        </motion.div>
                      </TabsList>
                    </Tabs>

                    {calculationType === "asin" && (
                      <div className="space-y-4">
                        <div>
                          <label
                            htmlFor="asin-input"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Enter Amazon ASIN or Product URL
                          </label>
                          <div className="flex gap-2">
                            <Input
                              id="asin-input"
                              placeholder="e.g., B08N5KWB9H or amazon.com/dp/B08N5KWB9H"
                              value={asinInput}
                              onChange={(e) => setAsinInput(e.target.value)}
                              className="flex-1"
                            />
                            <Button
                              className="bg-cyan-600 hover:bg-primary-cyan hover:scale-95 transition-all duration-200 rounded-full"
                              onClick={handleCalculateClick}
                            >
                              Calculate <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500">
                          Enter any Amazon ASIN or product URL to instantly
                          calculate preparation costs.
                        </p>
                      </div>
                    )}

                    {calculationType === "bulk" && (
                      <div className="space-y-4">
                        <p className="text-sm text-gray-700">
                          Download our Excel worksheet, list your ASINs, and
                          upload it back for bulk calculation.
                        </p>
                        <div className="flex flex-wrap gap-3">
                          <Button
                            variant="outline"
                            className="text-cyan-600 border-cyan-200 hover:bg-cyan-50"
                            onClick={handleCalculateClick}
                          >
                            <Download className="mr-2 h-4 w-4" /> Download
                            Worksheet
                          </Button>
                          <Button
                            className="bg-cyan-600 hover:scale-95 transition-all duration-200"
                            onClick={handleBulkUploadClick}
                          >
                            <FileUp className="mr-2 h-4 w-4" /> Upload Worksheet
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="w-full md:space-x-4 space-y-2 flex flex-col md:flex-row md:justify-between items-center">
                    <FeatureItem
                      icon={
                        <Search className="h-5 w-5 text-cyan-600 flex-shrink-0" />
                      }
                      title="Instant ASIN-Based Calculation"
                      description="Our tool instantly retrieves dimensions, weights, and calculates exact prep costs per unit or multipack."
                    />

                    <FeatureItem
                      icon={
                        <FileUp className="h-5 w-5 text-cyan-600 flex-shrink-0" />
                      }
                      title="Bulk Calculation via Worksheet"
                      description="Process multiple ASINs at once and receive an immediate breakdown of your total preparation costs."
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center gap-1 justify-center relative">
                  <div className="bg-[#e5b9083c] rounded-full border border-[#E5B808] text-black text-xs px-2 py-0.5 flex items-center gap-1">
                    <motion.span
                      style={{
                        display: "inline-block",
                        transformOrigin: "bottom center",
                      }}
                      animate={{
                        rotate: [0, 12, -12, 12, -12, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Lock className="h-3 w-3" />
                    </motion.span>

                    <span>For Paid users</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Paywall Modal */}
      <Dialog open={showPaywallModal} onOpenChange={setShowPaywallModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl">
              <Lock className="h-5 w-5 text-cyan-600" />
              Premium Feature
            </DialogTitle>
            <DialogDescription className="text-base pt-2">
              This calculator is available exclusively for paid users.
            </DialogDescription>
          </DialogHeader>

          <div className="bg-cyan-50 p-4 rounded-lg my-2">
            <h3 className="font-medium text-gray-900 mb-2">
              Upgrade to access:
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-cyan-100 p-1 mt-0.5">
                  <Calculator className="h-3.5 w-3.5 text-cyan-600" />
                </div>
                <span className="text-sm text-gray-700">
                  Instant cost calculations for any Amazon product
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-cyan-100 p-1 mt-0.5">
                  <FileUp className="h-3.5 w-3.5 text-cyan-600" />
                </div>
                <span className="text-sm text-gray-700">
                  Bulk calculations for multiple ASINs at once
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-cyan-100 p-1 mt-0.5">
                  <Download className="h-3.5 w-3.5 text-cyan-600" />
                </div>
                <span className="text-sm text-gray-700">
                  Downloadable reports and cost breakdowns
                </span>
              </li>
            </ul>
          </div>

          <DialogFooter className="sm:justify-center gap-3 mt-2">
            <Button
              variant="outline"
              onClick={() => setShowPaywallModal(false)}
              className="border-gray-300 hover:scale-95 transition-all duration-200"
            >
              Maybe Later
            </Button>
            <Button
              className="bg-cyan-600 hover:scale-95 transition-all duration-200"
              onClick={() => setShowPaywallModal(false)}
              asChild
            >
              <Link href="/pricing">View Pricing Plans</Link>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}
