- **Macro 0.5 — Audit & Nettoyage**
  - **Objectif général**

---
Avant de générer la To-Do ou la documentation,
relis strictement les documents des phases précédentes
et aligne-toi dessus. Ne duplique rien.

Macro 0.5 — Audit & Nettoyage

🎯 Objectif général

Analyser, assainir et documenter le front Alfred Reception pour repartir d’une base propre, stable et maintenable.
Cette macro constitue le point zéro technique du rebuild et prépare la future architecture (Macro 1).

⚙️ Sortie attendue
• Branche GitHub rebuild créée et fonctionnelle
• Repo dupliqué et sauvegardé (backup design)
• Code nettoyé – conservation unique de la Hero Section
• Arborescence réorganisée et configuration validée
• Documentation 3C complète de l’état final

⸻

## ✅ Macro 0.5 — Terminée

**Statut** : ✅ **COMPLÉTÉE** — Prêt pour Macro 1

**Résumé 3C complet** : Voir [`MACRO0.5-RESUME-3C.md`](./MACRO0.5-RESUME-3C.md)

**Résultats** :

- ✅ Structure conforme Next.js App Router (100% App Router prouvé)
- ✅ Imports standardisés avec alias `@/`
- ✅ Types corrigés (aucun `any` explicite)
- ✅ Build stable (12 routes générées)
- ✅ Lint et type-check passent sans erreur
- ✅ Documentation complète

**Phases complétées** :

- Phase 1 — Préparation du chantier
- Phase 2 — Nettoyage du code
- Phase 3 — Réorganisation de l'arborescence
- Phase 4 — Configuration et validation
- Phase 5+6 — Reconfiguration finale & documentation



# **Macro 1 — Architecture Produit & Structure Finale** ✅

### **🎯 Objectif général**

La **Macro 1** finalise **l'architecture produit** (et non l'architecture technique générique, déjà établie en Macro 0.5).

Elle définit la structure interne, les layouts, et la hiérarchie des domaines du produit Alfred Reception — basés sur les parcours réels (onboarding, dashboard, settings), la navigation cible, et la cohérence future avec les mocks (Macros 2 → 6).

### **🧱 Rôle pour le front**

Elle crée **le squelette fonctionnel du produit**, pas du code générique. C'est la fondation pour tous les écrans simulés à venir.

---

## ✅ Macro 1 — Terminée

**Statut** : ✅ **COMPLÉTÉE** — Prêt pour Macro 2

**Résumé 3C complet** : Voir [`MACRO1-PHASE6-VALIDATION.md`](./DOCS/MACRO1-PHASE6-VALIDATION.md)

**Résumé 3C — Macro 1** :

**Context** : Macro 1 définit l'architecture produit complète (layouts, routes, conventions, navigation) sans UI ni logique métier, conformément à la Vision Alfred et à la chronologie inter-macros.

**Command** :
- **Phase 1** : Layouts structurels définis (RootLayout, AppLayout, MarketingLayout) avec metadata minimales, HTML de base, structure `<main>{children}</main>` uniquement
- **Phase 2** : Conventions strictes définies (routing, nommage kebab-case/PascalCase, segments dynamiques, internal English rule)
- **Phase 3** : Architecture route groups complète (`(app)` domaine authentifié, `(marketing)` domaine public), hiérarchie Layout → Group → Segments → Pages (4 niveaux max), boundaries strictes
- **Phase 4** : Structure domaines fonctionnels créée (onboarding `[step]`, dashboard `[id]`, settings `[tab]`, marketing `[slug]`), tous composants vides (`return null`)
- **Phase 5** : Règles navigation globale définies (Server Components par défaut, redirections conceptuelles, parcours app/marketing documentés)
- **Phase 6** : Validation structurelle complète effectuée, 2 violations identifiées et corrigées (1 critique : Server Component + UI + logique dans `onboarding/page.tsx`, 1 haute : nommage `Home` → `HomePage`), préparation Macro 2 (chemins types `lib/types/`, mocks `lib/mocks/` planifiés)

**Check** :
- ✅ Structure conforme après ajustements (2 violations corrigées)
- ✅ Tous fichiers présents, segments dynamiques conformes, profondeur ≤4 niveaux respectée
- ✅ Conventions Phase 2 respectées (internal English, kebab-case, PascalCase)
- ✅ Layouts conformes Phase 1 (structure minimale uniquement)
- ✅ Navigation Phase 5 conforme (Server Components par défaut)
- ✅ Aucune route manquante/inutile, séparation domaines respectée
- ✅ Préparation Macro 2 complète (chemins types/mocks validés, dépendances documentées)
- ✅ Documentation complète créée (6 fichiers Phase 1-6 dans `DOCS/`)
- ✅ **Prêt pour Macro 2** (Types & Contrats)



