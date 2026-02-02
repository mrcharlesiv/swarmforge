'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  ArrowLeft, 
  Wand2, 
  Bot, 
  Loader2, 
  Check,
  ArrowRight,
  Zap,
  Globe,
  Users,
  Workflow,
  FileText,
  MessageSquare
} from 'lucide-react';
import { Navbar } from '@/app/components/navbar';
import { Footer } from '@/app/components/footer';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';

// Animation wrapper
function AnimatedSection({ 
  children, 
  className = '',
  delay = 0 
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      }}
    >
      {children}
    </div>
  );
}

const templates = [
  { 
    id: 'lead-gen', 
    name: 'Lead Generation', 
    description: 'Research prospects, qualify leads, and automate personalized outreach.',
    icon: <Zap className="h-6 w-6" />,
    agents: ['Researcher', 'Qualifier', 'Outreach'],
    color: 'cyan'
  },
  { 
    id: 'content', 
    name: 'Content Creation', 
    description: 'Research topics, draft content, edit, and schedule across platforms.',
    icon: <FileText className="h-6 w-6" />,
    agents: ['Researcher', 'Writer', 'Editor', 'Scheduler'],
    color: 'purple'
  },
  { 
    id: 'research', 
    name: 'Research Assistant', 
    description: 'Deep research on any topic with synthesized reports and citations.',
    icon: <Globe className="h-6 w-6" />,
    agents: ['Query', 'Gatherer', 'Synthesizer'],
    color: 'emerald'
  },
  { 
    id: 'support', 
    name: 'Customer Support', 
    description: 'Classify tickets, auto-respond, and escalate complex issues.',
    icon: <MessageSquare className="h-6 w-6" />,
    agents: ['Classifier', 'Responder', 'Escalator'],
    color: 'amber'
  },
  { 
    id: 'data', 
    name: 'Data Processing', 
    description: 'Ingest data, clean, transform, and export to any format.',
    icon: <Workflow className="h-6 w-6" />,
    agents: ['Ingestor', 'Cleaner', 'Transformer'],
    color: 'rose'
  },
  { 
    id: 'custom', 
    name: 'Custom Swarm', 
    description: 'Build a completely custom agent team for your unique workflow.',
    icon: <Bot className="h-6 w-6" />,
    agents: ['Custom Configuration'],
    color: 'cyan'
  },
];

const agentColors: Record<string, string> = {
  Researcher: 'cyan',
  Qualifier: 'purple',
  Outreach: 'emerald',
  Writer: 'purple',
  Editor: 'amber',
  Scheduler: 'rose',
  Query: 'cyan',
  Gatherer: 'purple',
  Synthesizer: 'emerald',
  Classifier: 'cyan',
  Responder: 'purple',
  Escalator: 'rose',
  Ingestor: 'cyan',
  Cleaner: 'purple',
  Transformer: 'emerald',
};

