import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContactLink } from '@/components/contact/ContactLink'
import { contactLinks } from '@/data/contactLinks'
import { staggerContainer } from '@/lib/motion'

export function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Connect"
        description="Open to full-time Financial Analyst, FP&A, and related finance and analytics roles."
      />
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2"
      >
        {contactLinks.map((link) => (
          <ContactLink key={link.label} link={link} />
        ))}
      </motion.div>
    </section>
  )
}
