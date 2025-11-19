# Macro 4.2 — Architecture UI (Structure du Wizard)

⸻

# Onboarding UI Contract — Alfred Reception

**Version :** Macro 4.2 — Spécification structurelle

**Périmètre :** Définition de l'architecture UI du wizard (sans design, sans logique avancée).

**Objectif :** Décrire la structure, le layout, la navigation et les composants afin que Cursor puisse implémenter l'UI minimale en Phase 4.4.

⸻

## 1. Routes

### 1.1 Route unique

Le wizard fonctionne entièrement sur une seule route :

```
/onboarding
```

Aucune navigation par URL.

Les étapes sont gérées via un state interne.

### 1.2 Écran "complete"

L'écran final (résumé + activation) est dans la même page, géré comme un step supplémentaire.

Pas de route `/onboarding/complete`.

⸻

## 2. Structure du layout global

Le layout global du wizard comprend les éléments suivants, dans cet ordre :

1. **Titre principal du step** (texte)
2. **Timeline** (indicateur d'avancement horizontal, centré)
3. **Zone de contenu** : component du step en cours
4. **Zone description** sous le contenu (phrase explicative)
5. **Footer** avec Next / Back

### 2.1 Détails du layout

#### Titre du step

Affiché en haut, centré, change à chaque étape (ex : "Identité du salon", "Horaires", etc.)

#### Timeline

- Horizontale
- Centrée
- Avance vers la droite à chaque step
- Minimaliste (pas de design, juste une structure)

#### Zone de contenu

Contient les inputs et interactions du step courant.

#### Description

Texte informatif sous les champs du step, centré.

(Le contenu exact est défini dans Phase 4.1.)

#### Footer

Contient les boutons Back et Next.

Toujours visible.

⸻

## 3. Conteneur Wizard

### 3.1 Composant principal

Un composant central unique :

```
OnboardingWizard.tsx
```

**Responsabilités :**

- gérer le state `stepIndex`
- afficher le step correspondant
- gérer les transitions next/back
- afficher timeline, titre, description et footer

### 3.2 Step switching

Switch interne simple :

```typescript
switch(step) {
  case 1: return <StepIdentity />
  case 2: return <StepHours />
  case 3: return <StepServices />
  case 4: return <StepCalendar />
  case 5: return <StepCommunications />
  case 6: return <StepSummary />
}
```

### 3.3 State

- State local via `useState`
- Pas de contexte global
- Pas de hook `useOnboarding`

⸻

## 4. Navigation interne

### 4.1 Modèle de navigation

- Boutons Next / Back gérés via `setStep(n ± 1)`
- Validation minimale dans chaque step (Next disabled si step incomplet)

### 4.2 Footer

Un composant dédié :

```
WizardFooter
```

Contient :

- Bouton Back (sauf step 1)
- Bouton Next

### 4.3 Quitter l'onboarding

Pas de bouton "Quitter".

L'utilisateur ne peut pas accéder au dashboard tant que le wizard n'est pas complété.

⸻

## 5. Découpage des fichiers steps

### 5.1 Répertoire

```
/onboarding/steps/
```

### 5.2 Fichiers

Validés :

- `StepIdentity.tsx`
- `StepHours.tsx`
- `StepServices.tsx`
- `StepCalendar.tsx`
- `StepCommunications.tsx`
- `StepSummary.tsx`

### 5.3 Structure de chaque step

Chaque step est un composant pur :

```typescript
export function StepIdentity() { ... }
```

Aucun container, aucun hook dédié.

⸻

## 6. Structure des composants internes

### 6.1 Inputs

- Inputs HTML simples
- Pas de design (Macro 7)
- Pas de composants génériques

### 6.2 Titre du step

Géré dans `OnboardingWizard` selon `stepIndex`.

### 6.3 Description du step

Affichée sous le contenu, centrée.

⸻

## 7. Timeline (indicateur d'avancement)

### 7.1 Structure

- Composant graphique minimal (structure-only, pas de design)
- 6 segments horizontaux (1 par step)
- Le segment correspondant au step actif est activé (structurellement)

### 7.2 Position

- En haut, sous le titre
- Centré

⸻

## 8. Validation UI

### 8.1 Principe

Validation par step :

- Step incomplet → Next désactivé
- Pas d'erreur inline
- Pas de logique métier (mock minimal)

### 8.2 Reset

En cas de refresh :

→ wizard réinitialisé (state local), conforme Macro 4.

⸻

## 9. Structure du document et dépendances

Ce document définit uniquement :

- Routes
- Layout
- Navigation
- Structure composant
- Découpage fichier
- Timeline
- Validation légère

**Aucune logique métier** → Macro 6.5.

**Aucun design** → Macro 7.

**Aucune persistance** → Mock uniquement.

⸻

✔ **Fin du document — PHASE 4.2 validée**

⸻

