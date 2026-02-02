# SQL Schema for SwarmForge
# Run this in Supabase SQL Editor: https://supabase.com/dashboard/project/ugnjzsxiyrbzwopundfs/sql

-- Swarms table
CREATE TABLE IF NOT EXISTS swarms (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  template_id TEXT,
  config JSONB DEFAULT '{}',
  status TEXT DEFAULT 'idle' CHECK (status IN ('idle', 'running', 'error', 'paused')),
  runs_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Runs table
CREATE TABLE IF NOT EXISTS runs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  swarm_id UUID REFERENCES swarms(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'running', 'completed', 'failed', 'cancelled')),
  logs JSONB DEFAULT '[]',
  outputs JSONB DEFAULT '{}',
  started_at TIMESTAMP WITH TIME ZONE,
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Subscriptions table
CREATE TABLE IF NOT EXISTS subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  plan TEXT DEFAULT 'free' CHECK (plan IN ('free', 'pro', 'enterprise')),
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'cancelled', 'past_due', 'unpaid')),
  current_period_start TIMESTAMP WITH TIME ZONE,
  current_period_end TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Usage tracking
CREATE TABLE IF NOT EXISTS usage (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  month TEXT NOT NULL,
  runs_count INTEGER DEFAULT 0,
  tokens_used INTEGER DEFAULT 0,
  UNIQUE(user_id, month)
);

-- Waitlist table for pre-launch
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  source TEXT DEFAULT 'swarmforge',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE swarms ENABLE ROW LEVEL SECURITY;
ALTER TABLE runs ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE usage ENABLE ROW LEVEL SECURITY;
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can view own swarms" ON swarms FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create own swarms" ON swarms FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own swarms" ON swarms FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own swarms" ON swarms FOR DELETE USING (auth.uid() = user_id);

CREATE POLICY "Users can view own runs" ON runs FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create own runs" ON runs FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view own subscription" ON subscriptions FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can view own usage" ON usage FOR SELECT USING (auth.uid() = user_id);

-- Allow anonymous waitlist signup
CREATE POLICY "Allow waitlist signup" ON waitlist FOR INSERT WITH CHECK (true);
CREATE POLICY "Authenticated can view waitlist" ON waitlist FOR SELECT USING (auth.role() = 'authenticated');

-- Functions and triggers
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_swarms_updated_at BEFORE UPDATE ON swarms FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_subscriptions_updated_at BEFORE UPDATE ON subscriptions FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Indexes
CREATE INDEX idx_swarms_user_id ON swarms(user_id);
CREATE INDEX idx_runs_swarm_id ON runs(swarm_id);
CREATE INDEX idx_runs_user_id ON runs(user_id);
CREATE INDEX idx_subscriptions_user_id ON subscriptions(user_id);
CREATE INDEX idx_usage_user_id ON usage(user_id);
CREATE INDEX idx_waitlist_email ON waitlist(email);
