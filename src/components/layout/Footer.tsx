import { contactLinks } from '@/data/contactLinks'
import { profile } from '@/data/profile'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-bg-alt">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 md:flex-row md:justify-between md:px-8">
        <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-8">
          {contactLinks.map((link) => {
            const Icon = link.icon
            const content = (
              <span className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-text-muted transition-colors duration-300 hover:text-accent">
                <Icon size={14} />
                {link.label}
              </span>
            )
            return (
              <li key={link.label}>
                {link.href ? (
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noreferrer' : undefined}
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </footer>
  )
}
