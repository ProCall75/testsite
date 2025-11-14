# Macro 1 — Phase 2 : Conventions Routing & Nommage

## 📋 Contexte

Définition des conventions strictes pour le routing Next.js App Router, le nommage des fichiers, dossiers et composants, et l'utilisation des segments dynamiques.

---

## 🛣️ Routing (Next.js App Router)

### Route Groups

- Format : `(nom-groupe)` avec parenthèses
- Usage : Organisation logique sans affecter l'URL
- Exemples actuels : `(app)`, `(marketing)`
- Règle : Ne pas utiliser de route groups pour des segments d'URL réels

### Structure de base

```
app/
├── layout.tsx              # RootLayout (obligatoire)
├── (app)/                   # Route group "app"
│   ├── layout.tsx          # AppLayout
│   └── [route]/
│       └── page.tsx
└── (marketing)/             # Route group "marketing"
    ├── layout.tsx          # MarketingLayout
    └── [route]/
        └── page.tsx
```

---

## 📁 Nommage des dossiers de routes

### Segments statiques

- Format : **kebab-case** (minuscules avec tirets)
- Exemples : `onboarding`, `dashboard`, `voice-demo`
- Interdiction : camelCase, PascalCase, snake_case

### Segments dynamiques

- Format simple : `[param]` où `param` est en camelCase
- Format catch-all : `[...slug]` pour segments multiples
- Format optional catch-all : `[[...slug]]` pour segments optionnels
- Exemples :
  - `[id]` → `/users/123`
  - `[slug]` → `/posts/mon-article`
  - `[...slug]` → `/docs/a/b/c`
  - `[[...slug]]` → `/docs` ou `/docs/a/b`

### Règles

- Un seul segment dynamique par niveau
- Catch-all doit être le dernier segment
- Éviter la surcharge de segments dynamiques

---

## 📄 Nommage des fichiers de routes

### Fichiers spéciaux Next.js

| Fichier | Usage | Obligatoire |
|---------|-------|-------------|
| `page.tsx` | Page de route | ✅ Oui |
| `layout.tsx` | Layout partagé | Non |
| `loading.tsx` | État de chargement | Non |
| `error.tsx` | Gestion d'erreur | Non |
| `not-found.tsx` | Page 404 | Non |
| `route.ts` | API Route | Non |

### Convention de nommage

- Toujours en **minuscules** avec extension `.tsx` ou `.ts`
- Noms fixes imposés par Next.js (pas de variation)
- Un seul fichier de chaque type par dossier de route

---

## 🧩 Nommage des composants

### Composants de page

- Format : **PascalCase** avec suffixe `Page`
- Exemple : `OnboardingPage`, `DashboardPage`, `SignupPage`
- Export : `export default function ComponentName()`

### Composants de layout

- Format : **PascalCase** avec suffixe `Layout`
- Exemples : `RootLayout`, `AppLayout`, `MarketingLayout`
- Export : `export default function ComponentName()`

### Convention générale

- PascalCase pour tous les composants React
- Suffixe explicite (`Page`, `Layout`) pour éviter confusion
- Nom descriptif du domaine fonctionnel

---

## 🔀 Segments dynamiques

### Quand utiliser `[id]`

- Identifiants numériques ou UUID
- Exemple : `/users/[id]` → `/users/123`

### Quand utiliser `[slug]`

- Identifiants textuels lisibles (URL-friendly)
- Exemple : `/posts/[slug]` → `/posts/mon-article`

### Quand utiliser `[...slug]` (catch-all)

- Routes hiérarchiques de profondeur variable
- Exemple : `/docs/[...slug]` → `/docs/a/b/c`
- Capture tous les segments restants

### Quand utiliser `[[...slug]]` (optional catch-all)

- Routes avec segments optionnels
- Exemple : `/shop/[[...slug]]` → `/shop` ou `/shop/category/product`
- Permet route avec ou sans segments

### Règles strictes

- Un seul segment dynamique par niveau de route
- Catch-all doit être le dernier segment du chemin
- Éviter l'imbrication de segments dynamiques multiples

---

## 🎯 Fichiers spéciaux Next.js

### `loading.tsx`

- Usage : Afficher un état de chargement pendant le chargement de données
- Portée : S'applique au segment et ses enfants
- Placement : Dans le dossier de route concerné

### `error.tsx`

- Usage : Gérer les erreurs de rendu dans un segment
- Portée : S'applique au segment et ses enfants
- Placement : Dans le dossier de route concerné
- Obligatoire : `'use client'` (composant client)

### `not-found.tsx`

- Usage : Page 404 personnalisée pour un segment
- Portée : S'applique au segment spécifique
- Placement : Dans le dossier de route concerné

### `route.ts`

- Usage : Créer des API Routes (GET, POST, etc.)
- Portée : Endpoint API pour le segment
- Placement : Dans le dossier de route concerné
- Format : Export de fonctions nommées (`GET`, `POST`, etc.)

---

## ❌ Interdictions et limites

### Interdictions absolues

- ❌ Créer des routes en dehors de `app/`
- ❌ Utiliser des noms de fichiers autres que ceux imposés par Next.js
- ❌ Mélanger conventions de nommage (kebab-case + camelCase)
- ❌ Créer des segments dynamiques imbriqués multiples
- ❌ Utiliser route groups pour créer des segments d'URL

### Limites

- Un seul `page.tsx` par dossier de route
- Un seul `layout.tsx` par niveau (peut être partagé)
- Les route groups `(nom)` n'apparaissent pas dans l'URL
- Les segments dynamiques doivent être uniques par niveau

---

## ✅ Validation

### Checklist Phase 2

- [x] Conventions routing définies
- [x] Conventions nommage fichiers définies
- [x] Conventions nommage dossiers définies
- [x] Conventions nommage composants définies
- [x] Conventions segments dynamiques définies
- [x] Conventions fichiers spéciaux définies
- [x] Documentation créée (strict minimum)

### Conformité

✅ **Documentation uniquement** : Aucune création de fichier route/composant  
✅ **Conventions définies** : Prêt pour Phase 3 (architecture route groups)  
✅ **Strict minimum** : Documentation essentielle sans remplissage

