# SwarmForge Design System v2.0
## Premium SaaS Aesthetic — Grade A+ Standard

---

## Brand Foundation

### Brand Personality
- **Intelligent** — AI-powered, sophisticated
- **Professional** — Enterprise-ready, trustworthy
- **Modern** — Cutting-edge, innovative
- **Approachable** — No-code, accessible

### Core Message
"Build autonomous AI agent teams that work together"

---

## Color System

### Primary Palette
```css
--primary-50: #ecfeff;
--primary-100: #cffafe;
--primary-200: #a5f3fc;
--primary-300: #67e8f9;
--primary-400: #22d3ee;  /* Base cyan */
--primary-500: #06b6d4;
--primary-600: #0891b2;
--primary-700: #0e7490;
--primary-800: #155e75;
--primary-900: #164e63;
```

### Dark Theme Backgrounds (Main)
```css
--bg-primary: #0a0f1c;      /* Deepest space */
--bg-secondary: #111827;    /* Card surfaces */
--bg-tertiary: #1f2937;     /* Elevated surfaces */
--bg-elevated: #374151;     /* Borders, dividers */
```

### Accent Colors
```css
--accent-purple: #8b5cf6;   /* Secondary accent */
--accent-pink: #ec4899;     /* Tertiary accent */
--accent-emerald: #10b981;  /* Success */
--accent-amber: #f59e0b;    /* Warning */
--accent-rose: #f43f5e;     /* Error */
```

### Semantic Colors
```css
--text-primary: #f9fafb;
--text-secondary: #9ca3af;
--text-muted: #6b7280;
--text-inverse: #111827;
```

---

## Typography System

### Font Family
```css
font-family: 'Inter', system-ui, -apple-system, sans-serif;
```

