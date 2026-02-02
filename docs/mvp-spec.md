# SwarmForge MVP Specification

## Overview
No-code AI agent orchestrator SaaS. Users describe tasks → generates swarm configs → deploys autonomous agent teams.

## Core Features

### 1. Authentication
- Supabase Auth (email + Google OAuth)
- Protected dashboard routes
- User profile management

### 2. Swarm Builder
- Natural language prompt input
- Template selection (5 pre-built)
- Visual config preview
- One-click swarm generation

### 3. Pre-built Templates
1. **Lead Generation Swarm** - Research → Qualify → Outreach
2. **Content Creation Swarm** - Research → Draft → Edit → Schedule
3. **Research Assistant Swarm** - Query → Gather → Synthesize → Report
4. **Customer Support Swarm** - Classify → Respond → Escalate
5. **Data Processing Swarm** - Ingest → Clean → Transform → Export

### 4. Dashboard
- Active swarms list with status
- Real-time logs viewer
- Outputs/results display
- Usage metrics (runs, tokens, time saved)

### 5. Billing
- Stripe Checkout integration
- Free: 3 swarms, 100 runs/mo
- Pro: $29/mo, unlimited swarms, 10,000 runs, priority support

## Database Schema

```sql
-- Users (handled by Supabase Auth)

-- Swarms table
CREATE TABLE swarms (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  name TEXT NOT NULL,
  template_id TEXT,
  config JSONB,
  status TEXT DEFAULT 'idle',
  runs_count INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Runs table
CREATE TABLE runs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  swarm_id UUID REFERENCES swarms(id),
  status TEXT,
  logs JSONB,
  outputs JSONB,
  started_at TIMESTAMP,
  completed_at TIMESTAMP
);

-- Subscriptions table
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  plan TEXT DEFAULT 'free',
  status TEXT,
  current_period_end TIMESTAMP
);
```

## File Structure
```
swarmforge/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   ├── swarms/
│   │   ├── runs/
│   │   └── stripe/
│   ├── dashboard/
│   ├── builder/
│   ├── templates/
│   └── page.tsx
├── components/
├── lib/
│   ├── supabase.ts
│   └── stripe.ts
└── types/
```

## API Routes
- POST /api/swarms - Create swarm
- GET /api/swarms - List user swarms
- POST /api/swarms/:id/run - Execute swarm
- GET /api/runs/:id - Get run status/logs
- POST /api/stripe/checkout - Create checkout session
- POST /api/stripe/webhook - Handle webhooks
