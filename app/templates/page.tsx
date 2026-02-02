'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Sparkles, 
  Zap, 
  Check, 
  ArrowRight, 
  Search, 
  Clock, 
  Users, 
  Activity, 
  FileText, 
  Mail, 
  Database, 
  Headphones,
  Bot,
  Workflow,
  Globe
} from 'lucide-react'
import { Navbar } from '@/app/components/navbar'
import { Footer } from '@/app/components/footer'
import { Card } from '@/app/components/ui/card'
import { Badge } from '@/app/components/ui/badge'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/app/components/scroll-reveal'
import { AnimatedSection } from '@/app/components/animated-section'

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
    <div className="min-h-screen bg-hero-gradient text-white overflow-x-hidden">
      {/* Animated Background - Standardized */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] animate-float animation-delay-500" />
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Header */}
        <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <Badge variant="purple" className="mb-6">
                Pre-Built Templates
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
                Start with a
                <span className="gradient-text"> Proven Blueprint</span>
              </h1>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Choose from our library of battle-tested swarm templates, designed for common business workflows.
              </p>
            </ScrollReveal>
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
                className="input-primary w-full pl-12"
              />
            </div>

            {/* Category Pills - Standardized */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-800/50 border border-slate-700 text-slate-400 hover:text-white hover:border-slate-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Templates Grid - Using Card Component */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.06}>
              {filteredTemplates.map((template) => (
                <StaggerItem key={template.id}>
                  <Card variant="template" className="h-full group touch-feedback">
                    <div className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className={`icon-wrapper w-12 h-12 rounded-xl flex items-center justify-center ${
                          template.color === 'cyan' ? 'bg-cyan-500/10 text-cyan-400' :
                          template.color === 'purple' ? 'bg-purple-500/10 text-purple-400' :
                          template.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-400' :
                          template.color === 'amber' ? 'bg-amber-500/10 text-amber-400' :
                          'bg-rose-500/10 text-rose-400'
                        }`}>
                          {template.icon}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="badge">
                            {template.agents.length} agents
                          </span>
                          {template.popular && (
                            <Badge variant="amber">Popular</Badge>
                          )}
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {template.name}
                      </h3>
                      <p className="text-slate-400 text-sm mb-4 leading-relaxed">{template.description}</p>

                      {/* Agents */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {template.agents.map((agent) => (
                          <span key={agent} className="agent-tag">
                            {agent}
                          </span>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="flex items-center gap-4 text-xs text-slate-500">
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
                    <div className="px-6 py-4 border-t border-slate-700/50 bg-slate-800/30">
                      <Link 
                        href={`/builder?template=${template.id}`}
                        className="btn-secondary w-full text-sm group/btn touch-feedback"
                      >
                        Use Template
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {filteredTemplates.length === 0 && (
              <ScrollReveal className="text-center py-20">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-slate-800/50 flex items-center justify-center">
                  <Search className="w-8 h-8 text-slate-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No templates found</h3>
                <p className="text-slate-400">Try adjusting your search or category filter</p>
              </ScrollReveal>
            )}
          </div>
        </section>

        {/* CTA Section - Standardized */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Can't Find What You Need?
              </h2>
              <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                Build a custom swarm tailored to your specific workflow. Our AI will help you design the perfect agent team.
              </p>
              <Link 
                href="/builder"
                className="btn-primary text-lg touch-feedback"
              >
                Build Custom Swarm
                <ArrowRight className="h-5 w-5" />
              </Link>
            </ScrollReveal>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}

const templates = [
  {
    id: 'lead-gen',
    name: 'Lead Generation',
    description: 'Research prospects, qualify leads, and automate personalized outreach campaigns at scale.',
    icon: <Zap className="h-6 w-6" />,
    agents: ['Researcher', 'Qualifier', 'Outreach'],
    category: 'Sales',
    duration: '~5 min',
    uses: 12543,
    popular: true,
    color: 'cyan',
  },
  {
    id: 'content-marketing',
    name: 'Content Marketing',
    description: 'Research topics, draft blog posts, create social content, and schedule across platforms.',
    icon: <FileText className="h-6 w-6" />,
    agents: ['Researcher', 'Writer', 'Editor', 'Scheduler'],
    category: 'Marketing',
    duration: '~15 min',
    uses: 8932,
    popular: true,
    color: 'purple',
  },
  {
    id: 'market-research',
    name: 'Market Research',
    description: 'Deep research on markets, competitors, and trends with synthesized reports and citations.',
    icon: <Activity className="h-6 w-6" />,
    agents: ['Analyst', 'Gatherer', 'Synthesizer'],
    category: 'Research',
    duration: '~20 min',
    uses: 6541,
    popular: false,
    color: 'emerald',
  },
  {
    id: 'customer-support',
    name: 'Customer Support',
    description: 'Classify tickets, draft responses, and escalate complex issues to human agents.',
    icon: <Headphones className="h-6 w-6" />,
    agents: ['Classifier', 'Responder', 'Escalator'],
    category: 'Support',
    duration: '~2 min',
    uses: 9876,
    popular: true,
    color: 'amber',
  },
  {
    id: 'data-processing',
    name: 'Data Processing',
    description: 'Ingest data from multiple sources, clean, transform, and export to any format.',
    icon: <Database className="h-6 w-6" />,
    agents: ['Ingestor', 'Cleaner', 'Transformer'],
    category: 'Operations',
    duration: '~10 min',
    uses: 4321,
    popular: false,
    color: 'rose',
  },
  {
    id: 'email-campaigns',
    name: 'Email Campaigns',
    description: 'Segment audiences, personalize content, and automate drip campaigns.',
    icon: <Mail className="h-6 w-6" />,
    agents: ['Segmenter', 'Copywriter', 'Scheduler'],
    category: 'Marketing',
    duration: '~8 min',
    uses: 7654,
    popular: false,
    color: 'purple',
  },
  {
    id: 'research-assistant',
    name: 'Research Assistant',
    description: 'Deep research on any topic with synthesized reports and citations.',
    icon: <Globe className="h-6 w-6" />,
    agents: ['Query', 'Gatherer', 'Synthesizer'],
    category: 'Research',
    duration: '~20 min',
    uses: 5432,
    popular: false,
    color: 'emerald',
  },
  {
    id: 'workflow-automation',
    name: 'Workflow Automation',
    description: 'Automate repetitive tasks across multiple tools and platforms.',
    icon: <Workflow className="h-6 w-6" />,
    agents: ['Trigger', 'Processor', 'Action'],
    category: 'Operations',
    duration: '~12 min',
    uses: 3210,
    popular: false,
    color: 'cyan',
  },
  {
    id: 'custom-swarm',
    name: 'Custom Swarm',
    description: 'Build a completely custom agent team for your unique workflow.',
    icon: <Bot className="h-6 w-6" />,
    agents: ['Custom Configuration'],
    category: 'Operations',
    duration: 'Varies',
    uses: 2100,
    popular: false,
    color: 'cyan',
  },
]
