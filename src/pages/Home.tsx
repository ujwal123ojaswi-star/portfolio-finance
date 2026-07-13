import { Hero } from '@/components/home/Hero'
import { AboutSummary } from '@/components/home/AboutSummary'
import { StatRow } from '@/components/home/StatRow'
import { SkillsGrid } from '@/components/home/SkillsGrid'

export function Home() {
  return (
    <>
      <Hero />
      <AboutSummary />
      <StatRow />
      <SkillsGrid />
    </>
  )
}
