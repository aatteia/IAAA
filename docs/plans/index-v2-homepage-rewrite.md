# Plan: index-v2.html — Promotional Homepage Rewrite
**Save to:** `docs/plans/index-v2-homepage-rewrite.md`  
**Prepared in:** Claude chat (Claude Sonnet 4.5), February 2026  
**For implementation by:** Claude Code using the constitution at `docs/ai/constitution.md`  

---

## Goal

Build `index-v2.html` — an alternative homepage that replaces the current `index.html` content with a new content architecture, while using the established design system unchanged.

This is **not a redesign**. The visual language, colour system, typography, spacing tokens, component patterns, and animation behaviours from `css/design-system.css` and `css/components.css` must be preserved exactly. Only the content structure and copy change.

When complete, `index-v2.html` should look like it belongs to the same site as `index.html` while presenting fundamentally different content architecture. Adam will review it locally before deciding whether to replace `index.html`.

---

## Background and Purpose

The site serves a single, specific audience: **Australian Government hiring managers** (APS6–SES level) evaluating Adam as a UX contractor. These are people who have **already read the job application and CV** before visiting the site.

The purpose of the site is therefore **not** to prove skills or replicate the CV. It is to answer the one question the hiring manager has at this point: **"Is this person safe to shortlist?"**

The new content is structured to answer that question across seven sections, each addressing a specific concern in sequence.

The current site has good bones but the wrong content model — it reads like a skills inventory and partially duplicates the CV. The new version reframes everything around the hiring manager's perspective and the specific problem Adam solves.

---

## Files Affected

| File | Action | Notes |
|---|---|---|
| `index-v2.html` | **Create new** | Do not touch `index.html` |
| `css/design-system.css` | Read only | Use tokens; do not modify |
| `css/components.css` | Read only | Reuse patterns; do not modify |
| `js/main.js` | Reference only | Apply the same JS initialisation as `index.html` |

No other files should be modified. No new CSS files. No new JS files. All styling via existing custom properties and component classes.

---

## Preflight Checks (complete before writing any code)

Per the constitution:

1. Read `docs/ai/constitution.md` ✓ (required before any work)
2. Read `index.html` in full — understand current structure, classes, JS initialisation, and component patterns
3. Read `css/design-system.css` — note all relevant custom properties for colour, spacing, typography
4. Read `css/components.css` — note card patterns, section patterns, badge patterns, testimonial patterns
5. Read `js/main.js` — understand what JS initialisation `index-v2.html` will need to include

Do not begin writing `index-v2.html` until all five reads are complete.

---

## Content Architecture

Seven sections in this exact order. Each section maps to a specific question in the hiring manager's mind.

### 1. Hero
**Hiring manager question:** *What does he actually solve?*  
**Visual weight:** High — generous vertical padding, large headline, clear CTA  
**Pattern to use:** Full-width section, dark background, centred or left-aligned text, headshot image  
**Key constraint:** Headshot should use the existing animated headshot rotation from `index.html` — same images, same behaviour  

### 2. How I Work (Approach)
**Hiring manager question:** *How does he work? Will he fit our team?*  
**Visual weight:** Medium-high — three distinct content blocks, each with a heading and paragraph  
**Pattern to use:** Three-card or three-column layout using existing card component patterns  
**Key constraint:** No bullet lists in this section — narrative paragraphs only  

### 3. Where I Add the Most Value (Problems)
**Hiring manager question:** *Has he done our specific type of work?*  
**Visual weight:** Medium — five content cards  
**Pattern to use:** Card grid, matching existing card component styles  
**Key constraint:** Cards are problem/situation-framed, not skill-framed. No tool names, no methodology names.  

### 4. Government Contexts (Contexts)
**Hiring manager question:** *Does he know our world?*  
**Visual weight:** Medium — six context areas, each with a bold heading and two sentences  
**Pattern to use:** Two-column list or definition-style layout; agency names must be visually prominent  
**Key constraint:** Agency names (DoD, ASD, DFAT, AEC, TGA, DAWE, DEWR) must be scannable — they are the primary trust signal in this section  

### 5. Testimonials
**Hiring manager question:** *What do people who've worked with him say?*  
**Visual weight:** Medium — six testimonials  
**Pattern to use:** Existing testimonial component pattern from `index.html` — same markup structure  
**Key constraint:** Attribution lines (name + title) must be visually prominent. "Government Director" and "Government Consultant" titles are trust signals.  

### 6. Credentials and Clearances
**Hiring manager question:** *Is he qualified and cleared?*  
**Visual weight:** Medium-low — factual, clean, scannable  
**Pattern to use:** Use existing badge or credential component patterns where available; otherwise clean list  
**Key constraint:** Security clearances (NV1, DFAT NV2) must be the most visually prominent element in this section — more prominent than qualifications. This is the reverse of the current site.  

