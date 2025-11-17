import { mockDB } from '@/lib/mockdb/schema'
import type { Reception } from '@/lib/domain'

export function getReception(): Reception {
  const details = mockDB.receptionDetails[0] ?? {
    address: '',
    city: '',
    postalCode: '',
    country: '',
    openingHours: {} as unknown,
    paymentMethods: [] as unknown,
    logoUrl: '',
    description: '',
  }

  const config = mockDB.receptionConfigs[0] ?? {
    assignmentStrategy: 'manual',
    relancesEnabled: false,
    feedbackEnabled: false,
    notificationsProEnabled: false,
  }

  const integrations = mockDB.receptionIntegrations[0] ?? {
    googleCalendarEnabled: false,
    outlookCalendarEnabled: false,
    telegramEnabled: false,
    whatsappEnabled: false,
    syncStatus: 'not_synced',
    errorMessage: '',
  }

  const services = mockDB.receptionServices ?? []

  return {
    details,
    config,
    integrations,
    services,
  }
}

