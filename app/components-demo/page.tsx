import { ThemeProvider } from "@/components/providers/theme-provider";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Container } from "@/components/ui/container";
import { BlogPostCard } from "@/components/blog/blog-post-card";

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
                    thumbnail="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop"
                    readingTime={5}
                  />
                  <BlogPostCard
                    title="TypeScript Best Practices for 2024"
                    excerpt="Discover the latest TypeScript patterns and best practices to write more maintainable and type-safe code in your projects."
                    date="2024-03-10"
                    tags={["TypeScript", "Best Practices"]}
                    slug="typescript-best-practices-2024"
                    thumbnail="https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=450&fit=crop"
                    readingTime={8}
                  />
                  <BlogPostCard
                    title="Building Responsive UIs with Tailwind CSS"
                    excerpt="Master responsive design with Tailwind CSS utility classes and create beautiful, mobile-first user interfaces."
                    date="2024-03-05"
                    tags={["CSS", "Tailwind", "Design"]}
                    slug="responsive-ui-tailwind"
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
                <h2 className="text-2xl font-semibold">Component Stack</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">UI Components</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Container</li>
                      <li>• Header</li>
                      <li>• Footer</li>
                      <li>• Button (Shadcn)</li>
                      <li>• Sheet (Shadcn)</li>
                      <li>• Card (Shadcn)</li>
                      <li>• Badge (Shadcn)</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Blog Components</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• BlogPostCard</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Shared Components</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
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
