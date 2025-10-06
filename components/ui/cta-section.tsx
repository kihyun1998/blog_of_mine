import { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { cn } from "@/lib/utils"

interface CTASectionProps {
  title: string
  description: string
  socialLinks: Array<{
    platform: string
    url: string
    icon: ReactNode
  }>
  className?: string
}

export function CTASection({
  title,
  description,
  socialLinks,
  className,
}: CTASectionProps) {
  return (
    <section className={cn("py-12 md:py-16", className)}>
      <Container>
        <Card className="border-2">
          <CardContent className="flex flex-col items-center justify-center space-y-6 py-12 text-center">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                {title}
              </h2>
              <p className="text-lg text-muted-foreground md:text-xl">
                {description}
              </p>
            </div>

            <div className="flex items-center justify-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-2 transition-colors hover:bg-accent hover:text-accent-foreground"
                  aria-label={link.platform}
                >
                  <span className="h-6 w-6 [&>svg]:h-6 [&>svg]:w-6">
                    {link.icon}
                  </span>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </Container>
    </section>
  )
}
