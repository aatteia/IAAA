# CLAUDE.md

Always reference and follow docs/ai/constitution.md

## Project Overview

Single-page portfolio website for Adam Atteia, Lead UX Designer. Targets Australian Government hiring managers evaluating UX design contractors. Emphasises risk reduction, credibility, and evidence-led delivery.

**Live site:** [adamatteia.com](https://adamatteia.com/) — GitHub Pages with custom domain (static hosting, no server-side processing)

## Tech Stack

- **HTML5** — semantic markup, accessibility-first
- **CSS3** — custom properties for design tokens, no preprocessor
- **Vanilla JavaScript (ES5)** — no frameworks or dependencies
- **Google Fonts** — Archivo (headings) + Inter (body)
- **No build step** — direct static file serving
- **No package.json** — zero dependencies

## Project Structure

```
index.html              # Main portfolio page (~500 lines)
privacy.html            # Privacy policy
test.html               # Setup verification page
css/
  design-system.css     # Design tokens + base styles + utilities (~654 lines)
  components.css        # Portfolio-specific component styles (~612 lines)
js/
  main.js               # All interactivity in IIFE (~257 lines)
images/
  headshots/            # Animated profile headshots (JPG)
  logos/                # Client logos (SVG + JPG)
docs/
  README.md             # Project documentation
  IMPLEMENTATION.md     # Setup and deployment guide
  architecture.md       # Technical decisions & constraints
  DESIGN-SYSTEM.md      # Design token reference
  ai/
    constitution.md     # AI agent coding rules (READ THIS)
    README.md           # AI context guide
  plans/                # Saved development plans
  decisions/            # Architecture decision records
```

## Key Rules

### Read the Constitution First

Before making any changes, read `docs/ai/constitution.md`. It defines agent conduct, design system rules, GitHub workflow, content guidelines, and documentation standards.

### Design System

- Always use CSS custom properties from `css/design-system.css` (e.g. `var(--color-primary)`, `var(--space-md)`)
- Never hardcode colours, spacing, or typography values
- New components must match existing visual language
- Colours are centralised for future theming (private sector sister site planned)

### Code Patterns

- JavaScript is wrapped in an IIFE with strict mode — no globals
- State is managed via CSS classes (`.active`, `.animate-in`, `.loaded`)
- Animations use CSS `transform` and `opacity` for GPU acceleration
- `prefers-reduced-motion` is respected for all animations
- Progressive enhancement: core content works without JavaScript

### Accessibility Requirements

- Semantic HTML with proper heading hierarchy
- ARIA labels on icon buttons
- Skip link for keyboard navigation
- Focus management and visible focus states
- Sufficient colour contrast (WCAG AA)
- Keyboard navigable interactive elements

### Change Philosophy

- Make the smallest necessary change
- Examine existing code before modifying
- Match existing code style and naming conventions
- Don't refactor unrelated code without explicit instruction
- Fix root causes, not symptoms

## Deployment

```bash
git add <specific-files>
git commit -m "Description of change"
git push origin main
# GitHub Pages auto-deploys in 1-2 minutes
```

- Push changes individually and verify each works in production
- No force pushes or history deletion
- Meaningful commit messages describing what changed and why

## Content Guidelines

- Speak to Australian Government hiring managers
- Emphasise risk reduction and safe choices
- Professional but approachable language
- Claims must be credible and specific
- Maintain Adam's established voice and positioning

## Verification

No automated test framework. For every change:
1. Verify HTML is valid and semantic
2. Describe expected visual outcomes
3. Recommend manual testing steps (local + production)
4. Check accessibility (keyboard nav, contrast, screen reader)
5. Confirm it works on GitHub Pages (static only)

## Response Format

End every response with:

```
---
## Summary

**Completed:**
- [What was accomplished]

**Next steps:**
- [What Adam should do next]

**Open questions:**
- [Any unresolved ambiguities]
```
