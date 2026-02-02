'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Sparkles, ArrowLeft, Wand2, Bot, Loader2 } from 'lucide-react'

const templates = [
  { id: 'lead-gen', name: 'Lead Generation', description: 'Research, qualify, and outreach' },
  { id: 'content', name: 'Content Creation', description: 'Research, write, edit, schedule' },
  { id: 'research', name: 'Research Assistant', description: 'Deep research and synthesis' },
  { id: 'support', name: 'Customer Support', description: 'Classify, respond, escalate' },
  { id: 'data', name: 'Data Processing', description: 'Ingest, clean, transform' },
  { id: 'custom', name: 'Custom Swarm', description: 'Build from scratch' },
]

export default function Builder() {
  const [step, setStep] = useState(1)
  const [prompt, setPrompt] = useState('')
  const [selectedTemplate, setSelectedTemplate] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedConfig, setGeneratedConfig] = useState<any>(null)

  const handleGenerate = async () => {
    setIsGenerating(true)
    // Simulate AI generation
    await new Promise(resolve => setTimeout(resolve, 2000))
    setGeneratedConfig({
      name: 'Lead Research Swarm',
      agents: [
        { name: 'Researcher', role: 'Find prospects', model: 'gpt-4' },
        { name: 'Qualifier', role: 'Score leads', model: 'gpt-4' },
        { name: 'Outreach', role: 'Draft emails', model: 'gpt-4' },
      ],
      workflow: 'parallel'
    })
    setIsGenerating(false)
    setStep(3)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-gray-500 hover:text-gray-700">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-cyan-500" />
              <span className="font-semibold">Swarm Builder</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${step >= 1 ? 'bg-cyan-500 text-white' : 'bg-gray-200'}`}>1</div>
            <div className="w-8 h-0.5 bg-gray-200" />
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${step >= 2 ? 'bg-cyan-500 text-white' : 'bg-gray-200'}`}>2</div>
            <div className="w-8 h-0.5 bg-gray-200" />
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${step >= 3 ? 'bg-cyan-500 text-white' : 'bg-gray-200'}`}>3</div>
          </div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 py-12">
        {step === 1 && (
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">What do you need done?</h1>
              <p className="text-gray-500">Describe your task and we'll build the perfect agent swarm.</p>
            </div>
            <div className="bg-white rounded-xl border p-6">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Example: Research law firms in Austin, qualify them by size, and draft personalized outreach emails..."
                className="w-full h-32 p-4 border rounded-lg resize-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => setStep(2)}
                  disabled={!prompt.trim()}
                  className="bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-300 text-white px-6 py-2 rounded-lg"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Choose a Template</h1>
              <p className="text-gray-500">Select a starting point or build custom.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {templates.map((template) => (
                <button
                  key={template.id}
                  onClick={() => setSelectedTemplate(template.id)}
                  className={`p-4 border rounded-xl text-left hover:border-cyan-500 transition ${selectedTemplate === template.id ? 'border-cyan-500 bg-cyan-50' : ''}`}
                >
                  <h3 className="font-semibold text-gray-900">{template.name}</h3>
                  <p className="text-sm text-gray-500">{template.description}</p>
                </button>
              ))}
            </div>
            <div className="flex justify-between">
              <button onClick={() => setStep(1)} className="text-gray-500 hover:text-gray-700">
                Back
              </button>
              <button
                onClick={handleGenerate}
                disabled={!selectedTemplate}
                className="bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-300 text-white px-6 py-2 rounded-lg inline-flex items-center gap-2"
              >
                {isGenerating ? <Loader2 className="h-4 w-4 animate-spin" /> : <Wand2 className="h-4 w-4" />}
                {isGenerating ? 'Generating...' : 'Generate Swarm'}
              </button>
            </div>
          </div>
        )}

        {step === 3 && generatedConfig && (
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Your Swarm is Ready</h1>
              <p className="text-gray-500">Review and deploy your agent team.</p>
            </div>
            <div className="bg-white rounded-xl border p-6">
              <h3 className="font-semibold text-lg mb-4">{generatedConfig.name}</h3>
              <div className="space-y-3">
                {generatedConfig.agents.map((agent: any, idx: number) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Bot className="h-5 w-5 text-cyan-500" />
                    <div>
                      <div className="font-medium">{agent.name}</div>
                      <div className="text-sm text-gray-500">{agent.role}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-cyan-50 rounded-lg text-sm text-cyan-700">
                Workflow: {generatedConfig.workflow}
              </div>
            </div>
            <div className="flex justify-between">
              <button onClick={() => setStep(2)} className="text-gray-500 hover:text-gray-700">
                Back
              </button>
              <Link href="/dashboard" className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg">
                Deploy Swarm
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
