'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Sparkles, Check, X, ArrowRight, HelpCircle, Zap, Shield, Users, Clock } from 'lucide-react'

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true)

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500/20 rounded-xl blur-lg group-hover:bg-cyan-500/30 transition-all" />
                <div className="relative w-10 h-10 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                SwarmForge
              </span>
            </Link>
            <Link 
              href="/" 
              className="text-slate-400 hover:text-white font-medium transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <div className="relative z-10">
        {/* Header */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
              <Clock className="h-4 w-4" />
              Coming Q1 2026
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Simple, Transparent
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"> Pricing</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
              Start free, scale as you grow. No hidden fees, no surprises. 
              Choose the plan that fits your needs.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-4 p-1.5 rounded-full bg-slate-800/50 border border-slate-700/50">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  !isAnnual 
                    ? 'bg-slate-700 text-white' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  isAnnual 
                    ? 'bg-gradient-to-r from-emerald-500 to-emerald-400 text-slate-900' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Annual
                <span className="px-2 py-0.5 rounded-full bg-emerald-600/30 text-emerald-300 text-xs">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Free Plan */}
              <div className="relative bg-gradient-to-b from-slate-800/60 to-slate-900/60 border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 transition-all">
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-2">Free</h3>
                  <p className="text-slate-400 text-sm">Perfect for exploring</p>
                </div>
                <div className="mb-8">
                  <span className="text-5xl font-bold text-white">$0</span>
                  <span className="text-slate-500">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {[
                    '3 swarms maximum',
                    '100 runs/month',
                    '5 pre-built templates',
                    'Basic analytics',
                    'Community support',
                    'API access (limited)',
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-emerald-400" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/dashboard"
                  className="block w-full py-3.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-semibold text-center transition-all"
                >
                  Get Started Free
                </Link>
              </div>

              {/* Pro Plan */}
              <div className="relative bg-gradient-to-b from-slate-800/80 to-slate-900/80 border-2 border-cyan-500/30 rounded-3xl p-8">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-900 text-sm font-bold rounded-full">
                  Most Popular
                </div>
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-2">Pro</h3>
                  <p className="text-slate-400 text-sm">For serious automation</p>
                </div>
                <div className="mb-8">
                  <span className="text-5xl font-bold text-white">
                    ${isAnnual ? '23' : '29'}
                  </span>
                  <span className="text-slate-500">/month</span>
                  {isAnnual && (
                    <p className="text-sm text-emerald-400 mt-1">
                      ${Math.round(23 * 12)}/year (save $72)
                    </p>
                  )}
                </div>
                <ul className="space-y-4 mb-8">
                  {[
                    'Unlimited swarms',
                    '10,000 runs/month',
                    'All templates + custom',
                    'Advanced analytics',
                    'Priority support',
                    'Full API access',
                    'Team collaboration (5)',
                    'Custom integrations',
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-cyan-400" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  disabled
                  className="block w-full py-3.5 rounded-xl bg-slate-700 text-slate-400 font-semibold text-center cursor-not-allowed"
                >
                  Coming Soon
                </button>
              </div>

              {/* Enterprise Plan */}
              <div className="relative bg-gradient-to-b from-slate-800/60 to-slate-900/60 border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 transition-all">
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
                  <p className="text-slate-400 text-sm">For large organizations</p>
                </div>
                <div className="mb-8">
                  <span className="text-5xl font-bold text-white">Custom</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {[
                    'Everything in Pro',
                    'Unlimited runs',
                    'Unlimited team members',
                    'SSO & SAML',
                    'Audit logs',
                    'SLA guarantee',
                    'Dedicated support',
                    'Custom AI training',
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-indigo-400" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="block w-full py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 text-white font-semibold text-center transition-all">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30 border-y border-slate-800/50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Compare Plans
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-800">
                    <th className="text-left py-4 px-4 text-slate-400 font-medium">Feature</th>
                    <th className="text-center py-4 px-4 text-white font-semibold">Free</th>
                    <th className="text-center py-4 px-4 text-cyan-400 font-semibold">Pro</th>
                    <th className="text-center py-4 px-4 text-indigo-400 font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'Swarms', free: '3', pro: 'Unlimited', enterprise: 'Unlimited' },
                    { name: 'Runs per month', free: '100', pro: '10,000', enterprise: 'Unlimited' },
                    { name: 'Templates', free: '5 basic', pro: 'All + custom', enterprise: 'All + custom' },
                    { name: 'Team members', free: '1', pro: '5', enterprise: 'Unlimited' },
                    { name: 'API access', free: 'Limited', pro: 'Full', enterprise: 'Full + custom' },
                    { name: 'Analytics', free: 'Basic', pro: 'Advanced', enterprise: 'Advanced + custom' },
                    { name: 'Support', free: 'Community', pro: 'Priority', enterprise: 'Dedicated' },
                    { name: 'SSO/SAML', free: <X className="w-5 h-5 text-slate-600 mx-auto" />, pro: <X className="w-5 h-5 text-slate-600 mx-auto" />, enterprise: <Check className="w-5 h-5 text-emerald-400 mx-auto" /> },
                    { name: 'Audit logs', free: <X className="w-5 h-5 text-slate-600 mx-auto" />, pro: '7 days', enterprise: 'Full history' },
                    { name: 'SLA', free: <X className="w-5 h-5 text-slate-600 mx-auto" />, pro: <X className="w-5 h-5 text-slate-600 mx-auto" />, enterprise: <Check className="w-5 h-5 text-emerald-400 mx-auto" /> },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-slate-800/50 hover:bg-slate-800/20">
                      <td className="py-4 px-4 text-slate-300">{row.name}</td>
                      <td className="py-4 px-4 text-center text-slate-400">{row.free}</td>
                      <td className="py-4 px-4 text-center text-slate-300">{row.pro}</td>
                      <td className="py-4 px-4 text-center text-slate-300">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-gradient-to-b from-slate-800/40 to-slate-900/40 border border-slate-700/30 rounded-2xl p-6 hover:border-slate-600/50 transition-all">
                  <h3 className="font-semibold text-white mb-2 flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    {faq.question}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed pl-8">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 border border-cyan-500/20 rounded-3xl p-10 text-center overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
              
              <div className="relative">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                  Join thousands of teams already automating their workflows with SwarmForge.
                </p>
                <Link 
                  href="/dashboard" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-slate-900 font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30"
                >
                  Join the Waitlist
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800/50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white">SwarmForge</span>
            </div>
            <p className="text-slate-500 text-sm">
              © 2026 SwarmForge. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

const faqs = [
  {
    question: "When will Pro plans be available?",
    answer: "Pro plans will launch in Q1 2026. Join the waitlist to be first in line and receive a 50% discount on your first 3 months."
  },
  {
    question: "What counts as a 'run'?",
    answer: "Each time your swarm executes a complete task from start to finish counts as one run. For example, a research swarm that finds sources, synthesizes information, and generates a report would be one run."
  },
  {
    question: "Can I upgrade or downgrade anytime?",
    answer: "Yes! You can upgrade to Pro anytime once it's available. You can also downgrade from Pro to Free at any time. Your swarms and data will transfer seamlessly."
  },
  {
    question: "What happens if I exceed my run limit?",
    answer: "We'll notify you at 80% usage. We never cut you off mid-workflow. If you exceed your limit, you can upgrade or wait until the next billing cycle."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We're SOC 2 Type II compliant. All data is encrypted at rest and in transit. We never train on your data, and you can export or delete everything at any time."
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer a 30-day money-back guarantee on all paid plans. If you're not satisfied, contact us for a full refund."
  },
]
