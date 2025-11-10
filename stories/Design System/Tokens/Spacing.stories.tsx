import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta = {
  title: 'Design System/Tokens/Spacing',
  parameters: {
    docs: {
      description: {
        component: 'Affiche le système d\'espacement du design system Alfred.ai. Tous les espacements utilisent l\'échelle standard de Tailwind CSS.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

// Tailwind spacing scale
const spacingScale = {
  0: '0px',
  0.5: '0.125rem (2px)',
  1: '0.25rem (4px)',
  1.5: '0.375rem (6px)',
  2: '0.5rem (8px)',
  2.5: '0.625rem (10px)',
  3: '0.75rem (12px)',
  3.5: '0.875rem (14px)',
  4: '1rem (16px)',
  5: '1.25rem (20px)',
  6: '1.5rem (24px)',
  7: '1.75rem (28px)',
  8: '2rem (32px)',
  9: '2.25rem (36px)',
  10: '2.5rem (40px)',
  11: '2.75rem (44px)',
  12: '3rem (48px)',
  14: '3.5rem (56px)',
  16: '4rem (64px)',
  20: '5rem (80px)',
  24: '6rem (96px)',
  28: '7rem (112px)',
  32: '8rem (128px)',
  36: '9rem (144px)',
  40: '10rem (160px)',
  44: '11rem (176px)',
  48: '12rem (192px)',
  52: '13rem (208px)',
  56: '14rem (224px)',
  60: '15rem (240px)',
  64: '16rem (256px)',
  72: '18rem (288px)',
  80: '20rem (320px)',
  96: '24rem (384px)',
};

const spacingExamples = [
  { size: 1, name: 'xs', usage: 'Très petits espacements, padding minimal' },
  { size: 2, name: 'sm', usage: 'Petits éléments, espacement interne réduit' },
  { size: 3, name: 'md', usage: 'Espacement par défaut, équilibré' },
  { size: 4, name: 'lg', usage: 'Éléments plus grands, espacement confortable' },
  { size: 6, name: 'xl', usage: 'Sections, espacement généreux' },
  { size: 8, name: '2xl', usage: 'Composants principaux, séparation claire' },
  { size: 12, name: '3xl', usage: 'Sections majeures, espacement large' },
  { size: 16, name: '4xl', usage: 'Pages, espacement très large' },
];

const SpacingShowcase: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">Système d'espacement</h2>
        <p className="text-muted-foreground mb-6">
          Le système d'espacement utilise l'échelle standard de Tailwind CSS, basée sur des multiples de 0.25rem (4px).
          Cette approche garantit la cohérence et la scalabilité de tous les espacements dans l'application.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Échelle complète</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Object.entries(spacingScale).map(([key, value]) => (
            <div key={key} className="flex items-center gap-3 p-3 bg-muted rounded">
              <div className="text-sm font-medium text-foreground w-8">{key}</div>
              <div className="flex-1">
                <div
                  className="bg-primary rounded-sm"
                  style={{ height: `${parseFloat(key) * 4}px`, minHeight: '4px' }}
                />
              </div>
              <div className="text-xs text-muted-foreground text-right">{value}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Recommandations d'usage</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {spacingExamples.map((example) => (
            <div key={example.name} className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="text-sm font-medium text-foreground">
                  {example.name} ({example.size * 4}px)
                </div>
                <div
                  className="bg-primary rounded-sm flex-shrink-0"
                  style={{ width: `${example.size * 4}px`, height: '16px' }}
                />
              </div>
              <div className="text-xs text-muted-foreground">{example.usage}</div>
              <div className="text-xs text-foreground">
                Classes: <code className="px-1 py-0.5 bg-muted rounded">p-{example.size}</code>,{' '}
                <code className="px-1 py-0.5 bg-muted rounded">m-{example.size}</code>,{' '}
                <code className="px-1 py-0.5 bg-muted rounded">gap-{example.size}</code>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Exemples pratiques</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <h4 className="text-md font-medium text-foreground">Padding et marges</h4>
            <div className="space-y-2">
              <div className="p-2 bg-muted rounded">
                <div className="text-sm">Padding petit (p-2)</div>
              </div>
              <div className="p-4 bg-muted rounded">
                <div className="text-sm">Padding moyen (p-4)</div>
              </div>
              <div className="p-6 bg-muted rounded">
                <div className="text-sm">Padding large (p-6)</div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-md font-medium text-foreground">Gap entre éléments</h4>
            <div className="flex gap-2">
              <div className="w-12 h-12 bg-primary rounded"></div>
              <div className="w-12 h-12 bg-primary rounded"></div>
              <div className="w-12 h-12 bg-primary rounded"></div>
            </div>
            <div className="text-xs text-muted-foreground">Gap petit (gap-2)</div>

            <div className="flex gap-4 mt-4">
              <div className="w-12 h-12 bg-accent rounded"></div>
              <div className="w-12 h-12 bg-accent rounded"></div>
              <div className="w-12 h-12 bg-accent rounded"></div>
            </div>
            <div className="text-xs text-muted-foreground">Gap moyen (gap-4)</div>
          </div>

          <div className="space-y-2">
            <h4 className="text-md font-medium text-foreground">Espacement vertical</h4>
            <div className="space-y-2">
              <div className="text-sm">Élément 1</div>
              <div className="text-sm">Élément 2</div>
              <div className="text-sm">Élément 3</div>
            </div>
            <div className="text-xs text-muted-foreground">Espace vertical (space-y-2)</div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Utilisation dans les composants</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-card border rounded-lg">
            <h4 className="text-lg font-medium mb-2">Carte typique</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Utilise p-6 pour le padding principal, mb-2 et mb-4 pour les espacements internes.
            </p>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded text-sm font-medium">
              Action
            </button>
          </div>

          <div className="p-4 bg-card border rounded">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-primary rounded-full"></div>
              <div>
                <div className="text-sm font-medium">Titre</div>
                <div className="text-xs text-muted-foreground">Sous-titre</div>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              Exemple d'espacement cohérent dans un composant compact.
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-muted rounded-lg">
        <h3 className="text-lg font-semibold text-foreground mb-2">Bonnes pratiques</h3>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Utilisez des valeurs paires (2, 4, 6, 8...) pour la cohérence</li>
          <li>• Préférez <code className="px-1 py-0.5 bg-background rounded text-xs">gap-*</code> aux marges pour les flexbox/grid</li>
          <li>• Utilisez <code className="px-1 py-0.5 bg-background rounded text-xs">space-y-*</code> pour les espacements verticaux répétitifs</li>
          <li>• Commencez par les valeurs moyennes (4, 6, 8) et ajustez selon les besoins</li>
          <li>• Maintenez la hiérarchie: petits éléments = petits espacements, grands éléments = grands espacements</li>
        </ul>
      </div>
    </div>
  );
};

export const Overview: Story = {
  render: () => <SpacingShowcase />,
};





