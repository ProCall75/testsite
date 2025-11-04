# Audit Storybook - Résultats du nettoyage des composants obsolètes

## Résumé de l'audit

Après analyse complète du codebase, voici les éléments définis dans le code mais **jamais utilisés sur le site réel** :

### Variantes Button non utilisées
- `default` - Style basique bg-primary
- `destructive` - Style rouge
- `outline` - Style avec bordure
- `secondary` - Style bg-secondary
- `link` - Style texte souligné

### Variantes Button utilisées (À CONSERVER)
- `glass-primary` ✅ (utilisé dans navbar, pricing)
- `glass-secondary` ✅ (utilisé partout)
- `glass-blue` ✅ (utilisé partout)
- `ghost` ✅ (utilisé dans dashboard)

## Tableau des éléments à supprimer

| Fichier | Type | État | Raison du retrait | Recommandation |
|---------|------|------|-------------------|----------------|
| `components/ui/button.tsx` | Variante | Obsolète | Style basique non utilisé sur le site | Supprimer variante `default` |
| `components/ui/button.tsx` | Variante | Obsolète | Style rouge non utilisé sur le site | Supprimer variante `destructive` |
| `components/ui/button.tsx` | Variante | Obsolète | Style avec bordure non utilisé sur le site | Supprimer variante `outline` |
| `components/ui/button.tsx` | Variante | Obsolète | Style bg-secondary non utilisé sur le site | Supprimer variante `secondary` |
| `components/ui/button.tsx` | Variante | Obsolète | Style texte souligné non utilisé sur le site | Supprimer variante `link` |
| `app/globals.css` | Token CSS | Inutilisé | Associé à variante destructive supprimée | Supprimer `--destructive` et `--destructive-foreground` |
| `app/globals.css` | Token CSS | Inutilisé | Associé à variante secondary supprimée | Supprimer `--secondary` et `--secondary-foreground` |
| `app/globals.css` | Token CSS | Inutilisé | Variable définie mais jamais utilisée | Supprimer `--glass-shadow` |
| `lib/constants/colors.ts` | Export | Inutilisé | Fonction helper jamais importée | Supprimer `hslToString()` |
| `lib/constants/colors.ts` | Export | Inutilisé | Export jamais utilisé (CSS var utilisée directement) | Supprimer `conversationBg` |
| `lib/constants/tokens.ts` | Référence | Inutilisé | Token supprimé | Supprimer `'glass-shadow'` |
| `tailwind.config.ts` | Configuration | Obsolète | Tokens supprimés | Supprimer références à `--destructive` et `--secondary` |
| `stories/Design System/Components/Buttons.stories.tsx` | Story | Obsolète | Variante supprimée | Supprimer stories pour `Default`, `Destructive`, `Outline`, `Secondary`, `Link` |

## Éléments à conserver

### Tokens CSS utilisés
- `--muted` et `--muted-foreground` (utilisés dans `components/ui/card.tsx`)
- `--popover` et `--popover-foreground` (définis dans Tailwind mais pas utilisés directement)

### Composants actifs
- Toutes les variantes glass (`glass-primary`, `glass-secondary`, `glass-blue`)
- Variante `ghost` (utilisée dans le dashboard)

## Actions recommandées

1. **Supprimer les variantes Button obsolètes** de `components/ui/button.tsx`
2. **Nettoyer les tokens CSS inutilisés** de `app/globals.css`
3. **Supprimer les exports inutilisés** de `lib/constants/colors.ts`
4. **Mettre à jour les fichiers de référence** (`lib/constants/tokens.ts`, `tailwind.config.ts`)
5. **Nettoyer les stories Storybook** pour ne garder que les variantes utilisées

## Impact

- ✅ Aucun composant du thème glass/glow actif ne sera supprimé
- ✅ Tous les éléments utilisés sur le site sont conservés
- ✅ Réduction significative du code mort
- ✅ Design system plus propre et maintenable

## Fichiers impactés par les changements

- `components/ui/button.tsx`
- `app/globals.css`
- `lib/constants/colors.ts`
- `lib/constants/tokens.ts`
- `tailwind.config.ts`
- `stories/Design System/Components/Buttons.stories.tsx`
