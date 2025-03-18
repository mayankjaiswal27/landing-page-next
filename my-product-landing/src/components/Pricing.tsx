'use client' // Add this since we're using client-side state

import { useState } from 'react'

export function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "₹ 29",
      features: ["1 User", "Core Features", "Email Support"],
      popular: false,
    },
    {
      name: "Pro",
      price: "₹ 79",
      features: ["5 Users", "Advanced Features", "Priority Support"],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "₹  199",
      features: ["Unlimited Users", "All Features", "Dedicated Support"],
      popular: false,
    },
  ]

  // State to track the selected plan (default to "Pro" since it's popular)
  const [selectedPlan, setSelectedPlan] = useState("Pro")

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Simple, Transparent Pricing
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              onClick={() => setSelectedPlan(plan.name)} // Make the plan clickable
              className={`relative bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 cursor-pointer ${
                plan.popular ? 'border-2 border-blue-600' : 'border border-gray-100'
              } ${
                selectedPlan === plan.name
                  ? 'ring-4 ring-blue-400 ring-opacity-50 scale-105 bg-blue-50'
                  : 'hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6 text-gray-900">
                {plan.price}
                <span className="text-base font-normal text-gray-600">/mo</span>
              </p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600">
                    <span className="w-5 h-5 mr-2 text-blue-600">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-full font-semibold transition-all duration-200 ${
                  selectedPlan === plan.name
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-blue-600 hover:text-white'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}