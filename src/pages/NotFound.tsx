import { GlassCard } from '@/components/ui/GlassCard'
import { Button } from '@/components/ui/Button'

export function NotFound() {
  return (
    <section className="mx-auto flex max-w-6xl items-center justify-center px-6 py-32 md:px-8">
      <GlassCard className="max-w-md text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">404</p>
        <h1 className="mt-4 font-display text-3xl font-medium text-text">
          Page not found
        </h1>
        <p className="mt-3 text-text-muted">
          The page you're looking for doesn't exist.
        </p>
        <Button to="/" className="mt-6 justify-center">
          Back to Home
        </Button>
      </GlassCard>
    </section>
  )
}
