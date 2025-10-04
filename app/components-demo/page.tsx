import { ThemeProvider } from "@/components/providers/theme-provider";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Container } from "@/components/ui/container";
import { BlogPostCard } from "@/components/blog/blog-post-card";
import { BlogPostList } from "@/components/blog/blog-post-list";
import { BlogPost } from "@/components/blog/blog-post";
import { MarkdownRenderer } from "@/components/content/markdown-renderer";
import { CodeBlock } from "@/components/content/code-block";
import { SearchBarDemo } from "@/components/demo/search-bar-demo";
import { Pagination } from "@/components/ui/pagination";
import { PaginationClient } from "@/components/ui/pagination-client";

const THUMB_COUNT = 2;
const getRandomThumb = () => `/thumb/thumb${Math.floor(Math.random() * THUMB_COUNT) + 1}.jpg`;

export default function ComponentsDemoPage() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1 py-12">
          <Container>
            <div className="space-y-12">
              <section>
                <h1 className="text-4xl font-bold mb-4">Components Demo</h1>
                <p className="text-muted-foreground">
                  Phase 1 components showcase: Header, Footer, Container, and Theme Toggle
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Container Sizes</h2>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Small (max-w-3xl)</p>
                    <Container size="sm" className="bg-muted p-4 rounded-lg">
                      <p className="text-sm">This is a small container</p>
                    </Container>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Medium (max-w-5xl)</p>
                    <Container size="md" className="bg-muted p-4 rounded-lg">
                      <p className="text-sm">This is a medium container</p>
                    </Container>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Large (max-w-7xl) - Default</p>
                    <Container size="lg" className="bg-muted p-4 rounded-lg">
                      <p className="text-sm">This is a large container (default)</p>
                    </Container>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Extra Large (max-w-[1536px])</p>
                    <Container size="xl" className="bg-muted p-4 rounded-lg">
                      <p className="text-sm">This is an extra large container</p>
                    </Container>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Full Width (max-w-full)</p>
                    <Container size="full" className="bg-muted p-4 rounded-lg">
                      <p className="text-sm">This is a full width container</p>
                    </Container>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Header Features</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Sticky positioning at the top</li>
                  <li>Desktop navigation (visible on md+ screens)</li>
                  <li>Mobile hamburger menu (visible on small screens)</li>
                  <li>Theme toggle button (try switching between light/dark mode)</li>
                  <li>Responsive layout with Container component</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Footer Features</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Social media links (GitHub, Twitter, LinkedIn)</li>
                  <li>Copyright notice with current year</li>
                  <li>Responsive flex layout (column on mobile, row on desktop)</li>
                  <li>Hover effects on social icons</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Theme Toggle</h2>
                <div className="p-6 border rounded-lg space-y-4">
                  <p className="text-muted-foreground">
                    The theme toggle button in the header allows you to switch between:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Light mode (Sun icon when in dark mode)</li>
                    <li>Dark mode (Moon icon when in light mode)</li>
                    <li>System preference (default)</li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    Try clicking the theme toggle button in the header to see it in action!
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">BlogPostCard Component</h2>
                <p className="text-muted-foreground mb-4">
                  A reusable card component for displaying blog post previews with thumbnail, metadata, and tags.
                </p>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <BlogPostCard
                    title="Getting Started with Next.js 15"
                    excerpt="Learn how to build modern web applications with Next.js 15, featuring the new App Router, Server Components, and improved performance."
                    date="2024-03-15"
                    tags={["Next.js", "React", "Tutorial"]}
                    slug="getting-started-nextjs-15"
                    thumbnail={getRandomThumb()}
                    readingTime={5}
                  />
                  <BlogPostCard
                    title="TypeScript Best Practices for 2024"
                    excerpt="Discover the latest TypeScript patterns and best practices to write more maintainable and type-safe code in your projects."
                    date="2024-03-10"
                    tags={["TypeScript", "Best Practices"]}
                    slug="typescript-best-practices-2024"
                    thumbnail={getRandomThumb()}
                    readingTime={8}
                  />
                  <BlogPostCard
                    title="Building Responsive UIs with Tailwind CSS"
                    excerpt="Master responsive design with Tailwind CSS utility classes and create beautiful, mobile-first user interfaces."
                    date="2024-03-05"
                    tags={["CSS", "Tailwind", "Design"]}
                    slug="responsive-ui-tailwind"
                    thumbnail={getRandomThumb()}
                    readingTime={6}
                  />
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">BlogPostCard Features</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Thumbnail image support with Next.js Image optimization</li>
                  <li>Smooth hover effects (shadow and translate-y animation)</li>
                  <li>Image scale-up effect on hover</li>
                  <li>Display of title, excerpt, date, and tags</li>
                  <li>Reading time estimation with clock icon</li>
                  <li>Responsive design with proper aspect ratios</li>
                  <li>Line-clamp for text overflow handling</li>
                  <li>Badge components for tags with secondary variant</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">BlogPostList Component</h2>
                <p className="text-muted-foreground mb-4">
                  A grid layout component for displaying multiple blog posts with sorting options.
                </p>
                <BlogPostList
                  posts={[
                    {
                      title: "Getting Started with Next.js 15",
                      excerpt: "Learn how to build modern web applications with Next.js 15, featuring the new App Router, Server Components, and improved performance.",
                      date: "2024-03-15",
                      tags: ["Next.js", "React", "Tutorial"],
                      slug: "getting-started-nextjs-15",
                      thumbnail: getRandomThumb(),
                      readingTime: 5,
                    },
                    {
                      title: "TypeScript Best Practices for 2024",
                      excerpt: "Discover the latest TypeScript patterns and best practices to write more maintainable and type-safe code in your projects.",
                      date: "2024-03-10",
                      tags: ["TypeScript", "Best Practices"],
                      slug: "typescript-best-practices-2024",
                      thumbnail: getRandomThumb(),
                      readingTime: 8,
                    },
                    {
                      title: "Building Responsive UIs with Tailwind CSS",
                      excerpt: "Master responsive design with Tailwind CSS utility classes and create beautiful, mobile-first user interfaces.",
                      date: "2024-03-05",
                      tags: ["CSS", "Tailwind", "Design"],
                      slug: "responsive-ui-tailwind",
                      thumbnail: getRandomThumb(),
                      readingTime: 6,
                    },
                    {
                      title: "Understanding React Server Components",
                      excerpt: "Deep dive into React Server Components and how they can improve your application's performance and user experience.",
                      date: "2024-02-28",
                      tags: ["React", "Performance"],
                      slug: "react-server-components",
                      thumbnail: getRandomThumb(),
                      readingTime: 10,
                    },
                    {
                      title: "CSS Grid vs Flexbox: When to Use What",
                      excerpt: "Understand the differences between CSS Grid and Flexbox, and learn when to use each layout system effectively.",
                      date: "2024-02-20",
                      tags: ["CSS", "Layout", "Tutorial"],
                      slug: "css-grid-vs-flexbox",
                      thumbnail: getRandomThumb(),
                      readingTime: 7,
                    },
                    {
                      title: "Mastering Git Workflows",
                      excerpt: "Learn advanced Git techniques and workflows to improve team collaboration and code management.",
                      date: "2024-02-15",
                      tags: ["Git", "DevOps", "Best Practices"],
                      slug: "mastering-git-workflows",
                      thumbnail: getRandomThumb(),
                      readingTime: 12,
                    },
                  ]}
                  sortBy="latest"
                />
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">BlogPostList Features</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Grid layout: 1 column (mobile), 2 columns (tablet), 3 columns (desktop)</li>
                  <li>Sort options dropdown (Latest / Popular)</li>
                  <li>Post count display</li>
                  <li>Empty state when no posts found</li>
                  <li>Integrates with BlogPostCard component</li>
                  <li>Responsive gap spacing between cards</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">MarkdownRenderer Component</h2>
                <p className="text-muted-foreground mb-4">
                  A component for rendering markdown content with GitHub Flavored Markdown support.
                </p>
                <div className="border rounded-lg p-6">
                  <MarkdownRenderer
                    content={`# Welcome to MarkdownRenderer

This is a **markdown renderer** component that supports _various_ markdown features.

## Features

- GitHub Flavored Markdown support
- Syntax highlighting for code blocks
- Tables, lists, and blockquotes
- Custom styled components
- Dark mode support

### Code Example

Here's some \`inline code\` and a code block:

\`\`\`typescript
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}
\`\`\`

### Lists

1. First ordered item
2. Second ordered item
3. Third ordered item

- Unordered item
- Another item
  - Nested item

### Blockquote

> This is a blockquote. It can contain **bold** and *italic* text.

### Table

| Feature | Supported |
|---------|-----------|
| Headers | ✓ |
| Lists | ✓ |
| Code | ✓ |
| Tables | ✓ |

### Links

Visit [Next.js](https://nextjs.org) for more information.

---

That's all for now!`}
                  />
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">MarkdownRenderer Features</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>GitHub Flavored Markdown (GFM) support with remark-gfm</li>
                  <li>Custom styled heading components (h1-h6)</li>
                  <li>External link handling with target="_blank"</li>
                  <li>Inline code with background styling</li>
                  <li>Code blocks with syntax highlighting container</li>
                  <li>Styled lists (ordered and unordered)</li>
                  <li>Blockquotes with border and italic styling</li>
                  <li>Responsive tables with hover effects</li>
                  <li>Image support with responsive sizing</li>
                  <li>Dark mode support with Tailwind prose classes</li>
                  <li>Horizontal rule styling</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">CodeBlock Component</h2>
                <p className="text-muted-foreground mb-4">
                  A syntax-highlighted code block component with copy functionality.
                </p>
                <div className="space-y-4">
                  <CodeBlock
                    code={`function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

const message = greet("World");
console.log(message);`}
                    language="typescript"
                    filename="example.ts"
                  />
                  <CodeBlock
                    code={`import React from 'react';

export default function App() {
  return (
    <div className="container">
      <h1>Hello React!</h1>
    </div>
  );
}`}
                    language="tsx"
                  />
                  <CodeBlock
                    code={`def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(10))`}
                    language="python"
                    filename="fibonacci.py"
                  />
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">CodeBlock Features</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Syntax highlighting with Prism.js</li>
                  <li>Copy to clipboard functionality</li>
                  <li>Language label display</li>
                  <li>Optional filename display</li>
                  <li>Visual feedback on copy (checkmark icon)</li>
                  <li>Dark mode compatible styling</li>
                  <li>Horizontal scrolling for long code lines</li>
                  <li>Support for multiple languages (TS, JS, Python, Bash, JSON, CSS, etc.)</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">SearchBar Component</h2>
                <p className="text-muted-foreground mb-4">
                  A search bar component with debounced input and dropdown results using Command component.
                </p>
                <SearchBarDemo />
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">SearchBar Features</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Debounced search input (300ms delay)</li>
                  <li>Search icon with clear button (X icon)</li>
                  <li>Dropdown results using Shadcn Command component</li>
                  <li>Loading state support</li>
                  <li>Empty state when no results found</li>
                  <li>Result items show title and excerpt</li>
                  <li>Keyboard navigation support</li>
                  <li>Click outside to close dropdown</li>
                  <li>Custom hook: useDebounce for reusable debouncing</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Pagination Component</h2>
                <p className="text-muted-foreground mb-4">
                  Server-side pagination component with URL-based navigation.
                </p>
                <div className="space-y-6">
                  <div className="border rounded-lg p-6">
                    <p className="text-sm font-medium mb-4">Basic Pagination (Server Component)</p>
                    <Pagination currentPage={3} totalPages={10} baseUrl="/blog" />
                  </div>
                  <div className="border rounded-lg p-6">
                    <p className="text-sm font-medium mb-4">Few Pages</p>
                    <Pagination currentPage={2} totalPages={3} baseUrl="/blog" />
                  </div>
                  <div className="border rounded-lg p-6">
                    <p className="text-sm font-medium mb-4">First Page</p>
                    <Pagination currentPage={1} totalPages={15} baseUrl="/blog" />
                  </div>
                  <div className="border rounded-lg p-6">
                    <p className="text-sm font-medium mb-4">Last Page</p>
                    <Pagination currentPage={15} totalPages={15} baseUrl="/blog" />
                  </div>
                  <div className="border rounded-lg p-6">
                    <p className="text-sm font-medium mb-4">Many Pages (with ellipsis)</p>
                    <Pagination currentPage={8} totalPages={20} baseUrl="/blog" />
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Pagination Features</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Server component version with Next.js Link for SEO</li>
                  <li>Client component version for dynamic filtering</li>
                  <li>Previous/Next navigation buttons</li>
                  <li>Numbered page buttons with current page highlight</li>
                  <li>Ellipsis (...) for many pages</li>
                  <li>Smart page number display (shows first, last, and surrounding pages)</li>
                  <li>Configurable max visible pages (default: 5)</li>
                  <li>Disabled state for current page and boundary buttons</li>
                  <li>ARIA labels for accessibility</li>
                  <li>URL-based navigation (?page=N) for server component</li>
                  <li>Callback-based for client component</li>
                  <li>Mobile-responsive with touch-friendly buttons</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">BlogPost Component</h2>
                <p className="text-muted-foreground mb-4">
                  A full blog post component with metadata, social sharing, and navigation.
                </p>
                <BlogPost
                  title="Understanding React Server Components"
                  date="2024-03-20"
                  tags={["React", "Next.js", "Server Components"]}
                  readingTime="10 min read"
                  author={{
                    name: "John Doe",
                    avatar: "/thumb/thumb1.jpg"
                  }}
                  content={`# Understanding React Server Components

React Server Components represent a paradigm shift in how we build React applications. This article explores their benefits and use cases.

## What are Server Components?

Server Components are a new type of component that runs **exclusively on the server**. They allow you to:

- Fetch data directly from databases
- Access backend resources securely
- Reduce client-side JavaScript bundle size
- Improve initial page load performance

## Key Benefits

1. **Zero Bundle Size**: Server Components don't ship JavaScript to the client
2. **Direct Backend Access**: Query databases and APIs without exposing credentials
3. **Automatic Code Splitting**: Only client components are included in bundles
4. **Improved Performance**: Faster initial loads and better Core Web Vitals

## Example Code

Here's a simple Server Component:

\`\`\`tsx
// app/posts/page.tsx (Server Component by default)
async function BlogPosts() {
  const posts = await db.posts.findMany();

  return (
    <div>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
\`\`\`

## When to Use Client Components

You still need Client Components for:

- Interactive elements (buttons, forms)
- Browser APIs (localStorage, geolocation)
- State management (useState, useReducer)
- Event handlers (onClick, onChange)

## Best Practices

> Always start with Server Components by default, and only use \`"use client"\` when you need interactivity or browser APIs.

### Component Composition

| Component Type | Use Case | Example |
|----------------|----------|---------|
| Server | Data fetching | Blog post list |
| Client | Interactivity | Search bar, filters |
| Mixed | Both | Post with comments |

## Conclusion

React Server Components are a powerful tool for building performant applications. By understanding when to use server vs. client components, you can create faster, more efficient React apps.

[Learn more about Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)

---

Happy coding!`}
                  previousPost={{
                    title: "Getting Started with Next.js 15",
                    slug: "getting-started-nextjs-15"
                  }}
                  nextPost={{
                    title: "TypeScript Best Practices for 2024",
                    slug: "typescript-best-practices-2024"
                  }}
                />
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">BlogPost Features</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Post metadata display (title, date, tags, reading time)</li>
                  <li>Author information with avatar support</li>
                  <li>Social share buttons (Twitter, Facebook, LinkedIn, Copy link)</li>
                  <li>Integrated MarkdownRenderer for content</li>
                  <li>Previous/Next post navigation</li>
                  <li>Responsive typography with prose classes</li>
                  <li>Dark mode support</li>
                  <li>Separator components for visual hierarchy</li>
                  <li>Badge components for tags</li>
                  <li>Icon integration (Calendar, Clock, User from Lucide)</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Component Stack</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">UI Components</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Container</li>
                      <li>• Header</li>
                      <li>• Footer</li>
                      <li>• SearchBar</li>
                      <li>• Pagination</li>
                      <li>• Button (Shadcn)</li>
                      <li>• Sheet (Shadcn)</li>
                      <li>• Card (Shadcn)</li>
                      <li>• Badge (Shadcn)</li>
                      <li>• Select (Shadcn)</li>
                      <li>• Input (Shadcn)</li>
                      <li>• Popover (Shadcn)</li>
                      <li>• Command (Shadcn)</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Blog Components</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• BlogPost</li>
                      <li>• BlogPostCard</li>
                      <li>• BlogPostList</li>
                      <li>• PostNavigation</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Content Components</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• MarkdownRenderer</li>
                      <li>• CodeBlock</li>
                      <li>• CopyButton</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Shared Components</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• SocialShare</li>
                      <li>• Theme Toggle</li>
                      <li>• Theme Provider</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </Container>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}
