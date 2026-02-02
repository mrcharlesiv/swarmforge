'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Sparkles, Mail, ArrowRight, CheckCircle, Clock, Zap } from 'lucide-react'
import { supabase } from '@/lib/supabase'

export default function Dashboard() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setLoading(true)
    
    // Store in Supabase waitlist table
    await supabase.from('waitlist').insert({ email, source: 'swarmforge_prelaunch' })
    
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Navbar */}
      <nav className="border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/" className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-cyan-400" />
              <span className="text-xl font-bold text-white">SwarmForge</span>
            </Link>
            <span className="text-sm text-cyan-400 font-medium">Coming Soon</span>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-20">
        {/* Pre-launch Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm mb-6">
            <Clock className="h-4 w-4" />
            <span>Launching Q1 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Build AI Agent Swarms
            <br />
            <span className="text-cyan-400">Without Code</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Be the first to deploy autonomous agent teams. Join the waitlist for early access.
          </p>
        </div>

        {/* Waitlist Form */}
        <div className="bg-slate-800 rounded-2xl border border-slate-700 p-8 max-w-xl mx-auto">
          {!submitted ? (
            <>
              <h2 className="text-2xl font-bold text-white mb-2 text-center">Join the Waitlist</h2>
              <p className="text-slate-400 text-center mb-6">
                Get early access + 50% off your first 3 months
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full pl-10 pr-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-cyan-500 hover:bg-cyan-600 disabled:bg-slate-600 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2"
                  >
                    {loading ? 'Joining...' : 'Join'}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
              <p className="text-sm text-slate-500 text-center mt-4">
                No spam. Unsubscribe anytime.
              </p>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">You're on the list!</h3>
              <p className="text-slate-400">
                We'll email you when SwarmForge is ready. Thanks for your interest!
              </p>
            </div>
          )}
        </div>

        {/* Features Preview */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {[
            { icon: <Zap className="h-6 w-6" />, title: '5 Templates', desc: 'Lead gen, content, research & more' },
            { icon: <Sparkles className="h-6 w-6" />, title: 'No-Code Builder', desc: 'Describe your task, get a swarm' },
            { icon: <CheckCircle className="h-6 w-6" />, title: 'Visual Dashboard', desc: 'Monitor runs and results' },
          ].map((feature, idx) => (
            <div key={idx} className="bg-slate-800/50 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-cyan-400">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
              <p className="text-sm text-slate-400">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Builder Preview (Disabled) */}
        <div className="mt-16 bg-slate-800 rounded-2xl border border-slate-700 p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Swarm Builder</h2>
            <span className="text-xs px-2 py-1 bg-slate-700 rounded text-slate-300">Preview</span>
          </div>
          <div className="space-y-4 opacity-50 pointer-events-none">
            <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
              <p className="text-slate-500 text-sm mb-2">What do you need done?</p>
              <p className="text-slate-400">Research law firms, qualify leads, draft outreach emails...</p>
            </div>
            <div className="flex gap-3">
              {['Lead Gen', 'Content', 'Research'].map((t) => (
                <div key={t} className="px-3 py-2 bg-slate-700 rounded text-slate-300 text-sm">{t}</div>
              ))}
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-cyan-400 text-sm">Full builder available after launch</p>
          </div>
        </div>
      </div>
    </div>
  )
}
