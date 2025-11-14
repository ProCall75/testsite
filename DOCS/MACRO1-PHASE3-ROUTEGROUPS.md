# Macro 1 — Phase 3 : Architecture Route Groups & Hiérarchie

## 📋 Contexte

Phase 3 de Macro 1 : définition de l'architecture complète des route groups, de la hiérarchie Layout → Group → Segments, et des boundaries entre domaines, sans création de fichiers.

---

## 🏗️ Architecture des Route Groups

### Rôle structurel

Les route groups `(app)` et `(marketing)` organisent les domaines fonctionnels sans affecter les URLs. Ils permettent :
- Séparation logique des domaines
- Layouts dédiés par domaine
- Organisation claire du code

### Route Group `(app)`

**Rôle** : Domaine applicatif authentifié (onboarding, dashboard, settings)

**Périmètre** :
- Routes nécessitant authentification (futur Macro 3)
- Parcours utilisateur interne
- Gestion de données utilisateur

**Layout** : `AppLayout` (structure minimale `<main>{children}</main>`)

**Routes actuelles** :
- `/onboarding` → `(app)/onboarding/page.tsx`
- `/dashboard` → `(app)/dashboard/page.tsx`

**Routes futures** :
- `/settings` → `(app)/settings/page.tsx`

### Route Group `(marketing)`

**Rôle** : Domaine marketing public (landing, pricing, signup)

**Périmètre** :
- Routes publiques accessibles sans authentification
- Pages marketing et conversion
- SEO et référencement

**Layout** : `MarketingLayout` (structure minimale `<main>{children}</main>`)

**Routes actuelles** :
- `/` → `(marketing)/page.tsx`
- `/signup` → `(marketing)/signup/page.tsx`
- `/pricing` → `(marketing)/pricing/page.tsx`
- `/offer` → `(marketing)/offer/page.tsx`
- `/payment` → `(marketing)/payment/page.tsx`
- `/voice-demo` → `(marketing)/voice-demo/page.tsx`
- `/dashboard-preview` → `(marketing)/dashboard-preview/page.tsx`

### Boundaries entre domaines

**Séparation stricte** :
- `(app)` : domaine privé, authentification requise (futur)
- `(marketing)` : domaine public, accessible sans authentification
- Aucun mélange : une route appartient à un seul domaine
- Layouts distincts : chaque groupe a son propre layout

### Convention de nommage

**Format** : `(nom-groupe)` avec parenthèses obligatoires

**Règles** :
- Internal English uniquement (pas de français)
- kebab-case pour le nom du groupe
- Exemples valides : `(app)`, `(marketing)`, `(admin)`, `(api)`
- Exemples invalides : `(app-privée)`, `(marketing-fr)`

---

## 🔗 Hiérarchie Layout → Group → Segments

### Niveaux d'imbrication autorisés

```
RootLayout (niveau 0)
  └── Route Group Layout (niveau 1)
      └── Segment (niveau 2)
          └── Sous-segment (niveau 3)
              └── Page (niveau 4)
```

**Limite de profondeur recommandée** : 4 niveaux maximum (Root → Group → Segment → Page)

### Règles de propagation des layouts

1. **RootLayout** : S'applique à toutes les routes (niveau 0)
2. **Group Layout** : S'applique uniquement aux routes du groupe (niveau 1)
3. **Segment Layout** : Optionnel, s'applique au segment et enfants (niveau 2+)
4. **Page** : Terminal, pas de layout enfant

### Ordre de résolution Next.js

1. RootLayout (`app/layout.tsx`)
2. Group Layout (`app/(app)/layout.tsx` ou `app/(marketing)/layout.tsx`)
3. Segment Layout (optionnel, `app/(app)/dashboard/layout.tsx`)
4. Page (`app/(app)/dashboard/page.tsx`)

### Limites de profondeur

**Recommandé** :
- Maximum 4 niveaux : Root → Group → Segment → Page
- Éviter l'imbrication excessive de segments

**Exemple valide** :
```
app/
├── layout.tsx                    # Niveau 0
└── (app)/
    ├── layout.tsx                # Niveau 1
    └── dashboard/
        └── page.tsx              # Niveau 2 (total: 3 niveaux)
```

**Exemple à éviter** :
```
app/
└── (app)/
    └── dashboard/
        └── [id]/
            └── settings/
                └── [tab]/
                    └── page.tsx  # Trop profond (5 niveaux)
```

---

## 🎯 Séparation des Domaines

### Domaine `(app)`

**Peut contenir** :
- Routes authentifiées (onboarding, dashboard, settings)
- Segments dynamiques pour ressources utilisateur (`[id]`, `[slug]`)
- Sous-routes pour navigation interne

**Ne peut pas contenir** :
- Routes publiques marketing
- Routes API (utiliser `(api)` si nécessaire)
- Mélange avec domaines marketing

**Exemples autorisés** :
- `(app)/onboarding/`
- `(app)/dashboard/[id]/`
- `(app)/settings/[tab]/`

### Domaine `(marketing)`

**Peut contenir** :
- Routes publiques (landing, pricing, signup)
- Pages marketing et conversion
- Routes SEO-friendly

**Ne peut pas contenir** :
- Routes authentifiées
- Routes nécessitant protection
- Mélange avec domaines app

