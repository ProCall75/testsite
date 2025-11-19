# Phase 4.4 — Todos Exécutifs — Implémentation UI Minimale

**Phase :** 4.4  
**Responsabilité :** CURSOR  
**Objectif :** Implémenter uniquement le squelette interactif du wizard

**Contraintes :**
- Pas de design
- Pas de logique produit
- Pas de validation réelle
- Pas de persistance
- Pas de comportement onboarding avancé

---

## Todos Exécutifs

### TODO 1 — Composant Principal OnboardingWizard

**Fichier :** `app/(app)/onboarding/page.tsx`

**Actions :**
- Créer le composant `OnboardingWizard`
- Gérer le state `stepIndex` (1-6) avec `useState`
- Implémenter le switch pour afficher le step correspondant :
  ```typescript
  switch(stepIndex) {
    case 1: return <StepIdentity />
    case 2: return <StepHours />
    case 3: return <StepServices />
    case 4: return <StepCalendar />
    case 5: return <StepCommunications />
    case 6: return <StepSummary />
  }
  ```
- Afficher le titre du step selon `stepIndex` (centré en haut) — voir TODO 11
- Afficher la Timeline (6 segments horizontaux, centrée sous le titre)
- Afficher la description du step (centrée sous le contenu) — voir TODO 11
- Intégrer `WizardFooter`

**Références :**
- `onboarding.ui-contract.md` — Section 3.1, 3.2, 3.3
- `macro4.support.md` — Section 6.1, 6.2

---

### TODO 2 — Composant WizardFooter

**Fichier :** `app/(app)/onboarding/WizardFooter.tsx` (ou dans le même fichier)

