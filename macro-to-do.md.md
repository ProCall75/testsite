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

	## Macro 3 — Authentification Mockée

	### Context

	La Macro 3 implémente le système d'authentification mocké complet (Supabase mock) pour le front Alfred Reception. Elle établit les fondations d'accès utilisateur : types auth stricts, client mock en mémoire, contexte React global, hooks d'authentification, protection client-side des routes (app), et interfaces UI minimales (login/signup/logout). Le système est entièrement non-persistant (sessions en mémoire uniquement) et prépare l'intégration future avec Supabase réel.

	### Command

	- **Phase 3.1** : Configuration Supabase mock (types `User`, `Session`, `AuthState`, client `supabaseMock` avec `signUp`, `signIn`, `signOut`, `getSession`, config mock)
	- **Phase 3.2** : Auth Context & Hooks (`auth-client.ts` wrapper, `AuthProvider` avec état global, hooks `useUser`, `useSession`, `useIsAuthenticated`, intégration dans `RootLayout`)
	- **Phase 3.3** : Auth Routes & Protection (`ClientAuthGuard` client-side minimal, intégration dans layout `(app)` avec `redirectTo`, routes marketing publiques, routes app protégées)
	- **Phase 3.4** : Login/Signup/Logout UI (`LoginForm`, `SignupForm`, `LogoutButton` utilisant `supabaseMock`, pages `/login` et `/signup` dans `(marketing)`, `LogoutButton` intégré dans layout `(app)`)

### Check

- ✅ Système auth mock complet et fonctionnel (signup → login → access → logout)
- ✅ Routes marketing publiques (`/login`, `/signup` accessibles sans auth)
- ✅ Routes app protégées (`ClientAuthGuard` redirige vers `/` si non-auth)
- ✅ Aucune persistance (sessions en mémoire uniquement, refresh → déconnexion)
- ✅ Utilisation exclusive de `supabaseMock` (aucun Supabase réel, aucun pattern interdit)
- ✅ Compilation TypeScript OK, types stricts respectés
- ✅ Validation Phase 3.5 passée (8/8 vérifications)
- ✅ **Prêt pour Macro 3.5** (Redirections & Guards complets)

---





## Macro 3.5 — Redirections & Guards Complets

### Context

La Macro 3.5 complète le système d'authentification mockée en ajoutant les redirections complètes et la logique de navigation. Elle s'appuie strictement sur l'existant de Macro 3 (auth mockée, providers, guards, pages) sans rien réécrire ni dupliquer. Elle définit le contrat de routing, implémente les redirections dans le guard existant, valide la logique complète, et effectue un refactor propre.

### Command

- **Phase 3.5.1** : Vérification du socle Macro 3 (lecture seule) — analyse du code existant (providers, auth context, guard, login/signup/logout, redirections actuelles), rapport de ce qui existe et manque

**Context** : La Phase 3.5.1 analyse le socle auth Macro 3 pour identifier ce qui existe réellement et ce qui manque pour compléter les redirections auth minimales, sans logique produit ni onboarding.

**Command** : Analyse en lecture seule de tous les fichiers auth (`types.ts`, `config.ts`, `supabase-mock.ts`, `auth-client.ts`, `auth-context.tsx`, `hooks.ts`, `client-auth-guard.tsx`, `login-form.tsx`, `signup-form.tsx`, `logout-button.tsx`, `index.ts`), layouts (`app/layout.tsx`, `app/(app)/layout.tsx`, `app/(marketing)/layout.tsx`), pages (`app/(marketing)/login/page.tsx`, `app/(marketing)/signup/page.tsx`), et recherche des occurrences `router.push`/`redirect`. Compilation du rapport dans `/DOCS/PHASE3.5.1-RAPPORT-SOCLE.md`.

**Check** : Audit complet effectué, structures existantes analysées, absence totale de logique onboarding/produit confirmée, aucun écart entre audit et code réel, rapport généré, conforme Macro 3.5.

⸻

- **Phase 3.5.2** : Définition du Routing Contract — document `/DOCS/auth-routing.contract.md` définissant routes publiques/protégées, règles de navigation minimales (login → dashboard, signup → login, logout → login, guard → login, refresh → état mocké)

