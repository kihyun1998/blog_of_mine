import Link from "next/link"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface PaginationProps {
  currentPage: number
  totalPages: number
  baseUrl?: string
  showPrevNext?: boolean
  maxVisiblePages?: number
  className?: string
}

export function Pagination({
  currentPage,
  totalPages,
  baseUrl = "",
  showPrevNext = true,
  maxVisiblePages = 5,
  className,
}: PaginationProps) {
  if (totalPages <= 1) return null

  const getPageUrl = (page: number) => {
    if (!baseUrl) return `?page=${page}`
    const separator = baseUrl.includes("?") ? "&" : "?"
    return `${baseUrl}${separator}page=${page}`
  }

  const getVisiblePages = () => {
    const pages: (number | "ellipsis")[] = []

    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    const halfVisible = Math.floor(maxVisiblePages / 2)
    let startPage = Math.max(1, currentPage - halfVisible)
    let endPage = Math.min(totalPages, currentPage + halfVisible)

    if (currentPage <= halfVisible) {
      endPage = maxVisiblePages
    } else if (currentPage >= totalPages - halfVisible) {
      startPage = totalPages - maxVisiblePages + 1
    }

    if (startPage > 1) {
      pages.push(1)
      if (startPage > 2) {
        pages.push("ellipsis")
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push("ellipsis")
      }
      pages.push(totalPages)
    }

    return pages
  }

  const visiblePages = getVisiblePages()

  return (
    <nav
      role="navigation"
      aria-label="Pagination"
      className={cn("flex items-center justify-center gap-1", className)}
    >
      {showPrevNext && (
        <Button
          variant="outline"
          size="icon"
          asChild={currentPage > 1}
          disabled={currentPage === 1}
          aria-label="Previous page"
        >
          {currentPage > 1 ? (
            <Link href={getPageUrl(currentPage - 1)}>
              <ChevronLeft className="h-4 w-4" />
            </Link>
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      )}

      <div className="flex items-center gap-1">
        {visiblePages.map((page, index) => {
          if (page === "ellipsis") {
            return (
              <div
                key={`ellipsis-${index}`}
                className="flex h-9 w-9 items-center justify-center"
              >
                <MoreHorizontal className="h-4 w-4" />
              </div>
            )
          }

          const isCurrentPage = page === currentPage

          return (
            <Button
              key={page}
              variant={isCurrentPage ? "default" : "outline"}
              size="icon"
              asChild={!isCurrentPage}
              disabled={isCurrentPage}
              aria-label={`Page ${page}`}
              aria-current={isCurrentPage ? "page" : undefined}
            >
              {isCurrentPage ? (
                <span>{page}</span>
              ) : (
                <Link href={getPageUrl(page)}>{page}</Link>
              )}
            </Button>
          )
        })}
      </div>

      {showPrevNext && (
        <Button
          variant="outline"
          size="icon"
          asChild={currentPage < totalPages}
          disabled={currentPage === totalPages}
          aria-label="Next page"
        >
          {currentPage < totalPages ? (
            <Link href={getPageUrl(currentPage + 1)}>
              <ChevronRight className="h-4 w-4" />
            </Link>
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </Button>
      )}
    </nav>
  )
}
