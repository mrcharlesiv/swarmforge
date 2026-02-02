'use client'

import Link from 'next/link'
import { Sparkles, Check } from 'lucide-react'

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Navbar */}
      <nav className="border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/" className="flex items-center gap-2">
              <Sparkles className="h-8 w-8 text-cyan-400" />
              <span className="text-2xl font-bold text-white">SwarmForge</span>
            </Link>
            <Link href="/dashboard" className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 py-20">
        {/* Pre-launch Banner */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-8 mb-12 text-center">
          <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-white text-sm font-medium mb-4">
            🚀 Pre-launch
          </span>
          <h1 className="text-4xl font-bold text-white mb-4">Join the SwarmForge Waitlist</h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Be the first to access AI-powered agent swarms. We're launching soon with exclusive early-access perks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free */}
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-xl font-semibold text-white mb-2">Free</h3>
            <p className="text-slate-400 mb-6">Perfect for getting started</p>
            <div className="text-4xl font-bold text-white mb-6">$0<span className="text-lg text-slate-400">/mo</span></div>
            <ul className="space-y-3 mb-8">
              {['3 swarms maximum', '100 runs/month', '5 pre-built templates', 'Basic analytics', 'Community support'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-300">
                  <Check className="h-5 w-5 text-cyan-400" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/dashboard" className="block text-center bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg font-medium">
              Get Started Free
            </Link>
          </div>

          {/* Pro - Coming Soon */}
          <div className="bg-slate-800 rounded-2xl p-8 border-2 border-cyan-500/50 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-cyan-500 text-white text-sm font-medium rounded-full">
              Coming Soon
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Pro</h3>
            <p className="text-slate-400 mb-6">For serious automation</p>
            <div className="text-4xl font-bold text-white mb-6">$29<span className="text-lg text-slate-400">/mo</span></div>
            <ul className="space-y-3 mb-8">
              {['Unlimited swarms', '10,000 runs/month', 'All templates + custom', 'Advanced analytics', 'Priority support', 'API access', 'Team collaboration'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-300">
                  <Check className="h-5 w-5 text-cyan-400" />
                  {item}
                </li>
              ))}
            </ul>
            <button 
              disabled
              className="block w-full text-center bg-slate-600 text-slate-400 py-3 rounded-lg font-medium cursor-not-allowed"
            >
              Available at Launch
            </button>
          </div>
        </div>

        {/* Waitlist CTA */}
        <div className="mt-16 text-center">
          <div className="bg-slate-800/50 rounded-2xl p-8 max-w-2xl mx-auto border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-4">Get Early Access</h3>
            <p className="text-slate-400 mb-6">
              Join our waitlist to be notified when Pro plans are available and receive exclusive early-bird pricing.
            </p>
            <form className="flex gap-2 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500"
              />
              <button 
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-medium"
              >
                Join Waitlist
              </button>
            </form>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-lg p-6">
                <h4 className="font-semibold text-white mb-2">{faq.q}</h4>
                <p className="text-slate-400 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const faqs = [
  { q: 'When will Pro plans be available?', a: 'Pro plans will launch shortly after our public beta. Join the waitlist to be first in line.' },
  { q: 'What counts as a "run"?', a: 'Each time your swarm executes a task from start to finish counts as one run.' },
  { q: 'Can I upgrade later?', a: 'Yes! You can upgrade to Pro anytime once it\'s available. All your swarms and data will transfer seamlessly.' },
  { q: 'What happens if I exceed my run limit?', a: 'You\'ll be notified at 80% usage. We\'ll never cut you off mid-workflow.' },
]
