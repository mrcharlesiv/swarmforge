'use client';

import Link from 'next/link';
import { 
  Sparkles, 
  Layers, 
  Puzzle, 
  BarChart3, 
  Code2, 
  Users,
  ArrowRight,
  Zap,
  Bot,
  Workflow,
  Shield,
  Globe,
  Clock,
  Check,
  Play
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

// Feature data
const features = [
  {
    id: 'visual-builder',
    icon: <Layers className="h-8 w-8" />,
    title: 'Visual Builder',
    description: 'Design complex agent workflows with our intuitive drag-and-drop interface. No coding required to build powerful AI swarms.',
    color: 'cyan',
    highlights: [
      'Drag-and-drop workflow editor',
      'Real-time collaboration',
      'Pre-built components',
      'Visual debugging tools'
    ]
  },
  {
    id: 'multi-provider',
    icon: <Puzzle className="h-8 w-8" />,
    title: 'Multi-Provider',
    description: 'Connect to any AI model provider. Use OpenAI, Anthropic, Google, or bring your own models with a single configuration.',
    color: 'purple',
    highlights: [
      'OpenAI GPT-4, GPT-3.5',
      'Anthropic Claude',
      'Google Gemini',
      'Custom model endpoints'
    ]
  },
  {
    id: 'templates',
    icon: <Sparkles className="h-8 w-8" />,
    title: 'Templates',
    description: 'Start fast with battle-tested templates for common use cases. Customize them to fit your specific needs.',
    color: 'amber',
    highlights: [
      'Lead generation swarms',
      'Content creation teams',
      'Research assistants',
      'Customer support bots'
    ]
  },
  {
    id: 'analytics',
    icon: <BarChart3 className="h-8 w-8" />,
    title: 'Analytics',
    description: 'Track performance, monitor costs, and optimize your swarms with detailed insights and custom dashboards.',
    color: 'emerald',
    highlights: [
      'Real-time metrics',
      'Cost tracking',
      'Performance optimization',
      'Custom reports'
    ]
  },
  {
    id: 'api',
    icon: <Code2 className="h-8 w-8" />,
    title: 'Powerful API',
    description: 'Full-featured REST API and SDKs for JavaScript, Python, and more. Integrate swarms into any application.',
    color: 'rose',
    highlights: [
      'RESTful API',
      'TypeScript SDK',
      'Python SDK',
      'Webhook support'
    ]
  },
  {
    id: 'collaboration',
    icon: <Users className="h-8 w-8" />,
    title: 'Collaboration',
    description: 'Work together with your team. Share swarms, review runs, and manage permissions with organization support.',
    color: 'cyan',
    highlights: [
      'Team workspaces',
      'Role-based access',
      'Shared templates',
      'Activity logs'
    ]
  }
];

// Additional capabilities
const capabilities = [
  {
    icon: <Bot className="h-6 w-6 text-cyan-400" />,
    title: 'Multi-Agent Collaboration',
    description: 'Agents work together, share context, and coordinate tasks automatically using advanced orchestration.'
  },
  {
    icon: <Clock className="h-6 w-6 text-purple-400" />,
    title: 'Real-Time Monitoring',
    description: 'Watch your swarms work with live logs, progress bars, and status updates in real-time.'
  },
  {
    icon: <Shield className="h-6 w-6 text-emerald-400" />,
    title: 'Enterprise Security',
    description: 'SOC 2 Type II compliant with end-to-end encryption for all data and comprehensive audit logs.'
  },
  {
    icon: <Workflow className="h-6 w-6 text-amber-400" />,
    title: 'Human-in-the-Loop',
    description: 'Set approval gates and manual checkpoints for critical decisions when AI needs human oversight.'
  },
  {
    icon: <Globe className="h-6 w-6 text-rose-400" />,
    title: '100+ Integrations',
    description: 'Connect with Slack, Notion, Salesforce, HubSpot, and all your favorite tools seamlessly.'
  },
  {
    icon: <Zap className="h-6 w-6 text-cyan-400" />,
    title: 'Auto-Scaling',
    description: 'Infrastructure that scales automatically with your needs. From 10 to 10,000 runs per day.'
  }
];

// Pricing tiers for comparison
const tiers = [
  {
    name: 'Free',
    description: 'Perfect for getting started',
    features: ['3 swarms', '100 runs/month', '5 templates', 'Basic analytics', 'Community support']
  },
  {
    name: 'Pro',
    description: 'For serious automation',
    popular: true,
    features: ['Unlimited swarms', '10,000 runs/month', 'All templates', 'Advanced analytics', 'Priority support', 'API access', 'Team collaboration']
  },
  {
    name: 'Enterprise',
    description: 'For large organizations',
    features: ['Everything in Pro', 'Unlimited runs', 'SSO & SAML', 'Audit logs', 'SLA guarantee', 'Dedicated support', 'Custom training']
  }
];

export default function Features() {
  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] animate-float animation-delay-500" />
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
              <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                Powerful tools for building, deploying, and managing autonomous AI agent teams. 
                From visual design to enterprise-grade security, we&apos;ve got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/dashboard" className="btn-primary text-lg py-4 px-8">
                  Start Building Free
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link href="/templates" className="btn-secondary text-lg py-4 px-8">
                  <Play className="h-5 w-5" />
                  View Templates
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-spotlight">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection delay={100} className="text-center mb-16">
              <Badge variant="purple" className="mb-4">Core Features</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Built for scale
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Every feature designed to help you build reliable, production-ready AI swarms.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, idx) => (
                <AnimatedSection key={feature.id} delay={150 + idx * 50}>
                  <Card 
                    variant="feature" 
                    className="h-full group"
                  >
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 ${
                      feature.color === 'cyan' ? 'bg-cyan-500/10 text-cyan-400' :
                      feature.color === 'purple' ? 'bg-purple-500/10 text-purple-400' :
                      feature.color === 'amber' ? 'bg-amber-500/10 text-amber-400' :
                      feature.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-400' :
                      'bg-rose-500/10 text-rose-400'
                    }`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 mb-5 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-2 text-sm text-slate-500">
                          <Check className={`h-4 w-4 flex-shrink-0 ${
                            feature.color === 'cyan' ? 'text-cyan-400' :
                            feature.color === 'purple' ? 'text-purple-400' :
                            feature.color === 'amber' ? 'text-amber-400' :
                            feature.color === 'emerald' ? 'text-emerald-400' :
                            'text-rose-400'
                          }`} />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection delay={100} className="text-center mb-16">
              <Badge variant="emerald" className="mb-4">Capabilities</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Powerful capabilities
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Advanced features that make SwarmForge the platform of choice for AI automation.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((capability, idx) => (
                <AnimatedSection key={capability.title} delay={150 + idx * 50}>
                  <Card variant="glass" className="h-full hover:border-slate-600/50 transition-colors">
                    <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-4">
                      {capability.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{capability.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{capability.description}</p>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Deep Dive - Visual Builder */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-spotlight">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection delay={100}>
                <Badge variant="cyan" className="mb-4">Visual Builder</Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Design workflows visually
                </h2>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  Our drag-and-drop interface makes it easy to design complex agent workflows. 
                  Connect nodes, set conditions, and visualize how your swarm operates—all 
                  without writing a single line of code.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    'Intuitive drag-and-drop canvas',
                    'Real-time collaboration with your team',
                    'Pre-built templates to get started fast',
                    'Version control for your workflows'
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-300">
                      <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                        <Check className="h-4 w-4 text-cyan-400" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/builder" className="btn-primary">
                  Try the Builder
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </AnimatedSection>
              <AnimatedSection delay={200}>
                <Card variant="glass" className="relative overflow-hidden aspect-square lg:aspect-[4/3]">
                  {/* Mock Visual Builder UI */}
                  <div className="absolute inset-0 bg-slate-900/50 p-6">
                    <div className="h-full border-2 border-dashed border-slate-700 rounded-xl p-4 relative">
                      {/* Mock Nodes */}
                      <div className="absolute top-8 left-8 w-32 p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Bot className="h-4 w-4 text-cyan-400" />
                          <span className="text-sm text-cyan-400">Researcher</span>
                        </div>
                      </div>
                      <div className="absolute top-8 right-8 w-32 p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Sparkles className="h-4 w-4 text-purple-400" />
                          <span className="text-sm text-purple-400">Writer</span>
                        </div>
                      </div>
                      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-32 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-emerald-400" />
                          <span className="text-sm text-emerald-400">Output</span>
                        </div>
                      </div>
                      {/* Connection Lines */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <line x1="140" y1="40" x2="60%" y2="40" stroke="#22d3ee" strokeWidth="2" strokeDasharray="5,5" />
                        <line x1="50%" y1="60" x2="50%" y2="70%" stroke="#22d3ee" strokeWidth="2" strokeDasharray="5,5" />
                      </svg>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Pricing Preview */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection delay={100} className="text-center mb-16">
              <Badge variant="amber" className="mb-4">Pricing</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Simple, transparent pricing
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Start free and scale as you grow. No hidden fees, no surprises.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              {tiers.map((tier, idx) => (
                <AnimatedSection key={tier.name} delay={150 + idx * 100}>
                  <Card 
                    variant={tier.popular ? 'popular' : 'pricing'} 
                    className="h-full relative"
                  >
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <Badge variant="cyan">Most Popular</Badge>
                      </div>
                    )}
                    <div className="mb-6 pt-2">
                      <h3 className="text-xl font-semibold text-white mb-2">{tier.name}</h3>
                      <p className="text-slate-400 text-sm">{tier.description}</p>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-slate-300">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                            tier.popular ? 'bg-cyan-500/20' : 'bg-emerald-500/20'
                          }`}>
                            <Check className={`h-3 w-3 ${tier.popular ? 'text-cyan-400' : 'text-emerald-400'}`} />
                          </div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link 
                      href="/pricing" 
                      className={`block w-full text-center py-3 rounded-xl font-semibold transition-all ${
                        tier.popular 
                          ? 'bg-cyan-500 hover:bg-cyan-400 text-white' 
                          : 'bg-slate-800 hover:bg-slate-700 text-white'
                      }`}
                    >
                      Learn More
                    </Link>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card variant="glass" className="relative overflow-hidden text-center p-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
              
              <div className="relative">
                <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="h-8 w-8 text-cyan-400" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to build your first swarm?
                </h2>
                <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                  Join thousands of teams already using SwarmForge to automate their workflows 
                  and scale their operations with AI.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/dashboard" className="btn-primary text-lg py-4 px-8">
                    Get Started Free
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link href="/docs" className="btn-secondary text-lg py-4 px-8">
                    Read the Docs
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
