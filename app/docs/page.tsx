'use client'

import Link from 'next/link'
import { 
  BookOpen, 
  Zap, 
  Code, 
  GraduationCap, 
  ArrowRight, 
  Check,
  Play,
  Layers,
  MessageSquare,
  Shield,
  Clock,
  Terminal
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

export default function Docs() {
  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white overflow-x-hidden">
      {/* Animated Background - Standardized */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] animate-float animation-delay-500" />
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="cyan" dot className="mb-6">
              Documentation
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Getting Started with
              <span className="gradient-text"> SwarmForge</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
              Learn how to build, deploy, and manage AI agent swarms. 
              From your first swarm to advanced workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard" className="btn-primary text-lg py-4 px-8">
                Start Building
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/templates" className="btn-secondary text-lg py-4 px-8">
                <Play className="h-5 w-5" />
                View Templates
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Start Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30 border-y border-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="emerald" className="mb-4">Quick Start</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Build Your First Swarm
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Get up and running in under 5 minutes with these simple steps.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-cyan-500/0 via-cyan-500/30 to-cyan-500/0" />
              
              {[
                {
                  step: 1,
                  icon: <MessageSquare className="h-6 w-6" />,
                  title: 'Describe Your Goal',
                  description: 'Tell SwarmForge what you need in plain English. No coding required.',
                  color: 'cyan'
                },
                {
                  step: 2,
                  icon: <Layers className="h-6 w-6" />,
                  title: 'Review Your Swarm',
                  description: 'We generate the optimal agent team and configuration for your task.',
                  color: 'purple'
                },
                {
                  step: 3,
                  icon: <Zap className="h-6 w-6" />,
                  title: 'Deploy & Run',
                  description: 'Launch your swarm and watch it work with real-time monitoring.',
                  color: 'emerald'
                }
              ].map((item, idx) => (
                <AnimatedSection key={idx} delay={idx * 100}>
                  <div className="text-center relative">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 border relative z-10 ${
                      item.color === 'cyan' ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400' :
                      item.color === 'purple' ? 'bg-purple-500/10 border-purple-500/30 text-purple-400' :
                      'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                    }`}>
                      {item.icon}
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-4 relative z-10 ${
                      item.color === 'cyan' ? 'bg-cyan-500 text-white' :
                      item.color === 'purple' ? 'bg-purple-500 text-white' :
                      'bg-emerald-500 text-white'
                    }`}>
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                    <p className="text-slate-400">{item.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link href="/builder" className="btn-primary">
                Try the Builder
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Core Concepts Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="purple" className="mb-4">Core Concepts</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Understanding Swarms
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Learn the fundamentals of multi-agent AI systems.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Layers className="h-6 w-6" />,
                  title: 'What is a Swarm?',
                  description: 'A swarm is a team of AI agents that work together to accomplish complex tasks. Each agent has a specific role and can communicate with other agents.',
                  color: 'cyan'
                },
                {
                  icon: <MessageSquare className="h-6 w-6" />,
                  title: 'Agent Communication',
                  description: 'Agents share context and coordinate automatically. They can delegate subtasks, request clarification, and report progress to each other.',
                  color: 'purple'
                },
                {
                  icon: <Clock className="h-6 w-6" />,
                  title: 'Runs & Executions',
                  description: 'Each time your swarm completes a task from start to finish counts as one run. Monitor usage and performance from your dashboard.',
                  color: 'emerald'
                },
                {
                  icon: <Shield className="h-6 w-6" />,
                  title: 'Human-in-the-Loop',
                  description: 'Set approval gates for critical decisions. The swarm pauses and notifies you when human input is needed.',
                  color: 'amber'
                },
                {
                  icon: <Terminal className="h-6 w-6" />,
                  title: 'Templates vs Custom',
                  description: 'Start with pre-built templates for common workflows, or build custom swarms for unique business processes.',
                  color: 'rose'
                },
                {
                  icon: <Code className="h-6 w-6" />,
                  title: 'API Access',
                  description: 'Integrate swarms into your existing systems via our REST API. Trigger swarms programmatically and receive webhooks.',
                  color: 'cyan'
                }
              ].map((concept, idx) => (
                <AnimatedSection key={idx} delay={idx * 50}>
                  <Card variant="feature" className="h-full">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      concept.color === 'cyan' ? 'bg-cyan-500/10 text-cyan-400' :
                      concept.color === 'purple' ? 'bg-purple-500/10 text-purple-400' :
                      concept.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-400' :
                      concept.color === 'amber' ? 'bg-amber-500/10 text-amber-400' :
                      'bg-rose-500/10 text-rose-400'
                    }`}>
                      {concept.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{concept.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{concept.description}</p>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* API Reference Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30 border-y border-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="amber" className="mb-4">API Reference</Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Build with the SwarmForge API
                </h2>
                <p className="text-slate-400 text-lg mb-8">
                  Integrate AI agent swarms into your applications. Our REST API 
                  lets you trigger swarms, monitor executions, and retrieve results programmatically.
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    'Authentication via API keys',
                    'Trigger swarms with custom inputs',
                    'Real-time status updates via webhooks',
                    'Comprehensive error handling'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-emerald-400" />
                      </div>
                      <span className="text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <button disabled className="btn-secondary cursor-not-allowed opacity-60">
                    <Code className="h-4 w-4" />
                    API Docs (Coming Soon)
                  </button>
                  <Link href="/dashboard" className="btn-primary">
                    Get API Key
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <AnimatedSection delay={100}>
                <Card variant="glass" className="relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500" />
                  <div className="bg-slate-950 rounded-xl p-6 font-mono text-sm overflow-x-auto">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-rose-500" />
                      <div className="w-3 h-3 rounded-full bg-amber-500" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500" />
                      <span className="ml-2 text-slate-500">example.js</span>
                    </div>
                    <pre className="text-slate-300">
                      <code>{`// Trigger a swarm via API
const response = await fetch(
  'https://api.swarmforge.io/v1/swarm/run',
  {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      swarm_id: 'lead-gen-abc123',
      inputs: {
        target_industry: 'SaaS',
        company_size: '50-200'
      }
    }),
  }
);

const result = await response.json();
console.log(result.execution_id);`}</code>
                    </pre>
                  </div>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Tutorials Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="rose" className="mb-4">Tutorials</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Step-by-Step Guides
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Learn by doing with our comprehensive tutorials.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Zap className="h-6 w-6" />,
                  title: 'Lead Generation Swarm',
                  description: 'Build a swarm that researches prospects, qualifies leads, and drafts personalized outreach messages.',
                  duration: '15 min',
                  level: 'Beginner',
                  color: 'cyan'
                },
                {
                  icon: <BookOpen className="h-6 w-6" />,
                  title: 'Content Marketing Pipeline',
                  description: 'Create a multi-agent system that researches topics, writes blog posts, and schedules social media content.',
                  duration: '20 min',
                  level: 'Intermediate',
                  color: 'purple'
                },
                {
                  icon: <MessageSquare className="h-6 w-6" />,
                  title: 'Customer Support Automation',
                  description: 'Set up a support swarm that classifies tickets, drafts responses, and escalates complex issues.',
                  duration: '15 min',
                  level: 'Beginner',
                  color: 'emerald'
                },
                {
                  icon: <GraduationCap className="h-6 w-6" />,
                  title: 'Research Assistant',
                  description: 'Build a deep research swarm that gathers information from multiple sources and synthesizes comprehensive reports.',
                  duration: '25 min',
                  level: 'Advanced',
                  color: 'amber'
                }
              ].map((tutorial, idx) => (
                <AnimatedSection key={idx} delay={idx * 100}>
                  <Card variant="template" className="h-full group cursor-pointer">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                          tutorial.color === 'cyan' ? 'bg-cyan-500/10 text-cyan-400' :
                          tutorial.color === 'purple' ? 'bg-purple-500/10 text-purple-400' :
                          tutorial.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-400' :
                          'bg-amber-500/10 text-amber-400'
                        }`}>
                          {tutorial.icon}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="badge">{tutorial.duration}</span>
                          <span className={`badge ${
                            tutorial.level === 'Beginner' ? 'badge-emerald' :
                            tutorial.level === 'Intermediate' ? 'badge-amber' :
                            'badge-rose'
                          }`}>{tutorial.level}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {tutorial.title}
                      </h3>
                      <p className="text-slate-400 text-sm mb-4">{tutorial.description}</p>
                      <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium group-hover:gap-3 transition-all">
                        Start Tutorial
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
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
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Start Building?
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
