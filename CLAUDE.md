# CLAUDE.md

The full governance document is `docs/ai/constitution.md`. Read it at the start of every session. The rules below are extracted from the constitution for immediate enforcement.

## Mandatory Workflow

These rules apply to every response and every change. No exceptions.

### Before every change
1. Read `docs/ai/constitution.md` if not yet read this session
2. Read every file you intend to modify before editing it
3. For significant changes (3+ files, new features, structural changes): present a plan listing all affected files and get approval before editing
4. Use CSS custom properties from `css/design-system.css` — never hardcode colours, spacing, or typography

### Before every commit
5. Stage specific files only (never `git add .` or `git add -A`)
6. Confirm with Adam before pushing to remote
7. For multi-file commits: list all files and recommend whether to commit together or separately

### Before every response
8. Run the preflight checklist (constitution Section VIII)
9. End every response with the Summary format below — no exceptions, even for short responses

### Preflight checklist
1. Is the task confirmed and unambiguous?
2. Has existing code been examined first?
3. Does the change follow the design system?
4. Is the change minimal and focused?
5. Are all assumptions stated explicitly?
6. Is incomplete work clearly marked?
7. Is the HTML semantic and accessible?
8. Are CSS values using custom properties where appropriate?
9. Will this work on GitHub Pages (static only)?
10. Is there a clear path to verify this works?
11. Is the summary complete?

---

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

No automated test framework. After every change, include in your response:
1. Expected visual/behavioural outcome of the change
2. Specific manual testing steps Adam should perform (local + production)
3. Accessibility checks where relevant (keyboard nav, contrast, screen reader)
4. Confirmation that it works on GitHub Pages (static only, no server-side)

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
