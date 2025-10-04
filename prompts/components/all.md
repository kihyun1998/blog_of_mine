# Blog Components Implementation Task List

## Core Components

### 1. Header/Navigation
- [x] Create `components/ui/header.tsx`
- [x] Implement responsive navigation with mobile hamburger menu
- [x] Add dark mode toggle button
- [x] Include logo component with home link
- [x] Style with Tailwind CSS using sticky positioning

### 2. BlogPost
- [ ] Create `components/blog/blog-post.tsx`
- [ ] Implement post metadata display (title, date, tags, reading time)
- [ ] Add social share buttons component
- [ ] Create previous/next post navigation
- [ ] Integrate with MarkdownRenderer

### 3. BlogPostCard
- [x] Create `components/blog/blog-post-card.tsx`
- [x] Add thumbnail image support
- [x] Implement hover effects with smooth transitions
- [x] Display title, excerpt, date, and tags
- [x] Add reading time estimation

### 4. BlogPostList
- [x] Create `components/blog/blog-post-list.tsx`
- [x] Implement grid layout for post cards
- [x] Add simple pagination component
- [x] Include sort options (latest, popular)

### 5. Footer
- [x] Create `components/ui/footer.tsx`
- [x] Add social media links
- [x] Include contact information
- [x] Simple copyright notice

## Content Components

### 6. MarkdownRenderer
- [x] Create `components/content/markdown-renderer.tsx`
- [x] Install and configure `react-markdown`
- [x] Add `remark-gfm` for GitHub Flavored Markdown
- [x] Custom styling for markdown elements

### 7. CodeBlock
- [x] Create `components/content/code-block.tsx`
- [x] Install `prismjs` and required language plugins
- [x] Implement copy to clipboard functionality
- [x] Add language label display
- [x] Style code blocks with proper theming

### 8. SearchBar
- [x] Create `components/ui/search-bar.tsx`
- [x] Implement basic text input with search icon
- [x] Add debounced search functionality
- [x] Simple results dropdown

### 9. TableOfContents
- [ ] Create `components/content/table-of-contents.tsx`
- [ ] Extract headings (h2, h3) from markdown content
- [ ] Generate anchor IDs for each heading (slug conversion)
- [ ] Implement click-to-scroll functionality
- [ ] Add active section highlighting (Intersection Observer)
- [ ] Style with indentation for heading hierarchy

## Layout Components

### 10. Container
- [x] Create `components/ui/container.tsx`
- [x] Implement responsive max-width container
- [x] Add proper padding and margin utilities
- [x] Support different container sizes

### 11. Pagination
- [x] Create `components/ui/pagination.tsx`
- [x] Simple numbered pagination with prev/next
- [x] Highlight current page
- [x] Mobile-responsive design

## Home Page Components

### 12. Hero Section
- [ ] Create `components/ui/hero-section.tsx`
- [ ] Add main title (h1) and subtitle/description (p)
- [ ] Support primary and secondary CTA buttons (optional props)
- [ ] Implement gradient or neutral background
- [ ] Responsive typography (mobile: smaller, desktop: larger)
- [ ] Use existing Shadcn Button component
- [ ] Implement as Server Component

**Props Interface:**
```typescript
interface HeroSectionProps {
  title: string
  description: string
  primaryCta?: { text: string; href: string }
  secondaryCta?: { text: string; href: string }
}
```

**Layout:**
- Full-width section with Container wrapper
- Center-aligned content
- Vertical spacing: py-16 md:py-24
- Title: text-4xl md:text-6xl font-bold
- Description: text-lg md:text-xl text-muted-foreground

### 13. CTA Section
- [ ] Create `components/ui/cta-section.tsx`
- [ ] Add title and description text
- [ ] Support social links array (platform, url, icon)
- [ ] Display social icons in horizontal grid/flex layout
- [ ] Use Card component or colored background section
- [ ] Center-aligned layout
- [ ] Implement as Server Component

**Props Interface:**
```typescript
interface CTASectionProps {
  title: string
  description: string
  socialLinks: Array<{
    platform: string
    url: string
    icon: ReactNode
  }>
}
```

**Layout:**
- Card-based or background section
- Center-aligned content
- Social links: flex gap-4 justify-center
- Icon size: 24px (Lucide icons)
- Vertical spacing: py-12 md:py-16
- Place above Footer in page layout

## Implementation Notes

- Use Shadcn/ui components where possible
- Follow TypeScript strict mode
- Use Tailwind CSS for all styling
- Implement dark mode support
- Keep components simple and focused
- Use Next.js App Router patterns
- Add proper prop types and interfaces
- **Prioritize Server Components over Client Components**
- **NO emojis in design or code**