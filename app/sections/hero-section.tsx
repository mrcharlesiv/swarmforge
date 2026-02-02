'use client';

import Link from 'next/link';
import { ArrowRight, Play, Zap, Sparkles, Shield, Globe, Users, Workflow, Bot, Clock, Lock } from 'lucide-react';
import { Badge } from '@/app/components/ui/badge';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/app/components/scroll-reveal';
import { WaitlistForm } from '@/app/components/waitlist-form';

const stats = [
  { value: '10K+', label: 'Swarms Created' },
  { value: '1M+', label: 'Tasks Completed' },
  { value: '99.9%', label: 'Uptime' },
  { value: '24/7', label: 'AI Support' },
];

export function HeroSection() {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      <div className="container-custom relative z-10">
        <ScrollReveal className="text-center max-w-4xl mx-auto">
          <Badge variant="cyan" dot className="mb-8">
            Now in Public Beta
          </Badge>

          {/* Waitlist Form */}
          <WaitlistForm />

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            Build AI Agent Swarms
            <br />
            <span className="gradient-text">Without Code</span>
          </h1>

          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Describe what you need. SwarmForge builds autonomous agent teams that work together
            to complete complex tasks — research, content, outreach, and more.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/dashboard" className="btn-primary text-lg py-4 px-8 touch-feedback">
              Start Building Free
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/templates" className="btn-secondary text-lg py-4 px-8 touch-feedback">
              <Play className="h-5 w-5" />
              View Templates
            </Link>
          </div>

          {/* Stats */}
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto" staggerDelay={0.1}>
            {stats.map((stat, idx) => (
              <StaggerItem key={idx}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </ScrollReveal>
      </div>
    </section>
  );
}
