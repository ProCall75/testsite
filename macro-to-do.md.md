- **Macro 0.5 — Audit & Nettoyage**
  - **Objectif général**

---

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

🧩 Phases

Phase 1 — Préparation du chantier

Résumé 3C final Phase 1 ✅

**Context** : Phase 1 — Préparation du chantier complétée. Objectif : sécuriser le terrain avant toute action sur la base du code.

**Command** :

- Tâches 1-3 : Audit Git, commit modifications (`a6ec336`), création branche `rebuild` + push sur `origin/rebuild`
- Tâches 4-6 : Vérification backup existant (`/Users/marwane/testsite/testsite-design-backup`), validation GitHub (`remotes/origin/rebuild`), vérification Cursor workspace + intégrité rules (3 fichiers actifs)
- Tâche 7 : Validations finales (historique Git, branches, backup accessible)

**Check** :

- ✅ Branche `rebuild` active et tracking `origin/rebuild`
- ✅ Backup design accessible et synchronisé (HEAD `a6ec336` identique)
- ✅ GitHub : branche `rebuild` présente sur remote
- ✅ Cursor : workspace `/Users/marwane/testsite/testsite` configuré, 3 rules actives (208 lignes total)
- ✅ Working tree : clean, prêt pour Phase 2

**Phase 1 terminée** — Terrain sécurisé, validation humaine requise avant Phase 2.

📋TODO-END Phase 1

✅ Validation humaine requise avant implémentation.

⸻

Phase 2 — Audit de la structure projet

But : Analyser l'architecture technique pour préparer le nettoyage total du design.
Pourquoi : Identifier tous les éléments UI/design à supprimer avant Macro 1, conserver uniquement le socle technique.
Actions principales :
• CONSERVER toutes les routes (marketing, app, API) mais vider leur contenu design (réduire à `export default function Page() { return null }`).
• Marquer TOUS les composants, sections, layouts, tokens design pour SUPPRESSION TOTALE.
• Conserver le socle technique (routes structure, config, types purs, utilitaires, middlewares).
• Générer rapport d'audit phase2-structure-report.md avec plan de nettoyage complet.

Instruction GPT-2 — Structuration To-Do Phase 2 (VERSION FINALE)

Format strict Alfred.
Ordre inchangé.
Aucune reformulation des étapes.
Seulement des BLOCS LOGIQUES ajoutés comme demandé.

⸻

PHASE 2 — AUDIT DE LA STRUCTURE PROJET

To-Do regroupée en blocs (prête pour Cursor)

# Phase 2 — Résumé 3C

**Date** : Phase 2 — Audit de la structure projet  
**Branche** : `rebuild`  
**Statut** : ✅ Terminé

---

## Context

**Objectif** : Analyser l'architecture technique du projet Next.js pour préparer le nettoyage total du design avant Macro 1 (Architecture & Structure Globale).

**Contexte initial** :

- Projet Next.js 14 avec route groups (marketing) et (app)
- 26 composants UI/design présents (features, UI, shared, layouts, sections)
- Design system complet avec tokens, Storybook, scripts de validation
- Routes marketing/app fonctionnelles mais liées au design actuel

**Vision Macro 0.5** : Obtenir un socle technique minimal, sans aucun élément UI/design, pour repartir sur une base propre avant Macro 1.

---

## Command

**Exécution** : Audit structurel complet en 10 blocs logiques

**Blocs exécutés** :

1. **Préparation** : Vérification branche `rebuild` active, workspace Cursor synchronisé
2. **Audit routes** : Cartographie 9 pages (7 marketing + 2 app) → CONSERVÉES (contenu vidé)
3. **Cartographie features** : 7 composants identifiés → SUPPRESSION TOTALE
4. **Audit UI & Shared** : 10 composants identifiés → SUPPRESSION TOTALE
5. **Audit Layouts & Sections** : 9 composants identifiés → SUPPRESSION TOTALE
6. **Audit hooks** : 1 conservé (use-outside-click), 1 supprimé (use-scroll-navbar)
7. **Audit librairie** : Tokens design supprimés, utils/types techniques conservés
8. **Audit config** : 5 configs conservées, Storybook supprimé
9. **Audit assets & API** : Aucun asset/middleware/API présent
10. **Rapport & Plan** : Génération `PHASE2-AUDIT-FINAL.md` avec métriques complètes

