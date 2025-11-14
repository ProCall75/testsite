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



# **Macro 1 — Architecture Produit & Structure Finale**

### **🎯**

### **Objectif général**

La **Macro 1** finalise **l’architecture produit** (et non l’architecture technique générique, déjà établie en Macro 0.5).

Elle définit la structure interne, les layouts, et la hiérarchie des domaines du produit Alfred Reception — basés sur :

- les parcours réels (onboarding, dashboard, settings),
- la navigation cible,
- la cohérence future avec les mocks (Macros 2 → 6),
- la vision long terme du produit.

### **🔧**

### **Contenu**

Cette macro :

- définit les **layouts définitifs** (Root, App, Marketing) avec leurs responsabilités ;
- stabilise les **routes finales** du produit (structure, segments, futurs modules) ;
- prépare la structure des domaines :
    - /app/(app)/onboarding/…
    - /app/(app)/dashboard/…
    - /app/(app)/settings/…
    - /app/(marketing)/…
- formalise la **navigation globale** (client-side & server components) ;
- définit l’arbo prête pour Macro 2 (types / data), Macro 4 (onboarding), Macro 5 (dashboard).

### **🧱**

### **Rôle pour le front**

Elle crée **le squelette fonctionnel du produit**, pas du code générique.

C'est la fondation pour tous les écrans simulés à venir.

---

### **📋 Phases stratégiques**

> **⚠️ RÈGLE CRITIQUE — Macro 1 = STRUCTURE STATIQUE UNIQUEMENT**
> 
> Macro 1 définit **le squelette fonctionnel**, pas l'UI ni la logique métier.
> 
> **INTERDICTIONS ABSOLUES** :
> - ❌ Sidebar/Header dans AppLayout → Macro 5 (Dashboard) + Macro 7 (Design System)
> - ❌ Header/Footer dans MarketingLayout → Macro 8 (Marketing & SEO)
> - ❌ Navigation globale → Macro 7 (Design System)
> - ❌ Protection routes/Auth → Macro 3 (Authentification)
> - ❌ Providers auth/analytics/UX → Macros futures
> - ❌ Metadata avancées (viewport, OG, SEO) → Macro 8
> 
> **AUTORISÉ** :
> - ✅ Créer layouts vides (`<main>{children}</main>`)
> - ✅ Metadata minimales (title/description génériques)
> - ✅ HTML structurel de base
> - ✅ Documentation des responsabilités
> - ✅ Structuration de l'arborescence

**Phase 1 — Définition des layouts et responsabilités (STRUCTURE ONLY)** ✅

- [x] RootLayout : définir metadata minimales dans `app/layout.tsx` (title/description génériques uniquement)
- [x] RootLayout : structurer HTML minimal dans `app/layout.tsx` (`<html lang="fr">`, `<body>`)
- [x] RootLayout : intégrer UNIQUEMENT les providers autorisés (ex : theme provider structurel) → Aucun provider auth / analytics / UX
- [x] AppLayout : créer un layout minimal dans `app/(app)/layout.tsx` (pas de sidebar/header) → `<main>{children}</main>`
- [x] MarketingLayout : créer un layout minimal dans `app/(marketing)/layout.tsx` (pas de header/footer) → `<main>{children}</main>`
- [x] Documenter la hiérarchie d'imbrication des layouts (Root → Groups → Pages)
- [x] Documenter la séparation claire des responsabilités entre layouts (Root = structure globale ; App = domaine app ; Marketing = domaine marketing)

**Résumé 3C — Phase 1** :

**Context** : Phase 1 de Macro 1 définit les layouts structurels uniquement, sans UI ni logique métier, conformément à la Vision Alfred et à la chronologie inter-macros.

**Command** :
- Ajout metadata minimales (title/description génériques) dans `app/layout.tsx`
- Vérification HTML structurel (`<html lang="fr">`, `<body>`) déjà conforme
- Vérification layouts App et Marketing déjà minimaux (`<main>{children}</main>`)
- Aucun provider ajouté (conforme aux règles)
- Documentation créée : `MACRO1-PHASE1-LAYOUTS.md` (hiérarchie + responsabilités)

**Check** :
- ✅ Type-check passe sans erreur
- ✅ Layouts conformes (structure uniquement, aucune UI)
- ✅ Aucun empiètement sur Macros futures
- ✅ Documentation complète et claire
- ✅ Prêt pour Phase 2

