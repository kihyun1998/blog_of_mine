'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { Search, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { useDebounce } from '@/lib/hooks/use-debounce'
import { cn } from '@/lib/utils'

export interface SearchResult {
  id: string
  title: string
  excerpt?: string
  url: string
}

interface SearchBarProps {
  placeholder?: string
  onSearch?: (query: string) => void
  results?: SearchResult[]
  isLoading?: boolean
  className?: string
}

export function SearchBar({
  placeholder = 'Search posts...',
  onSearch,
  results = [],
  isLoading = false,
  className,
}: SearchBarProps) {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const debouncedQuery = useDebounce(query, 300)

  // Call onSearch when debounced query changes
  useEffect(() => {
    if (debouncedQuery && onSearch) {
      onSearch(debouncedQuery)
    }
  }, [debouncedQuery, onSearch])

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false)
        setSelectedIndex(-1)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    setOpen(value.length > 0)
    setSelectedIndex(-1)
  }

  const handleClear = () => {
    setQuery('')
    setOpen(false)
    setSelectedIndex(-1)
    inputRef.current?.focus()
  }

  const handleSelectResult = (url: string) => {
    setOpen(false)
    setSelectedIndex(-1)
    window.location.href = url
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open || results.length === 0) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev))
        break
      case 'ArrowUp':
        e.preventDefault()
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1))
        break
      case 'Enter':
        e.preventDefault()
        if (selectedIndex >= 0 && results[selectedIndex]) {
          handleSelectResult(results[selectedIndex].url)
        }
        break
      case 'Escape':
        e.preventDefault()
        setOpen(false)
        setSelectedIndex(-1)
        break
    }
  }

  return (
    <div ref={containerRef} className={cn('relative w-full', className)}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="pl-10 pr-10"
          autoComplete="off"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {open && (
        <div className="absolute top-full mt-1 w-full z-50 rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in fade-in-0 zoom-in-95">
          {isLoading ? (
            <div className="py-6 text-center text-sm text-muted-foreground">
              Searching...
            </div>
          ) : results.length === 0 && debouncedQuery ? (
            <div className="py-6 text-center text-sm text-muted-foreground">
              No results found.
            </div>
          ) : (
            <div className="max-h-[300px] overflow-y-auto p-1">
              {results.map((result, index) => (
                <div
                  key={result.id}
                  onClick={() => handleSelectResult(result.url)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={cn(
                    'relative flex cursor-pointer select-none items-center rounded-sm px-2 py-3 text-sm outline-none transition-colors',
                    selectedIndex === index
                      ? 'bg-accent text-accent-foreground'
                      : 'hover:bg-accent hover:text-accent-foreground'
                  )}
                >
                  <div className="flex flex-col gap-1 w-full">
                    <div className="font-medium">{result.title}</div>
                    {result.excerpt && (
                      <div className="text-sm text-muted-foreground line-clamp-1">
                        {result.excerpt}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
