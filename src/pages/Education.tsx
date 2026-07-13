import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { EducationCard } from '@/components/education/EducationCard'
import { education } from '@/data/education'
import { staggerContainer } from '@/lib/motion'

export function Education() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
      <SectionHeading eyebrow="Academic Background" title="Education" />
      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="space-y-6"
      >
        {education.map((entry) => (
          <EducationCard key={entry.school} entry={entry} />
        ))}
      </motion.div>
    </section>
  )
}
