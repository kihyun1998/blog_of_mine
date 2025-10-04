import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  className?: string;
}

const sizeClasses = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  xl: "max-w-[1536px]",
  full: "max-w-full",
};

export function Container({
  children,
  size = "lg",
  className,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto px-4 md:px-6 lg:px-8",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </div>
  );
}