🧩 Macro 1.5 — Préparation Fonctionnelle des Contrats (Pré-Macro 2)

Voici un Résumé 3C, court, net, calibré pour Cursor,
pour lui expliquer exactement ce qui a été fait en Macro 1.5.

Aucun bruit.
Aucune justification.
Juste la donnée utile à la suite.

⸻

📘 Résumé 3C – Macro 1.5 (version Cursor)

1. Ce que nous avons FAIT
	•	Identifié les 13 tables front nécessaires (Core + Reception).
	•	Pour chaque table : sélection des colonnes utiles au front (whitelist).
	•	Rejet de toutes les colonnes backend-only (timestamps, RLS, techniques).
	•	Créé les types TypeScript front-driven pour chaque table.
	•	Préparé un fichier unique (macro2.support) qui contient :
	•	table → colonnes conservées → interface TS.
	•	Nettoyé toute source SQL brute pour éviter la pollution.

⸻

2. Ce que cela SIGNIFIE
	•	Cursor doit s’appuyer uniquement sur macro2.support.
	•	Ce fichier représente la totalité des structures de données disponibles pour le front.
	•	Les types et colonnes listés dans macro2.support sont la seule vérité,
→ rien d’autre ne doit être relu, déduit ou importé.
	•	Les données finalisées sont prêtes pour générer :
	•	Domain Models
	•	mock database
	•	API mock layer
	•	types front
	•	todos Macro 2

⸻


# **Macro 2 — Contrats d'API & Mock Data**
Voici une version claire, exhaustive, structurée des phases de la Macro 2, en cohérence directe avec son objectif réel.

Aucun smiley.
Texte strict, précis, opérationnel.

⸻

Macro 2 — Contrats d’API & Mock Data

Objectif général

Établir la couche contractuelle complète du front.
Construire les types, la structure de données et les fonctions simulées permettant au front de fonctionner entièrement sans backend réel.
Garantir que toutes les données manipulées par le front reposent uniquement sur la référence macro2.support.

Résultat attendu :
Une maquette logicielle complète côté front, utilisant une base mock fidèle aux besoins du produit.

⸻

Phase 2.1 — Construction des Domain Models Front

Objectif : transformer les tables whitelists de macro2.support en objets métier exploitables directement par le front.
Tâches principales :
	•	Définir les Domain Models à partir des types bruts.
	•	Agréger les données provenant de plusieurs tables (ex. un Pro).
	•	Définir les relations front-driven (ex. un service appartient au salon, un pro a des skills).
	•	Documenter le mapping table → Domain Model.
	•	Produire les interfaces TS correspondantes.

