import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";
import { Container } from "@/components/ui/container";

const socialLinks = [
  { name: "GitHub", href: "https://github.com", icon: Github },
  { name: "Twitter", href: "https://twitter.com", icon: Twitter },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-8 md:py-12">
      <Container>
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={link.name}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              );
            })}
          </div>

          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Blog. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
