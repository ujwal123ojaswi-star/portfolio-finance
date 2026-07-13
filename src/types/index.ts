export type IconComponent = React.ComponentType<{
  size?: number
  className?: string
}>

export interface Profile {
  name: string
  initials: string
  role: string
  location: string
  email: string
  phone: string
  linkedinHandle: string
  linkedinUrl: string
  summary: string
}

export interface SkillGroup {
  category: string
  skills: string[]
}

export interface ProjectMetric {
  label: string
  value: number
  max?: number
  displayValue: string
}

export interface ExperienceEntry {
  company: string
  role: string
  location: string
  period: string
  bullets: string[]
}

export interface EducationEntry {
  school: string
  degree: string
  location: string
  period: string
  coursework?: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  bullets: string[]
  stack: string[]
  githubUrl: string
  demoUrl: string
  metrics?: ProjectMetric[]
}

export interface ContactLinkData {
  label: string
  value: string
  href: string
  icon: IconComponent
  external?: boolean
  copyValue?: string
}
