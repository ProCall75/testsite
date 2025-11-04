import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta = {
  title: 'Design System/Tokens/Radius',
  parameters: {
    docs: {
      description: {
        component: 'Affiche les valeurs de border-radius du design system Alfred.ai. Tous les rayons sont définis dans globals.css.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

// Radius tokens from globals.css and Tailwind config
const radiusTokens = {
  // CSS custom properties
  radius: '0.5rem', // --radius

  // Tailwind border-radius utilities (derived from --radius)
  'rounded-sm': 'calc(var(--radius) - 2px)', // 0.375rem
  'rounded': 'var(--radius)', // 0.5rem
  'rounded-md': 'calc(var(--radius) - 2px)', // 0.375rem (same as sm)
  'rounded-lg': 'var(--radius)', // 0.5rem (same as default)
  'rounded-xl': 'calc(var(--radius) + 2px)', // 0.75rem
  'rounded-2xl': 'calc(var(--radius) + 4px)', // 1rem
  'rounded-3xl': 'calc(var(--radius) + 6px)', // 1.5rem
  'rounded-full': '9999px',
};

const radiusExamples = [
  { name: 'rounded-sm', value: 'calc(var(--radius) - 2px)', usage: 'Petits éléments, tags, badges' },
  { name: 'rounded', value: 'var(--radius)', usage: 'Éléments par défaut, boutons, inputs' },
  { name: 'rounded-md', value: 'calc(var(--radius) - 2px)', usage: 'Cartes, conteneurs moyens' },
  { name: 'rounded-lg', value: 'var(--radius)', usage: 'Modals, panels larges' },
  { name: 'rounded-xl', value: 'calc(var(--radius) + 2px)', usage: 'Sections, héros' },
  { name: 'rounded-2xl', value: 'calc(var(--radius) + 4px)', usage: 'Composants spéciaux' },
  { name: 'rounded-3xl', value: 'calc(var(--radius) + 6px)', usage: 'Éléments très arrondis' },
  { name: 'rounded-full', value: '9999px', usage: 'Avatars, indicateurs circulaires' },
];

const RadiusShowcase: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">Système de rayons</h2>
        <p className="text-muted-foreground mb-6">
          Le système de rayons est basé sur une valeur principale (--radius: 0.5rem) définie dans globals.css.
          Toutes les autres valeurs sont calculées relativement à cette base pour maintenir la cohérence.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Variable CSS de base</h3>
        <div className="p-4 bg-muted rounded-lg">
          <code className="text-sm">--radius: {radiusTokens.radius}</code>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Aperçu visuel</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {radiusExamples.map((radius) => (
            <div key={radius.name} className="flex flex-col items-center gap-3">
              <div className="text-sm font-medium text-foreground">{radius.name}</div>
              <div
                className={`w-20 h-20 bg-primary flex items-center justify-center text-primary-foreground text-xs font-medium ${radius.name}`}
              >
                Demo
              </div>
              <div className="text-center">
                <div className="text-xs text-muted-foreground">{radius.value}</div>
                <div className="text-xs text-muted-foreground mt-1 max-w-24">{radius.usage}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Utilisation dans les composants</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="text-md font-medium text-foreground">Boutons</h4>
            <div className="flex gap-2 flex-wrap">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded text-sm font-medium">
                Bouton standard
              </button>
              <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md text-sm font-medium">
                Bouton medium
              </button>
              <button className="px-4 py-2 bg-accent text-accent-foreground rounded-lg text-sm font-medium">
                Bouton large
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-md font-medium text-foreground">Cartes et conteneurs</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-card border rounded-sm">
                <div className="text-sm font-medium">Carte compacte</div>
                <div className="text-xs text-muted-foreground mt-1">Utilise rounded-sm</div>
              </div>
              <div className="p-4 bg-card border rounded">
                <div className="text-sm font-medium">Carte standard</div>
                <div className="text-xs text-muted-foreground mt-1">Utilise rounded (par défaut)</div>
              </div>
              <div className="p-4 bg-card border rounded-lg">
                <div className="text-sm font-medium">Carte large</div>
                <div className="text-xs text-muted-foreground mt-1">Utilise rounded-lg</div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-md font-medium text-foreground">Éléments spéciaux</h4>
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                A
              </div>
              <div className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm">
                Badge circulaire
              </div>
              <div className="w-8 h-8 bg-muted rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-muted rounded-lg">
        <h3 className="text-lg font-semibold text-foreground mb-2">Bonnes pratiques</h3>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Utilisez <code className="px-1 py-0.5 bg-background rounded text-xs">rounded</code> comme valeur par défaut</li>
          <li>• <code className="px-1 py-0.5 bg-background rounded text-xs">rounded-sm</code> pour les éléments compacts</li>
          <li>• <code className="px-1 py-0.5 bg-background rounded text-xs">rounded-lg</code> et plus pour les éléments importants</li>
          <li>• <code className="px-1 py-0.5 bg-background rounded text-xs">rounded-full</code> uniquement pour les avatars et indicateurs</li>
          <li>• Tous les rayons sont calculés depuis <code className="px-1 py-0.5 bg-background rounded text-xs">--radius</code> pour la cohérence</li>
        </ul>
      </div>
    </div>
  );
};

export const Overview: Story = {
  render: () => <RadiusShowcase />,
};
