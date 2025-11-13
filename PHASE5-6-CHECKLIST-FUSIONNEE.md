# Phase 5+6 — Reconfiguration Finale & Documentation

**Objectif** : Réorganiser le projet, valider l'absence totale de Pages Router, stabiliser le socle technique, et produire la documentation officielle complète.

**Résultat attendu** :
- ✅ Projet 100% App Router, vérifié et prouvé
- ✅ Reconfiguration technique complète
- ✅ Documentation complète (PHASE5.md)
- ✅ Résumé 3C global Macro 0.5
- ✅ Working tree propre
- ✅ Commit final unique

---

## BLOC 1 — Audit & État Initial

**Objectif** : Figer l'état du dépôt avant toute modification.

### Tâches

1. Vérifier branche `rebuild` active
2. Vérifier working tree propre (`git status`)
3. Capturer commit hash de référence (`git log -1 --oneline`)
4. Documenter arborescence actuelle complète → `PHASE5-ETAT-INITIAL.md`
5. Vérifier configuration TS (`tsconfig.json`) : alias `@/*` pointe vers `./*`
6. Vérifier configuration Next.js (`next.config.js`) : aucune référence Pages Router
7. Auditer imports relatifs (`./`, `../`) dans tous les fichiers
8. Auditer imports absolus incorrects (sans alias `@/`)
9. Vérifier cohérence noms de fichiers (kebab-case)
10. Vérifier cohérence noms de dossiers (kebab-case pour routes)

**Fin de bloc → STOP pour validation**

---

## BLOC 2 — Vérification Anti-Legacy Pages Router

**Objectif** : Prouver l'absence totale de contamination Pages Router.

### Tâches

11. **Vérifier absence dossier `pages/`** : `find . -type d -name "pages" ! -path "./node_modules/*" ! -path "./.next/*" ! -path "./.git/*"`
    - ✅ Résultat attendu : aucun dossier `pages/` trouvé (hors `.next/`)

12. **Vérifier absence fichiers Pages Router** : `find . -type f \( -name "_app.tsx" -o -name "_document.tsx" -o -name "_error.tsx" -o -name "_app.js" -o -name "_document.js" -o -name "_error.js" \) ! -path "./node_modules/*" ! -path "./.next/*" ! -path "./.git/*"`
    - ✅ Résultat attendu : aucun fichier trouvé (hors `.next/`)

13. **Vérifier absence fonctions Pages Router** : `grep -r "getServerSideProps\|getStaticProps\|getStaticPaths" app/ hooks/ lib/ --include="*.ts" --include="*.tsx"`
    - ✅ Résultat attendu : aucune occurrence trouvée

14. **Vérifier absence imports Pages Router** : `grep -r "from.*pages/" app/ hooks/ lib/ --include="*.ts" --include="*.tsx"`
    - ✅ Résultat attendu : aucune occurrence trouvée

15. **Vérifier configurations sans référence `pages/`** :
    - `tailwind.config.ts` : aucun chemin `./pages/**/*` dans `content`
    - `tsconfig.json` : aucun chemin `pages/` dans `include` ou `exclude`
    - `next.config.js` : aucune configuration `pages/`
    - `.eslintrc.json` : aucune règle spécifique `pages/`

16. **Vérifier `.next/server/pages/` uniquement fallbacks** :
    - Lister fichiers dans `.next/server/pages/`
    - ✅ Vérifier : uniquement `_app.js`, `_document.js`, `_error.js`, `404.html`, `500.html` (fallbacks système)
    - ✅ Vérifier : aucun fichier de route réelle (`index.js`, `about.js`, etc.)

17. **Vérifier `.next/static/chunks/pages/` uniquement fallbacks** :
    - Lister fichiers dans `.next/static/chunks/pages/`
    - ✅ Vérifier : uniquement `_app-*.js`, `_error-*.js` (fallbacks système)
    - ✅ Vérifier : aucun chunk de route réelle

18. **Documenter vérification anti-legacy** : Créer section dans `PHASE5-ETAT-INITIAL.md`
    - Résultats de toutes les vérifications
    - Preuve que le repo est 100% App Router
    - Explication des fallbacks système dans `.next/`

**Fin de bloc → STOP pour validation**

---

## BLOC 3 — Vérification Structure & Répartition Dossiers

**Objectif** : Garantir que la structure est conforme aux conventions avant de toucher aux imports.

### Tâches

19. Vérifier cohérence exports utils (`lib/utils/*`) : structure correcte
20. Vérifier cohérence exports lib/types : structure correcte
21. Vérifier que `hooks/` est à la racine (pas dans `lib/` ou `app/`)
22. Vérifier que `lib/` contient uniquement `types/` + `utils/` (pas de résidus)
23. Vérifier structure conforme Next.js App Router : route groups `(app)` et `(marketing)` présents
24. Vérifier cohérence extensions `.ts` / `.tsx` : `.tsx` pour composants, `.ts` pour utils/configs
25. Vérifier fichiers de config présents et valides : `tsconfig.json`, `tailwind.config.ts`, `postcss.config.js`, `vitest.config.ts`, `.eslintrc.json`, `next.config.js`
26. Vérifier `.gitignore` : ignore `.next/`, `node_modules/`, `*.tsbuildinfo`, etc.

**Fin de bloc → STOP pour validation**

---

## BLOC 4 — Standardisation Imports & Alias

**Objectif** : Nettoyer et aligner tous les imports.

### Tâches

27. Vérifier imports du hook `use-outside-click` : uniquement imports externes (`react`)
28. Vérifier imports layouts : imports CSS relatifs corrects
29. Vérifier imports pages : aucun import relatif complexe (`../../`)
30. Vérifier `app/globals.css` import : relatif dans `app/layout.tsx`
31. Choisir convention import globale :
    - Ordre : directives → externes → alias `@/` → relatifs
    - Hooks : `@/hooks/`
    - Utils : `@/lib/utils`
    - Types : `@/lib/types`
