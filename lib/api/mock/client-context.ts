import { mockDB } from '@/lib/mockdb/schema'
import type { ClientContext } from '@/lib/domain'
import { getPros } from './pro'
import { getReception } from './reception'

export function getClientContext(): ClientContext {
  const client = mockDB.clients[0]
  if (!client) {
    throw new Error('ClientContext: client manquant dans mockDB')
  }

  const subscriptions = mockDB.subscriptions ?? []
  const clientProducts = mockDB.clientProducts ?? []
  const reception = getReception()
  const pros = getPros()

  return {
    client,
    subscriptions,
    clientProducts,
    reception,
    pros,
  }
}

