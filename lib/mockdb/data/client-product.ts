import type { ClientProduct } from '@/lib/types'
import { CLIENT_PRODUCT_ID, PRODUCT_KEY_RECEPTION, SUBSCRIPTION_ID } from './ids'

export const clientProducts: ClientProduct[] = [
  {
    id: CLIENT_PRODUCT_ID,
    productKey: PRODUCT_KEY_RECEPTION,
    subscriptionId: SUBSCRIPTION_ID,
  },
]
