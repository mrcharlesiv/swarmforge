'use client'

import Link from 'next/link'
import { 
  Bot, 
  Clock, 
  Shield, 
  Workflow, 
  Globe, 
  Users,
  ArrowRight,
  Check,
  Zap,
  Lock,
  LineChart,
  Puzzle,
  Hand
} from 'lucide-react'
import { Navbar } from '@/app/components/navbar'
import { Footer } from '@/app/components/footer'
import { Card } from '@/app/components/ui/card'
import { Badge } from '@/app/components/ui/badge'

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Hero */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="amber" dot className="mb-6">Platform Features</Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Everything You Need to
              <span className="gradient-text"> Build AI Agent Swarms</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
              Powerful features designed for teams that need reliable, scalable AI automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard" className="btn-primary text-lg py-4 px-8">
                Start Building Free<ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/templates" className="btn-secondary text-lg py-4 px-8">
                <Zap className="h-5 w-5" />View Templates
              </Link>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="cyan" className="mb-4">Core Capabilities</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Built for Scale</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Six powerful features that make SwarmForge the leading platform for AI agent orchestration.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[ 
                { title: 'Multi-Agent Collaboration', desc: 'Agents work together, share context, and coordinate tasks automatically.', icon: Bot, features: ['Context sharing', 'Role specialization', 'Task delegation'], color: 'cyan' },
                { title: 'Real-Time Monitoring', desc: 'Watch your swarms work with live logs, progress bars, and status updates.', icon: LineChart, features: ['Live execution logs', 'Progress tracking', 'Performance metrics'], color: 'purple' },
                { title: 'Enterprise Security', desc: 'SOC 2 Type II compliant with end-to-end encryption for all data.', icon: Lock, features: ['SOC 2 compliant', 'End-to-end encryption', 'Data isolation'], color: 'emerald' },
                { title: 'Visual Workflow Builder', desc: 'Design complex agent workflows with our intuitive drag-and-drop interface.', icon: Workflow, features: ['Drag-and-drop canvas', 'Visual connections', 'Conditional logic'], color: 'amber' },
                { title: 'API & Integrations', desc: 'Connect with 100+ tools including Slack, Notion, Salesforce, and more.', icon: Puzzle, features: ['100+ integrations', 'RESTful API', 'Webhooks'], color: 'rose' },
                { title: 'Human-in-the-Loop', desc: 'Set approval gates and manual checkpoints for critical decisions.', icon: Hand, features: ['Approval workflows', 'Manual checkpoints', 'Escalation rules'], color: 'cyan' },
              ].map((feature, idx) => {
                const Icon = feature.icon
                return (
                  <Card key={idx} variant="feature" className="h-full">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-${feature.color}-500/10 text-${feature.color}-400`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-slate-400 text-sm mb-6">{feature.desc}</p>
                    <ul className="space-y-2">
                      {feature.features.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                          <Check className="h-4 w-4 text-cyan-400" />{item}
                        </li>
                      ))}
                    </ul>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* More Features */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30 border-y border-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="purple" className="mb-4">And More</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Additional Capabilities</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[ 
                { title: 'Template Library', desc: '50+ pre-built templates', icon: Zap },
                { title: 'Team Collaboration', desc: 'Share swarms with your team', icon: Users },
                { title: 'Scheduled Runs', desc: 'Cron scheduling built-in', icon: Clock },
                { title: 'Global Infrastructure', desc: 'Low-latency worldwide', icon: Globe },
              ].map((f, idx) => {
                const Icon = f.icon
                return (
                  <Card key={idx} variant="glass" className="h-full">
                    <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-semibold text-white mb-1">{f.title}</h3>
                    <p className="text-slate-400 text-sm">{f.desc}</p>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card variant="glass" className="text-center p-10">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Building?</h2>
              <p className="text-slate-400 mb-8">Jump into the dashboard and create your first swarm.</p>
              <Link href="/dashboard" className="btn-primary text-lg">
                Go to Dashboard<ArrowRight className="h-5 w-5" />
              </Link>
            </Card>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}
