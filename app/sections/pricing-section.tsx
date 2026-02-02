'use client';

import Link from 'next/link';
import { Check } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { ScrollReveal } from '@/app/components/scroll-reveal';

export function PricingSection() {
  return (
    <section className="py-24">
      <div className="container-custom">
        <ScrollReveal className="text-center mb-16">
          <Badge variant="cyan" className="mb-4">Simple Pricing</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Start Free, Scale as You Grow
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            No credit card required. Upgrade when you need more power.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Tier */}
          <ScrollReveal delay={0.1}>
            <Card variant="pricing" className="h-full touch-feedback">
              <div className="mb-6">
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
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-300">
                    <Check className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/dashboard" className="block w-full text-center btn-secondary touch-feedback">
                Get Started Free
              </Link>
            </Card>
          </ScrollReveal>

          {/* Pro Tier */}
          <ScrollReveal delay={0.2}>
            <Card variant="popular" className="h-full relative touch-feedback">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge variant="cyan">Most Popular</Badge>
              </div>
              <div className="mb-6 pt-2">
                <h3 className="text-xl font-semibold text-white mb-2">Pro</h3>
                <p className="text-slate-400 text-sm">For serious automation</p>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-bold text-white">$23</span>
                <span className="text-slate-500">/month</span>
                <p className="text-sm text-emerald-400 mt-1">$276/year (save $72)</p>
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
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-300">
                    <Check className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/dashboard" className="block w-full text-center btn-primary touch-feedback">
                Start Pro Trial
              </Link>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
