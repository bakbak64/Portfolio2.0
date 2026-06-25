# Aditya Srivastava Portfolio — Design Direction

## Chosen Approach: **"Silicon & Signals"**

### Design Movement
**Brutalist Minimalism meets Glassmorphism** — a fusion of industrial precision (circuit boards, monospace typography, raw geometry) with contemporary AI-forward aesthetics (frosted glass, smooth gradients, kinetic motion). Think: a hardware engineer's terminal window that learned to dance.

### Core Principles
1. **Duality as Structure**: Every visual element reflects the embedded-systems-meets-full-stack duality. Left-aligned "hardware" accents (circuit traces, grid textures) coexist with right-aligned "software" flourishes (glassmorphism, smooth curves).
2. **Monospace as Identity**: Monospace fonts (JetBrains Mono) are not just for code—they appear in section labels, tags, and even some headings to reinforce the engineer's voice.
3. **Precision Over Decoration**: Every pixel serves a purpose. No rounded corners for the sake of it; every curve or line has meaning (PCB traces, signal paths).
4. **Kinetic Subtlety**: Motion is purposeful and restrained. Scroll reveals, LED-like glows on hover, and typewriter effects feel like system diagnostics, not flashy animations.

### Color Philosophy
- **Background**: Near-black (`#0A0B0D`) — the color of a terminal window, a circuit board in shadow, a data center at midnight.
- **Accent (Primary)**: Circuit-board green (`#39FF88`) — electric, unmistakable, used sparingly for interactive elements, glows, and highlights. This is the "signal" color.
- **Secondary Accent**: Signal-blue (`#3DA9FC`) — for secondary CTAs, code blocks, and supporting highlights.
- **Text**: Off-white (`#F2F3F5`) — readable, not harsh white. Maintains the "hardware lab" aesthetic.
- **Rationale**: Avoid purple/violet (overused in AI portfolios). Green + blue evoke precision instruments and real-time monitoring dashboards. The dark background conveys expertise and exclusivity.

### Layout Paradigm
**Asymmetric Scroll-Driven Narrative**
- Hero: Full-width, left-aligned headline with right-side animated circuit SVG.
- About: Narrow column (left 60%), breathing room on right.
- Experience: Vertical timeline with connecting "circuit line" (left edge), cards offset to the right.
- Projects: Alternating left/right layouts (case-study blocks), creating visual rhythm and preventing monotony.
- Skills: Tag cloud (not grid), organic flow, LED-glow on hover.
- Footer: Centered, minimal, echoes the hero's circuit motif.

### Signature Elements
1. **Animated Circuit Traces**: Faint SVG paths that move subtly on scroll/mouse, creating a living texture behind content. Low opacity (`10-15%`), never distracting.
2. **Monospace Section Labels**: `// 01`, `// 02`, styled like PCB silkscreen markings. Animate in as you scroll past.
3. **LED Glow on Hover**: Tech-stack pills and buttons emit a subtle colored glow (green for primary, blue for secondary) on hover, mimicking an LED indicator.

### Interaction Philosophy
- **Scroll is the Primary Narrative**: Every section reveals on scroll with staggered fade/slide-up. No modal popups or jarring transitions.
- **Hover = Feedback**: Buttons scale slightly and emit a glow. Tech pills light up. Links underline with a smooth animation.
- **Custom Cursor**: Small dot + ring on desktop (inspired by data-visualization dashboards). Defaults to native on mobile.
- **Magnetic Buttons**: Primary CTAs subtly follow the cursor on hover, creating a sense of "pull" and engagement.

### Animation Guidelines
- **Scroll Reveals**: Fade + slide-up (30-50px) with 600-800ms ease-out. Stagger list items by 50-80ms.
- **Hover Effects**: 150-200ms ease-out. Buttons scale to 0.98, tech pills glow with `box-shadow: 0 0 12px rgba(57, 255, 136, 0.6)`.
- **Section Numbers**: Slide in from left with opacity fade, triggered at 60% scroll into view.
- **Typewriter Effect**: Hero subline cycles through roles at 80ms per character, 2s pause between lines.
- **Parallax**: Hero background traces move at 0.5x scroll speed, creating subtle depth.
- **Respect `prefers-reduced-motion`**: All animations disabled for users who prefer reduced motion.

