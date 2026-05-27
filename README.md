# N7 Banking – Frontend Implementation

Pixel-perfect implementation of the N7 Banking landing page Figma design.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** (animations)
- **Lucide React** (icons)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Production Build

```bash
npm run build
npm start
```

## Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deployments.

## Project Structure

```
app/
├── components/
│   ├── Navbar.tsx          # Sticky navbar with scroll effect
│   ├── Hero.tsx            # Hero section with banking UI cards
│   ├── Solutions.tsx       # Solutions grid section
│   ├── CoreBanking.tsx     # AML/KYC dashboard mockups
│   ├── Ticker.tsx          # Animated ticker banner
│   ├── DigitalBanking.tsx  # Phone mockups + feature lists + CTA
│   ├── Insights.tsx        # Blog articles + case study carousel
│   └── Footer.tsx          # Footer with offices + links
├── globals.css             # Global styles + CSS variables
├── layout.tsx              # Root layout
└── page.tsx                # Page assembly
```

## Design Decisions

- **Dual-theme**: Dark (#060d16) for hero/solutions/insights, Light (#f0f5fa) for digital banking section — matching Figma exactly
- **CSS Variables** for all brand colors for easy theming
- **Responsive**: Mobile-first with breakpoints at sm (640px), lg (1024px)
- **Animations**: CSS keyframe animations for hero fade-in, ticker, glow pulse; hover transitions on all interactive elements
- **Custom phone mockups**: Built in pure JSX/CSS, no images needed
- **Interactive carousel** in Case Studies section with dot navigation

## Responsive Breakpoints

| Breakpoint | Width | Layout |
|---|---|---|
| Mobile | < 640px | Single column, stacked |
| Tablet | 640–1023px | 2-column grid where applicable |
| Desktop | ≥ 1024px | Full 3-column Figma layout |
