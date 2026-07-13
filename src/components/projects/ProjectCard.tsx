import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from '@/components/icons/GithubIcon'
import { GlassCard } from '@/components/ui/GlassCard'
import { Tag } from '@/components/ui/Tag'
import { MetricBar } from '@/components/ui/MetricBar'
import { fadeUp } from '@/lib/motion'
import type { Project } from '@/types'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div layout variants={fadeUp}>
      <GlassCard className="flex h-full flex-col">
        <h3 className="font-display text-2xl font-medium text-text">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-text-muted">{project.description}</p>
        <ul className="mt-4 space-y-2">
          {project.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2 text-sm text-text-muted">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        {project.metrics && (
          <div className="mt-5 space-y-4 border-t border-white/10 pt-5">
            {project.metrics.map((metric) => (
              <MetricBar
                key={metric.label}
                label={metric.label}
                value={metric.value}
                max={metric.max}
                displayValue={metric.displayValue}
              />
            ))}
          </div>
        )}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Tag key={tech} accent>
              {tech}
            </Tag>
          ))}
        </div>
        {(project.githubUrl !== '#' || project.demoUrl !== '#') && (
          <div className="mt-6 flex gap-4 border-t border-white/10 pt-4">
            {project.githubUrl !== '#' && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                title="View source on GitHub"
                className="flex items-center gap-1.5 text-sm text-text-muted transition-colors duration-300 hover:text-accent"
              >
                <GithubIcon size={16} />
                Code
              </a>
            )}
            {project.demoUrl !== '#' && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                title="View live demo"
                className="flex items-center gap-1.5 text-sm text-text-muted transition-colors duration-300 hover:text-accent"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
          </div>
        )}
      </GlassCard>
    </motion.div>
  )
}
