import { motion } from 'framer-motion'
import { GlassCard } from '@/components/ui/GlassCard'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { fadeUp, staggerContainer } from '@/lib/motion'

const stats = [
  { value: 3, label: 'Experience Roles' },
  { value: 6, label: 'Featured Projects' },
  { value: 2, label: 'Degrees' },
]

export function StatRow() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:px-8">
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-3"
      >
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={fadeUp}>
            <GlassCard className="text-center">
              <p className="font-sans text-5xl font-semibold text-accent">
                <AnimatedCounter value={stat.value} />
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-text-muted">
                {stat.label}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
