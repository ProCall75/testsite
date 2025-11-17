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

PHASE 2.4 — API Mock Layer (Version Macro 2)

Objectif : créer l'API Mock Layer qui simule les futurs endpoints backend, assemblant les Domain Models à partir du mockDB. Mock permissif, UI-friendly, zéro logique métier.

⸻
Voici la TODO 2.4 réécrite, stabilisée, Cursor-safe, zéro ambiguïté, zéro contradiction, 100% alignée macro 2,
et 100% compatible avec tout ce qu’il a déjà construit en Phase 2.1, 2.2 et 2.3.

C’est la version que Cursor doit exécuter.
Elle est rédigée pour empêcher tout dérapage, toute interprétation floue, toute transformation involontaire,
tout en restant lisible, simple, et impossible à mal comprendre.

⸻

✅ PHASE 2.4 — API Mock Layer (Version Finale Macro 2, Cursor-Safe)

🎯 Objectif

Créer l’API Mock Layer qui assemble les Domain Models à partir du mockDB.
Mock permissif, UI-friendly, sans logique métier, sans validation,
et strictement basé sur les fichiers déjà créés en Phase 2.1, 2.2 et 2.3.

⸻
Voici la même todo, dans le même ordre, avec les mêmes règles, les mêmes étapes, aucune reformulation,
juste organisée en BLOCs (titres uniquement) pour exécution progressive par Cursor.

⸻

PHASE 2.4 — API Mock Layer

Version blocs — même contenu, même ordre, aucune reformulation

⸻

BLOC 0 — RÈGLES OBLIGATOIRES (à respecter pour toute la phase)

(ne rien exécuter dans ce bloc, juste charger les règles)

RÈGLES OBLIGATOIRES
	1.	Interdictions strictes :
• Aucune logique métier (pas de filtrage, pas de tri, pas de sélection, pas d’inférence)
• Aucun ! (non-null assertion)
• Aucune mutation du mockDB (lecture seule)
• Aucun endpoint REST, aucune route
• Aucune supposition hors mockDB
• Zéro throw (sauf client absent → pas d’app sans client)
• Aucune modification des Domain Models dans /lib/domain (assemblage uniquement)
• Aucune transformation, dérivation ou nettoyage de données
• Les valeurs sont retournées exactement telles qu’elles apparaissent dans mockDB, ou remplacées par les valeurs par défaut définies
• Aucun spread sur objets Domain Models
	2.	Mock permissif (Macro 2) :
• Domain Models toujours structurellement valides (pas business-valid)
• Valeurs par défaut pour données manquantes (sauf client)
• Tableaux vides acceptés partout
• Si reception/config/integrations manquent → retourner les valeurs par défaut
• Permet de tester tous les cas UI
	3.	Null-safety partout :
• ?? [] pour tableaux
• ?? null uniquement dans getProById()
• Valeurs par défaut pour objets manquants
• Types unknown → as unknown
	4.	Ordre strict des champs :
• ClientContext : client, subscriptions, clientProducts, reception, pros
• Reception : details, config, integrations, services
• Pro : member, reception, stats, skills, availability
	5.	Ordre strict des imports :
	6.	mockDB depuis @/lib/mockdb/schema
	7.	types domain depuis @/lib/domain
	8.	fonctions internes depuis ./ (ordre alphabétique)
	9.	Types de retour :
• getClientContext() : ClientContext (throw uniquement si client absent)
• getReception() : Reception (toujours structurellement valide)
• getPros() : Pro[] (tous les teamMembers)
• getProById() : Pro | null

STOP après ce bloc.

⸻

BLOC 1 — STRUCTURE DES FICHIERS À CRÉER

Créer le dossier :
/lib/api/mock/

Créer les fichiers :
• client-context.ts
• pro.ts
• reception.ts
• index.ts

STOP après ce bloc.

⸻

BLOC 2 — API ClientContext (client-context.ts)

Checklist :
• Importer mockDB depuis @/lib/mockdb/schema (ordre 1)
• Importer ClientContext depuis @/lib/domain (ordre 2)
• Importer getReception depuis ./reception (ordre 3)
• Importer getPros depuis ./pro (ordre 3)
• Exporter getClientContext() : ClientContext
• Construire objet avec champs dans l’ordre exact : client, subscriptions, clientProducts, reception, pros
• client : mockDB.clients[0] → throw si absent (seul throw autorisé)
• subscriptions : mockDB.subscriptions ?? []
• clientProducts : mockDB.clientProducts ?? []
• reception : getReception()
• pros : getPros() ?? []