**Phase 2 — Conventions globales : routing, nommage, segments dynamiques** ✅

- [x] Analyser les conventions Next.js App Router actuelles (route groups, layouts, pages, segments dynamiques)
- [x] Définir conventions de nommage pour les fichiers de routes
- [x] Définir conventions de nommage pour les dossiers de routes
- [x] Définir conventions de nommage pour les composants de page
- [x] Définir conventions pour les segments dynamiques
- [x] Définir conventions pour les fichiers spéciaux Next.js
- [x] Documenter toutes les conventions dans `MACRO1-PHASE2-CONVENTIONS.md`

**Résumé 3C — Phase 2** :

**Context** : Phase 2 de Macro 1 définit les conventions strictes de routing, nommage et segments dynamiques pour Next.js App Router, sans créer de fichiers ni modifier de routes.

**Command** :
- Analyse des conventions Next.js App Router actuelles (route groups, fichiers spéciaux)
- Définition conventions nommage : fichiers (kebab-case), dossiers (kebab-case), composants (PascalCase + suffixe)
- Définition conventions segments dynamiques : `[id]`, `[slug]`, `[...slug]`, `[[...slug]]`
- Définition conventions fichiers spéciaux : `loading.tsx`, `error.tsx`, `not-found.tsx`, `route.ts`
- Documentation créée : `MACRO1-PHASE2-CONVENTIONS.md` (strict minimum, essentiel uniquement)

**Check** :
- ✅ Documentation uniquement (aucun fichier route/composant créé)
- ✅ Conventions définies et documentées
- ✅ Aucune modification de routes ou layouts
- ✅ Aucune anticipation de la structure des domaines
- ✅ Documentation strict minimum (pas de remplissage)
- ✅ Prêt pour Phase 3

**Phase 3 — Architecture des route groups et hiérarchie complète** ✅

- [x] Analyser les route groups existants `(app)` et `(marketing)` pour confirmer leur rôle structurel
- [x] Définir l'architecture des route groups (rôle, périmètre, boundaries, nommage)
- [x] Définir la hiérarchie Layout → Group → Segments (niveaux, propagation, limites)
- [x] Définir la séparation des domaines (app, marketing, futurs)
- [x] Définir la structure attendue de Phase 4 (onboarding, dashboard, settings, marketing)
- [x] Établir les interdictions obligatoires
- [x] Produire `MACRO1-PHASE3-ROUTEGROUPS.md` (architecture, hiérarchie, boundaries, structure Phase 4, interdictions)

**Résumé 3C — Phase 3** :

**Context** : Phase 3 de Macro 1 définit l'architecture complète des route groups, la hiérarchie Layout → Group → Segments, et les boundaries entre domaines, sans création de fichiers ni routes.

**Command** :
- Analyse route groups existants `(app)` et `(marketing)` : rôle structurel confirmé
- Architecture route groups définie : rôle/périmètre `(app)` (domaine authentifié), `(marketing)` (domaine public), boundaries strictes, convention nommage internal English
- Hiérarchie définie : Layout Root → Group → Segments → Pages (4 niveaux max), règles propagation, limites profondeur
- Séparation domaines définie : `(app)` (onboarding, dashboard, settings), `(marketing)` (landing, pricing, signup), règles domaines futurs
- Structure Phase 4 définie : onboarding `[step]`, dashboard `[id]`, settings `[tab]`, marketing `[slug]`, règles segments dynamiques par domaine
- Interdictions établies : route groups visibles URL, français noms internes, mélange domaines, segments dynamiques incohérents
- Documentation créée : `MACRO1-PHASE3-ROUTEGROUPS.md` (architecture, hiérarchie, boundaries, structure Phase 4, interdictions)

**Check** :
- ✅ Documentation uniquement (aucun fichier route/composant/layout créé)
- ✅ Travail 100% conceptuel et structurel
- ✅ Conventions Phase 2 respectées (internal English, kebab-case, PascalCase)
- ✅ Structure Phase 4 définie sans création
- ✅ Architecture complète et validée
- ✅ Prêt pour Phase 4

**Phase 4 — Structure des domaines fonctionnels (app + marketing)** ✅

- [x] Créer structure onboarding `(app)/onboarding/` : `[step]/page.tsx`, `complete/page.tsx`
- [x] Créer structure dashboard `(app)/dashboard/` : `[id]/page.tsx`, `analytics/page.tsx`
- [x] Créer structure settings `(app)/settings/` : `page.tsx`, `[tab]/page.tsx`, `profile/page.tsx`
- [x] Créer structure offer `(marketing)/offer/[slug]/` : `[slug]/page.tsx`
- [x] Vérifier conformité (composants PascalCase + Page, kebab-case, internal English, composants vides)

