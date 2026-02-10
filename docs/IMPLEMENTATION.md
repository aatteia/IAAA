# Portfolio Migration - Implementation Guide

## 📁 Project Structure

```
portfolio-migration/
├── index.html                 # Main HTML file with HireUp styling
├── css/
│   ├── design-system.css      # Core design system (variables, base styles, utilities)
│   └── components.css         # Portfolio-specific components
├── js/
│   └── main.js                # Interactions and animations
├── images/
│   ├── headshots/             # Your headshot images (054.jpg, 057.jpg, etc.)
│   └── logos/                 # Client logo images (austgovt.svg, accenture.svg, etc.)
└── docs/
    └── IMPLEMENTATION.md      # This file
```

---

## 🚀 Quick Start

### 1. Copy Files to Your Site

Copy all files from the migration folder to your GitHub Pages repository:

```bash
# Copy CSS files
cp css/design-system.css YOUR_REPO/css/
cp css/components.css YOUR_REPO/css/

# Copy JavaScript
cp js/main.js YOUR_REPO/js/

# Copy main HTML
cp index.html YOUR_REPO/

# Your existing images should already be in place
```

### 2. Font Setup

The site uses Google Fonts (Archivo & Inter). These are already linked in the HTML `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

No additional setup required.

### 3. Test Locally

Open `index.html` in a browser to preview the site before deploying.

### 4. Deploy

Commit and push to GitHub:

```bash
git add .
git commit -m "Apply HireUp-inspired design system"
git push origin main
```

Your site should be live at `https://adamatteia.com/`

---

## 🎨 Design System Overview

### Color Variables

All colors are defined as CSS custom properties in `design-system.css`:

```css
--color-primary: #4640DE          /* Primary purple/blue */
--color-primary-dark: #443FDE     /* Hover state */
--color-primary-light: #F3F3FC    /* Light backgrounds */
--color-gray-900: #3E404C         /* Body text */
--color-gray-200: #EBEBEF         /* Borders */
--color-gray-100: #F7F7FA         /* Section backgrounds */
```

**To customize colors:** Edit these variables in `css/design-system.css`

### Typography

Two font families:
- **Archivo** - Headings and UI elements
- **Inter** - Body text and paragraphs

Type scale:
- `h1`: 38px (hero title)
- `h2`: 32px (section headings)
- `h3`: 24px (card titles)
- `h4`: 18px (subsection titles)
- Body: 16px
- Small: 14px

### Spacing

Consistent spacing scale using custom properties:

```css
--space-xs: 8px
--space-sm: 12px
--space-md: 16px
--space-lg: 20px
--space-xl: 24px
--space-2xl: 32px
--space-3xl: 40px
--space-4xl: 48px
--space-5xl: 64px
```

---

## 🧩 Component Guide

### Buttons

Three button styles available:

```html
<!-- Primary button -->
<a href="#" class="btn btn-primary">Primary Action</a>

<!-- Secondary button -->
<a href="#" class="btn btn-secondary">Secondary Action</a>

<!-- Outline button -->
<a href="#" class="btn btn-outline">Outline Action</a>

<!-- Sizes -->
<a href="#" class="btn btn-primary btn-sm">Small</a>
<a href="#" class="btn btn-primary btn-lg">Large</a>
```

### Cards

```html
<!-- Basic card -->
<div class="card">
    <h3>Card Title</h3>
    <p>Card content goes here.</p>
</div>

<!-- Hoverable card -->
<div class="card card-hover">
    <h3>Hover Me</h3>
    <p>I have a nice hover effect.</p>
</div>

<!-- Card without border (shadow only) -->
<div class="card card-no-border">
    <h3>Clean Look</h3>
    <p>Shadow-only styling.</p>
</div>
```

### Badges

```html
<span class="badge badge-blue">Marketing</span>
<span class="badge badge-purple">Design</span>
<span class="badge badge-orange">Part Time</span>
<span class="badge badge-teal">Technology</span>
<span class="badge badge-primary">New</span>
<span class="badge badge-gray">Inactive</span>
```

### Grids

```html
<!-- 2-column grid (responsive) -->
<div class="grid grid-cols-2 gap-xl">
    <div>Column 1</div>
    <div>Column 2</div>
</div>

<!-- 3-column grid -->
<div class="grid grid-cols-3 gap-2xl">
    <div>Column 1</div>
    <div>Column 2</div>
    <div>Column 3</div>
</div>
```

Grids automatically stack to 1 column on mobile.

---

## 📱 Responsive Behavior

### Breakpoints

```css
Desktop:  992px+
Tablet:   768px - 991px
Mobile:   < 768px
Small:    < 479px
```

### What Changes on Mobile

1. **Navigation:** Desktop menu → Hamburger menu
2. **Grids:** 3 columns → 2 columns → 1 column
3. **Typography:** Font sizes scale down ~10-15%
4. **Spacing:** Padding reduced ~20-40%
5. **Hero headshots:** Become scrollable carousel

### Testing Responsive Design

Use browser dev tools:
- Chrome: F12 → Toggle device toolbar (Ctrl/Cmd + Shift + M)
- Test at widths: 375px (mobile), 768px (tablet), 1200px (desktop)

---

## ⚙️ JavaScript Features

All functionality is in `js/main.js`:

### 1. Mobile Menu Toggle

Automatically handled. The hamburger menu appears on screens < 768px.

### 2. Sticky Navigation

Navigation bar gets a subtle shadow on scroll.

### 3. Active Nav Links

Navigation links automatically highlight based on scroll position.

### 4. Smooth Scrolling

All anchor links (e.g., clicking "Reduce risk" in nav) scroll smoothly.

### 5. Collapsible Sections

The "Qualifications" and "Professional development" sections under Credibility are collapsible. Click the title to expand/collapse.