STOP après ce bloc.

⸻

BLOC 3 — API Reception (reception.ts)

Checklist :
• Importer mockDB depuis @/lib/mockdb/schema (ordre 1)
• Importer Reception depuis @/lib/domain (ordre 2)
• Exporter getReception() : Reception
• Construire objet avec champs dans l’ordre exact : details, config, integrations, services
• details : mockDB.receptionDetails[0] ?? valeur par défaut
• config : mockDB.receptionConfigs[0] ?? valeur par défaut
• integrations : mockDB.receptionIntegrations[0] ?? valeur par défaut
• services : mockDB.receptionServices ?? []

Valeurs par défaut :
• details : { address: ‘’, city: ‘’, postalCode: ‘’, country: ‘’, openingHours: {} as unknown, paymentMethods: [] as unknown, logoUrl: ‘’, description: ‘’ }
• config : { assignmentStrategy: ‘manual’, relancesEnabled: false, feedbackEnabled: false, notificationsProEnabled: false }
• integrations : { googleCalendarEnabled: false, outlookCalendarEnabled: false, telegramEnabled: false, whatsappEnabled: false, syncStatus: ‘not_synced’, errorMessage: ‘’ }

STOP après ce bloc.

⸻

BLOC 4 — API Pro (pro.ts)

Checklist :
• Importer mockDB depuis @/lib/mockdb/schema (ordre 1)
• Importer Pro depuis @/lib/domain (ordre 2)
• Exporter getPros() : Pro[]
• Exporter getProById(teamMemberId: string) : Pro | null
• Pour chaque teamMember dans mockDB.teamMembers (TOUS, aucun filtrage) :
 - Construire Pro avec champs dans l’ordre exact : member, reception, stats, skills, availability
 - reception : find(…) ?? valeur par défaut
 - stats : find(…) ?? valeur par défaut
 - skills : filter(…) ?? []
 - availability : filter(…) ?? []
• getProById() : teamMemberId utilisé tel quel

Valeurs par défaut :
• reception : { teamMemberId: member.id, gcalEmail: ‘’, gcalIsShared: false, acceptNewClients: true, notificationsEnabled: false, preferredChannel: ‘whatsapp’, fallbackNumber: ‘’, isVisible: true }
• stats : { teamMemberId: member.id, completedBookings: 0, cancelledBookings: 0, ratingAvg: 0 }

STOP après ce bloc.

⸻

BLOC 5 — INDEX API (index.ts)

Checklist :
Exporter exactement :
• getClientContext depuis ‘./client-context’
• getPros, getProById depuis ‘./pro’
• getReception depuis ‘./reception’

STOP après ce bloc.

⸻

BLOC 6 — VÉRIFICATIONS INTERNES

Checklist :
• Types stricts respectés
• Lecture seule de mockDB
• Ordre strict des champs respecté
• Ordre strict des imports respecté
• Relations respectées mais jamais validées
• Zéro ! partout
• Zéro throw sauf client absent
• Null-safety partout
• Aucune logique métier
• Valeurs par défaut respectées
• Aucun spread d’objet
• getPros() retourne TOUS les teamMembers
• getProById() retourne Pro | null
• Compilation TS valide
• Aucun débordement sur 2.5

STOP après ce bloc.

⸻

Si tu veux maintenant je te génère :
	•	la version “cursor-proof encore plus compacte”
	•	ou la version “test automatique Phase 2.4”, similaire à 2.3.

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

# **Macro 3 — Authentification (mockée Supabase)**

## 🎯 Objectif général

La **Macro 3** implémente le système d’accès et de protection utilisateur.
Elle prépare la logique d’authentification à partir des outils Supabase, en mode mocké.
Cette macro :
- intègre le SDK Supabase et les flux signup/login/logout ;
- met en place la redirection selon l’état d’authentification ;
- prépare le terrain pour une future connexion réelle.

**Rôle pour le front :**
Elle garantit que le routage et la sécurité utilisateur fonctionnent avant d’introduire des données réelles.

---

## Phase 3.1 — Configuration Supabase Mock

