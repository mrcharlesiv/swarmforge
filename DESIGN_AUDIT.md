# SwarmForge Design System Audit Report

**Date:** 2026-02-02  
**Auditor:** Design System Agent  
**Scope:** All Pages (/, /templates, /pricing, /builder, /dashboard)

---

## Executive Summary

The SwarmForge codebase has a solid foundation with a well-defined design system in `globals.css`, but there are significant inconsistencies across pages where custom inline styles override the system. This creates visual fragmentation that makes the product feel less polished and professional.

**Grade: B-** (Good foundation, poor implementation consistency)

---

## 1. Color Palette Inconsistencies ❌

### Issues Found:
| Issue | Location | Current | Expected |
|-------|----------|---------|----------|
| Tailwind config conflicts | `tailwind.config.ts` | primary: #0ea5e9 (sky) | primary: #06b6d4 (cyan) |
| Background case mismatch | templates, pricing | `#0A0F1C` | `#0a0f1c` |
| Gradient accent colors vary | templates | indigo-based | cyan-based |
| Badge styling | templates | custom inline | `badge-cyan` class |

### Impact:
- Brand identity dilution
- Visual inconsistency when navigating between pages

---

## 2. Typography Scale Inconsistencies ❌

### Issues Found:
| Element | Home | Templates/Pricing | Dashboard | Standard |
|---------|------|-------------------|-----------|----------|
| Hero H1 | 5xl/6xl/7xl | 4xl/5xl/6xl | 4xl/5xl/6xl | 5xl/6xl/7xl |
| Card Title | font-semibold | font-bold | font-semibold | font-semibold |
| Section Badge | mb-4/6/8 | mb-6 | mb-6 | mb-6 |

### Impact:
- Visual hierarchy inconsistencies
- Harder to scan and understand content

---

## 3. Button Style Inconsistencies ❌

### Issues Found:
- **Home/Builder/Dashboard:** Uses `.btn-primary`, `.btn-secondary` classes ✓
- **Templates:** Custom gradient buttons `bg-gradient-to-r from-indigo-500 to-indigo-400`
- **Pricing:** Mixed - some `bg-slate-700`, some gradients

### Required Button Types:
```
Primary:    .btn-primary (cyan gradient)
Secondary:  .btn-secondary (glass effect)
Ghost:      .btn-ghost (transparent)
Outline:    border + hover states
```

---

## 4. Card Style Inconsistencies ❌

### Issues Found:
- **Home:** Uses `Card` component with variants ✓
- **Templates:** Custom card markup with different styling
- **Pricing:** Custom divs, no Card component
- **Builder/Dashboard:** Uses `Card` component ✓

### Card Variants in System:
```
default:  bg-slate-800/50 border-slate-700
feature:  card-feature class (gradient bg + hover)
template: card-template class (image-ready)
pricing:  card-pricing class
glass:    card-glass class (backdrop blur)
```

---

## 5. Spacing System Inconsistencies ⚠️

### Issues Found:
| Page | Section Padding |
|------|-----------------|
| Home | py-24 |
| Templates | py-20 |
| Pricing | py-20 |
| Builder | py-12 lg:py-16 |

### Standard Required:
- Sections: `section` class (py-24 lg:py-32)
- Components: Use spacing tokens from CSS variables

---

## 6. Border Radius Inconsistencies ⚠️

### Issues Found:
- Cards: `rounded-2xl` vs `rounded-3xl`
- Buttons: `rounded-xl` vs `rounded-lg`
- Badges: `rounded-full` vs `rounded-md`

### Standard Required:
```
Cards:    rounded-2xl
Buttons:  rounded-xl
Badges:   rounded-full (pills) / rounded-md (tags)
Inputs:   rounded-xl
```

---

## 7. Animation/Timing ✅

### Status: GOOD
- Animation utilities defined in globals.css
- Consistent easing functions
- Reduced motion support included

---

## Fix Priority Matrix

| Priority | Issue | Effort | Impact |
|----------|-------|--------|--------|
| 🔴 High | Color palette alignment | Low | High |
| 🔴 High | Button standardization | Medium | High |
| 🔴 High | Card component usage | Medium | High |
| 🟡 Medium | Typography alignment | Low | Medium |
| 🟡 Medium | Spacing consistency | Low | Medium |
| 🟢 Low | Border radius cleanup | Low | Low |

---

## Recommendations

1. **Enforce Component Usage:** All cards should use the `Card` component
2. **Remove Inline Gradients:** Use CSS class-based gradients
3. **Standardize Typography:** Create Heading components
4. **Audit New Pages:** Run design check before shipping new pages
5. **Design Tokens:** Consider moving to a proper design token system

---

## Files Requiring Changes

1. `tailwind.config.ts` - Fix primary color
2. `app/templates/page.tsx` - Standardize buttons, cards, colors
3. `app/pricing/page.tsx` - Standardize cards, buttons
4. `app/globals.css` - Add missing utility classes
