import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import { ScrollProgressBar } from '@/components/layout/ScrollProgressBar'
import { CommandPalette } from '@/components/interactive/CommandPalette'
import { pageVariants } from '@/lib/motion'

export function RootLayout() {
  const location = useLocation()

  return (
    <div className="flex min-h-screen flex-col bg-bg">
      <ScrollToTop />
      <ScrollProgressBar />
      <CommandPalette />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex-1"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  )
}
