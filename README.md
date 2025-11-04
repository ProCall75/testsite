# Alfred.ai Hero Page

A premium Liquid Glass hero section for Alfred.ai built with Next.js, ShadCN UI, and Tailwind CSS.

## Features

- **Liquid Glass Design**: Translucent, layered interface with realistic light diffusion and soft edge highlights
- **Apple-inspired Aesthetics**: Clean, premium design with subtle animations
- **Fully Responsive**: Optimized for all screen sizes from mobile to desktop
- **Accessible**: WCAG compliant with proper semantic HTML and ARIA labels

## Tech Stack

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- ShadCN UI
- Radix UI primitives

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the page.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
/app
  /layout.tsx          # Root layout with metadata and fonts
  /page.tsx            # Main page component
  /globals.css         # Global styles and glass effect utilities
/components
  /ui                  # ShadCN components (button, card)
  /navbar.tsx          # Navigation bar component
  /hero.tsx            # Hero section component
  /golden-orb.tsx      # Golden orb decorative element
/lib
  /utils.ts            # Utility functions (cn helper)
/tailwind.config.ts    # Tailwind configuration
/components.json       # ShadCN configuration
```

## Design System

### Colors

- Background: `#FFF9F2` (warm cream)
- Foreground: `#1A1A1A` (dark gray)
- Gold Accent: `#D4AF37`

### Typography

- Primary Font: Inter (with SF Pro Display and Söhne as fallbacks)
- Font weights: Medium (headlines), Regular (body)

### Glass Effects

The design uses custom CSS utilities for liquid glass effects:
- `.glass-base`: Base glass surface
- `.glass-gold`: Gold-accented glass
- `.glass-button`: Button glass variant
- `.glass-navbar`: Navbar-specific glass

## Customization

To modify colors, fonts, or glass effects, edit:
- `tailwind.config.ts` for color palette and theme
- `app/globals.css` for CSS variables and glass utilities
- Component files for specific styling adjustments

