'use client';

import { Sparkles, Zap, Shield } from 'lucide-react';
import { Badge } from '@/app/components/ui/badge';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/app/components/scroll-reveal';

const features = [
  {
    icon: <Sparkles className="h-8 w-8 text-cyan-400" />,
    title: 'Describe Your Goal',
    description: 'Tell SwarmForge what you need in plain English. No coding required.',
  },
  {
    icon: <Zap className="h-8 w-8 text-purple-400" />,
    title: 'AI Builds Your Swarm',
    description: 'We automatically generate the optimal agent team and configuration.',
  },
  {
    icon: <Shield className="h-8 w-8 text-emerald-400" />,
    title: 'Deploy & Monitor',
    description: 'Run your swarm, monitor progress, and get results in real-time.',
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24">
      <div className="container-custom">
        <ScrollReveal className="text-center mb-16">
          <Badge variant="emerald" className="mb-4">Simple Process</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From idea to deployed swarm in minutes, not days.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-cyan-500/0 via-cyan-500/30 to-cyan-500/0" />

          <StaggerContainer className="contents" staggerDelay={0.15}>
            {features.map((feature, idx) => (
              <StaggerItem key={idx}>
                <div className="text-center relative">
                  <div className="w-20 h-20 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-slate-700 relative z-10">
                    <div className="absolute inset-0 bg-cyan-500/5 rounded-2xl animate-pulse" />
                    {feature.icon}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold text-sm mx-auto mb-4 relative z-10">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-400">{feature.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