### Typography System
- **Display Font**: "Geist" (bold, geometric) for main headline. Conveys modernity and precision.
- **Body Font**: "Geist" (regular, 400-500) for paragraphs. Clean, readable, professional.
- **Monospace Font**: "JetBrains Mono" for labels, tags, code snippets, section numbers. Reinforces the engineer's identity.
- **Hierarchy**:
  - H1 (Hero): 48-56px, bold, Geist
  - H2 (Section): 32-40px, bold, Geist + monospace label (`// 01`)
  - H3 (Subsection): 24-28px, semi-bold, Geist
  - Body: 16px, regular, Geist
  - Labels/Tags: 12-14px, monospace, JetBrains Mono

### Brand Essence
**"The engineer who ships."** For students and professionals bridging low-level systems and high-level AI platforms. Stands out because it's honest, precise, and visually distinctive—not another purple-gradient AI portfolio.

**Personality Adjectives**: Precise, Kinetic, Uncompromising.

### Brand Voice
- **Headlines**: Direct, specific, no filler. "Embedded Systems Engineer. Full-Stack Developer. AI Integrations Builder." (Not: "Passionate about technology.")
- **CTAs**: Action-oriented. "View Projects", "Get in Touch", "Explore Code" (Not: "Learn More", "Get Started").
- **Microcopy**: Conversational but technical. "Bridging bare-metal drivers with AI-powered platforms." (Not: "I love coding!")

**Example Lines**:
1. "Developed bare-metal SPI, I2C, and USART drivers for the STM32F446RE — no HAL, just precision."
2. "5-vital anomaly detection with real-time alerts. Redis caching. JWT role guards. Clinical-grade reliability."

### Wordmark & Logo
**Logo Mark**: Monospace `AS_` with a blinking cursor animation (underscore blinks like a terminal). Rendered in circuit-board green on dark background. No text, just the mark.

**Signature Brand Color**: Circuit-board green (`#39FF88`) — unmistakably this portfolio.

---

## Implementation Checklist
- [ ] Set up Tailwind CSS with custom color palette (near-black, green, blue, off-white)
- [ ] Import Google Fonts: Geist (display/body), JetBrains Mono (monospace)
- [ ] Build Navigation with sticky positioning, smooth scroll, active-section highlight
- [ ] Create Hero with typewriter effect, animated circuit SVG background, CTA buttons
- [ ] Build About section with first-person copy
- [ ] Create Experience timeline with connecting circuit line
- [ ] Build Projects section with alternating left/right case-study layouts
- [ ] Create Skills tag cloud with LED-glow hover effect
- [ ] Build Achievements stat cards
- [ ] Create Contact/Footer with closing headline
- [ ] Add Framer Motion scroll reveals, staggered animations
- [ ] Implement custom cursor (dot + ring)
- [ ] Add magnetic button effect on hover
- [ ] Implement `prefers-reduced-motion` support
- [ ] Test responsive design (375px–1920px)
- [ ] Lighthouse audit: 90+ performance/accessibility
- [ ] SEO: meta tags, Open Graph
- [ ] Deploy to Vercel

---

## Design System Summary
| Element | Value |
|---------|-------|
| Background | `#0A0B0D` |
| Text (Primary) | `#F2F3F5` |
| Accent (Green) | `#39FF88` |
| Accent (Blue) | `#3DA9FC` |
| Display Font | Geist (bold) |
| Body Font | Geist (regular) |
| Monospace Font | JetBrains Mono |
| Border Radius | Minimal (0-4px for functional elements only) |
| Motion Duration | 150-800ms depending on context |
| Cursor | Custom dot + ring (desktop only) |
