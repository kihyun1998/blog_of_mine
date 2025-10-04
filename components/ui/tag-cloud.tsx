import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Tag {
  name: string;
  count: number;
  slug: string;
}

interface TagCloudProps {
  tags: Tag[];
  maxSize?: number;
  minSize?: number;
  className?: string;
}

export function TagCloud({
  tags,
  maxSize = 24,
  minSize = 12,
  className,
}: TagCloudProps) {
  if (tags.length === 0) {
    return null;
  }

  const maxCount = Math.max(...tags.map((tag) => tag.count));
  const minCount = Math.min(...tags.map((tag) => tag.count));

  const getFontSize = (count: number) => {
    if (maxCount === minCount) {
      return (maxSize + minSize) / 2;
    }
    const normalized = (count - minCount) / (maxCount - minCount);
    return minSize + normalized * (maxSize - minSize);
  };

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {tags.map((tag) => {
        const fontSize = getFontSize(tag.count);
        return (
          <Link
            key={tag.slug}
            href={`/blog?tag=${tag.slug}`}
            className="transition-transform hover:scale-110"
          >
            <Badge
              variant="secondary"
              className="cursor-pointer"
              style={{ fontSize: `${fontSize}px` }}
            >
              {tag.name}
              <span className="ml-1 text-xs opacity-60">({tag.count})</span>
            </Badge>
          </Link>
        );
      })}
    </div>
  );
}