32. Appliquer convention au projet : modifier fichiers nécessaires
33. Vérifier cohérence exports nommés : tous les hooks/util/types exportés correctement
34. Vérifier exports par défaut : layouts et pages utilisent `export default`
35. Tester import du hook dans une page/layout : valider alias `@/` fonctionnel
36. Vérifier cohérence chemins dans configs : `tsconfig.json`, `vitest.config.ts`, `tailwind.config.ts`

**Fin de bloc → STOP pour validation**

---

## BLOC 5 — Corrections Types, Lint et Cohérence Technique

**Objectif** : Stabiliser entièrement le socle technique.

### Tâches

37. Exécuter `npm run type-check`
38. Corriger toutes erreurs TypeScript trouvées
39. Exécuter `npm run lint`
40. Corriger toutes erreurs ESLint trouvées
41. Exécuter `npm run lint -- --fix`
42. Vérification manuelle imports post-fix : ordre correct
43. Exécuter `npm run type-check` final : aucune erreur

**Fin de bloc → STOP pour validation**

---

## BLOC 6 — Build Complet & Vérifications Finales

**Objectif** : Garantir que la base est totalement stable.

### Tâches

44. Exécuter `npm run build`
45. Corriger erreurs build si nécessaire
46. Vérifier build `.next/` : structure correcte, routes générées
47. Vérifier structure finale : conforme App Router
48. Vérifier absence fichiers temporaires : `*.tmp`, `*.log`, `.DS_Store`, `test-*`
49. Ré-exécuter `npm run build` final : confirmation stabilité

**Fin de bloc → STOP pour validation**

---

## BLOC 7 — Documentation Technique (Phase 5)

**Objectif** : Documenter la reconfiguration technique effectuée.

### Tâches

50. **Créer `PHASE5-RECONFIGURATION-TECHNIQUE.md`** avec :
    - Structure finale du projet (arborescence)
    - Routes Next.js (liste complète)
    - Corrections appliquées (tailwind.config.ts, package.json, typage hook)
    - Configuration TypeScript (alias `@/`)
    - Configuration Build (scripts, dépendances, résultats)
    - Vérifications techniques (type-check, lint, build)
    - Structure des chunks générés (App Router uniquement)
    - **Preuve anti-legacy Pages Router** (résultats vérifications BLOC 2)
    - État final du projet (structure, code, configuration)

**Note** : Ne pas inclure conventions d'import/nommage détaillées (réservées BLOC 8)

**Fin de bloc → STOP pour validation**

---

## BLOC 8 — Documentation Conventions & Résumé 3C (Phase 6)

**Objectif** : Produire la documentation officielle complète et le résumé 3C global.

### Tâches

51. **Documenter conventions d'import** :
    - Ordre strict (directives → externes → alias → relatifs)
    - Règles spécifiques (hooks, utils, types, CSS)
    - Exemples corrects/incorrects
    - Configuration alias (`tsconfig.json`, `vitest.config.ts`)

52. **Documenter conventions de nommage** :
    - Composants : PascalCase
    - Hooks : camelCase avec préfixe `use`
    - Fichiers : kebab-case
    - Dossiers : kebab-case pour routes, noms simples pour techniques

53. **Documenter conventions TypeScript** :
    - Types stricts (aucun `any` explicite)
    - Types React (`React.ReactNode` pour enfants)
    - Types de fonctions (callbacks explicites)

54. **Créer `PHASE5.md`** (documentation officielle complète) :
    - Résumé exécutif
    - Structure finale (arborescence claire)
    - Conventions d'import (section complète)
    - Conventions de nommage (section complète)
    - Conventions TypeScript (section complète)
    - Configuration Build
    - Vérifications techniques
    - Preuve anti-legacy Pages Router
    - État final du projet
    - Préparation pour Macro 1

55. **Créer `MACRO0.5-RESUME-3C.md`** (résumé 3C global) :
    - **Context** : Macro 0.5 — Audit & Nettoyage complétée
    - **Command** : Synthèse de toutes les phases (1-5)
    - **Check** : Validation finale (build, lint, type-check, anti-legacy)
    - **Synthèse exploitable** : État final, prêt pour Macro 1

**Fin de bloc → STOP pour validation**

---

## BLOC 9 — Finalisation & Commit

**Objectif** : Finaliser et commiter proprement.

### Tâches

56. Vérifier working tree propre : `git status --short`
57. Vérifier fichiers à commiter : uniquement fichiers Phase 5+6
58. Vérifier absence fichiers temporaires : aucun `*.tmp`, `*.log`, etc.
59. Commit final : `feat(phase5-6): reconfiguration complète et documentation`
    - Message : "Reconfiguration technique complète, validation anti-legacy Pages Router, documentation officielle et résumé 3C Macro 0.5"
60. Vérifier commit créé : `git log -1 --oneline`

**Fin de bloc → Phase 5+6 terminée**

---

## Checklist de Validation Finale

Avant de considérer Phase 5+6 terminée, vérifier :

- ✅ Projet 100% App Router (aucun fichier Pages Router dans repo)
- ✅ Build passe sans erreur (12 routes générées)
- ✅ Lint passe sans erreur
- ✅ Type-check passe sans erreur
- ✅ Documentation complète (`PHASE5.md`, `MACRO0.5-RESUME-3C.md`)
- ✅ Preuve anti-legacy documentée
- ✅ Working tree propre
- ✅ Commit final créé

---

**Document généré le** : 2025-11-13  
**Statut** : ✅ **CHECKLIST PRÊTE** — Prêt pour exécution

