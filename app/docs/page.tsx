'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Search, 
  Book, 
  Code, 
  FileText, 
  Terminal, 
  ChevronRight, 
  Copy,
  Check,
  ArrowRight,
  Zap,
  Shield,
  Users
} from 'lucide-react';
import { Navbar } from '@/app/components/navbar';
import { Footer } from '@/app/components/footer';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';

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

// Code block component with copy functionality
function CodeBlock({ code, language = 'bash' }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <div className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={handleCopy}
          className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 text-slate-400 hover:text-white transition-all"
          title="Copy to clipboard"
        >
          {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
      <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 border-b border-slate-800">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-xs text-slate-500 ml-2">{language}</span>
        </div>
        <pre className="p-4 overflow-x-auto">
          <code className="text-sm text-slate-300 font-mono">{code}</code>
        </pre>
      </div>
    </div>
  );
}

// Navigation sidebar item
function NavItem({ 
  icon: Icon, 
  label, 
  href, 
  isActive = false,
  hasSubmenu = false 
}: { 
  icon: React.ElementType; 
  label: string; 
  href: string; 
  isActive?: boolean;
  hasSubmenu?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
        isActive 
          ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' 
          : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
      }`}
    >
      <Icon className="h-4 w-4" />
      <span className="flex-1">{label}</span>
      {hasSubmenu && <ChevronRight className="h-4 w-4 opacity-50" />}
    </Link>
  );
}

const quickStartSteps = [
  {
    title: 'Install the CLI',
    description: 'Get started by installing the SwarmForge CLI globally.',
    code: 'npm install -g @swarmforge/cli',
  },
  {
    title: 'Authenticate',
    description: 'Login to your SwarmForge account or create a new one.',
    code: 'swarmforge login',
  },
  {
    title: 'Create your first swarm',
    description: 'Use a template or build from scratch.',
    code: 'swarmforge create my-first-swarm --template lead-gen',
  },
  {
    title: 'Deploy and run',
    description: 'Deploy your swarm to the cloud and start processing tasks.',
    code: 'swarmforge deploy && swarmforge run',
  },
];

const docSections = [
  {
    category: 'Getting Started',
    items: [
      { label: 'Quick Start', href: '#quickstart', icon: Zap },
      { label: 'Installation', href: '#installation', icon: Terminal },
      { label: 'Authentication', href: '#auth', icon: Shield },
      { label: 'Your First Swarm', href: '#first-swarm', icon: Book },
    ],
  },
  {
    category: 'API Reference',
    items: [
      { label: 'REST API', href: '#rest-api', icon: Code },
      { label: 'GraphQL', href: '#graphql', icon: Code },
      { label: 'Webhooks', href: '#webhooks', icon: Code },
      { label: 'Rate Limits', href: '#rate-limits', icon: Shield },
    ],
  },
  {
    category: 'Guides',
    items: [
      { label: 'Building Agents', href: '#agents', icon: Users },
      { label: 'Workflow Design', href: '#workflows', icon: FileText },
      { label: 'Integrations', href: '#integrations', icon: Zap },
      { label: 'Best Practices', href: '#best-practices', icon: Book },
    ],
  },
  {
    category: 'SDKs',
    items: [
      { label: 'JavaScript/TypeScript', href: '#sdk-js', icon: Code },
      { label: 'Python', href: '#sdk-python', icon: Code },
      { label: 'Go', href: '#sdk-go', icon: Code },
      { label: 'Rust', href: '#sdk-rust', icon: Code },
    ],
  },
];

export default function Documentation() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('quickstart');

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] animate-float animation-delay-500" />
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Header with Search */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="text-center max-w-3xl mx-auto">
              <Badge variant="cyan" dot className="mb-6">
                Documentation
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                Learn to build with <span className="gradient-text">SwarmForge</span>
              </h1>
              <p className="text-xl text-slate-400 mb-8">
                Everything you need to create, deploy, and manage AI agent swarms.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search documentation..."
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 transition-all"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-1">
                  <kbd className="px-2 py-1 rounded bg-slate-700 text-slate-400 text-xs">⌘</kbd>
                  <kbd className="px-2 py-1 rounded bg-slate-700 text-slate-400 text-xs">K</kbd>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Main Documentation Layout */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[280px_1fr] gap-12">
              {/* Left Sidebar */}
              <AnimatedSection delay={100} className="hidden lg:block">
                <div className="sticky top-24 space-y-8">
                  {docSections.map((section) => (
                    <div key={section.category}>
                      <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 px-3">
                        {section.category}
                      </h3>
                      <nav className="space-y-1">
                        {section.items.map((item) => (
                          <NavItem
                            key={item.label}
                            icon={item.icon}
                            label={item.label}
                            href={item.href}
                            isActive={activeSection === item.href.replace('#', '')}
                          />
                        ))}
                      </nav>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Main Content */}
              <AnimatedSection delay={200}>
                <div className="prose prose-invert max-w-none">
                  {/* Quick Start Section */}
                  <div id="quickstart" className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                        <Zap className="h-5 w-5 text-cyan-400" />
                      </div>
                      <h2 className="text-3xl font-bold text-white">Quick Start Guide</h2>
                    </div>
                    <p className="text-slate-400 text-lg mb-8">
                      Get up and running with SwarmForge in under 5 minutes. Follow these steps to create and deploy your first AI agent swarm.
                    </p>

                    <div className="space-y-8">
                      {quickStartSteps.map((step, idx) => (
                        <Card key={idx} variant="glass" className="relative">
                          <div className="absolute -left-3 -top-3 w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                            {idx + 1}
                          </div>
                          <div className="pl-4">
                            <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                            <p className="text-slate-400 mb-4">{step.description}</p>
                            <CodeBlock code={step.code} />
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* SDK Installation Section */}
                  <div id="installation" className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                        <Terminal className="h-5 w-5 text-purple-400" />
                      </div>
                      <h2 className="text-3xl font-bold text-white">SDK Installation</h2>
                    </div>
                    <p className="text-slate-400 text-lg mb-8">
                      Install the SwarmForge SDK for your preferred programming language.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <Card variant="glass">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <Code className="h-5 w-5 text-cyan-400" />
                          JavaScript / TypeScript
                        </h3>
                        <CodeBlock code="npm install @swarmforge/sdk" />
                      </Card>
                      <Card variant="glass">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <Code className="h-5 w-5 text-emerald-400" />
                          Python
                        </h3>
                        <CodeBlock code="pip install swarmforge" />
                      </Card>
                    </div>
                  </div>

                  {/* API Example Section */}
                  <div id="rest-api" className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                        <Code className="h-5 w-5 text-emerald-400" />
                      </div>
                      <h2 className="text-3xl font-bold text-white">API Quick Reference</h2>
                    </div>

                    <Card variant="glass" className="mb-6">
                      <h3 className="text-lg font-semibold text-white mb-4">Create a Swarm</h3>
                      <CodeBlock 
                        language="javascript" 
                        code={`curl -X POST https://api.swarmforge.io/v1/swarms \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Lead Research Swarm",
    "template": "lead-gen",
    "config": {
      "agents": ["researcher", "qualifier"],
      "maxRuns": 100
    }
  }'`} 
                      />
                    </Card>

                    <Card variant="glass">
                      <h3 className="text-lg font-semibold text-white mb-4">Run a Swarm</h3>
                      <CodeBlock 
                        language="javascript" 
                        code={`curl -X POST https://api.swarmforge.io/v1/swarms/{id}/run \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "input": {
      "company": "Acme Corp",
      "industry": "Technology"
    }
  }'`} 
                      />
                    </Card>
                  </div>

                  {/* Next Steps CTA */}
                  <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10 border border-cyan-500/20">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Ready to dive deeper?</h3>
                        <p className="text-slate-400">
                          Explore our comprehensive guides and API reference.
                        </p>
                      </div>
                      <Link 
                        href="/builder" 
                        className="btn-primary whitespace-nowrap"
                      >
                        Try the Builder
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
