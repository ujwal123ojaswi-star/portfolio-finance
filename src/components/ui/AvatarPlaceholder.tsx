import { profile } from '@/data/profile'

export function AvatarPlaceholder() {
  return (
    <div className="relative flex h-48 w-48 items-center justify-center border border-accent/50 md:h-64 md:w-64">
      <div className="absolute inset-3 border border-white/10" />
      <span className="font-display text-5xl font-medium tracking-[0.05em] text-text md:text-6xl">
        {profile.initials}
      </span>
    </div>
  )
}
