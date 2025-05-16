"use client"

import { useState } from "react"
import { Calculator, Download, FileUp, Search, ArrowRight } from "lucide-react"
import { FeatureItem } from "./feature-item"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CalculatorSection() {
  const [calculationType, setCalculationType] = useState<"asin" | "bulk">("asin")
  const [asinInput, setAsinInput] = useState("")

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
                  <h2 className="text-2xl font-semibold font-inter mb-4 text-gray-900">Instant Cost Calculator Tool</h2>
                  <p className="text-gray-600 mb-6">
                    Simplify your logistics with our advanced proprietary tool. Instantly calculate precise preparation
                    costs for your inventory.
                  </p>

                  {/* Calculator Input Section */}
                  <div className="mb-8 bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <Tabs
                      value={calculationType}
                      onValueChange={(v) => setCalculationType(v as "asin" | "bulk")}
                      className="w-fit mb-4"
                    >
                      <TabsList className="bg-white p-0.5 rounded-full border border-gray-200 shadow-sm">
                        <TabsTrigger
                          value="asin"
                          className="rounded-full text-xs px-4 py-2 text-gray-700 font-medium 
                          data-[state=active]:bg-cyan-600/80 
                          data-[state=active]:text-white 
                          data-[state=active]:shadow-sm"
                        >
                          ASIN Calculation
                        </TabsTrigger>
                        <TabsTrigger
                          value="bulk"
                          className="rounded-full text-xs px-4 py-2 flex items-center gap-1.5 text-gray-700 font-medium 
                          data-[state=active]:bg-gray-100 
                          data-[state=active]:text-black 
                          data-[state=active]:shadow-sm"
                        >
                          Bulk Calculation
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>

                    {calculationType === "asin" && (
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="asin-input" className="block text-sm font-medium text-gray-700 mb-1">
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
                            <Button className="bg-cyan-600 hover:bg-cyan-700">
                              Calculate <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500">
                          Enter any Amazon ASIN or product URL to instantly calculate preparation costs.
                        </p>
                      </div>
                    )}

                    {calculationType === "bulk" && (
                      <div className="space-y-4">
                        <p className="text-sm text-gray-700">
                          Download our Excel worksheet, list your ASINs, and upload it back for bulk calculation.
                        </p>
                        <div className="flex flex-wrap gap-3">
                          <Button variant="outline" className="text-cyan-600 border-cyan-200 hover:bg-cyan-50">
                            <Download className="mr-2 h-4 w-4" /> Download Worksheet
                          </Button>
                          <Button className="bg-cyan-600 hover:bg-cyan-700">
                            <FileUp className="mr-2 h-4 w-4" /> Upload Worksheet
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-x-2 spacr-y-2 flex flex-col md:flex-row">
                    <FeatureItem
                      icon={<Search className="h-5 w-5 text-cyan-600 flex-shrink-0" />}
                      title="Instant ASIN-Based Calculation"
                      description="Our tool instantly retrieves dimensions, weights, and calculates exact prep costs per unit or multipack."
                    />

                    <FeatureItem
                      icon={<FileUp className="h-5 w-5 text-cyan-600 flex-shrink-0" />}
                      title="Bulk Calculation via Worksheet"
                      description="Process multiple ASINs at once and receive an immediate breakdown of your total preparation costs."
                    />
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-center">
                  <div className="bg-cyan-50 p-5 rounded-full">
                    <Calculator className="h-6 w-6 text-cyan-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
