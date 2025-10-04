# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## IMPORTANT
- ALWAYS use Shadcn MCP to create UI
- ALWAYS ask user for permission when implementing a plan
- NEVER use emoji for design.
- ALWAYS prioritize server component over client component
- ALWAYS add implemented common components to app/components-demo/page.tsx for verification

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
├── components/
│   ├── ui/                           # 범용 UI 컴포넌트 (Shadcn/ui 포함)
│   │   ├── header.tsx               # Header/Navigation
│   │   ├── footer.tsx               # Footer
│   │   ├── container.tsx            # Layout container
│   │   ├── search-bar.tsx           # Search bar
│   │   ├── pagination.tsx           # Pagination component
│   │   ├── hero-section.tsx         # Hero section for home page
│   │   ├── cta-section.tsx          # CTA section with social links
│   │   └── ...                      # Shadcn/ui components (button, card, etc.)
│   ├── blog/                         # 블로그 핵심 컴포넌트
│   │   ├── blog-post.tsx            # Individual post full rendering
│   │   ├── blog-post-card.tsx       # Post card for list view
│   │   ├── blog-post-list.tsx       # Post list with grid layout
│   │   └── post-navigation.tsx      # Previous/Next post navigation
│   ├── content/                      # 콘텐츠 렌더링
│   │   ├── markdown-renderer.tsx    # Markdown rendering component
│   │   ├── code-block.tsx           # Code block with syntax highlighting
│   │   ├── copy-button.tsx          # Copy to clipboard button
│   │   └── table-of-contents.tsx    # Table of contents component
│   ├── shared/                       # 작은 재사용 컴포넌트
│   │   ├── theme-toggle.tsx         # Dark mode toggle
│   │   ├── social-share.tsx         # Social share buttons
│   │   └── reading-time.tsx         # Reading time display
│   └── providers/                    # 프로바이더
│       └── theme-provider.tsx       # Theme provider
└── lib/
    └── utils.ts             # Utility functions (cn helper)

```

### Component Organization Strategy

- **ui/**: General-purpose UI components including Shadcn/ui components and custom layout components (Header, Footer, Container, Hero, CTA sections, etc.)
- **blog/**: Blog-specific core components (BlogPost, BlogPostCard, BlogPostList, PostNavigation)
- **content/**: Content rendering components (MarkdownRenderer, CodeBlock, TableOfContents)
- **shared/**: Small reusable utility components used across multiple features (ThemeToggle, SocialShare, ReadingTime)
- **providers/**: Context providers (ThemeProvider)

### Implementation Phase Recommendations

1. **Phase 1 (Basic Layout)**: Container, Header, Footer
2. **Phase 2 (Content Rendering)**: MarkdownRenderer, CodeBlock
3. **Phase 3 (Blog Core)**: BlogPost, BlogPostCard, BlogPostList
4. **Phase 4 (Additional Features)**: SearchBar, Pagination, shared components
5. **Phase 5 (Home Page)**: HeroSection, CTASection
6. **Phase 6 (Enhancement)**: TableOfContents, SocialShare

## Development Notes

- The project uses Turbopack for both development and build processes
- TypeScript strict mode is enabled
- CSS classes should use the `cn()` utility from `@/lib/utils` for conditional styling
- New UI components should follow Shadcn/ui patterns and be placed in `@/components/ui`