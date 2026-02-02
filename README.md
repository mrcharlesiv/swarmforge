# SwarmForge

## No-Code AI Agent Orchestrator

Build autonomous AI agent swarms without writing code. Deploy teams of specialized agents that work together to complete complex tasks.

### Live Demo
**Coming Soon**: https://mrcharlesiv.github.io/swarmforge/

### Features

- **Prompt-to-Swarm**: Describe your task in plain English
- **5 Pre-Built Templates**: Lead Gen, Content, Research, Support, Data Processing
- **Visual Dashboard**: Monitor runs, logs, and outputs
- **Freemium Pricing**: Free (3 swarms) → Pro $29/mo (unlimited)

### Quick Start

```bash
# Clone the repo
git clone https://github.com/mrcharlesiv/swarmforge.git
cd swarmforge/app

# Install dependencies
npm install

# Set up environment
cp .env.example .env.local
# Edit .env.local with your keys

# Run locally
npm run dev
```

### Stack

- **Frontend**: Next.js 14, Tailwind CSS, TypeScript
- **Backend**: Supabase (Auth, Database, Edge Functions)
- **Payments**: Stripe
- **Hosting**: GitHub Pages

### Architecture

```
User → Next.js App → Supabase → Database
                ↓
              Stripe (billing)
```

### Database Schema

See `infra/supabase-schema.sql` for full schema including:
- `swarms` - User's agent configurations
- `runs` - Execution records
- `subscriptions` - Billing state
- `usage` - Monthly usage tracking

### API Routes

- `GET/POST /api/swarms` - List/create swarms
- `POST /api/stripe/checkout` - Create checkout session
- `POST /api/stripe/webhook` - Handle Stripe events

### Templates

1. **Lead Generation**: Research → Qualify → Outreach
2. **Content Creation**: Research → Write → Edit → Schedule
3. **Research Assistant**: Query → Gather → Synthesize
4. **Customer Support**: Classify → Respond → Escalate
5. **Data Processing**: Ingest → Clean → Transform

### Deployment

Auto-deploys to GitHub Pages on push to main via GitHub Actions.

### Environment Variables

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PRICE_ID=
```

### License

MIT

---

Built with ❤️ by AXIOM-PRIME swarm
