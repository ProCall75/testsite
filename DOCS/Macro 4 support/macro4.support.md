# Macro 4 - Support Documentation

**Source de vérité externe** - Documentation exhaustive basée sur les spécifications fonctionnelles.

---

## 1. Contrat Fonctionnel - Onboarding Flow

Voir le document complet : [`/DOCS/onboarding.flow.md`](./onboarding.flow.md)

### 1.1 Résumé exécutif

**Version :** Macro 4.1 — Contrat Fonctionnel

**Périmètre :** Onboarding minimal SOLO + PRO

**Objectif :** Activer un assistant opérationnel en moins de 5 minutes, avec uniquement les données indispensables au fonctionnement initial.

**Principe clé :** Onboarding = activation minimale. Aucune configuration avancée, uniquement les informations nécessaires pour que l'assistant puisse s'identifier, proposer des créneaux, réserver un rendez-vous, synchroniser un agenda et envoyer des notifications client.

---

## 2. Structure du Wizard

### 2.1 Vue d'ensemble

Le wizard comprend **6 étapes** en navigation linéaire :

1. **Identité du Salon** — Données de base (Client + ReceptionDetails)
2. **Horaires du Salon** — openingHours global
3. **Services** — Catalogue minimal des prestations
4. **Intégration Agenda** — Synchronisation Google Calendar / Outlook
5. **Communication** — Canaux de notification client
6. **Confirmation & Activation** — Génération ClientContext mock

### 2.2 Détail des étapes

#### Étape 1 — Identité du Salon

**Champs obligatoires :**
- `ownerName` (string)
- `salonName` (string)
- `email` (string)
- `phone` (string)

**Champs optionnels :**
- `address` (string)
- `city` (string)
- `postalCode` (string)
- `country` (string)

**Validation :** Tous les champs obligatoires doivent être remplis pour activer "Next".

#### Étape 2 — Horaires du Salon

**Champs collectés :**
Pour chaque jour de la semaine (lundi à dimanche) :
- `open` (string HH:mm ou `null` si fermé)
- `close` (string HH:mm ou `null` si fermé)

