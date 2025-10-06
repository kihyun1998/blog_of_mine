import { generateSlug } from '@/lib/utils'
import { TableOfContentsClient } from './table-of-contents-client'

interface Heading {
  id: string
  text: string
  level: 2 | 3
}

interface TableOfContentsProps {
  content: string
  className?: string
}

function extractHeadings(content: string): Heading[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm
  const headings: Heading[] = []
  let match

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length as 2 | 3
    const text = match[2].trim()
    const id = generateSlug(text)

    headings.push({ id, text, level })
  }

  return headings
}

export function TableOfContents({ content, className }: TableOfContentsProps) {
  const headings = extractHeadings(content)

  return <TableOfContentsClient headings={headings} className={className} />
}
