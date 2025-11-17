import type { ReceptionTeamMemberAvailability } from '@/lib/types'
import { AVAILABILITY_ID_1, AVAILABILITY_ID_2, AVAILABILITY_ID_3, AVAILABILITY_ID_4, AVAILABILITY_ID_5, TEAM_MEMBER_ID } from './ids'

export const receptionTeamMemberAvailabilities: ReceptionTeamMemberAvailability[] = [
  {
    id: AVAILABILITY_ID_1,
    teamMemberId: TEAM_MEMBER_ID,
    dayOfWeek: 1,
    startTime: '09:00',
    endTime: '19:00',
  },
  {
    id: AVAILABILITY_ID_2,
    teamMemberId: TEAM_MEMBER_ID,
    dayOfWeek: 2,
    startTime: '09:00',
    endTime: '19:00',
  },
  {
    id: AVAILABILITY_ID_3,
    teamMemberId: TEAM_MEMBER_ID,
    dayOfWeek: 3,
    startTime: '09:00',
    endTime: '19:00',
  },
  {
    id: AVAILABILITY_ID_4,
    teamMemberId: TEAM_MEMBER_ID,
    dayOfWeek: 4,
    startTime: '09:00',
    endTime: '19:00',
  },
  {
    id: AVAILABILITY_ID_5,
    teamMemberId: TEAM_MEMBER_ID,
    dayOfWeek: 5,
    startTime: '09:00',
    endTime: '19:00',
  },
]
