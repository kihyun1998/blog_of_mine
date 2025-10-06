import { Calendar, Clock, User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { MarkdownRenderer } from "@/components/content/markdown-renderer"
import { SocialShare } from "@/components/shared/social-share"
import { PostNavigation } from "@/components/blog/post-navigation"
import { TableOfContents } from "@/components/content/table-of-contents"
import { cn } from "@/lib/utils"

interface Author {
  name: string
  avatar?: string
}

interface BlogPostProps {
  title: string
  date: string
  tags: string[]
  readingTime: string
  content: string
  author?: Author
  previousPost?: {
    title: string
    slug: string
  }
  nextPost?: {
    title: string
    slug: string
  }
  className?: string
}

export function BlogPost({
  title,
  date,
  tags,
  readingTime,
  content,
  author,
  previousPost,
  nextPost,
  className,
}: BlogPostProps) {
  return (
    <div className={cn("mx-auto max-w-7xl", className)}>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_250px]">
        {/* Main Content */}
        <article className="min-w-0">
          {/* Post Header */}
          <header className="mb-8 space-y-4">
            <h1 className="pt-4 text-4xl font-bold tracking-tight lg:text-5xl">
              {title}
            </h1>

            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={date}>{date}</time>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{readingTime}</span>
              </div>

              {author && (
                <>
                  <Separator orientation="vertical" className="h-4" />
                  <div className="flex items-center gap-2">
                    {author.avatar ? (
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={author.avatar} alt={author.name} />
                        <AvatarFallback>
                          {author.name.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    ) : (
                      <User className="h-4 w-4" />
                    )}
                    <span>{author.name}</span>
                  </div>
                </>
              )}
            </div>

            {/* Tags */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </header>

          <Separator className="my-8" />

          {/* Social Share */}
          <div className="mb-8">
            <SocialShare title={title} />
          </div>

          {/* Post Content */}
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <MarkdownRenderer content={content} />
          </div>

          <Separator className="my-12" />

          {/* Post Navigation */}
          {(previousPost || nextPost) && (
            <PostNavigation previousPost={previousPost} nextPost={nextPost} />
          )}
        </article>

        {/* Table of Contents Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-20">
            <TableOfContents content={content} />
          </div>
        </aside>
      </div>
    </div>
  )
}