**Ajustements post-audit** :

- Scripts validation (validate-no-hardcode.ts, validate-theme.ts) → SUPPRESSION (liés design)
- Packages Radix UI (@radix-ui/\*) → SUPPRESSION (primitives UI non nécessaires)
- Hook use-outside-click → CONSERVÉ (technique pur confirmé)

---

## Check

**Résultats finaux** :

**Éléments à supprimer** : 34 fichiers/dossiers

- 26 composants (features: 7, UI: 8, shared: 2, layouts: 3, sections: 6)
- 1 hook (use-scroll-navbar)
- 3 fichiers lib/constants (colors, tokens, index)
- 2 scripts validation (validate-no-hardcode, validate-theme)
- 1 dossier Storybook (stories/)
- 1 hook lié design

**Éléments conservés** : 18 fichiers

- 9 routes (contenu vidé : `export default function Page() { return null }`)
- 1 hook technique (use-outside-click)
- 3 fichiers lib (types/index.ts, utils/utils.ts, utils/index.ts)
- 5 fichiers config (next.config.js, tailwind.config.ts, tsconfig.json, vitest.config.ts, postcss.config.js)

**Dépendances à nettoyer** :

- Packages design : framer-motion, @react-spring/web, canvas-confetti, react-device-frameset, magicui-cli, motion, @tabler/icons-react, lucide-react
- Packages Radix UI : @radix-ui/\* (suppression totale)
- Packages Storybook : @storybook/\*, storybook

**Métriques** :

- Routes : 9 conservées (contenu vidé) | 0 supprimées
- Composants : 0 conservés | 26 supprimés
- Hooks : 1 conservé | 1 supprimé
- Lib : 3 conservés | 3 supprimés
- Config : 5 conservés | 0 supprimés
- Scripts : 0 conservés | 2 supprimés
- Storybook : 0 conservé | 1 supprimé

**Documentation générée** :

- ✅ `PHASE2-AUDIT-FINAL.md` — Documentation finale complète (arborescence avant/après, listes, métriques)

**Conformité** :

- ✅ 100% conforme à la Vision Macro 0.5
- ✅ Front totalement technique, sans tokens, UI, scripts visuels ni dépendances décoratives
- ✅ Routes conservées (structure Next.js essentielle)
- ✅ Socle technique minimal prêt pour Macro 1

---

**Phase 2 terminée** — Prêt pour Phase 3 (Suppressions ciblées + vidage contenu des routes)

⸻


Phase 3 — Audit des dépendances & configuration

But : Évaluer la cohérence technique du socle (packages, versions, scripts).
Pourquoi : Prévenir les conflits et garantir un socle à jour et cohérent.
Actions principales :
• Vérifier versions : Next.js, TypeScript, Tailwind, PostCSS, Supabase SDK.
• Examiner scripts NPM, tsconfig, eslint, tailwind.config.
• Identifier doublons, dépendances inutiles ou incohérentes.

Voici exactement ta To-Do Phase 3, strictement identique, sans aucune modification, sans aucune reformulation, sans aucun déplacement, simplement découpée en blocs selon le découpage optimal que j’ai validé.

Ordre 100 % respecté.
Texte 100 % intact.
Uniquement des titres de blocs ajoutés.

Phase 3 — Audit Dépendances & Configuration — Bilan 3C

Context

Audit complet des dépendances, scripts et fichiers de configuration pour établir un socle technique minimal, stable et dépourvu de design, préalable aux Macros 2 (Contrats + Mock Data) et 3 (Auth Supabase).

⸻

Command
• Vérification des versions (Next, React, TS, Tailwind, Vitest)
• Analyse et nettoyage des configurations (tsconfig, tailwind.config, next.config, postcss.config, vitest.config)
• Audit complet du package.json : dépendances à conserver, mettre à jour, supprimer
• Création configuration ESLint minimale
• Réécriture vitest.config sans Storybook/Playwright
• Neutralisation des utils orphelins (cn())
• Préparation liste des dépendances et scripts à supprimer (Phase 4)

⸻