**Actions :**
- Créer le composant `WizardFooter`
- Bouton Back (désactivé à l'étape 1)
- Bouton Next (désactivé si step incomplet selon validation)
- Gérer les transitions : `setStep(stepIndex - 1)` pour Back, `setStep(stepIndex + 1)` pour Next
- Toujours visible en bas du wizard

**Références :**
- `onboarding.ui-contract.md` — Section 4.2
- `macro4.support.md` — Section 4.1

---

### TODO 3 — Step 1 : Identité du Salon

**Fichier :** `app/(app)/onboarding/steps/StepIdentity.tsx`

**Actions :**
- Créer le composant `StepIdentity`
- Champs obligatoires (inputs HTML simples) :
  - `ownerName` (string)
  - `salonName` (string)
  - `email` (string)
  - `phone` (string)
- Champs optionnels :
  - `address` (string)
  - `city` (string)
  - `postalCode` (string)
  - `country` (string)
- Validation : Next disabled si champs obligatoires vides
- Contenu minimal (pas de design, inputs HTML simples)

**Références :**
- `onboarding.flow.md` — Section 2, Étape 1
- `macro4.support.md` — Section 2.2, Étape 1
- `macro4.support.md` — Section 4.2, Validation étape 1

---

### TODO 4 — Step 2 : Horaires du Salon

**Fichier :** `app/(app)/onboarding/steps/StepHours.tsx`

**Actions :**
- Créer le composant `StepHours`
- Inputs pour chaque jour de la semaine (lundi à dimanche) :
  - `open` (string HH:mm)
  - `close` (string HH:mm)
- **Règle importante :** Si les deux inputs d'un jour sont vides → considérer fermé (`open: null, close: null`)
- Pas de champs "null" visuels dans l'UI
- Pas de SELECT avec option "null"
- Juste inputs vides = salon fermé pour ce jour
- Format : HH:mm pour les heures ouvertes, inputs vides pour jours fermés
- Validation : aucune contrainte (0-7 jours ouverts acceptables)
- Contenu minimal (inputs HTML simples, pas de design)

**Références :**
- `onboarding.flow.md` — Section 2, Étape 2
- `macro4.support.md` — Section 2.2, Étape 2
- `macro4.support.md` — Section 4.2, Validation étape 2

---

### TODO 5 — Step 3 : Services

**Fichier :** `app/(app)/onboarding/steps/StepServices.tsx`

**Actions :**
- Créer le composant `StepServices`
- Formulaire pour ajouter des services :
  - `serviceName` (string)
  - `durationMinutes` (number)
  - `priceEur` (number)
- Liste des services ajoutés (affichage simple)
- Bouton "Ajouter un service" (ou fonctionnalité d'ajout)
- Validation : au moins 1 service obligatoire (Next disabled si liste vide)
- Contenu minimal (inputs HTML simples, pas de design)

**Références :**
- `onboarding.flow.md` — Section 2, Étape 3
- `macro4.support.md` — Section 2.2, Étape 3
- `macro4.support.md` — Section 4.2, Validation étape 3

---

### TODO 6 — Step 4 : Intégration Agenda

**Fichier :** `app/(app)/onboarding/steps/StepCalendar.tsx`

**Actions :**
- Créer le composant `StepCalendar`
- **Important :** Utiliser des boutons "Activer", PAS des checkboxes ou toggles techniques
- Bouton "Activer Google Calendar" → qui devient "Activé" après clic
- Bouton "Activer Outlook Calendar" → qui devient "Activé" après clic
- Simuler l'activation d'une intégration (mock minimal)
- **Interdiction :** Pas de `input type="checkbox"`, pas de switch toggle brut
- Validation : **au moins un agenda activé** (Google ou Outlook) — Next disabled si aucun agenda activé
- Contenu minimal (pas de design)

**Références :**
- `onboarding.flow.md` — Section 2, Étape 4
- `macro4.support.md` — Section 2.2, Étape 4
- `macro4.support.md` — Section 4.2, Validation étape 4

---

### TODO 7 — Step 5 : Communication

**Fichier :** `app/(app)/onboarding/steps/StepCommunications.tsx`

**Actions :**
- Créer le composant `StepCommunications`
- Checkboxes pour :
  - SMS → mappe vers `ReceptionConfig.notificationsProEnabled`
  - WhatsApp → mappe vers `ReceptionIntegration.whatsappEnabled`
  - Telegram → mappe vers `ReceptionIntegration.telegramEnabled`
- Validation : **au moins un canal activé** (SMS, WhatsApp ou Telegram) — Next disabled si aucun canal activé
- Contenu minimal (checkboxes HTML simples, pas de design)

**Références :**
- `onboarding.flow.md` — Section 2, Étape 5
- `macro4.support.md` — Section 2.2, Étape 5
- `macro4.support.md` — Section 4.2, Validation étape 5

---

### TODO 8 — Step 6 : Confirmation & Activation

**Fichier :** `app/(app)/onboarding/steps/StepSummary.tsx`

**Actions :**
- Créer le composant `StepSummary`
- Afficher résumé identité :
  - ownerName, salonName, email, phone
- Afficher résumé horaires :
  - **Jours ouverts uniquement** (afficher les plages actives)
  - Format minimal : "Lundi : 09:00 - 19:00", "Mardi : 09:00 - 19:00", etc.
  - Ne pas afficher les jours fermés
- Afficher liste des services ajoutés :
  - serviceName, durationMinutes, priceEur
- Afficher agendas activés :
  - "Google Calendar : Activé" ou "Outlook Calendar : Activé"
- Afficher canaux de communication activés :
  - "SMS : Activé", "WhatsApp : Activé", "Telegram : Activé"
- **CTA "Activer mon assistant"** (redirige vers `/dashboard`)
- **Validation avant CTA :** Vérifier que tous les steps sont complétés
- Contenu minimal (affichage texte simple, pas de design)

**Références :**
- `onboarding.flow.md` — Section 2, Étape 6
- `macro4.support.md` — Section 2.2, Étape 6
- `macro4.support.md` — Section 4.2, Validation étape 6

---
Implémente le composant Timeline.tsx selon la Phase 4.4 — TODO 9.

Contraintes STRICTES :
- AUCUN design.
- AUCUN style complexe.
- AUCUNE barre, AUCUN cercle graphique, AUCUN rendu visuel avancé.
- UNIQUEMENT du texte.
- Structure minimaliste.

Structure attendue :
- Un conteneur <div> unique.
- 6 segments rendus par une map.
- Segment actif = "[●]"
- Segment inactif = "[○]"
- Représentation TEXTUELLE uniquement.
- Juste pour indiquer la progression, pas un composant stylé.

Exemple acceptable :
[●] [○] [○] [○] [○] [○]

Le composant reçoit :
- prop currentStep (1-6)

Position :
- Le composant doit seulement retourner la structure.
- Le parent OnboardingWizard gère le placement.

NE PAS ajouter de CSS autre qu'un display:flex et justify-content:center optionnel en inline.

Ne pas rendre les steps cliquables.

---

### TODO 10 — Gestion d'État

**Fichier :** `app/(app)/onboarding/page.tsx` (dans OnboardingWizard)

**Actions :**
- State pour les données de chaque étape (`formData`) :
  ```typescript
  const [formData, setFormData] = useState({
    step1: { 
      ownerName: '', 
      salonName: '', 
      email: '', 
      phone: '', 
      address: '', 
      city: '', 
      postalCode: '', 
      country: '' 
    },
    step2: { 
      openingHours: { 
        monday: { open: null, close: null }, 
        tuesday: { open: null, close: null },
        wednesday: { open: null, close: null },
        thursday: { open: null, close: null },
        friday: { open: null, close: null },
        saturday: { open: null, close: null },
        sunday: { open: null, close: null }
      } 
    },
    step3: { services: [] },
    step4: { googleCalendarEnabled: false, outlookCalendarEnabled: false },
    step5: { smsEnabled: false, whatsappEnabled: false, telegramEnabled: false }
  })
  ```
- State `stepIndex` pour la navigation (1-6)
- Validation par étape pour activer/désactiver Next :
  - Étape 1 : ownerName + salonName + email + phone remplis
  - Étape 2 : aucune contrainte (0-7 jours ouverts)
  - Étape 3 : au moins 1 service
  - Étape 4 : au moins un agenda activé
  - Étape 5 : au moins un canal activé
  - Étape 6 : tous les steps complétés
- Reset complet au refresh (pas de persistance)

**Références :**
- `onboarding.ui-contract.md` — Section 3.3, 8.2
- `macro4.support.md` — Section 4.2, 4.3

---

### TODO 11 — Step Titles & Descriptions

**Fichier :** `app/(app)/onboarding/page.tsx` (dans OnboardingWizard)

**Actions :**
- Définir les titres des steps :
  ```typescript
  const stepTitles = [
    "Identité du salon",
    "Horaires",
    "Services",
    "Agenda",
    "Communication",
    "Résumé"
  ]
  ```
- Définir les descriptions des steps (phrases explicatives) :
  ```typescript
  const stepDescriptions = [
    "L'assistant doit pouvoir se présenter, identifier le salon et envoyer des notifications.",
    "L'IA doit connaître les plages horaires pour proposer des rendez-vous valides.",
    "Les services sont indispensables pour que l'IA puisse proposer un rendez-vous.",
    "Synchronisation obligatoire pour éviter les doubles réservations.",
    "L'assistant doit pouvoir envoyer confirmations, rappels, relances.",
    "Vérifiez les informations avant d'activer votre assistant."
  ]
  ```
- Afficher le titre centré en haut selon `stepIndex`
- Afficher la description centrée sous le titre (avant le contenu du step)
- Affichage conditionnel selon `stepIndex`
- Contenu minimal (texte simple, pas de design)

**Références :**
- `onboarding.ui-contract.md` — Section 2.1, Description
- `onboarding.flow.md` — Section 2, Raison d'être de chaque étape

---

### TODO 12 — Tests de Navigation

**Actions :**
- Tester Next/Back fonctionnels sur toutes les étapes
- Tester validation des champs obligatoires (Next disabled si incomplet) :
  - Étape 1 : Next disabled si ownerName/salonName/email/phone vides
  - Étape 3 : Next disabled si aucun service
  - Étape 4 : Next disabled si aucun agenda activé
  - Étape 5 : Next disabled si aucun canal activé
- Tester reset au refresh (wizard réinitialisé, retour étape 1)
- Tester transition vers StepSummary (étape 6)
- Tester redirection vers `/dashboard` depuis StepSummary
- Vérifier que l'état local est bien géré (pas de persistance)
- Vérifier que StepHours gère correctement les inputs vides (null)

**Références :**
- `onboarding.ui-contract.md` — Section 4, 8
- `macro4.support.md` — Section 4.1, 4.2, 4.3

---

## Structure de Fichiers Attendue

```
app/(app)/onboarding/
  ├── page.tsx (OnboardingWizard container)
  ├── WizardFooter.tsx (ou intégré dans page.tsx)
  ├── Timeline.tsx (ou intégré dans page.tsx)
  └── steps/
      ├── StepIdentity.tsx
      ├── StepHours.tsx
      ├── StepServices.tsx
      ├── StepCalendar.tsx
      ├── StepCommunications.tsx
      └── StepSummary.tsx
```

---

## Checklist de Validation

- [ ] Route unique `/onboarding` fonctionne
- [ ] Navigation Next/Back fonctionnelle
- [ ] Timeline affiche les 6 segments
- [ ] Tous les steps s'affichent correctement
- [ ] Titres et descriptions affichés correctement
- [ ] Validation des champs obligatoires fonctionne :
  - [ ] Étape 1 : Next disabled si champs obligatoires vides
  - [ ] Étape 3 : Next disabled si aucun service
  - [ ] Étape 4 : Next disabled si aucun agenda activé
  - [ ] Étape 5 : Next disabled si aucun canal activé
- [ ] StepHours gère correctement les inputs vides (null)
- [ ] StepCalendar utilise des boutons "Activer", pas des checkboxes/toggles
- [ ] StepSummary affiche résumé complet avec CTA
- [ ] Reset au refresh fonctionne
- [ ] Redirection vers `/dashboard` depuis StepSummary fonctionne
- [ ] Aucun design appliqué (structure uniquement)
- [ ] Aucune persistance (state local uniquement)
- [ ] Aucune logique métier avancée

---

**Fin des Todos Exécutifs Phase 4.4**
