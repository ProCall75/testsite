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

Context
Phase 4 marque la fin du nettoyage du socle Alfred Reception. L’objectif était d’éliminer tous les résidus du design précédent, de réduire drastiquement la surface technique, et d’obtenir une base minimale, cohérente, traçable, conforme au Système Alfred avant d’attaquer Macro 1.
Le travail inclut : purge des composants, suppression Storybook, nettoyage dépendances, vérification node_modules, audit arborescence, confirmation des fichiers autorisés.

Command
Condense le résultat de la phase en points stricts et opérationnels :
	1.	Arborescence réduite à l’essentiel (pages, hooks, lib, configs). Tout le design legacy a été supprimé : components/, stories/, System/, registry/, .storybook/, scripts/.
	2.	Dépendances ramenées à 16 packages (3 deps / 13 devDeps). Nettoyage complet : ~45 packages supprimés, prune/dedupe validés, aucun résidu.
	3.	Code source nettoyé : suppression de 33 fichiers, arborescence ramenée à 37 fichiers, suppression totale des composants UI legacy.
	4.	Script de vérification systématique exécuté : aucun fichier illégitime, aucun dossier résiduel, aucune dépendance non listée.
	5.	Build, lint, type-check et tests opérationnels.
	6.	Point unique à retenir : il reste uniquement des références textuelles acceptables dans la documentation.
	7.	Statut : socle technique minimal atteint, base validée pour Macro 1 (Architecture & Structure Globale).

Check
Le nettoyage est réellement complet : aucune pollution design, aucune dépendance fantôme, aucune incohérence dans l’arborescence ou node_modules.
Rien de ce qui a été supprimé n’est prévu dans des blocs futurs : aucun autre bloc ne réintroduit Storybook, magicui, Radix, scripts internes, ou composants UI → donc pas de conflit temporel avec la chronologie Alfred.
La base fournie est compatible et exploitable directement par ChatGPT-1 pour la suite.

Synthèse exploitable
Phase 4 fournit un socle minimal strict, parfaitement aligné avec le Tampon et prêt pour l’exécution de Macro 1. Aucun reliquat design, aucune dette cachée, aucune dépendance illicite.
Le terrain est propre. On peut lancer l’architecture.
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

Voici le découpage optimal en blocs exécutables, strictement chronologiques, garantissant l’efficacité maximale sans perte de granularité, et permettant un contrôle clair après chaque segment.

Chaque bloc = un pipeline cohérent, autonome, sans dépendances croisées.
Chaque fin de bloc = check GPT-1 obligatoire.

⸻

BLOC 1 — Audit & État initial

Objectif : figer l’état du dépôt avant toute modification.

Étapes incluses :
	1.	Vérifier branche rebuild + working tree propre
	2.	Documenter l’arborescence actuelle → PHASE5-ETAT-INITIAL.md
	3.	Vérifier configuration TS (tsconfig.json) alias @/*
	4.	Vérifier configuration Next.js (next.config.js)
	5.	Auditer imports relatifs (./, ../)
	6.	Auditer imports absolus incorrects
	7.	Vérifier cohérence noms de fichiers
	8.	Vérifier cohérence noms de dossiers
	9.	Vérifier absence de components/ résiduel
	10.	Vérifier absence de styles/ / css/ résiduel

Fin de bloc → STOP pour validation GPT-1

⸻

BLOC 2 — Vérification Structure & Répartition Dossiers

Objectif : garantir que la structure est conforme aux conventions avant de toucher aux imports.

Étapes incluses :
7. Vérifier cohérence exports utils (lib/utils/*)
8. Vérifier cohérence exports lib/types
16. Vérifier que hooks/ est à la racine
17. Vérifier que lib/ contient uniquement types/ + utils/
18. Vérifier structure conforme Next.js App Router
21. Vérifier cohérence extensions .ts / .tsx
22. Vérifier fichiers de config présents et valides
23. Vérifier .gitignore
37. Vérifier tailwind.config.ts chemins
38. Vérifier postcss.config.js
39. Vérifier vitest.config.ts
40. Vérifier .eslintrc.json
41. Vérifier next.config.js obsolescences

Fin de bloc → STOP pour validation GPT-1

⸻

BLOC 3 — Standardisation Imports & Alias

Objectif : nettoyer et aligner tous les imports.

Étapes incluses :
9. Vérifier imports du hook use-outside-click
10. Vérifier imports layouts
11. Vérifier imports pages
12. Vérifier app/globals.css import
13. Standardiser imports de globals.css
28. Vérifier cohérence imports (relatif vs alias)
29. Choisir convention import globale
30. Appliquer la convention au projet
31. Vérifier cohérence exports nommés
32. Vérifier exports par défaut
33. Vérifier cohérence exports types
35. Vérifier export correcte du hook
36. Tester import du hook dans une page/layout
50. Vérifier cohérence chemins dans configs

Fin de bloc → STOP pour validation GPT-1

⸻

BLOC 4 — Corrections Types, Lint et Cohérence Technique

Objectif : stabiliser entièrement le socle technique.

Étapes incluses :
24. Exécuter npm run type-check
25. Corriger toutes erreurs TS
26. Exécuter npm run lint
27. Corriger toutes erreurs ESLint
51. Exécuter npm run lint -- --fix
52. Vérification manuelle imports post-fix
53. Exécuter npm run type-check final

Fin de bloc → STOP pour validation GPT-1

⸻

BLOC 5 — Build Complet & Vérifications Finales

Objectif : garantir que la base est totalement stable, prête pour Macro 1.

Étapes incluses :
42. Exécuter npm run build
43. Corriger erreurs build
44. Vérifier build .next/
45. Vérifier structure finale
46. Comparer arborescence finale avec PHASE4-BILAN-FINAL.md
47. Vérifier absence fichiers temporaires
48. Vérifier documentation à jour
49. Mettre à jour README si nécessaire
54. Ré-exécuter npm run build final
55. Vérifier démarrage npm run dev
57. Vérifier préparation pour Macro 1

Fin de bloc → STOP pour validation GPT-1

⸻

BLOC 6 — Documentation & Commit Final

Objectif : produire la trace officielle de Phase 5 et finaliser.

Étapes incluses :
56. Documenter conventions d’import adoptées
58. Créer PHASE5-RECONFIGURATION-FINALE.md
59. Vérifier working tree propre
60. Commit final feat(phase5): reconfiguration complète de la base de code

Fin de bloc → STOP pour validation GPT-1
→ Phase 5 terminée

⸻

Si tu veux : je prépare la commande Cursor pour exécuter bloc 1 immédiatement.

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
