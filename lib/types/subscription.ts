export interface Subscription {
  id: string
  planType: 'solo' | 'pro' | 'enterprise'
  status: 'active' | 'suspended' | 'cancelled'
  startDate: string
  endDate: string
  billingCycle: string
  priceEur: number
  currency: string
  autoRenew: boolean
}


