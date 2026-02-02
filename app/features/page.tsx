'use client'

import Link from 'next/link'
import { 
  Sparkles, 
  Zap, 
  Shield, 
  ArrowRight, 
  Check,
  Users,
  Clock,
  Lock,
  Workflow,
  Globe,
  Bot,
  Eye,
  Code,
  MessageSquare,
  Layers,
  Gauge
} from 'lucide-react'
import { Navbar } from '@/app/components/navbar'
import { Footer } from '@/app/components/footer'
import { Card } from '@/app/components/ui/card'
import { Badge } from '@/app/components/ui/badge'

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

export default function Features() {
  const features = [
    {
      icon: <Workflow className="h-6 w-6" />,
      title: "Visual Builder",
      description: "Drag-and-drop interface for designing complex agent workflows without writing code.",
      color: "cyan"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Multi-Agent Orchestration",
      description: "Coordinate multiple AI agents that work together to complete complex tasks.",
      color: "purple"
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Pre-built Templates",
      description: "Start with battle-tested templates for common business workflows.",
      color: "emerald"
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Real-time Monitoring",
      description: "Watch your swarms work with live logs, progress bars, and status updates.",
      color: "amber"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Team Collaboration",
      description: "Share swarms, manage permissions, and collaborate with your team.",
      color: "rose"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "API Access",
      description: "Integrate with 100+ tools via our REST API and webhooks.",
      color: "cyan"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white overflow-x-hidden">
      {/* Animated Background - Standardized */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] animate-float animation-delay-500" />
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Header */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="cyan" className="mb-6">
              Features
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Everything You Need to
              <span className="gradient-text"> Build Agent Swarms</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
              Powerful tools for building, deploying, and managing autonomous AI agent teams that work together to complete complex tasks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/dashboard" 
                className="btn-primary text-lg py-4 px-8"
              >
                Start Building Free
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link 
                href="/templates" 
                className="btn-secondary text-lg py-4 px-8"
              >
                View Templates
              </Link>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30 border-y border-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="purple" className="mb-4">
                Platform Features
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Built for Scale
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Enterprise-grade infrastructure meets intuitive design.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, idx) => (
                <AnimatedSection key={feature.title} delay={idx * 50}>
                  <div className="card-feature cursor-pointer h-full">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 text-cyan-400">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="emerald" className="mb-4">
                How It Works
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                From Idea to Execution
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Describe what you need. Our AI builds the optimal agent team.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-cyan-500/0 via-cyan-500/30 to-cyan-500/0" />
              
              <AnimatedSection delay={0}>
                <div className="text-center relative">
                  <div className="w-20 h-20 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-slate-700 relative z-10">
                    <Sparkles className="h-8 w-8 text-cyan-400" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold text-sm mx-auto mb-4 relative z-10">
                    1
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Describe Your Goal
                  </h3>
                  <p className="text-slate-400">
                    Tell SwarmForge what you need in plain English. No coding required.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <div className="text-center relative">
                  <div className="w-20 h-20 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-slate-700 relative z-10">
                    <Bot className="h-8 w-8 text-purple-400" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold text-sm mx-auto mb-4 relative z-10">
                    2
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    AI Builds Your Swarm
                  </h3>
                  <p className="text-slate-400">
                    We automatically generate the optimal agent team and workflow.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="text-center relative">
                  <div className="w-20 h-20 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-slate-700 relative z-10">
                    <Gauge className="h-8 w-8 text-emerald-400" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold text-sm mx-auto mb-4 relative z-10">
                    3
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Deploy & Monitor
                  </h3>
                  <p className="text-slate-400">
                    Run your swarm, monitor progress, and get results.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Additional Features */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30 border-y border-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="amber" className="mb-4">
                Additional Capabilities
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                More Powerful Features
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Everything you need to build production-ready AI automations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedSection delay={0}>
                <div className="card-glass h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-cyan-500/10 text-cyan-400">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Scheduled Executions
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        Set up recurring swarms that run on your schedule. Daily reports, weekly audits, or monthly analyses — all automated.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <div className="card-glass h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-purple-500/10 text-purple-400">
                      <Globe className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        100+ Integrations
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        Connect with Slack, Notion, CRMs, databases, and more via our REST API and webhooks.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="card-glass h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-emerald-500/10 text-emerald-400">
                      <Lock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Enterprise Security
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        SOC 2 compliant with end-to-end encryption. Your data never leaves secure environments.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div className="card-glass h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-rose-500/10 text-rose-400">
                      <Zap className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Instant Scaling
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        Serverless architecture scales instantly. No infrastructure to manage or capacity to plan.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
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
                  Get Started Free
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