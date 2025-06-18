# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Architecture

This is a Next.js 15 application for "Fosse Creative" - a web design agency website built with modern React patterns and shadcn/ui components.

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Fonts**: Mona Sans (body) and Inter (headings)
- **Animations**: Framer Motion + Tailwind CSS animations

### Project Structure
- `app/` - Next.js App Router pages and layouts
- `components/` - React components (sections + UI primitives)
- `components/ui/` - shadcn/ui components
- `lib/utils.ts` - Utility functions (mainly `cn` for className merging)
- `hooks/` - Custom React hooks

### Component Architecture
The main page (`app/page.tsx`) is composed of section components:
- `HeroSection` - Landing hero
- `ServicesSection` - Services overview
- `WorkSection` - Portfolio/work examples  
- `AboutSection` - About company
- `TestimonialsSection` - Client testimonials
- `ContactSection` - Contact form/info

### Styling Patterns
- Uses CSS custom properties for theming (defined in `app/globals.css`)
- Consistent use of `cn()` utility for conditional/merged classes
- shadcn/ui design system with neutral base color
- Custom animations: `float`, `pulse-slow`
- Responsive design with mobile-first approach

### State Management
- Client components use React hooks for local state
- Scroll state tracking in Navbar for backdrop blur effect
- Mobile navigation using shadcn/ui Sheet component

### Path Aliases
- `@/*` maps to project root for clean imports
- All components imported using `@/components/*` pattern