import { motion } from 'framer-motion'
import { GlassCard } from '@/components/ui/GlassCard'
import { Tag } from '@/components/ui/Tag'
import { fadeUp } from '@/lib/motion'
import type { EducationEntry } from '@/types'

export function EducationCard({ entry }: { entry: EducationEntry }) {
  return (
    <motion.div variants={fadeUp}>
      <GlassCard>
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-display text-2xl font-medium text-text">
            {entry.school}
          </h3>
          <span className="text-xs uppercase tracking-[0.2em] text-accent">
            {entry.period}
          </span>
        </div>
        <p className="mt-1 text-sm text-text-muted">
          {entry.degree} · {entry.location}
        </p>
        {entry.coursework && (
          <div className="mt-4 flex flex-wrap gap-2">
            {entry.coursework.map((course) => (
              <Tag key={course}>{course}</Tag>
            ))}
          </div>
        )}
      </GlassCard>
    </motion.div>
  )
}