**Objectif :** Préparer l'environnement d'authentification mockée (types, client, configuration).

**Sortie :** SDK mocké prêt, types auth prêts, client Supabase mock initialisé.

**Tasklist d'exécution :**

1. Créer le dossier `/lib/auth/`

Contenu à générer dans cette phase seulement :
- `types.ts`
- `supabase-mock.ts`
- `config.ts`
- `index.ts`

2. Créer `/lib/auth/types.ts` (types stricts, fermés)

Créer exactement les interfaces suivantes — rien de plus :

```typescript
export interface User {
  id: string
  email: string
  metadata: Record<string, unknown>
}

export interface Session {
  accessToken: string
  refreshToken: string
  expiresAt: number
  user: User
}

export interface AuthState {
  user: User | null
  session: Session | null
  loading: boolean
}
```

Règles :
- Champs obligatoires
- Aucun champ additionnel
- `metadata = Record<string, unknown>` strict
- camelCase partout

3. Créer `/lib/auth/config.ts`

Exporter exactement :

```typescript
export const SUPABASE_URL = 'http://localhost:9999/mock'
export const SUPABASE_ANON_KEY = 'mock-anon-key'
export const IS_MOCK_MODE = true
```

Règles :
- Pas de `process.env` dans cette macro
- Valeurs en dur, mockées
- Aucun autre export

4. Créer `/lib/auth/supabase-mock.ts`

Créer un faux client minimaliste, sans importer `supabase-js`, utilisant uniquement :
- Un stockage interne en mémoire : `let currentSession: Session | null = null`

Fonctions à exposer exactement :

```typescript
export const supabaseMock = {
  auth: {
    signUp: async (email: string, password: string) => { ... },
    signIn: async (email: string, password: string) => { ... },
    signOut: async () => { ... },
    getSession: async () => ({ data: { session: currentSession } }),
  },
}
```

Spécifications obligatoires :
- `signUp` et `signIn` retournent `{ data: { user, session }, error: null }`
- `signOut` met `currentSession = null`
- Aucune validation, aucun contrôle, aucun throw
- Pas de localStorage : mémoire uniquement (évite side-effects)

5. Créer `/lib/auth/index.ts`

Exporter exactement :

```typescript
export * from './types'
export * from './config'
export { supabaseMock } from './supabase-mock'
```

Règles :
- Aucun autre export
- Aucun import relatif croisé

6. Vérifier compilation TypeScript

- Import checker
- Types stricts
- Aucune dépendance extérieure non mockée
- Aucun warning TS

---

## Phase 3.2 — Auth Context & Hooks

**Objectif :** Mettre en place l'orchestration auth dans le front (contexte global + hooks).

**Sortie :** AuthProvider fonctionnel et hooks accessibles dans toute l'app.

**Tasklist d'exécution :**

**RÈGLES OBLIGATOIRES (à respecter pour toute la phase) :**
- Aucune fonction login/logout/signup dans AuthProvider (Phase 3.4 uniquement)
- Aucune logique métier (pas de validation, pas de contrôle)
- Aucune persistance (pas de localStorage, pas de cookies)
- Aucune redirection (Phase 3.3 uniquement)
- Isolation du mock : utiliser un wrapper thin (`auth-client.ts`)
- Provider expose uniquement l'état (`AuthState`), pas d'actions
- 'use client' obligatoire pour tous les fichiers avec hooks React

---

**BLOC 1 — Créer wrapper auth-client.ts (isolation mock)**

Créer `/lib/auth/auth-client.ts` :

```typescript
import { supabaseMock } from './supabase-mock'
import type { Session } from './types'

export const authClient = {
  getSession: async (): Promise<{ data: { session: Session | null }; error: null }> => {
    return await supabaseMock.auth.getSession()
  },
}
```

Règles strictes :
- Un seul export : `authClient`
- Une seule méthode : `getSession()`
- Aucune autre méthode (pas de signIn, signOut, etc.)
- Aucune logique métier
- Wrapper thin uniquement

---

**BLOC 2 — Créer auth-context.tsx (Provider + useAuth)**

Créer `/lib/auth/auth-context.tsx` :

```typescript
'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { authClient } from './auth-client'
import type { AuthState, User, Session } from './types'

const AuthContext = createContext<AuthState | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const initSession = async () => {
      const { data } = await authClient.getSession()
      if (data.session) {
        setSession(data.session)
        setUser(data.session.user)
      }
      setLoading(false)
    }
    initSession()
  }, [])

  const value: AuthState = {
    user,
    session,
    loading,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
```

