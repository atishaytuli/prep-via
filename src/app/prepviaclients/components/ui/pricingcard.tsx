import { Check } from "lucide-react"
import { Bell, Users, Sparkles } from "lucide-react"
import type { PricingPlan } from "../../types/pricing"

interface PricingCardProps {
  plan: PricingPlan
  billingPeriod: "monthly" | "yearly"
}

export default function PricingCard({ plan, billingPeriod }: PricingCardProps) {
  // Map icon string to component
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Users":
        return <Users className={`h-5 w-5 ${plan.iconColorClass || "text-gray-600"}`} />
      case "Sparkles":
        return <Sparkles className={`h-5 w-5 ${plan.iconColorClass || "text-gray-600"}`} />
      case "Bell":
        return <Bell className={`h-5 w-5 ${plan.iconColorClass || "text-gray-600"}`} />
      default:
        return <Users className={`h-5 w-5 ${plan.iconColorClass || "text-gray-600"}`} />
    }
  }

  const price = billingPeriod === "monthly" ? plan.price.monthly : plan.price.yearly
  const priceText = price === 0 ? "$0" : `$${price}`

  return (
    <div
      className={`${
        plan.isPopular || plan.isbig ? "border-2 border-cyan-500" : "border border-gray-200"
      } rounded-xl p-6 flex flex-col h-full relative`}
    >
      <div
        className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg ${plan.iconBgClass || "bg-gray-100"}`}
      >
        {getIcon(plan.icon)}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
      <p className="text-gray-600 text-sm font-medium mb-1">{plan.description}</p>
      <p className="text-gray-500 text-sm font-medium mb-6">{plan.subDescription}</p>

      <div className="mb-1">
        <div className="text-xs text-gray-500">From</div>
        <div className="mb-6">
          <span className="text-4xl font-bold">{priceText}</span>
           {!plan.isbig && <span className="text-gray-500 ml-1">seat/mon</span>}
        </div>
      </div>

      <button
        className={`w-full py-2 px-4 ${
          plan.isPopular || plan.isbig
            ? "bg-cyan-500 text-white "
            : "border border-gray-300 text-gray-700 "
        } rounded-full font-medium hover:scale-95 transition-all duration-200 mb-6`}
      >
        Get Started
      </button>

      <div>
        <p className="font-medium text-gray-900 mb-3">Added Features</p>
        <ul className="space-y-2">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className={`h-5 w-5 ${plan.checkIconColorClass || "text-gray-500"} mr-2 flex-shrink-0`} />
              <span className="text-gray-600 text-sm">{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
