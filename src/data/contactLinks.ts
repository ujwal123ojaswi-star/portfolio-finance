import { Mail, Phone, MapPin } from 'lucide-react'
import { LinkedinIcon } from '@/components/icons/LinkedinIcon'
import type { ContactLinkData } from '@/types'
import { profile } from './profile'

export const contactLinks: ContactLinkData[] = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    copyValue: profile.email,
  },
  {
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/[^+\d]/g, '')}`,
    icon: Phone,
    copyValue: profile.phone,
  },
  {
    label: 'LinkedIn',
    value: `linkedin.com/in/${profile.linkedinHandle}`,
    href: profile.linkedinUrl,
    icon: LinkedinIcon,
    external: true,
  },
  {
    label: 'Location',
    value: profile.location,
    href: '',
    icon: MapPin,
  },
]
