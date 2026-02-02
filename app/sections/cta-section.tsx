'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/app/components/scroll-reveal';

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10" />
      <div className="container-custom relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Your First Swarm?
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Join thousands of teams using SwarmForge to automate their workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard" className="btn-primary text-lg py-4 px-8 touch-feedback">
              Get Started Free
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/builder" className="btn-secondary text-lg py-4 px-8 touch-feedback">
              Try the Builder
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
