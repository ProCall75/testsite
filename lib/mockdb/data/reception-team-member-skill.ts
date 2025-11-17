import type { ReceptionTeamMemberSkill } from '@/lib/types'
import { SKILL_ID_1, SKILL_ID_2, SKILL_ID_3, SERVICE_ID_1, SERVICE_ID_2, SERVICE_ID_3, TEAM_MEMBER_ID } from './ids'

export const receptionTeamMemberSkills: ReceptionTeamMemberSkill[] = [
  {
    id: SKILL_ID_1,
    teamMemberId: TEAM_MEMBER_ID,
    serviceId: SERVICE_ID_1,
  },
  {
    id: SKILL_ID_2,
    teamMemberId: TEAM_MEMBER_ID,
    serviceId: SERVICE_ID_2,
  },
  {
    id: SKILL_ID_3,
    teamMemberId: TEAM_MEMBER_ID,
    serviceId: SERVICE_ID_3,
  },
]
