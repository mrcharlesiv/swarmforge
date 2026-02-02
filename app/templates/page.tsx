'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Sparkles, Zap, Shield, Check, ArrowRight, Search, Filter, Clock, Users, Activity, FileText, Mail, Database, Headphones } from 'lucide-react'

export default function Templates() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Sales', 'Marketing', 'Research', 'Support', 'Operations']

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || template.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500/20 rounded-xl blur-lg group-hover:bg-cyan-500/30 transition-all" />
                <div className="relative w-10 h-10 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                SwarmForge
              </span>
            </Link>
            <Link 
              href="/" 
              className="text-slate-400 hover:text-white font-medium transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <div className="relative z-10">
        {/* Header */}
        <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold mb-6">
              Pre-Built Templates
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Start with a
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent"> Proven Blueprint</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Choose from our library of battle-tested swarm templates, designed for common business workflows.
            </p>
          </div>
        </section>

        {/* Search & Filter */}
        <section className="pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Search */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search templates..."
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-indigo-500 to-indigo-400 text-white'
                      : 'bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-white hover:border-slate-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Templates Grid */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTemplates.map((template) => (
                <div 
                  key={template.id}
                  className="group relative bg-gradient-to-b from-slate-800/80 to-slate-900/80 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-indigo-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                        {template.icon}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full bg-slate-700/50 text-slate-400 text-xs font-medium">
                          {template.agents.length} agents
                        </span>
                        {template.popular && (
                          <span className="px-2.5 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-medium">
                            Popular
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-white mb-2">{template.name}</h3>
                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">{template.description}</p>

                    {/* Agents */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {template.agents.map((agent) => (
                        <span key={agent} className="px-2 py-1 bg-slate-700/50 rounded-lg text-slate-400 text-xs">
                          {agent}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {template.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" />
                        {template.uses.toLocaleString()} uses
                      </span>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="relative px-6 py-4 border-t border-slate-700/50 bg-slate-800/30">
                    <Link 
                      href={`/builder?template=${template.id}`}
                      className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-700/50 hover:bg-indigo-500/20 text-slate-300 hover:text-indigo-400 font-medium text-sm transition-all group/btn"
                    >
                      Use Template
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {filteredTemplates.length === 0 && (
              <div className="text-center py-20">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-slate-800/50 flex items-center justify-center">
                  <Search className="w-8 h-8 text-slate-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No templates found</h3>
                <p className="text-slate-400">Try adjusting your search or category filter</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Can't Find What You Need?
            </h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Build a custom swarm tailored to your specific workflow. Our AI will help you design the perfect agent team.
            </p>
            <Link 
              href="/builder"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-indigo-400 hover:from-indigo-400 hover:to-indigo-300 text-slate-900 font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/30"
            >
              Build Custom Swarm
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800/50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white">SwarmForge</span>
            </div>
            <p className="text-slate-500 text-sm">
              © 2026 SwarmForge. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

const templates = [
  {
    id: 'lead-gen',
    name: 'Lead Generation',
    description: 'Research prospects, qualify leads, and automate personalized outreach campaigns at scale.',
    icon: <Zap className="h-6 w-6 text-indigo-400" />,
    agents: ['Researcher', 'Qualifier', 'Outreach'],
    category: 'Sales',
    duration: '~5 min',
    uses: 12543,
    popular: true,
  },
  {
    id: 'content-marketing',
    name: 'Content Marketing',
    description: 'Research topics, draft blog posts, create social content, and schedule across platforms.',
    icon: <FileText className="h-6 w-6 text-indigo-400" />,
    agents: ['Researcher', 'Writer', 'Editor', 'Scheduler'],
    category: 'Marketing',
    duration: '~15 min',
    uses: 8932,
    popular: true,
  },
  {
    id: 'market-research',
    name: 'Market Research',
    description: 'Deep research on markets, competitors, and trends with synthesized reports and citations.',
    icon: <Activity className="h-6 w-6 text-indigo-400" />,
    agents: ['Analyst', 'Gatherer', 'Synthesizer'],
    category: 'Research',
    duration: '~20 min',
    uses: 6541,
    popular: false,
  },
  {
    id: 'customer-support',
    name: 'Customer Support',
    description: 'Classify tickets, draft responses, and escalate complex issues to human agents.',
    icon: <Headphones className="h-6 w-6 text-indigo-400" />,
    agents: ['Classifier', 'Responder', 'Escalator'],
    category: 'Support',
    duration: '~2 min',
    uses: 9876,
    popular: true,
  },
  {
    id: 'data-processing',
    name: 'Data Processing',
    description: 'Ingest data from multiple sources, clean, transform, and export to any format.',
    icon: <Database className="h-6 w-6 text-indigo-400" />,
    agents: ['Ingestor', 'Cleaner', 'Transformer'],
    category: 'Operations',
    duration: '~10 min',
    uses: 4321,
    popular: false,
  },
  {
    id: 'email-campaigns',
    name: 'Email Campaigns',
    description: 'Segment audiences, personalize content, and automate drip campaigns.',
    icon: <Mail className="h-6 w-6 text-indigo-400" />,
    agents: ['Segmenter', 'Copywriter', 'Scheduler'],
    category: 'Marketing',
    duration: '~8 min',
    uses: 7654,
    popular: false,
  },
]