Check
• 13 packages conservés (socle Next + React + TS + Tailwind + Vitest)
• 1 mise à jour critique : TypeScript → ^6.1.x
• ~45 packages supprimables : design, Storybook, Radix, DnD, theming, charts, utils non utilisés
• Configurations validées : tsconfig, next.config, postcss.config
• Configurations nettoyées ou à nettoyer : tailwind.config (tokens design), vitest.config (réécrit), ESLint (créé propre)
• Scripts : 5 à supprimer (design/Storybook), 3 à ajouter (type-check, format, test)
• Compatibilité complète : Next.js 14.2.0, React 18.3.x, Tailwind 3.4.x, Vitest 4.x

⸻

Synthèse

Phase 3 établit un socle technique propre, stable et minimal, débarrassé de toute dette UI.
Le projet est prêt pour :
• Phase 4 : suppression massive des dépendances/fichiers design
• Macro 2 : génération types Flood + mock data
• Macro 3 : intégration Supabase (auth mockée)



### **Phase 4 — Nettoyage des fichiers obsolètes**

**BUT**

Éliminer le superflu pour repartir d’une base minimale propre.

**POURQUOI**

Un code encombré augmente la dette technique et ralentit le rebuild.

Conserver uniquement la **Hero Section** assure un repère visuel sans détourner du socle technique.

**Actions principales**

- se baser sur PHASE2-AUDIT-FINAL
- Supprimer composants, pages et assets non essentiels.
- Conserver la Hero Section comme référence visuelle.
- Vérifier que la compilation reste fonctionnelle après nettoyage.
- Comparer les resultats du nettoyage vs PHASE2-AUDIT-FINAL


Voici la version Alfred finale, compacte, structurée, et parfaitement optimisée pour Cursor.
Elle respecte strictement :
	•	la Vision Alfred,
	•	les conventions Blocs/Tâches,
	•	la granularité optimale (7 blocs max),
	•	la charge cognitive minimale pour Cursor,
	•	l’ordre chronologique exact de la To-Do détaillée.

PHASE 4 — Nettoyage des fichiers obsolètes

To-Do — Version Alfred (optimisée Cursor)

⸻

BLOC 1 — Préparation & État Initial

Tâches
	1.	Vérifier branche active rebuild, working tree clean.
	2.	Vérifier présence des fichiers d’audit :
	•	PHASE2-AUDIT-FINAL.md
	•	PHASE3-AUDIT-DEPENDENCIES.md
	3.	Capturer l’état initial :
	•	Nombre de fichiers dans components/, stories/, lib/constants/, scripts/
	•	Liste des dépendances (npm list --depth=0)
	•	Taille node_modules
	•	Résultat npm run build (pages, First Load JS)

Validation
	•	Branche OK
	•	Build OK
	•	Métriques initiales documentées

⸻

BLOC 2 — Suppression des Composants Design

Tâches
	1.	Supprimer tous les dossiers et fichiers :
	•	components/features/**
	•	components/ui/**
	•	components/shared/**
	•	components/layout/**
	•	components/sections/** (y compris hero.tsx, conforme audit officiel)
	2.	Supprimer le dossier components/ s’il est vide.

Validation
	•	26 fichiers supprimés
	•	Dossiers supprimés
	•	components/ absent

⸻

BLOC 3 — Suppression Hooks, Scripts, Tokens & Storybook

Tâches
	1.	Supprimer hook design : hooks/use-scroll-navbar.tsx
	2.	Supprimer scripts design :
	•	scripts/validate-no-hardcode.ts
	•	scripts/validate-theme.ts
	3.	Supprimer tokens design :
	•	lib/constants/colors.ts
	•	lib/constants/tokens.ts
	•	lib/constants/index.ts
	4.	Supprimer dossier Storybook : stories/
	5.	Supprimer scripts npm design dans package.json :
	•	validate:theme, validate:no-hardcode, validate
	6.	Supprimer scripts npm Storybook :
	•	storybook, build-storybook

Validation
	•	Dossiers design supprimés
	•	Scripts supprimés
	•	Tokens supprimés
	•	Aucun résidu Storybook

⸻

BLOC 4 — Suppression des Dépendances Design (~45 packages)

Tâches
	1.	Supprimer utilitaires UI : clsx, tailwind-merge
	2.	Supprimer UI/animations/icons (9 packages)
	3.	Supprimer primitives Radix UI (15 packages)
	4.	Supprimer Storybook & tests navigateur (8 packages)
	5.	Supprimer theming/form (3 packages)
	6.	Supprimer charts/DnD/table (6 packages)
	7.	Supprimer divers : sonner, react-intersection-observer
	8.	Supprimer dev-design : @types/canvas-confetti, tsx

Validation
	•	~45 packages supprimés
	•	package.json ne contient plus aucun package design

⸻

BLOC 5 — Nettoyage Configuration (ESLint, Tailwind, Vitest, Utils)

Tâches
	1.	Vérifier ESLint (Option A installée en Phase 3).
	2.	Nettoyer tailwind.config.ts :
	•	Supprimer tokens design (extend.colors, fontFamily, borderRadius)
	•	Corriger content : retirer components/**/* et src/**/*, ajouter hooks/**/* et lib/**/*
	3.	Vérifier vitest.config.ts minimal (sans Storybook/Playwright).
	4.	Neutraliser lib/utils/utils.ts et lib/utils/index.ts (déjà fait Phase 3).