**Context** : Le contrat de routing AUTH minimal doit être documenté pour définir explicitement les règles de navigation basées uniquement sur l'état d'authentification, sans logique produit ni onboarding.

**Command** : Créer le document `/DOCS/auth-routing.contract.md` avec sections routes publiques/protégées, règles de navigation minimales, comportement guard/refresh, périmètre & limites, interdits explicites.

**Check** : Contrat documenté, routes publiques/protégées listées, règles minimales définies (login → dashboard, signup → login, logout → login, guard → login), aucun code modifié, conforme Macro 3.5.

⸻

- **Phase 3.5.3** : Implémentation des redirections — complétion des formulaires et guard avec redirections du contrat (`/DOCS/auth-routing.contract.md`), utilisation des helpers/structures existants, sans casser l'existant

**Context** : La Phase 3.5.3 implémente les redirections auth minimales définies dans le contrat, en complétant les formulaires et le guard existants sans modifier la logique métier.

**Command** : Modifier `/lib/auth/login-form.tsx` (ajouter `router.push('/dashboard')` après `signIn` et `setTimeout`), `/lib/auth/signup-form.tsx` (ajouter `router.push('/login')` après `signUp` et `setTimeout`), `/lib/auth/logout-button.tsx` (ajouter `router.push('/login')` après `signOut`), `/app/(app)/layout.tsx` (changer `redirectPath` de `'/'` à `'/login'`). Vérifier synchronisation auth et absence d'anticipation.

**Check** : Redirections conformes au contrat (login → /dashboard, signup → /login, logout → /login, guard → /login), utilisation exclusive de l'existant, aucune logique onboarding/produit, synchronisation auth respectée, TypeScript OK, conforme Macro 3.5.

⸻

