/**
 * MAPPINGS — Documentation des correspondances table → type brut → Domain Model
 *
 * Ce fichier est documentaire uniquement.
 * Cursor ne doit pas parser son contenu pour générer du code.
 */

/**
 * Mapping table → type brut
 *
 * TABLE 1 (clients) → Client
 * TABLE 2 (subscriptions) → Subscription
 * TABLE 3 (products) → Product
 * TABLE 4 (client_products) → ClientProduct
 * TABLE 5 (team_members) → TeamMember
 * TABLE 6 (reception_config) → ReceptionConfig
 * TABLE 7 (reception_details) → ReceptionDetails
 * TABLE 8 (reception_services) → ReceptionService
 * TABLE 9 (reception_integrations) → ReceptionIntegration
 * TABLE 10 (reception_team_members) → ReceptionTeamMember
 * TABLE 11 (reception_team_member_skills) → ReceptionTeamMemberSkill
 * TABLE 12 (reception_team_member_availability) → ReceptionTeamMemberAvailability
 * TABLE 13 (reception_team_member_stats) → ReceptionTeamMemberStats
 */

/**
 * Mapping type brut → Domain Model
 *
 * Pro (Domain Model)
 *   → TeamMember (TABLE 5)
 *   → ReceptionTeamMember (TABLE 10)
 *   → ReceptionTeamMemberStats (TABLE 13)
 *   → ReceptionTeamMemberSkill[] (TABLE 11)
 *   → ReceptionTeamMemberAvailability[] (TABLE 12)
 *
 * Reception (Domain Model)
 *   → ReceptionDetails (TABLE 7)
 *   → ReceptionConfig (TABLE 6)
 *   → ReceptionIntegration (TABLE 9)
 *   → ReceptionService[] (TABLE 8)
 *
 * ClientContext (Domain Model)
 *   → Client (TABLE 1)
 *   → Subscription[] (TABLE 2)
 *   → ClientProduct[] (TABLE 4)
 *   → Reception (Domain Model agrégé)
 *   → Pro[] (Domain Model agrégé)
 */

/**
 * Relations front-driven
 *
 * Services
 *   - ReceptionService[] appartient à Reception
 *   - ReceptionTeamMemberSkill lie Pro → ReceptionService via serviceId
 *
 * Pros
 *   - Pro[] appartient à ClientContext
 *   - Pro agrège TeamMember + ReceptionTeamMember + stats + skills + availability
 *
 * Skills
 *   - ReceptionTeamMemberSkill lie teamMemberId → serviceId
 *   - Un Pro a plusieurs skills (tableau)
 *
 * Availability
 *   - ReceptionTeamMemberAvailability lie teamMemberId → horaires
 *   - Un Pro a plusieurs créneaux d'disponibilité (tableau)
 */
