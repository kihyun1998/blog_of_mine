import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { BlogPostList } from "@/components/blog/blog-post-list";
import { Pagination } from "@/components/ui/pagination";
import { getAllPosts, paginatePosts, getTotalPages } from "@/lib/blog-utils";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata> {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;

  return {
    title: currentPage === 1 ? "All Posts" : `All Posts - Page ${currentPage}`,
    description:
      "Browse all blog posts about web development, programming, and technology.",
  };
}

export default async function BlogPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const postsPerPage = 9;

  // Get all posts and paginate
  const allPosts = getAllPosts();
  const totalPages = getTotalPages(allPosts.length, postsPerPage);
  const paginatedPosts = paginatePosts(allPosts, currentPage, postsPerPage);

  return (
    <div className="py-12">
      <Container>
        {/* Page Title */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            All Posts
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore articles about web development, React, Next.js, and more.
          </p>
        </div>

        {/* Blog Post List */}
        <BlogPostList posts={paginatedPosts} showControls={false} />

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              baseUrl="/blog"
            />
          </div>
        )}
      </Container>
    </div>
  );
}
