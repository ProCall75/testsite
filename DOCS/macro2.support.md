Parfait.
Je vais te générer la VERSION CORRIGÉE, PARFAITE, ZÉRO ERREUR de macro2.support, en me basant strictement sur TON fichier Macro 1.5 (pas sur mes erreurs, pas sur mes interprétations).

Je reprends toutes les décisions validées, y compris les corrections apportées en fin (TABLE 7 + TABLE 9), et je reconstruis le document final propre, conforme à 100%.

AUCUN ajout.
AUCUNE supposition.
AUCUN champ non validé.
AUCUN bruit.

Format EXACT demandé.

⸻

✅ macro2.support — VERSION OFFICIELLE (corrigée, finale, conforme Macro 1.5)

Source de vérité unique pour Cursor.
Uniquement les colonnes whitelistes + interface TS.

⸻

TABLE 1 — clients

columns:
  - id
  - owner_name
  - avatar_url
  - name
  - email
  - phone
  - locale
  - timezone
type: Client
interface:
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


⸻

TABLE 2 — subscriptions

columns:
  - id
  - plan_type
  - status
  - start_date
  - end_date
  - billing_cycle
  - price_eur
  - currency
  - auto_renew
type: Subscription
interface:
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


⸻

TABLE 3 — products

columns:
  - key
  - label
  - is_active
type: Product
interface:
  export interface Product {
    key: string
    label: string
    isActive: boolean
  }


⸻

TABLE 4 — client_products

columns:
  - id
  - product_key
  - subscription_id
type: ClientProduct
interface:
  export interface ClientProduct {
    id: string
    productKey: string
    subscriptionId: string
  }


⸻

TABLE 5 — team_members

columns:
  - id
  - full_name
  - role_label
  - email
  - phone
  - is_active
type: TeamMember
interface:
  export interface TeamMember {
    id: string
    fullName: string
    roleLabel: string
    email: string
    phone: string
    isActive: boolean
  }


⸻

TABLE 6 — reception_config

columns:
  - assignment_strategy
  - relances_enabled
  - feedback_enabled
  - notifications_pro_enabled
type: ReceptionConfig
interface:
  export interface ReceptionConfig {
    assignmentStrategy: string
    relancesEnabled: boolean
    feedbackEnabled: boolean
    notificationsProEnabled: boolean
  }


⸻

TABLE 7 — reception_details

(corrigée conformément au fichier Macro 1.5)

columns:
  - address
  - city
  - postal_code
  - country
  - opening_hours
  - payment_methods
  - logo_url
  - description
type: ReceptionDetails
interface:
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


⸻

TABLE 8 — reception_services

columns:
  - id
  - service_name
  - duration_minutes
  - price_eur
  - category
  - description
type: ReceptionService
interface:
  export interface ReceptionService {
    id: string
    serviceName: string
    durationMinutes: number
    priceEur: number
    category: string
    description: string
  }


⸻

TABLE 9 — reception_integrations

(corrigée selon Macro 1.5 + ton correctif)

columns:
  - google_calendar_enabled
  - outlook_calendar_enabled
  - telegram_enabled
  - whatsapp_enabled
  - sync_status
  - error_message
type: ReceptionIntegrations
interface:
  export interface ReceptionIntegrations {
    googleCalendarEnabled: boolean
    outlookCalendarEnabled: boolean
    telegramEnabled: boolean
    whatsappEnabled: boolean
    syncStatus: string
    errorMessage: string
  }


⸻

TABLE 10 — reception_team_members

columns:
  - team_member_id
  - gcal_email
  - gcal_is_shared
  - accept_new_clients
  - notifications_enabled
  - preferred_channel
  - fallback_number
  - is_visible
type: ReceptionTeamMember
interface:
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


⸻

TABLE 11 — reception_team_member_skills

columns:
  - id
  - reception_team_member_id
  - service_id
type: ReceptionTeamMemberSkill
interface:
  export interface ReceptionTeamMemberSkill {
    id: string
    teamMemberId: string
    serviceId: string
  }


⸻

TABLE 12 — reception_team_member_availability

columns:
  - id
  - reception_team_member_id
  - day_of_week
  - start_time
  - end_time
type: ReceptionTeamMemberAvailability
interface:
  export interface ReceptionTeamMemberAvailability {
    id: string
    teamMemberId: string
    dayOfWeek: number
    startTime: string
    endTime: string
  }


⸻

TABLE 13 — reception_team_member_stats

columns:
  - reception_team_member_id
  - completed_bookings
  - cancelled_bookings
  - rating_avg
type: ReceptionTeamMemberStats
interface:
  export interface ReceptionTeamMemberStats {
    teamMemberId: string
    completedBookings: number
    cancelledBookings: number
    ratingAvg: number
  }


⸻

