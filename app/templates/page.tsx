'use client'

import Link from 'next/link'
import { Sparkles, ArrowRight } from 'lucide-react'

const templates = [
  {
    id: 'lead-gen',
    name: 'Lead Generation Swarm',
    description: 'Automate prospect research, qualification, and personalized outreach.',
    useCases: ['Sales prospecting', 'Partnership outreach', 'Recruitment'],
    agents: ['Research Agent', 'Qualification Agent', 'Outreach Agent'],
  },
  {
    id: 'content',
    name: 'Content Creation Swarm',
    description: 'Research topics, draft content, edit, and schedule across platforms.',
    useCases: ['Blog posts', 'Social media', 'Newsletters'],
    agents: ['Research Agent', 'Writer Agent', 'Editor Agent', 'Scheduler Agent'],
  },
  {
    id: 'research',
    name: 'Research Assistant Swarm',
    description: 'Deep research on any topic with synthesized reports and citations.',
    useCases: ['Market research', 'Competitive analysis', 'Due diligence'],
    agents: ['Query Agent', 'Gatherer Agent', 'Synthesizer Agent'],
  },
  {
    id: 'support',
    name: 'Customer Support Swarm',
    description: 'Classify tickets, auto-respond to common issues, and escalate complex cases.',
    useCases: ['Ticket routing', 'FAQ responses', 'Issue escalation'],
    agents: ['Classifier Agent', 'Responder Agent', 'Escalation Agent'],
  },
  {
    id: 'data',
    name: 'Data Processing Swarm',
    description: 'Ingest data from multiple sources, clean, transform, and export.',
    useCases: ['Data migration', 'Report generation', 'ETL pipelines'],
    agents: ['Ingestor Agent', 'Cleaner Agent', 'Transformer Agent'],
  },
]

export default function Templates() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Navbar */}
      <nav className="border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/" className="flex items-center gap-2">
              <Sparkles className="h-8 w-8 text-cyan-400" />
              <span className="text-2xl font-bold text-white">SwarmForge</span>
            </Link>
            <Link href="/dashboard" className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Pre-Built Templates</h1>
          <p className="text-slate-400">Deploy production-ready agent swarms in minutes.</p>
        </div>

        <div className="space-y-6">
          {templates.map((template) => (
            <div key={template.id} className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{template.name}</h3>
                  <p className="text-slate-400 mb-4">{template.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {template.agents.map((agent) => (
                      <span key={agent} className="text-xs px-2 py-1 bg-slate-700 rounded text-slate-300">
                        {agent}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm text-slate-500">
                    Best for: {template.useCases.join(', ')}
                  </div>
                </div>
                <Link
                  href="/builder"
                  className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg whitespace-nowrap"
                >
                  Use Template
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
