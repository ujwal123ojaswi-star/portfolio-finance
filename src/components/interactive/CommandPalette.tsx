import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Home,
  Briefcase,
  FolderGit,
  GraduationCap,
  Mail,
  Copy,
  ExternalLink,
  Search,
} from 'lucide-react'
import { profile } from '@/data/profile'
import type { IconComponent } from '@/types'

interface CommandItem {
  id: string
  label: string
  icon: IconComponent
  action: () => void
}

export const OPEN_COMMAND_PALETTE_EVENT = 'open-command-palette'

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const navigate = useNavigate()

  const commands: CommandItem[] = useMemo(
    () => [
      { id: 'home', label: 'Go to Home', icon: Home, action: () => navigate('/') },
      {
        id: 'experience',
        label: 'Go to Experience',
        icon: Briefcase,
        action: () => navigate('/experience'),
      },
      {
        id: 'projects',
        label: 'Go to Projects',
        icon: FolderGit,
        action: () => navigate('/projects'),
      },
      {
        id: 'education',
        label: 'Go to Education',
        icon: GraduationCap,
        action: () => navigate('/education'),
      },
      {
        id: 'contact',
        label: 'Go to Contact',
        icon: Mail,
        action: () => navigate('/contact'),
      },
      {
        id: 'copy-email',
        label: `Copy email — ${profile.email}`,
        icon: Copy,
        action: () => navigator.clipboard.writeText(profile.email),
      },
      {
        id: 'copy-phone',
        label: `Copy phone — ${profile.phone}`,
        icon: Copy,
        action: () => navigator.clipboard.writeText(profile.phone),
      },
      {
        id: 'linkedin',
        label: 'Open LinkedIn profile',
        icon: ExternalLink,
        action: () => window.open(profile.linkedinUrl, '_blank', 'noreferrer'),
      },
    ],
    [navigate],
  )

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase()),
  )

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((v) => !v)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    const openHandler = () => setOpen(true)

    window.addEventListener('keydown', handler)
    window.addEventListener(OPEN_COMMAND_PALETTE_EVENT, openHandler)
    return () => {
      window.removeEventListener('keydown', handler)
      window.removeEventListener(OPEN_COMMAND_PALETTE_EVENT, openHandler)
    }
  }, [])

  useEffect(() => {
    if (open) {
      setQuery('')
      setActiveIndex(0)
    }
  }, [open])

  useEffect(() => {
    setActiveIndex(0)
  }, [query])

  function runActive() {
    const item = filtered[activeIndex]
    if (item) {
      item.action()
      setOpen(false)
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-start justify-center bg-black/60 px-4 pt-[15vh] backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            className="w-full max-w-lg overflow-hidden border border-white/15 bg-bg-alt shadow-2xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-white/10 px-4 py-4">
              <Search size={16} className="text-text-muted" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowDown') {
                    e.preventDefault()
                    setActiveIndex((i) => Math.min(i + 1, filtered.length - 1))
                  }
                  if (e.key === 'ArrowUp') {
                    e.preventDefault()
                    setActiveIndex((i) => Math.max(i - 1, 0))
                  }
                  if (e.key === 'Enter') {
                    e.preventDefault()
                    runActive()
                  }
                }}
                placeholder="Search..."
                className="flex-1 bg-transparent text-sm text-text placeholder:text-text-muted focus:outline-none"
              />
              <kbd className="border border-white/15 px-1.5 py-0.5 text-[10px] uppercase tracking-[0.1em] text-text-muted">
                Esc
              </kbd>
            </div>
            <ul className="max-h-80 overflow-y-auto p-2">
              {filtered.length === 0 && (
                <li className="px-3 py-6 text-center text-sm text-text-muted">
                  No results
                </li>
              )}
              {filtered.map((item, i) => {
                const Icon = item.icon
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onMouseEnter={() => setActiveIndex(i)}
                      onClick={() => {
                        item.action()
                        setOpen(false)
                      }}
                      className={`flex w-full items-center gap-3 px-3 py-2.5 text-left text-sm transition-colors ${
                        i === activeIndex
                          ? 'bg-accent/10 text-accent'
                          : 'text-text-muted hover:text-text'
                      }`}
                    >
                      <Icon size={16} />
                      {item.label}
                    </button>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
