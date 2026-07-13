import { cn } from '@/lib/cn'

interface TagProps {
  children: React.ReactNode
  className?: string
  accent?: boolean
}

export function Tag({ children, className, accent = false }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center border px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.15em] transition-colors duration-300',
        accent
          ? 'border-accent text-accent'
          : 'border-white/15 text-text-muted',
        className,
      )}
    >
      {children}
    </span>
  )
}
