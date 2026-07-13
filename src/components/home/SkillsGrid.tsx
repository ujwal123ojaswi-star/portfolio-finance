import { motion } from 'framer-motion'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Tag } from '@/components/ui/Tag'
import { skillGroups } from '@/data/skills'
import { fadeUp, staggerContainer } from '@/lib/motion'

export function SkillsGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:px-8">
      <SectionHeading
        eyebrow="Skills"
        title="Technical Toolkit"
        description="A blend of financial modeling, quantitative analysis, and reporting skills."
      />

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2"
      >
        {skillGroups.map((group) => (
          <motion.div key={group.category} variants={fadeUp}>
            <GlassCard className="h-full">
              <h3 className="font-display text-2xl font-medium text-text">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
