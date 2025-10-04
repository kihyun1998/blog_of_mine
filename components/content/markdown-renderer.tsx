import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { cn } from '@/lib/utils'

interface MarkdownRendererProps {
  content: string
  className?: string
}

export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  return (
    <div className={cn('prose prose-neutral dark:prose-invert max-w-none', className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
        h1: ({ children }) => (
          <h1 className="text-4xl font-bold mt-8 mb-4 text-foreground">{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-3xl font-bold mt-6 mb-3 text-foreground">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-2xl font-semibold mt-5 mb-2 text-foreground">{children}</h3>
        ),
        h4: ({ children }) => (
          <h4 className="text-xl font-semibold mt-4 mb-2 text-foreground">{children}</h4>
        ),
        h5: ({ children }) => (
          <h5 className="text-lg font-semibold mt-3 mb-2 text-foreground">{children}</h5>
        ),
        h6: ({ children }) => (
          <h6 className="text-base font-semibold mt-3 mb-2 text-foreground">{children}</h6>
        ),
        a: ({ children, href }) => (
          <a
            href={href}
            className="text-primary hover:underline font-medium"
            target={href?.startsWith('http') ? '_blank' : undefined}
            rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {children}
          </a>
        ),
        p: ({ children }) => (
          <p className="mb-4 leading-7 text-foreground">{children}</p>
        ),
        ul: ({ children }) => (
          <ul className="mb-4 ml-6 list-disc [&>li]:mt-2">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="mb-4 ml-6 list-decimal [&>li]:mt-2">{children}</ol>
        ),
        li: ({ children }) => (
          <li className="leading-7 text-foreground">{children}</li>
        ),
        blockquote: ({ children }) => (
          <blockquote className="mt-6 border-l-4 border-primary pl-6 italic text-muted-foreground">
            {children}
          </blockquote>
        ),
        code: ({ children, className }) => {
          const isInline = !className
          if (isInline) {
            return (
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                {children}
              </code>
            )
          }
          // Code blocks will be handled by pre component
          return <code className={className}>{children}</code>
        },
        pre: ({ children }) => (
          <pre className="mb-4 mt-6 overflow-x-auto rounded-lg border bg-muted p-4">
            {children}
          </pre>
        ),
        img: ({ src, alt }) => (
          <img
            src={src}
            alt={alt}
            className="rounded-lg my-6 w-full object-cover"
          />
        ),
        table: ({ children }) => (
          <div className="my-6 w-full overflow-y-auto">
            <table className="w-full border-collapse">{children}</table>
          </div>
        ),
        thead: ({ children }) => (
          <thead className="border-b bg-muted">{children}</thead>
        ),
        tbody: ({ children }) => (
          <tbody className="[&_tr:last-child]:border-0">{children}</tbody>
        ),
        tr: ({ children }) => (
          <tr className="border-b transition-colors hover:bg-muted/50">{children}</tr>
        ),
        th: ({ children }) => (
          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
            {children}
          </th>
        ),
        td: ({ children }) => (
          <td className="p-4 align-middle">{children}</td>
        ),
        hr: () => (
          <hr className="my-8 border-border" />
        ),
      }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
