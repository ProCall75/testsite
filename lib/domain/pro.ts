import type {
  TeamMember,
  ReceptionTeamMember,
  ReceptionTeamMemberStats,
  ReceptionTeamMemberSkill,
  ReceptionTeamMemberAvailability,
} from '@/lib/types'

export interface Pro {
  member: TeamMember
  reception: ReceptionTeamMember
  stats: ReceptionTeamMemberStats
  skills: ReceptionTeamMemberSkill[]
  availability: ReceptionTeamMemberAvailability[]
}

