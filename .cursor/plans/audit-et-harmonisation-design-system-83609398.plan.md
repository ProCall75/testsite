<!-- 83609398-9f5f-4e4c-859d-dd701bb6e95c 46687c51-64fd-4b75-9579-67069e7b6a3c -->
# Audit et harmonisation du design system

## Problèmes identifiés

### 1. tailwind.config.ts

- `background: "#FFF9F2"` et `foreground: "#1A1A1A"` utilisent des valeurs hex hardcodées au lieu de `hsl(var(--background))` et `hsl(var(--foreground))`
- `primary.DEFAULT: "#D4AF37"` et `primary.foreground: "#1A1A1A"` utilisent des valeurs hex au lieu de variables CSS
- `gold` et `blue` sont définis avec des valeurs hex hardcodées (#D4AF37, #3A6FF8, etc.) au lieu de référencer `--primary` et `--accent`
- Les valeurs CSS `:root` dans globals.css ne correspondent pas aux couleurs réellement utilisées (or vs primary actuel)

### 2. globals.css

- Nombreuses valeurs `rgba()` hardcodées dans les classes `.glass-gold`, `.glass-blue`, `.glass-button` (ex: `rgba(212, 175, 55, 0.3)`)
- Variables `--primary` et `--primary-foreground` définies avec des valeurs HSL génériques (0 0% 10%) qui ne correspondent pas aux couleurs or utilisées
- Absence de mode `.dark` alors que `darkMode: ["class"]` est activé dans tailwind.config.ts
- Variables `--glass-gold` et `--glass-blue` non définies mais utilisées dans les gradients
- Variables pour les couleurs gold et blue (HSL) non déclarées dans `:root`

### 3. Composants avec valeurs hardcodées

- `components/shared/golden-orb.tsx` : nombreuses valeurs `rgba(212, 175, 55, ...)`, `rgba(58, 111, 248, ...)`, `rgba(255, 255, 255, ...)` hardcodées
- `components/layout/animated-background.tsx` : valeurs `rgba()` hardcodées dans les gradients SVG
- `components/features/conversation/conversation.tsx` : valeurs `rgba()` et couleur hex `#F5F0E8` hardcodées
- `components/shared/signup.tsx` : valeurs hex Google (`#4285F4`, `#34A853`, etc.) hardcodées (acceptables pour logos externes)

### 4. lib/constants/index.ts

- Fichier vide, aucune centralisation des tokens de design

## Plan de correction

### Phase 1 : Centralisation des tokens dans globals.css

1. Définir toutes les couleurs en HSL dans `:root` :

- `--primary` : convertir #D4AF37 en HSL (or)
- `--primary-foreground` : définir le contraste approprié
- `--background` : convertir #FFF9F2 en HSL
- `--foreground` : convertir #1A1A1A en HSL
- `--accent` : convertir #3A6FF8 en HSL (bleu)
- `--accent-foreground` : contraste approprié
- `--gold-light`, `--gold-dark` : variantes du primary
- `--blue-light`, `--blue-dark` : variantes de l'accent

2. Ajouter les variables pour les effets glass :

- `--glass-gold-base`, `--glass-gold-light`, `--glass-gold-dark` (dérivées de `--primary`)
- `--glass-blue-base`, `--glass-blue-light`, `--glass-blue-dark` (dérivées de `--accent`)
- `--glass-white-opacity-low`, `--glass-white-opacity-mid`, `--glass-white-opacity-high`

3. Créer le mode `.dark` avec des valeurs adaptées
4. Convertir toutes les variables `rgba()` existantes en utilisant `hsl(var(--token) / opacity)`

### Phase 2 : Mise à jour de tailwind.config.ts

1. Remplacer toutes les valeurs hex par des références aux variables CSS :

- `background: "hsl(var(--background))"`
- `foreground: "hsl(var(--foreground))"`
- `primary.DEFAULT: "hsl(var(--primary))"`
- `primary.foreground: "hsl(var(--primary-foreground))"`

2. Supprimer ou migrer `gold` et `blue` vers `primary` et `accent` :

- `gold` → référencer `primary` et ses variantes
- `blue` → référencer `accent` et ses variantes

3. Vérifier que toutes les couleurs du thème référencent des variables CSS

### Phase 3 : Refactorisation des classes utilities dans globals.css

1. Remplacer toutes les valeurs `rgba()` hardcodées dans `.glass-gold` par `hsl(var(--glass-gold-base) / ...)`
2. Remplacer toutes les valeurs `rgba()` hardcodées dans `.glass-blue` par `hsl(var(--glass-blue-base) / ...)`
3. Remplacer les valeurs `rgba()` dans `.glass-button` par des variables CSS
4. Utiliser `hsl(var(--primary) / opacity)` au lieu de `rgba(212, 175, 55, ...)`

### Phase 4 : Refactorisation des composants

1. `golden-orb.tsx` : remplacer tous les `rgba()` par des variables CSS via `style={{ "--custom-color": "hsl(var(--primary) / 0.5)" }}` ou classes Tailwind
2. `animated-background.tsx` : créer des variables CSS pour les gradients SVG et les référencer
3. `conversation.tsx` : remplacer `#F5F0E8` par une variable CSS et toutes les valeurs `rgba()` hardcodées
4. Vérifier tous les autres composants pour les valeurs hardcodées restantes

### Phase 5 : Centralisation dans lib/constants

1. Créer `lib/constants/colors.ts` avec les exports des valeurs HSL brutes (pour référence TypeScript)
2. Créer `lib/constants/tokens.ts` avec les noms de toutes les variables CSS (pour documentation et autocomplétion)

## Résultat attendu

- Aucune valeur de couleur hardcodée dans les composants
- Tous les tokens définis dans `globals.css` et référencés dans `tailwind.config.ts`
- Modification d'une seule variable CSS mise à jour automatiquement partout
- Mode dark fonctionnel avec variables dédiées
- Design system entièrement pilotable par variables CSS
- Tokens typographiques centralisés et synchronisés
- Scripts de validation automatique pour prévenir les régressions
- Composants ShadCN natifs vérifiés et alignés avec le thème global

## Checklist de validation finale

- [ ] Exécuter `npm run validate:theme` - aucune erreur
- [ ] Vérifier que `darkMode: ['class']` fonctionne avec `.dark` dans globals.css
- [ ] Tester la propagation : modifier `--primary` dans globals.css et vérifier que tout le site se met à jour
- [ ] Vérifier que tous les composants ShadCN héritent correctement du thème
- [ ] Aucune valeur hex/rgba dans les composants (sauf exceptions documentées)