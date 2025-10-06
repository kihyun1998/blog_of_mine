import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Post {
  title: string
  slug: string
}

interface PostNavigationProps {
  previousPost?: Post
  nextPost?: Post
  className?: string
}

export function PostNavigation({
  previousPost,
  nextPost,
  className,
}: PostNavigationProps) {
  return (
    <nav
      className={cn("flex items-center justify-between gap-4", className)}
      aria-label="Post navigation"
    >
      {/* Previous Post */}
      <div className="flex-1">
        {previousPost ? (
          <Link href={`/blog/${previousPost.slug}`} className="group block">
            <Button
              variant="outline"
              className="h-auto w-full justify-start p-4 text-left"
            >
              <div className="flex items-start gap-3">
                <ChevronLeft className="mt-1 h-5 w-5 flex-shrink-0 transition-transform group-hover:-translate-x-1" />
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-medium text-muted-foreground">
                    Previous Post
                  </div>
                  <div className="mt-1 truncate font-medium">
                    {previousPost.title}
                  </div>
                </div>
              </div>
            </Button>
          </Link>
        ) : (
          <div className="invisible">
            <Button variant="outline" disabled className="w-full">
              No previous post
            </Button>
          </div>
        )}
      </div>

      {/* Next Post */}
      <div className="flex-1">
        {nextPost ? (
          <Link href={`/blog/${nextPost.slug}`} className="group block">
            <Button
              variant="outline"
              className="h-auto w-full justify-end p-4 text-right"
            >
              <div className="flex items-start gap-3">
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-medium text-muted-foreground">
                    Next Post
                  </div>
                  <div className="mt-1 truncate font-medium">
                    {nextPost.title}
                  </div>
                </div>
                <ChevronRight className="mt-1 h-5 w-5 flex-shrink-0 transition-transform group-hover:translate-x-1" />
              </div>
            </Button>
          </Link>
        ) : (
          <div className="invisible">
            <Button variant="outline" disabled className="w-full">
              No next post
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