- **Phase 3.5.4** : Validation (guard complet) — validation statique (redirections présentes, absence d'interdits, guard conforme) + validation humaine runtime (tests manuels dans navigateur)

**Context** : La Phase 3.5.4 valide que toutes les redirections AUTH minimales sont correctement implémentées et fonctionnent en runtime.

**Command** : Validation statique du code (présence redirections, absence interdits, guard conforme, synchronisation auth, TypeScript OK) + validation humaine runtime (tests manuels login → dashboard, signup → login, logout → login, guard → login, refresh routes protégées/publiques).

**Check** : Validation statique réussie, toutes redirections conformes au contrat, absence de redirections interdites, synchronisation auth respectée, guard conforme, TypeScript OK, validation humaine documentée (tests runtime réussis), conforme Macro 3.5.

⸻

- **Phase 3.5.5** : Refactor propre — nettoyage léger, nommage cohérent, suppression doublons, extraction dans `/lib/auth/*` si pertinent, sans toucher la logique ni bouger ce qui marche

**Context** : La Phase 3.5.5 effectue un nettoyage minimal du code auth sans modifier la logique, en supprimant les fichiers obsolètes, les imports non utilisés, les commentaires morts, et en vérifiant la cohérence structurelle.

**Command** : Supprimer `/app/debug/auth-test/page.tsx` et dossier vide, supprimer `/lib/auth/auth-provider-wrapper.tsx` si orphelin, nettoyer imports non utilisés et commentaires morts dans `/lib/auth`, vérifier nommage fichiers et structure exports (lecture seule), valider compilation TypeScript.

**Check** : Page debug supprimée, fichier obsolète supprimé, imports non utilisés supprimés, commentaires morts supprimés, nommage fichiers vérifié, structure exports vérifiée, TypeScript OK, aucune modification de logique, conforme Macro 3.5

⸻

### Check

- ✅ Contrat de routing défini et documenté
- ✅ Redirections complètes implémentées dans guard existant
- ✅ Logique de navigation validée (login/logout/refresh)
- ✅ Aucune réécriture ni duplication de Macro 3
- ✅ Utilisation exclusive de l'existant (providers, context, guard, pages)
- ✅ Compilation TypeScript OK
- ✅ **Prêt pour Macro 4**





---

⸻

MACRO 4 — ONBOARDING ✅

**Context**

Macro 4 a mis en place l'onboarding minimaliste d'Alfred Reception. Objectif : permettre à l'utilisateur d'enchaîner les étapes essentielles à l'activation du salon (identité, horaires, services, intégrations) via un wizard multi-étapes simple, utilisant uniquement les mock data de Macro 2.

Règle d'or : Solo et Pro utilisent le même onboarding minimal. Toutes les précisions et configurations avancées sont réservées à Settings (Macro 6).

**Command**

Implémentation complète du wizard d'onboarding avec 6 étapes :
1. Identité du Salon — Formulaire avec champs obligatoires et optionnels
2. Horaires du Salon — Gestion des horaires par jour avec possibilité de fermer des jours
3. Services — Ajout/suppression de services avec validation minimale
4. Intégration Agenda — Activation Google Calendar / Outlook Calendar
5. Communication — Activation SMS/WhatsApp/Telegram
6. Confirmation & Activation — Résumé complet avec CTA vers dashboard

Composants créés :
- `OnboardingWizard` (page.tsx) — Container principal avec gestion d'état
- `WizardFooter` — Navigation Back/Next avec validation
- `Timeline` — Indicateur de progression textuel (6 segments)
- `StepIdentity`, `StepHours`, `StepServices`, `StepCalendar`, `StepCommunications`, `StepSummary`

Fonctionnalités :
- Navigation linéaire Next/Back avec validation par étape
- Gestion d'état `formData` pour toutes les étapes
- Redirection vers `/dashboard` après activation
- Bypass temporaire du guard pour `/onboarding` et `/dashboard`
- Code nettoyé (imports obsolètes, TODOs retirés)

**Check**

✅ Wizard minimal fonctionnel (UI testable)
✅ Navigation interne fonctionnelle
✅ Redirection vers dashboard opérationnelle
✅ Code nettoyé et prêt
✅ Documentation complète dans `/DOCS/Macro 4 support/`
✅ Prêt pour Macro 5 (Dashboard)

Livrables :
- `/DOCS/Macro 4 support/onboarding.flow.md`
- `/DOCS/Macro 4 support/onboarding.ui-contract.md`
- `/DOCS/Macro 4 support/macro4.support.md`
- `/DOCS/Macro 4 support/PHASE4.4-TODOS-EXECUTIFS.md`

# **Macro 5 — Dashboard (UI minimale requise)**

Création de :

- header
- sidebar
- cartes mockées
- KPIs
- listes de données

→ test du dashboard complet.

---

# **Macro 6 — Settings (UI minimale requise)**

Création de :

- page profil
- page équipe
- formulaire
- switch
- listes membres
- permissions minimalistes

→ test de tout le module

---

# **⭐**

# **🧩 Macro 6.5 — Routing & Guards Logiques Complets (Produit)**

**(NOUVEAU — VERSION TAMPON)**

Objectif :

Une fois les pages construites (Macros 4-6), créer la **logique de navigation produit réelle**.

Contenu :

- onboarding incomplet → onboarding
- onboarding complet → dashboard
- first-login → onboarding
- navigation conditionnelle complète
- guards produit
- redirections fallback
- cohérence totale des flows

Rôle :

Faire passer le front d’une auth minimale → routage produit complet.

---

# **🧩 Macro 7 — Design System & Identité Visuelle**

Objectif :

Construire le design system + UI components.

Contenu :

- palette
- typographies
- spacing
- components
- motions
- Storybook

Rôle :

Habiller tout le front construit dans les macros précédentes.

---

# **🧩 Macro 7.5 — Connexion Réelle & QA**

Objectif :

Remplacer les mocks par le vrai Supabase.

Contenu :

- queries
- mutations
- RLS
- flux réel
- QA complète

Rôle :

Rendre le front réellement opérationnel.

---

# **🧩 Macro 8 — Landing, Marketing & SEO**

Objectif :

Créer l’expérience publique marketing.

Contenu :

- hero
- features
- pricing
- contact
- SEO
- conversion

---

# **🧩 Macro 9 — Tests & Validation**

Objectif :

Solidifier le produit.

Contenu :

- tests unitaires
- tests E2E
- Lighthouse
- QA finale

---

# **🧩 Macro 10 — Monitoring & Observabilité**Objectif :

Ajouter les outils de suivi et d’analyse.

Contenu :

- Sentry
- LogRocket
- PostHog
- GA4
- Pixel Meta
- Dashboards internes

