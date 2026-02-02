'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  Mail, 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Zap,
  Bot,
  Workflow,
  BarChart3,
  Shield,
  Users,
  Loader2,
  AlertCircle
} from 'lucide-react';
import { Navbar } from '@/app/components/navbar';
import { Footer } from '@/app/components/footer';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { supabase } from '@/lib/supabase';

// Animation wrapper - content always visible
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
      style={{ opacity: 1 }}
    >
      {children}
    </div>
  );
}

// Confetti component for success state
function Confetti() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-ping"
          style={{
            left: `${50 + (Math.random() - 0.5) * 60}%`,
            top: `${50 + (Math.random() - 0.5) * 60}%`,
            animationDelay: `${i * 0.1}s`,
            animationDuration: '1s',
          }}
        >
          <div
            className="w-2 h-2 rounded-full"
            style={{
              backgroundColor: ['#22d3ee', '#8b5cf6', '#10b981', '#f59e0b'][i % 4],
            }}
          />
        </div>
      ))}
    </div>
  );
}

const features = [
  { icon: <Bot className="h-6 w-6" />, title: 'AI-Powered Agents', desc: 'Intelligent agents that adapt to your workflow' },
  { icon: <Workflow className="h-6 w-6" />, title: 'Visual Builder', desc: 'No-code interface for complex workflows' },
  { icon: <BarChart3 className="h-6 w-6" />, title: 'Real-Time Analytics', desc: 'Monitor performance and optimize results' },
  { icon: <Shield className="h-6 w-6" />, title: 'Enterprise Security', desc: 'SOC 2 compliant with end-to-end encryption' },
  { icon: <Users className="h-6 w-6" />, title: 'Team Collaboration', desc: 'Share swarms and work together seamlessly' },
  { icon: <Zap className="h-6 w-6" />, title: 'Lightning Fast', desc: 'Optimized for speed and reliability' },
];

const stats = [
  { value: 'Q1 2026', label: 'Launch Date' },
  { value: '5,000+', label: 'Waitlist' },
  { value: '50+', label: 'Templates' },
  { value: '24/7', label: 'Support' },
];

export default function Dashboard() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const { error: supabaseError } = await supabase
        .from('waitlist')
        .insert([{ 
          email: email.toLowerCase().trim(),
          source: 'swarmforge_prelaunch'
        }]);
      
      if (supabaseError) {
        if (supabaseError.code === '23505') {
          setError('This email is already on the waitlist!');
        } else {
          setError('Something went wrong. Please try again.');
          console.error('Supabase error:', supabaseError);
        }
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
      console.error('Submit error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-hero-gradient">
      <Navbar />

      <div className="container-custom py-16 lg:py-24">
        {/* Hero Section */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="cyan" dot className="mb-6">
            Launching Q1 2026
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            The Future of
            <br />
            <span className="gradient-text">AI Automation</span>
          </h1>
          
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Be among the first to experience autonomous agent swarms. 
            Join our waitlist for early access and exclusive perks.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Waitlist Form */}
        <AnimatedSection delay={200} className="max-w-xl mx-auto mb-20">
          <Card variant="glass" className="p-8 relative overflow-hidden">
            {!submitted ? (
              <>
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-white mb-2">Join the Waitlist</h2>
                  <p className="text-slate-400">
                    Get early access + <span className="text-cyan-400 font-semibold">50% off</span> your first 3 months
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl flex items-center gap-3">
                      <AlertCircle className="h-5 w-5 text-rose-400 flex-shrink-0" />
                      <p className="text-rose-400 text-sm">{error}</p>
                    </div>
                  )}
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="input-primary pl-12 text-base"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary justify-center disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Joining...
                      </>
                    ) : (
                      <>
                        Join Waitlist
                        <ArrowRight className="h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
                
                <p className="text-xs text-slate-500 text-center mt-4">
                  No spam. Unsubscribe anytime. We respect your privacy.
                </p>
              </>
            ) : (
              <div className="text-center py-8 relative">
                <Confetti />
                <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
                  <CheckCircle className="h-10 w-10 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">You're on the list!</h3>
                <p className="text-slate-400 mb-6">
                  We'll email you when SwarmForge is ready. Thanks for your interest!
                </p>
                <div className="flex gap-3 justify-center">
                  <Link href="/templates" className="btn-secondary text-sm">
                    Explore Templates
                  </Link>
                  <Link href="/" className="btn-ghost text-sm">
                    Back Home
                  </Link>
                </div>
              </div>
            )}
          </Card>
        </AnimatedSection>

        {/* Features Preview */}
        <AnimatedSection delay={300}>
          <div className="text-center mb-12">
            <Badge variant="purple" className="mb-4">Coming Soon</Badge>
            <h2 className="text-3xl font-bold text-white mb-4">What to Expect</h2>
            <p className="text-slate-400">Powerful features to supercharge your workflow</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <AnimatedSection key={idx} delay={400 + idx * 50}>
                <Card variant="feature" className="h-full">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-400 text-sm">{feature.desc}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Builder Preview */}
        <AnimatedSection delay={600} className="mt-20">
          <Card variant="glass" className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Swarm Builder Preview</h3>
                <p className="text-slate-400 text-sm">See how easy it is to create agent teams</p>
              </div>
              <Badge variant="amber">Preview</Badge>
            </div>
            
            <div className="space-y-4 opacity-60">
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                <p className="text-slate-500 text-sm mb-2">What do you need done?</p>
                <p className="text-slate-400">"Research law firms in Austin, qualify them by size, and draft personalized outreach emails..."</p>
              </div>
              
              <div className="flex gap-3">
                {['Lead Generation', 'Content Creation', 'Research'].map((t) => (
                  <div key={t} className="px-4 py-2 bg-slate-800 rounded-lg text-slate-400 text-sm border border-slate-700">
                    {t}
                  </div>
                ))}
              </div>

              <div className="bg-slate-800/30 rounded-xl p-4 border border-dashed border-slate-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <Bot className="h-4 w-4 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Research Agent</p>
                    <p className="text-slate-500 text-xs">Finds and analyzes prospects</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-3 ml-4">
                  <div className="w-px h-6 bg-slate-700" />
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Bot className="h-4 w-4 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Qualifier Agent</p>
                    <p className="text-slate-500 text-xs">Scores and prioritizes leads</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 ml-4">
                  <div className="w-px h-6 bg-slate-700" />
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <Bot className="h-4 w-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Outreach Agent</p>
                    <p className="text-slate-500 text-xs">Drafts personalized emails</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-cyan-400 text-sm">Full builder available at launch</p>
            </div>
          </Card>
        </AnimatedSection>
      </div>

      <Footer />
    </div>
  );
}
