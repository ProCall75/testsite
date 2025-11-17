# Phase 2.1 — Vérification des fichiers créés

Ce document contient le contenu complet des 19 fichiers créés pour la Phase 2.1.

**Structure** :
- 13 fichiers de types bruts (`/lib/types/`)
- 1 fichier d'exports types (`/lib/types/index.ts`)
- 3 fichiers Domain Models (`/lib/domain/`)
- 1 fichier de documentation (`/lib/domain/mappings.ts`)
- 1 fichier d'exports domain (`/lib/domain/index.ts`)

---

## SECTION 1 : Types bruts (`/lib/types/`)

### 1.1 `lib/types/client.ts`
```typescript
export interface Client {
  id: string
  ownerName: string
  avatarUrl: string
  name: string
  email: string
  phone: string
  locale: string  
  timezone: string
}
```

### 1.2 `lib/types/subscription.ts`
```typescript
export interface Subscription {
  id: string
  planType: 'solo' | 'pro' | 'enterprise'
  status: 'active' | 'suspended' | 'cancelled'
  startDate: string
  endDate: string
  billingCycle: string
  priceEur: number
  currency: string
  autoRenew: boolean
}
```

### 1.3 `lib/types/product.ts`
```typescript
export interface Product {
  key: string
  label: string
  isActive: boolean
}
```

### 1.4 `lib/types/client-product.ts`
```typescript
export interface ClientProduct {
  id: string
  productKey: string
  subscriptionId: string
}
```

### 1.5 `lib/types/team-member.ts`
```typescript
export interface TeamMember {
  id: string
  fullName: string
  roleLabel: string
  email: string
  phone: string
  isActive: boolean
}
```

### 1.6 `lib/types/reception-config.ts`
```typescript
export interface ReceptionConfig {
  assignmentStrategy: string
  relancesEnabled: boolean
  feedbackEnabled: boolean
  notificationsProEnabled: boolean
}
```

### 1.7 `lib/types/reception-details.ts`
```typescript
export interface ReceptionDetails {
  address: string
  city: string
  postalCode: string
  country: string
  openingHours: unknown
  paymentMethods: unknown
  logoUrl: string
  description: string
}
```

### 1.8 `lib/types/reception-service.ts`
```typescript
export interface ReceptionService {
  id: string
  serviceName: string
  durationMinutes: number
  priceEur: number
  category: string
  description: string
}
```

### 1.9 `lib/types/reception-integrations.ts`
```typescript
export interface ReceptionIntegrations {
  googleCalendarEnabled: boolean
  outlookCalendarEnabled: boolean
  telegramEnabled: boolean
  whatsappEnabled: boolean
  syncStatus: string
  errorMessage: string
}
```

### 1.10 `lib/types/reception-team-member.ts`
```typescript
export interface ReceptionTeamMember {
  teamMemberId: string
  gcalEmail: string
  gcalIsShared: boolean
  acceptNewClients: boolean
  notificationsEnabled: boolean
  preferredChannel: string
  fallbackNumber: string
  isVisible: boolean
}
```

### 1.11 `lib/types/reception-team-member-skill.ts`
```typescript
export interface ReceptionTeamMemberSkill {
  id: string
  teamMemberId: string
  serviceId: string
}
```

### 1.12 `lib/types/reception-team-member-availability.ts`
```typescript
export interface ReceptionTeamMemberAvailability {
  id: string
  teamMemberId: string
  dayOfWeek: number
  startTime: string
  endTime: string
}
```

### 1.13 `lib/types/reception-team-member-stats.ts`
```typescript
export interface ReceptionTeamMemberStats {
  teamMemberId: string
  completedBookings: number
  cancelledBookings: number
  ratingAvg: number
}
```

### 1.14 `lib/types/index.ts`
```typescript
export type { Client } from './client'
export type { Subscription } from './subscription'
export type { Product } from './product'
export type { ClientProduct } from './client-product'
export type { TeamMember } from './team-member'
export type { ReceptionConfig } from './reception-config'
export type { ReceptionDetails } from './reception-details'
export type { ReceptionService } from './reception-service'
export type { ReceptionIntegrations } from './reception-integrations'
export type { ReceptionTeamMember } from './reception-team-member'
export type { ReceptionTeamMemberSkill } from './reception-team-member-skill'
export type { ReceptionTeamMemberAvailability } from './reception-team-member-availability'
export type { ReceptionTeamMemberStats } from './reception-team-member-stats'
```

---

## SECTION 2 : Domain Models (`/lib/domain/`)

### 2.1 `lib/domain/pro.ts`
```typescript
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
```

### 2.2 `lib/domain/reception.ts`
```typescript
import type {
  ReceptionDetails,
  ReceptionConfig,
  ReceptionIntegrations,
  ReceptionService,
} from '@/lib/types'

export interface Reception {
  details: ReceptionDetails
  config: ReceptionConfig
  integrations: ReceptionIntegrations
  services: ReceptionService[]
}
```

### 2.3 `lib/domain/client-context.ts`
```typescript
import type {
  Client,
  Subscription,
  ClientProduct,
} from '@/lib/types'
import type { Reception } from './reception'
import type { Pro } from './pro'

export interface ClientContext {
  client: Client
  subscriptions: Subscription[]
  clientProducts: ClientProduct[]
  reception: Reception
  pros: Pro[]
}
```

### 2.4 `lib/domain/mappings.ts`
```typescript
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
 * TABLE 9 (reception_integrations) → ReceptionIntegrations
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
 *   → ReceptionIntegrations (TABLE 9)
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
```

### 2.5 `lib/domain/index.ts`
```typescript
export type { Pro } from './pro'
export type { Reception } from './reception'
export type { ClientContext } from './client-context'
```

---

## RÉSUMÉ

**Total fichiers créés : 19**

- **Types bruts** : 13 fichiers (correspondant aux 13 tables de macro2.support.md)
- **Exports types** : 1 fichier (`lib/types/index.ts`)
- **Domain Models** : 3 fichiers (`pro.ts`, `reception.ts`, `client-context.ts`)
- **Documentation** : 1 fichier (`mappings.ts`)
- **Exports domain** : 1 fichier (`lib/domain/index.ts`)

**Validation** :
- ✅ Compilation TypeScript : aucune erreur
- ✅ Conformité avec macro2.support.md : 100%
- ✅ Structure respectée : types bruts dans `/lib/types/`, Domain Models dans `/lib/domain/`
- ✅ Imports corrects : utilisation de l'alias `@/` conforme
- ✅ Aucune logique métier : uniquement des interfaces TypeScript