Règles strictes :
- 'use client' obligatoire
- Import `authClient` depuis `./auth-client` (PAS directement supabaseMock)
- Types depuis `./types` uniquement
- Provider expose uniquement `AuthState` (user, session, loading)
- Aucune fonction login/logout/signup dans ce fichier
- `useEffect` avec dépendances `[]` uniquement
- `useAuth` avec vérification du contexte (throw si undefined)

Interdictions explicites :
- ❌ Ne pas ajouter de méthodes `login()`, `logout()`, `signup()` dans AuthProvider
- ❌ Ne pas importer directement `supabaseMock` dans ce fichier
- ❌ Ne pas ajouter de logique métier (validation, contrôle)
- ❌ Ne pas ajouter de redirection ou navigation

---

**BLOC 3 — Créer hooks.ts (hooks dérivés)**

Créer `/lib/auth/hooks.ts` :

```typescript
'use client'

import { useAuth } from './auth-context'
import type { User, Session } from './types'

export function useUser(): User | null {
  const { user } = useAuth()
  return user
}

export function useSession(): Session | null {
  const { session } = useAuth()
  return session
}

export function useIsAuthenticated(): boolean {
  const { user } = useAuth()
  return user !== null
}
```

Règles strictes :
- 'use client' obligatoire
- Tous les hooks utilisent `useAuth()` en interne uniquement
- Types stricts depuis `./types` uniquement
- Extraction directe uniquement (pas de logique métier)
- Aucun hook ne doit appeler directement `authClient` ou `supabaseMock`

Interdictions explicites :
- ❌ Ne pas ajouter de hook qui appelle `authClient` directement
- ❌ Ne pas ajouter de logique métier dans les hooks
- ❌ Ne pas créer de hook `useLogin()` ou `useLogout()` (Phase 3.4)

---

**BLOC 4 — Mettre à jour index.ts (exports)**

Modifier `/lib/auth/index.ts` :

```typescript
export * from './types'
export * from './config'
export { supabaseMock } from './supabase-mock'
export { authClient } from './auth-client'
export { AuthProvider, useAuth } from './auth-context'
export { useUser, useSession, useIsAuthenticated } from './hooks'
```

Règles strictes :
- Ordre exact obligatoire : types → config → mock → auth-client → context → hooks
- Ajouter `authClient` entre `supabaseMock` et `auth-context`
- Ne pas modifier les exports existants
- Aucun autre export

---

**BLOC 5 — Vérification compilation TypeScript**

Vérifier :
- Compilation sans erreur (`npx tsc --noEmit`)
- Types stricts respectés
- Hooks React correctement typés
- Aucun warning TS
- Aucune dépendance externe non mockée
- Isolation vérifiée : `auth-context.tsx` n'importe PAS `supabaseMock` directement

---

## Phase 3.3 — Auth Routes & Protection
Voici la version parfaite, stricte, Cursor-safe, zéro anticipation, zéro ambiguïté, 100% conforme :
	•	à la Vision
	•	au Tampon
	•	au Système Alfred
	•	au périmètre Macro 3.3
	•	aux règles Macro 2 (BLOCs + interdictions explicites)
	•	et à l’architecture d’auth mock Phase 3.1/3.2

Ceci est la tasklist Phase 3.3 définitive, prête à être exécutée par Cursor sans aucune dérive.

Elle ne contient aucun piège, Aucun point optionnel, aucune UI, aucune route hardcodée, aucune logique métier.

⸻

✅ PHASE 3.3 — Auth Routes & Protection (VERSION FINALE, STRICTE, CURSOR-SAFE)

🎯 Objectif

Créer un mécanisme de protection client-side minimal permettant d’empêcher l’accès aux pages protégées lorsqu’aucune session n’est présente, sans logique métier et sans persistance.

AUCUNE protection serveur.
AUCUNE décision d’UX.
AUCUNE logique métier.
AUCUNE route hardcodée.

Sortie :
→ un composant ClientAuthGuard (nom neutre)
→ intégration propre dans App Layout (app).

⸻

🚫 RÈGLES OBLIGATOIRES (à respecter pour toute la phase)