### 7. Contact
**Hiring manager question:** *What do I do next?*  
**Visual weight:** Low — brief, confident, no form  
**Pattern to use:** Existing contact/CTA section pattern  
**Key constraint:** Keep it very short — two sentences maximum before the CTA buttons  

---

## Full Copy

All copy below is final and should be implemented verbatim. Do not paraphrase, summarise, or rewrite. If a line seems unusual (e.g. "You've read the CV"), implement it as written — it is intentional.

---

### SECTION 1 — HERO

**Page title (HTML `<title>`):**  
Adam Atteia | Lead UX Designer — Australian Government

**Navigation links (in order):**  
How I work | Where I add value | Government contexts | Testimonials | Credentials | Contact

**Headline (h1):**  
Government programmes need UX leads who already know the terrain.

**Sub-headline (paragraph, prominent):**  
Complex legacy systems. Regulated environments. Stakeholders who need to be brought along, not pushed aside. This is where I do my best work.

**Body paragraph:**  
You've read the CV. You know the agencies I've worked with and the programmes I've contributed to. What the CV can't tell you is how I approach the work — and why that matters for your programme. That's what this site is for.

**CTA button text:**  
How I work ↓

**CTA button href:**  
#approach

---

### SECTION 2 — HOW I WORK

**Section anchor:** `#approach`  
**Nav label:** How I work

**Section heading (h2):**  
How I work

**Intro paragraph:**  
Government UX work is not about beautiful screens. It is about reducing the risk that a programme slips, a stakeholder escalates, or a system launches with problems that could have been caught earlier.

**Card 1 heading (h3):**  
I start with the constraints, not the ideal state.

**Card 1 body:**  
Legacy systems, security classifications, procurement timelines, WCAG requirements, and operational realities are not obstacles to good design — they are the design brief. I begin every engagement by mapping what cannot change, and build from there. That means fewer surprises in delivery and fewer conversations that start with "we can't do it that way."

**Card 2 heading (h3):**  
I align stakeholders through evidence, not persuasion.

**Card 2 body:**  
Government programmes involve people with different agendas, different levels of authority, and different tolerances for ambiguity. I use structured workshops, usability testing, and documented decision logs to move alignment from a conversation to a record. When a design decision is questioned six months later, the evidence is there.

**Card 3 heading (h3):**  
I hand over work that the team can own.

**Card 3 body:**  
Contractors leave. What matters is what they leave behind. I build design systems, documented patterns, and annotated specifications that your APS staff and ongoing delivery partners can pick up and run with. The goal is a programme that does not depend on me being in the room.

---

### SECTION 3 — WHERE I ADD THE MOST VALUE

**Section anchor:** `#problems`  
**Nav label:** Where I add value

**Section heading (h2):**  
Where I add the most value

**Intro paragraph:**  
Not every UX problem is the same. These are the situations where I consistently deliver the strongest outcomes.

**Card 1 heading (h3):**  
Legacy system modernisation

**Card 1 body:**  
When a system has been built up over years — or decades — the interfaces carry the weight of every workaround, exception, and undocumented process that came before. I untangle that complexity without losing the operational knowledge embedded in it, and translate it into interfaces that are simpler to use and easier to maintain.

**Card 2 heading (h3):**  
High-stakes regulated environments

**Card 2 body:**  
Defence, border security, electoral systems, therapeutic goods — these are environments where errors have real consequences and where compliance is not optional. I design with audit trails, accessibility standards, and security constraints treated as first-class requirements, not afterthoughts.

**Card 3 heading (h3):**  
Programmes under delivery pressure

**Card 3 body:**  
When a programme is already moving and UX needs to catch up, I integrate quickly into existing agile teams, establish a working rhythm fast, and produce usable artefacts from the first sprint. I don't need a discovery phase to contribute.

**Card 4 heading (h3):**  
Cross-agency and multi-stakeholder services

**Card 4 body:**  
Some of the most difficult UX work happens at the boundaries between agencies — where data, responsibilities, and user journeys cross organisational lines. I have worked across DFAT, DAWE, DEWR, TGA, and AEC programmes that required alignment across multiple business owners, state offices, and technical teams.

**Card 5 heading (h3):**  
Design systems for government

**Card 5 body:**  
Building a design system in a government context means navigating procurement, accessibility legislation, branding standards, and the realities of a multi-vendor delivery environment. I have built and contributed to design systems that have outlasted individual programme phases and continue to be used by teams I no longer work with.

---

### SECTION 4 — GOVERNMENT CONTEXTS

