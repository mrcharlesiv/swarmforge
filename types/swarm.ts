export interface SwarmConfig {
  name: string
  description: string
  agents: AgentConfig[]
  workflow: 'sequential' | 'parallel' | 'hybrid'
}

export interface AgentConfig {
  name: string
  role: string
  model: string
  systemPrompt: string
  tools: string[]
}

export interface SwarmTemplate {
  id: string
  name: string
  description: string
  category: string
  defaultConfig: SwarmConfig
}

export const swarmTemplates: SwarmTemplate[] = [
  {
    id: 'lead-gen',
    name: 'Lead Generation',
    description: 'Research prospects, qualify leads, and automate outreach',
    category: 'sales',
    defaultConfig: {
      name: 'Lead Generation Swarm',
      description: 'Automated lead research and outreach',
      agents: [
        {
          name: 'Researcher',
          role: 'Find and research potential leads',
          model: 'gpt-4',
          systemPrompt: 'You are a research specialist. Find detailed information about prospects including company size, decision makers, and recent news.',
          tools: ['web_search', 'linkedin_lookup']
        },
        {
          name: 'Qualifier',
          role: 'Score and qualify leads',
          model: 'gpt-4',
          systemPrompt: 'You are a lead qualification expert. Score leads based on fit, budget, and timing.',
          tools: ['scoring_rubric']
        },
        {
          name: 'Outreach',
          role: 'Draft personalized outreach',
          model: 'gpt-4',
          systemPrompt: 'You are an outreach specialist. Write compelling, personalized emails that get responses.',
          tools: ['email_template', 'personalization']
        }
      ],
      workflow: 'sequential'
    }
  },
  {
    id: 'content',
    name: 'Content Creation',
    description: 'Research, write, edit, and schedule content',
    category: 'marketing',
    defaultConfig: {
      name: 'Content Creation Swarm',
      description: 'End-to-end content production',
      agents: [
        {
          name: 'Researcher',
          role: 'Research topics and gather sources',
          model: 'gpt-4',
          systemPrompt: 'You are a content researcher. Find trending topics, statistics, and authoritative sources.',
          tools: ['web_search', 'trend_analysis']
        },
        {
          name: 'Writer',
          role: 'Draft initial content',
          model: 'gpt-4',
          systemPrompt: 'You are a content writer. Create engaging, well-structured drafts.',
          tools: ['style_guide', 'seo_optimizer']
        },
        {
          name: 'Editor',
          role: 'Refine and polish content',
          model: 'gpt-4',
          systemPrompt: 'You are a senior editor. Improve clarity, flow, and impact.',
          tools: ['grammar_check', 'readability']
        },
        {
          name: 'Scheduler',
          role: 'Schedule across platforms',
          model: 'gpt-4',
          systemPrompt: 'You are a distribution specialist. Optimize posting times and formats for each platform.',
          tools: ['social_api', 'calendar']
        }
      ],
      workflow: 'sequential'
    }
  },
  {
    id: 'research',
    name: 'Research Assistant',
    description: 'Deep research with synthesized reports',
    category: 'research',
    defaultConfig: {
      name: 'Research Assistant Swarm',
      description: 'Comprehensive research and analysis',
      agents: [
        {
          name: 'Query',
          role: 'Define research scope and questions',
          model: 'gpt-4',
          systemPrompt: 'You are a research strategist. Break down complex questions into investigable components.',
          tools: ['question_framework']
        },
        {
          name: 'Gatherer',
          role: 'Collect information from multiple sources',
          model: 'gpt-4',
          systemPrompt: 'You are an information gatherer. Find diverse, authoritative sources on any topic.',
          tools: ['web_search', 'academic_search', 'database_query']
        },
        {
          name: 'Synthesizer',
          role: 'Synthesize findings into reports',
          model: 'gpt-4',
          systemPrompt: 'You are a research synthesizer. Combine information into clear, actionable reports with citations.',
          tools: ['citation_manager', 'report_template']
        }
      ],
      workflow: 'sequential'
    }
  }
]
