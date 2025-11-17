import type {
  Client,
  Subscription,
  ClientProduct,
} from '@/lib/types'
import type { Reception } from './reception'
import type { Pro } from './pro'

export interface ClientContext {
  client: Client
  subscriptions: Subscription[]
  clientProducts: ClientProduct[]
  reception: Reception
  pros: Pro[]
}

