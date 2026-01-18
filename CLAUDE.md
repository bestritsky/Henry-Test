# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build with type checking
npm run lint     # Run ESLint
npm start        # Run production server
```

## Architecture

This is a **Next.js 16 App Router** project for Henry Bestritsky's AI consulting practice. The site targets three audiences: executives needing AI strategy, MSPs wanting to offer AI services, and PE firms doing AI due diligence.

### Key Sections

1. **Hero** - Leads with the 95% AI failure stat and positions Henry as the experienced operator (Binary Tree CEO, Quest acquisition)
2. **ServiceMatrix** - Four core services with pricing signals: Fractional CAO, AI Readiness Assessment, AI Rescue Operations, PE Due Diligence
3. **MSPCalculator** - "Solution Builder" partnership model for managed service providers
4. **RedPhone** - Triage request form for failing AI projects
5. **Contact** - Direct contact and meeting scheduling

### Technical Patterns

**Path Alias**: Use `@/*` for imports from `src/` (configured in tsconfig.json).

**Styling**: Tailwind CSS 4 with custom "Void Black" theme. Use `cn()` utility from `@/lib/utils` for conditional class merging.

**Typography**: Three font families available via CSS variables:
- `--font-inter` - Body text
- `--font-space-grotesk` - Headings
- `--font-jetbrains-mono` - Code/data accents

**Animations**: Framer Motion for scroll-triggered animations and modals.

### Component Structure

```
src/
├── app/
│   ├── layout.tsx    # Root layout with fonts, noise overlay
│   ├── page.tsx      # Main landing page with all sections
│   └── globals.css   # Tailwind config and custom styles
├── components/
│   ├── Navbar.tsx    # Fixed navigation header
│   ├── Hero.tsx      # Hero section with credibility signals
│   ├── ServiceMatrix.tsx  # Service cards grid
│   ├── MSPCalculator.tsx  # MSP partnership section with calculator
│   └── RedPhone.tsx  # AI Rescue triage section
└── lib/
    └── utils.ts      # cn() utility (clsx + tailwind-merge)
```

### Design System

- **Background**: Void black (#030305)
- **Primary**: Photon blue (#6366f1)
- **Accent**: Purple (#8b5cf6) for MSP section
- **Alert**: Red (#ef4444) for Rescue section
- **Success**: Emerald (#10b981) for PE section
- **Effects**: Noise overlay, glassmorphism, subtle glows
- **Icons**: lucide-react
