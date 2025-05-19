import { Check, Users, Sparkles, Bell } from "lucide-react";
import type { PricingPlan } from "../../../prepviaclients/types/pricing";
interface PricingCardProps {
  plan: PricingPlan;
  billingPeriod: "monthly" | "yearly";
}

export default function PricingCard({ plan, billingPeriod }: PricingCardProps) {
  const IconComponent = getIconComponent(plan.icon);

  return (
    <div
      className={`relative rounded-xl border ${
        plan.isPopular ? "border-cyan-200 shadow-lg" : "border-gray-200"
      } overflow-hidden`}
    >
      {plan.isPopular && (
        <div className="absolute top-0 right-0 bg-cyan-500 text-white text-xs font-medium px-3 py-1 rounded-bl-lg">
          Popular
        </div>
      )}
      {plan.isbig && (
        <div className="absolute top-0 right-0 bg-cyan-500 text-white text-xs font-medium px-3 py-1 rounded-bl-lg">
          Custom Plan
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center ${
              plan.iconBgClass || "bg-cyan-100"
            }`}
          >
            <IconComponent
              className={`w-6 h-6 ${plan.iconColorClass || "text-cyan-600"}`}
            />
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
        <p className="text-gray-500 text-sm mb-4">{plan.subDescription}</p>
        <div className="mb-6">
          <div className="flex items-baseline">
            <span className="text-3xl font-bold">
              {!plan.isbig ? (
                <>
                  $
                  {billingPeriod === "monthly"
                    ? plan.price.monthly
                    : Math.round(Number(plan.price.yearly) / 12)}
                </>
              ) : (
                plan.price.yearly
              )}
            </span>
            {!plan.isbig && <span className="text-gray-500 ml-1">/month</span>}
          </div>

          {billingPeriod === "yearly" && (
            <p className="text-cyan-600 text-sm font-medium mt-1">
              Billed annually (save 20%)
            </p>
          )}
        </div>
        <ul className="space-y-3 mb-6">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check
                className={`w-5 h-5 mr-2 mt-0.5 ${
                  plan.checkIconColorClass || "text-cyan-500"
                }`}
              />
              <span className="text-gray-700">{feature.text}</span>
            </li>
          ))}
        </ul>
        <button
          className={`w-full py-2.5 px-4 rounded-lg font-medium transition-colors
    ${
      plan.isbig
        ? "bg-cyan-600 text-white hover:bg-cyan-700"
        : plan.isPopular
        ? "bg-cyan-600 text-white hover:bg-cyan-700"
        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
    }
  `}
        >
          Choose Plan
        </button>
      </div>
    </div>
  );
}

function getIconComponent(iconName: string) {
  switch (iconName) {
    case "Users":
      return Users;
    case "Sparkles":
      return Sparkles;
    case "Bell":
      return Bell;
    default:
      return Users;
  }
}
