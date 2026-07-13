import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { Tag } from '@/components/ui/Tag'
import { projects } from '@/data/projects'
import { staggerContainer } from '@/lib/motion'

export function Projects() {
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const allTags = useMemo(
    () => Array.from(new Set(projects.flatMap((p) => p.stack))).sort(),
    [],
  )

  const filtered = activeTag
    ? projects.filter((p) => p.stack.includes(activeTag))
    : projects

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
      <SectionHeading
        eyebrow="Projects"
        title="Selected Projects"
        description="6 projects spanning DCF valuation, FP&A, portfolio analysis, credit risk, and equity research. Filter by stack, or open the GitHub repo and live demo directly on each card."
      />

      <div className="mb-8 flex flex-wrap gap-2">
        <button type="button" onClick={() => setActiveTag(null)}>
          <Tag accent={activeTag === null}>All</Tag>
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActiveTag(tag)}
          >
            <Tag accent={activeTag === tag}>{tag}</Tag>
          </button>
        ))}
      </div>

      <motion.div
        layout
        variants={staggerContainer(0.08)}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-8 text-center text-text-muted">
          No projects match this filter.
        </p>
      )}
    </section>
  )
}
