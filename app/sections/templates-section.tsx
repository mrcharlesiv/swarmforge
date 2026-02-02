'use client';

import Link from 'next/link';
import { ArrowRight, Zap, Sparkles, Globe, Users, Workflow, Bot } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/app/components/scroll-reveal';

const templates = [
  {
    id: 'lead-gen',
    name: 'Lead Generation',
    description: 'Research prospects, qualify leads, and automate personalized outreach.',
    icon: <Zap className="h-6 w-6" />,
    agents: ['Researcher', 'Qualifier', 'Outreach'],
    color: 'cyan',
  },
  {
    id: 'content',
    name: 'Content Creation',
    description: 'Research topics, draft content, edit, and schedule across platforms.',
    icon: <Sparkles className="h-6 w-6" />,
    agents: ['Researcher', 'Writer', 'Editor', 'Scheduler'],
    color: 'purple',
  },
  {
    id: 'research',
    name: 'Research Assistant',
    description: 'Deep research on any topic with synthesized reports and citations.',
    icon: <Globe className="h-6 w-6" />,
    agents: ['Query', 'Gatherer', 'Synthesizer'],
    color: 'emerald',
  },
  {
    id: 'support',
    name: 'Customer Support',
    description: 'Classify tickets, auto-respond, and escalate complex issues.',
    icon: <Users className="h-6 w-6" />,
    agents: ['Classifier', 'Responder', 'Escalator'],
    color: 'amber',
  },
  {
    id: 'data',
    name: 'Data Processing',
    description: 'Ingest data, clean, transform, and export to any format.',
    icon: <Workflow className="h-6 w-6" />,
    agents: ['Ingestor', 'Cleaner', 'Transformer'],
    color: 'rose',
  },
  {
    id: 'custom',
    name: 'Custom Swarm',
    description: 'Build a custom agent team for your unique workflow.',
    icon: <Bot className="h-6 w-6" />,
    agents: ['Custom Agents'],
    color: 'cyan',
  },
];

export function TemplatesSection() {
  return (
    <section className="py-24 bg-gradient-spotlight">
      <div className="container-custom">
        <ScrollReveal className="text-center mb-16">
          <Badge variant="purple" className="mb-4">Pre-Built Solutions</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready-to-Deploy Templates
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Start with battle-tested swarm templates designed for common business workflows.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
          {templates.map((template) => (
            <StaggerItem key={template.id}>
              <Card variant="template" className="h-full p-6 group touch-feedback">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`icon-wrapper w-12 h-12 rounded-xl flex items-center justify-center ${
                    template.color === 'cyan' ? 'bg-cyan-500/10 text-cyan-400' :
                    template.color === 'purple' ? 'bg-purple-500/10 text-purple-400' :
                    template.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-400' :
                    template.color === 'amber' ? 'bg-amber-500/10 text-amber-400' :
                    'bg-rose-500/10 text-rose-400'
                  }`}>
                    {template.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                      {template.name}
                    </h3>
                    <p className="text-slate-400 text-sm">{template.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {template.agents.map((agent) => (
                    <span key={agent} className="agent-tag">
                      {agent}
                    </span>
                  ))}
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal className="text-center mt-12" delay={0.3}>
          <Link href="/templates" className="btn-secondary touch-feedback">
            Browse All Templates
            <ArrowRight className="h-4 w-4" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
