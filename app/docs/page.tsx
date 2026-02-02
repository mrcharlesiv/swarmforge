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
  Zap,
  Shield,
  Globe,
  ArrowRight
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
function CodeBlock({ 
  code, 
  language = 'typescript',
  filename 
}: { 
  code: string; 
  language?: string;
  filename?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      {filename && (
        <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700 rounded-t-lg">
          <span className="text-sm text-slate-400">{filename}</span>
          <span className="text-xs text-slate-500 uppercase">{language}</span>
        </div>
      )}
      <div className={`relative bg-slate-950 border border-slate-800 ${filename ? 'rounded-b-lg' : 'rounded-lg'} overflow-hidden`}>
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 p-2 rounded-lg bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700 transition-all opacity-0 group-hover:opacity-100"
          aria-label="Copy code"
        >
          {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
        </button>
        <pre className="p-4 overflow-x-auto text-sm">
          <code className="text-slate-300 font-mono">{code}</code>
        </pre>
      </div>
    </div>
  );
}

// Sidebar navigation items
const sidebarNav = [
  {
    section: 'Getting Started',
    icon: <Book className="h-4 w-4" />,
    items: [
      { label: 'Quick Start', href: '#quick-start', active: true },
      { label: 'Installation', href: '#installation' },
      { label: 'First Swarm', href: '#first-swarm' },
      { label: 'Configuration', href: '#configuration' },
    ]
  },
  {
    section: 'API Reference',
    icon: <Code className="h-4 w-4" />,
    items: [
      { label: 'Authentication', href: '#auth' },
      { label: 'Swarms API', href: '#swarms-api' },
      { label: 'Agents API', href: '#agents-api' },
      { label: 'Runs API', href: '#runs-api' },
    ]
  },
  {
    section: 'Guides',
    icon: <FileText className="h-4 w-4" />,
    items: [
      { label: 'Building Swarms', href: '#building' },
      { label: 'Custom Agents', href: '#custom-agents' },
      { label: 'Best Practices', href: '#best-practices' },
      { label: 'Troubleshooting', href: '#troubleshooting' },
    ]
  },
  {
    section: 'SDKs',
    icon: <Terminal className="h-4 w-4" />,
    items: [
      { label: 'JavaScript/TypeScript', href: '#js-sdk' },
      { label: 'Python', href: '#python-sdk' },
      { label: 'REST API', href: '#rest-api' },
    ]
  },
];

const quickStartCode = `import { SwarmForge } from '@swarmforge/sdk';

const client = new SwarmForge({
  apiKey: 'your_api_key_here'
});

// Create a new swarm
const swarm = await client.swarms.create({
  name: 'Research Assistant',
  description: 'A team of agents for deep research',
  agents: [
    {
      name: 'Researcher',
      role: 'research',
      model: 'gpt-4'
    },
    {
      name: 'Writer',
      role: 'content',
      model: 'gpt-4'
    }
  ]
});

// Run the swarm
const result = await client.runs.create({
  swarmId: swarm.id,
  input: 'Research the latest AI developments in 2026'
});`;

const apiExampleCode = `curl -X POST https://api.swarmforge.ai/v1/swarms \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Content Team",
    "agents": [
      {"name": "Editor", "role": "editor"},
      {"name": "Writer", "role": "writer"}
    ]
  }'`;

export default function Documentation() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('quick-start');

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
        <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="text-center max-w-3xl mx-auto">
              <Badge variant="cyan" dot className="mb-6">
                Documentation
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                Documentation
              </h1>
              <p className="text-xl text-slate-400 mb-8">
                Everything you need to build, deploy, and scale AI swarms.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search documentation..."
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 transition-all"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-1">
                  <kbd className="px-2 py-1 bg-slate-700 rounded text-xs text-slate-400">⌘</kbd>
                  <kbd className="px-2 py-1 bg-slate-700 rounded text-xs text-slate-400">K</kbd>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              
              {/* Sidebar Navigation */}
              <aside className="lg:w-64 flex-shrink-0">
                <nav className="sticky top-24 space-y-8">
                  {sidebarNav.map((section, idx) => (
                    <AnimatedSection key={section.section} delay={idx * 100}>
                      <div>
                        <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-300 mb-3 px-3">
                          {section.icon}
                          {section.section}
                        </h3>
                        <ul className="space-y-1">
                          {section.items.map((item) => (
                            <li key={item.label}>
                              <button
                                onClick={() => setActiveSection(item.href.replace('#', ''))}
                                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all ${
                                  activeSection === item.href.replace('#', '')
                                    ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                                }`}
                              >
                                {item.label}
                                {activeSection === item.href.replace('#', '') && (
                                  <ChevronRight className="h-4 w-4" />
                                )}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </AnimatedSection>
                  ))}
                </nav>
              </aside>

              {/* Main Content Area */}
              <main className="flex-1 min-w-0">
                <AnimatedSection delay={200}>
                  {/* Quick Start Guide */}
                  <div id="quick-start" className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center">
                        <Zap className="h-5 w-5 text-cyan-400" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-white">Quick Start Guide</h2>
                        <p className="text-slate-400">Get up and running in under 5 minutes</p>
                      </div>
                    </div>

                    <div className="prose prose-invert max-w-none">
                      <p className="text-slate-300 text-lg leading-relaxed mb-6">
                        SwarmForge makes it easy to build autonomous AI agent teams that work together 
                        to complete complex tasks. This guide will walk you through creating your first 
                        swarm and running your first task.
                      </p>

                      <h3 className="text-xl font-semibold text-white mt-8 mb-4">1. Install the SDK</h3>
                      <CodeBlock 
                        code="npm install @swarmforge/sdk" 
                        language="bash"
                        filename="Terminal"
                      />

                      <h3 className="text-xl font-semibold text-white mt-8 mb-4">2. Initialize the Client</h3>
                      <p className="text-slate-400 mb-4">
                        First, grab your API key from the <Link href="/dashboard" className="text-cyan-400 hover:underline">Dashboard</Link>.
                      </p>
                      <CodeBlock 
                        code={quickStartCode}
                        language="typescript"
                        filename="swarm.ts"
                      />

                      <h3 className="text-xl font-semibold text-white mt-8 mb-4">3. Monitor Your Run</h3>
                      <p className="text-slate-400 mb-4">
                        Check the status and get results from your swarm run:
                      </p>
                      <CodeBlock 
                        code={`// Poll for results
const run = await client.runs.get(result.id);
console.log(run.status); // 'pending' | 'running' | 'completed' | 'failed'

// Or use webhooks for real-time updates
client.webhooks.on('run.completed', (data) => {
  console.log('Run finished:', data.output);
});`}
                        language="typescript"
                        filename="monitor.ts"
                      />
                    </div>
                  </div>

                  {/* API Reference Preview */}
                  <div id="api-reference" className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center">
                        <Code className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-white">API Reference</h2>
                        <p className="text-slate-400">RESTful API for all swarm operations</p>
                      </div>
                    </div>

                    <Card variant="glass" className="mb-6">
                      <div className="flex items-center gap-4 mb-4">
                        <Badge variant="emerald">POST</Badge>
                        <code className="text-cyan-400">/v1/swarms</code>
                      </div>
                      <p className="text-slate-400 mb-4">Create a new swarm with specified agents and configuration.</p>
                      <CodeBlock 
                        code={apiExampleCode}
                        language="bash"
                        filename="Example Request"
                      />
                    </Card>

                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        { method: 'GET', endpoint: '/v1/swarms', desc: 'List all swarms' },
                        { method: 'GET', endpoint: '/v1/swarms/:id', desc: 'Get swarm details' },
                        { method: 'POST', endpoint: '/v1/runs', desc: 'Create a run' },
                        { method: 'GET', endpoint: '/v1/runs/:id', desc: 'Get run status' },
                      ].map((api) => (
                        <div key={api.endpoint} className="flex items-center gap-3 p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
                          <Badge variant={api.method === 'GET' ? 'cyan' : 'emerald'}>{api.method}</Badge>
                          <div>
                            <code className="text-sm text-cyan-400">{api.endpoint}</code>
                            <p className="text-xs text-slate-500">{api.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* SDKs Section */}
                  <div id="sdks" className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center">
                        <Terminal className="h-5 w-5 text-emerald-400" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-white">SDKs</h2>
                        <p className="text-slate-400">Official libraries for popular languages</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      {[
                        { 
                          name: 'JavaScript / TypeScript', 
                          icon: '📘',
                          install: 'npm install @swarmforge/sdk',
                          features: ['TypeScript support', 'React hooks', 'Node.js & Browser']
                        },
                        { 
                          name: 'Python', 
                          icon: '🐍',
                          install: 'pip install swarmforge',
                          features: ['Async/await', 'Pydantic models', 'Jupyter support']
                        },
                        { 
                          name: 'REST API', 
                          icon: '🌐',
                          install: 'curl https://api.swarmforge.ai',
                          features: ['Language agnostic', 'OpenAPI spec', 'Postman collection']
                        },
                      ].map((sdk) => (
                        <Card key={sdk.name} variant="feature" className="h-full">
                          <div className="text-2xl mb-3">{sdk.icon}</div>
                          <h3 className="text-lg font-semibold text-white mb-2">{sdk.name}</h3>
                          <CodeBlock 
                            code={sdk.install}
                            language="bash"
                          />
                          <ul className="mt-4 space-y-2">
                            {sdk.features.map((feature) => (
                              <li key={feature} className="flex items-center gap-2 text-sm text-slate-400">
                                <Check className="h-4 w-4 text-emerald-400" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Security Note */}
                  <div className="flex items-start gap-4 p-6 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                    <Shield className="h-6 w-6 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-amber-400 mb-1">Security Best Practices</h4>
                      <p className="text-slate-400 text-sm">
                        Never commit your API keys to version control. Use environment variables 
                        or a secure secrets manager. Rotate your keys regularly and monitor usage 
                        in the <Link href="/dashboard" className="text-cyan-400 hover:underline">Dashboard</Link>.
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              </main>

              {/* Right Sidebar - On This Page */}
              <aside className="hidden xl:block w-48 flex-shrink-0">
                <nav className="sticky top-24">
                  <h3 className="text-sm font-semibold text-slate-500 mb-3 uppercase tracking-wider">
                    On this page
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Quick Start',
                      'Installation',
                      'First Swarm',
                      'API Reference',
                      'SDKs',
                      'Security',
                    ].map((item) => (
                      <li key={item}>
                        <a 
                          href={`#${item.toLowerCase().replace(' ', '-')}`}
                          className="block text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </aside>
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
                <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-cyan-400" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Need Help?
                </h2>
                <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                  Can&apos;t find what you&apos;re looking for? Join our community Discord or 
                  reach out to our support team for assistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="https://discord.gg/swarmforge" 
                    className="btn-primary"
                  >
                    Join Discord
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link 
                    href="mailto:support@swarmforge.ai" 
                    className="btn-secondary"
                  >
                    Contact Support
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
