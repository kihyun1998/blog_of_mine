import { cn } from "@/lib/utils"

interface PostTitleProps {
  title: string
  className?: string
}

export function PostTitle({ title, className }: PostTitleProps) {
  return (
    <h1 className={cn("text-4xl font-bold tracking-tight lg:text-5xl", className)}>
      {title}
    </h1>
  )
}
