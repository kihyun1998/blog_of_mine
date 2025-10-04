import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BlogPostCardProps {
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  slug: string;
  thumbnail?: string;
  readingTime: number;
  className?: string;
}

export function BlogPostCard({
  title,
  excerpt,
  date,
  tags,
  slug,
  thumbnail,
  readingTime,
  className,
}: BlogPostCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="block">
      <Card
        className={cn(
          "h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
          thumbnail ? "pt-0" : "",
          className
        )}
      >
        {thumbnail && (
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}

        <CardHeader>
          <h3 className="text-xl font-semibold line-clamp-2 mb-2">{title}</h3>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <time dateTime={date}>{new Date(date).toLocaleDateString()}</time>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{readingTime} min read</span>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
        </CardContent>

        {tags.length > 0 && (
          <CardFooter>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardFooter>
        )}
      </Card>
    </Link>
  );
}
