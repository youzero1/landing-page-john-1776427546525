'use client';

import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-brand-700 rounded-lg flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z" fill="white" />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900">Lumina</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">How it works</a>
            <a href="#testimonials" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Testimonials</a>
            <a href="#pricing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors px-4 py-2">
              Sign in
            </button>
            <button className="text-sm bg-brand-600 text-white px-4 py-2 rounded-lg hover:bg-brand-700 transition-colors font-medium">
              Get started free
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          <a href="#features" className="block text-sm text-gray-600 hover:text-gray-900 py-2" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#how-it-works" className="block text-sm text-gray-600 hover:text-gray-900 py-2" onClick={() => setMenuOpen(false)}>How it works</a>
          <a href="#testimonials" className="block text-sm text-gray-600 hover:text-gray-900 py-2" onClick={() => setMenuOpen(false)}>Testimonials</a>
          <a href="#pricing" className="block text-sm text-gray-600 hover:text-gray-900 py-2" onClick={() => setMenuOpen(false)}>Pricing</a>
          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <button className="text-sm text-gray-600 text-left py-2">Sign in</button>
            <button className="text-sm bg-brand-600 text-white px-4 py-2 rounded-lg font-medium">Get started free</button>
          </div>
        </div>
      )}
    </nav>
  );
}
