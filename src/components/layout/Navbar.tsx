import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Search } from 'lucide-react'
import { cn } from '@/lib/cn'
import { OPEN_COMMAND_PALETTE_EVENT } from '@/components/interactive/CommandPalette'

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'Experience', to: '/experience' },
  { label: 'Projects', to: '/projects' },
  { label: 'Education', to: '/education' },
  { label: 'Contact', to: '/contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-bg/95">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-8">
        <NavLink
          to="/"
          className="font-display text-xl tracking-[0.1em] text-text"
          onClick={() => setOpen(false)}
        >
          UJWAL OJASWI
        </NavLink>

        <ul className="hidden items-center gap-10 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'relative block pb-1 text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-300',
                    isActive
                      ? 'text-accent'
                      : 'text-text-muted hover:text-text',
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-0.5 left-0 h-px w-full bg-accent"
                        transition={{ duration: 0.4 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Open search"
            onClick={() =>
              window.dispatchEvent(new Event(OPEN_COMMAND_PALETTE_EVENT))
            }
            className="hidden items-center gap-2 border border-white/15 px-3 py-2 text-text-muted transition-colors duration-300 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent sm:flex"
          >
            <Search size={14} />
          </button>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="border border-white/15 p-2 text-text focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-white/10 md:hidden"
          >
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'block px-6 py-4 text-xs font-medium uppercase tracking-[0.2em]',
                      isActive ? 'text-accent' : 'text-text-muted',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
