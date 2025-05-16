"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface BillingToggleProps {
  billingPeriod: "monthly" | "yearly"
  setBillingPeriod: (period: "monthly" | "yearly") => void
}

export function BillingToggle({ billingPeriod, setBillingPeriod }: BillingToggleProps) {
  const handleValueChange = (value: string) => {
    setBillingPeriod(value as "monthly" | "yearly")
  }

  return (
    <div className="flex items-center justify-center mt-8">
      <Tabs value={billingPeriod} onValueChange={handleValueChange} className="w-fit">
        <TabsList className="bg-white p-0.5 rounded-full border border-gray-200 shadow-sm">
          <TabsTrigger
            value="monthly"
            className="rounded-full text-xs px-4 py-2 text-gray-700 font-medium 
            data-[state=active]:bg-cyan-600/80 
            data-[state=active]:text-white 
            data-[state=active]:shadow-sm"
          >
            Monthly
          </TabsTrigger>
          <TabsTrigger
            value="yearly"
            className="rounded-full text-xs px-4 py-2 flex items-center gap-1.5 text-gray-700 font-medium 
            data-[state=active]:bg-gray-100 
            data-[state=active]:text-black 
            data-[state=active]:shadow-sm"
          >
            Yearly <span className="text-cyan-600 font-medium ml-1">-20%</span>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  )
}
