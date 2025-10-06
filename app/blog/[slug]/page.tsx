import { BlogPost } from "@/components/blog/blog-post"

// Mock data for demo - replace with actual data fetching
const mockPostData = {
  title: "Getting Started with Next.js 15",
  date: "2024-01-15",
  tags: ["Next.js", "React", "TypeScript"],
  readingTime: 8,
  content: `
# Introduction

Next.js 15 brings exciting new features and improvements to the React framework.

## Key Features

- **Turbopack**: Faster build times
- **Server Components**: Enhanced performance
- **App Router**: Improved routing architecture

### Code Example

\`\`\`typescript
export default function Page() {
  return <div>Hello Next.js 15!</div>
}
\`\`\`

## Conclusion

Next.js 15 is a significant upgrade that improves developer experience and application performance.
`,
  author: {
    name: "John Doe",
    avatar: "/avatars/john-doe.jpg"
  },
  thumbnail: "/images/nextjs-15.jpg",
  previousPost: {
    title: "Understanding React Server Components",
    slug: "react-server-components"
  },
  nextPost: {
    title: "Building a Blog with Next.js",
    slug: "building-blog-nextjs"
  }
}

export default function PostDetailPage() {
  return (
    <BlogPost
      title={mockPostData.title}
      date={mockPostData.date}
      tags={mockPostData.tags}
      readingTime={mockPostData.readingTime}
      content={mockPostData.content}
      author={mockPostData.author}
      thumbnail={mockPostData.thumbnail}
      previousPost={mockPostData.previousPost}
      nextPost={mockPostData.nextPost}
    />
  )
}
