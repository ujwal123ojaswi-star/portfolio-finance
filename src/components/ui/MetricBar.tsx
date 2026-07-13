import { motion } from 'framer-motion'
import { EASE } from '@/lib/motion'

interface MetricBarProps {
  label: string
  value: number
  max?: number
  displayValue: string
}

export function MetricBar({ label, value, max = 100, displayValue }: MetricBarProps) {
  const percent = Math.min(100, (value / max) * 100)

  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between gap-4">
        <span className="text-sm text-text">{label}</span>
        <span className="text-sm font-semibold text-text">{displayValue}</span>
      </div>
      <div className="h-[6px] w-full bg-white/10">
        <motion.div
          className="h-full rounded-r-sm bg-accent"
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1, ease: EASE }}
        />
      </div>
    </div>
  )
}
