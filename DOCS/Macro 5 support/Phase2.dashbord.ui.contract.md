Voici le document complet, propre, structuré, prêt à coller dans
/DOCS/dashboard.ui-contract.md

Il suit :
	•	les conventions des meilleurs SaaS (Linear, Vercel, Notion, Stripe Dashboard)
	•	les règles du Système Alfred
	•	ton découpage du dashboard
	•	une architecture UI claire, minimaliste, scalable
	•	sans design (Macro 7), uniquement structure technique

⸻

Dashboard UI Contract — Macro 5.2

Version : Macro 5.2 — Architecture UI
Responsabilité : HUMAINE
Périmètre : Structure UI + organisation des pages + conventions de layout
Objectif : Définir l’architecture complète du Dashboard Alfred Reception,
pour que Cursor puisse implémenter en Phase 5.4 sans jamais interpréter.

Aucun style.
Aucun composant shadcn.
Aucune logique métier.
Uniquement structure.

⸻

1. Structure globale

Le Dashboard reposera sur :
	•	Une sidebar verticale (gauche) visible sur toutes les pages du dashboard
	•	Un layout principal (DashboardLayout)
	•	Des pages enfants (Overview, Activity, Services, Integrations, Settings)
	•	Navigation client-side (Next.js App Router)

⸻

2. Routes Dashboard

Arborescence Next.js attendue :

app/
  (app)/
    dashboard/
      layout.tsx         ← Sidebar + conteneur page
      page.tsx           ← Overview
      activity/
        page.tsx
      services/
        page.tsx
      integrations/
        page.tsx
      settings/
        page.tsx         ← Hub vers settings pages

Arborescence Settings (préparation Macro 6) :

app/
  (app)/
    dashboard/
      settings/
        reception/
          page.tsx
        services/
          page.tsx
        team/
          page.tsx
        integrations/
          page.tsx
        assistant/
          page.tsx


⸻

3. Le layout Dashboard : DashboardLayout.tsx

3.1 Rôle
	•	Fournir la structure globale du dashboard
	•	Afficher la sidebar
	•	Rendre le contenu de chaque page enfant

3.2 Structure technique

<body>
  <div className="dashboard-layout">
    <Sidebar />         // Toujours visible
    <main>{children}</main>
  </div>
</body>

3.3 Contraintes
	•	Aucune logique responsive avancée
	•	Aucune animation
	•	Pas de design (component structurel uniquement)
	•	Sidebar fixe, main scrollable

⸻

4. Sidebar — structure officielle

4.1 Composant : Sidebar.tsx

Structure générale :

-------------------------------------
|  Alfred Reception (titre/placeholder)
|
|  DASHBOARD
|   • Overview
|   • Activity
|   • Services
|   • Integrations
|
|  SETTINGS
|   • Salon
|   • Services
|   • Équipe
|   • Intégrations
|   • Assistant IA
|
-------------------------------------

4.2 Structure technique

<aside>
  <nav>
    <ul>
      <li><Link href="/dashboard">Overview</Link></li>
      <li><Link href="/dashboard/activity">Activity</Link></li>
      <li><Link href="/dashboard/services">Services</Link></li>
      <li><Link href="/dashboard/integrations">Integrations</Link></li>
    </ul>

    <ul>
      <li><Link href="/dashboard/settings/reception">Salon</Link></li>
      <li><Link href="/dashboard/settings/services">Services</Link></li>
      <li><Link href="/dashboard/settings/team">Équipe</Link></li>
      <li><Link href="/dashboard/settings/integrations">Intégrations</Link></li>
      <li><Link href="/dashboard/settings/assistant">Assistant IA</Link></li>
    </ul>
  </nav>
</aside>

4.3 Règles
	•	Aucune icône
	•	Aucun style visuel
	•	Hierarchie en 2 sections : Dashboard / Settings
	•	Toujours visible
	•	Active Link géré structurellement (placeholder classe)

⸻

5. Structure des pages

5.1 Overview (/dashboard/page.tsx)

Page principale, utilisant les données mock onboarding.

Structure :

<div>
  <SectionToday />         // Section A
  <SectionRecentActivity />// Section B
  <SectionCallsMini />     // Section C
  <SectionMeetingsMini />  // Section D
  <SectionTeamToday />     // Section E
  <SectionReminders />     // Section F
</div>

Chaque section = composant séparé, sans style, structurel seulement.

⸻

5.2 Activity (/dashboard/activity/page.tsx)

Affiche un fil d’événements linéaire (type Linear/Vercel).

Structure :

<div className="activity-feed">
  <EventItem />        // Appel
  <EventItem />        // Réservation
  <EventItem />        // Relance
  <EventItem />        // Action IA
  ...
</div>

EventItem structure :

<div className="event-item">
  <div className="event-header">[Type] [Horodatage]</div>
  <div className="event-summary">Résumé en une ligne</div>
  <details>
    <summary>Détails</summary>
    <div>Contenu détaillé (durée, statut, play recording placeholder, etc)</div>
  </details>
</div>


⸻

5.3 Services (/dashboard/services/page.tsx)

Structure placeholder :

<h1>Services</h1>
<p>Les services seront affichés ici.</p>


⸻

5.4 Integrations (/dashboard/integrations/page.tsx)

Structure placeholder :

<h1>Intégrations</h1>
<p>Les intégrations actives et futures seront affichées ici.</p>


⸻

5.5 Settings Hub (/dashboard/settings/page.tsx)

Structure :

<h1>Paramètres</h1>
<ul>
  <li><Link href="/dashboard/settings/reception">Salon</Link></li>
  <li><Link href="/dashboard/settings/services">Services</Link></li>
  <li><Link href="/dashboard/settings/team">Équipe</Link></li>
  <li><Link href="/dashboard/settings/integrations">Intégrations</Link></li>
  <li><Link href="/dashboard/settings/assistant">Assistant IA</Link></li>
</ul>


⸻

6. Composants de base attendus

6.1 Sidebar

→ décrit en section 4.

6.2 Layout
	•	Composant global
	•	Structure <aside> + <main>
	•	Aucune logique métier

6.3 Sections Overview

Composants :
	•	SectionToday
	•	SectionRecentActivity
	•	SectionCallsMini
	•	SectionMeetingsMini
	•	SectionTeamToday
	•	SectionReminders

Tous minimalistes, pure structure.

6.4 EventItem

Pour page Activity.

6.5 Aucun composant partagé visuel (design system = Macro 7)

⸻

7. Contraintes strictes
	•	Pas de design
	•	Pas d’icônes
	•	Pas d’animations
	•	Pas de responsive
	•	Pas de graphs
	•	Pas de KPI réels
	•	Navigation client-safe simple
	•	Aucune logique (IA, calendrier, messages, stats…)

Uniquement :
→ structure
→ composants
→ routes
→ navigation

⸻

8. Spécification prête pour Cursor

Ce document est 100 % stable, sans ambiguïté, prêt pour :
	•	Phase 5.3 — Mapping Mock → UI
	•	Phase 5.4 — Implémentation UI minimale

⸻

Souhaites-tu maintenant :
➡️ Le document déjà mis en forme comme fichier Markdown téléchargeable ?
OU
➡️ Passer directement à la Phase 5.3 (Mapping Mock → UI) ?