**Règles :**
- L'utilisateur peut laisser 0 à 7 jours ouverts
- Un jour fermé = `{ open: null, close: null }`
- Validation minimale : aucun jour ouvert est acceptable (l'IA dira "nous sommes fermés aujourd'hui")

**Format de sortie :**
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

#### Étape 3 — Services

**Champs collectés (par service) :**
- `serviceName` (string)
- `durationMinutes` (number)
- `priceEur` (number)

**Règles :**
- Validation minimale : **au moins 1 service** (obligatoire pour réserver)
- Aucune limite supérieure (liste illimitée)

**Format de sortie :**
```typescript
ReceptionService[] = [
  {
    id: string (auto-généré),
    serviceName: string,
    durationMinutes: number,
    priceEur: number,
    category: string (vide ou default),
    description: string (vide)
  }
]
```

#### Étape 4 — Intégration Agenda

**Options disponibles :**
- Google Calendar (bouton "Activer" ou toggle activable)
- Outlook Calendar (bouton "Activer" ou toggle activable)

**Note :** L'activation simule une connexion (mock minimal). Ne pas utiliser de checkboxes simples.

**Validation :** Aucune contrainte (0 à 2 agendas peuvent être activés).

**Format de sortie :**
```typescript
ReceptionIntegration = {
  googleCalendarEnabled: boolean,
  outlookCalendarEnabled: boolean,
  telegramEnabled: boolean (défini à l'étape 5),
  whatsappEnabled: boolean (défini à l'étape 5),
  syncStatus: "pending",
  errorMessage: ""
}
```

#### Étape 5 — Communication

**Champs collectés (checkboxes) :**
- `smsEnabled` (boolean) → mappe vers `ReceptionConfig.notificationsProEnabled`
- `whatsappEnabled` (boolean) → mappe vers `ReceptionIntegration.whatsappEnabled`
- `telegramEnabled` (boolean) → mappe vers `ReceptionIntegration.telegramEnabled`

**Règles :**
- Validation minimale : aucune contrainte (0 à N canaux)
- L'utilisateur peut activer 0, 1 ou plusieurs canaux
- Les canaux peuvent être configurés plus tard dans Settings
- SMS activé → `ReceptionConfig.notificationsProEnabled = true`
- SMS désactivé → `ReceptionConfig.notificationsProEnabled = false`

#### Étape 6 — Confirmation & Activation

**Contenu affiché :**
- Résumé de l'identité
- Résumé des horaires
- Liste des services
- Agendas activés
- Canaux de communication activés

**Action :**
- CTA : "Activer mon assistant"
- Redirect : `/dashboard` après activation

---

## 3. Mapping Données Onboarding → Entités MockDB

### 3.1 Client

**Source :** Étape 1

```typescript
Client = {
  id: string (auto-généré, format ULID: "client-<ulid>"),
  ownerName: string (depuis étape 1),
  name: string (salonName depuis étape 1),
  email: string (depuis étape 1),
  phone: string (depuis étape 1),
  locale: "fr-FR" (default),
  timezone: "Europe/Paris" (default),
  avatarUrl: "" (vide)
}
```

### 3.2 ReceptionDetails

**Source :** Étape 1 + Étape 2

```typescript
ReceptionDetails = {
  address: string (depuis étape 1, optionnel → "" si vide),
  city: string (depuis étape 1, optionnel → "" si vide),
  postalCode: string (depuis étape 1, optionnel → "" si vide),
  country: string (depuis étape 1, optionnel → "" si vide),
  openingHours: object (depuis étape 2),
  logoUrl: "" (vide),
  description: "" (vide),
  paymentMethods: [] (vide)
}
```

### 3.3 ReceptionServices[]

**Source :** Étape 3

```typescript
ReceptionService[] = services.map(service => ({
  id: string (auto-généré, format ULID: "service-<ulid>"),
  serviceName: string,
  durationMinutes: number,
  priceEur: number,
  category: "" (vide, sera configuré dans Settings),
  description: "" (vide, sera configuré dans Settings)
}))
```

### 3.4 ReceptionIntegrations

**Source :** Étape 4 + Étape 5

```typescript
ReceptionIntegration = {
  googleCalendarEnabled: boolean (depuis étape 4),
  outlookCalendarEnabled: boolean (depuis étape 4),
  whatsappEnabled: boolean (depuis étape 5),
  telegramEnabled: boolean (depuis étape 5),
  syncStatus: "pending" (default),
  errorMessage: "" (vide)
}
```

### 3.5 ReceptionConfig (minimal)

**Source :** Valeurs par défaut

```typescript
ReceptionConfig = {
  relancesEnabled: true (default),
  notificationsProEnabled: boolean (selon SMS activé à l'étape 5),
  assignmentStrategy: "manual" (default),
  feedbackEnabled: false (default)
}
```

### 3.6 TeamMember (auto-généré)

**Source :** Dérivé de l'Étape 1

```typescript
TeamMember = {
  id: string (auto-généré, format ULID: "team-member-<ulid>"),
  fullName: string (ownerName depuis étape 1),
  email: string (email depuis étape 1),
  phone: string (phone depuis étape 1),
  roleLabel: "Propriétaire" (default),
  isActive: true (default)
}
```

**Note :** Les champs avancés (gcalEmail, gcalIsShared, acceptNewClients, notificationsEnabled, preferredChannel, fallbackNumber, isVisible, stats, availability) appartiennent à Macro 6 — Settings et ne sont PAS générés lors de l'onboarding.


### 3.8 ClientContext (agrégé)

**Source :** Généré par l'API Mock Layer après activation

```typescript
Subscription = {
  id: string (auto-généré, format ULID: "sub-<ulid>"),
  planType: "solo" | "pro" (selon offre choisie avant onboarding),
  status: "active" (default),
  startDate: string (now),
  endDate: string (now + 1 an),
  billingCycle: "monthly" (default),
  priceEur: number (selon planType),
  currency: "EUR" (default),
  autoRenew: true (default)
}

Product = {
  key: "reception" (fixe),
  label: "Alfred Reception" (fixe),
  isActive: true (default)
}

ClientProduct = {
  id: string (auto-généré, format ULID: "client-product-<ulid>"),
  productKey: "reception" (référence Product.key),
  subscriptionId: string (référence Subscription.id)
}

ClientContext = {
  client: Client,
  subscriptions: Subscription[] (généré automatiquement),
  clientProducts: ClientProduct[] (généré automatiquement),
  reception: Reception (agrégé depuis ReceptionDetails + ReceptionConfig + ReceptionIntegration + ReceptionServices[]),
  pros: Pro[] (agrégé depuis TeamMember uniquement - les champs avancés sont dans Macro 6)
}
```

---

## 4. Règles de navigation

### 4.1 Navigation linéaire

- **Route unique :** `/onboarding` (une seule page, pas de routes par étape)
- **Navigation interne :** gérée par state React (`useState`), pas par URL
- **Next :** Activé uniquement si l'étape actuelle est complète (validation des champs obligatoires)
- **Back :** Disponible sauf à l'étape 1
- **Skip :** Non autorisé (navigation linéaire stricte)
- **Quitter :** Pas de bouton "Quitter" (utilisateur doit compléter le wizard)

### 4.2 Validation par étape

| Étape | Critères de validation |
|-------|------------------------|
| 1 | `ownerName` + `salonName` + `email` + `phone` (tous obligatoires) |
| 2 | Horaires collectés pour chaque jour (0 à 7 jours ouverts acceptables) |
| 3 | Au moins **1 service** (obligatoire) |
| 4 | Aucune contrainte (0 à 2 agendas peuvent être activés) |
| 5 | Aucune contrainte (0 à N canaux activés) |
| 6 | Clic sur "Activer" |

### 4.3 Comportement au refresh

- **Réinitialisation complète :** Le wizard se réinitialise entièrement
- **Pas de persistance :** Aucune donnée n'est sauvegardée
- **Retour à l'étape 1 :** L'utilisateur recommence depuis le début
- **Conforme aux règles macro :** Pas de logique onboarding réelle (mock uniquement)

---

## 5. Données hors périmètre

L'onboarding ne gère **PAS** les éléments suivants (réservés à Macro 6 — Settings) :

### 5.1 Équipe et Pros
- Gestion des membres d'équipe multiples
- Skills des pros
- Disponibilité individuelle des pros
- Stats des pros

### 5.2 Services avancés
- Categories de services
- Description détaillée des services

### 5.3 Réception avancée
- Description du salon
- Méthodes de paiement
- Logo du salon

### 5.4 Intégrations avancées
- Intégrations multiples
- Fallback numbers
- PreferredChannel avancé
- Multi-agendas

### 5.5 Configuration IA
- Preferences IA avancées
- Assignment strategy complète
- Relances avancées
- Feedback avancé

---

## 6. Structure technique attendue

### 6.1 Routes Next.js

```
app/(app)/onboarding/
  └── page.tsx (route unique, toutes les étapes gérées par state interne)
```

**Structure interne :**
```
app/(app)/onboarding/
  ├── page.tsx (OnboardingWizard container)
  └── steps/
      ├── StepIdentity.tsx
      ├── StepHours.tsx
      ├── StepServices.tsx
      ├── StepCalendar.tsx
      ├── StepCommunications.tsx
      └── StepSummary.tsx
```

### 6.2 Composants UI attendus

- `OnboardingWizard` — Container principal (gère state `stepIndex`, affiche timeline, titre, description, footer)
- `WizardFooter` — Footer avec boutons Back/Next
- `StepIdentity` — Étape 1 (dans `/onboarding/steps/`)
- `StepHours` — Étape 2 (dans `/onboarding/steps/`)
- `StepServices` — Étape 3 (dans `/onboarding/steps/`)
- `StepCalendar` — Étape 4 (dans `/onboarding/steps/`)
- `StepCommunications` — Étape 5 (dans `/onboarding/steps/`)
- `StepSummary` — Étape 6 (dans `/onboarding/steps/`)

### 6.3 API Mock Layer

Fonctions attendues dans `lib/api/mock/` :

- `createClientFromOnboarding(data)` — Génère Client
- `createReceptionDetailsFromOnboarding(data)` — Génère ReceptionDetails
- `createServicesFromOnboarding(data)` — Génère ReceptionServices[]
- `createIntegrationsFromOnboarding(data)` — Génère ReceptionIntegration
- `createTeamMemberFromOnboarding(data)` — Génère TeamMember uniquement (champs minimaux)
- `activateOnboarding(data)` — Génère ClientContext complet

---

## 7. Références croisées

### 7.1 Types utilisés (lib/types)

- `Client` — Identité du salon
- `ReceptionDetails` — Détails et horaires
- `ReceptionService` — Services
- `ReceptionIntegration` — Agendas et communication
- `ReceptionConfig` — Configuration minimale
- `TeamMember` — Membre d'équipe auto-généré
- `ReceptionTeamMember` — Configuration réception du membre
- `ClientContext` — Agrégat final

### 7.2 Domain Models utilisés (lib/domain)

- `Reception` — Agrégat réception
- `Pro` — Agrégat pro (dérivé de TeamMember)
- `ClientContext` — Agrégat client complet

### 7.3 MockDB Collections impactées

- `mockDB.clients`
- `mockDB.receptionDetails`
- `mockDB.receptionServices`
- `mockDB.receptionIntegrations`
- `mockDB.receptionConfigs`
- `mockDB.teamMembers`
- `mockDB.receptionTeamMembers`

---

## 8. Phases de développement

### Phase 4.1 — Contrat Fonctionnel ✅

**Document :** `/DOCS/onboarding.flow.md`

**Statut :** Finalisé

### Phase 4.2 — Architecture UI ✅

**Document :** `/DOCS/onboarding.ui-contract.md`

**Statut :** Finalisé

**Décisions clés :**
- Route unique : `/onboarding` (une seule page, navigation par state interne)
- Composant principal : `OnboardingWizard.tsx` avec state local `useState`
- Steps dans `/onboarding/steps/` : `StepIdentity`, `StepHours`, `StepServices`, `StepCalendar`, `StepCommunications`, `StepSummary`
- Timeline : 6 segments horizontaux, centrée sous le titre
- Footer : `WizardFooter` avec Back/Next
- Pas de design (Macro 7), pas de logique métier (Macro 6.5)

### Phase 4.3 — Mapping Mock → UI (à venir)

**Contenu attendu :**
- Mapping des données onboarding vers MockDB
- Fonctions de transformation
- Génération des IDs
- Validation des données

### Phase 4.4 — Implémentation Wizard Minimal (à venir)

**Contenu attendu :**
- Implémentation des composants
- Intégration avec API Mock Layer
- Tests de validation
- Navigation fonctionnelle

---

**Fin de la documentation Macro 4**

