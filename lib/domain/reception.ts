import type {
  ReceptionDetails,
  ReceptionConfig,
  ReceptionIntegration,
  ReceptionService,
} from '@/lib/types'

export interface Reception {
  details: ReceptionDetails
  config: ReceptionConfig
  integrations: ReceptionIntegration
  services: ReceptionService[]
}
