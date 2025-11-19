# Macro 4.1 — Définition Fonctionnelle du Wizard

⸻

# Onboarding Flow — Alfred Reception

**Version :** Macro 4.1 — Contrat Fonctionnel

**Périmètre :** Onboarding minimal SOLO + PRO

**Objectif :** Activer un assistant opérationnel en moins de 5 minutes, avec uniquement les données indispensables au fonctionnement initial.

⸻

## 1. Principes directeurs

### 1.1 Onboarding = activation minimale

Aucune configuration avancée, aucun réglage fin, aucune logique métier.

Uniquement les informations nécessaires pour que l'assistant puisse :

- s'identifier
- proposer des créneaux
- réserver un rendez-vous
- synchroniser un agenda
- envoyer des notifications client

### 1.2 Identique pour Solo et Pro

Le wizard est le même.

Les différences d'usage (équipe, skills, préférences, détails avancés) seront configurées uniquement dans Settings après onboarding.

### 1.3 Toutes les précisions avancées sont hors périmètre

Le wizard ne doit pas dépasser 6 étapes et ne collecte que les données minimales nécessaires pour instancier un ClientContext complet mocké.

⸻

## 2. Étapes du Wizard

### Étape 1 — Identité du Salon

**Objectif :** créer la base des entités Client et ReceptionDetails.

**Champs collectés**

- `ownerName` (obligatoire)
- `salonName` (obligatoire)
- `email` (obligatoire)
- `phone` (obligatoire)
- `address` (optionnel)
- `city` (optionnel)
- `postalCode` (optionnel)
- `country` (optionnel)

**Raison d'être**

L'assistant doit pouvoir se présenter, identifier le salon et envoyer des notifications.

⸻

### Étape 2 — Horaires du Salon

**Objectif :** définir `openingHours` (format minimal global).

**Champs collectés**

Pour chaque jour de la semaine :

- `open` (string HH:mm ou `null` si fermé)
- `close` (string HH:mm ou `null` si fermé)

**Règles**