### 6. Scroll Animations

Cards and sections fade in as you scroll down the page.

### 7. Rotating Headshots

Hero headshots have a subtle pulse animation every 3 seconds on desktop.

**To disable any feature:** Comment out the relevant section in `main.js`

---

## 🎯 Customization Guide

### Change Primary Color

1. Open `css/design-system.css`
2. Find the `:root` section
3. Change `--color-primary` value:

```css
:root {
  --color-primary: #4640DE;  /* Change this hex code */
}
```

All buttons, links, and accents will update automatically.

### Change Fonts

Replace the Google Fonts link in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@400;600;700&display=swap" rel="stylesheet">
```

Then update the CSS variables:

```css
:root {
  --font-heading: 'Your Heading Font', sans-serif;
  --font-body: 'Your Body Font', sans-serif;
}
```

### Adjust Spacing

All spacing uses the spacing scale. To make the site more/less spacious:

```css
:root {
  /* Make everything more spacious */
  --space-xl: 32px;    /* was 24px */
  --space-2xl: 48px;   /* was 32px */
  --space-3xl: 64px;   /* was 40px */
}
```

### Remove Animations

To disable scroll animations, comment out this section in `main.js`:

```javascript
// =======================================================================
// Scroll Animations (Fade In on Scroll)
// =======================================================================
// [Comment out entire section]
```

---

## 🖼️ Image Guidelines

### Headshots

Location: `images/headshots/`

- **Format:** JPG or PNG
- **Size:** 400x400px minimum
- **Aspect ratio:** Square (1:1)
- **File size:** < 200KB each (optimize with TinyPNG or similar)

### Client Logos

Location: `images/logos/`

- **Format:** SVG preferred (scales perfectly), PNG/JPG acceptable
- **Background:** Transparent for SVG/PNG
- **Max dimensions:** 200px width × 100px height
- **Consistent styling:** Try to get all logos in similar style (all color or all grayscale)

**Tip:** The CSS applies grayscale filter to logos and shows color on hover.

---

## 🐛 Troubleshooting

### Fonts not loading

**Issue:** Times New Roman or generic fonts showing
**Fix:** Check that Google Fonts link is in `<head>` before CSS files

### Styles not applying

**Issue:** Default/ugly styles visible
**Fix:** 
1. Check file paths in `<link>` tags
2. Ensure CSS files are in correct folders
3. Clear browser cache (Ctrl/Cmd + Shift + R)

### Mobile menu not working

**Issue:** Hamburger menu doesn't open
**Fix:**
1. Check that `main.js` is loaded (check browser console for errors)
2. Verify IDs match: `mobileMenuToggle` and `mobileMenu`

### Images not showing

**Issue:** Broken image icons
**Fix:**
1. Check image file paths in HTML
2. Ensure images are in correct folders
3. Check file names match exactly (case-sensitive)

### Layout breaking on mobile

**Issue:** Elements overlapping or too wide
**Fix:**
1. Check for hardcoded widths in custom CSS
2. Test at various widths (375px, 768px, 1200px)
3. Ensure container classes are used

---

## 📋 Pre-Launch Checklist

Before making the site live, test:

- [ ] All navigation links work
- [ ] Mobile menu opens/closes properly
- [ ] All images load correctly
- [ ] Smooth scrolling works
- [ ] Forms (if any) submit correctly
- [ ] Site looks good on:
  - [ ] iPhone (375px wide)
  - [ ] iPad (768px wide)
  - [ ] Desktop (1200px+ wide)
- [ ] All external links open in new tab
- [ ] Email link opens mail client
- [ ] LinkedIn link works
- [ ] No console errors (F12 → Console tab)
- [ ] Page loads quickly (< 3 seconds)

---

## 🚀 Performance Optimization

### Current Performance

The site is already optimized with:
- Minimal JavaScript (no libraries except what's needed)
- CSS custom properties (no preprocessor needed)
- System fonts fallback
- Optimized transitions

### Further Optimization (Optional)

1. **Optimize images:**
   ```bash
   # Use TinyPNG, ImageOptim, or:
   npm install -g imageoptim-cli
   imageoptim images/**/*
   ```

2. **Minify CSS in production:**
   ```bash
   npm install -g clean-css-cli
   cleancss -o design-system.min.css design-system.css
   cleancss -o components.min.css components.css
   ```

3. **Enable browser caching** (add to GitHub Pages settings or .htaccess if using different host)

---

## 🔧 Maintenance

### Adding New Sections

1. Copy an existing section structure from `index.html`
2. Update content
3. Add corresponding ID for navigation
4. Update navigation menu

### Adding New Capabilities

Add a new card to the capabilities grid:

```html
<div class="capability-card">
    <h3 class="capability-title">Your New Capability</h3>
    <p class="capability-description">Description here.</p>
</div>
```

### Adding New Testimonials

Add to the testimonials grid:

```html
<div class="testimonial-card">
    <p class="testimonial-quote">The testimonial quote goes here.</p>
    <div class="testimonial-author">
        <div>
            <div class="testimonial-author-name">Name</div>
            <div class="testimonial-author-title">Title</div>
        </div>
    </div>
</div>
```

---

## 📞 Support

If you encounter issues:

1. Check browser console (F12 → Console) for errors
2. Verify all file paths are correct
3. Test in different browsers
4. Clear cache and hard reload (Ctrl/Cmd + Shift + R)

---

## 🎉 You're Done!

Your portfolio now has:
- ✅ Professional HireUp-inspired design
- ✅ Fully responsive layout
- ✅ Smooth animations
- ✅ Accessible markup
- ✅ Clean, maintainable code
- ✅ Fast loading times

The design system is flexible and easy to customize. All the hard work of extracting and adapting the HireUp template has been done for you!
