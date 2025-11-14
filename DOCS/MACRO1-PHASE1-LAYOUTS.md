# Macro 1 — Phase 1 : Layouts & Responsabilités

## 📋 Contexte

Phase 1 de Macro 1 : définition des layouts structurels uniquement, sans UI ni logique métier.

---

## 🏗️ Hiérarchie d'imbrication des layouts

### Structure Next.js App Router

```
app/
├── layout.tsx                    # RootLayout (niveau 0)
│
├── (app)/                        # Route Group "app"
│   ├── layout.tsx               # AppLayout (niveau 1)
│   ├── onboarding/
│   │   └── page.tsx             # Page (niveau 2)
│   └── dashboard/
│       └── page.tsx             # Page (niveau 2)
│
└── (marketing)/                  # Route Group "marketing"
    ├── layout.tsx               # MarketingLayout (niveau 1)
    ├── page.tsx                 # Page (niveau 2)
    ├── signup/
    │   └── page.tsx             # Page (niveau 2)
    └── ...
```

### Flux d'imbrication

```
RootLayout
  └── <html lang="fr">
      └── <body>
          └── AppLayout (pour routes /app/*)
              └── <main>
                  └── Page (ex: /onboarding)
          
          └── MarketingLayout (pour routes /marketing/*)
              └── <main>
                  └── Page (ex: /signup)
```

### Règles d'imbrication

1. **RootLayout** : Enveloppe toutes les routes
2. **Route Groups** : `(app)` et `(marketing)` organisent les domaines sans affecter l'URL
3. **Layouts de groupe** : AppLayout et MarketingLayout s'appliquent uniquement à leurs routes respectives
4. **Pages** : S'imbriquent dans le layout de leur groupe parent

---

## 🎯 Séparation des responsabilités

### RootLayout (`app/layout.tsx`)

**Responsabilité** : Structure globale de l'application

**Contenu autorisé** :
- ✅ Metadata minimales (title, description génériques)
- ✅ Structure HTML de base (`<html lang="fr">`, `<body>`)
- ✅ Import CSS global (`globals.css`)
- ✅ Providers structurels uniquement (si nécessaire, ex: theme provider basique)

**Interdictions** :
- ❌ Providers auth/analytics/UX → Macros futures
- ❌ Metadata avancées (viewport, OG, SEO) → Macro 8
- ❌ Navigation globale → Macro 7
- ❌ Logique métier → Macros futures

**État actuel** :
```typescript
- Metadata : title + description génériques ✅
- HTML : <html lang="fr"> + <body> ✅
- Providers : Aucun (conforme) ✅
```

---

### AppLayout (`app/(app)/layout.tsx`)

**Responsabilité** : Structure du domaine applicatif (onboarding, dashboard, settings)

**Contenu autorisé** :
- ✅ Wrapper `<main>` pour le contenu
- ✅ Structure minimale sans UI

**Interdictions** :
- ❌ Sidebar → Macro 5 (Dashboard) + Macro 7 (Design System)
- ❌ Header → Macro 7 (Design System)
- ❌ Navigation → Macro 7 (Design System)
- ❌ Protection routes/Auth → Macro 3 (Authentification)
- ❌ Logique métier → Macros futures

**État actuel** :
```typescript
- Structure : <main>{children}</main> ✅
- UI : Aucune (conforme) ✅
```

**Routes concernées** :
- `/onboarding/*`
- `/dashboard/*`
- `/settings/*` (à venir)

---

### MarketingLayout (`app/(marketing)/layout.tsx`)

**Responsabilité** : Structure du domaine marketing (landing, pricing, signup)

**Contenu autorisé** :
- ✅ Wrapper `<main>` pour le contenu
- ✅ Structure minimale sans UI

**Interdictions** :
- ❌ Header marketing → Macro 8 (Marketing & SEO)
- ❌ Footer marketing → Macro 8 (Marketing & SEO)
- ❌ CTA globaux → Macro 8
- ❌ Identité visuelle → Macro 7 (Design System)
- ❌ Navigation → Macro 7 (Design System)

**État actuel** :
```typescript
- Structure : <main>{children}</main> ✅
- UI : Aucune (conforme) ✅
```

**Routes concernées** :
- `/` (page d'accueil)
- `/signup`
- `/pricing`
- `/offer`
- `/payment`
- `/voice-demo`
- `/dashboard-preview`

---

## ✅ Validation Phase 1

### Checklist

- [x] RootLayout : metadata minimales définies (title/description génériques)
- [x] RootLayout : HTML minimal structuré (`<html lang="fr">`, `<body>`)
- [x] RootLayout : aucun provider non autorisé
- [x] AppLayout : layout minimal (`<main>{children}</main>`)
- [x] MarketingLayout : layout minimal (`<main>{children}</main>`)
- [x] Hiérarchie documentée (Root → Groups → Pages)
- [x] Responsabilités documentées (séparation claire)

### Conformité Macro 1

✅ **STRUCTURE STATIQUE UNIQUEMENT** : Aucune UI, aucune logique métier  
✅ **Chronologie respectée** : Aucun empiètement sur Macros futures  
✅ **Fondation solide** : Prêt pour Macro 2 (types/data), Macro 3 (auth), Macro 4-6 (features), Macro 7 (design system)

---

## 📝 Notes

- Les layouts sont **vides intentionnellement** pour éviter toute dette technique
- L'UI sera ajoutée progressivement dans les Macros suivantes selon la chronologie
- Cette structure permet une évolution propre et maintenable

