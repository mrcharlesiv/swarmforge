'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  Zap, 
  Shield, 
  ArrowRight, 
  Check, 
  Play,
  Users,
  Bot,
  Workflow,
  Clock,
  Globe,
  Lock
} from 'lucide-react';
import { Navbar } from '@/app/components/navbar';
import { Footer } from '@/app/components/footer';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { supabase } from '@/lib/supabase';

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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      }}
    >
      {children}
    </div>
  );
}

// Floating shapes background
function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float animation-delay-500" />
      <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl animate-float animation-delay-1000" />
    </div>
  );
}

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

const stats = [
  { value: '10K+', label: 'Swarms Created' },
  { value: '1M+', label: 'Tasks Completed' },
  { value: '99.9%', label: 'Uptime' },
  { value: '24/7', label: 'AI Support' },
];

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const { error } = await supabase.from('waitlist').insert({ email });
    if (error) {
      setStatus('error');
      setErrorMsg(error.message);
    } else {
      setStatus('success');
    }
  };

  return (
    <div className="min-h-screen bg-hero-gradient">
      <Navbar />
      <FloatingShapes />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <Badge variant="cyan" dot className="mb-8">
              Now in Public Beta
            </Badge>

            {/* Waitlist Form */}
            <div className="bg-slate-900/50 backdrop-blur border border-slate-700/50 rounded-xl p-4 mb-8 max-w-md mx-auto">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Join the Waitlist — Be first to access new templates
                  </label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="bg-slate-800 border-slate-600 text-white placeholder-slate-400 rounded-lg px-4 py-2 w-full md:w-72 border focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                    />
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-lg px-6 py-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
                    </button>
                  </div>
                </div>
                
                {status === 'success' && (
                  <p className="text-green-400 text-sm">You're on the list! 🎉</p>
                )}
                {status === 'error' && (
                  <p className="text-red-400 text-sm">{errorMsg}</p>
                )}
              </form>
            </div>
            
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
              <Link href="/dashboard" className="btn-primary text-lg py-4 px-8">
                Start Building Free
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/templates" className="btn-secondary text-lg py-4 px-8">
                <Play className="h-5 w-5" />
                View Templates
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Templates Section */}
      <section className="py-24 bg-gradient-spotlight">
        <div className="container-custom">
          <AnimatedSection delay={100} className="text-center mb-16">
            <Badge variant="purple" className="mb-4">Pre-Built Solutions</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready-to-Deploy Templates
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Start with battle-tested swarm templates designed for common business workflows.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template, idx) => (
              <AnimatedSection key={template.id} delay={150 + idx * 50}>
                <Card variant="template" className="h-full p-6 group">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
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
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={500} className="text-center mt-12">
            <Link href="/templates" className="btn-secondary">
              Browse All Templates
              <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="container-custom">
          <AnimatedSection delay={100} className="text-center mb-16">
            <Badge variant="emerald" className="mb-4">Simple Process</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              From idea to deployed swarm in minutes, not days.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-cyan-500/0 via-cyan-500/30 to-cyan-500/0" />
            
            {features.map((feature, idx) => (
              <AnimatedSection key={idx} delay={200 + idx * 100}>
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
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gradient-spotlight">
        <div className="container-custom">
          <AnimatedSection delay={100} className="text-center mb-16">
            <Badge variant="amber" className="mb-4">Powerful Features</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Everything You Need
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Built for teams that need reliable, scalable AI automation.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Bot className="h-6 w-6" />, title: 'Multi-Agent Collaboration', desc: 'Agents work together, share context, and coordinate tasks automatically.' },
              { icon: <Clock className="h-6 w-6" />, title: 'Real-Time Monitoring', desc: 'Watch your swarms work with live logs, progress bars, and status updates.' },
              { icon: <Lock className="h-6 w-6" />, title: 'Enterprise Security', desc: 'SOC 2 compliant with end-to-end encryption for all data.' },
              { icon: <Workflow className="h-6 w-6" />, title: 'Visual Workflow Builder', desc: 'Drag-and-drop interface for designing complex agent workflows.' },
              { icon: <Globe className="h-6 w-6" />, title: 'API & Integrations', desc: 'Connect with 100+ tools including Slack, Notion, and CRMs.' },
              { icon: <Shield className="h-6 w-6" />, title: 'Human-in-the-Loop', desc: 'Set approval gates and manual checkpoints for critical decisions.' },
            ].map((feature, idx) => (
              <AnimatedSection key={idx} delay={150 + idx * 50}>
                <Card variant="feature" className="h-full">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-400 text-sm">{feature.desc}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24">
        <div className="container-custom">
          <AnimatedSection delay={100} className="text-center mb-16">
            <Badge variant="cyan" className="mb-4">Simple Pricing</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Start Free, Scale as You Grow
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              No credit card required. Upgrade when you need more power.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Tier */}
            <AnimatedSection delay={200}>
              <Card variant="pricing" className="h-full">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Free</h3>
                  <p className="text-slate-400 text-sm">Perfect for getting started</p>
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
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-300">
                      <Check className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/dashboard" className="block w-full text-center btn-secondary">
                  Get Started Free
                </Link>
              </Card>
            </AnimatedSection>

            {/* Pro Tier */}
            <AnimatedSection delay={300}>
              <Card variant="popular" className="h-full relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge variant="cyan">Most Popular</Badge>
                </div>
                <div className="mb-6 pt-2">
                  <h3 className="text-xl font-semibold text-white mb-2">Pro</h3>
                  <p className="text-slate-400 text-sm">For serious automation</p>
                </div>
                <div className="mb-8">
                  <span className="text-5xl font-bold text-white">$29</span>
                  <span className="text-slate-500">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {[
                    'Unlimited swarms',
                    '10,000 runs/month',
                    'All templates + custom',
                    'Advanced analytics',
                    'Priority support',
                    'API access',
                    'Team collaboration',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-300">
                      <Check className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/dashboard" className="block w-full text-center btn-primary">
                  Start Pro Trial
                </Link>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10" />
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Your First Swarm?
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Join thousands of teams using SwarmForge to automate their workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard" className="btn-primary text-lg py-4 px-8">
                Get Started Free
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/builder" className="btn-secondary text-lg py-4 px-8">
                Try the Builder
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
