"use client";

import Link from "next/link";

export default function Home() {
  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for individuals",
      features: [
        "5GB cloud storage",
        "Basic templates",
        "Standard support"
      ],
      buttonText: "Get Started",
      buttonStyle: "border border-blue-600 text-blue-600 hover:bg-blue-50",
      popular: false
    },
    {
      name: "Pro",
      price: "$15",
      period: "/month",
      description: "For growing teams",
      features: [
        "100GB cloud storage",
        "Premium templates",
        "Priority support",
        "Team collaboration"
      ],
      buttonText: "Start Free Trial",
      buttonStyle: "bg-blue-600 text-white hover:bg-blue-700",
      popular: false
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Unlimited storage",
        "SSO integration",
        "Dedicated support",
        "Advanced analytics",
        "Custom integrations"
      ],
      buttonText: "Contact Us",
      buttonStyle: "border border-blue-600 text-blue-600 hover:bg-blue-50",
      popular: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">Canvax</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                href="/chatbot"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                AI Assistant
              </Link>
              <Link 
                href="/contact"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact Sales
              </Link>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Canvax Pricing
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your team's creative needs
          </p>
          <div className="mt-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              Show with Canvax
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                plan.popular ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-blue-600 text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    {plan.period && (
                      <span className="text-xl text-gray-500 ml-1">{plan.period}</span>
                    )}
                  </div>
                  <p className="mt-4 text-gray-600">{plan.description}</p>
                </div>

                <div className="mt-8">
                  {plan.name === "Enterprise" ? (
                    <Link
                      href="/contact"
                      className={`w-full py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${plan.buttonStyle} block text-center`}
                    >
                      {plan.buttonText}
                    </Link>
                  ) : (
                    <button
                      className={`w-full py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${plan.buttonStyle}`}
                    >
                      {plan.buttonText}
                    </button>
                  )}
                </div>

                <div className="mt-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500">
            <p>&copy; 2025 Canvax. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