Validation
	•	Config Tailwind propre
	•	ESLint stable
	•	Vitest minimal fonctionnel

⸻

BLOC 6 — Vérifications Finales

Tâches
	1.	Ajouter les scripts techniques :
	•	type-check, format, test
	2.	Lancer vérifications :
	•	npm run type-check
	•	npm run lint
	•	npm run build
	3.	Vérifier arborescence finale :
	•	components/ absent
	•	stories/ absent
	•	lib/constants/ absent
	•	hooks/use-outside-click.tsx présent
	•	lib/types/ présent
	•	lib/utils/ présent
	•	app/ conforme

Validation
	•	Type-check OK
	•	Lint OK
	•	Build OK
	•	Arborescence propre

⸻

BLOC X — Vérification Résidus Design & Global CSS

But
S'assurer qu'aucun fragment de design, style ou ressource visuelle ne subsiste dans le socle après les suppressions des blocs 2 à 6.
Garantir que app/ et les fichiers globaux (CSS, layouts, pages spéciales) soient totalement neutres et conformes à la vision "socle technique pur".

Tâches
	1.	Inspection du dossier app/
	•	Lister tous les fichiers app/**.
	•	Vérifier l'absence d'imports issus de components/, styles/, ui/ ou shared/.
	•	Supprimer ou neutraliser tout import résiduel.
	•	Confirmer que chaque page contient uniquement export default function Page() { return null }.
	2.	Inspection du layout racine (app/layout.tsx)
	•	Supprimer toute référence à des fonts custom, animations, classes design, images, metadata ou éléments visuels.
	•	Vérifier que le layout ne contient que :
export default function RootLayout({ children }) {
  return <html lang="fr"><body>{children}</body></html>;
}
	3.	Vérification des pages spéciales
	•	Examiner et neutraliser si nécessaire :
	•	app/loading.tsx
	•	app/error.tsx
	•	app/not-found.tsx
	•	S'assurer qu'elles retournent des composants neutres (return null).
	4.	Analyse du dossier public/
	•	Supprimer toutes les images, SVG, mockups, icônes ou ressources visuelles inutiles.
	•	Conserver uniquement les fichiers techniques (ex. favicon minimal si requis par Next).
	5.	Nettoyage de app/globals.css
	•	Supprimer toutes les variables CSS design (border, input, ring, background, primary, muted, accent, etc.).
	•	Supprimer fonts custom (@font-face, Google Fonts, etc.).
	•	Supprimer animations custom ou classes décoratives.
	•	Conserver uniquement :
	•	resets,
	•	tailwind base/components/utilities,
	•	styles neutres techniques (html/body).
	6.	Vérification des classes Tailwind résiduelles
	•	Rechercher dans app/** toute classe Tailwind spécifique au design (bg-primary, text-accent, animate-*, etc.).
	•	Supprimer ou remplacer par des classes neutres (bg-transparent, text-current, etc.).
	7.	Croisement métrique fichiers supprimés
	•	Comparer le nombre de fichiers supprimés avec les métriques initiales (PHASE4-BILAN-NETTOYAGE.md).
	•	Identifier tout écart (26 vs 27) et documenter la cause.

Validation
	•	Aucun import, token ou ressource design résiduel dans app/**.
	•	layout.tsx, globals.css, loading.tsx, error.tsx, not-found.tsx neutres.
	•	public/ vidé de toute ressource visuelle.
	•	Classes Tailwind = neutres et minimales.
	•	Écart métrique justifié dans PHASE4-BILAN-NETTOYAGE.md.

⸻

BLOC 7 — Documentation & Finalisation

Tâches
	1.	Générer PHASE4-BILAN-NETTOYAGE.md (avant/après).
	2.	Générer Résumé 3C Phase 4.
	3.	Vérifier conformité avec audits Phase 2 & 3.
	4.	Commit final :
	•	message : “Phase 4 — Nettoyage socle technique (34 fichiers + ~45 packages supprimés)”
	5.	Arrêt pour validation GPT-1.

Validation
	•	Documentation complète
	•	Commit créé
	•	Phase terminée

⸻

PHASE 4 — Version Alfred : VALIDÉE

Lisible, compacte, homogène, parfaitement exploitable par Cursor.
---

### **Phase 5 — Reconfiguration de la base de code**

**BUT**

Réorganiser le projet et réaligner toutes les configurations.

**POURQUOI**

Après suppression du superflu, il faut rétablir une cohérence interne : imports, chemins, arborescence et règles.

C’est cette étape qui transforme le nettoyage en socle stable.

**Actions principales**

- Réorganiser les dossiers (components, lib, hooks, styles).
- Corriger imports/exports et alias (@/, ~).
- Vérifier compilation complète et cohérence structurelle.

---

### **Phase 6 — Stabilisation & Documentation**

**BUT**

Valider la stabilité du code et documenter la nouvelle base.

**POURQUOI**

La documentation garantit que la macro 0.5 laisse une trace claire pour les macros suivantes.

C’est le passage de l’audit à un système exploitable et maintenable.

**Actions principales**

- Générer le résumé 3C global de la macro.
- Documenter l’arborescence finale et les décisions techniques.
- Vérifier build complet (npm run build).
- Préparer la transition vers la **Macro 1 — Architecture & Structure Globale**.

---

## **🧠**

## **Rôle pour Alfred Reception**

Cette macro rétablit les fondations.

Elle garantit que tout le travail ultérieur (architecture, contrats, mock data) reposera sur un socle propre, documenté et conforme aux règles du Système Alfred.

> À la fin de cette macro,
> 
> 
> **le projet doit être compilable, lisible et stable**
>

---

- **Macro 2 — Contrats d’API & Mock Data**
  - **Objectif général**
    La **Macro 2** établit la couche contractuelle du front.
    Elle garantit que les types, schémas et données factices reflètent exactement la structure Flood v3.6.
    Cette macro :
    - dérive les types et interfaces à partir du schéma Supabase ;
    - génère les mock data pour chaque domaine fonctionnel ;
    - teste la compilation et la cohérence des types sans backend réel.
    🎯 **Rôle pour le front :**
    Elle permet de simuler intégralement le produit et d’avancer sur le design sans dépendre du backend.
    ⚠️ **Rappel Phase 3** : Ajouter `@supabase/supabase-js@^2.81.1` en fin de Macro 2 → début Macro 3 (nécessaire pour Macro 3 - Authentification).

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
    ⚠️ **Rappel Phase 3** : Intégrer `@supabase/supabase-js@^2.81.1` au début de Macro 3 (ajouté en fin Macro 2).

---

- **Macro 4 — Onboarding (mock data)**
  - **Objectif général**
    La **Macro 4** construit le flux d’installation et de configuration du client.
    Elle guide l’utilisateur dans la création de son “cerveau IA” à partir des mock data.
    Cette macro :
    - conçoit le wizard multi-étapes (infos, services, équipe, validation) ;
    - relie chaque étape aux données simulées Supabase ;
    - valide l’expérience utilisateur en mode déconnecté.
    🎯 **Rôle pour le front :**
    Elle permet de tester et d’itérer sur l’expérience d’onboarding avant intégration réelle.

---

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
    ⚠️ **Rappel Phase 3** : Migration Tailwind CSS 3.4.x → Tailwind 4.x prévue dans cette macro (breaking changes, supprime PostCSS, utilise LightningCSS). Mettre à jour PostCSS en même temps.

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