- L'utilisateur peut laisser 0 à 7 jours ouverts
- Un jour fermé = `{ open: null, close: null }`
- Validation minimale : aucun jour ouvert est acceptable (l'IA dira "nous sommes fermés aujourd'hui")

**Format de sortie**

```typescript
openingHours: {
  monday: { open: string | null, close: string | null },
  tuesday: { open: string | null, close: string | null },
  wednesday: { open: string | null, close: string | null },
  thursday: { open: string | null, close: string | null },
  friday: { open: string | null, close: string | null },
  saturday: { open: string | null, close: string | null },
  sunday: { open: string | null, close: string | null }
}
```

**Raison d'être**

L'IA doit connaître les plages horaires pour proposer des rendez-vous valides.

⸻

### Étape 3 — Services

**Objectif :** définir le catalogue minimal des prestations.

**Champs collectés (par service)**

- `serviceName` (string)
- `durationMinutes` (number)
- `priceEur` (number)

**Règles**

- Validation minimale : **au moins 1 service** (obligatoire pour réserver)
- Aucune limite supérieure (liste illimitée)
- Aucun champ avancé (description, category) → Settings

**Raison d'être**

Les services sont indispensables pour que l'IA puisse proposer un rendez-vous.

⸻

### Étape 4 — Intégration Agenda

**Objectif :** activer la synchronisation agenda.

**Options disponibles**

L'utilisateur peut activer :

- Google Calendar
- Outlook Calendar

**Sortie (mock minimal)**

- `googleCalendarEnabled` = true/false selon activation
- `outlookCalendarEnabled` = true/false selon activation

**Raison d'être**

Synchronisation obligatoire pour éviter les doubles réservations.

⸻

### Étape 5 — Communication

**Objectif :** activer les canaux de communication client.

**Champs collectés (checkboxes)**

- `smsEnabled` → mappe vers `ReceptionConfig.notificationsProEnabled`
- `whatsappEnabled` → mappe vers `ReceptionIntegration.whatsappEnabled`
- `telegramEnabled` → mappe vers `ReceptionIntegration.telegramEnabled`

**Règles**

- Validation minimale : au moins un canal activé
- SMS activé → `ReceptionConfig.notificationsProEnabled = true`
- SMS désactivé → `ReceptionConfig.notificationsProEnabled = false`

**Raison d'être**

L'assistant doit pouvoir envoyer confirmations, rappels, relances.

⸻

### Étape 6 — Confirmation & Activation

**Objectif :** générer un ClientContext complet (mock).

**Contenu**

Afficher un résumé simple :

- Identité
- Horaires
- Services
- Agenda
- Communication

**Action**

CTA : "Activer mon assistant"

Redirect : `/dashboard`

⸻

## 3. Données produites en sortie

L'onboarding génère la version minimale des entités suivantes :

### Client

- `id` auto-généré (format ULID : `client-<ulid>`)
- `ownerName` (depuis étape 1)
- `name` (salonName depuis étape 1)
- `email` (depuis étape 1)
- `phone` (depuis étape 1)
- `locale` (default: `fr-FR`)
- `timezone` (default: `Europe/Paris`)
- `avatarUrl` = `""`

### ReceptionDetails

- `address`, `city`, `postalCode`, `country`
- `openingHours`
- `logoUrl` = `""`
- `description` = `""`
- `paymentMethods` = `[]`

### ReceptionServices[]

Liste basée sur les services ajoutés en onboarding.

### ReceptionIntegrations

- `googleCalendarEnabled` (depuis étape 4)
- `outlookCalendarEnabled` (depuis étape 4)
- `whatsappEnabled` (depuis étape 5)
- `telegramEnabled` (depuis étape 5)
- `syncStatus` = `"pending"` (default)
- `errorMessage` = `""` (vide)

### ReceptionConfig (minimal)

- `relancesEnabled` = `true` (default)
- `notificationsProEnabled` = `true/false` (selon SMS activé à l'étape 5)
- `assignmentStrategy` = `"manual"` (default)
- `feedbackEnabled` = `false` (default)

(Config avancée → Settings.)

### TeamMember minimal (auto-généré)

Conformément au comportement réel Supabase.

- `id` auto-généré (format ULID : `team-member-<ulid>`)
- `fullName` = `ownerName` (depuis étape 1)
- `email` = `email` (depuis étape 1)
- `phone` = `phone` (depuis étape 1)
- `roleLabel` = `"Propriétaire"` (default)
- `isActive` = `true` (default)

### ReceptionTeamMember (auto-généré)

- `teamMemberId` = `TeamMember.id` (référence)
- `gcalEmail` = `email` (depuis étape 1)
- `gcalIsShared` = `false` (default)
- `acceptNewClients` = `true` (default)
- `notificationsEnabled` = `true` (default)
- `preferredChannel` = `""` (vide, sera configuré dans Settings)
- `fallbackNumber` = `phone` (depuis étape 1)
- `isVisible` = `true` (default)

### ReceptionTeamMemberStats (auto-généré)

- `teamMemberId` = `TeamMember.id` (référence)
- `completedBookings` = `0` (default)
- `cancelledBookings` = `0` (default)
- `ratingAvg` = `0` (default)

### ReceptionTeamMemberAvailability (auto-généré)

- Copie 1:1 des horaires salon (étape 2)
- Pour chaque jour ouvert : création d'un `ReceptionTeamMemberAvailability`
- Format : `{ id: ulid, teamMemberId: TeamMember.id, dayOfWeek: number, startTime: string, endTime: string }`

### Subscription (auto-généré)

- `id` auto-généré (format ULID : `sub-<ulid>`)
- `planType` = `"solo"` ou `"pro"` (selon offre choisie avant onboarding)
- `status` = `"active"` (default)
- `startDate` = `now` (date actuelle)
- `endDate` = `now + 1 an` (date actuelle + 1 an)
- `billingCycle` = `"monthly"` (default)
- `priceEur` = selon planType
- `currency` = `"EUR"` (default)
- `autoRenew` = `true` (default)

### Product (auto-généré)

- `key` = `"reception"` (fixe)
- `label` = `"Alfred Reception"` (fixe)
- `isActive` = `true` (default)

### ClientProduct (auto-généré)

- `id` auto-généré (format ULID : `client-product-<ulid>`)
- `productKey` = `"reception"` (référence Product)
- `subscriptionId` = `Subscription.id` (référence Subscription)

### ClientContext

Dérivé après activation par l'API Mock Layer.

**Composition complète :**

- `client` : Client (généré)
- `subscriptions` : Subscription[] (généré automatiquement)
- `clientProducts` : ClientProduct[] (généré automatiquement)
- `reception` : Reception (agrégé depuis ReceptionDetails + ReceptionConfig + ReceptionIntegration + ReceptionServices[])
- `pros` : Pro[] (agrégé depuis TeamMember + ReceptionTeamMember + ReceptionTeamMemberStats + ReceptionTeamMemberAvailability[] + ReceptionTeamMemberSkill[])

⸻

## 4. Règles de navigation (next/back)

- **Route unique :** `/onboarding` (une seule page, pas de routes par étape)
- **Navigation interne :** gérée par state React (`useState`), pas par URL
- Chaque étape valide uniquement les champs obligatoires
- Next activé uniquement si l'étape est complète
- Back disponible sauf à l'étape 1
- Navigation linéaire (no skip)
- Pas de bouton "Quitter" (utilisateur doit compléter le wizard)

⸻

## 5. Critères de complétion (mock)

Pour valider l'étape :

- **Étape 1 :** `ownerName` + `salonName` + `email` + `phone` (tous obligatoires)
- **Étape 2 :** horaires collectés pour chaque jour (0 à 7 jours ouverts acceptables)
- **Étape 3 :** au moins **1 service** (obligatoire)
- **Étape 4 :** au moins un agenda activé (Google ou Outlook)
- **Étape 5 :** au moins un canal activé (SMS, WhatsApp ou Telegram)
- **Étape 6 :** clic sur "Activer"

**Après activation**

- Génération mock des entités de sortie
- Reset wizard au refresh (mock normal)

⸻

## 6. Comportement en cas de refresh

- Le wizard se réinitialise entièrement (pas de persistance).
- L'utilisateur recommence à l'étape 1.
- Aucune donnée n'est sauvegardée.
- Conforme aux règles macro : pas de logique onboarding réelle.

⸻

## 7. Hors périmètre (Settings uniquement)

L'onboarding ne gère pas :

- équipe + gestion des pros
- skills
- disponibilité individuelle des pros
- categories de services
- description salon
- description service
- méthodes de paiement
- preferences IA avancées
- intégrations multiples
- fallback numbers
- preferredChannel avancé
- assignation strategy complète
- stats
- multi-agendas

Tout ceci sera géré dans Macro 6 — Settings.

⸻

✔ **Document finalisé**

Prêt pour :

- Phase 4.2 — architecture UI
- Phase 4.3 — Mapping mock → UI
- Phase 4.4 — Implémentation wizard minimal

⸻

