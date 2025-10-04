'use client'

import { SearchBar } from '@/components/ui/search-bar'

export function SearchBarDemo() {
  return (
    <div className="max-w-2xl space-y-4">
      <SearchBar
        placeholder="Search blog posts..."
        onSearch={(query) => console.log('Searching for:', query)}
        results={[
          {
            id: '1',
            title: 'Getting Started with Next.js 15',
            excerpt: 'Learn how to build modern web applications with Next.js 15',
            url: '/blog/getting-started-nextjs-15',
          },
          {
            id: '2',
            title: 'TypeScript Best Practices',
            excerpt: 'Discover the latest TypeScript patterns and best practices',
            url: '/blog/typescript-best-practices',
          },
          {
            id: '3',
            title: 'Building Responsive UIs with Tailwind',
            excerpt: 'Master responsive design with Tailwind CSS utility classes',
            url: '/blog/responsive-ui-tailwind',
          },
        ]}
      />
      <p className="text-sm text-muted-foreground">
        Try typing to see the search results dropdown. Results appear after 300ms debounce.
      </p>
    </div>
  )
}
