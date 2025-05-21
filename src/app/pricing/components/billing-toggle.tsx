"use client"
import { motion } from "framer-motion";
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
  <TabsList className="bg-white p-0.5 rounded-full border border-gray-200 shadow-sm flex gap-1">

    {/* Monthly Tab */}
    <motion.div
      animate={
        billingPeriod !== "monthly"
          ? { rotate: [0, -2, 2, -1, 1, 0] }
          : {}
      }
      transition={
        billingPeriod !== "monthly"
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
        value="monthly"
        className="rounded-full text-xs px-4 py-2 text-gray-700 font-medium bg-cyan-50 
        data-[state=active]:bg-cyan-600/80 
        data-[state=active]:text-white 
        data-[state=active]:shadow-sm"
      >
        Monthly
      </TabsTrigger>
    </motion.div>

    {/* Yearly Tab */}
    <motion.div
      animate={
        billingPeriod !== "yearly"
          ? { rotate: [0, -2, 2, -1, 1, 0] }
          : {}
      }
      transition={
        billingPeriod !== "yearly"
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
        value="yearly"
        className="rounded-full text-xs px-4 py-2 flex items-center gap-1.5 text-gray-700 font-medium bg-cyan-50 
        data-[state=active]:bg-gray-100 
        data-[state=active]:text-black 
        data-[state=active]:shadow-sm"
      >
        Yearly <span className="text-cyan-600 font-medium ml-1">-20%</span>
      </TabsTrigger>
    </motion.div>

  </TabsList>
</Tabs>
    </div>
  )
}