**Résumé 3C — Phase 4** :

**Context** : Phase 4 de Macro 1 crée la structure complète des domaines fonctionnels (app + marketing) selon la définition Phase 3, sans UI ni logique métier.

**Command** :
- Structure onboarding créée : `onboarding/[step]/page.tsx` (OnboardingStepPage), `onboarding/complete/page.tsx` (OnboardingCompletePage)
- Structure dashboard créée : `dashboard/[id]/page.tsx` (DashboardDetailPage), `dashboard/analytics/page.tsx` (DashboardAnalyticsPage)
- Structure settings créée : `settings/page.tsx` (SettingsPage), `settings/[tab]/page.tsx` (SettingsTabPage), `settings/profile/page.tsx` (SettingsProfilePage)
- Structure offer créée : `offer/[slug]/page.tsx` (OfferDetailPage)
- Vérification conformité : tous composants PascalCase + suffixe `Page`, dossiers kebab-case, internal English, composants vides (`return null` uniquement)
- Pages marketing existantes vérifiées : pricing, signup, payment, voice-demo, dashboard-preview conformes

**Check** :
- ✅ Structure conforme Phase 3 exactement (pas d'invention)
- ✅ Composants vides uniquement (`return null`)
- ✅ Conventions Phase 2 respectées (internal English, kebab-case, PascalCase)
- ✅ Type-check : OK (aucune erreur)
- ✅ Aucune UI ni logique métier ajoutée
- ✅ Prêt pour Phase 5

**Phase 5 — Navigation globale (server/client , redirections)** ✅

- [x] Définir règles navigation globale (Server Components par défaut, Client Components si interactivité requise, aucun composant à créer)
- [x] Définir règles redirection structurelle (concept uniquement, pas de middleware/rewrites/redirects, points d'entrée app vs marketing)
- [x] Définir navigation interne (Onboarding → Dashboard → Settings, structure conceptuelle, pas de useRouter/Link/UI)
- [x] Définir navigation marketing (Landing → Pricing → Signup → Offer, structure conceptuelle, aucune UI)
- [x] Produire `MACRO1-PHASE5-NAVIGATION.md` (règles Server vs Client, redirection conceptuelle, navigation globale app vs marketing, interdictions)

**Résumé 3C — Phase 5** :

**Context** : Phase 5 de Macro 1 définit les règles de navigation globale et de redirection structurelle, sans implémentation ni UI.

**Command** :
- Règles navigation globale définies : Server Components par défaut, Client Components uniquement si interactivité requise (non implémentée Macro 1), aucun composant navigation à créer
- Règles redirection structurelle définies : redirections internes concept uniquement (pas d'auth, pas de logique), pas de middleware/rewrites/redirects Next.js, points d'entrée app vs marketing documentés
- Navigation interne définie : Onboarding → Dashboard → Settings (structure conceptuelle), navigation programmatique non autorisée (pas de useRouter, pas de Link, pas d'UI)
- Navigation marketing définie : Landing → Pricing → Signup → Offer (structure conceptuelle), aucune UI, aucun composant ou lien
- Documentation créée : `MACRO1-PHASE5-NAVIGATION.md` (règles Server vs Client, redirection conceptuelle, navigation globale app vs marketing, interdictions)

**Check** :
- ✅ Documentation minimale uniquement (aucun composant créé)
- ✅ Pas de navigation réelle (structure conceptuelle seulement)
- ✅ Pas d'auth (Macro 3), pas d'UI (Macro 7)
- ✅ Pas de répétition des Phases 1–4
- ✅ Prêt pour Phase 6

**Phase 6 — Validation structurelle & préparation Macro 2**

📋 TODO-START Phase 6

1. Vérifier cohérence architecture Phase 3 vs structure Phase 4 :
   - Comparer structure attendue Phase 3 (onboarding, dashboard, settings, marketing) avec fichiers créés Phase 4
   - **Si page non-créée** : Noter comme manque critique, lister le fichier manquant avec chemin complet, décrire l'ajustement nécessaire (créer fichier `page.tsx` avec composant vide `return null`)
   - Vérifier que tous les segments dynamiques Phase 4 correspondent aux définitions Phase 3 (`[step]`, `[id]`, `[tab]`, `[slug]`)
   - **Si segment dynamique incohérent** : Noter comme violation critique, lister le segment problématique, décrire l'ajustement nécessaire
   - Vérifier profondeur d'imbrication (maximum 4 niveaux : Root → Group → Segment → Page)
   - **Si profondeur >4 niveaux détectée** : Noter comme violation très critique Phase 3, lister le chemin problématique, décrire l'ajustement nécessaire (restructurer pour respecter limite)
   - Vérifier séparation domaines (app vs marketing, aucune route croisée)
   - **Si route croisée détectée** : Noter comme violation très critique, lister la route problématique, décrire l'ajustement nécessaire (déplacer vers domaine correct)

2. Vérifier conventions Phase 2 :
   - Vérifier nommage dossiers (kebab-case pour segments statiques)
   - **Si nommage dossier incorrect** : Noter comme violation haute priorité, lister le dossier problématique, décrire l'ajustement nécessaire (renommer en kebab-case)
   - Vérifier nommage composants (PascalCase avec suffixe `Page` ou `Layout`)
   - **Si nommage composant incorrect** : Noter comme violation haute priorité, lister le composant problématique, décrire l'ajustement nécessaire (renommer selon convention)
   - Vérifier internal English rule (aucun français dans noms internes)
   - **Si français détecté** : Noter comme violation haute priorité, lister l'élément problématique, décrire l'ajustement nécessaire (traduire en anglais)
   - Vérifier segments dynamiques (camelCase pour paramètres : `[id]`, `[step]`, `[tab]`, `[slug]`)
   - **Si segment dynamique incorrect** : Noter comme violation haute priorité, lister le segment problématique, décrire l'ajustement nécessaire (corriger nommage)

3. Vérifier layouts Phase 1 :
   - Vérifier RootLayout (metadata minimales, HTML de base, aucun provider non autorisé)
   - Vérifier AppLayout (structure minimale `<main>{children}</main>`, aucune UI)
   - Vérifier MarketingLayout (structure minimale `<main>{children}</main>`, aucune UI)
   - Vérifier hiérarchie d'imbrication (RootLayout → Group Layout → Page)

4. Vérifier navigation Phase 5 :
   - Vérifier que toutes les pages sont Server Components par défaut (pas de `'use client'` sauf exception documentée)
   - **Si `'use client'` détecté** : Noter comme violation critique, lister le fichier problématique, décrire l'ajustement nécessaire (supprimer `'use client'`, logique, UI, retourner `null`)
   - Vérifier qu'aucun composant navigation n'est créé
   - **Si composant navigation créé** : Noter comme violation haute priorité, lister le composant problématique, décrire l'ajustement nécessaire (supprimer, Macro 7)
   - Vérifier cohérence parcours conceptuels (Onboarding → Dashboard → Settings, Landing → Pricing → Signup → Offer)
   - **Si parcours erroné** : Noter comme violation très critique, décrire le parcours problématique, décrire l'ajustement nécessaire (corriger structure routes)
   - Vérifier points d'entrée app vs marketing
   - **Si point d'entrée incorrect** : Noter comme violation très critique, lister le point problématique, décrire l'ajustement nécessaire

5. Identifier incohérences et ajustements structurels nécessaires :
   - **Prioriser les incohérences** : Critiques (pages manquantes, profondeur >4, routes croisées, parcours erronés) → Hautes (conventions nommage, Server Components, composants navigation) → Moyennes (autres ajustements)
   - Lister routes manquantes par rapport à Phase 3 (avec chemin complet et ajustement nécessaire)
   - Lister routes inutiles ou non définies Phase 3 (avec chemin complet et ajustement nécessaire)
   - Lister violations conventions Phase 2 (nommage, segments dynamiques) avec priorité et ajustement nécessaire
   - Lister violations Macro 1 (UI, logique, interactivité dans pages Phase 4) avec priorité et ajustement nécessaire
   - Documenter ajustements conceptuels nécessaires AVANT Macro 2 (format : fichier/élément → problème → priorité → ajustement nécessaire)

6. Préparation Macro 2 (vérifications uniquement, pas création) :
   - Identifier chemins de types nécessaires (où seront définis les types pour Macro 2)
   - Identifier chemins de mock data nécessaires (où seront définis les mocks pour Macro 2)
   - **Valider que les chemins types/mocks sont alignés et documentés** : Vérifier cohérence des chemins identifiés avec structure existante
   - **Confirmer que les dossiers correspondants existent ou planifiés** : Vérifier existence `lib/types/` et `lib/mocks/` (ou planification création Macro 2)
   - Vérifier que la structure Phase 4 permet l'intégration types/mocks Macro 2
   - Documenter dépendances structurelles Macro 1 → Macro 2

7. Produire documentation minimale `MACRO1-PHASE6-VALIDATION.md` :
   - Format markdown avec titre, date, version (traçabilité)
   - Liste de vérifications (cohérence Phase 3, conventions Phase 2, layouts Phase 1, navigation Phase 5)
   - Incohérences identifiées avec priorisation (critiques → hautes → moyennes) : routes manquantes (avec chemin complet et ajustement), routes inutiles (avec chemin complet et ajustement), violations (avec fichier/élément, problème, priorité, ajustement nécessaire)
   - Ajustements structurels nécessaires (conceptuels uniquement, pas d'implémentation) : format standardisé fichier/élément → problème → priorité → ajustement nécessaire
   - Confirmation ou corrections du squelette Macro 1
   - Préparation Macro 2 (chemins types/data avec validation existence/planification dossiers, dépendances structurelles)
  

📋 TODO-END Phase 6 ✅

- [x] Vérifier cohérence architecture Phase 3 vs structure Phase 4 (tous fichiers présents, segments dynamiques conformes, profondeur ≤4 niveaux, séparation domaines)
- [x] Vérifier conventions Phase 2 (nommage dossiers kebab-case, nommage composants PascalCase+suffixe, internal English, segments dynamiques camelCase)
- [x] Vérifier layouts Phase 1 (RootLayout metadata minimales, AppLayout/MarketingLayout structure minimale, hiérarchie d'imbrication)
- [x] Vérifier navigation Phase 5 (Server Components par défaut, aucun composant navigation, parcours conceptuels, points d'entrée)
- [x] Identifier incohérences et ajustements structurels (2 violations identifiées : nommage Home, Server Component onboarding)
- [x] Préparation Macro 2 (chemins types `lib/types/`, chemins mocks `lib/mocks/`, intégration structure Phase 4, dépendances structurelles)
- [x] Produire `MACRO1-PHASE6-VALIDATION.md` (format markdown avec titre/date/version, liste vérifications, incohérences, ajustements, préparation Macro 2)

**Résumé 3C — Phase 6** :

**Context** : Phase 6 de Macro 1 valide la structure complète créée en Phase 4, vérifie la cohérence avec les phases précédentes (Phase 1 à Phase 5), et prépare Macro 2.

**Command** :
- Cohérence Phase 3 vs Phase 4 vérifiée : tous fichiers présents, segments dynamiques conformes (`[step]`, `[id]`, `[tab]`, `[slug]`), profondeur 3-4 niveaux respectée partout (limite 4 respectée), séparation domaines app vs marketing respectée, aucune route manquante/inutile
- Conventions Phase 2 vérifiées : nommage dossiers kebab-case conforme, nommage composants PascalCase+suffixe conforme (1 violation haute priorité : `Home` devrait être `HomePage`), internal English respecté, segments dynamiques camelCase conformes
- Layouts Phase 1 vérifiés : RootLayout metadata minimales conforme, AppLayout/MarketingLayout structure minimale conforme, hiérarchie d'imbrication correcte
- Navigation Phase 5 vérifiée : Server Components par défaut (5 violations critiques dans 1 fichier : `onboarding/page.tsx` contient `'use client'`, imports React hooks, logique interactive, UI JSX), aucun composant navigation créé, parcours conceptuels cohérents, points d'entrée documentés
- Incohérences identifiées avec priorisation : 1 violation CRITIQUE (`onboarding/page.tsx` : Server Component + UI + logique), 1 violation HAUTE PRIORITÉ (`marketing/page.tsx` : nommage `Home`), aucune route manquante/inutile
- Ajustements structurels documentés avec format standardisé : correction CRITIQUE violation Server Component + UI + logique dans `onboarding/page.tsx` (supprimer `'use client'`, imports, logique, UI, retourner `null`), correction HAUTE PRIORITÉ nommage `Home` → `HomePage` dans `marketing/page.tsx`
- Préparation Macro 2 : chemins types identifiés (`lib/types/` existe et prêt), chemins mocks identifiés (`lib/mocks/` planifié pour Macro 2), validation existence/planification dossiers effectuée, intégration structure Phase 4 vérifiée, dépendances structurelles Macro 1 → Macro 2 documentées
- Documentation créée : `MACRO1-PHASE6-VALIDATION.md` (format markdown avec titre/date/version, liste vérifications complète, incohérences avec priorisation détaillées, ajustements conceptuels format standardisé, préparation Macro 2 avec validation dossiers)

**Check** :
- ✅ Travail 100% conceptuel (aucune création fichiers .tsx)
- ✅ Validation structurelle uniquement (cohérence routes/domains/layout/navigation vérifiée)
- ✅ Aucune UI, navigation, auth, logique métier ou data (vérifications uniquement)
- ✅ Vérification phases précédentes complète (Phase 1, 2, 3, 4, 5)
- ✅ Préparation Macro 2 complète (chemins types/data identifiés avec validation existence, dépendances documentées)
- ✅ Aucune duplication des Phases 1–5
- ✅ Aucune redéfinition des règles déjà établies
- ✅ Aucune incohérence avec documentation précédente
- ✅ Détection précise toutes anomalies (2 violations : 1 critique, 1 haute priorité)
- ⚠️ Structure Macro 1 nécessite 2 ajustements avant Macro 2 (1 critique urgent, 1 haute priorité)

---

- **Macro 2 — Contrats d'API & Mock Data**

  **Phase 1 — Types & Contrats**

  📋 TODO-START Macro 2 Phase 1

  1. Analyser la structure Flood v3.6 / Supabase pour identifier les entités principales :
     - Identifier les tables principales (users, salons, teams, services, etc.)
     - Identifier les relations entre entités
     - Identifier les types de données et contraintes
     - Documenter la structure attendue dans `MACRO2-PHASE1-TYPES.md`

  2. Définir les types TypeScript pour chaque domaine fonctionnel :
     - Types pour domaine Onboarding (salon, équipe, services, intégrations)
     - Types pour domaine Dashboard (métriques, activités, ressources)
     - Types pour domaine Settings (profil, préférences, équipe)
     - Types pour domaine Marketing (offres, pricing, signup)
     - Types pour authentification (user, session, auth state)
     - Créer les interfaces dans `lib/types/` avec organisation par domaine

  3. Définir les contrats d'API (interfaces de données) :
     - Contrats pour requêtes GET (lecture)
     - Contrats pour requêtes POST/PUT/DELETE (écriture)
     - Contrats pour réponses API
     - Contrats pour erreurs et états de chargement
     - Documenter dans `lib/types/api.ts` ou fichiers séparés par domaine

  4. Valider la cohérence des types :
     - Vérifier que tous les types sont compatibles avec la structure Phase 4 (segments dynamiques `[step]`, `[id]`, `[tab]`, `[slug]`)
     - Vérifier que les types correspondent aux domaines fonctionnels définis Macro 1
     - Vérifier la compilation TypeScript (`tsc --noEmit`)
     - Documenter les dépendances types → structure routes

  5. Produire documentation minimale `MACRO2-PHASE1-TYPES.md` :
     - Structure Flood v3.6 / Supabase analysée
     - Types définis par domaine fonctionnel
     - Contrats d'API définis
     - Validation cohérence effectuée
     - Prêt pour Phase 2 (Mock Data)

  📋 TODO-END Macro 2 Phase 1

  ⚠️ Validation humaine obligatoire avant exécution.

  **Règles strictes Macro 2 Phase 1** :
  - ✅ Types et contrats uniquement (aucune implémentation de logique métier)
  - ✅ Aucune création de mock data (Phase 2)
  - ✅ Aucune UI, navigation, auth, logique métier
  - ✅ Types alignés avec structure Macro 1 Phase 4
  - ✅ Compilation TypeScript validée
  - ❌ Pas de duplication des types existants
  - ❌ Pas d'anticipation Phase 2 (mocks)

  - **Objectif général**
    La **Macro 2** établit la couche contractuelle du front.
    Elle garantit que les types, schémas et données factices reflètent exactement la structure Flood v3.6.
    Cette macro :
    - dérive les types et interfaces à partir du schéma Supabase ;
    - génère les mock data pour chaque domaine fonctionnel ;
    - teste la compilation et la cohérence des types sans backend réel.
    🎯 **Rôle pour le front :**
    Elle permet de simuler intégralement le produit et d'avancer sur le design sans dépendre du backend.

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
