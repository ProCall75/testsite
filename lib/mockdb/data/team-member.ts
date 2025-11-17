import type { TeamMember } from '@/lib/types'
import { TEAM_MEMBER_ID } from './ids'

export const teamMembers: TeamMember[] = [
  {
    id: TEAM_MEMBER_ID,
    fullName: 'Sophie Martin',
    roleLabel: 'Propriétaire',
    email: 'sophie.martin@salon-elegance.fr',
    phone: '+33612345678',
    isActive: true,
  },
]
