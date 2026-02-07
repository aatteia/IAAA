# Design System Reference

Complete reference for the HireUp-inspired design system applied to Adam Atteia's portfolio.

---

## Table of Contents

1. [Color Palette](#color-palette)
2. [Typography](#typography)
3. [Spacing](#spacing)
4. [Components](#components)
5. [Layout](#layout)
6. [Responsive Design](#responsive-design)
7. [Animations](#animations)

---

## Color Palette

### Primary Colors

| Variable | Hex | Usage | Sample |
|----------|-----|-------|--------|
| `--color-primary` | `#4640DE` | Primary buttons, links, CTAs | ![#4640DE](https://via.placeholder.com/80x30/4640DE/FFFFFF?text=Primary) |
| `--color-primary-dark` | `#443FDE` | Hover states, active elements | ![#443FDE](https://via.placeholder.com/80x30/443FDE/FFFFFF?text=Dark) |
| `--color-primary-darker` | `#28257E` | Darker accent, gradients | ![#28257E](https://via.placeholder.com/80x30/28257E/FFFFFF?text=Darker) |
| `--color-primary-light` | `#F3F3FC` | Light backgrounds, hover states | ![#F3F3FC](https://via.placeholder.com/80x30/F3F3FC/000000?text=Light) |

### Neutrals

| Variable | Hex | Usage | Sample |
|----------|-----|-------|--------|
| `--color-black` | `#030407` | Headings, important text | ![#030407](https://via.placeholder.com/80x30/030407/FFFFFF?text=Black) |
| `--color-gray-900` | `#3E404C` | Body text, secondary headings | ![#3E404C](https://via.placeholder.com/80x30/3E404C/FFFFFF?text=Gray-900) |
| `--color-gray-700` | `#6B6B6B` | Muted text | ![#6B6B6B](https://via.placeholder.com/80x30/6B6B6B/FFFFFF?text=Gray-700) |
| `--color-gray-500` | `#999999` | Placeholder text, disabled | ![#999999](https://via.placeholder.com/80x30/999999/FFFFFF?text=Gray-500) |
| `--color-gray-300` | `#CCCCCC` | Borders, dividers | ![#CCCCCC](https://via.placeholder.com/80x30/CCCCCC/000000?text=Gray-300) |
| `--color-gray-200` | `#EBEBEF` | Light borders | ![#EBEBEF](https://via.placeholder.com/80x30/EBEBEF/000000?text=Gray-200) |
| `--color-gray-100` | `#F7F7FA` | Section backgrounds | ![#F7F7FA](https://via.placeholder.com/80x30/F7F7FA/000000?text=Gray-100) |
| `--color-gray-50` | `#F3F3FC` | Subtle backgrounds | ![#F3F3FC](https://via.placeholder.com/80x30/F3F3FC/000000?text=Gray-50) |
| `--color-white` | `#FFFFFF` | Main background, cards | ![#FFFFFF](https://via.placeholder.com/80x30/FFFFFF/000000?text=White) |

### Semantic Colors

| Variable | Hex | Usage |
|----------|-----|-------|
| `--color-focus` | `#3898EC` | Focus outlines |
| `--color-error` | `#EA384C` | Error messages |
| `--color-error-bg` | `#FFDEDE` | Error backgrounds |
| `--color-success` | `#28A745` | Success messages |
| `--color-warning` | `#FFC107` | Warning messages |

### Badge/Tag Colors

| Class | Background | Text | Usage |
|-------|-----------|------|-------|
| `.badge-blue` | `#E3F2FD` | `#1976D2` | Marketing, General |
| `.badge-purple` | `#F3E5F5` | `#7B1FA2` | Design, Creative |
| `.badge-orange` | `#FFF3E0` | `#E65100` | Part-time, Casual |
| `.badge-teal` | `#E0F2F1` | `#00695C` | Technology, Technical |
| `.badge-primary` | `#4640DE` | `#FFFFFF` | Featured, New |
| `.badge-gray` | `#F7F7FA` | `#6B6B6B` | Inactive, Neutral |

---

## Typography

### Font Families

```css
/* Headings & UI */
font-family: 'Archivo', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Body Text */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Type Scale

| Element | Size | Line Height | Weight | Variable |
|---------|------|-------------|--------|----------|
| H1 | 38px | 44px | 700 (Bold) | `--font-size-3xl` |
| H2 | 32px | 36px | 700 (Bold) | `--font-size-2xl` |
| H3 | 24px | 30px | 700 (Bold) | `--font-size-xl` |
| H4 | 18px | 24px | 600 (Semi-bold) | `--font-size-md` |
| H5 | 14px | 20px | 600 (Semi-bold) | `--font-size-sm` |
| H6 | 12px | 18px | 600 (Semi-bold) | `--font-size-xs` |
| Body Large | 20px | 1.625 | 400 (Regular) | `--font-size-lg` |
| Body | 16px | 1.5 | 400 (Regular) | `--font-size-base` |
| Small | 14px | 1.5 | 400 (Regular) | `--font-size-sm` |
| Tiny | 12px | 1.5 | 400 (Regular) | `--font-size-xs` |

### Font Weights

| Weight | Value | Usage |
|--------|-------|-------|
| Light | 300 | Subtle text, large display |
| Normal | 400 | Body text, paragraphs |
| Medium | 500 | UI elements, emphasis |
| Semi-bold | 600 | Subheadings, buttons |
| Bold | 700 | Headings, strong emphasis |
| Extra-bold | 800 | Hero titles, display |

### Text Utilities

```html
<!-- Size utilities -->
<p class="text-xs">Extra small text</p>
<p class="text-sm">Small text</p>
<p class="text-base">Base text</p>
<p class="text-lg">Large text</p>
<p class="text-xl">Extra large text</p>

<!-- Weight utilities -->
<p class="font-light">Light weight</p>
<p class="font-normal">Normal weight</p>
<p class="font-medium">Medium weight</p>
<p class="font-semibold">Semi-bold weight</p>
<p class="font-bold">Bold weight</p>

<!-- Color utilities -->
<p class="text-primary">Primary color</p>
<p class="text-gray-900">Dark gray</p>
<p class="text-gray-500">Medium gray</p>

<!-- Alignment -->
<p class="text-left">Left aligned</p>
<p class="text-center">Center aligned</p>
<p class="text-right">Right aligned</p>
```

---

## Spacing

### Spacing Scale

| Variable | Value | Usage |
|----------|-------|-------|
| `--space-0` | 0 | No spacing |
| `--space-xs` | 8px | Very tight spacing |
| `--space-sm` | 12px | Tight spacing |
| `--space-md` | 16px | Default gap, comfortable |
| `--space-lg` | 20px | Standard padding |
| `--space-xl` | 24px | Large spacing |
| `--space-2xl` | 32px | Section spacing |
| `--space-3xl` | 40px | Major spacing |
| `--space-4xl` | 48px | Large sections |
| `--space-5xl` | 64px | Hero sections |
| `--space-6xl` | 80px | Major dividers |
| `--space-7xl` | 96px | Extra large sections |
| `--space-8xl` | 128px | Maximum spacing |

### Margin Utilities

```html
<!-- Bottom margins -->
<div class="mb-xs">8px bottom margin</div>
<div class="mb-sm">12px bottom margin</div>
<div class="mb-md">16px bottom margin</div>
<div class="mb-lg">20px bottom margin</div>
<div class="mb-xl">24px bottom margin</div>
<div class="mb-2xl">32px bottom margin</div>
<div class="mb-3xl">40px bottom margin</div>

<!-- Top margins -->
<div class="mt-xs">8px top margin</div>
<div class="mt-md">16px top margin</div>
<div class="mt-xl">24px top margin</div>
```

### Section Padding

```html
<!-- Regular section (96px top/bottom) -->
<section class="section">...</section>

<!-- Small section (64px top/bottom) -->
<section class="section-sm">...</section>

<!-- Large section (128px top/bottom) -->
<section class="section-lg">...</section>
```

---

## Components

### Buttons

#### Primary Button
```html
<button class="btn btn-primary">Primary Action</button>
```
- Background: `#4640DE`
- Text: White
- Padding: 12px 24px
- Border radius: 8px
- Hover: Darker + lift effect

#### Secondary Button
```html
<button class="btn btn-secondary">Secondary Action</button>
```
- Background: Transparent
- Border: 1px solid `#4640DE`
- Text: `#4640DE`
- Hover: Light background

#### Outline Button
```html
<button class="btn btn-outline">Outline Action</button>
```
- Background: White
- Border: 1px solid `#CCCCCC`
- Text: Gray
- Hover: Primary border

#### Button Sizes
```html
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary">Default</button>
<button class="btn btn-primary btn-lg">Large</button>
```

### Cards

#### Basic Card
```html
<div class="card">
    <h3>Card Title</h3>
    <p>Card content</p>
</div>
```
- Background: White
- Border: 1px solid `#EBEBEF`
- Border radius: 12-16px
- Padding: 24px

#### Hoverable Card
```html
<div class="card card-hover">
    <h3>Interactive Card</h3>
    <p>Lifts on hover</p>
</div>
```
- Transform: `translateY(-4px)` on hover
- Shadow increase on hover

#### Shadow-Only Card
```html
<div class="card card-no-border">
    <h3>Clean Card</h3>
    <p>No border, just shadow</p>
</div>
```

### Badges

```html
<span class="badge badge-blue">Marketing</span>
<span class="badge badge-purple">Design</span>
<span class="badge badge-orange">Part Time</span>
<span class="badge badge-teal">Technology</span>
<span class="badge badge-primary">Featured</span>
<span class="badge badge-gray">Inactive</span>
```

Properties:
- Padding: 4px 12px
- Border radius: Full (pill shape)
- Font size: 12-14px
- Font weight: 500

### Forms

#### Input Field
```html
<div class="form-group">
    <label class="form-label">Email Address</label>
    <input type="email" class="form-input" placeholder="you@example.com">
</div>
```

#### Textarea
```html
<div class="form-group">
    <label class="form-label">Message</label>
    <textarea class="form-textarea" rows="5"></textarea>
</div>
```

#### Select
```html
<div class="form-group">
    <label class="form-label">Choose Option</label>
    <select class="form-select">
        <option>Option 1</option>
        <option>Option 2</option>
    </select>
</div>
```

Focus state:
- Border: `#4640DE`
- Box shadow: `0 0 0 3px rgba(70,64,222,0.1)`

---

## Layout

### Container

```html
<div class="container">
    <!-- Content constrained to max-width -->
</div>
```
- Max width: 1200px
- Horizontal padding: 20px
- Centered

#### Container Variations
```html
<div class="container container-narrow">
    <!-- Max width: 800px -->
</div>

<div class="container container-wide">
    <!-- Max width: 1400px -->
</div>
```

### Flexbox Utilities

```html
<!-- Flex container -->
<div class="flex items-center justify-between">
    <div>Left</div>
    <div>Right</div>
</div>

<!-- Flex direction -->
<div class="flex flex-col">Column layout</div>
<div class="flex flex-row">Row layout</div>

<!-- Alignment -->
<div class="flex items-start">Align top</div>
<div class="flex items-center">Align center</div>
<div class="flex items-end">Align bottom</div>

<!-- Justify -->
<div class="flex justify-start">Start</div>
<div class="flex justify-center">Center</div>
<div class="flex justify-between">Space between</div>
<div class="flex justify-end">End</div>

<!-- Gap -->
<div class="flex gap-sm">12px gap</div>
<div class="flex gap-md">16px gap</div>
<div class="flex gap-lg">20px gap</div>
<div class="flex gap-xl">24px gap</div>
```

### Grid System

```html
<!-- 2-column grid -->
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

<!-- 4-column grid -->
<div class="grid grid-cols-4 gap-xl">
    <div>Column 1</div>
    <div>Column 2</div>
    <div>Column 3</div>
    <div>Column 4</div>
</div>
```

Grid automatically stacks to 1 column on mobile.

---

## Responsive Design

### Breakpoints

```css
/* Mobile First Approach */
/* Base: < 479px */
.element { }

/* Small: 479px+ */
@media (min-width: 479px) { }

/* Tablet: 768px+ */
@media (min-width: 768px) { }

/* Desktop: 992px+ */
@media (min-width: 992px) { }

/* Large Desktop: 1200px+ */
@media (min-width: 1200px) { }
```

### Responsive Grid Behavior

- **Desktop (992px+):** 3-4 columns
- **Tablet (768-991px):** 2 columns
- **Mobile (< 768px):** 1 column

### Typography Scaling

Font sizes automatically reduce on mobile:
- H1: 38px → 32px → 28px
- H2: 32px → 28px → 24px
- Body: Stays 16px

### Navigation

- **Desktop:** Horizontal menu
- **Mobile (< 768px):** Hamburger menu

---

## Animations

### Transitions

```css
--transition-fast: 0.15s ease
--transition-base: 0.2s ease
--transition-slow: 0.3s ease
--transition-all: all 0.2s ease
```

### Hover Effects

**Buttons:**
- Background color darkens
- Subtle lift (translateY(-2px))
- Shadow increase

**Cards:**
- Transform: translateY(-4px)
- Shadow: sm → xl
- Border color change

**Links:**
- Color change to primary-dark
- Smooth transition

### Scroll Animations

Elements fade in as they enter viewport:
- Opacity: 0 → 1
- Transform: translateY(20px) → translateY(0)
- Stagger delay: 0.1s per item

### Loading States

```css
.loading {
  opacity: 0.6;
  pointer-events: none;
}
```

---

## Accessibility

### Focus States

All interactive elements have visible focus:
```css
:focus {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}
```

### Color Contrast

All text meets WCAG AA standards:
- Primary text: 4.5:1 minimum
- Large text: 3:1 minimum

### Skip Link

Hidden skip link for keyboard users:
```html
<a href="#main" class="skip-link">Skip to main content</a>
```

### ARIA Labels

All interactive elements include appropriate ARIA labels:
```html
<button aria-label="Toggle mobile menu">
    <span class="sr-only">Menu</span>
</button>
```

---

## Best Practices

### DO:
✅ Use CSS custom properties for consistency
✅ Follow the spacing scale
✅ Use semantic HTML elements
✅ Include alt text on images
✅ Test on mobile devices
✅ Maintain color contrast ratios
✅ Use utility classes for quick styling

### DON'T:
❌ Hardcode color values
❌ Use inline styles
❌ Skip heading levels (h1 → h3)
❌ Forget hover states
❌ Ignore mobile viewports
❌ Remove focus outlines
❌ Use low-contrast colors

---

## Quick Reference

### Most Common Classes

```css
/* Layout */
.container, .section, .grid, .flex

/* Typography */
.text-center, .font-bold, .text-primary

/* Spacing */
.mb-xl, .mt-lg, .gap-md

/* Components */
.btn, .card, .badge

/* Utilities */
.hidden, .flex, .items-center
```

### Color Usage Matrix

| Element | Normal | Hover | Active | Disabled |
|---------|--------|-------|--------|----------|
| Primary button | Primary | Primary-dark | Primary-darker | Gray-300 |
| Link | Primary | Primary-dark | Primary-darker | Gray-500 |
| Text | Gray-900 | - | - | Gray-500 |
| Border | Gray-200 | Primary | Primary | Gray-200 |

---

This design system provides a solid foundation for creating consistent, accessible, and beautiful interfaces. All values are customizable through CSS custom properties in `design-system.css`.
