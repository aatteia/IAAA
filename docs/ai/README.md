# AI Development Context

This folder contains files that provide context and rules for AI-assisted development.

## Files

### constitution.md

The AI agent coding constitution defines rules and behaviours for Claude when working on this project. It covers:

- Agent conduct (how to approach tasks, handle uncertainty, report status)
- Design system rules (use CSS custom properties, follow established patterns)
- GitHub workflow (individual commits, verification before proceeding)
- Content guidelines (Australian Government focus, risk reduction positioning)
- Documentation standards

## Usage

Claude Code reads `CLAUDE.md` automatically at the start of each session, which references this constitution. No manual context-sharing is needed.

When starting work:

1. Describe what you're trying to do
2. For significant work, ask Claude to create a plan in docs/plans/

## Updating the Constitution

The constitution should evolve based on experience. If you encounter recurring issues:

1. Identify the problematic behaviour
2. Add a rule to prevent it
3. Keep rules concise (don't waste tokens on verbose explanations)

## Project Summary

For Claude's reference, the key facts about this project:

- **Site:** Single-page portfolio targeting Australian Government hiring managers
- **Stack:** Static HTML/CSS/JS on GitHub Pages
- **Design system:** HireUp-derived, CSS custom properties in design-system.css
- **Owner:** Adam Atteia, Lead UX Designer
- **Goal:** Position for government contracting opportunities, emphasise risk reduction
