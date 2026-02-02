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

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
       <div className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <button onClick={copyToClipboard} className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 text-slate-400 hover:text-white transition-all" title="Copy to clipboard">
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </button>
        </div>

      <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 border-b border-slate-800">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
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

export default function Docs() {
  const quickLinks = [
    { id: 'quickstart', title: 'Quick Start' },
    { id: 'installation', title: 'Installation' },
    { id: 'api', title: 'API Reference' },
    { id: 'faq', title: 'FAQ' }
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white overflow-x-hidden">
      {/* Animated Background - Standardized */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] animate-float animation-delay-500" />
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Header */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="cyan" className="mb-6">
              Documentation
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Learn to Build with
              <span className="gradient-text"> SwarmForge</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10">
              Everything you need to create, deploy, and manage AI agent swarms.
            </p>
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 transition-all"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-1">
                <kbd className="px-2 py-1 rounded bg-slate-700 text-slate-400 text-xs">⌘</kbd>
                <kbd className="px-2 py-1 rounded bg-slate-700 text-slate-400 text-xs">K</kbd>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 lg:grid-cols-4 gap-6">
              {quickLinks.map(link => (
                <Link key={link.id} href={`#${link.id}`}>
                  <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-lg text-white hover:bg-slate-800/40 transition-all">
                    <span>{link.title}</span>
                    <ChevronRight className="w-5 h-5 text-cyan-400 inline-block ml-2" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto prose prose-invert">
            <div id="quickstart" className="mb-12">
              <h2 className="text-2xl font-semibold text-white">Quick Start</h2>
              <p className="text-slate-300">Get up and running with SwarmForge in five minutes!</p>
              <CodeBlock code="npm install -g @swarmforge/cli" language="bash" />
            </div>

            <div id="installation" className="mb-12">
              <h2 className="text-2xl font-semibold text-white">Installation</h2>
              <p className="text-slate-300">Instructions to install the SwarmForge CLI.</p>
              <CodeBlock code="swarmforge login" language="bash" />
            </div>

            <div id="api" className="mb-12">
              <h2 className="text-2xl font-semibold text-white">API Reference</h2>
              <p className="text-slate-300">Explore the API with detailed examples and use cases.</p>
              <CodeBlock code="curl -X GET https://api.swarmforge.io/v1/swarms" language="bash" />
            </div>

            <div id="faq" className="mb-12">
              <h2 className="text-2xl font-semibold text-white">FAQ</h2>
              <p className="text-slate-300">Common questions and answers about SwarmForge.</p>
            </div>
          </div>
        </section>

        {/* CTA Banner - Standardized */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card variant="glass" className="relative overflow-hidden text-center p-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
              
              <div className="relative">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Need More Help?
                </h2>
                <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                  Reach out to our support team for personal assistance.
                </p>
                <Link 
                  href="/contact" 
                  className="btn-primary text-lg"
                >
                  Contact Support
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </Card>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
