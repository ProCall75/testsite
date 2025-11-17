import type { ReceptionTeamMemberStats } from '@/lib/types'
import { TEAM_MEMBER_ID } from './ids'

export const receptionTeamMemberStats: ReceptionTeamMemberStats[] = [
  {
    teamMemberId: TEAM_MEMBER_ID,
    completedBookings: 45,
    cancelledBookings: 3,
    ratingAvg: 4.8,
  },
]