**Section anchor:** `#contexts`  
**Nav label:** Government contexts

**Section heading (h2):**  
The government contexts I know deeply

**Intro paragraph:**  
Australian Government UX work has its own culture, constraints, and vocabulary. Panel arrangements, APS stakeholder dynamics, security clearance environments, the Digital Service Standard, and the pace of transformation programmes — these are not things you learn from a textbook. They are things you learn by being embedded in the work, over time, across multiple agencies. I have been doing that work since 2011.

**Context 1 — bold label + body:**  
**National security and defence**  
DoD, ASD, DFAT — classified environments, NV1/NV2/TSPV requirements, strict information handling, and stakeholders with very low tolerance for ambiguity or rework.

**Context 2:**  
**Electoral and democratic systems**  
Australian Electoral Commission — high-reliability, high-consequence systems with non-negotiable election event timelines. Complex operational workflows across national, state, and divisional levels.

**Context 3:**  
**Regulatory and compliance agencies**  
Therapeutic Goods Administration, Department of Agriculture — environments where every interface decision has downstream compliance implications, and where user error carries real regulatory risk.

**Context 4:**  
**Foreign affairs and trade**  
DFAT — global user bases, complex internal management systems, classification-sensitive environments, and the challenge of designing for staff operating across dozens of countries and contexts.

**Context 5:**  
**Employment and skills policy**  
Department of Employment and Workplace Relations, NCVER — cross-jurisdictional data systems, multi-stakeholder VET sector, and the particular complexity of designing for policy implementation at scale.

**Context 6:**  
**Whole-of-government digital platforms**  
ACT Government CMTEDD, Atlas of Living Australia — shared services environments, citizen-facing platforms, and the challenge of serving diverse user cohorts within constrained infrastructure.

---

### SECTION 5 — TESTIMONIALS

**Section anchor:** `#testimonials`  
**Nav label:** Testimonials

**Section heading (h2):**  
What colleagues say

**Testimonial 1:**  
Quote: "Adam is highly professional, attentive to nuance, and asks the right questions to understand the business context and achieve UX outcomes."  
Name: Elisa  
Title: Director, Customer Experience

**Testimonial 2:**  
Quote: "One of Adam's greatest strengths is his expertise in experience design and his understanding of the end-to-end design process."  
Name: Tim  
Title: Experience Strategy Consultant

**Testimonial 3:**  
Quote: "Adam's ability to clearly articulate requirements, and to seek clarification from the client ahead of the build sprint, was crucial."  
Name: Mubin  
Title: Government Consultant

**Testimonial 4:**  
Quote: "Adam is a true UX professional. He strikes the right balance between building empathy with target users and creatively designing experiences to meet their needs — often in delightful ways."  
Name: Lachlan  
Title: User Experience Lead

**Testimonial 5:**  
Quote: "Adam is a confident communicator who can explain and unpack complex ideas and designs for any audience."  
Name: Jack  
Title: Government Director

**Testimonial 6:**  
Quote: "Adam has excellent attention to detail, and works collaboratively with clients to produce outcomes that suit their needs."  
Name: Rebecca  
Title: Government Director

---

### SECTION 6 — CREDENTIALS AND CLEARANCES

**Section anchor:** `#credentials`  
**Nav label:** Credentials

**Section heading (h2):**  
Credentials and clearances

**Clearances subsection heading (h3) — visually most prominent in this section:**  
Security clearances

**Clearances list:**  
- NV1 — Negative Vetting Level 1, Australian Government  
- DFAT NV2 — Department of Foreign Affairs and Trade Negative Vetting Level 2  

**Clearances note (small text below list):**  
CSID available on request.

**Qualifications subsection heading (h3):**  
Qualifications

