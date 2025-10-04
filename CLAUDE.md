# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## IMPORTANT
- ALWAYS use Shadcn MCP to create UI
- ALWAYS ask user for permission when implementing a plan
- NEVER use emoji for design.
- ALWAYS prioritize server component over client component

## Project Overview

This is a Next.js 15 blog application built with TypeScript, Tailwind CSS, and Shadcn/ui components. The project uses the App Router architecture and is configured for Turbopack development.

## Development Commands

- **Start development server**: `npm run dev` (uses Turbopack for faster builds)
- **Build for production**: `npm run build` (uses Turbopack)
- **Start production server**: `npm start`

## Project Architecture

### Core Structure
- **App Router**: Uses Next.js 15 App Router (`app/` directory)
- **Styling**: Tailwind CSS v4 with custom CSS variables and Shadcn/ui integration
- **Typography**: Geist Sans and Geist Mono fonts from Vercel
- **Icons**: Lucide React icon library
- **UI Components**: Shadcn/ui with "new-york" style variant

### Key Directories
- `app/`: Next.js App Router pages and layouts
- `lib/`: Utility functions (includes `cn` helper for className merging)
- `components/`: UI components (configured for Shadcn/ui structure)
- `public/`: Static assets

### Configuration Files
- `components.json`: Shadcn/ui configuration with path aliases
- `tsconfig.json`: TypeScript config with `@/*` path mapping
- `next.config.ts`: Next.js configuration (currently minimal)

### Shadcn/ui Setup
The project is configured with:
- Style: "new-york"
- Base color: "neutral" 
- CSS variables enabled
- Path aliases: `@/components`, `@/lib/utils`, `@/components/ui`, etc.

### Font Configuration
Uses Next.js font optimization with:
- Geist Sans (`--font-geist-sans` CSS variable)
- Geist Mono (`--font-geist-mono` CSS variable)

## Project Structure

```
blog_of_mine/
├── app/
│   ├── globals.css          # Global Tailwind CSS styles
│   ├── layout.tsx           # Root layout with font configuration
│   └── page.tsx             # Home page component
└── lib/
    └── utils.ts             # Utility functions (cn helper)

```

## Development Notes

- The project uses Turbopack for both development and build processes
- TypeScript strict mode is enabled
- CSS classes should use the `cn()` utility from `@/lib/utils` for conditional styling
- New UI components should follow Shadcn/ui patterns and be placed in `@/components/ui`