import type { Client } from '@/lib/types'
import { CLIENT_ID } from './ids'

export const clients: Client[] = [
  {
    id: CLIENT_ID,
    ownerName: 'Sophie Martin',
    avatarUrl: '',
    name: 'Salon Coiffure Élégance',
    email: 'sophie.martin@salon-elegance.fr',
    phone: '+33612345678',
    locale: 'fr-FR',
    timezone: 'Europe/Paris',
  },
]
