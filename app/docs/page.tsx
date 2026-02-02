'use client'

import Link from 'next/link'
import { 
  BookOpen, 
  Rocket, 
  Lightbulb, 
  Code, 
  GraduationCap, 
  ArrowRight, 
  FileText,
  Terminal,
  Users,
  Workflow
} from 'lucide-react'
import { Navbar } from '@/app/components/navbar'
import { Footer } from '@/app/components/footer'
import { Card } from '@/app/components/ui/card'
import { Badge } from '@/app/components/ui/badge'

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Hero */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="cyan" dot className="mb-6">Documentation</Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Getting Started with
              <span className="gradient-text"> SwarmForge</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
              Learn how to build, deploy, and manage AI agent swarms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#quick-start" className="btn-primary text-lg py-4 px-8">
                <Rocket className="h-5 w-5" />Quick Start
              </Link>
              <Link href="#concepts" className="btn-secondary text-lg py-4 px-8">
                <BookOpen className="h-5 w-5" />Core Concepts
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section id="quick-start" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30 border-y border-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="emerald" className="mb-4">5 Minutes</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Quick Start</h2>
              <p className="text-slate-400 text-lg">Get your first swarm running in three steps.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[ 
                { step: 1, title: 'Create Account', desc: 'Sign up for free and get instant access.', icon: Users },
                { step: 2, title: 'Choose Template', desc: 'Browse pre-built templates or start fresh.', icon: FileText },
                { step: 3, title: 'Deploy Swarm', desc: 'Launch your agents and watch them work.', icon: Rocket },
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <Card key={idx} variant="feature" className="text-center">
                    <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center mx-auto mb-6">
                      <span className="text-xl font-bold text-cyan-400">{item.step}</span>
                    </div>
                    <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Core Concepts */}
        <section id="concepts" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="purple" className="mb-4">Fundamentals</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Core Concepts</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[ 
                { title: 'Swarms', desc: 'A team of AI agents working together toward a goal.', icon: Workflow, color: 'cyan' },
                { title: 'Agents', desc: 'Individual AI workers with specialized roles.', icon: Users, color: 'purple' },
                { title: 'Tasks', desc: 'What you want your swarm to accomplish.', icon: Terminal, color: 'emerald' },
                { title: 'Runs', desc: 'A single execution of your swarm on a task.', icon: Rocket, color: 'amber' },
              ].map((concept, idx) => {
                const Icon = concept.icon
                return (
                  <Card key={idx} variant="glass">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-${concept.color}-500/10 text-${concept.color}-400`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{concept.title}</h3>
                    <p className="text-slate-400 text-sm">{concept.desc}</p>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Tutorials */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30 border-y border-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="rose" className="mb-4">Learn by Doing</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Tutorials</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[ 
                { title: 'Lead Gen Swarm', desc: 'Research prospects and draft outreach.', level: 'Beginner', time: '15 min', icon: Users },
                { title: 'Content Pipeline', desc: 'Automate content from research to publish.', level: 'Intermediate', time: '25 min', icon: FileText },
                { title: 'Support Automation', desc: 'Intelligent ticket classification.', level: 'Beginner', time: '20 min', icon: GraduationCap },
              ].map((t, idx) => {
                const Icon = t.icon
                return (
                  <Card key={idx} variant="template">
                    <div className="p-6">
                      <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="badge badge-emerald text-xs">{t.level}</span>
                      <h3 className="text-lg font-semibold text-white mt-2 mb-2">{t.title}</h3>
                      <p className="text-slate-400 text-sm mb-4">{t.desc}</p>
                      <p className="text-xs text-slate-500">{t.time} read</p>
                    </div>
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
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Build?</h2>
              <p className="text-slate-400 mb-8">Create your first swarm in minutes.</p>
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
