import type { ReceptionService } from '@/lib/types'
import { SERVICE_ID_1, SERVICE_ID_2, SERVICE_ID_3 } from './ids'

export const receptionServices: ReceptionService[] = [
  {
    id: SERVICE_ID_1,
    serviceName: 'Coupe Homme',
    durationMinutes: 30,
    priceEur: 25,
    category: 'Coiffure',
    description: 'Coupe de cheveux pour homme avec finition au rasoir',
  },
  {
    id: SERVICE_ID_2,
    serviceName: 'Coloration complète',
    durationMinutes: 120,
    priceEur: 85,
    category: 'Coloration',
    description: 'Coloration complète avec soin et brushing',
  },
  {
    id: SERVICE_ID_3,
    serviceName: 'Brushing',
    durationMinutes: 30,
    priceEur: 20,
    category: 'Soin',
    description: 'Brushing professionnel avec produits de soin',
  },
]