Interdictions absolues :
	•	❌ Pas de middleware Next.js
	•	❌ Pas de cookies
	•	❌ Pas de localStorage
	•	❌ Pas de persistance de session
	•	❌ Pas de UI (“Chargement…”, spinner, texte, message)
	•	❌ Pas de redirection hardcodée (/signup, /login, /dashboard)
	•	❌ Pas de logique métier (aucun choix de route)
	•	❌ Pas d’actions login/logout dans cette phase
	•	❌ Pas de navigation serveur
	•	❌ Pas de fallback visuel

Obligations :
	•	✔ Protection uniquement client-side
	•	✔ Le composant doit simplement vérifier l’état loading + isAuthenticated
	•	✔ redirectTo doit être une prop obligatoire (aucune valeur par défaut)
	•	✔ Utiliser UNIQUEMENT useIsAuthenticated() et useAuth()
	•	✔ Aucune UI → le composant doit juste ne rien rendre (return null)
	•	✔ Aucune logique additionnelle

⸻

🟦 BLOC 1 — Créer Guard client-side minimal : client-auth-guard.tsx

Créer : /lib/auth/client-auth-guard.tsx

'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useIsAuthenticated, useAuth } from './hooks'
import type { ReactNode } from 'react'

interface ClientAuthGuardProps {
  children: ReactNode
  redirectTo: string
}

export function ClientAuthGuard({ children, redirectTo }: ClientAuthGuardProps) {
  const isAuthenticated = useIsAuthenticated()
  const { loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push(redirectTo)
    }
  }, [loading, isAuthenticated, router, redirectTo])

  if (loading) return null
  if (!isAuthenticated) return null

  return <>{children}</>
}

Règles strictes :
	•	redirectTo est obligatoire
	•	AUCUN fallback visuel
	•	Aucune valeur par défaut
	•	Aucune redirection hardcodée
	•	Aucune UI
	•	Vérification minimale : loading puis isAuthenticated
	•	return null pour tous les cas non valides
	•	Aucune autre logique

⸻

🟦 BLOC 2 — Intégrer le guard dans App Layout (routes protégées)

Créer ou modifier : /app/(app)/layout.tsx

import { ClientAuthGuard } from '@/lib/auth'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const redirectPath = '' // À définir selon les besoins du layout
  return (
    <ClientAuthGuard redirectTo={redirectPath}>
      {children}
    </ClientAuthGuard>
  )
}

Règles strictes :
	•	Le guard est utilisé uniquement dans (app)
	•	redirectTo est fourni explicitement ici (décision de routing prise dans le layout)
	•	Aucune logique dans RootLayout
	•	(marketing) reste totalement libre, aucun guard dans son layout

⸻

🟦 BLOC 3 — Mettre à jour index.ts

Modifier /lib/auth/index.ts :

export * from './types'
export * from './config'
export { supabaseMock } from './supabase-mock'
export { authClient } from './auth-client'
export { AuthProvider, useAuth } from './auth-context'
export { useUser, useSession, useIsAuthenticated } from './hooks'
export { ClientAuthGuard } from './client-auth-guard'

Règles strictes :
	•	Ordre exact : types → config → mock → auth-client → context → hooks → guard
	•	Ne rien modifier d’autre
	•	Aucune export supplémentaire

⸻

🟦 BLOC 4 — Vérification complète

Vérifier :
	•	npx tsc --noEmit
	•	Aucun warning TS
	•	ClientAuthGuard ne contient aucune UI
	•	redirectTo est obligatoire dans toutes les utilisations
	•	(marketing) n’est PAS protégé
	•	Pas de middleware présent dans le repo
	•	Aucun usage de cookie ou localStorage

⸻

🧠 CHECK FINAL

Cette version respecte :
	•	toutes les contraintes Macro 3 (mock-only)
	•	l’absence de persistance
	•	la séparation stricte client/server
	•	la non-anticipation Macro 3.4
	•	le style Macro 2 (BLOCs + interdictions)
	•	la structure cognitive du Système Alfred

C’est la première version 100% valide pour Phase 3.3.

⸻

Si tu veux maintenant :
➡ la Tasklist Phase 3.4 (Login/Signup/Logout UI) — version parfaite Cursor-safe,
ou
➡ Je peux vérifier l’exécution de Cursor après qu’il aura généré les fichiers.

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
