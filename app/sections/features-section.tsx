'use client';

import { Bot, Clock, Lock, Workflow, Globe, Shield } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/app/components/scroll-reveal';

const features = [
  { icon: <Bot className="h-6 w-6" />, title: 'Multi-Agent Collaboration', desc: 'Agents work together, share context, and coordinate tasks automatically.' },
  { icon: <Clock className="h-6 w-6" />, title: 'Real-Time Monitoring', desc: 'Watch your swarms work with live logs, progress bars, and status updates.' },
  { icon: <Lock className="h-6 w-6" />, title: 'Enterprise Security', desc: 'SOC 2 compliant with end-to-end encryption for all data.' },
  { icon: <Workflow className="h-6 w-6" />, title: 'Visual Workflow Builder', desc: 'Drag-and-drop interface for designing complex agent workflows.' },
  { icon: <Globe className="h-6 w-6" />, title: 'API & Integrations', desc: 'Connect with 100+ tools including Slack, Notion, and CRMs.' },
  { icon: <Shield className="h-6 w-6" />, title: 'Human-in-the-Loop', desc: 'Set approval gates and manual checkpoints for critical decisions.' },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-gradient-spotlight">
      <div className="container-custom">
        <ScrollReveal className="text-center mb-16">
          <Badge variant="amber" className="mb-4">Powerful Features</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Everything You Need
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Built for teams that need reliable, scalable AI automation.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
          {features.map((feature, idx) => (
            <StaggerItem key={idx}>
              <Card variant="feature" className="h-full touch-feedback">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.desc}</p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
