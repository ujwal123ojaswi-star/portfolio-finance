import { SectionHeading } from '@/components/ui/SectionHeading'
import { Timeline } from '@/components/experience/Timeline'

export function Experience() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
      <SectionHeading
        eyebrow="Experience"
        title="Professional Experience"
        description="Financial and data analysis roles across corporate advisory and retail finance."
      />
      <Timeline />
    </section>
  )
}
