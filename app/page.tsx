import Link from "next/link";
import { HeroSection } from "@/components/ui/hero-section";
import { CTASection } from "@/components/ui/cta-section";
import { BlogPostList } from "@/components/blog/blog-post-list";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin } from "lucide-react";

// 임시 데이터 (추후 실제 데이터로 교체)
const mockPosts = [
  {
    title: "Getting Started with Next.js 15",
    excerpt: "Learn the basics of Next.js 15 and how to build modern web applications with the latest features.",
    date: "2024-03-15",
    tags: ["Next.js", "React", "TypeScript"],
    slug: "getting-started-nextjs-15",
    readingTime: 5,
  },
  {
    title: "Building Modern UI with Tailwind CSS",
    excerpt: "Discover how to create beautiful and responsive user interfaces using Tailwind CSS.",
    date: "2024-03-10",
    tags: ["CSS", "Tailwind", "Design"],
    slug: "building-modern-ui-tailwind",
    readingTime: 7,
  },
  {
    title: "TypeScript Best Practices",
    excerpt: "Explore essential TypeScript patterns and best practices for writing maintainable code.",
    date: "2024-03-05",
    tags: ["TypeScript", "JavaScript"],
    slug: "typescript-best-practices",
    readingTime: 8,
  },
  {
    title: "React Server Components Deep Dive",
    excerpt: "A comprehensive guide to understanding and implementing React Server Components.",
    date: "2024-02-28",
    tags: ["React", "Next.js"],
    slug: "react-server-components-deep-dive",
    readingTime: 10,
  },
  {
    title: "State Management in Modern React",
    excerpt: "Compare different state management solutions and choose the right one for your project.",
    date: "2024-02-20",
    tags: ["React", "State Management"],
    slug: "state-management-modern-react",
    readingTime: 6,
  },
  {
    title: "Web Performance Optimization",
    excerpt: "Learn techniques to optimize your web application's performance and user experience.",
    date: "2024-02-15",
    tags: ["Performance", "Web Development"],
    slug: "web-performance-optimization",
    readingTime: 9,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Welcome to My Blog"
        description="Discover insightful articles about web development, design, and technology. Join our community of developers and designers."
        primaryCta={{ text: "Browse Articles", href: "/blog" }}
        secondaryCta={{ text: "About Me", href: "/about" }}
      />

      <section className="py-12 md:py-16">
        <Container>
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold tracking-tight">Latest Posts</h2>
              <Button asChild variant="ghost">
                <Link href="/blog">View All Posts →</Link>
              </Button>
            </div>
            <BlogPostList posts={mockPosts} showControls={false} />
          </div>
        </Container>
      </section>

      <CTASection
        title="Let's Connect"
        description="Follow me on social media for more updates and insights"
        socialLinks={[
          {
            platform: "GitHub",
            url: "https://github.com/yourusername",
            icon: <Github />,
          },
          {
            platform: "Twitter",
            url: "https://twitter.com/yourusername",
            icon: <Twitter />,
          },
          {
            platform: "LinkedIn",
            url: "https://linkedin.com/in/yourusername",
            icon: <Linkedin />,
          },
        ]}
      />
    </div>
  );
}
