# Architecture Overview

This document describes the structure and technical decisions for Adam Atteia's portfolio website.

---

## Technical Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| Hosting | GitHub Pages | Free static hosting with HTTPS |
| Markup | HTML5 | Semantic structure |
| Styling | CSS3 | Custom properties, no preprocessor |
| Interaction | Vanilla JavaScript | No framework dependencies |
| Fonts | Google Fonts | Archivo + Inter |

---

## Design Decisions

### Why Static HTML (No Framework)

The portfolio is a single marketing page with minimal interactivity. A framework like React or Vue would add:
- Build complexity
- Larger bundle size
- Slower initial load
- Harder maintenance for simple content updates

Plain HTML/CSS/JS provides:
- Instant page loads
- Zero build step
- Easy content editing
- Excellent Lighthouse scores

### Why CSS Custom Properties (No Tailwind/SCSS)

Custom properties provide:
- Runtime theming capability (future: light/dark modes, alternative colour schemes)
- Single source of truth for design tokens
- No build step required
- Native browser support

The design system in `design-system.css` defines all tokens. Components in `components.css` consume them.

### Why No Build Step

GitHub Pages serves files directly. No build step means:
- Simpler deployment (push and done)
- No CI/CD configuration
- Easier debugging (source matches production)
- Lower barrier to maintenance

---

## File Organisation

### CSS Architecture

```
css/
├── design-system.css    # Tokens + base styles + utilities
└── components.css       # Portfolio-specific patterns
```

**design-system.css** contains:
- CSS custom properties (colours, spacing, typography, shadows)
- Base element styles (headings, links, forms)
- Utility classes (margins, flex, grid)
- Generic component styles (buttons, cards, badges)

**components.css** contains:
- Portfolio-specific sections (hero, risk, capabilities)
- Layout patterns unique to this site
- Responsive adjustments for portfolio components

### JavaScript Architecture

```
js/
└── main.js    # All interactions in one file
```

The site has limited JavaScript needs:
- Mobile menu toggle
- Sticky navigation shadow
- Active nav link highlighting
- Smooth scroll
- Collapsible sections
- Scroll-triggered animations
- Headshot rotation

All functionality is in a single file wrapped in an IIFE to avoid global scope pollution.

---

## Responsive Strategy

### Breakpoints

| Name | Width | Target |
|------|-------|--------|
| Mobile | < 768px | Phones |
| Tablet | 768-991px | Tablets, small laptops |
| Desktop | 992px+ | Laptops, monitors |

### Mobile-First Approach

Base styles target mobile. Media queries add complexity for larger screens:
- Single column → multi-column grids
- Hamburger menu → horizontal nav
- Smaller type → larger type

---

## Performance Considerations

### Current Optimisations

- No JavaScript frameworks (vanilla JS only)
- CSS custom properties (no preprocessor overhead)
- System font fallbacks
- GPU-accelerated animations (transform, opacity)
- Lazy loading ready (not yet implemented)

### Image Strategy

- Headshots: JPG, 400×400px minimum
- Logos: SVG preferred (vector scales perfectly)
- CSS applies grayscale filter to logos (reduces visual noise)

### Expected Lighthouse Scores

- Performance: 90-100
- Accessibility: 95-100
- Best Practices: 95-100
- SEO: 90-100

---

## Future Considerations

### Alternative Stylesheets

The design system supports creating alternative themes:
1. Create `css/theme-dark.css` or `css/theme-private-sector.css`
2. Override `--color-*` custom properties
3. Load conditionally via JavaScript or separate HTML pages

### Sister Site (Private Sector)

When creating the private sector version:
- Share `design-system.css` base
- Create new `theme-private.css` with adjusted colours
- Duplicate and modify HTML content
- Could be a separate repository or subdirectory

### Content Management

If content updates become frequent, consider:
- Markdown files + static site generator (11ty, Hugo)
- Headless CMS + build step
- For now, direct HTML editing is sufficient

---

## Constraints

### GitHub Pages Limitations

- Static files only (no server-side processing)
- No PHP, Node.js, or database
- No environment variables at runtime
- Form submissions require third-party service (Formspree, Netlify Forms)

### Browser Support

The site uses modern CSS (custom properties, grid, flexbox) which excludes:
- Internet Explorer (all versions)
- Very old mobile browsers

This is acceptable for the target audience (government hiring managers using modern browsers).

---

## Security Considerations

- No sensitive data stored
- No user authentication
- Email displayed uses Cloudflare email protection (in current HTML)
- External links use `rel="noopener noreferrer"`
- HTTPS enforced via GitHub Pages

---

*Last updated: February 2026*