### Type Scale
| Level | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| Display | 72px / 4.5rem | 800 | 1.0 | -0.02em | Hero headlines |
| H1 | 56px / 3.5rem | 700 | 1.1 | -0.02em | Page titles |
| H2 | 40px / 2.5rem | 700 | 1.2 | -0.01em | Section headers |
| H3 | 28px / 1.75rem | 600 | 1.3 | -0.01em | Card titles |
| H4 | 22px / 1.375rem | 600 | 1.4 | 0 | Subsection |
| H5 | 18px / 1.125rem | 600 | 1.5 | 0 | Labels |
| Body Large | 18px / 1.125rem | 400 | 1.6 | 0 | Hero descriptions |
| Body | 16px / 1rem | 400 | 1.6 | 0 | Standard text |
| Body Small | 14px / 0.875rem | 400 | 1.5 | 0 | Captions |
| Caption | 12px / 0.75rem | 500 | 1.4 | 0.02em | Badges, tags |
```

---

## Spacing System

### Base Unit: 4px
```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;
--space-32: 128px;
```

### Section Spacing
- Section padding: 96px - 128px vertical
- Container max-width: 1280px
- Content max-width: 768px (text blocks)

---

## Component Specifications

### Buttons

**Primary Button**
```css
background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
color: white;
padding: 14px 28px;
border-radius: 12px;
font-weight: 600;
font-size: 16px;
box-shadow: 0 4px 14px rgba(6, 182, 212, 0.4);
transition: all 0.2s ease;
/* Hover: brightness increase, shadow expand */
/* Active: scale 0.98 */
```

**Secondary Button**
```css
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.2);
color: white;
padding: 14px 28px;
border-radius: 12px;
/* Hover: background opacity increase */
```

**Ghost Button**
```css
background: transparent;
color: #9ca3af;
/* Hover: color white, subtle bg */
```

### Cards

**Feature Card**
```css
background: linear-gradient(145deg, #111827 0%, #1f2937 100%);
border: 1px solid rgba(34, 211, 238, 0.1);
border-radius: 20px;
padding: 32px;
/* Hover: border glow intensifies */
```

**Template Card**
```css
background: #111827;
border: 1px solid #374151;
border-radius: 16px;
overflow: hidden;
/* Image at top, content below */
/* Hover: translateY(-4px), shadow increase */
```

### Badges & Pills

**Status Badge**
```css
background: rgba(6, 182, 212, 0.15);
color: #22d3ee;
padding: 6px 12px;
border-radius: 9999px;
font-size: 12px;
font-weight: 600;
/* With left dot indicator */
```

### Input Fields

**Text Input**
```css
background: #111827;
border: 1px solid #374151;
border-radius: 12px;
padding: 14px 16px;
color: white;
/* Focus: border-color cyan, subtle glow */
/* Placeholder: text-muted */
```

---

## Effects & Animations

### Gradients

**Hero Gradient Background**
```css
background: 
  radial-gradient(ellipse 80% 50% at 50% -20%, rgba(6, 182, 212, 0.15), transparent),
  radial-gradient(ellipse 60% 40% at 80% 50%, rgba(139, 92, 246, 0.1), transparent),
  linear-gradient(180deg, #0a0f1c 0%, #111827 100%);
```

**Card Gradient Border**
```css
background: linear-gradient(135deg, rgba(34, 211, 238, 0.3), transparent 50%);
padding: 1px;
border-radius: 20px;
/* Inner div has main bg */
```

**Text Gradient (Headlines)**
```css
background: linear-gradient(135deg, #ffffff 0%, #22d3ee 50%, #8b5cf6 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

### Shadows
```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.3);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -4px rgba(0, 0, 0, 0.3);
--shadow-glow: 0 0 40px rgba(6, 182, 212, 0.15);
--shadow-glow-lg: 0 0 60px rgba(6, 182, 212, 0.2);
```

### Animation Specifications

**Timing Functions**
```css
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
```

**Durations**
- Micro (hover states): 150ms
- Standard (transitions): 250ms
- Entrance (page load): 500-700ms
- Complex (sequences): 1000ms

**Animation Presets**

```css
/* Fade Up Entrance */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Scale In */
@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

/* Slide In Right */
@keyframes slideInRight {
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
}

/* Pulse Glow */
@keyframes pulseGlow {
  0%, 100% { box-shadow: 0 0 20px rgba(6, 182, 212, 0.3); }
  50% { box-shadow: 0 0 40px rgba(6, 182, 212, 0.5); }
}

/* Shimmer (for loading/skeletons) */
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```

---

## Layout Patterns

### Container
```css
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}
@media (min-width: 640px) { padding: 0 32px; }
@media (min-width: 1024px) { padding: 0 48px; }
```

### Grid Patterns
- **3-col features**: `grid-template-columns: repeat(3, 1fr)` gap 32px
- **Template cards**: `grid-template-columns: repeat(auto-fit, minmax(340px, 1fr))`
- **Pricing**: `grid-template-columns: repeat(2, 1fr)` max-width 900px centered

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px
- Wide: > 1280px

---

## Iconography

- **Library**: Lucide React
- **Size Scale**: 16px, 20px, 24px, 32px, 40px
- **Stroke Width**: 1.5px (default), 2px (emphasis)
- **Color**: Inherit from text color

### Icon Usage
- Navigation: 20px
- Feature icons: 24px
- Hero decorative: 32-40px
- Button icons: 16-18px

---

## Visual Assets

### Abstract Shapes
Use subtle geometric shapes for backgrounds:
- Blurred circles (gradient backgrounds)
- Grid patterns (subtle, low opacity)
- Noise texture (very subtle, 2-3% opacity)

### Empty States
- Illustrative icon (48px, muted color)
- Friendly message
- Clear CTA

---

## Accessibility

### Contrast Ratios
- Text on dark bg: Minimum 4.5:1 (7:1 preferred)
- Primary buttons: 7:1
- Interactive elements: 3:1 minimum

### Focus States
```css
outline: 2px solid #22d3ee;
outline-offset: 2px;
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## File Structure
```
app/
├── globals.css           # Design tokens, Tailwind config
├── layout.tsx            # Root layout with fonts
├── page.tsx              # Landing page (redesigned)
├── dashboard/
│   └── page.tsx          # Dashboard (polished)
├── builder/
│   └── page.tsx          # Builder wizard (refined)
├── pricing/
│   └── page.tsx          # Pricing page (enhanced)
├── templates/
│   └── page.tsx          # Templates showcase
└── components/
    ├── ui/               # Reusable UI components
    │   ├── button.tsx
    │   ├── card.tsx
    │   ├── badge.tsx
    │   └── input.tsx
    ├── navbar.tsx        # Site navigation
    ├── footer.tsx        # Site footer
    ├── hero-section.tsx  # Animated hero
    ├── feature-card.tsx  # Feature display
    ├── template-card.tsx # Template preview
    ├── pricing-card.tsx  # Pricing tier
    └── step-indicator.tsx # Builder progress
```

---

## Quality Checklist

Before shipping, verify:
- [ ] All animations run at 60fps
- [ ] Typography hierarchy is clear
- [ ] Colors meet WCAG AA standards
- [ ] Hover states are consistent
- [ ] Mobile layout is polished
- [ ] Loading states are handled
- [ ] Empty states are helpful
- [ ] Focus states are visible
- [ ] Images have alt text
- [ ] Reduced motion is respected

---

*Design System Version 2.0*
*SwarmForge — Professional SaaS Aesthetic*
