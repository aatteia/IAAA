# Adam Atteia - Portfolio Website

A one-page validation site for Adam Atteia, Lead UX Designer specialising in Australian Government transformation.

## Project Structure

```
adam-atteia-site/
├── index.html          # Main page
├── privacy.html        # Privacy policy
├── CNAME               # Custom domain for GitHub Pages
├── css/
│   └── styles.css      # All styles (design tokens + components)
├── js/
│   └── main.js         # Interactivity (animations, nav, accordions)
├── images/
│   ├── headshots/      # 5 rotating headshot images
│   └── logos/          # 12 client logos
└── README.md           # This file
```

## Features

- **Responsive design**: Desktop sticky header, mobile bottom nav with hide-on-scroll
- **Animated headshot**: 8-frame rotation with hard cuts, respects `prefers-reduced-motion`
- **Accessible**: Skip link, focus-visible states, keyboard navigation, ARIA attributes
- **No dependencies**: Pure HTML/CSS/JS, no build step required
- **No tracking**: No analytics, no cookies

## Local Development

Simply open `index.html` in a browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve .

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## Deploy to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Name it anything you like (e.g., `portfolio` or `adamatteia-site`)
3. Set it to **Public** (required for free GitHub Pages)
4. Click "Create repository"

### Step 2: Upload Files

**Option A: Upload via GitHub web interface**

1. On your new repo page, click "uploading an existing file"
2. Drag all the files from the unzipped `adam-atteia-site` folder
3. Make sure files are at the root level (not inside a subfolder)
4. Click "Commit changes"

**Option B: Upload via command line**

```bash
# Navigate to the unzipped folder
cd adam-atteia-site

# Initialize git and push
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (tab at the top)
3. Scroll down to **Pages** (in the left sidebar)
4. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. GitHub will show you your site URL (e.g., `https://yourusername.github.io/repo-name/`)

Your site will be live in 1-2 minutes.

## Connect Custom Domain

### Step 1: Configure GitHub Pages

1. In your repo, go to **Settings → Pages**
2. Under "Custom domain", enter: `adamatteia.com`
3. Click **Save**
4. Check "Enforce HTTPS" (may take a few minutes to become available)

Note: The `CNAME` file in this repo is already set to `adamatteia.com`. If you use a different domain, edit the CNAME file.

### Step 2: Configure DNS in Squarespace

Go to your Squarespace domain settings and add these DNS records:

**For apex domain (adamatteia.com):**

Add these 4 `A` records pointing to GitHub's IPs:

| Type | Host | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

**For www subdomain (optional but recommended):**

| Type | Host | Value |
|------|------|-------|
| CNAME | www | YOUR-USERNAME.github.io |

Replace `YOUR-USERNAME` with your actual GitHub username.

### Step 3: Wait for DNS Propagation

- Usually takes 15-30 minutes
- Can take up to 48 hours in some cases
- You can check status at [dnschecker.org](https://dnschecker.org)

### Step 4: Verify HTTPS

Once DNS is propagated:
1. Go back to **Settings → Pages**
2. Check "Enforce HTTPS"
3. Your site will be available at `https://adamatteia.com`

## Editing Content

### Text Content

All text is in `index.html`. Safe places to edit:

- **Hero**: Lines 40-50 (title, subtitle)
- **Risk section**: Lines 57-67
- **Capabilities**: Lines 75-120
- **Credibility**: Lines 128-175
- **Testimonials**: Lines 182-220
- **Clients blurb**: Line 230

### Replacing Images

**Headshots:**
1. Add new images to `images/headshots/`
2. Name them with the same pattern: `054.jpg`, `057.jpg`, etc.
3. Update the `data-frame` attributes in `index.html` if names change
4. Update the `frames` array in `js/main.js` if names change

**Logos:**
1. Add new logos to `images/logos/`
2. Update the `<img>` tags in the Clients section of `index.html`
3. Recommended: SVG format, max-height 48px
4. Include meaningful `alt` text

### To avoid layout shift when replacing images:

- Keep headshots the same aspect ratio (or square-ish)
- Keep logos similar in visual weight/size
- Use SVG for logos when possible

## Design Tokens

All design values are CSS custom properties in `css/styles.css`:

```css
:root {
  --color-accent: #0601DB;
  --color-text: #1a1a1a;
  --max-width: 960px;
  --header-height: 64px;
  /* etc. */
}
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- iOS Safari (safe area padding for notched devices)
- Respects `prefers-reduced-motion` for accessibility

## Accessibility

- Skip-to-content link
- Semantic HTML structure
- Focus-visible indicators on all interactive elements
- Keyboard-navigable accordions
- Proper heading hierarchy
- Alt text on images
- ARIA labels where appropriate

---

Built February 2026
