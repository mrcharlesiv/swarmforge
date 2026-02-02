'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Sparkles, Check, X, ArrowRight, HelpCircle, Clock } from 'lucide-react'
import { Navbar } from '@/app/components/navbar'
import { Footer } from '@/app/components/footer'
import { Card } from '@/app/components/ui/card'
import { Badge } from '@/app/components/ui/badge'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/app/components/scroll-reveal'

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true)

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white overflow-x-hidden">
      {/* Animated Background - Standardized */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] animate-float animation-delay-500" />
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Header */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="emerald" dot className="mb-6">
              Coming Q1 2026
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Simple, Transparent
              <span className="gradient-text"> Pricing</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
              Start free, scale as you grow. No hidden fees, no surprises. 
              Choose the plan that fits your needs.
            </p>

            {/* Billing Toggle - Standardized */}
            <div className="inline-flex items-center gap-1 p-1.5 rounded-full bg-slate-800/50 border border-slate-700/50">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  !isAnnual 
                    ? 'bg-slate-700 text-white' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  isAnnual 
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Annual
                <span className="px-2 py-0.5 rounded-full bg-white/20 text-white text-xs">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Pricing Cards - Using Card Component */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Free Plan */}
              <AnimatedSection delay={0}>
                <Card variant="pricing" className="h-full">
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-2">Free</h3>
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
                    className="btn-secondary w-full text-center"
                  >
                    Get Started Free
                  </Link>
                </Card>
              </AnimatedSection>

              {/* Pro Plan - Popular */}
              <AnimatedSection delay={100}>
                <Card variant="popular" className="h-full relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge variant="cyan">Most Popular</Badge>
                  </div>
                  <div className="mb-8 pt-2">
                    <h3 className="text-xl font-semibold text-white mb-2">Pro</h3>
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
                    className="w-full py-3.5 rounded-xl bg-slate-700 text-slate-400 font-semibold text-center cursor-not-allowed"
                  >
                    Coming Soon
                  </button>
                </Card>
              </AnimatedSection>

              {/* Enterprise Plan */}
              <AnimatedSection delay={200}>
                <Card variant="pricing" className="h-full">
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-2">Enterprise</h3>
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
                        <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-purple-400" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="btn-secondary w-full text-center">
                    Contact Sales
                  </button>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30 border-y border-slate-800/50">
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
                    <th className="text-center py-4 px-4 text-purple-400 font-semibold">Enterprise</th>
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
                    <tr key={idx} className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
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
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <Card key={idx} variant="glass" className="hover:border-slate-600/50 transition-colors">
                  <h3 className="font-semibold text-white mb-2 flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    {faq.question}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed pl-8">
                    {faq.answer}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner - Standardized */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card variant="glass" className="relative overflow-hidden text-center p-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
              
              <div className="relative">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                  Join thousands of teams already automating their workflows with SwarmForge.
                </p>
                <Link 
                  href="/dashboard" 
                  className="btn-primary text-lg"
                >
                  Join the Waitlist
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </Card>
          </div>
        </section>

        <Footer />
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
