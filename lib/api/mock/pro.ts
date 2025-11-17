import { mockDB } from '@/lib/mockdb/schema'
import type { Pro } from '@/lib/domain'

export function getPros(): Pro[] {
  const pros: Pro[] = []

  for (const member of mockDB.teamMembers) {
    const reception = mockDB.receptionTeamMembers.find(
      (r) => r.teamMemberId === member.id
    ) ?? {
      teamMemberId: member.id,
      gcalEmail: '',
      gcalIsShared: false,
      acceptNewClients: true,
      notificationsEnabled: false,
      preferredChannel: 'whatsapp',
      fallbackNumber: '',
      isVisible: true,
    }

    const stats = mockDB.receptionTeamMemberStats.find(
      (s) => s.teamMemberId === member.id
    ) ?? {
      teamMemberId: member.id,
      completedBookings: 0,
      cancelledBookings: 0,
      ratingAvg: 0,
    }

    const skills = mockDB.receptionTeamMemberSkills.filter(
      (s) => s.teamMemberId === member.id
    )

    const availability = mockDB.receptionTeamMemberAvailabilities.filter(
      (a) => a.teamMemberId === member.id
    )

    pros.push({
      member,
      reception,
      stats,
      skills,
      availability,
    })
  }

  return pros
}

export function getProById(teamMemberId: string): Pro | null {
  const member = mockDB.teamMembers.find((m) => m.id === teamMemberId)
  if (!member) {
    return null
  }

  const reception = mockDB.receptionTeamMembers.find(
    (r) => r.teamMemberId === member.id
  ) ?? {
    teamMemberId: member.id,
    gcalEmail: '',
    gcalIsShared: false,
    acceptNewClients: true,
    notificationsEnabled: false,
    preferredChannel: 'whatsapp',
    fallbackNumber: '',
    isVisible: true,
  }

  const stats = mockDB.receptionTeamMemberStats.find(
    (s) => s.teamMemberId === member.id
  ) ?? {
    teamMemberId: member.id,
    completedBookings: 0,
    cancelledBookings: 0,
    ratingAvg: 0,
  }

  const skills = mockDB.receptionTeamMemberSkills.filter(
    (s) => s.teamMemberId === member.id
  )

  const availability = mockDB.receptionTeamMemberAvailabilities.filter(
    (a) => a.teamMemberId === member.id
  )

  return {
    member,
    reception,
    stats,
    skills,
    availability,
  }
}

