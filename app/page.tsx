'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Sparkles, Zap, Shield, Github, Twitter, ArrowRight, Check } from 'lucide-react'

export default function LandingPage() {
  const [email, setEmail] = useState('')

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Navbar */}
      <nav className="border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <Sparkles className="h-8 w-8 text-cyan-400" />
              <span className="text-2xl font-bold text-white">SwarmForge</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/templates" className="text-slate-300 hover:text-white">
                Templates
              </Link>
              <Link href="/pricing" className="text-slate-300 hover:text-white">
                Pricing
              </Link>
              <Link href="/dashboard" className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-20 pb-32 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm mb-8">
            <Sparkles className="h-4 w-4" />
            <span>Now in public beta</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Build AI Agent Swarms
            <br />
            <span className="text-cyan-400">Without Code</span>
          </h1>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Describe what you need. SwarmForge builds autonomous agent teams that work together 
            to complete complex tasks — research, content, outreach, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard" className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-xl text-lg font-semibold">
              Start Building Free
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/templates" className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-xl text-lg font-semibold">
              View Templates
            </Link>
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Pre-Built Swarm Templates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template) => (
              <div key={template.id} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                  {template.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{template.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{template.description}</p>
                <div className="flex flex-wrap gap-2">
                  {template.agents.map((agent) => (
                    <span key={agent} className="text-xs px-2 py-1 bg-slate-700 rounded text-slate-300">
                      {agent}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Simple Pricing</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-2">Free</h3>
              <p className="text-slate-400 mb-6">Perfect for getting started</p>
              <div className="text-4xl font-bold text-white mb-6">$0</div>
              <ul className="space-y-3 mb-8">
                {['3 swarms', '100 runs/month', 'Basic templates', 'Community support'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-300">
                    <Check className="h-5 w-5 text-cyan-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/dashboard" className="block text-center bg-slate-700 hover:bg-slate-600 text-white py-3 rounded-lg">
                Get Started
              </Link>
            </div>
            {/* Pro */}
            <div className="bg-slate-800 rounded-2xl p-8 border-2 border-cyan-500 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-cyan-500 text-white text-sm font-medium rounded-full">
                Most Popular
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Pro</h3>
              <p className="text-slate-400 mb-6">For serious automation</p>
              <div className="text-4xl font-bold text-white mb-6">$29<span className="text-lg text-slate-400">/mo</span></div>
              <ul className="space-y-3 mb-8">
                {['Unlimited swarms', '10,000 runs/month', 'All templates + custom', 'Priority support', 'API access', 'Team collaboration'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-300">
                    <Check className="h-5 w-5 text-cyan-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/dashboard" className="block text-center bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg">
                Upgrade to Pro
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-cyan-400" />
            <span className="text-lg font-bold text-white">SwarmForge</span>
          </div>
          <div className="flex gap-6 text-slate-400">
            <Link href="/templates" className="hover:text-white">Templates</Link>
            <Link href="/pricing" className="hover:text-white">Pricing</Link>
            <Link href="/docs" className="hover:text-white">Docs</Link>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com" className="text-slate-400 hover:text-white">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://twitter.com" className="text-slate-400 hover:text-white">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

const templates = [
  {
    id: 'lead-gen',
    name: 'Lead Generation',
    description: 'Research prospects, qualify leads, and automate personalized outreach.',
    icon: <Zap className="h-6 w-6 text-cyan-400" />,
    agents: ['Researcher', 'Qualifier', 'Outreach']
  },
  {
    id: 'content',
    name: 'Content Creation',
    description: 'Research topics, draft content, edit, and schedule across platforms.',
    icon: <Sparkles className="h-6 w-6 text-cyan-400" />,
    agents: ['Researcher', 'Writer', 'Editor', 'Scheduler']
  },
  {
    id: 'research',
    name: 'Research Assistant',
    description: 'Deep research on any topic with synthesized reports and citations.',
    icon: <Shield className="h-6 w-6 text-cyan-400" />,
    agents: ['Query', 'Gatherer', 'Synthesizer']
  },
  {
    id: 'support',
    name: 'Customer Support',
    description: 'Classify tickets, auto-respond, and escalate complex issues.',
    icon: <Check className="h-6 w-6 text-cyan-400" />,
    agents: ['Classifier', 'Responder', 'Escalator']
  },
  {
    id: 'data',
    name: 'Data Processing',
    description: 'Ingest data, clean, transform, and export to any format.',
    icon: <ArrowRight className="h-6 w-6 text-cyan-400" />,
    agents: ['Ingestor', 'Cleaner', 'Transformer']
  },
]

const features = [
  {
    title: 'Describe Your Goal',
    description: 'Tell SwarmForge what you need in plain English. No coding required.',
    icon: <Sparkles className="h-8 w-8 text-cyan-400" />
  },
  {
    title: 'AI Builds Your Swarm',
    description: 'We automatically generate the optimal agent team and configuration.',
    icon: <Zap className="h-8 w-8 text-cyan-400" />
  },
  {
    title: 'Deploy & Monitor',
    description: 'Run your swarm, monitor progress, and get results in real-time.',
    icon: <Shield className="h-8 w-8 text-cyan-400" />
  },
]
