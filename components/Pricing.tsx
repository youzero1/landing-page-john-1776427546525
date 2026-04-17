'use client';

import { useState } from 'react';

const plans = [
  {
    name: 'Starter',
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: 'Perfect for individuals and small teams just getting started.',
    features: [
      'Up to 5 team members',
      '10 active projects',
      '5GB storage',
      'Basic analytics',
      'Email support',
    ],
    cta: 'Get started free',
    highlighted: false,
  },
  {
    name: 'Pro',
    monthlyPrice: 29,
    yearlyPrice: 19,
    description: 'For growing teams that need more power and flexibility.',
    features: [
      'Up to 50 team members',
      'Unlimited projects',
      '100GB storage',
      'Advanced analytics',
      'Priority support',
      'Custom workflows',
      'API access',
    ],
    cta: 'Start free trial',
    highlighted: true,
    badge: 'Most popular',
  },
  {
    name: 'Enterprise',
    monthlyPrice: 99,
    yearlyPrice: 79,
    description: 'For large organizations with advanced needs and compliance.',
    features: [
      'Unlimited team members',
      'Unlimited everything',
      '1TB storage',
      'Custom analytics',
      'Dedicated support',
      'SSO & SAML',
      'SLA guarantee',
      'Custom contracts',
    ],
    cta: 'Contact sales',
    highlighted: false,
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold text-brand-600 uppercase tracking-widest">Pricing</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            No hidden fees. No surprises. Start free and scale as you grow.
          </p>

          {/* Toggle */}
          <div className="mt-8 inline-flex items-center gap-4 bg-white border border-gray-200 rounded-full px-2 py-1.5">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                !yearly ? 'bg-brand-600 text-white shadow-sm' : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                yearly ? 'bg-brand-600 text-white shadow-sm' : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              Yearly
              <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">
                Save 35%
              </span>
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-brand-600 text-white shadow-2xl scale-105'
                  : 'bg-white border border-gray-100 shadow-sm'
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-400 to-pink-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow">
                  {plan.badge}
                </span>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-1 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlighted ? 'text-brand-100' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <span className={`text-5xl font-extrabold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className={`text-sm ml-1 ${plan.highlighted ? 'text-brand-200' : 'text-gray-400'}`}>
                  /mo
                </span>
                {yearly && plan.monthlyPrice > 0 && (
                  <div className={`text-xs mt-1 ${plan.highlighted ? 'text-brand-200' : 'text-gray-400'}`}>
                    billed annually
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <svg
                      width="16"
                      height="16"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="flex-shrink-0"
                    >
                      <circle cx="12" cy="12" r="10" fill={plan.highlighted ? 'rgba(255,255,255,0.2)' : '#e0f2fe'} />
                      <path
                        d="M8 12l3 3 5-5"
                        stroke={plan.highlighted ? 'white' : '#0ea5e9'}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className={plan.highlighted ? 'text-brand-50' : 'text-gray-600'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3.5 rounded-xl text-sm font-semibold transition-all ${
                  plan.highlighted
                    ? 'bg-white text-brand-600 hover:bg-brand-50'
                    : 'bg-brand-600 text-white hover:bg-brand-700'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
