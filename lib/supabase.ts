import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseKey)

export type Swarm = {
  id: string
  user_id: string
  name: string
  template_id: string
  config: any
  status: 'idle' | 'running' | 'error'
  runs_count: number
  created_at: string
  updated_at: string
}

export type Run = {
  id: string
  swarm_id: string
  status: string
  logs: any
  outputs: any
  started_at: string
  completed_at: string
}

export type Subscription = {
  id: string
  user_id: string
  stripe_customer_id: string
  stripe_subscription_id: string
  plan: 'free' | 'pro'
  status: string
  current_period_end: string
}
