import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const WORDS = ['Financial Analyst', 'Financial Modeling Analyst', 'BI Developer', 'Data Analyst']

export function RoleCycle() {
  const [reduced, setReduced] = useState(false)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  useEffect(() => {
    if (reduced) return
    const interval = window.setInterval(() => {
      setIndex((i) => (i + 1) % WORDS.length)
    }, 2600)
    return () => window.clearInterval(interval)
  }, [reduced])

  if (reduced) {
    return <span className="italic text-accent">{WORDS[0]}</span>
  }

  return (
    <span className="relative inline-block align-baseline">
      <AnimatePresence mode="wait">
        <motion.span
          key={WORDS[index]}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.5 }}
          className="inline-block italic text-accent"
        >
          {WORDS[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