**Exemples autorisés** :
- `(marketing)/pricing/`
- `(marketing)/signup/`
- `(marketing)/offer/[slug]/`

### Domaines futurs

**Règles pour ajouter de nouveaux route groups** :

1. **Nommage** : `(nom-domaine)` en internal English, kebab-case
2. **Layout obligatoire** : Créer `layout.tsx` dans le groupe
3. **Boundaries claires** : Définir périmètre et responsabilités
4. **Exemples possibles** :
   - `(admin)` : Administration système
   - `(api)` : Routes API (si nécessaire)
   - `(docs)` : Documentation technique

**Interdiction** : Ne pas créer de route groups pour des segments d'URL réels

---

## 📐 Structure Attendue Phase 4

### Domaine `(app)`

#### Onboarding

**Structure attendue** :
```
(app)/onboarding/
├── page.tsx                    # Étape initiale
├── [step]/                     # Segment dynamique pour étapes
│   └── page.tsx
└── complete/
    └── page.tsx                # Finalisation
```

**Segments dynamiques autorisés** :
- `[step]` : Identifiant d'étape (ex: `salon`, `equipe`, `services`)

#### Dashboard

**Structure attendue** :
```
(app)/dashboard/
├── page.tsx                    # Vue d'ensemble
├── [id]/                       # Ressource spécifique
│   └── page.tsx
└── analytics/
    └── page.tsx                # Sous-route analytique
```

**Segments dynamiques autorisés** :
- `[id]` : Identifiant de ressource (salon, équipe, etc.)

#### Settings

**Structure attendue** :
```
(app)/settings/
├── page.tsx                    # Vue générale
├── [tab]/                      # Onglet dynamique
│   └── page.tsx
└── profile/
    └── page.tsx                # Sous-route profil
```

**Segments dynamiques autorisés** :
- `[tab]` : Onglet de paramètres (ex: `account`, `team`, `billing`)

### Domaine `(marketing)`

**Structure attendue** :
```
(marketing)/
├── page.tsx                    # Landing page
├── pricing/
│   └── page.tsx
├── signup/
│   └── page.tsx
├── offer/
│   ├── page.tsx
│   └── [slug]/                 # Offre spécifique
│       └── page.tsx
└── ...
```

**Segments dynamiques autorisés** :
- `[slug]` : Identifiant textuel SEO-friendly (ex: `offer/[slug]`)

### Règles pour segments dynamiques

**Par domaine** :
- `(app)` : Utiliser `[id]` pour ressources, `[step]` pour parcours, `[tab]` pour navigation
- `(marketing)` : Utiliser `[slug]` pour contenu SEO-friendly

**Interdictions** :
- Pas de catch-all `[...slug]` sauf cas exceptionnel documenté
- Pas de segments dynamiques imbriqués multiples
- Un seul segment dynamique par niveau

---

## ❌ Interdictions Obligatoires

### Route Groups

- ❌ **Route groups visibles dans l'URL** : Les parenthèses `()` masquent le groupe de l'URL
- ❌ **Nommage français** : Internal English uniquement (ex: `(app-privée)` interdit)
- ❌ **Route groups pour segments d'URL** : Utiliser des dossiers normaux pour segments réels

### Nommage

- ❌ **Français dans noms internes** : Tous les dossiers, fichiers, composants en anglais
- ❌ **Mélange français/anglais** : Cohérence totale (internal English rule)
- ❌ **Cas mixtes** : kebab-case strict pour dossiers, PascalCase pour composants

### Domaines

- ❌ **Mélange entre domaines** : Une route appartient à un seul domaine
- ❌ **Routes app dans marketing** : Séparation stricte
- ❌ **Routes marketing dans app** : Séparation stricte

### Segments Dynamiques

- ❌ **Segments dynamiques incohérents** : Respecter conventions par domaine
- ❌ **Catch-all sans justification** : `[...slug]` uniquement si nécessaire et documenté
- ❌ **Imbrication excessive** : Maximum 4 niveaux (Root → Group → Segment → Page)
- ❌ **Segments dynamiques multiples par niveau** : Un seul segment dynamique par niveau

### Structure

- ❌ **Profondeur excessive** : Éviter plus de 4 niveaux d'imbrication
- ❌ **Layouts sans groupe** : Tous les layouts doivent être dans un route group ou à la racine
- ❌ **Pages sans layout parent** : Toute page doit avoir un layout parent (Root ou Group)

---

## ✅ Validation

### Checklist Phase 3

- [x] Route groups analysés et rôle structurel confirmé
- [x] Architecture route groups définie (rôle, périmètre, boundaries, nommage)
- [x] Hiérarchie Layout → Group → Segments définie (niveaux, propagation, limites)
- [x] Séparation domaines définie (app, marketing, futurs)
- [x] Structure attendue Phase 4 définie (onboarding, dashboard, settings, marketing)
- [x] Interdictions obligatoires établies
- [x] Documentation créée (`MACRO1-PHASE3-ROUTEGROUPS.md`)

### Conformité

✅ **Documentation uniquement** : Aucun fichier route/composant/layout créé  
✅ **Travail conceptuel** : Architecture et règles définies  
✅ **Conventions Phase 2 respectées** : Internal English, kebab-case, PascalCase  
✅ **Structure Phase 4 préparée** : Définie sans création  
✅ **Prêt pour Phase 4** : Architecture complète et validée

