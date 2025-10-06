import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost } from "@/components/blog/blog-post-list";

const postsDirectory = path.join(process.cwd(), "content/posts");

/**
 * Get all blog posts from the content/posts directory
 */
export function getAllPosts(): BlogPost[] {
  // Check if posts directory exists
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      // Calculate reading time (average 200 words per minute)
      const wordCount = content.split(/\s+/g).length;
      const readingTime = Math.ceil(wordCount / 200);

      return {
        slug,
        title: data.title || "Untitled",
        excerpt: data.excerpt || "",
        date: data.date || new Date().toISOString(),
        tags: data.tags || [],
        readingTime,
      };
    });

  // Sort by date (newest first)
  return allPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

/**
 * Get a specific post by slug
 */
export function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // Calculate reading time
  const wordCount = content.split(/\s+/g).length;
  const readingTime = Math.ceil(wordCount / 200);

  return {
    slug,
    title: data.title || "Untitled",
    excerpt: data.excerpt || "",
    date: data.date || new Date().toISOString(),
    tags: data.tags || [],
    thumbnail: data.thumbnail,
    readingTime,
    content,
    author: data.author,
  };
}

/**
 * Paginate an array of posts
 */
export function paginatePosts(
  posts: BlogPost[],
  page: number,
  perPage: number = 9
): BlogPost[] {
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  return posts.slice(startIndex, endIndex);
}

/**
 * Get total number of pages
 */
export function getTotalPages(totalPosts: number, perPage: number = 9): number {
  return Math.ceil(totalPosts / perPage);
}

/**
 * Get posts filtered by tag
 */
export function getPostsByTag(tag: string): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) =>
    post.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}

/**
 * Get posts filtered by category
 */
export function getPostsByCategory(category: string): BlogPost[] {
  const allPosts = getAllPosts();
  // Note: This requires reading full post data including category
  // For now, we'll return empty array and implement later
  return [];
}

/**
 * Search posts by query (searches in title, excerpt, and tags)
 */
export function searchPosts(query: string): BlogPost[] {
  const allPosts = getAllPosts();
  const lowerQuery = query.toLowerCase();

  return allPosts.filter((post) => {
    const titleMatch = post.title.toLowerCase().includes(lowerQuery);
    const excerptMatch = post.excerpt.toLowerCase().includes(lowerQuery);
    const tagsMatch = post.tags.some((tag) =>
      tag.toLowerCase().includes(lowerQuery)
    );

    return titleMatch || excerptMatch || tagsMatch;
  });
}

/**
 * Get posts grouped by date (year and month)
 */
export function getPostsByDate(): Record<
  string,
  Record<string, BlogPost[]>
> {
  const allPosts = getAllPosts();
  const grouped: Record<string, Record<string, BlogPost[]>> = {};

  allPosts.forEach((post) => {
    const date = new Date(post.date);
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");

    if (!grouped[year]) {
      grouped[year] = {};
    }
    if (!grouped[year][month]) {
      grouped[year][month] = [];
    }

    grouped[year][month].push(post);
  });

  return grouped;
}
