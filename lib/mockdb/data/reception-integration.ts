import type { ReceptionIntegration } from '@/lib/types'

export const receptionIntegrations: ReceptionIntegration[] = [
  {
    googleCalendarEnabled: true,
    outlookCalendarEnabled: false,
    telegramEnabled: true,
    whatsappEnabled: true,
    syncStatus: 'synced',
    errorMessage: '',
  },
]