export default function Builder() {
  const [step, setStep] = useState(1);
  const [prompt, setPrompt] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedConfig, setGeneratedConfig] = useState<any>(null);

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate AI generation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const selectedTemplateData = templates.find(t => t.id === selectedTemplate);
    
    setGeneratedConfig({
      name: selectedTemplateData?.name || 'Custom Swarm',
      description: selectedTemplateData?.description || 'Custom configured agent team',
      agents: selectedTemplateData?.agents.map((agent, idx) => ({
        name: agent,
        role: getAgentRole(agent),
        model: 'gpt-4',
        color: agentColors[agent] || 'cyan'
      })) || [
        { name: 'Agent 1', role: 'Primary worker', model: 'gpt-4', color: 'cyan' },
        { name: 'Agent 2', role: 'Secondary worker', model: 'gpt-4', color: 'purple' }
      ],
      workflow: selectedTemplate?.includes('research') ? 'sequential' : 'parallel'
    });
    setIsGenerating(false);
    setStep(3);
  };

  const getAgentRole = (agentName: string): string => {
    const roles: Record<string, string> = {
      'Researcher': 'Finds and analyzes prospects',
      'Qualifier': 'Scores and prioritizes leads',
      'Outreach': 'Drafts personalized communications',
      'Writer': 'Creates compelling content drafts',
      'Editor': 'Refines and polishes content',
      'Scheduler': 'Manages publishing calendar',
      'Query': 'Breaks down research questions',
      'Gatherer': 'Collects information from sources',
      'Synthesizer': 'Compiles findings into reports',
      'Classifier': 'Categorizes incoming requests',
      'Responder': 'Handles common inquiries',
      'Escalator': 'Routes complex issues',
      'Ingestor': 'Imports raw data',
      'Cleaner': 'Standardizes and validates data',
      'Transformer': 'Converts to desired format',
    };
    return roles[agentName] || 'Specialized task worker';
  };

  const selectedTemplateData = templates.find(t => t.id === selectedTemplate);

  return (
    <div className="min-h-screen bg-hero-gradient">
      <Navbar />

      {/* Builder Header */}
      <div className="navbar-glass border-b border-slate-800">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link 
                href="/dashboard" 
                className="p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-slate-800"
              >
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                  <Sparkles className="h-4 w-4 text-cyan-400" />
                </div>
                <span className="font-semibold text-white">Swarm Builder</span>
              </div>
            </div>
            
            {/* Step Indicator */}
            <div className="flex items-center gap-2">
              {[1, 2, 3].map((s, idx) => (
                <div key={s} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                    step > s 
                      ? 'bg-emerald-500 text-white' 
                      : step === s 
                        ? 'bg-cyan-500 text-white' 
                        : 'bg-slate-800 text-slate-500 border border-slate-700'
                  }`}>
                    {step > s ? <Check className="h-4 w-4" /> : s}
                  </div>
                  {idx < 2 && (
                    <div className={`w-8 h-0.5 mx-1 transition-all duration-300 ${
                      step > s ? 'bg-emerald-500' : 'bg-slate-800'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Builder Content */}
      <div className="container-custom py-12 lg:py-16">
        {step === 1 && (
          <AnimatedSection className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <Badge variant="cyan" dot className="mb-4">Step 1 of 3</Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                What do you need done?
              </h1>
              <p className="text-slate-400 text-lg">
                Describe your task in plain English. We'll analyze it and suggest the optimal agent configuration.
              </p>
            </div>
            
            <Card variant="glass" className="p-6 md:p-8">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Example: Research law firms in Austin, qualify them by size and practice area, then draft personalized outreach emails to the partners..."
                className="input-primary w-full h-40 resize-none mb-4"
              />
              
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-500">
                  {prompt.length > 0 ? `${prompt.length} characters` : 'Be specific for better results'}
                </p>
                <button
                  onClick={() => setStep(2)}
                  disabled={!prompt.trim()}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </Card>

            {/* Example Prompts */}
            <div className="mt-8">
              <p className="text-sm text-slate-500 mb-4 text-center">Or try one of these examples:</p>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'Monitor competitor pricing and alert me to changes',
                  'Generate weekly social media content from our blog posts',
                  'Screen job applicants and schedule interviews with qualified candidates',
                ].map((example, idx) => (
                  <button
                    key={idx}
                    onClick={() => setPrompt(example)}
                    className="text-left p-4 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-400 hover:text-white hover:border-cyan-500/50 transition-all text-sm"
                  >
                    "{example}"
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}

        {step === 2 && (
          <AnimatedSection className="max-w-4xl mx-auto" delay={100}>
            <div className="text-center mb-8">
              <Badge variant="purple" dot className="mb-4">Step 2 of 3</Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Choose a Template
              </h1>
              <p className="text-slate-400 text-lg">
                Select the starting point that best matches your needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {templates.map((template, idx) => (
                <button
                  key={template.id}
                  onClick={() => setSelectedTemplate(template.id)}
                  className={`text-left p-5 rounded-xl border transition-all duration-200 ${
                    selectedTemplate === template.id 
                      ? 'border-cyan-500 bg-cyan-500/10' 
                      : 'border-slate-700 bg-slate-800/50 hover:border-slate-600 hover:bg-slate-800'
                  }`}
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${
                    template.color === 'cyan' ? 'bg-cyan-500/10 text-cyan-400' :
                    template.color === 'purple' ? 'bg-purple-500/10 text-purple-400' :
                    template.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-400' :
                    template.color === 'amber' ? 'bg-amber-500/10 text-amber-400' :
                    'bg-rose-500/10 text-rose-400'
                  }`}>
                    {template.icon}
                  </div>
                  <h3 className="font-semibold text-white mb-1">{template.name}</h3>
                  <p className="text-sm text-slate-400">{template.description}</p>
                  
                  {selectedTemplate === template.id && (
                    <div className="mt-3 flex items-center gap-2 text-cyan-400 text-sm">
                      <Check className="h-4 w-4" />
                      <span>Selected</span>
                    </div>
                  )}
                </button>
              ))}
            </div>
            
            <div className="flex justify-between">
              <button 
                onClick={() => setStep(1)} 
                className="btn-secondary"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </button>
              <button
                onClick={handleGenerate}
                disabled={!selectedTemplate || isGenerating}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Wand2 className="h-4 w-4" />
                    Generate Swarm
                  </>
                )}
              </button>
            </div>
          </AnimatedSection>
        )}

        {step === 3 && generatedConfig && (
          <AnimatedSection className="max-w-2xl mx-auto" delay={100}>
            <div className="text-center mb-8">
              <Badge variant="emerald" dot className="mb-4">Step 3 of 3</Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Your Swarm is Ready
              </h1>
              <p className="text-slate-400 text-lg">
                Review your AI agent team and deploy when ready.
              </p>
            </div>
            
            <Card variant="glass" className="p-6 md:p-8 mb-6">
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-700">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center">
                  <Bot className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{generatedConfig.name}</h3>
                  <p className="text-slate-400 text-sm">{generatedConfig.description}</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <p className="text-sm text-slate-500 uppercase tracking-wider font-medium">Agent Team</p>
                {generatedConfig.agents.map((agent: any, idx: number) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      agent.color === 'cyan' ? 'bg-cyan-500/10 text-cyan-400' :
                      agent.color === 'purple' ? 'bg-purple-500/10 text-purple-400' :
                      agent.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-400' :
                      agent.color === 'amber' ? 'bg-amber-500/10 text-amber-400' :
                      'bg-rose-500/10 text-rose-400'
                    }`}>
                      <Bot className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-white">{agent.name}</div>
                      <div className="text-sm text-slate-400">{agent.role}</div>
                    </div>
                    <Badge variant="cyan" className="text-xs">{agent.model}</Badge>
                    {idx < generatedConfig.agents.length - 1 && (
                      <div className="hidden md:block absolute ml-16 mt-16">
                        <div className="w-0.5 h-4 bg-slate-700" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="p-4 bg-cyan-500/5 border border-cyan-500/20 rounded-xl">
                <div className="flex items-center gap-2 text-cyan-400 text-sm">
                  <Workflow className="h-4 w-4" />
                  <span className="font-medium">Workflow:</span>
                  <span className="text-cyan-300 capitalize">{generatedConfig.workflow}</span>
                </div>
              </div>
            </Card>
            
            <div className="flex justify-between">
              <button 
                onClick={() => setStep(2)} 
                className="btn-secondary"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </button>
              <Link 
                href="/dashboard" 
                className="btn-primary"
              >
                Deploy Swarm
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </AnimatedSection>
        )}
      </div>

      <Footer />
    </div>
  );
}
