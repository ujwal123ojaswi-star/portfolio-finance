import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-12 md:mb-16', className)}>
      {eyebrow && (
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-4xl font-medium text-text md:text-5xl">
        {title}
      </h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mt-5 h-px w-16 origin-left bg-accent"
      />
      {description && (
        <p className="mt-5 max-w-2xl font-light text-text-muted">
          {description}
        </p>
      )}
    </div>
  )
}
