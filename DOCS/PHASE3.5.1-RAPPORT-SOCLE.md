# Phase 3.5.1 — Rapport du Socle Macro 3 (Auth Minimal)

**Date** : $(date)  
**Objectif** : Analyse exhaustive du code existant lié à l'authentification mockée (Macro 3) — périmètre auth uniquement

---

## 1. Ce qui existe réellement

### 1.1 Types & Configuration

**Fichier** : `/lib/auth/types.ts`
- ✅ Interface `User` : `id`, `email`, `metadata`
- ✅ Interface `Session` : `accessToken`, `refreshToken`, `expiresAt`, `user`
- ✅ Interface `AuthState` : `user`, `session`, `loading`
- ✅ Aucun état supplémentaire (conforme Macro 3.5)

**Fichier** : `/lib/auth/config.ts`
- ✅ Configuration mock : `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `IS_MOCK_MODE`
- ✅ Configuration minimale (pas de durées ou options spécifiques)

### 1.2 Supabase Mock

**Fichier** : `/lib/auth/supabase-mock.ts`
- ✅ `signUp(email, password)` : crée user + session, stocke dans `currentSession`
- ✅ `signIn(email, password)` : crée user + session, stocke dans `currentSession`
- ✅ `signOut()` : met `currentSession` à `null`
- ✅ `getSession()` : retourne `currentSession`
- ✅ Session 100% en mémoire (variable `let currentSession`, pas de localStorage/sessionStorage)
- ✅ Aucun indicateur "nouvel utilisateur" (conforme Macro 3.5)
- ✅ Méthodes additionnelles : `signInWithGoogle()`, `signInWithApple()`

### 1.3 Auth Client & Refresh

**Fichier** : `/lib/auth/auth-client.ts`
- ✅ Wrapper minimal autour de `supabaseMock.auth.getSession()`
- ✅ Expose uniquement `getSession()`

**Fichier** : `/lib/auth/auth-context.tsx`
- ✅ `AuthProvider` : Context Provider React
- ✅ État exposé : `user`, `session`, `loading` (uniquement ces 3 champs)
- ✅ Mécanisme de refresh : `setInterval(refreshSession, 100)` toutes les 100ms
- ✅ `loading` devient `false` après le premier `refreshSession()` (ligne 24)
- ✅ `useAuth()` hook exposé avec vérification de contexte
- ✅ Aucun état supplémentaire (conforme Macro 3.5)

### 1.4 Hooks Auth

**Fichier** : `/lib/auth/hooks.ts`
- ✅ `useUser()` : retourne `user` depuis `useAuth()`
- ✅ `useSession()` : retourne `session` depuis `useAuth()`
- ✅ `useIsAuthenticated()` : retourne `user !== null`
- ✅ Hooks minimaux (conforme Macro 3.5)

### 1.5 Guard

**Fichier** : `/lib/auth/client-auth-guard.tsx`
- ✅ Props : `children`, `redirectTo` (obligatoire, string)
- ✅ Redirection défensive : `router.push(redirectTo)` si `!loading && !isAuthenticated`
- ✅ Retour `null` si `loading` ou `!isAuthenticated`
- ✅ Dépendances `useEffect` : `[loading, isAuthenticated, router, redirectTo]`
- ✅ Utilise `useIsAuthenticated()` et `useAuth().loading`
- ✅ Aucune redirection post-action (conforme Macro 3.5)
- ✅ Guard basé uniquement sur `loading`, `session`, `user` (conforme Macro 3.5)

### 1.6 Formulaires Auth

**Fichier** : `/lib/auth/login-form.tsx`
- ✅ Appel `supabaseMock.auth.signIn(email, password)`
- ✅ Gestion `loading` state local
- ✅ `event.preventDefault()` dans `handleSubmit`
- ✅ Validation HTML (`required` sur inputs)
- ✅ Délai 150ms après `signIn` pour synchronisation avec `AuthContext`
- ✅ `router` importé depuis `next/navigation` mais **jamais utilisé**
- ✅ Aucun `router.push()` après login réussi
- ✅ Comportement après login : utilisateur reste sur `/login`

**Fichier** : `/lib/auth/signup-form.tsx`
- ✅ Appel `supabaseMock.auth.signUp(email, password)`
- ✅ Gestion `loading` state local
- ✅ `event.preventDefault()` dans `handleSubmit`
- ✅ Validation HTML (`required` sur inputs)
- ✅ Délai 150ms après `signUp` pour synchronisation avec `AuthContext`
- ✅ `router` importé depuis `next/navigation` mais **jamais utilisé**
- ✅ Aucun `router.push()` après signup réussi
- ✅ Comportement après signup : utilisateur reste sur `/signup`

**Fichier** : `/lib/auth/logout-button.tsx`
- ✅ Appel `supabaseMock.auth.signOut()`
- ✅ Gestion `loading` state local
- ✅ Masquage si `!isAuthenticated` (retourne `null`)
- ✅ `router` importé depuis `next/navigation` mais **jamais utilisé**
- ✅ Aucun `router.push()` après logout
- ✅ Effet réel sur l'UI : utilisateur reste sur la page protégée actuelle

### 1.7 Exports & Structure

**Fichier** : `/lib/auth/index.ts`
- ✅ Ordre strict des exports :
  1. `types` (export *)
  2. `config` (export *)
  3. `supabaseMock`
  4. `authClient`
  5. `AuthProvider`, `useAuth`
  6. `useUser`, `useSession`, `useIsAuthenticated`
  7. `ClientAuthGuard`
  8. `LoginForm`
  9. `SignupForm`
  10. `LogoutButton`

### 1.8 Layouts & Points d'entrée

**Fichier** : `/app/layout.tsx`
- ✅ `AuthProvider` enveloppe `{children}` dans `<body>`
- ✅ Layout racine avec `'use client'` (nécessaire pour `AuthProvider`)
- ✅ Pas de metadata (incompatible avec client component)

**Fichier** : `/app/(app)/layout.tsx`
- ✅ `ClientAuthGuard` enveloppe `<main>{children}</main>`
- ✅ `redirectTo="/"` (redirection vers route publique)
- ✅ `LogoutButton` présent dans `<header>` (visible uniquement si auth)

**Fichier** : `/app/(marketing)/layout.tsx`
- ✅ Absence totale de `ClientAuthGuard`
- ✅ Absence totale de hooks auth
- ✅ Layout public minimal (`<main>{children}</main>`)

### 1.9 Pages Login/Signup

**Fichier** : `/app/(marketing)/login/page.tsx`
- ✅ Structure minimale : `<div>` avec `<h1>Sign In</h1>` et `<LoginForm />`
- ✅ `'use client'` directive
- ✅ Route publique dans `(marketing)` route group

**Fichier** : `/app/(marketing)/signup/page.tsx`
- ✅ Structure minimale : `<div>` avec `<h1>Sign Up</h1>` et `<SignupForm />`
- ✅ `'use client'` directive
- ✅ Route publique dans `(marketing)` route group

### 1.10 Occurrences router.push / redirect

**Dans `/lib/auth`** :
- ✅ `client-auth-guard.tsx` ligne 21 : `router.push(redirectTo)` — redirection défensive uniquement
- ✅ Aucune occurrence dans `login-form.tsx`, `signup-form.tsx`, `logout-button.tsx` (router importé mais inutilisé)

**Dans `/app`** :
- ✅ Aucune occurrence de `router.push` dans les pages ou layouts

**Occurrences de `redirect`** :
- ✅ `client-auth-guard.tsx` : prop `redirectTo` (string)
- ✅ `app/(app)/layout.tsx` : variable `redirectPath = '/'`
- ✅ Aucune fonction `redirect()` de Next.js utilisée

### 1.11 Routes Structurelles

**Route `/app/(app)/dashboard`** :
- ✅ Existe : structure avec `page.tsx`, `[id]/page.tsx`, `analytics/page.tsx`
- ✅ Route protégée structurelle (sous `(app)` route group)
- ✅ Utilisée comme cible de redirection minimale (login → /dashboard)
- ✅ Aucune analyse de logique interne (hors périmètre Macro 3.5)

**Route `/app/(app)/onboarding`** :
- ✅ Existe : structure avec `page.tsx`, `[step]/page.tsx`, `complete/page.tsx`
- ✅ Route protégée structurelle (sous `(app)` route group)
- ✅ Existence confirmée uniquement (hors périmètre Macro 3.5)

---

## 2. Ce qui manque (auth minimal uniquement)

### 2.1 Redirections Post-Action

- ❌ **LoginForm** : aucune redirection après login réussi vers `/dashboard`
- ❌ **SignupForm** : aucune redirection après signup réussi vers `/login`
- ❌ **LogoutButton** : aucune redirection après logout vers `/login`

### 2.2 Synchronisation AuthContext ↔ Guard

- ⚠️ Le guard dépend de `loading` et `isAuthenticated` qui sont mis à jour via `setInterval(100ms)`
- ⚠️ Après `signIn`/`signUp`, délai de 150ms dans les formulaires pour permettre la synchronisation
- ⚠️ Risque de race condition si l'utilisateur navigue rapidement après login

### 2.3 Expérience Utilisateur

- ❌ Après login : utilisateur reste sur `/login` (doit naviguer manuellement)
- ❌ Après logout : utilisateur reste sur page protégée (confusion)
- ❌ Après signup : utilisateur reste sur `/signup` (doit naviguer manuellement)
- ❌ Pas de feedback visuel après actions réussies

### 2.4 Persistance Session

- ✅ Session 100% en mémoire (conforme Macro 3)
- ⚠️ Refresh page → session perdue (comportement attendu mais non documenté)

---

## 3. Ce qui doit être ajusté (auth minimal uniquement, sans logique produit)

### 3.1 Redirections dans Formulaires

**Constats** :
- `router` est importé dans `LoginForm`, `SignupForm`, `LogoutButton` mais jamais utilisé
- Après `signIn`/`signUp`/`signOut`, aucune navigation n'est déclenchée
- Les utilisateurs doivent naviguer manuellement après chaque action

**Ajustement nécessaire** :
- Ajouter `router.push('/dashboard')` après `signIn` réussi dans `LoginForm`
- Ajouter `router.push('/login')` après `signUp` réussi dans `SignupForm`
- Ajouter `router.push('/login')` après `signOut` réussi dans `LogoutButton`

### 3.2 Guard Redirection

**Constats** :
- Le guard redirige actuellement vers `/` (route publique)
- Selon les règles Macro 3.5, le guard (non-auth) doit rediriger vers `/login`

**Ajustement nécessaire** :
- Modifier `redirectPath` dans `/app/(app)/layout.tsx` de `'/'` à `'/login'`

### 3.3 Synchronisation AuthContext ↔ Guard

**Constats** :
- Le guard dépend de `loading` et `isAuthenticated` mis à jour via `setInterval(100ms)`
- Délai artificiel de 150ms dans les formulaires pour synchronisation
- Risque de race condition si navigation rapide

**Ajustement nécessaire** :
- Vérifier si la synchronisation actuelle est suffisante pour les redirections post-action
- Considérer l'ajout d'un callback ou d'un mécanisme de synchronisation plus robuste
- Documenter le comportement attendu après login/logout/signup

### 3.4 Structure des Routes

**Constats** :
- Routes `/login` et `/signup` dans `(marketing)` route group (publiques)
- Routes `/dashboard` dans `(app)` route group (protégées)
- Structure conforme mais logique de navigation incomplète

**Ajustement nécessaire** :
- Documenter le contrat de routing minimal (routes publiques vs protégées)
- Définir les règles de navigation minimales (user connecté → dashboard, non connecté → login)

---

## 4. Synthèse

### Points forts

- ✅ Structure auth complète et fonctionnelle (types, mock, context, hooks, guard)
- ✅ Protection des routes `(app)` opérationnelle
- ✅ Routes publiques `(marketing)` correctement séparées
- ✅ Session 100% en mémoire (conforme Macro 3)
- ✅ Synchronisation AuthContext via interval (100ms)
- ✅ Aucun état supplémentaire (conforme Macro 3.5)

### Points critiques à ajuster

- ❌ **Redirections post-action absentes** : login/logout/signup ne déclenchent aucune navigation
- ❌ **Guard redirection incorrecte** : redirige vers `/` au lieu de `/login`
- ❌ **Expérience utilisateur incomplète** : navigation manuelle requise après chaque action
- ⚠️ **Synchronisation AuthContext ↔ Guard** : délais artificiels, risque de race condition

### Préparation Phase 3.5.2

Le rapport confirme que :
- Le socle Macro 3 est solide et fonctionnel
- Les redirections post-action sont le point critique manquant
- Les redirections minimales doivent être définies dans le contrat de routing
- Les ajustements nécessaires sont clairs et ciblés (pas de réécriture, uniquement complétion)
- Aucune logique produit ni onboarding n'est nécessaire (conforme Macro 3.5)

---

**Phase 3.5.1 terminée** — Prêt pour Phase 3.5.2 (Définition du Routing Contract minimal)

