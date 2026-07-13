import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

const MotionLink = motion.create(Link)

interface BaseProps {
  variant?: 'primary' | 'ghost'
  className?: string
  children: React.ReactNode
  onClick?: () => void
}

interface InternalButtonProps extends BaseProps {
  to: string
  href?: never
}

interface ExternalButtonProps extends BaseProps {
  href: string
  to?: never
  target?: string
  rel?: string
  title?: string
}

type ButtonProps = InternalButtonProps | ExternalButtonProps

export function Button({
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center gap-3 border px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
    variant === 'primary'
      ? 'border-accent bg-accent text-bg hover:bg-transparent hover:text-accent'
      : 'border-white/25 text-text hover:border-accent hover:text-accent',
    className,
  )

  if ('to' in props && props.to) {
    const { to, onClick } = props
    return (
      <MotionLink
        to={to}
        onClick={onClick}
        className={classes}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </MotionLink>
    )
  }

  const { href, target, rel, title, onClick } = props as ExternalButtonProps
  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      title={title}
      onClick={onClick}
      className={classes}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.a>
  )
}
