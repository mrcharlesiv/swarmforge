'use client';

import Link from 'next/link';
import { 
  Sparkles, 
  Zap, 
  Shield, 
  ArrowRight, 
  Check,
  Layout,
  Cpu,
  LayoutTemplate,
  BarChart3,
  Code2,
  Users,
  Bot,
  Workflow,
  Clock,
  Globe,
  Lock,
  Rocket,
  Layers,
  MessageSquare,
  GitBranch
} from 'lucide-react';
import { Navbar } from '@/app/components/navbar';
import { Footer } from '@/app/components/footer';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';

// Animation wrapper component
function AnimatedSection({ 
  children, 
  className = '',
  delay = 0 
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
}) {
  return (
    <div 
      className={`transition-all duration-700 ease-out ${className}`}
      style={{ 
        opacity: 1,
        transform: 'translateY(0)',
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
}

// Feature Card Component
function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  color = 'cyan',
  delay = 0 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  color?: 'cyan' | 'purple' | 'emerald' | 'amber' | 'rose';
  delay?: number;
}) {
  const colorClasses = {
    cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    rose: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
  };

  return (
    <AnimatedSection delay={delay}>
      <Card variant="feature" className="h-full group">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 border ${colorClasses[color]}`}>
          <Icon className="h-7 w-7" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        <p className="text-slate-400 leading-relaxed">
          {description}
        </p>
      </Card>
    </AnimatedSection>
  );
}

// Main features data
const mainFeatures = [
  {
    icon: Layout,
    title: 'Visual Builder',
    description: 'Design complex agent workflows with our intuitive drag-and-drop interface. No coding required to create powerful AI swarms.',
    color: 'cyan' as const,
  },
  {
    icon: Cpu,
    title: 'Multi-Provider AI',
    description: 'Connect to OpenAI, Anthropic, Google, and custom models. Mix and match providers to optimize for cost and performance.',
    color: 'purple' as const,
  },
  {
    icon: LayoutTemplate,
    title: 'Pre-Built Templates',
    description: 'Start instantly with battle-tested templates for lead generation, content creation, research, support, and more.',
    color: 'emerald' as const,
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Track performance metrics, cost analysis, and execution logs. Optimize your swarms with data-driven insights.',
    color: 'amber' as const,
  },
  {
    icon: Code2,
    title: 'Full API Access',
    description: 'Integrate SwarmForge into your existing stack with our comprehensive REST API, GraphQL, and SDKs for popular languages.',
    color: 'cyan' as const,
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Share swarms, collaborate on workflows, and manage team permissions. Built for organizations of any size.',
    color: 'purple' as const,
  },
];

// Additional features
const additionalFeatures = [
  {
    icon: Bot,
    title: 'Multi-Agent Orchestration',
    description: 'Agents work together, share context, and coordinate tasks automatically.',
  },
  {
    icon: Clock,
    title: 'Real-Time Monitoring',
    description: 'Watch your swarms work with live logs, progress bars, and status updates.',
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'SOC 2 compliant with end-to-end encryption for all data and communications.',
  },
  {
    icon: Workflow,
    title: 'Human-in-the-Loop',
    description: 'Set approval gates and manual checkpoints for critical decisions.',
  },
  {
    icon: Globe,
    title: '100+ Integrations',
    description: 'Connect with Slack, Notion, Salesforce, HubSpot, and more.',
  },
  {
    icon: Rocket,
    title: 'One-Click Deploy',
    description: 'Deploy to the cloud instantly or self-host on your own infrastructure.',
  },
];

// Benefits section
const benefits = [
  '10x faster workflow automation',
  'Reduce operational costs by 60%',
  'Scale without adding headcount',
  '24/7 autonomous operation',
];

export default function Features() {
  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] animate-float animation-delay-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <AnimatedSection>
              <Badge variant="cyan" dot className="mb-6">
                Features
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
                Everything you need to{' '}
                <span className="gradient-text">build AI swarms</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                From visual workflow design to enterprise-grade deployment, SwarmForge provides all the tools you need to create powerful AI agent teams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/dashboard" className="btn-primary text-lg py-4 px-8">
                  Start Building Free
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link href="/templates" className="btn-secondary text-lg py-4 px-8">
                  Explore Templates
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Main Features Grid */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-spotlight">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <Badge variant="purple" className="mb-4">Core Capabilities</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Built for Modern Teams
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Powerful features that scale from personal projects to enterprise deployments.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainFeatures.map((feature, idx) => (
                <FeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  color={feature.color}
                  delay={idx * 100}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Additional Features */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection delay={100} className="text-center mb-16">
              <Badge variant="emerald" className="mb-4">More Features</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                The Details That Matter
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Every feature designed with reliability, security, and ease-of-use in mind.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalFeatures.map((feature, idx) => (
                <AnimatedSection key={feature.title} delay={150 + idx * 50}>
                  <Card variant="glass" className="h-full group hover:border-cyan-500/30 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/10 transition-colors flex-shrink-0">
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                        <p className="text-slate-400 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30 border-y border-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <Badge variant="amber" className="mb-4">How It Works</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                From Idea to Deployment in Minutes
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-cyan-500/0 via-cyan-500/30 to-cyan-500/0" />
              
              {[
                {
                  icon: MessageSquare,
                  title: '1. Describe Your Goal',
                  description: 'Tell SwarmForge what you need in plain English. Our AI understands your requirements and suggests the optimal approach.',
                  color: 'cyan',
                },
                {
                  icon: Layers,
                  title: '2. AI Builds Your Swarm',
                  description: 'We automatically generate the agent team, configure workflows, and set up integrations based on your needs.',
                  color: 'purple',
                },
                {
                  icon: Rocket,
                  title: '3. Deploy & Scale',
                  description: 'Launch your swarm with one click. Monitor performance, iterate quickly, and scale as your needs grow.',
                  color: 'emerald',
                },
              ].map((step, idx) => (
                <AnimatedSection key={step.title} delay={200 + idx * 100}>
                  <div className="text-center relative">
                    <div className="w-20 h-20 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-slate-700 relative z-10 group hover:border-cyan-500/30 transition-colors">
                      <step.icon className={`h-8 w-8 ${
                        step.color === 'cyan' ? 'text-cyan-400' :
                        step.color === 'purple' ? 'text-purple-400' :
                        'text-emerald-400'
                      }`} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-slate-400">{step.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection>
                <Badge variant="rose" className="mb-6">Why SwarmForge</Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Automate smarter,{' '}
                  <span className="gradient-text">not harder</span>
                </h2>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  Traditional automation tools require complex setup and maintenance. SwarmForge uses AI agents that adapt, learn, and work together to handle dynamic workflows that would otherwise require entire teams.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-emerald-400" />
                      </div>
                      <span className="text-slate-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '10K+', label: 'Swarms Created', color: 'cyan' },
                    { value: '1M+', label: 'Tasks Completed', color: 'purple' },
                    { value: '99.9%', label: 'Uptime SLA', color: 'emerald' },
                    { value: '60%', label: 'Cost Reduction', color: 'amber' },
                  ].map((stat) => (
                    <Card key={stat.label} variant="glass" className="text-center p-6">
                      <div className={`text-4xl font-bold mb-2 ${
                        stat.color === 'cyan' ? 'text-cyan-400' :
                        stat.color === 'purple' ? 'text-purple-400' :
                        stat.color === 'emerald' ? 'text-emerald-400' :
                        'text-amber-400'
                      }`}>
                        {stat.value}
                      </div>
                      <div className="text-slate-400 text-sm">{stat.label}</div>
                    </Card>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Integration Ecosystem */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-spotlight">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <Badge variant="purple" className="mb-4">Integrations</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Works with Your Stack
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Connect SwarmForge to the tools you already use. Native integrations with 100+ services.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <Card variant="glass" className="p-8 md:p-12">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                  {[
                    'Slack', 'Notion', 'Salesforce', 'HubSpot', 'Zapier', 'Make',
                    'OpenAI', 'Anthropic', 'Google', 'Azure', 'AWS', 'GitHub',
                  ].map((integration, idx) => (
                    <div 
                      key={integration} 
                      className="flex flex-col items-center gap-3 group"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center group-hover:border-cyan-500/30 group-hover:bg-cyan-500/5 transition-all">
                        <span className="text-2xl font-bold text-slate-500 group-hover:text-cyan-400 transition-colors">
                          {integration[0]}
                        </span>
                      </div>
                      <span className="text-sm text-slate-400 group-hover:text-white transition-colors">
                        {integration}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection>
              <Card variant="glass" className="relative overflow-hidden text-center p-12 md:p-16">
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
                
                <div className="relative">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Ready to transform your workflows?
                  </h2>
                  <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
                    Join thousands of teams already using SwarmForge to automate complex tasks with AI agents. Start free, no credit card required.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      href="/dashboard" 
                      className="btn-primary text-lg py-4 px-8"
                    >
                      Get Started Free
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                    <Link 
                      href="/pricing" 
                      className="btn-secondary text-lg py-4 px-8"
                    >
                      View Pricing
                    </Link>
                  </div>
                  <p className="mt-6 text-sm text-slate-500">
                    Free tier includes 3 swarms and 100 runs/month. No credit card required.
                  </p>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
