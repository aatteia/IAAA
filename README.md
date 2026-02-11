# Adam Atteia Portfolio

Lead UX Designer specialising in Australian Government transformation.

**Live site:** [adamatteia.com](https://adamatteia.com/)

---

## Project Structure

```
IAAA/
├── index.html                    # Main portfolio page
├── test.html                     # Setup verification page
├── css/
│   ├── design-system.css         # Design tokens and base styles
│   └── components.css            # Portfolio-specific components
├── js/
│   └── main.js                   # Interactions and animations
├── images/
│   ├── headshots/                # Animated headshot images
│   └── logos/                    # Client logo images
└── docs/
    ├── ai/
    │   └── constitution.md       # AI agent coding rules
    ├── plans/                    # Saved development plans
    ├── decisions/                # Architecture decision records
    └── IMPLEMENTATION.md         # Implementation guide
```

---

## Quick Start

### Local Development

1. Clone the repository
2. Open `index.html` in a browser, or use VS Code with Live Server extension
3. Test setup with `test.html` first

### Making Changes

This project uses AI-assisted development with Claude. Before making changes:

1. Review `docs/ai/constitution.md` for coding guidelines
2. Create a plan in `docs/plans/` for significant work
3. Test locally before pushing
4. Push individual changes and verify in production

---

## Design System

The site uses a design system extracted from the HireUp template:

- **Colours:** Primary purple (#4640DE) with full gray scale
- **Typography:** Archivo (headings) + Inter (body)
- **Spacing:** 8px-based consistent scale
- **Components:** Buttons, cards, badges, forms

All design tokens are CSS custom properties in `css/design-system.css`.

See `style-guide.html` for the complete visual reference.

---

## Documentation

| Document | Purpose |
|----------|---------|
| `docs/ai/constitution.md` | Rules for AI-assisted development |
| `docs/IMPLEMENTATION.md` | Setup, deployment, troubleshooting |
| `docs/plans/` | Development plans for features |
| `docs/decisions/` | Records of significant choices |

---

## Images

### Headshots

Place in `images/headshots/`:
- 054.jpg, 057.jpg, 060.jpg, 064.jpg, 072.jpg

The hero section animates through these in sequence.

### Client Logos

Place in `images/logos/`:
- austgovt.svg, accenture.svg, dxc.svg, telstra.svg
- anz.svg, bupa.svg, actewagl.svg, anu.svg
- ala.svg, idp.svg, acara.jpg, vtac.svg

---

## Deployment

The site deploys automatically via GitHub Pages when changes are pushed to main.

```bash
git add .
git commit -m "Description of change"
git push origin main
```

Allow 1-2 minutes for changes to appear at the live URL.

---

## Accessibility

The site follows WCAG AA guidelines:
- Semantic HTML structure
- Keyboard navigation support
- Skip link for screen readers
- Sufficient colour contrast
- Reduced motion support

---

## Browser Support

Tested on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS)
- Chrome (Android)

---

## License

© Adam Atteia. All rights reserved.
