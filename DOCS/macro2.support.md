  # Macro 2 - Support Documentation

  **Source de vérité externe** - Documentation exhaustive basée sur le code existant.

  ---

  ## 1. Types Front (lib/types)

  ### 1.1 Client
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

  ### 1.2 Subscription
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

  ### 1.3 Product
  ```typescript
  export interface Product {
    key: string
    label: string
    isActive: boolean
  }
  ```

  ### 1.4 ClientProduct
  ```typescript
  export interface ClientProduct {
    id: string
    productKey: string
    subscriptionId: string
  }
  ```

  ### 1.5 TeamMember
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

  ### 1.6 ReceptionConfig
  ```typescript
  export interface ReceptionConfig {
    assignmentStrategy: string
    relancesEnabled: boolean
    feedbackEnabled: boolean
    notificationsProEnabled: boolean
  }
  ```

  ### 1.7 ReceptionDetails
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

  ### 1.8 ReceptionIntegration
  ```typescript
  export interface ReceptionIntegration {
    googleCalendarEnabled: boolean
    outlookCalendarEnabled: boolean
    telegramEnabled: boolean
    whatsappEnabled: boolean
    syncStatus: string
    errorMessage: string
  }
  ```

  ### 1.9 ReceptionService
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

  ### 1.10 ReceptionTeamMember
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

  ### 1.11 ReceptionTeamMemberAvailability
  ```typescript
  export interface ReceptionTeamMemberAvailability {
    id: string
    teamMemberId: string
    dayOfWeek: number
    startTime: string
    endTime: string
  }
  ```

  ### 1.12 ReceptionTeamMemberSkill
  ```typescript
  export interface ReceptionTeamMemberSkill {
    id: string
    teamMemberId: string
    serviceId: string
  }
  ```

  ### 1.13 ReceptionTeamMemberStats
  ```typescript
  export interface ReceptionTeamMemberStats {
    teamMemberId: string
    completedBookings: number
    cancelledBookings: number
    ratingAvg: number
  }
  ```

  ---

  ## 2. Domain Models (lib/domain)

  ### 2.1 Pro
  ```typescript
  export interface Pro {
    member: TeamMember
    reception: ReceptionTeamMember
    stats: ReceptionTeamMemberStats
    skills: ReceptionTeamMemberSkill[]
    availability: ReceptionTeamMemberAvailability[]
  }
  ```

  **Composition :**
  - `member` → `TeamMember` (type brut)
  - `reception` → `ReceptionTeamMember` (type brut)
  - `stats` → `ReceptionTeamMemberStats` (type brut)
  - `skills` → `ReceptionTeamMemberSkill[]` (tableau de types bruts)
  - `availability` → `ReceptionTeamMemberAvailability[]` (tableau de types bruts)

  ### 2.2 Reception
  ```typescript
  export interface Reception {
    details: ReceptionDetails
    config: ReceptionConfig
    integrations: ReceptionIntegration
    services: ReceptionService[]
  }
  ```

  **Composition :**
  - `details` → `ReceptionDetails` (type brut)
  - `config` → `ReceptionConfig` (type brut)
  - `integrations` → `ReceptionIntegration` (type brut)
  - `services` → `ReceptionService[]` (tableau de types bruts)

  ### 2.3 ClientContext
  ```typescript
  export interface ClientContext {
    client: Client
    subscriptions: Subscription[]
    clientProducts: ClientProduct[]
    reception: Reception
    pros: Pro[]
  }
  ```

  **Composition :**
  - `client` → `Client` (type brut)
  - `subscriptions` → `Subscription[]` (tableau de types bruts)
  - `clientProducts` → `ClientProduct[]` (tableau de types bruts)
  - `reception` → `Reception` (Domain Model agrégé)
  - `pros` → `Pro[]` (tableau de Domain Models agrégés)

  ---

  ## 3. Structure MockDB (lib/mockdb/schema.ts)

  ### 3.1 Interface MockDB
  ```typescript
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
  ```

  ### 3.2 Instance mockDB
  ```typescript
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
  ```

  ---

  ## 4. Collections MockDB (lib/mockdb/collections)

  ### 4.1 clients
  **Type :** `Client[]`  
  **Fichier :** `lib/mockdb/collections/client.ts`  
  **Définition :**
  ```typescript
  export const clients: Client[] = []
  ```

  ### 4.2 subscriptions
  **Type :** `Subscription[]`  
  **Fichier :** `lib/mockdb/collections/subscription.ts`  
  **Définition :**
  ```typescript
  export const subscriptions: Subscription[] = []
  ```

  ### 4.3 products
  **Type :** `Product[]`  
  **Fichier :** `lib/mockdb/collections/product.ts`  
  **Définition :**
  ```typescript
  export const products: Product[] = []
  ```

  ### 4.4 clientProducts
  **Type :** `ClientProduct[]`  
  **Fichier :** `lib/mockdb/collections/client-product.ts`  
  **Définition :**
  ```typescript
  export const clientProducts: ClientProduct[] = []
  ```

  ### 4.5 teamMembers
  **Type :** `TeamMember[]`  
  **Fichier :** `lib/mockdb/collections/team-member.ts`  
  **Définition :**
  ```typescript
  export const teamMembers: TeamMember[] = []
  ```

  ### 4.6 receptionConfigs
  **Type :** `ReceptionConfig[]`  
  **Fichier :** `lib/mockdb/collections/reception-config.ts`  
  **Définition :**
  ```typescript
  export const receptionConfigs: ReceptionConfig[] = []
  ```

  ### 4.7 receptionDetails
  **Type :** `ReceptionDetails[]`  
  **Fichier :** `lib/mockdb/collections/reception-details.ts`  
  **Définition :**
  ```typescript
  export const receptionDetails: ReceptionDetails[] = []
  ```

  ### 4.8 receptionServices
  **Type :** `ReceptionService[]`  
  **Fichier :** `lib/mockdb/collections/reception-service.ts`  
  **Définition :**
  ```typescript
  export const receptionServices: ReceptionService[] = []
  ```

  ### 4.9 receptionIntegrations
  **Type :** `ReceptionIntegration[]`  
  **Fichier :** `lib/mockdb/collections/reception-integration.ts`  
  **Définition :**
  ```typescript
  export const receptionIntegrations: ReceptionIntegration[] = []
  ```

  ### 4.10 receptionTeamMembers
  **Type :** `ReceptionTeamMember[]`  
  **Fichier :** `lib/mockdb/collections/reception-team-member.ts`  
  **Définition :**
  ```typescript
  export const receptionTeamMembers: ReceptionTeamMember[] = []
  ```

  ### 4.11 receptionTeamMemberSkills
  **Type :** `ReceptionTeamMemberSkill[]`  
  **Fichier :** `lib/mockdb/collections/reception-team-member-skill.ts`  
  **Définition :**
  ```typescript
  export const receptionTeamMemberSkills: ReceptionTeamMemberSkill[] = []
  ```

  ### 4.12 receptionTeamMemberAvailabilities
  **Type :** `ReceptionTeamMemberAvailability[]`  
  **Fichier :** `lib/mockdb/collections/reception-team-member-availability.ts`  
  **Définition :**
  ```typescript
  export const receptionTeamMemberAvailabilities: ReceptionTeamMemberAvailability[] = []
  ```

  ### 4.13 receptionTeamMemberStats
  **Type :** `ReceptionTeamMemberStats[]`  
  **Fichier :** `lib/mockdb/collections/reception-team-member-stats.ts`  
  **Définition :**
  ```typescript
  export const receptionTeamMemberStats: ReceptionTeamMemberStats[] = []
  ```

  ---

  ## 5. Données Mock (lib/mockdb/data)

  ### 5.1 IDs de référence (lib/mockdb/data/ids.ts)
  ```typescript
  export const CLIENT_ID = 'client-1'
  export const SUBSCRIPTION_ID = 'sub-1'
  export const PRODUCT_KEY_RECEPTION = 'reception'
  export const CLIENT_PRODUCT_ID = 'client-product-1'
  export const TEAM_MEMBER_ID = 'team-member-1'
  export const SERVICE_ID_1 = 'service-1'
  export const SERVICE_ID_2 = 'service-2'
  export const SERVICE_ID_3 = 'service-3'
  export const SKILL_ID_1 = 'skill-1'
  export const SKILL_ID_2 = 'skill-2'
  export const SKILL_ID_3 = 'skill-3'
  export const AVAILABILITY_ID_1 = 'availability-1'
  export const AVAILABILITY_ID_2 = 'availability-2'
  export const AVAILABILITY_ID_3 = 'availability-3'
  export const AVAILABILITY_ID_4 = 'availability-4'
  export const AVAILABILITY_ID_5 = 'availability-5'
  ```

  ### 5.2 clients
  **Fichier :** `lib/mockdb/data/client.ts`  
  **Données :**
  ```typescript
  export const clients: Client[] = [
    {
      id: CLIENT_ID,
      ownerName: 'Sophie Martin',
      avatarUrl: '',
      name: 'Salon Coiffure Élégance',
      email: 'sophie.martin@salon-elegance.fr',
      phone: '+33612345678',
      locale: 'fr-FR',
      timezone: 'Europe/Paris',
    },
  ]
  ```

  ### 5.3 subscriptions
  **Fichier :** `lib/mockdb/data/subscription.ts`  
  **Données :**
  ```typescript
  export const subscriptions: Subscription[] = [
    {
      id: SUBSCRIPTION_ID,
      planType: 'solo',
      status: 'active',
      startDate: '2024-01-15T00:00:00Z',
      endDate: '2025-01-15T00:00:00Z',
      billingCycle: 'monthly',
      priceEur: 29,
      currency: 'EUR',
      autoRenew: true,
    },
  ]
  ```

  ### 5.4 products
  **Fichier :** `lib/mockdb/data/product.ts`  
  **Données :**
  ```typescript
  export const products: Product[] = [
    {
      key: PRODUCT_KEY_RECEPTION,
      label: 'Alfred Reception',
      isActive: true,
    },
  ]
  ```

  ### 5.5 clientProducts
  **Fichier :** `lib/mockdb/data/client-product.ts`  
  **Données :**
  ```typescript
  export const clientProducts: ClientProduct[] = [
    {
      id: CLIENT_PRODUCT_ID,
      productKey: PRODUCT_KEY_RECEPTION,
      subscriptionId: SUBSCRIPTION_ID,
    },
  ]
  ```

  ### 5.6 teamMembers
  **Fichier :** `lib/mockdb/data/team-member.ts`  
  **Données :**
  ```typescript
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
  ```

  ### 5.7 receptionConfigs
  **Fichier :** `lib/mockdb/data/reception-config.ts`  
  **Données :**
  ```typescript
  export const receptionConfigs: ReceptionConfig[] = [
    {
      assignmentStrategy: 'manual',
      relancesEnabled: true,
      feedbackEnabled: true,
      notificationsProEnabled: false,
    },
  ]
  ```

  ### 5.8 receptionDetails
  **Fichier :** `lib/mockdb/data/reception-details.ts`  
  **Données :**
  ```typescript
  export const receptionDetails: ReceptionDetails[] = [
    {
      address: '15 Rue de la République',
      city: 'Paris',
      postalCode: '75001',
      country: 'France',
      openingHours: {
        monday: { open: '09:00', close: '19:00' },
        tuesday: { open: '09:00', close: '19:00' },
        wednesday: { open: '09:00', close: '19:00' },
        thursday: { open: '09:00', close: '19:00' },
        friday: { open: '09:00', close: '19:00' },
        saturday: { open: '09:00', close: '18:00' },
        sunday: { open: '10:00', close: '16:00' },
      } as unknown,
      paymentMethods: ['cash', 'card', 'check'] as unknown,
      logoUrl: '',
      description: 'Salon de coiffure moderne au cœur de Paris, spécialisé dans les coupes tendances et les colorations personnalisées.',
    },
  ]
  ```

  ### 5.9 receptionServices
  **Fichier :** `lib/mockdb/data/reception-service.ts`  
  **Données :**
  ```typescript
  export const receptionServices: ReceptionService[] = [
    {
      id: SERVICE_ID_1,
      serviceName: 'Coupe Homme',
      durationMinutes: 30,
      priceEur: 25,
      category: 'Coiffure',
      description: 'Coupe de cheveux pour homme avec finition au rasoir',
    },
    {
      id: SERVICE_ID_2,
      serviceName: 'Coloration complète',
      durationMinutes: 120,
      priceEur: 85,
      category: 'Coloration',
      description: 'Coloration complète avec soin et brushing',
    },
    {
      id: SERVICE_ID_3,
      serviceName: 'Brushing',
      durationMinutes: 30,
      priceEur: 20,
      category: 'Soin',
      description: 'Brushing professionnel avec produits de soin',
    },
  ]
  ```

  ### 5.10 receptionIntegrations
  **Fichier :** `lib/mockdb/data/reception-integration.ts`  
  **Données :**
  ```typescript
  export const receptionIntegrations: ReceptionIntegration[] = [
    {
      googleCalendarEnabled: true,
      outlookCalendarEnabled: false,
      telegramEnabled: true,
      whatsappEnabled: true,
      syncStatus: 'synced',
      errorMessage: '',
    },
  ]
  ```

  ### 5.11 receptionTeamMembers
  **Fichier :** `lib/mockdb/data/reception-team-member.ts`  
  **Données :**
  ```typescript
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
  ```

  ### 5.12 receptionTeamMemberSkills
  **Fichier :** `lib/mockdb/data/reception-team-member-skill.ts`  
  **Données :**
  ```typescript
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
  ```

  ### 5.13 receptionTeamMemberAvailabilities
  **Fichier :** `lib/mockdb/data/reception-team-member-availability.ts`  
  **Données :**
  ```typescript
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
  ```

  ### 5.14 receptionTeamMemberStats
  **Fichier :** `lib/mockdb/data/reception-team-member-stats.ts`  
  **Données :**
  ```typescript
  export const receptionTeamMemberStats: ReceptionTeamMemberStats[] = [
    {
      teamMemberId: TEAM_MEMBER_ID,
      completedBookings: 45,
      cancelledBookings: 3,
      ratingAvg: 4.8,
    },
  ]
  ```

  ---

  ## 6. Relations structurées

  ### 6.1 Mapping Table → Type Brut

  | Table | Type Brut | Collection MockDB |
  |-------|-----------|-------------------|
  | TABLE 1 (clients) | `Client` | `mockDB.clients` |
  | TABLE 2 (subscriptions) | `Subscription` | `mockDB.subscriptions` |
  | TABLE 3 (products) | `Product` | `mockDB.products` |
  | TABLE 4 (client_products) | `ClientProduct` | `mockDB.clientProducts` |
  | TABLE 5 (team_members) | `TeamMember` | `mockDB.teamMembers` |
  | TABLE 6 (reception_config) | `ReceptionConfig` | `mockDB.receptionConfigs` |
  | TABLE 7 (reception_details) | `ReceptionDetails` | `mockDB.receptionDetails` |
  | TABLE 8 (reception_services) | `ReceptionService` | `mockDB.receptionServices` |
  | TABLE 9 (reception_integrations) | `ReceptionIntegration` | `mockDB.receptionIntegrations` |
  | TABLE 10 (reception_team_members) | `ReceptionTeamMember` | `mockDB.receptionTeamMembers` |
  | TABLE 11 (reception_team_member_skills) | `ReceptionTeamMemberSkill` | `mockDB.receptionTeamMemberSkills` |
  | TABLE 12 (reception_team_member_availability) | `ReceptionTeamMemberAvailability` | `mockDB.receptionTeamMemberAvailabilities` |
  | TABLE 13 (reception_team_member_stats) | `ReceptionTeamMemberStats` | `mockDB.receptionTeamMemberStats` |

  ### 6.2 Mapping Type Brut → Domain Model

  #### Pro (Domain Model)
  - `member` → `TeamMember` (TABLE 5)
  - `reception` → `ReceptionTeamMember` (TABLE 10)
  - `stats` → `ReceptionTeamMemberStats` (TABLE 13)
  - `skills` → `ReceptionTeamMemberSkill[]` (TABLE 11)
  - `availability` → `ReceptionTeamMemberAvailability[]` (TABLE 12)

  #### Reception (Domain Model)
  - `details` → `ReceptionDetails` (TABLE 7)
  - `config` → `ReceptionConfig` (TABLE 6)
  - `integrations` → `ReceptionIntegration` (TABLE 9)
  - `services` → `ReceptionService[]` (TABLE 8)

  #### ClientContext (Domain Model)
  - `client` → `Client` (TABLE 1)
  - `subscriptions` → `Subscription[]` (TABLE 2)
  - `clientProducts` → `ClientProduct[]` (TABLE 4)
  - `reception` → `Reception` (Domain Model agrégé)
  - `pros` → `Pro[]` (Domain Model agrégé)

  ### 6.3 Relations par clés étrangères

  #### Relations Client → Subscription → Product
  - `ClientProduct.productKey` → `Product.key`
  - `ClientProduct.subscriptionId` → `Subscription.id`
  - `Subscription.id` → référencé par `ClientProduct.subscriptionId`

  #### Relations TeamMember → ReceptionTeamMember
  - `ReceptionTeamMember.teamMemberId` → `TeamMember.id`

  #### Relations ReceptionTeamMember → Services
  - `ReceptionTeamMemberSkill.teamMemberId` → `TeamMember.id`
  - `ReceptionTeamMemberSkill.serviceId` → `ReceptionService.id`

  #### Relations ReceptionTeamMember → Availability
  - `ReceptionTeamMemberAvailability.teamMemberId` → `TeamMember.id`

  #### Relations ReceptionTeamMember → Stats
  - `ReceptionTeamMemberStats.teamMemberId` → `TeamMember.id`

  ### 6.4 Relations front-driven

  #### Services
  - `ReceptionService[]` appartient à `Reception` (Domain Model)
  - `ReceptionTeamMemberSkill` lie `Pro` → `ReceptionService` via `serviceId`

  #### Pros
  - `Pro[]` appartient à `ClientContext` (Domain Model)
  - `Pro` agrège `TeamMember` + `ReceptionTeamMember` + `stats` + `skills` + `availability`

  #### Skills
  - `ReceptionTeamMemberSkill` lie `teamMemberId` → `serviceId`
  - Un `Pro` a plusieurs `skills` (tableau)

  #### Availability
  - `ReceptionTeamMemberAvailability` lie `teamMemberId` → horaires
  - Un `Pro` a plusieurs créneaux d'disponibilité (tableau)

  ---

  ## 7. Structure des fichiers

  ### 7.1 Types (lib/types)
  - `index.ts` - Exports de tous les types
  - `client.ts` - Type `Client`
  - `subscription.ts` - Type `Subscription`
  - `product.ts` - Type `Product`
  - `client-product.ts` - Type `ClientProduct`
  - `team-member.ts` - Type `TeamMember`
  - `reception-config.ts` - Type `ReceptionConfig`
  - `reception-details.ts` - Type `ReceptionDetails`
  - `reception-integration.ts` - Type `ReceptionIntegration`
  - `reception-service.ts` - Type `ReceptionService`
  - `reception-team-member.ts` - Type `ReceptionTeamMember`
  - `reception-team-member-availability.ts` - Type `ReceptionTeamMemberAvailability`
  - `reception-team-member-skill.ts` - Type `ReceptionTeamMemberSkill`
  - `reception-team-member-stats.ts` - Type `ReceptionTeamMemberStats`

  ### 7.2 Domain Models (lib/domain)
  - `index.ts` - Exports de tous les Domain Models
  - `client-context.ts` - Domain Model `ClientContext`
  - `pro.ts` - Domain Model `Pro`
  - `reception.ts` - Domain Model `Reception`
  - `mappings.ts` - Documentation des mappings (fichier documentaire uniquement)

  ### 7.3 MockDB Collections (lib/mockdb/collections)
  - `index.ts` - Exports de toutes les collections
  - `client.ts` - Collection `clients`
  - `subscription.ts` - Collection `subscriptions`
  - `product.ts` - Collection `products`
  - `client-product.ts` - Collection `clientProducts`
  - `team-member.ts` - Collection `teamMembers`
  - `reception-config.ts` - Collection `receptionConfigs`
  - `reception-details.ts` - Collection `receptionDetails`
  - `reception-service.ts` - Collection `receptionServices`
  - `reception-integration.ts` - Collection `receptionIntegrations`
  - `reception-team-member.ts` - Collection `receptionTeamMembers`
  - `reception-team-member-skill.ts` - Collection `receptionTeamMemberSkills`
  - `reception-team-member-availability.ts` - Collection `receptionTeamMemberAvailabilities`
  - `reception-team-member-stats.ts` - Collection `receptionTeamMemberStats`

  ### 7.4 MockDB Data (lib/mockdb/data)
  - `index.ts` - Exports de toutes les données
  - `ids.ts` - Constantes d'IDs de référence
  - `client.ts` - Données `clients`
  - `subscription.ts` - Données `subscriptions`
  - `product.ts` - Données `products`
  - `client-product.ts` - Données `clientProducts`
  - `team-member.ts` - Données `teamMembers`
  - `reception-config.ts` - Données `receptionConfigs`
  - `reception-details.ts` - Données `receptionDetails`
  - `reception-service.ts` - Données `receptionServices`
  - `reception-integration.ts` - Données `receptionIntegrations`
  - `reception-team-member.ts` - Données `receptionTeamMembers`
  - `reception-team-member-skill.ts` - Données `receptionTeamMemberSkills`
  - `reception-team-member-availability.ts` - Données `receptionTeamMemberAvailabilities`
  - `reception-team-member-stats.ts` - Données `receptionTeamMemberStats`

  ### 7.5 MockDB Schema (lib/mockdb)
  - `schema.ts` - Interface `MockDB` et instance `mockDB`

  ---

  ## 8. Résumé des données mock présentes

  ### Données mockées (1 entité de chaque type)

  1. **Client** : 1 client (`client-1`)
  2. **Subscription** : 1 abonnement (`sub-1`)
  3. **Product** : 1 produit (`reception`)
  4. **ClientProduct** : 1 lien client-produit (`client-product-1`)
  5. **TeamMember** : 1 membre d'équipe (`team-member-1`)
  6. **ReceptionConfig** : 1 configuration
  7. **ReceptionDetails** : 1 détail de réception
  8. **ReceptionService** : 3 services (`service-1`, `service-2`, `service-3`)
  9. **ReceptionIntegration** : 1 intégration
  10. **ReceptionTeamMember** : 1 membre d'équipe de réception
  11. **ReceptionTeamMemberSkill** : 3 compétences (liant `team-member-1` aux 3 services)
  12. **ReceptionTeamMemberAvailability** : 5 créneaux (lundi à vendredi)
  13. **ReceptionTeamMemberStats** : 1 statistique

  ### Cohérence des IDs

  - `CLIENT_ID` = `'client-1'`
  - `SUBSCRIPTION_ID` = `'sub-1'`
  - `PRODUCT_KEY_RECEPTION` = `'reception'`
  - `CLIENT_PRODUCT_ID` = `'client-product-1'`
  - `TEAM_MEMBER_ID` = `'team-member-1'` (utilisé dans `ReceptionTeamMember`, `ReceptionTeamMemberSkill`, `ReceptionTeamMemberAvailability`, `ReceptionTeamMemberStats`)
  - `SERVICE_ID_1` = `'service-1'` (Coupe Homme)
  - `SERVICE_ID_2` = `'service-2'` (Coloration complète)
  - `SERVICE_ID_3` = `'service-3'` (Brushing)

  ---

  **Fin de la documentation Macro 2**
