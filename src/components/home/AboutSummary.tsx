import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { profile } from '@/data/profile'
import { fadeUp } from '@/lib/motion'

export function AboutSummary() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:px-8">
      <SectionHeading eyebrow="About" title="Profile Summary" />
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="max-w-3xl text-lg leading-relaxed text-text-muted"
      >
        {profile.summary}
      </motion.p>
    </section>
  )
}
