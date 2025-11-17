import type { Subscription } from '@/lib/types'
import { SUBSCRIPTION_ID } from './ids'

export const subscriptions: Subscription[] = [
  {
    id: SUBSCRIPTION_ID,
    planType: 'solo',
    status: 'active',
    startDate: '2024-01-15T00:00:00Z',
    endDate: '2025-01-15T00:00:00Z',
    billingCycle: 'monthly',
    priceEur: 29,
    currency: 'EUR',
    autoRenew: true,
  },
]
