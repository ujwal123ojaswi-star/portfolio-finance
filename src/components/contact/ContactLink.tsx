import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Copy } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { fadeUp } from '@/lib/motion'
import type { ContactLinkData } from '@/types'

export function ContactLink({ link }: { link: ContactLinkData }) {
  const [copied, setCopied] = useState(false)
  const Icon = link.icon

  async function handleCopy() {
    if (!link.copyValue) return
    await navigator.clipboard.writeText(link.copyValue)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <motion.div variants={fadeUp}>
      <GlassCard className="flex items-center gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-accent/50 text-accent">
          <Icon size={20} />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
            {link.label}
          </p>
          {link.href ? (
            <a
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer' : undefined}
              className="block truncate font-medium text-text transition-colors duration-300 hover:text-accent"
            >
              {link.value}
            </a>
          ) : (
            <p className="truncate font-medium text-text">{link.value}</p>
          )}
        </div>
        {link.copyValue && (
          <button
            type="button"
            onClick={handleCopy}
            aria-label={`Copy ${link.label}`}
            className="relative flex h-9 w-9 shrink-0 items-center justify-center border border-white/15 text-text-muted transition-colors duration-300 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
          >
            <AnimatePresence mode="wait" initial={false}>
              {copied ? (
                <motion.span
                  key="check"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="flex text-accent"
                >
                  <Check size={16} />
                </motion.span>
              ) : (
                <motion.span
                  key="copy"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="flex"
                >
                  <Copy size={16} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        )}
      </GlassCard>
    </motion.div>
  )
}
