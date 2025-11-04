import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from '../../../components/layout/navbar';

const meta: Meta = {
  title: 'Design System/Layout/Header',
  component: Navbar,
  parameters: {
    docs: {
      description: {
        component: 'La barre de navigation principale du design system Alfred.ai avec effet glass et navigation responsive.',
      },
    },
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

// Story de base
export const Default: Story = {
  render: () => <Navbar />,
};

// Story avec différentes largeurs d'écran simulées
export const ResponsiveNavbar: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Navigation responsive</h3>
        <p className="text-muted-foreground mb-6">
          La navbar s'adapte automatiquement selon la taille de l'écran. Sur mobile, les liens de navigation sont masqués.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-md font-medium text-foreground mb-2">Desktop (lg+)</h4>
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-background p-4">
              <Navbar />
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Liens de navigation visibles, boutons CTA côte à côte
          </p>
        </div>

        <div>
          <h4 className="text-md font-medium text-foreground mb-2">Mobile (sm)</h4>
          <div className="border rounded-lg overflow-hidden max-w-sm mx-auto">
            <div className="bg-background p-4">
              <Navbar />
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Liens masqués, boutons CTA empilés verticalement
          </p>
        </div>
      </div>
    </div>
  ),
};

// Story montrant l'effet glass
export const GlassEffect: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Effet glassmorphism</h3>
        <p className="text-muted-foreground mb-6">
          La navbar utilise un effet glass avec backdrop-filter pour créer une apparence translucide élégante.
        </p>
      </div>

      <div className="relative">
        {/* Background pour démontrer l'effet glass */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary opacity-20 rounded-lg" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent rounded-lg" />

        <div className="relative border rounded-lg overflow-hidden">
          <Navbar />
        </div>
      </div>

      <div className="text-sm text-muted-foreground">
        <strong>Effets appliqués :</strong>
        <ul className="mt-2 space-y-1">
          <li>• <code className="px-1 py-0.5 bg-background rounded text-xs">backdrop-filter: blur(20px)</code></li>
          <li>• <code className="px-1 py-0.5 bg-background rounded text-xs">background: rgba(255, 255, 255, 0.25)</code></li>
          <li>• <code className="px-1 py-0.5 bg-background rounded text-xs">border: 1px solid rgba(255, 255, 255, 0.25)</code></li>
        </ul>
      </div>
    </div>
  ),
  parameters: {
    backgrounds: {
      default: 'gradient',
      values: [
        {
          name: 'gradient',
          value: 'linear-gradient(135deg, hsl(47 67% 52% / 0.1), hsl(220 92% 60% / 0.1))',
        },
      ],
    },
  },
};

// Story complète avec documentation
export const CompleteNavbar: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Navbar complète</h3>
        <div className="border rounded-lg overflow-hidden">
          <Navbar />
        </div>
      </div>

      <div>
        <h4 className="text-md font-medium text-foreground mb-4">Structure et composants</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-muted rounded-lg">
            <div className="text-sm font-medium mb-2">Logo</div>
            <div className="text-xs text-muted-foreground">
              GoldenOrb + "alfred.ai" avec effet de survol
            </div>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <div className="text-sm font-medium mb-2">Navigation</div>
            <div className="text-xs text-muted-foreground">
              Liens vers Accueil, Tarifs, Contact (masqués sur mobile)
            </div>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <div className="text-sm font-medium mb-2">Actions</div>
            <div className="text-xs text-muted-foreground">
              Boutons CTA : "Découvrir Alfred" et "Commencer"
            </div>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-md font-medium text-foreground mb-4">Classes CSS utilisées</h4>
        <div className="p-4 bg-muted rounded-lg font-mono text-sm">
          <div className="space-y-1">
            <div><code className="text-primary">glass-navbar</code> - Effet glass principal</div>
            <div><code className="text-primary">fixed top-0 left-0 right-0 z-50</code> - Positionnement</div>
            <div><code className="text-primary">max-w-7xl mx-auto px-4 sm:px-6 lg:px-8</code> - Conteneur responsive</div>
            <div><code className="text-primary">h-16 items-center justify-between</code> - Layout flex</div>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-muted rounded-lg">
        <h3 className="text-lg font-semibold text-foreground mb-2">Caractéristiques techniques</h3>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• <strong>Position :</strong> Fixed en haut de la page avec z-index élevé</li>
          <li>• <strong>Responsive :</strong> Navigation masquée sur mobile (&lt; md)</li>
          <li>• <strong>Glass effect :</strong> Backdrop-filter avec blur et transparence</li>
          <li>• <strong>Accessibilité :</strong> aria-label sur le logo, liens sémantiques</li>
          <li>• <strong>Navigation :</strong> Liens Next.js avec scroll smooth pour les ancres</li>
          <li>• <strong>Boutons CTA :</strong> Variants glass-primary et glass-secondary</li>
        </ul>
      </div>
    </div>
  ),
};
