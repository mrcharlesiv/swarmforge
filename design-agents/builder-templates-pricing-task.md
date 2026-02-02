# Agent Task: SwarmForge Builder & Templates Polish

Redesign the Builder wizard and Templates pages with professional quality.

## Current Files
Read:
- `/Users/bots/clawd/swarmforge/app/builder/page.tsx` (3-step wizard)
- `/Users/bots/clawd/swarmforge/app/templates/page.tsx` (template showcase)
- `/Users/bots/clawd/swarmforge/app/pricing/page.tsx` (pricing page)

## Builder Page Redesign

### Step Indicator
- Animated progress bar
- Step numbers with checkmarks for completed
- Clear visual state (active/completed/pending)

### Step 1: Goal Input
- Large textarea with focus effects
- Character count
- Example prompts as clickable chips
- Smooth transition to step 2

### Step 2: Template Selection
- Grid of template cards
- Visual preview/icon per template
- Hover: selection highlight
- Template details on hover

### Step 3: Generated Swarm
- Animated agent cards appearing
- Agent roles displayed clearly
- Workflow diagram
- Deploy CTA

### Overall Builder Styling
- Clean, focused interface
- Minimal distractions
- Smooth step transitions
- Loading states with skeletons

## Templates Page Redesign

### Header
- Compelling headline
- Description
- Search/filter bar

### Template Grid
- Card-based layout
- Each card: icon, name, description, use cases, agent count
- Hover: preview/expand
- "Use Template" CTA

### Template Detail (Optional)
- Could expand inline or modal
- Agent breakdown
- Workflow visualization

## Pricing Page Redesign

### Header
- Clear headline
- Toggle: Monthly/Annual (with savings badge)

### Pricing Cards
- Two tiers side by side
- Free: Clean, simple
- Pro: Highlighted with glow border, "Most Popular" badge
- Feature comparison

### Trust Signals
- Security badges
- Money-back guarantee
- Customer logos (placeholder)

### FAQ Section
- Expandable accordion
- Common questions covered

## Technical Requirements
- Framer Motion for step transitions
- Shared UI components
- Responsive grids
- Accessible forms

## Design Reference
Read `/Users/bots/clawd/swarmforge/DESIGN_SYSTEM.md`

## Success Criteria
- Builder feels smooth and intuitive
- Templates are visually appealing
- Pricing clearly communicates value
- All pages share consistent design language
