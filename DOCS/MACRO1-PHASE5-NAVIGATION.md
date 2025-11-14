# Macro 1 — Phase 5 : Navigation Globale

## 📋 Contexte

Phase 5 de Macro 1 : définition des règles de navigation globale et de redirection structurelle, sans implémentation ni UI.

---

## 🔄 Règles Server vs Client Components

### Navigation par défaut

**Server Components** : Par défaut pour toute navigation
- Toutes les pages sont Server Components par défaut
- Aucune directive `'use client'` nécessaire
- Performance optimale, pas de JavaScript côté client

### Client Components

**Utilisation uniquement si interactivité requise** (non implémentée en Macro 1)
- Client Components uniquement si interactivité nécessaire
- Macro 1 n'implémente pas d'interactivité
- Aucun composant de navigation à créer en Macro 1

**Règle Macro 1** : Aucun composant de navigation créé

---

## 🔀 Règles de Redirection Conceptuelle

### Redirections internes

**Autorisées uniquement comme concept** :
- Redirections définies conceptuellement, pas implémentées
- Pas d'auth en Macro 1 (Macro 3)
- Pas de logique de redirection en Macro 1

### Pas de configuration Next.js

**Interdictions Macro 1** :
- ❌ Pas de middleware
- ❌ Pas de rewrites (sauf SEO existants dans `next.config.js`)
- ❌ Pas de redirects Next.js à ce stade

### Points d'entrée

**Documentation des points d'entrée** :
- **App** : Routes authentifiées (`/onboarding`, `/dashboard`, `/settings`)
- **Marketing** : Routes publiques (`/`, `/pricing`, `/signup`, `/offer`)

---

## 🧭 Navigation Globale : App vs Marketing

### Navigation Interne (App)

**Structure conceptuelle** :
```
Onboarding → Dashboard → Settings
```

**Règles Macro 1** :
- Structure conceptuelle seulement
- Navigation programmatique non autorisée :
  - ❌ Pas de `useRouter`
  - ❌ Pas de `<Link>`
  - ❌ Pas d'UI navigation

**Parcours conceptuel** :
- `/onboarding` → `/dashboard` → `/settings`
- Défini structurellement, pas implémenté

### Navigation Marketing

**Structure conceptuelle** :
```
Landing → Pricing → Signup → Offer
```

**Règles Macro 1** :
- Structure conceptuelle seulement
- Aucune UI, aucun composant ou lien

**Parcours conceptuel** :
- `/` → `/pricing` → `/signup` → `/offer`
- Défini structurellement, pas implémenté

---

## ❌ Interdictions

### Navigation

- ❌ **Composants navigation** : Macro 7 (Design System)
- ❌ **Navigation programmatique** : Pas de `useRouter`, pas de `<Link>`
- ❌ **UI navigation** : Macro 7 (Design System)

### Redirections

- ❌ **Redirections auth** : Macro 3 (Authentification)
- ❌ **Middleware** : Pas en Macro 1
- ❌ **Redirects Next.js** : Pas en Macro 1

### Logique

- ❌ **Logique métier** : Macros futures
- ❌ **Interactivité** : Non implémentée en Macro 1
- ❌ **Protection routes** : Macro 3 (Authentification)

---

## ✅ Validation Phase 5

### Checklist

- [x] Règles Server vs Client définies
- [x] Règles redirection conceptuelle définies
- [x] Navigation globale app vs marketing définie (concept)
- [x] Interdictions documentées
- [x] Documentation créée (`MACRO1-PHASE5-NAVIGATION.md`)

### Conformité

✅ **Documentation minimale uniquement** : Aucun composant créé  
✅ **Pas de navigation réelle** : Structure conceptuelle seulement  
✅ **Pas d'auth** : Macro 3  
✅ **Pas d'UI** : Macro 7  
✅ **Pas de répétition** : Phases 1–4 non répétées  
✅ **Prêt pour Phase 6** : Navigation globale définie conceptuellement


