import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { Post, PostFrontmatter } from "@/lib/types/post"

const postsDirectory = path.join(process.cwd(), "content/posts")

/**
 * Calculate reading time in minutes
 */
function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const wordCount = content.split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}

/**
 * Generate URL slug from title
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

/**
 * Get all published posts
 */
export function getAllPosts(): Post[] {
  // Create directory if it doesn't exist
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const filenames = fs.readdirSync(postsDirectory)

  const posts = filenames
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "")
      const fullPath = path.join(postsDirectory, filename)
      const fileContents = fs.readFileSync(fullPath, "utf-8")
      const { data, content } = matter(fileContents)

      const frontmatter = data as PostFrontmatter

      return {
        slug,
        ...frontmatter,
        content,
        readingTime: calculateReadingTime(content),
      }
    })
    .filter((post) => post.published !== false)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts
}

/**
 * Get a single post by slug
 */
export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)

    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, "utf-8")
    const { data, content } = matter(fileContents)

    const frontmatter = data as PostFrontmatter

    // Don't return unpublished posts
    if (frontmatter.published === false) {
      return null
    }

    return {
      slug,
      ...frontmatter,
      content,
      readingTime: calculateReadingTime(content),
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

/**
 * Get posts by tag
 */
export function getPostsByTag(tag: string): Post[] {
  const allPosts = getAllPosts()
  return allPosts.filter((post) =>
    post.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  )
}

/**
 * Get posts by category
 */
export function getPostsByCategory(category: string): Post[] {
  const allPosts = getAllPosts()
  return allPosts.filter(
    (post) => post.category?.toLowerCase() === category.toLowerCase()
  )
}

/**
 * Search posts by query (searches in title, excerpt, content, and tags)
 */
export function searchPosts(query: string): Post[] {
  const allPosts = getAllPosts()
  const lowercaseQuery = query.toLowerCase()

  return allPosts.filter((post) => {
    return (
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.content.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
    )
  })
}

/**
 * Get posts grouped by date (year and month)
 */
export function getPostsByDate(): Record<
  string,
  Record<string, Post[]>
> {
  const allPosts = getAllPosts()
  const postsByDate: Record<string, Record<string, Post[]>> = {}

  allPosts.forEach((post) => {
    const date = new Date(post.date)
    const year = date.getFullYear().toString()
    const month = (date.getMonth() + 1).toString().padStart(2, "0")

    if (!postsByDate[year]) {
      postsByDate[year] = {}
    }

    if (!postsByDate[year][month]) {
      postsByDate[year][month] = []
    }

    postsByDate[year][month].push(post)
  })

  return postsByDate
}

/**
 * Get previous and next posts for navigation
 */
export function getAdjacentPosts(currentSlug: string): {
  previousPost: { title: string; slug: string } | null
  nextPost: { title: string; slug: string } | null
} {
  const allPosts = getAllPosts()
  const currentIndex = allPosts.findIndex((post) => post.slug === currentSlug)

  if (currentIndex === -1) {
    return { previousPost: null, nextPost: null }
  }

  const previousPost =
    currentIndex > 0
      ? { title: allPosts[currentIndex - 1].title, slug: allPosts[currentIndex - 1].slug }
      : null

  const nextPost =
    currentIndex < allPosts.length - 1
      ? { title: allPosts[currentIndex + 1].title, slug: allPosts[currentIndex + 1].slug }
      : null

  return { previousPost, nextPost }
}

/**
 * Get all unique tags from all posts
 */
export function getAllTags(): string[] {
  const allPosts = getAllPosts()
  const tagsSet = new Set<string>()

  allPosts.forEach((post) => {
    post.tags.forEach((tag) => tagsSet.add(tag))
  })

  return Array.from(tagsSet).sort()
}

/**
 * Get all unique categories from all posts
 */
export function getAllCategories(): string[] {
  const allPosts = getAllPosts()
  const categoriesSet = new Set<string>()

  allPosts.forEach((post) => {
    if (post.category) {
      categoriesSet.add(post.category)
    }
  })

  return Array.from(categoriesSet).sort()
}
