'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Sparkles, Plus, Play, Settings, LogOut, BarChart3, Clock, CheckCircle } from 'lucide-react'

export default function Dashboard() {
  const [swarms] = useState(mockSwarms)
  const [stats] = useState({
    totalRuns: 47,
    activeSwarms: 3,
    successRate: 94,
    timeSaved: '12.5 hrs'
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-cyan-500" />
              <span className="text-xl font-bold text-gray-900">SwarmForge</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">Free Plan (3/3 swarms)</span>
              <button className="text-gray-500 hover:text-gray-700">
                <Settings className="h-5 w-5" />
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard label="Total Runs" value={stats.totalRuns} icon={<Play className="h-5 w-5" />} />
          <StatCard label="Active Swarms" value={stats.activeSwarms} icon={<Sparkles className="h-5 w-5" />} />
          <StatCard label="Success Rate" value={`${stats.successRate}%`} icon={<CheckCircle className="h-5 w-5" />} />
          <StatCard label="Time Saved" value={stats.timeSaved} icon={<Clock className="h-5 w-5" />} />
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Your Swarms</h2>
          <Link href="/builder" className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg">
            <Plus className="h-5 w-5" />
            Create Swarm
          </Link>
        </div>

        {/* Swarms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {swarms.map((swarm) => (
            <div key={swarm.id} className="bg-white rounded-xl border p-6 hover:shadow-lg transition">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900">{swarm.name}</h3>
                  <p className="text-sm text-gray-500">{swarm.template}</p>
                </div>
                <StatusBadge status={swarm.status} />
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1">
                  <Play className="h-4 w-4" />
                  {swarm.runs} runs
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {swarm.lastRun}
                </span>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 bg-cyan-50 text-cyan-600 hover:bg-cyan-100 py-2 rounded-lg text-sm font-medium">
                  Run
                </button>
                <button className="flex-1 bg-gray-50 text-gray-600 hover:bg-gray-100 py-2 rounded-lg text-sm font-medium">
                  View
                </button>
              </div>
            </div>
          ))}
          
          {/* Add New Card */}
          <Link href="/builder" className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center text-gray-500 hover:border-cyan-500 hover:text-cyan-500 transition min-h-[200px]">
            <Plus className="h-8 w-8 mb-2" />
            <span className="font-medium">Create New Swarm</span>
            <span className="text-sm">{3 - swarms.length} remaining on free plan</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

function StatCard({ label, value, icon }: { label: string, value: string | number, icon: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl border p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-500 text-sm">{label}</span>
        <span className="text-gray-400">{icon}</span>
      </div>
      <div className="text-2xl font-bold text-gray-900">{value}</div>
    </div>
  )
}

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    active: 'bg-green-100 text-green-700',
    idle: 'bg-gray-100 text-gray-700',
    running: 'bg-cyan-100 text-cyan-700',
    error: 'bg-red-100 text-red-700'
  }
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[status] || colors.idle}`}>
      {status}
    </span>
  )
}

const mockSwarms = [
  { id: '1', name: 'Lead Gen - Law Firms', template: 'Lead Generation', status: 'active', runs: 12, lastRun: '2h ago' },
  { id: '2', name: 'Weekly Content', template: 'Content Creation', status: 'idle', runs: 8, lastRun: '1d ago' },
  { id: '3', name: 'Market Research', template: 'Research Assistant', status: 'running', runs: 27, lastRun: '5m ago' },
]
