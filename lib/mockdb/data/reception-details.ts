import type { ReceptionDetails } from '@/lib/types'

export const receptionDetails: ReceptionDetails[] = [
  {
    address: '15 Rue de la République',
    city: 'Paris',
    postalCode: '75001',
    country: 'France',
    openingHours: {
      monday: { open: '09:00', close: '19:00' },
      tuesday: { open: '09:00', close: '19:00' },
      wednesday: { open: '09:00', close: '19:00' },
      thursday: { open: '09:00', close: '19:00' },
      friday: { open: '09:00', close: '19:00' },
      saturday: { open: '09:00', close: '18:00' },
      sunday: { open: '10:00', close: '16:00' },
    } as unknown,
    paymentMethods: ['cash', 'card', 'check'] as unknown,
    logoUrl: '',
    description: 'Salon de coiffure moderne au cœur de Paris, spécialisé dans les coupes tendances et les colorations personnalisées.',
  },
]
