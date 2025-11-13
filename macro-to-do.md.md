- **Macro 0.5 — Audit & Nettoyage**
    - **Objectif général**
        
     

---

Macro 0.5 — Audit & Nettoyage

🎯 Objectif général

Analyser, assainir et documenter le front Alfred Reception pour repartir d’une base propre, stable et maintenable.
Cette macro constitue le point zéro technique du rebuild et prépare la future architecture (Macro 1).

⚙️ Sortie attendue
	•	Branche GitHub rebuild créée et fonctionnelle
	•	Repo dupliqué et sauvegardé (backup design)
	•	Code nettoyé – conservation unique de la Hero Section
	•	Arborescence réorganisée et configuration validée
	•	Documentation 3C complète de l’état final

⸻

🧩 Phases

Phase 1 — Préparation du chantier

But : Sécuriser le terrain avant toute action sur la base du code.
Pourquoi : Garantir qu’aucune donnée, composant ou référence utile ne soit perdue.
Actions principales :
	•	Créer la branche rebuild depuis le repo actuel.
	•	Dupliquer le projet complet en backup (préserver design si besoin).
	•	Vérifier que GitHub, Cursor et Notion pointent bien vers cette branche.

📋TODO-START Phase 1

1. Vérifier l'état Git actuel
   - Exécuter `git status` pour identifier les modifications non commitées
   - Exécuter `git branch` pour confirmer la branche courante
   - Documenter l'état dans le plan directeur (branche actuelle, modifications en cours)

2. Commit des modifications en cours (si nécessaire)
   - Si modifications non commitées : `git add .` puis `git commit -m "chore: état avant création branche rebuild"`
   - Vérifier que le working directory est propre : `git status` doit retourner "nothing to commit, working tree clean"

3. Créer la branche rebuild depuis main
   - Exécuter `git checkout -b rebuild` (ou `git switch -c rebuild`)
   - Vérifier la création : `git branch` doit afficher `* rebuild`
   - Push la branche sur origin : `git push -u origin rebuild`
   - Documenter dans le plan : branche rebuild créée et poussée sur origin

4. Dupliquer le repo en backup design
   - Identifier le chemin du repo parent (ex: `/Users/marwane/testsite/`)
   - Créer un nouveau dossier : `../testsite-design-backup` (ou nom équivalent)
   - Cloner le repo complet dans ce dossier : `git clone <url-repo> ../testsite-design-backup`
   - Vérifier que le clone est complet : comparer les HEAD commits (`git log --oneline -1` dans les deux repos doivent être identiques)
   - Documenter le chemin du backup dans le plan directeur

5. Vérifier la configuration GitHub
   - Exécuter `git remote -v` pour confirmer l'URL du remote origin
   - Vérifier sur GitHub.com que la branche `rebuild` existe et est à jour
   - Documenter l'URL du repo GitHub dans le plan

