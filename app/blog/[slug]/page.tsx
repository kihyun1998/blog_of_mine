import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { BlogPost } from "@/components/blog/blog-post"
import { getPostBySlug, getAdjacentPosts, getAllPosts } from "@/lib/posts"

interface PostDetailPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({
  params,
}: PostDetailPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
      images: post.thumbnail ? [post.thumbnail] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.thumbnail ? [post.thumbnail] : [],
    },
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function PostDetailPage({ params }: PostDetailPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const { previousPost, nextPost } = getAdjacentPosts(params.slug)

  return (
    <BlogPost
      title={post.title}
      date={post.date}
      tags={post.tags}
      readingTime={`${post.readingTime} min read`}
      content={post.content}
      author={post.author}
      thumbnail={post.thumbnail}
      previousPost={previousPost}
      nextPost={nextPost}
    />
  )
}
