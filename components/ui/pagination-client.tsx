"use client"

import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface PaginationClientProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  showPrevNext?: boolean
  maxVisiblePages?: number
  className?: string
}

export function PaginationClient({
  currentPage,
  totalPages,
  onPageChange,
  showPrevNext = true,
  maxVisiblePages = 5,
  className,
}: PaginationClientProps) {
  if (totalPages <= 1) return null

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
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous page"
        >
          <ChevronLeft className="h-4 w-4" />
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
              onClick={() => onPageChange(page)}
              disabled={isCurrentPage}
              aria-label={`Page ${page}`}
              aria-current={isCurrentPage ? "page" : undefined}
            >
              {page}
            </Button>
          )
        })}
      </div>

      {showPrevNext && (
        <Button
          variant="outline"
          size="icon"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next page"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      )}
    </nav>
  )
}
