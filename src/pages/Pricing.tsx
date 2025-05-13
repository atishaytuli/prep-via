"use client";
import { useState } from "react";
import { Check, Bell, Users, Sparkles, Zap } from "lucide-react";

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
    "monthly"
  );

  return (
    <section className="py-20 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Flexible Pricing for Growing Businesses
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Choose a plan that fits your business. Whether {"you're"} a solo operator
          or a growing team, Prep Via offers scalable solutions to match your
          needs.
        </p>
      </div>

      {/* Billing toggle */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
          <button
            onClick={() => setBillingPeriod("monthly")}
            className={`py-2 px-6 rounded-full text-sm font-medium transition-colors ${
              billingPeriod === "monthly"
                ? "bg-white shadow-sm"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingPeriod("yearly")}
            className={`py-2 px-6 rounded-full text-sm font-medium transition-colors relative ${
              billingPeriod === "yearly"
                ? "bg-white shadow-sm"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            Yearly
            <span className="absolute -top-2 -right-2 bg-cyan-500 text-white text-xs px-2 py-0.5 rounded-full">
              Save 18%
            </span>
          </button>
        </div>
      </div>

      {/* Pricing cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Free Plan */}
        <div className="border border-gray-200 rounded-xl p-6 flex flex-col h-full">
          <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
            <Bell className="h-5 w-5 text-gray-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Free Plan</h3>
          <p className="text-gray-600 text-sm mb-1">Get started at no cost</p>
          <p className="text-gray-500 text-sm mb-6">
            Up to 2 seats. Billed monthly
          </p>

          <div className="mb-6">
            <span className="text-4xl font-bold">$0</span>
            <span className="text-gray-500 ml-1">seat/mon</span>
          </div>

          <button className="w-full py-2 px-4 border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-50 transition-colors mb-6">
            Get Started
          </button>

          <div>
            <p className="font-medium text-gray-900 mb-3">Added Features</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
                <span className="text-gray-600 text-sm">50 call minutes</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
                <span className="text-gray-600 text-sm">50 text messages</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Basic */}
        <div className="border border-gray-200 rounded-xl p-6 flex flex-col h-full">
          <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
            <Users className="h-5 w-5 text-gray-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Basic</h3>
          <p className="text-gray-600 text-sm mb-1">
            Essential business phone tools
          </p>
          <p className="text-gray-500 text-sm mb-6">Billed monthly</p>

          <div className="mb-1">
            <div className="text-xs text-gray-500">From</div>
            <div className="mb-6">
              <span className="text-4xl font-bold">$8</span>
              <span className="text-gray-500 ml-1">seat/mon</span>
            </div>
          </div>

          <button className="w-full py-2 px-4 border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-50 transition-colors mb-6">
            Get Started
          </button>

          <div>
            <p className="font-medium text-gray-900 mb-3">Added Features</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
                <span className="text-gray-600 text-sm">
                  Unlimited call minutes
                </span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
                <span className="text-gray-600 text-sm">
                  Unlimited text messages
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* AI Basic */}
        <div className="border-2 border-cyan-500 rounded-xl p-6 flex flex-col h-full relative">
          <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-50">
            <Sparkles className="h-5 w-5 text-cyan-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">AI Basic</h3>
          <p className="text-gray-600 text-sm mb-1">
            Smart automation, simple pricing
          </p>
          <p className="text-gray-500 text-sm mb-6">Billed monthly</p>

          <div className="mb-1">
            <div className="text-xs text-gray-500">From</div>
            <div className="mb-6">
              <span className="text-4xl font-bold">$13</span>
              <span className="text-gray-500 ml-1">seat/mon</span>
            </div>
          </div>

          <button className="w-full py-2 px-4 bg-cyan-500 rounded-full text-white font-medium hover:bg-cyan-600 transition-colors mb-6">
            Get Started
          </button>

          <div>
            <p className="font-medium text-gray-900 mb-3">Added Features</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-cyan-500 mr-2 flex-shrink-0" />
                <span className="text-gray-600 text-sm">
                  Unlimited call minutes
                </span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-cyan-500 mr-2 flex-shrink-0" />
                <span className="text-gray-600 text-sm">
                  Unlimited text messages
                </span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-cyan-500 mr-2 flex-shrink-0" />
                <span className="text-gray-600 text-sm">
                  2 AI calls per month
                </span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-cyan-500 mr-2 flex-shrink-0" />
                <span className="text-gray-600 text-sm">
                  AI call transcript scoring
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* AI Pro */}
        <div className="border border-gray-200 rounded-xl p-6 flex flex-col h-full">
          <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
            <Zap className="h-5 w-5 text-gray-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">AI Pro</h3>
          <p className="text-gray-600 text-sm mb-1">
            Advanced AI for maximum growth
          </p>
          <p className="text-gray-500 text-sm mb-6">Billed monthly</p>

          <div className="mb-1">
            <div className="text-xs text-gray-500">From</div>
            <div className="mb-6">
              <span className="text-4xl font-bold">$26</span>
              <span className="text-gray-500 ml-1">seat/mon</span>
            </div>
          </div>

          <button className="w-full py-2 px-4 border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-50 transition-colors mb-6">
            Get Started
          </button>

          <div>
            <p className="font-medium text-gray-900 mb-3">Added Features</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
                <span className="text-gray-600 text-sm">
                  Unlimited call minutes
                </span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
                <span className="text-gray-600 text-sm">
                  Unlimited text messages
                </span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
                <span className="text-gray-600 text-sm">
                  Unlimited AI calls
                </span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
                <span className="text-gray-600 text-sm">
                  AI call transcript scoring
                </span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
                <span className="text-gray-600 text-sm">AI Promotions</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
                <span className="text-gray-600 text-sm">CRM Integrations</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
