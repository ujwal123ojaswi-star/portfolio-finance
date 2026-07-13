import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { ExperienceCard } from '@/components/experience/ExperienceCard'
import { staggerContainer } from '@/lib/motion'
import { experience } from '@/data/experience'

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  return (
    <div ref={ref} className="relative">
      <div className="absolute left-[13px] top-0 h-full w-px bg-white/10 md:left-[17px]" />
      <motion.div
        className="absolute left-[13px] top-0 w-px origin-top bg-accent md:left-[17px]"
        style={{ scaleY: scrollYProgress, height: '100%' }}
      />
      <motion.div
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="space-y-10"
      >
        {experience.map((entry) => (
          <ExperienceCard key={entry.company} entry={entry} />
        ))}
      </motion.div>
    </div>
  )
}