6. Vérifier la configuration Cursor
   - Confirmer que Cursor pointe vers le workspace `/Users/marwane/testsite/testsite`
   - Vérifier que les règles Cursor (cursorrules/*.mdc) sont présentes et actives
   - Contrôler l'intégrité des rules : vérifier que core.global.mdc, cursor.rules.todo.directive.mdc et cursor.rules.contextual.realignement.mdc sont lisibles et non vides
   - Documenter l'état des règles actives dans le plan

7. Validation finale de la Phase 1
   - Exécuter `git log --oneline -5` pour vérifier l'historique récent
   - Exécuter `git branch -a` pour confirmer la présence de `remotes/origin/rebuild`
   - Vérifier que le backup existe et est accessible
   - Produire un résumé 3C : Context (état initial) / Command (actions exécutées) / Check (vérifications)

📋TODO-END Phase 1

✅ Validation humaine requise avant implémentation.

⸻

Phase 2 — Audit de la structure projet

But : Comprendre l’organisation réelle du code et de l’application.
Pourquoi : Identifier les points de rupture, redondances et zones à préserver.
Actions principales :
	•	Cartographier src/ et les routes Next.js 14.
	•	Lister composants, layouts, hooks, providers, assets.
	•	Identifier les zones obsolètes ou instables.

⸻

Phase 3 — Audit des dépendances & configuration

But : Évaluer la cohérence technique du socle (packages, versions, scripts).
Pourquoi : Prévenir les conflits et garantir un socle à jour et cohérent.
Actions principales :
	•	Vérifier versions : Next.js, TypeScript, Tailwind, PostCSS, Supabase SDK.
	•	Examiner scripts NPM, tsconfig, eslint, tailwind.config.
	•	Identifier doublons, dépendances inutiles ou incohérentes.

⸻

Phase 4 — Nettoyage des fichiers obsolètes

But : Éliminer le superflu pour repartir d’une base minimale propre.
Pourquoi : Réduire la dette technique et conserver uniquement la Hero Section.
Actions principales :
	•	Supprimer composants, pages et assets non essentiels.
	•	Conserver la Hero Section comme référence visuelle.
	•	Vérifier que la compilation reste fonctionnelle après nettoyage.

⸻

Phase 5 — Reconfiguration de la base de code

But : Réorganiser le projet et réaligner toutes les configurations.
Pourquoi : Rétablir la cohérence interne après le nettoyage.
Actions principales :
	•	Réorganiser les dossiers (components, lib, hooks, styles).
	•	Corriger imports/exports et alias (@/, ~).
	•	Vérifier compilation complète et cohérence structurelle.

⸻

Phase 6 — Stabilisation & Documentation

But : Valider la stabilité du code et documenter la nouvelle base.
Pourquoi : Laisser une trace claire pour les macros suivantes.
Actions principales :
	•	Générer le résumé 3C global de la macro.
	•	Documenter l’arborescence finale et les décisions techniques.
	•	Vérifier build complet (npm run build).
	•	Préparer la transition vers la Macro 1 — Architecture & Structure Globale.

⸻


---

- **Macro 2 — Contrats d’API & Mock Data**
    - **Objectif général**
        
        La **Macro 2** établit la couche contractuelle du front.
        
        Elle garantit que les types, schémas et données factices reflètent exactement la structure Flood v3.6.
        
        Cette macro :
        
        - dérive les types et interfaces à partir du schéma Supabase ;
        - génère les mock data pour chaque domaine fonctionnel ;
        - teste la compilation et la cohérence des types sans backend réel.
        
        🎯 **Rôle pour le front :**
        
        Elle permet de simuler intégralement le produit et d’avancer sur le design sans dépendre du backend.
        

---

- **Macro 3 — Authentification (mockée Supabase)**
    - **Objectif général**
        
        La **Macro 3** implémente le système d’accès et de protection utilisateur.
        
        Elle prépare la logique d’authentification à partir des outils Supabase, en mode mocké.
        
        Cette macro :
        
        - intègre le SDK Supabase et les flux signup/login/logout ;
        - met en place la redirection selon l’état d’authentification ;
        - prépare le terrain pour une future connexion réelle.
        
        🎯 **Rôle pour le front :**
        
        Elle garantit que le routage et la sécurité utilisateur fonctionnent avant d’introduire des données réelles.
        

---

- **Macro 4 — Onboarding (mock data)**
    - **Objectif général**
        
        La **Macro 4** construit le flux d’installation et de configuration du client.
        
        Elle guide l’utilisateur dans la création de son “cerveau IA” à partir des mock data.
        
        Cette macro :
        
        - conçoit le wizard multi-étapes (infos, services, équipe, validation) ;
        - relie chaque étape aux données simulées Supabase ;
        - valide l’expérience utilisateur en mode déconnecté.
        
        🎯 **Rôle pour le front :**
        
        Elle permet de tester et d’itérer sur l’expérience d’onboarding avant intégration réelle.
        

---

- **Macro 5 — Dashboard (mock data)**
    - **Objectif général**
        
        La **Macro 5** met en place le cœur visuel du produit : le tableau de bord.
        
        Elle représente l’activité du salon ou de l’équipe en données simulées.
        
        Cette macro :
        
        - définit le layout principal (sidebar, header, overview) ;
        - affiche les cartes et métriques à partir des mocks ;
        - valide la lisibilité et la structure du dashboard.
        
        🎯 **Rôle pour le front :**
        
        Elle concrétise la promesse produit d’Alfred Reception et sert de base pour la future intégration data réelle.
        

---

- **Macro 6 — Settings & Équipe (mock data)**
    - **Objectif général**
        
        La **Macro 6** gère la personnalisation et la configuration utilisateur.
        
        Elle simule la gestion des profils, préférences et équipes à partir des mock data.
        
        Cette macro :
        
        - construit les pages profil et préférences ;
        - simule la logique multi-membres Solo ↔ Pro ;
        - valide les permissions et rôles au niveau front.
        
        🎯 **Rôle pour le front :**
        
        Elle structure l’administration utilisateur et prépare les logiques d’équipe réelles.
        

---

- **Macro 7 — Design System & Identité Visuelle**
    - **Objectif général**
        
        La **Macro 7** formalise l’identité visuelle d’Alfred Reception.
        
        Elle consolide le design system et centralise tous les composants UI.
        
        Cette macro :
        
        - définit les fondations visuelles (palette, typographies, radius, motion) ;
        - intègre le design system dans Storybook ;
        - harmonise le rendu sur l’ensemble du front.
        
        🎯 **Rôle pour le front :**
        
        Elle apporte cohérence et continuité visuelle avant passage à la data réelle.
        

---

- **Macro 7.5 — Connexion Réelle & QA**
    - **Objectif général**
        
        La **Macro 7.5** connecte le front à Supabase et valide les flux réels.
        
        Elle transforme les mocks en requêtes et synchronisations réelles.
        
        Cette macro :
        
        - remplace les données simulées par des queries Supabase ;
        - vérifie les RLS et la cohérence des flux ;
        - exécute une QA complète sur le parcours utilisateur.
        
        🎯 **Rôle pour le front :**
        
        Elle certifie la stabilité du produit et clôt la phase technique.
        

---

- **Macro 8 — Landing, Marketing & SEO**
    - **Objectif général**
        
        La **Macro 8** développe la vitrine publique du produit.
        
        Elle met en avant l’offre et optimise la conversion.
        
        Cette macro :
        
        - crée les pages marketing (hero, features, pricing, contact) ;
        - intègre le SEO technique et les formulaires reliés à Supabase ;
        - unifie le ton visuel entre landing et produit.
        
        🎯 **Rôle pour le front :**
        
        Elle relie la couche marketing à l’expérience utilisateur et sert d’entrée principale au produit.
        

---

- **Macro 9 — Tests & Validation**
    - **Objectif général**
        
        La **Macro 9** évalue la robustesse du front.
        
        Elle s’assure que chaque flux utilisateur et chaque composant fonctionnent sans erreur.
        
        Cette macro :
        
        - implémente les tests unitaires (Vitest) et E2E (Playwright) ;
        - valide les performances via Lighthouse ;
        - garantit la fiabilité avant production.
        
        🎯 **Rôle pour le front :**
        
        Elle transforme le projet en produit vérifié, maintenable et prêt à déployer.
        

---

- **Macro 10 — Monitoring & Observabilité**
    - **Objectif général**
        
        La **Macro 10** implémente la supervision du produit en production.
        
        Elle fournit les outils d’analyse et de suivi nécessaires à la maintenance continue.
        
        Cette macro :
        
        - intègre LogRocket, Sentry, PostHog, GA4 et Meta Pixel ;
        - crée le tableau de bord interne d’usage et d’incidents ;
        - garantit traçabilité et amélioration continue.
        
        🎯 **Rôle pour le front :**
        
        Elle prolonge la stabilité du produit après lancement et fournit la base de mesure pour les itérations futures.