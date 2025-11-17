import type { ReceptionTeamMember } from '@/lib/types'
import { TEAM_MEMBER_ID } from './ids'

export const receptionTeamMembers: ReceptionTeamMember[] = [
  {
    teamMemberId: TEAM_MEMBER_ID,
    gcalEmail: 'sophie.martin@salon-elegance.fr',
    gcalIsShared: true,
    acceptNewClients: true,
    notificationsEnabled: true,
    preferredChannel: 'whatsapp',
    fallbackNumber: '+33612345678',
    isVisible: true,
  },
]
