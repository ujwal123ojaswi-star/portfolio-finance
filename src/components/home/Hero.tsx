import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Tag } from '@/components/ui/Tag'
import { Button } from '@/components/ui/Button'
import { AvatarPlaceholder } from '@/components/ui/AvatarPlaceholder'
import { RoleCycle } from '@/components/home/RoleCycle'
import { profile } from '@/data/profile'
import { fadeUp, staggerContainer } from '@/lib/motion'

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const avatarY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const avatarOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-b border-white/10"
    >
      <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-16 px-6 py-24 md:flex-row md:justify-between md:py-40 md:px-8">
        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          animate="visible"
          className="max-w-xl text-center md:text-left"
        >
          <motion.div variants={fadeUp}>
            <Tag accent>{profile.role}</Tag>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="mt-8 font-display text-5xl font-medium leading-tight text-text md:text-7xl"
          >
            {profile.name}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg font-light text-text-muted"
          >
            <RoleCycle />
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-2 text-xs uppercase tracking-[0.2em] text-text-muted"
          >
            {profile.location}
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap justify-center gap-4 md:justify-start"
          >
            <Button to="/projects">View Projects</Button>
            <Button to="/contact" variant="ghost">
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div style={{ y: avatarY, opacity: avatarOpacity }}>
            <AvatarPlaceholder />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
