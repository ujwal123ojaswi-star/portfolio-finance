import { motion } from 'framer-motion'
import { GlassCard } from '@/components/ui/GlassCard'
import { fadeUp } from '@/lib/motion'
import type { ExperienceEntry } from '@/types'

export function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  return (
    <motion.div variants={fadeUp} className="relative pl-10 md:pl-14">
      <span className="absolute left-[7px] top-8 h-3 w-3 -translate-x-1/2 rotate-45 border-2 border-accent bg-bg md:left-[11px]" />
      <GlassCard>
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-display text-2xl font-medium text-text">
            {entry.role}
          </h3>
          <span className="text-xs uppercase tracking-[0.2em] text-accent">
            {entry.period}
          </span>
        </div>
        <p className="mt-1 text-sm text-text-muted">
          {entry.company} · {entry.location}
        </p>
        <ul className="mt-4 space-y-2">
          {entry.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2 text-sm text-text-muted">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </GlassCard>
    </motion.div>
  )
}
