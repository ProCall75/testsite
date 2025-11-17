import type {
  Client,
  Subscription,
  Product,
  ClientProduct,
  TeamMember,
  ReceptionConfig,
  ReceptionDetails,
  ReceptionService,
  ReceptionIntegration,
  ReceptionTeamMember,
  ReceptionTeamMemberSkill,
  ReceptionTeamMemberAvailability,
  ReceptionTeamMemberStats,
} from '@/lib/types'
import * as data from './data'

export interface MockDB {
  clients: Client[]
  subscriptions: Subscription[]
  products: Product[]
  clientProducts: ClientProduct[]
  teamMembers: TeamMember[]
  receptionConfigs: ReceptionConfig[]
  receptionDetails: ReceptionDetails[]
  receptionServices: ReceptionService[]
  receptionIntegrations: ReceptionIntegration[]
  receptionTeamMembers: ReceptionTeamMember[]
  receptionTeamMemberSkills: ReceptionTeamMemberSkill[]
  receptionTeamMemberAvailabilities: ReceptionTeamMemberAvailability[]
  receptionTeamMemberStats: ReceptionTeamMemberStats[]
}

export const mockDB: MockDB = {
  clients: data.clients,
  subscriptions: data.subscriptions,
  products: data.products,
  clientProducts: data.clientProducts,
  teamMembers: data.teamMembers,
  receptionConfigs: data.receptionConfigs,
  receptionDetails: data.receptionDetails,
  receptionServices: data.receptionServices,
  receptionIntegrations: data.receptionIntegrations,
  receptionTeamMembers: data.receptionTeamMembers,
  receptionTeamMemberSkills: data.receptionTeamMemberSkills,
  receptionTeamMemberAvailabilities: data.receptionTeamMemberAvailabilities,
  receptionTeamMemberStats: data.receptionTeamMemberStats,
}
