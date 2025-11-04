import type { Meta, StoryObj } from '@storybook/react';
import { DashboardPreview } from '../../../components/features/dashboard/dashboard-preview';

const meta: Meta = {
  title: 'Design System/Layout/Dashboard',
  component: DashboardPreview,
  parameters: {
    docs: {
      description: {
        component: 'Le tableau de bord du design system Alfred.ai avec aperçu flouté et call-to-action.',
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
  render: () => <DashboardPreview />,
};

// Story montrant l'effet de flou
export const BlurredPreview: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Aperçu flouté du dashboard</h3>
        <p className="text-muted-foreground mb-6">
          Le dashboard-preview montre un aperçu flouté du tableau de bord complet avec un overlay d'appel à l'action.
        </p>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <DashboardPreview />
      </div>

      <div className="text-sm text-muted-foreground">
        <strong>Technique utilisée :</strong>
        <ul className="mt-2 space-y-1">
          <li>• <code className="px-1 py-0.5 bg-background rounded text-xs">blur-sm</code> sur le contenu réel</li>
          <li>• <code className="px-1 py-0.5 bg-background rounded text-xs">pointer-events-none</code> pour désactiver les interactions</li>
          <li>• Overlay avec <code className="px-1 py-0.5 bg-background rounded text-xs">backdrop-blur-sm</code> et glass effect</li>
        </ul>
      </div>
    </div>
  ),
};

// Story avec contexte marketing
export const MarketingContext: Story = {
  render: () => (
    <div className="min-h-screen bg-background">
      {/* Section titre */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Découvrez votre tableau de bord
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Gérez vos conversations, statistiques et rendez-vous depuis une interface intuitive et puissante.
          </p>
        </div>
      </div>

      {/* Dashboard preview */}
      <div className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="aspect-[16/10] bg-muted rounded-2xl overflow-hidden shadow-2xl">
            <DashboardPreview />
          </div>
        </div>
      </div>

      {/* Section fonctionnalités */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Fonctionnalités incluses
            </h2>
            <p className="text-lg text-muted-foreground">
              Tout ce dont vous avez besoin pour gérer efficacement votre activité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Statistiques</h3>
              <p className="text-muted-foreground">
                Suivez vos performances avec des graphiques détaillés et des métriques en temps réel.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Conversations</h3>
              <p className="text-muted-foreground">
                Gérez toutes vos interactions client depuis une interface centralisée.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground text-2xl">📅</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Rendez-vous</h3>
              <p className="text-muted-foreground">
                Planifiez et organisez vos rendez-vous avec un calendrier intégré.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Story complète avec documentation
export const CompleteDashboard: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Dashboard preview complet</h3>
        <div className="border rounded-lg overflow-hidden">
          <DashboardPreview />
        </div>
      </div>

      <div>
        <h4 className="text-md font-medium text-foreground mb-4">Structure technique</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-muted rounded-lg">
            <div className="text-sm font-medium mb-2">Dashboard flouté</div>
            <div className="text-xs text-muted-foreground">
              Le composant Dashboard réel rendu avec blur-sm et pointer-events-none
            </div>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <div className="text-sm font-medium mb-2">Overlay CTA</div>
            <div className="text-xs text-muted-foreground">
              Overlay avec glass effect contenant le message et les boutons d'action
            </div>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-md font-medium text-foreground mb-4">Composants utilisés</h4>
        <div className="p-4 bg-muted rounded-lg">
          <div className="text-sm font-medium mb-2">Boutons CTA</div>
          <div className="text-xs text-muted-foreground space-y-1">
            <div>• <code className="px-1 py-0.5 bg-background rounded">Button variant="glass-blue"</code> - "Voir les offres"</div>
            <div>• <code className="px-1 py-0.5 bg-background rounded">Button variant="glass-secondary"</code> - "S'inscrire"</div>
            <div>• Liens Next.js vers /tarifs et /inscription</div>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-md font-medium text-foreground mb-4">Styles appliqués</h4>
        <div className="p-4 bg-muted rounded-lg font-mono text-sm">
          <div className="space-y-1">
            <div><code className="text-primary">glass-base p-8 rounded-2xl</code> - Container de l'overlay</div>
            <div><code className="text-primary">max-w-md text-center space-y-6</code> - Layout centré</div>
            <div><code className="text-primary">font-serif text-3xl font-normal</code> - Titre principal</div>
            <div><code className="text-primary">backdrop-blur-sm bg-background/40</code> - Overlay translucide</div>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-muted rounded-lg">
        <h3 className="text-lg font-semibold text-foreground mb-2">Objectif marketing</h3>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• <strong>Teasing :</strong> Montrer la valeur sans révéler complètement l'interface</li>
          <li>• <strong>Call-to-action :</strong> Guider vers l'inscription ou les tarifs</li>
          <li>• <strong>Curiosité :</strong> Le flou crée un désir de découvrir le contenu complet</li>
          <li>• <strong>Conversion :</strong> Deux chemins clairs : voir les offres ou s'inscrire directement</li>
          <li>• <strong>Glass effect :</strong> Cohérent avec le design system, élégant et moderne</li>
        </ul>
      </div>
    </div>
  ),
};
