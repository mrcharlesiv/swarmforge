# SwarmForge

No-code AI agent orchestrator SaaS. Build autonomous agent swarms without writing code.

## Features

- **Prompt-to-Swarm**: Describe your task, get a configured agent team
- **Pre-built Templates**: 5 production-ready swarm templates
- **Visual Dashboard**: Monitor runs, logs, and outputs
- **Stripe Billing**: Freemium model with Pro upgrade

## Tech Stack

- Next.js 14 + TypeScript + Tailwind CSS
- Supabase (Auth, Database, Edge Functions)
- Stripe (Subscriptions)
- GitHub Pages (Hosting)

## Getting Started

1. Clone the repository
2. Copy `.env.example` to `.env.local` and fill in your keys
3. Run `npm install`
4. Run `npm run dev`

## Environment Variables

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PRICE_ID=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_URL=
```

## Deployment

The app auto-deploys to GitHub Pages on push to main.

## License

MIT
