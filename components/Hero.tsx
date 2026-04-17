'use client';

import { useState } from 'react';

export default function Hero() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-purple-50 -z-10" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-100 rounded-full blur-3xl opacity-30 -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-100 rounded-full blur-3xl opacity-20 -z-10 -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-100 text-brand-700 text-sm font-medium px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse" />
            Trusted by 10,000+ teams worldwide
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
            Build Faster,{' '}
            <span className="bg-gradient-to-r from-brand-500 to-purple-600 bg-clip-text text-transparent">
              Ship Smarter
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10">
            Lumina is the all-in-one platform that helps product teams design, collaborate, and ship remarkable products — in record time.
          </p>

          {/* Email capture */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 justify-center mb-6">
            <input
              type="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              placeholder="Enter your work email"
              className="w-full sm:w-80 px-5 py-3.5 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent text-sm shadow-sm"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors text-sm shadow-lg shadow-brand-200"
            >
              Start for free →
            </button>
          </form>

          <p className="text-xs text-gray-400">No credit card required · Free 14-day trial · Cancel anytime</p>
        </div>

        {/* Hero Image / Dashboard Mockup */}
        <div className="mt-16 relative max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
            {/* Fake browser chrome */}
            <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className="ml-4 flex-1 bg-gray-200 rounded-md h-6 max-w-xs" />
            </div>
            {/* Dashboard content */}
            <div className="p-6 bg-gray-50 min-h-[320px] md:min-h-[400px]">
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[{ label: 'Projects', value: '24', color: 'bg-brand-500' }, { label: 'Tasks Done', value: '1,284', color: 'bg-green-500' }, { label: 'Team Members', value: '38', color: 'bg-purple-500' }].map((stat) => (
                  <div key={stat.label} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                    <div className={`w-8 h-8 ${stat.color} rounded-lg mb-3 opacity-80`} />
                    <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-4 bg-gray-200 rounded w-32" />
                  <div className="h-6 bg-brand-100 rounded-full w-20" />
                </div>
                <div className="space-y-3">
                  {[80, 60, 90, 45].map((width, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded bg-gray-200 flex-shrink-0" />
                      <div className="flex-1 bg-gray-100 rounded-full h-2">
                        <div className="bg-brand-400 h-2 rounded-full" style={{ width: `${width}%` }} />
                      </div>
                      <div className="text-xs text-gray-400 w-8">{width}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Floating cards */}
          <div className="absolute -left-8 top-1/3 bg-white rounded-xl shadow-xl border border-gray-100 p-3 hidden lg:flex items-center gap-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                <path d="M5 13l4 4L19 7" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-800">Sprint completed</div>
              <div className="text-xs text-gray-400">2 min ago</div>
            </div>
          </div>
          <div className="absolute -right-8 bottom-1/4 bg-white rounded-xl shadow-xl border border-gray-100 p-3 hidden lg:flex items-center gap-3">
            <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-800">+34% velocity</div>
              <div className="text-xs text-gray-400">This week</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
