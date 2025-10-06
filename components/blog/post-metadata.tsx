import { Calendar, Clock, User } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

interface Author {
  name: string
  avatar?: string
}

interface PostMetadataProps {
  date: string
  readingTime: string
  author?: Author
  tags?: string[]
  className?: string
}

export function PostMetadata({
  date,
  readingTime,
  author,
  tags,
  className,
}: PostMetadataProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {/* First line: date, reading time, author */}
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

      {/* Second line: tags */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      )}
    </div>
  )
}
