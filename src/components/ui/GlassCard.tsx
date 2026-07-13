import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/cn'

interface GlassCardProps extends HTMLMotionProps<'div'> {
  hover?: boolean
}

export function GlassCard({
  className,
  hover = true,
  children,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        'border border-border bg-surface p-6 transition-colors duration-500 md:p-8',
        hover && 'hover:border-accent/50',
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}
