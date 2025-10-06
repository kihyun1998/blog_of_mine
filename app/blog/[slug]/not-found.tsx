import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { FileQuestion } from "lucide-react"

export default function NotFound() {
  return (
    <Container className="py-20">
      <div className="flex flex-col items-center justify-center text-center">
        <FileQuestion className="mb-6 h-24 w-24 text-muted-foreground" />
        <h1 className="mb-4 text-4xl font-bold">Post Not Found</h1>
        <p className="mb-8 max-w-md text-lg text-muted-foreground">
          The blog post you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <Link href="/blog">View All Posts</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </div>
    </Container>
  )
}
