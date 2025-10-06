import { HeroSection } from "@/components/ui/hero-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Welcome to My Blog"
        description="Discover insightful articles about web development, design, and technology. Join our community of developers and designers."
        primaryCta={{ text: "Browse Articles", href: "/blog" }}
        secondaryCta={{ text: "About Me", href: "/about" }}
      />
    </div>
  );
}