Sortie attendue :
/lib/domain/*.ts contenant les Domain Models finals.

Voici la version parfaite, finale, prête à coller dans Cursor,
format propre, structuré, strictement Phase 2.1,
sans service-catalog, sans fuite métier, sans ambiguïté.

C’est la To-Do officielle Phase 2.1.

⸻

PHASE 2.1 — TODO (Version Finale Cursor)

Objectif : créer les types bruts (1:1 macro2.support) et les Domain Models agrégés essentiels, sans logique métier.

⸻

1. Créer les types bruts (exact miroir de macro2.support)

Créer le dossier :

/lib/types/

Créer un fichier par TABLE whitelistée, dans cet ordre strict :

client.ts
subscription.ts
product.ts
client-product.ts
team-member.ts
reception-config.ts
reception-details.ts
reception-service.ts
reception-integrations.ts
reception-team-member.ts
reception-team-member-skill.ts
reception-team-member-availability.ts
reception-team-member-stats.ts

Chaque fichier doit :
	•	exporter exactement l'interface définie dans macro2.support
	•	ne rien ajouter
	•	ne rien renommer
	•	respecter les types primitifs (string, number, boolean, unions littérales)
	•	ne contenir aucune logique (zéro fonction)

Créer ensuite :

/lib/types/index.ts

qui exporte tous les types bruts.

⸻

2. Créer les Domain Models agrégés (front-driven, sans logique métier)

Créer le dossier :

/lib/domain/

Créer uniquement les fichiers suivants :

pro.ts
reception.ts
client-context.ts
mappings.ts
index.ts

pro.ts

Agréger sans logique métier :
	•	TeamMember
	•	ReceptionTeamMember
	•	ReceptionTeamMemberStats
	•	ReceptionTeamMemberSkill[]
	•	ReceptionTeamMemberAvailability[]

Structure : un objet qui regroupe ces 5 sources.

reception.ts

Agréger :
	•	ReceptionDetails
	•	ReceptionConfig
	•	ReceptionIntegrations
	•	ReceptionService[]

Nom exact : Reception.

client-context.ts

Agréger sans filtrage ni déduction métier, dans cet ordre :
	1.	Client
	2.	Subscription[]
	3.	ClientProduct[]
	4.	Reception
	5.	Pro[]

mappings.ts

Fichier documentaire uniquement.
Cursor ne doit pas parser son contenu.

Contient :
	•	table → type brut
	•	type brut → Domain Model
	•	relations front-driven (services, pros, skills, availability)

Format libre (objets TS ou simples commentaires).

index.ts

Exporter tous les Domain Models.

⸻

3. Vérifications internes
	•	Aucun Domain Model ne redéfinit un type brut.
	•	Aucun Domain Model n’ajoute une propriété absente de macro2.support.
	•	Tous les Domain Models importent uniquement depuis /lib/types.
	•	/lib/types contient exactement les 13 fichiers correspondant aux 13 tables.
	•	/lib/domain contient exactement :
pro.ts, reception.ts, client-context.ts, mappings.ts, index.ts.
	•	Tous les fichiers sont bien exportés dans index.ts.
	•	Zéro logique métier (pas de sélection d’abonnement, pas de règles).

⸻

Phase 2.1 terminée lorsque :
	•	/lib/types/* = miroir strict de macro2.support
	•	/lib/domain/* = agrégats front-driven simples, sans règles métier
	•	mappings.ts = documentaire complété
	•	Aucun débordement macro 2.2 / 2.3 / 2.4
	•	Compilation TS valide

⸻

Cette todo est maintenant parfaitement alignée avec Macro 1.5, macro2.support et le pipeline Alfred.

⸻








PHASE 2.2 — TODO (Version Finale Cursor)

Objectif : créer la structure du Mock Database Schema (collections vides typées), sans données ni logique métier.

⸻

1. Créer les collections vides (datasets)

Créer le dossier :

/lib/mockdb/collections/

Créer un fichier par TYPE brut présent dans /lib/types (nom de fichier = singulier, kebab-case), dans cet ordre strict :

client.ts
subscription.ts
product.ts
client-product.ts
team-member.ts
reception-config.ts
reception-details.ts
reception-service.ts
reception-integration.ts
reception-team-member.ts
reception-team-member-skill.ts
reception-team-member-availability.ts
reception-team-member-stats.ts

Chaque fichier doit :
	•	importer le type correspondant depuis @/lib/types (TypeScript, PascalCase, singulier)
	•	exporter une constante en camelCase au pluriel, typée comme tableau du type
	•	ne contenir AUCUNE donnée (tableau vide [])
	•	ne contenir aucune fonction
	•	ne jamais utiliser PascalCase pour une variable (réservé aux types/classes)

Exemple pour client.ts :

```typescript
import type { Client } from '@/lib/types'

export const clients: Client[] = []
```

Exemple pour reception-integration.ts :

```typescript
import type { ReceptionIntegration } from '@/lib/types'

export const receptionIntegrations: ReceptionIntegration[] = []
```

Créer ensuite :

/lib/mockdb/collections/index.ts

qui exporte toutes les collections (camelCase, pluriel) dans l'ordre strict :

	•	clients
	•	subscriptions
	•	products
	•	clientProducts
	•	teamMembers
	•	receptionConfigs
	•	receptionDetails
	•	receptionServices
	•	receptionIntegrations
	•	receptionTeamMembers
	•	receptionTeamMemberSkills
	•	receptionTeamMemberAvailabilities
	•	receptionTeamMemberStats

⸻

2. Créer le schema principal

Créer le fichier :

/lib/mockdb/schema.ts

Ce fichier doit :
	•	importer toutes les collections depuis ./collections
	•	définir l'interface MockDB qui agrège toutes les collections
	•	exporter une variable mockDB: MockDB initialisée avec toutes les collections vides
	•	ne contenir aucune fonction
	•	ne contenir aucune donnée (seulement la structure)

Structure de l'interface MockDB :

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

La variable mockDB doit être initialisée avec toutes les collections importées.

⸻

3. Vérifications internes
	•	Chaque fichier de collection est au singulier (kebab-case) et correspond à un type dans /lib/types.
	•	Chaque variable de collection est en camelCase pluriel et typée tableau du type correspondant.
	•	Tous les fichiers de collections sont vides (tableaux []).
	•	Aucun fichier ne contient de fonction.
	•	Aucun fichier ne contient de données (phase 2.3).
	•	Le schema.ts agrège toutes les collections sans exception.
	•	Les imports utilisent uniquement @/lib/types.
	•	Nom de type = PascalCase singulier. Nom de variable/clé = camelCase pluriel.
	•	Zéro logique métier (pas de transformation, pas de mapping).

⸻

Phase 2.2 terminée lorsque :
	•	/lib/mockdb/collections/* = 13 fichiers avec collections vides typées
	•	/lib/mockdb/collections/index.ts = exporte toutes les collections
	•	/lib/mockdb/schema.ts = interface MockDB + variable mockDB initialisée
	•	Aucun débordement sur 2.3 / 2.4 / 2.5
	•	Aucune donnée présente (tableaux vides uniquement)
	•	Aucune fonction présente
	•	Compilation TS valide

⸻

PHASE 2.3 — TODO (Version Finale Cursor)

Objectif : générer des données mock cohérentes, complètes et exploitables pour toutes les collections, simulant un salon réel après onboarding.

⸻

1. Créer les fichiers de données mock

Créer le dossier :

/lib/mockdb/data/

Créer un fichier par collection (nom de fichier = singulier, kebab-case, identique à Phase 2.2), dans cet ordre strict :

client.ts
subscription.ts
product.ts
client-product.ts
team-member.ts
reception-config.ts
reception-details.ts
reception-service.ts
reception-integration.ts
reception-team-member.ts
reception-team-member-skill.ts
reception-team-member-availability.ts
reception-team-member-stats.ts

Chaque fichier doit :
	•	importer le type correspondant depuis @/lib/types
	•	exporter une constante en camelCase pluriel, typée comme tableau du type, contenant des données mock réalistes
	•	respecter les types et contraintes définis dans macro2.support.md
	•	utiliser des IDs cohérents et réutilisables (constantes exportées)
	•	ne contenir aucune fonction (seulement des données)

⸻

2. Données de base (scénario : salon solo après onboarding)

2.1. client.ts

Créer 1 client (salon solo) :
	•	id : 'client-1'
	•	ownerName : nom réaliste
	•	avatarUrl : URL placeholder ou vide
	•	name : nom du salon
	•	email : email réaliste
	•	phone : numéro français réaliste
	•	locale : 'fr-FR'
	•	timezone : 'Europe/Paris'

2.2. subscription.ts

Créer 1 subscription active :
	•	id : 'sub-1'
	•	planType : 'solo'
	•	status : 'active'
	•	startDate : date récente (ISO string)
	•	endDate : date future (ISO string)
	•	billingCycle : 'monthly'
	•	priceEur : prix réaliste pour solo
	•	currency : 'EUR'
	•	autoRenew : true

2.3. product.ts

Créer les produits disponibles (au moins 3) :
	•	key : 'voice', 'sms', 'calendar' (ou autres produits pertinents)
	•	label : libellé descriptif
	•	isActive : true pour tous

2.4. client-product.ts

Lier le client aux produits activés :
	•	id : unique
	•	productKey : référence à products
	•	subscriptionId : 'sub-1'

2.5. reception-config.ts

Créer 1 config (1 seul objet, pas un tableau) :
	•	assignmentStrategy : 'round-robin' ou 'manual'
	•	relancesEnabled : true
	•	feedbackEnabled : true
	•	notificationsProEnabled : false (solo)

2.6. reception-details.ts

Créer 1 détail (1 seul objet, pas un tableau) :
	•	address : adresse complète réaliste
	•	city : ville française
	•	postalCode : code postal français
	•	country : 'France'
	•	openingHours : objet avec horaires (unknown pour l'instant)
	•	paymentMethods : tableau/objet (unknown pour l'instant)
	•	logoUrl : URL placeholder ou vide
	•	description : description du salon

2.7. reception-service.ts

Créer au moins 3 services :
	•	id : unique
	•	serviceName : nom réaliste (ex: 'Coupe Homme', 'Coloration', 'Brushing')
	•	durationMinutes : durée réaliste (30, 60, 90, etc.)
	•	priceEur : prix réaliste
	•	category : catégorie (ex: 'Coiffure', 'Coloration', 'Soin')
	•	description : description courte

2.8. reception-integration.ts

Créer 1 intégration (1 seul objet, pas un tableau) :
	•	googleCalendarEnabled : true ou false
	•	outlookCalendarEnabled : false
	•	telegramEnabled : true ou false
	•	whatsappEnabled : true ou false
	•	syncStatus : 'synced' ou 'pending'
	•	errorMessage : '' (vide si synced)

⸻

3. Données équipe (scénario : salon solo = 1 pro)

3.1. team-member.ts

Créer 1 membre d'équipe (le propriétaire) :
	•	id : 'team-member-1'
	•	fullName : nom complet
	•	roleLabel : 'Propriétaire' ou 'Coiffeur'
	•	email : email réaliste
	•	phone : numéro réaliste
	•	isActive : true

3.2. reception-team-member.ts

Créer 1 entrée pour le pro :
	•	teamMemberId : 'team-member-1'
	•	gcalEmail : email Google Calendar ou ''
	•	gcalIsShared : true si gcalEmail présent
	•	acceptNewClients : true
	•	notificationsEnabled : true
	•	preferredChannel : 'whatsapp' ou 'telegram' ou 'sms'
	•	fallbackNumber : numéro de secours
	•	isVisible : true

3.3. reception-team-member-skill.ts

Lier le pro aux services (au moins 2 compétences) :
	•	id : unique
	•	teamMemberId : 'team-member-1'
	•	serviceId : référence à reception-services

3.4. reception-team-member-availability.ts

Créer les disponibilités du pro (au moins 3 créneaux) :
	•	id : unique
	•	teamMemberId : 'team-member-1'
	•	dayOfWeek : 1-7 (1 = lundi)
	•	startTime : '09:00' format HH:mm
	•	endTime : '18:00' format HH:mm

3.5. reception-team-member-stats.ts

Créer les stats du pro :
	•	teamMemberId : 'team-member-1'
	•	completedBookings : nombre réaliste (ex: 45)
	•	cancelledBookings : nombre réaliste (ex: 3)
	•	ratingAvg : moyenne réaliste (ex: 4.8)

⸻

4. Cohérence des IDs

Créer un fichier de constantes :

/lib/mockdb/data/ids.ts

Exporter toutes les constantes d'IDs réutilisables :

```typescript
export const CLIENT_ID = 'client-1'
export const SUBSCRIPTION_ID = 'sub-1'
export const TEAM_MEMBER_ID = 'team-member-1'
// etc.
```

Tous les fichiers de données doivent importer et utiliser ces constantes pour garantir la cohérence.

⸻

5. Index des données

Créer /lib/mockdb/data/index.ts

Exporter toutes les données dans l'ordre strict :

export { clients } from './client'
export { subscriptions } from './subscription'
export { products } from './product'
export { clientProducts } from './client-product'
export { teamMembers } from './team-member'
export { receptionConfigs } from './reception-config'
export { receptionDetails } from './reception-details'
export { receptionServices } from './reception-service'
export { receptionIntegrations } from './reception-integration'
export { receptionTeamMembers } from './reception-team-member'
export { receptionTeamMemberSkills } from './reception-team-member-skill'
export { receptionTeamMemberAvailabilities } from './reception-team-member-availability'
export { receptionTeamMemberStats } from './reception-team-member-stats'

⸻

6. Intégration dans mockDB

Modifier /lib/mockdb/schema.ts pour importer les données :

```typescript
import * as data from './data'

export const mockDB: MockDB = {
  clients: data.clients,
  subscriptions: data.subscriptions,
  // ... toutes les collections
}
```

⸻

7. Vérifications internes
	•	Tous les IDs sont cohérents entre collections (références valides).
	•	Tous les types respectent les interfaces de /lib/types.
	•	Toutes les valeurs respectent les contraintes (unions littérales, formats).
	•	Les relations sont valides (clientProducts → products, skills → services, etc.).
	•	Les données simulent un salon solo fonctionnel après onboarding.
	•	Aucune fonction présente (seulement des données).
	•	Les IDs sont centralisés dans ids.ts et réutilisés partout.

⸻

Phase 2.3 terminée lorsque :
	•	/lib/mockdb/data/* = 13 fichiers avec données mock réalistes
	•	/lib/mockdb/data/ids.ts = constantes d'IDs centralisées
	•	/lib/mockdb/data/index.ts = exporte toutes les données
	•	/lib/mockdb/schema.ts = mockDB initialisé avec les données
	•	Cohérence des IDs et relations vérifiée
	•	Scénario solo fonctionnel simulé
	•	Compilation TS valide
	•	Aucun débordement sur 2.4 / 2.5

⸻

PHASE 2.4 — TODO (Version Finale Cursor)

Objectif : créer l'API Mock Layer qui simule les futurs endpoints backend, construisant les Domain Models à partir du mockDB, avec gestion d'erreurs explicite et zéro logique métier.

⸻

RÈGLES OBLIGATOIRES

1. Interdictions strictes :
	•	Aucune logique métier (pas de filtrage, pas de tri, pas de sélection d'abonnement, pas d'inférence)
	•	Aucun ! (non-null assertion)
	•	Aucune mutation du mockDB (lecture seule)
	•	Aucun endpoint REST, aucune route
	•	Aucune supposition hors mockDB
	•	Aucun filtrage silencieux (pas d'exclusion de Pro incomplet)

2. Gestion d'erreurs explicite :
	•	Les Domain Models structurels (ClientContext, Reception) ne sont jamais nullables
	•	Si une donnée fondamentale manque → throw une erreur explicite
	•	Les erreurs doivent indiquer clairement quelle donnée est manquante

3. Null-safety intelligente :
	•	Utiliser ?? null uniquement pour getProById() (recherche optionnelle)
	•	Les tableaux peuvent être vides [] (skills[], availability[], services[])
	•	Les champs structurels du Domain Model doivent throw si absents

4. Types de retour stricts :
	•	getClientContext() : ClientContext (non-null, throw si incomplet)
	•	getReception() : Reception (non-null, throw si incomplet)
	•	getPros() : Pro[] (tous les pros, throw si incomplet)
	•	getProById() : Pro | null (nullable car recherche optionnelle)

⸻

1. Structure de l'API Mock

Créer le dossier :

/lib/api/mock/

Créer les fichiers suivants :

client-context.ts
pro.ts
reception.ts
index.ts

⸻

2. API ClientContext

Créer /lib/api/mock/client-context.ts

Cette fonction doit :
	•	importer mockDB depuis @/lib/mockdb/schema
	•	importer le type ClientContext depuis @/lib/domain
	•	importer getReception depuis ./reception
	•	importer getPros depuis ./pro
	•	exporter une fonction getClientContext() qui retourne ClientContext (non-null)
	•	construire ClientContext en agrégeant :
		- client : mockDB.clients[0] (throw si absent)
		- subscriptions : mockDB.subscriptions (sans filtrage)
		- clientProducts : mockDB.clientProducts (sans filtrage)
		- reception : construite via getReception() (non-null, throw si absent)
		- pros : construits via getPros() (peut être tableau vide)

Règle : ClientContext est un prérequis de l'application. Si une donnée fondamentale manque, throw une erreur explicite.

Exemple de structure :

```typescript
import { mockDB } from '@/lib/mockdb/schema'
import type { ClientContext } from '@/lib/domain'
import { getReception } from './reception'
import { getPros } from './pro'

export function getClientContext(): ClientContext {
  const client = mockDB.clients[0]
  if (!client) {
    throw new Error('ClientContext: client manquant dans mockDB')
  }

  const subscriptions = mockDB.subscriptions
  const clientProducts = mockDB.clientProducts
  const reception = getReception()
  const pros = getPros()

  return {
    client,
    subscriptions,
    clientProducts,
    reception,
    pros,
  }
}
```

⸻

3. API Pro

Créer /lib/api/mock/pro.ts

Cette fonction doit :
	•	importer mockDB depuis @/lib/mockdb/schema
	•	importer le type Pro depuis @/lib/domain
	•	exporter une fonction getPros() qui retourne Pro[]
	•	exporter une fonction getProById(teamMemberId: string) qui retourne Pro | null
	•	pour chaque teamMember dans mockDB.teamMembers :
		- trouver le ReceptionTeamMember correspondant (teamMemberId) avec find() → throw si absent
		- trouver le ReceptionTeamMemberStats correspondant (teamMemberId) avec find() → throw si absent
		- trouver les ReceptionTeamMemberSkill[] correspondants (teamMemberId) avec filter() → [] si vide
		- trouver les ReceptionTeamMemberAvailability[] correspondants (teamMemberId) avec filter() → [] si vide
		- construire l'objet Pro agrégé pour TOUS les teamMembers
		- si reception ou stats sont absents → throw une erreur explicite

Règle : un Pro existe dans la DB, donc toutes ses données doivent être présentes. Aucun filtrage silencieux. Si une sous-table manque, c'est un bug de données → throw.

Exemple de structure :

```typescript
import { mockDB } from '@/lib/mockdb/schema'
import type { Pro } from '@/lib/domain'

export function getPros(): Pro[] {
  const pros: Pro[] = []

  for (const member of mockDB.teamMembers) {
    const reception = mockDB.receptionTeamMembers.find(
      (r) => r.teamMemberId === member.id
    )
    if (!reception) {
      throw new Error(`Pro ${member.id}: ReceptionTeamMember manquant`)
    }

    const stats = mockDB.receptionTeamMemberStats.find(
      (s) => s.teamMemberId === member.id
    )
    if (!stats) {
      throw new Error(`Pro ${member.id}: ReceptionTeamMemberStats manquant`)
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
  const pros = getPros()
  return pros.find((p) => p.member.id === teamMemberId) ?? null
}
```

⸻

4. API Reception

Créer /lib/api/mock/reception.ts

Cette fonction doit :
	•	importer mockDB depuis @/lib/mockdb/schema
	•	importer le type Reception depuis @/lib/domain
	•	exporter une fonction getReception() qui retourne Reception (non-null)
	•	construire Reception en agrégeant :
		- details : mockDB.receptionDetails[0] (throw si absent)
		- config : mockDB.receptionConfigs[0] (throw si absent)
		- integrations : mockDB.receptionIntegrations[0] (throw si absent)
		- services : mockDB.receptionServices (peut être tableau vide)

Règle : Reception est un prérequis de l'application (noyau du produit). Si details, config ou integrations sont absents → throw une erreur explicite.

Exemple de structure :

```typescript
import { mockDB } from '@/lib/mockdb/schema'
import type { Reception } from '@/lib/domain'

export function getReception(): Reception {
  const details = mockDB.receptionDetails[0]
  if (!details) {
    throw new Error('Reception: receptionDetails manquant dans mockDB')
  }

  const config = mockDB.receptionConfigs[0]
  if (!config) {
    throw new Error('Reception: receptionConfigs manquant dans mockDB')
  }

  const integrations = mockDB.receptionIntegrations[0]
  if (!integrations) {
    throw new Error('Reception: receptionIntegrations manquant dans mockDB')
  }

  const services = mockDB.receptionServices

  return {
    details,
    config,
    integrations,
    services,
  }
}
```

⸻

5. Index de l'API

Créer /lib/api/mock/index.ts

Exporter toutes les fonctions API :

```typescript
export { getClientContext } from './client-context'
export { getPros, getProById } from './pro'
export { getReception } from './reception'
```

⸻

6. Vérifications internes
	•	Toutes les fonctions retournent les types stricts : ClientContext (non-null), Reception (non-null), Pro[], Pro | null
	•	Toutes les fonctions utilisent uniquement mockDB pour accéder aux données
	•	Les agrégations respectent la structure définie dans /lib/domain
	•	Les relations sont correctement résolues (teamMemberId, serviceId, etc.)
	•	Aucune fonction ne modifie mockDB (lecture seule)
	•	Toutes les fonctions sont typées correctement
	•	Zéro ! (non-null assertion) dans tout le code
	•	Gestion d'erreurs explicite avec throw pour les données structurelles manquantes
	•	?? null utilisé uniquement pour getProById() (recherche optionnelle)
	•	Aucune logique métier (pas de filtrage conditionnel, pas de tri, pas de sélection, pas d'exclusion silencieuse)
	•	Les tableaux vides sont acceptés (skills[], availability[], services[])
	•	Les erreurs throw indiquent clairement quelle donnée est manquante

⸻

Phase 2.4 terminée lorsque :
	•	/lib/api/mock/* = 4 fichiers (client-context.ts, pro.ts, reception.ts, index.ts)
	•	getClientContext() retourne ClientContext (non-null, throw si incomplet)
	•	getPros() retourne Pro[] avec toutes les relations agrégées (throw si Pro incomplet, aucun filtrage silencieux)
	•	getProById() retourne Pro | null (nullable car recherche optionnelle)
	•	getReception() retourne Reception (non-null, throw si incomplet)
	•	Toutes les fonctions sont exportées dans index.ts
	•	Aucune modification de mockDB (lecture seule)
	•	Zéro ! dans tout le code
	•	Gestion d'erreurs explicite avec throw pour données structurelles manquantes
	•	?? null utilisé uniquement pour getProById()
	•	Aucune logique métier (pas de filtrage, pas d'exclusion silencieuse)
	•	Compilation TS valide
	•	Aucun débordement sur 2.5

⸻

Phase 2.5 — Validation de Cohérence

Objectif : vérifier que l’ensemble Domain Models + MockDB + API Mock est compatible et opérationnel.
Tâches principales :
	•	Vérifier que tout compile sans erreur TypeScript.
	•	Vérifier que tous les Domain Models sont alimentés correctement.
	•	Vérifier que les relations fonctionnent.
	•	Vérifier que les API mock retournent les bons formats.
	•	Vérifier que rien ne dépend de données non whitelistées.
	•	Vérifier l’alignement strict avec macro2.support.

Sortie attendue :
Macro 2 validée, prête à être utilisée par Macro 3, 4, 5, 6.

⸻

Résumé des phases Macro 2
	•	Phase 2.1 : Domain Models Front
	•	Phase 2.2 : Mock Database Schema
	•	Phase 2.3 : Mock Data
	•	Phase 2.4 : API Mock Layer
	•	Phase 2.5 : Validation de Cohérence


---


---

- **Macro 3 — Authentification (mockée Supabase)**
  - **Objectif général**
    La **Macro 3** implémente le système d’accès et de protection utilisateur.
    Elle prépare la logique d’authentification à partir des outils Supabase, en mode mocké.
    Cette macro :
    - intègre le SDK Supabase et les flux signup/login/logout ;
    - met en place la redirection selon l’état d’authentification ;
    - prépare le terrain pour une future connexion réelle.
    🎯 **Rôle pour le front :**
    Elle garantit que le routage et la sécurité utilisateur fonctionnent avant d’introduire des données réelles.

---

- **Macro 4 — Onboarding (mock data)**
  ### **🎯 Objectif général**
  Construire le wizard d’onboarding basé sur mock data, en suivant l’histoire produit :
  - salon → équipe → services → intégrations → validation
  ### **🔧 Ajustements nécessaires**
  Les routes /onboarding/ existent déjà (créées automatiquement lors de Macro 0.5).
  → Cette macro doit **remplacer** ou **compléter** ces routes selon la structure définie en Macro 1.
  → Normaliser le wizard pour être compatible avec les données mock de Macro 2.
  ### **🧱 Rôle pour le front**
  Simuler la création du “cerveau IA” avant les vraies données Supabase.
  ***
  - **Macro 5 — Dashboard (mock data)**
    - **Objectif général**
      La **Macro 5** met en place le cœur visuel du produit : le tableau de bord.
      Elle représente l’activité du salon ou de l’équipe en données simulées.
      Cette macro :
      - définit le layout principal (sidebar, header, overview) ;
      - affiche les cartes et métriques à partir des mocks ;
      - valide la lisibilité et la structure du dashboard.
      🎯 **Rôle pour le front :**
      Elle concrétise la promesse produit d’Alfred Reception et sert de base pour la future intégration data réelle.

#

#

# **(légèrement ajustée)**

###

---

- **Macro 6 — Settings & Équipe (mock data)**
  - **Objectif général**
    La **Macro 6** gère la personnalisation et la configuration utilisateur.
    Elle simule la gestion des profils, préférences et équipes à partir des mock data.
    Cette macro :
    - construit les pages profil et préférences ;
    - simule la logique multi-membres Solo ↔ Pro ;
    - valide les permissions et rôles au niveau front.
    🎯 **Rôle pour le front :**
    Elle structure l’administration utilisateur et prépare les logiques d’équipe réelles.

---

- **Macro 7 — Design System & Identité Visuelle**
  - **Objectif général**
    La **Macro 7** formalise l’identité visuelle d’Alfred Reception.
    Elle consolide le design system et centralise tous les composants UI.
    Cette macro :
    - définit les fondations visuelles (palette, typographies, radius, motion) ;
    - intègre le design system dans Storybook ;
    - harmonise le rendu sur l’ensemble du front.
    🎯 **Rôle pour le front :**
    Elle apporte cohérence et continuité visuelle avant passage à la data réelle.

---

- **Macro 7.5 — Connexion Réelle & QA**
  - **Objectif général**
    La **Macro 7.5** connecte le front à Supabase et valide les flux réels.
    Elle transforme les mocks en requêtes et synchronisations réelles.
    Cette macro :
    - remplace les données simulées par des queries Supabase ;
    - vérifie les RLS et la cohérence des flux ;
    - exécute une QA complète sur le parcours utilisateur.
    🎯 **Rôle pour le front :**
    Elle certifie la stabilité du produit et clôt la phase technique.

---

- **Macro 8 — Landing, Marketing & SEO**
  - **Objectif général**
    La **Macro 8** développe la vitrine publique du produit.
    Elle met en avant l’offre et optimise la conversion.
    Cette macro :
    - crée les pages marketing (hero, features, pricing, contact) ;
    - intègre le SEO technique et les formulaires reliés à Supabase ;
    - unifie le ton visuel entre landing et produit.
    🎯 **Rôle pour le front :**
    Elle relie la couche marketing à l’expérience utilisateur et sert d’entrée principale au produit.

---

- **Macro 9 — Tests & Validation**
  - **Objectif général**
    La **Macro 9** évalue la robustesse du front.
    Elle s’assure que chaque flux utilisateur et chaque composant fonctionnent sans erreur.
    Cette macro :
    - implémente les tests unitaires (Vitest) et E2E (Playwright) ;
    - valide les performances via Lighthouse ;
    - garantit la fiabilité avant production.
    🎯 **Rôle pour le front :**
    Elle transforme le projet en produit vérifié, maintenable et prêt à déployer.

---

- **Macro 10 — Monitoring & Observabilité**
  - **Objectif général**
    La **Macro 10** implémente la supervision du produit en production.
    Elle fournit les outils d’analyse et de suivi nécessaires à la maintenance continue.
    Cette macro :
    - intègre LogRocket, Sentry, PostHog, GA4 et Meta Pixel ;
    - crée le tableau de bord interne d’usage et d’incidents ;
    - garantit traçabilité et amélioration continue.
    🎯 **Rôle pour le front :**
    Elle prolonge la stabilité du produit après lancement et fournit la base de mesure pour les itérations futures.
