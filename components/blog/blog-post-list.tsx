"use client";

import { BlogPostCard } from "@/components/blog/blog-post-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  slug: string;
  readingTime: number;
}

interface BlogPostListProps {
  posts: BlogPost[];
  sortBy?: "latest" | "popular";
  onSortChange?: (sort: "latest" | "popular") => void;
  showControls?: boolean;
  className?: string;
}

export function BlogPostList({
  posts,
  sortBy = "latest",
  onSortChange,
  showControls = true,
  className,
}: BlogPostListProps) {
  return (
    <div className={className}>
      {showControls && (
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            {posts.length} {posts.length === 1 ? "Post" : "Posts"}
          </h2>
          <Select
            value={sortBy}
            onValueChange={(value) =>
              onSortChange?.(value as "latest" | "popular")
            }
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="latest">Latest</SelectItem>
              <SelectItem value="popular">Popular</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogPostCard
            key={post.slug}
            title={post.title}
            excerpt={post.excerpt}
            date={post.date}
            tags={post.tags}
            slug={post.slug}
            readingTime={post.readingTime}
          />
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          No posts found.
        </div>
      )}
    </div>
  );
}