**Qualifications list:**  
- UX Certification — Nielsen Norman Group (UXC# 1009964) — 2017  
- Google UX Design Professional Certificate — Coursera — 2025  
- Bachelor of Graphic Design — University of Canberra — 2001  
- Bachelor of Interactive Multimedia and New Media — University of Canberra — 2001  

**Professional development subsection heading (h3):**  
Professional development

**Professional development list:**  
- LUMA Institute — Design Thinking Fundamentals — 2018  
- Microsoft — Power Platform Fundamentals PL-900 — 2021  
- Nielsen Norman Group — UX Certification Training — 2015–2017  
- Avanade U — Design Thinking Fundamentals — 2020  

---

### SECTION 7 — CONTACT

**Section anchor:** `#contact`  
**Nav label:** Contact

**Section heading (h2):**  
Let's talk about your programme

**Body paragraph:**  
If you have a programme that needs an experienced government UX lead — cleared, Canberra-based, and ready to contribute from day one — I'd welcome a conversation.

**CTA 1 — text:** Email me  
**CTA 1 — href:** mailto:adam.atteia@gmail.com

**CTA 2 — text:** Connect on LinkedIn  
**CTA 2 — href:** https://www.linkedin.com/in/adamatteia/

---

### FOOTER

**Footer copy:**  
Website design and content © 2026 Adam Atteia.

**Footer links:**  
Home | Style guide (style-guide.html) | Privacy (privacy.html)

---

## Structural and Layout Notes

These notes supplement the copy. They describe intent, not prescription — Claude Code should use existing component patterns that best match this intent.

**Hero section:**  
More vertical breathing room than the current hero. The headline is a statement, not a tagline — it should feel unhurried and confident. The headshot should use the existing animated rotation logic from `index.html` (same images, same JS behaviour). The "You've read the CV" paragraph is intentional — do not remove or soften it.

**How I Work section:**  
Three cards with h3 headings and full paragraphs. No bullet points inside cards. The three cards should feel like a considered sequence, not a list of features. If the design system has a three-column card pattern, use it. If not, use the closest available pattern.

**Where I Add the Most Value section:**  
Five cards. Problem/situation headings followed by two-sentence explanations. Cards should be consistent in height where possible. No icons required — the headings carry the weight.

**Government Contexts section:**  
This section is primarily about making agency names scannable. The bold context label (e.g. "National security and defence") should be clearly distinct from the body text. A two-column layout works well at desktop width. Agency names within the body text do not need special styling — the bold label above them provides enough structure.

**Testimonials section:**  
Use the same testimonial component pattern as `index.html`. Attribution (Name + Title) should be visually prominent — the titles "Government Director" and "Government Consultant" are trust signals and should not be visually subordinate to the quote.

**Credentials section:**  
The clearances subsection must be the most visually prominent element — more prominent than qualifications. Consider a subtle visual treatment (a card, a highlighted background, a badge) to distinguish NV1 and DFAT NV2 from the credential list items below. The current site buries this information — the new version should surface it immediately.

**Contact section:**  
Very short. Two CTA buttons matching existing button styles. No contact form. No social proof. Just a calm, confident close.

**Navigation:**  
Update nav links to match the new section anchors: `#approach`, `#problems`, `#contexts`, `#testimonials`, `#credentials`, `#contact`. Nav labels as listed in the copy above.

**Clients / logo grid:**  
Include the existing client logo grid between Testimonials and Credentials, using the same markup and images as `index.html`. Section heading: "In the company of good work". Supporting line: "Programmes and organisations I have contributed to across Australian Government, enterprise, and education."

---

## What This Brief Does Not Cover

The following are explicitly out of scope for this task:

- Any changes to `css/design-system.css` or `css/components.css`
- Any changes to `js/main.js`
- Any changes to `index.html`
- New image assets (use existing headshots and logos)
- New fonts (use existing Archivo + Inter)
- New colour tokens
- New animation behaviours

If implementing any section of the copy requires a new CSS pattern not in the existing design system, **stop and flag it** rather than introducing ad-hoc styles. The decision about whether to extend the design system belongs to Adam.

---

## Acceptance Criteria

`index-v2.html` is complete when:

1. All seven sections are present with copy implemented verbatim
2. Navigation links correctly anchor to all seven sections
3. Animated headshot rotation works (same behaviour as `index.html`)
4. Client logo grid is present between Testimonials and Credentials
5. All CSS uses custom properties from `design-system.css` — no hardcoded values
6. HTML is semantic: correct heading hierarchy (one h1, h2 per section, h3 for sub-items)
7. Page works without JavaScript (progressive enhancement)
8. `prefers-reduced-motion` is respected for animations
9. Accessibility: skip link present, ARIA labels on icon buttons, sufficient contrast
10. Footer present with correct links
11. Page title is "Adam Atteia | Lead UX Designer — Australian Government"
12. The file opens correctly when accessed directly in a browser (no server required)

---

## Suggested Sequence for Implementation

1. Read `docs/ai/constitution.md`
2. Read `index.html`, `css/design-system.css`, `css/components.css`, `js/main.js`
3. Present a brief implementation plan to Adam for approval (per constitution Section I.2)
4. Create `index-v2.html` starting from the `index.html` structure
5. Replace content section by section, in order (Hero → Approach → Problems → Contexts → Testimonials → Clients → Credentials → Contact)
6. Verify heading hierarchy, anchor IDs, and nav links
7. Verify no hardcoded CSS values
8. Present the completed file with a summary of what was built and manual testing steps

---

*Brief prepared in Claude chat, February 2026. Implements content strategy developed using UX persona and empathy map for Australian Government hiring managers.*
