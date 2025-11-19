# Auth Routing Contract — Minimal

**Macro 3.5 — Phase 3.5.2**  
**Date :** Phase 3.5.2  
**Périmètre :** Routing AUTH minimal uniquement

---

## Routes publiques

Les routes suivantes sont **accessibles sans authentification** :

- `/` (page d'accueil marketing)
- `/login`
- `/signup`
- `/dashboard-preview`
- `/offer`
- `/offer/[slug]`
- `/payment`
- `/pricing`
- `/voice-demo`

**Segment :** Toutes les routes du segment `(marketing)` sont publiques.

---

## Routes protégées

Les routes suivantes **nécessitent une authentification** :

- `/dashboard`
- `/dashboard/[id]`
- `/dashboard/analytics`
- `/onboarding`
- `/onboarding/[step]`
- `/onboarding/complete`

**Note importante :** La présence de `/onboarding` dans cette liste est purement structurelle et n'implique **aucune logique onboarding**. La navigation onboarding appartient à Macro 6.5.

**Segment :** Les routes du segment `(app)` listées ci-dessus sont protégées par `ClientAuthGuard`.

---

## Règles de navigation minimales

### Actions utilisateur

- **login** → `/dashboard`
- **signup** → `/login`
- **logout** → `/login`
- **guard (non-auth)** → `/login`

---

## Comportement guard

Le `ClientAuthGuard` fonctionne comme suit :

1. **Vérification d'authentification** : Le guard vérifie l'état d'authentification via `useIsAuthenticated()`.
2. **État de chargement** : Pendant le chargement (`loading === true`), le guard retourne `null` (pas de rendu).
3. **Utilisateur non authentifié** : Si `isAuthenticated === false`, le guard redirige vers `/login` via `router.push('/login')`.
4. **Utilisateur authentifié** : Si `isAuthenticated === true`, le guard rend `{children}`.

**Redirection défensive** : Toute tentative d'accès à une route protégée sans authentification entraîne une redirection vers `/login`.

---

## Comportement refresh

### Refresh sur route protégée

- **Comportement** : Redirection vers `/login` (session perdue)
- **Raison** : L'authentification mockée est 100% mémoire, sans persistance. Un refresh de page efface la session.

### Refresh sur route publique

- **Comportement** : Aucune redirection
- **Raison** : Les routes publiques sont accessibles sans authentification.

---

## Périmètre & limites

- **Ce contrat couvre uniquement le routing AUTH minimal.**
- **Aucune logique produit n'est incluse.**
- **Aucune logique onboarding n'est incluse.**

---

## Interdits explicites

Ce contrat **n'inclut pas** :

- ❌ Aucune logique onboarding
- ❌ Aucune détection new-user
- ❌ Aucune logique produit
- ❌ Aucun état supplémentaire
- ❌ Aucun routing conditionnel avancé
- ❌ Logique complète reportée à Macro 6.5

---

## Notes techniques

- **Protection** : Implémentée côté client via `ClientAuthGuard` dans `/app/(app)/layout.tsx`.
- **Authentification** : Mockée via `supabaseMock` (100% mémoire, sans persistance).
- **Session** : Gérée par `AuthContext` avec refresh périodique (100ms).
- **Redirection** : Utilise `next/navigation` (`useRouter().push()`).

---

**Fin du contrat**

