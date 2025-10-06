export interface PostFrontmatter {
  title: string
  date: string
  excerpt: string
  tags: string[]
  category?: string
  thumbnail?: string
  author?: {
    name: string
    avatar?: string
  }
  published?: boolean
}

export interface Post extends PostFrontmatter {
  slug: string
  content: string
  readingTime: number
}
