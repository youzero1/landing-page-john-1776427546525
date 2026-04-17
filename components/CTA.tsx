'use client';

import { useState } from 'react';

export default function CTA() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-brand-600 to-brand-800 rounded-3xl overflow-hidden px-8 py-16 md:px-16 text-center">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -translate-x-1/3 translate-y-1/3" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Ready to ship faster?
            </h2>
            <p className="text-brand-100 text-lg mb-10 max-w-xl mx-auto">
              Join 10,000+ teams already using Lumina to build better products. Start your free 14-day trial today.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 justify-center">
              <input
                type="email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                className="w-full sm:w-80 px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-brand-200 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm backdrop-blur-sm"
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-white text-brand-700 font-semibold px-7 py-3.5 rounded-xl hover:bg-brand-50 transition-colors text-sm shadow-lg"
              >
                Get started free →
              </button>
            </form>

            <p className="text-brand-200 text-xs mt-5">No credit card required · Free 14-day trial · Cancel anytime</p>

            {/* Logos row */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
              <span className="text-brand-300 text-xs">Integrates with:</span>
              {['Slack', 'GitHub', 'Figma', 'Jira', 'Notion'].map((tool) => (
                <span key={tool} className="text-white/70 text-sm font-semibold">{tool}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
