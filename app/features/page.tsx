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
  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white overflow-x-hidden">
      {/* Animated Background - Standardized */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] animate-float animation-delay-500" />
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="cyan" dot className="mb-6">
              Features
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Everything You Need to
              <span className="gradient-text"> Build AI Agent Swarms</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
              Powerful tools for building, deploying, and managing autonomous AI agent teams 
              that work together to complete complex tasks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard" className="btn-primary text-lg py-4 px-8">
                Start Building Free
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/templates" className="btn-secondary text-lg py-4 px-8">
                View Templates
              </Link>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30 border-y border-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="amber" className="mb-4">Platform Features</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Built for Scale
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Enterprise-grade infrastructure meets intuitive design.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Users className="h-6 w-6" />,
                  title: 'Multi-Agent Collaboration',
                  description: 'Agents work together, share context, and coordinate tasks automatically. Each agent has a specialized role and can communicate with others to accomplish complex workflows.',
                  features: ['Role-based agents', 'Context sharing', 'Task delegation'],
                  color: 'cyan'
                },
                {
                  icon: <Eye className="h-6 w-6" />,
                  title: 'Real-Time Monitoring',
                  description: 'Watch your swarms work with live logs, progress bars, and status updates. See exactly what each agent is doing at any moment.',
                  features: ['Live execution logs', 'Progress tracking', 'Performance metrics'],
                  color: 'purple'
                },
                {
                  icon: <Lock className="h-6 w-6" />,
                  title: 'Enterprise Security',
                  description: 'SOC 2 compliant with end-to-end encryption for all data. Your information never leaves secure environments, and we never train on your data.',
                  features: ['SOC 2 Type II', 'End-to-end encryption', 'Data isolation'],
                  color: 'emerald'
                },
                {
                  icon: <Workflow className="h-6 w-6" />,
                  title: 'Visual Workflow Builder',
                  description: 'Drag-and-drop interface for designing complex agent workflows. Connect agents, set conditions, and create branching logic without writing code.',
                  features: ['Visual canvas', 'Conditional logic', 'Branching workflows'],
                  color: 'amber'
                },
                {
                  icon: <Globe className="h-6 w-6" />,
                  title: 'API & Integrations',
                  description: 'Connect with 100+ tools including Slack, Notion, CRMs, and more. Our REST API lets you trigger swarms from anywhere.',
                  features: ['REST API', '100+ integrations', 'Webhook support'],
                  color: 'rose'
                },
                {
                  icon: <Shield className="h-6 w-6" />,
                  title: 'Human-in-the-Loop',
                  description: 'Set approval gates and manual checkpoints for critical decisions. The swarm pauses and notifies you when human input is needed.',
                  features: ['Approval gates', 'Manual checkpoints', 'Smart notifications'],
                  color: 'cyan'
                }
              ].map((feature, idx) => (
                <AnimatedSection key={idx} delay={idx * 50}>
                  <Card variant="feature" className="h-full">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      feature.color === 'cyan' ? 'bg-cyan-500/10 text-cyan-400' :
                      feature.color === 'purple' ? 'bg-purple-500/10 text-purple-400' :
                      feature.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-400' :
                      feature.color === 'amber' ? 'bg-amber-500/10 text-amber-400' :
                      'bg-rose-500/10 text-rose-400'
                    }`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.features.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                          <Check className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="purple" className="mb-4">How It Works</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                From Idea to Execution
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Describe what you need. Our AI builds the optimal agent team.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-cyan-500/0 via-cyan-500/30 to-cyan-500/0" />
              
              {[
                {
                  icon: <Sparkles className="h-8 w-8" />,
                  title: 'Describe Your Goal',
                  description: 'Tell SwarmForge what you need in plain English. No coding required. Our AI understands your objectives and constraints.',
                  color: 'cyan'
                },
                {
                  icon: <Bot className="h-8 w-8" />,
                  title: 'AI Builds Your Swarm',
                  description: 'We automatically generate the optimal agent team, assign roles, and configure the workflow for maximum efficiency.',
                  color: 'purple'
                },
                {
                  icon: <Gauge className="h-8 w-8" />,
                  title: 'Deploy & Monitor',
                  description: 'Run your swarm, monitor progress in real-time, and get results. Iterate and refine based on performance.',
                  color: 'emerald'
                }
              ].map((step, idx) => (
                <AnimatedSection key={idx} delay={idx * 100}>
                  <div className="text-center relative">
                    <div className="w-20 h-20 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-slate-700 relative z-10">
                      <div className={`${
                        step.color === 'cyan' ? 'text-cyan-400' :
                        step.color === 'purple' ? 'text-purple-400' :
                        'text-emerald-400'
                      }`}>
                        {step.icon}
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold text-sm mx-auto mb-4 relative z-10">
                      {idx + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-slate-400">{step.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Capabilities */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30 border-y border-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="emerald" className="mb-4">Additional Capabilities</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                More Powerful Features
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Everything you need to build production-ready AI automations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Layers className="h-6 w-6" />,
                  title: 'Pre-Built Templates',
                  description: 'Start with battle-tested swarm templates for common business workflows. Customize them to fit your specific needs.',
                  color: 'cyan'
                },
                {
                  icon: <MessageSquare className="h-6 w-6" />,
                  title: 'Natural Language Interface',
                  description: 'Build and modify swarms using plain English. No technical knowledge required. Our AI translates your intent into working systems.',
                  color: 'purple'
                },
                {
                  icon: <Clock className="h-6 w-6" />,
                  title: 'Scheduled Executions',
                  description: 'Set up recurring swarms that run on your schedule. Daily reports, weekly audits, or monthly analyses — all automated.',
                  color: 'emerald'
                },
                {
                  icon: <Code className="h-6 w-6" />,
                  title: 'Custom Code Support',
                  description: 'For advanced users, inject custom Python or JavaScript code into any agent. Extend capabilities beyond the built-in tools.',
                  color: 'amber'
                }
              ].map((capability, idx) => (
                <AnimatedSection key={idx} delay={idx * 100}>
                  <Card variant="glass" className="h-full">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        capability.color === 'cyan' ? 'bg-cyan-500/10 text-cyan-400' :
                        capability.color === 'purple' ? 'bg-purple-500/10 text-purple-400' :
                        capability.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-400' :
                        'bg-amber-500/10 text-amber-400'
                      }`}>
                        {capability.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{capability.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{capability.description}</p>
                      </div>
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="rose" className="mb-4">Why SwarmForge?</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                The Better Way to Automate
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                See how SwarmForge compares to traditional automation tools.
              </p>
            </div>

            <Card variant="glass" className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-4 px-6 text-slate-400 font-medium">Feature</th>
                      <th className="text-center py-4 px-6 text-slate-400 font-medium">Traditional Tools</th>
                      <th className="text-center py-4 px-6 text-cyan-400 font-semibold">SwarmForge</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: 'Setup Time', traditional: 'Days or weeks', swarmforge: 'Minutes' },
                      { feature: 'Coding Required', traditional: 'Yes, extensive', swarmforge: 'No code needed' },
                      { feature: 'AI-Powered', traditional: 'Limited or none', swarmforge: 'Native AI agents' },
                      { feature: 'Multi-Step Workflows', traditional: 'Complex to build', swarmforge: 'Natural language' },
                      { feature: 'Error Handling', traditional: 'Manual configuration', swarmforge: 'Automatic retry & recovery' },
                      { feature: 'Scaling', traditional: 'Infrastructure needed', swarmforge: 'Serverless & instant' },
                      { feature: 'Monitoring', traditional: 'Separate tools', swarmforge: 'Built-in real-time' },
                      { feature: 'Cost', traditional: 'High upfront + maintenance', swarmforge: 'Pay per use' },
                    ].map((row, idx) => (
                      <tr key={idx} className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                        <td className="py-4 px-6 text-slate-300">{row.feature}</td>
                        <td className="py-4 px-6 text-center text-slate-500">{row.traditional}</td>
                        <td className="py-4 px-6 text-center">
                          <span className="inline-flex items-center gap-2 text-emerald-400">
                            <Check className="h-4 w-4" />
                            {row.swarmforge}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
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
                  Ready to Experience the Future?
                </h2>
                <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                  Join thousands of teams already automating their workflows with AI agent swarms.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/dashboard" 
                    className="btn-primary text-lg"
                  >
                    Get Started Free
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link 
                    href="/pricing" 
                    className="btn-secondary text-lg"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}
