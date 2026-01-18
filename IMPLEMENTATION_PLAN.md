# Implementation Plan: Henry Bestritsky - Digital Trust Engine

## Goal
Build a high-performance, visually stunning "Digital Trust Engine" website for Henry Bestritsky, positioning him as the elite choice for AI strategy. The site will feature advanced interactivity (Hype Toggle, 3D Hero) and a "Cyber-Executive" aesthetic.

## User Review Required
> [!IMPORTANT]
> **Design Philosophy**: The site uses a "Void Black" theme with neon accents. It is significantly darker and more aggressive than standard corporate sites.
> **Content**: The "Hype vs. Reality" toggle requires writing two versions of key headlines. I will implement the first version, but the user may want to refine the copy later.

## Proposed Changes

### Core Infrastructure
#### [NEW] [tailwind.config.ts](file:///c:/Users/Henry/Desktop/Start/PRISMEXEC/henryb/tailwind.config.ts)
- Configure "Void Black" color palette and neon accents.
- Add custom font families (Inter, Space Grotesk, JetBrains Mono).

#### [NEW] [app/layout.tsx](file:///c:/Users/Henry/Desktop/Start/PRISMEXEC/henryb/src/app/layout.tsx)
- Implement global "Hype Context" provider.
- Set up localized fonts.
- Add "Noise" texture overlay for film-grain effect.

### Components
#### [NEW] [components/Navbar.tsx](file:///c:/Users/Henry/Desktop/Start/PRISMEXEC/henryb/src/components/Navbar.tsx)
- Sticky glassmorphism header.
- **Feature**: `HypeSwitch` toggle (Vision/Reality capability).

#### [NEW] [components/Hero.tsx](file:///c:/Users/Henry/Desktop/Start/PRISMEXEC/henryb/src/components/Hero.tsx)
- **Feature**: `NeuralHero` - Canvas/WebGL background with connecting nodes (using lightweight library or CSS animations for performance).
- Dynamic headline that changes based on Hype Switch state.

#### [NEW] [components/ServiceMatrix.tsx](file:///c:/Users/Henry/Desktop/Start/PRISMEXEC/henryb/src/components/ServiceMatrix.tsx)
- Grid layout with hover-reveal cards.
- Includes: Fractional CAO, AI Rescue, MSP Partnership, PE Due Diligence.

#### [NEW] [components/RedPhone.tsx](file:///c:/Users/Henry/Desktop/Start/PRISMEXEC/henryb/src/components/RedPhone.tsx)
- "Panic Button" style contact component.
- Modal for "Critical" project intake.

#### [NEW] [components/MSPCalculator.tsx](file:///c:/Users/Henry/Desktop/Start/PRISMEXEC/henryb/src/components/MSPCalculator.tsx)
- Interactive slider for MSP revenue projection.

### Pages
#### [MODIFY] [app/page.tsx](file:///c:/Users/Henry/Desktop/Start/PRISMEXEC/henryb/src/app/page.tsx)
- Assemble all components into the main landing page flow.
- Implement "Scroll Reveal" animations using Framer Motion.

## Verification Plan

### Automated Tests
- Build verification: `npm run build` to ensure type safety and production readiness.

### Manual Verification
- **Browser Testing**:
    - Open `http://localhost:3000`.
    - Toggle "Hype Switch" -> Verify text and visual theme changes.
    - Click "Red Phone" -> Verify modal opens.
    - Test MSP Calculator -> Verify numbers update smoothly.
    - Check responsiveness on Mobile (375px) and Desktop (1920px).
