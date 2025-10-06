# Blog Components Implementation Task List

## Core Components

### 1. Header/Navigation
- [x] Create `components/ui/header.tsx`
- [x] Implement responsive navigation with mobile hamburger menu
- [x] Add dark mode toggle button
- [x] Include logo component with home link
- [x] Style with Tailwind CSS using sticky positioning

### 2. BlogPost
- [x] Create `components/blog/blog-post.tsx`
- [x] Implement post metadata display (title, date, tags, reading time)
- [x] Add social share buttons component
- [x] Create previous/next post navigation
- [x] Integrate with MarkdownRenderer

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
- [x] Create `components/content/table-of-contents.tsx`
- [x] Extract headings (h2, h3) from markdown content
- [x] Generate anchor IDs for each heading (slug conversion)
- [x] Implement click-to-scroll functionality
- [x] Add active section highlighting (Intersection Observer)
- [x] Style with indentation for heading hierarchy

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
- [x] Create `components/ui/hero-section.tsx`
- [x] Add main title (h1) and subtitle/description (p)
- [x] Support primary and secondary CTA buttons (optional props)
- [x] Implement gradient or neutral background
- [x] Responsive typography (mobile: smaller, desktop: larger)
- [x] Use existing Shadcn Button component
- [x] Implement as Server Component

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
- [x] Create `components/ui/cta-section.tsx`
- [x] Add title and description text
- [x] Support social links array (platform, url, icon)
- [x] Display social icons in horizontal grid/flex layout
- [x] Use Card component or colored background section
- [x] Center-aligned layout
- [x] Implement as Server Component

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

## Detail Page Components

### 14. PostTitle
- [ ] Create `components/blog/post-title.tsx`
- [ ] Display post title with h1 tag
- [ ] Responsive typography (text-4xl lg:text-5xl)
- [ ] Bold font with tracking-tight
- [ ] Server Component

**Props Interface:**
```typescript
interface PostTitleProps {
  title: string
  className?: string
}
```

**Implementation:**
- Extract title section from blog-post.tsx:52-54
- Simple h1 with responsive text sizing
- Use cn() for className merging

### 15. PostMetadata
- [ ] Create `components/blog/post-metadata.tsx`
- [ ] Display date, reading time, author, tags
- [ ] Use Calendar, Clock, User icons from lucide-react
- [ ] Flex layout with gap-4
- [ ] Server Component

**Props Interface:**
```typescript
interface Author {
  name: string
  avatar?: string
}

interface PostMetadataProps {
  date: string
  readingTime: string
  author?: Author
  tags?: string[]
  className?: string
}
```

**Layout:**
- First line: date + reading time + author (horizontal flex)
- Second line: tags (flex-wrap with Badge components)
- Use Separator between metadata items
- Use Avatar component for author avatar

**Implementation:**
- Extract metadata section from blog-post.tsx:56-97
- Reuse existing Badge, Avatar, Separator components
- Keep consistent with blog-post-card.tsx styling

### 16. PostThumbnail
- [ ] Create `components/blog/post-thumbnail.tsx`
- [ ] Use Next.js Image component
- [ ] aspect-video or aspect-[21/9] ratio
- [ ] Responsive image sizing with sizes prop
- [ ] Optional priority prop for LCP optimization
- [ ] Server Component

**Props Interface:**
```typescript
interface PostThumbnailProps {
  src: string
  alt: string
  priority?: boolean
  className?: string
}
```

**Implementation:**
- Use Next.js Image with fill prop
- Container div with aspect-ratio class
- sizes: "(max-width: 768px) 100vw, 1200px"
- No hover effects (unlike blog-post-card)
- Round corners with overflow-hidden

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
- **Avoid over-engineering - keep it simple**