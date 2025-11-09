import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '../../../components/layout/footer';

const meta: Meta = {
  title: 'Design System/Layout/Footer',
  component: Footer,
  parameters: {
    docs: {
      description: {
        component: 'Le pied de page du design system Alfred.ai avec liens légaux et branding.',
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
  render: () => <Footer />,
};

// Story avec contexte de page
export const InPageContext: Story = {
  render: () => (
    <div className="min-h-screen flex flex-col">
      {/* Contenu simulé de la page */}
      <main className="flex-1 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Contenu de la page
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Ceci est un exemple de contenu de page pour montrer le footer dans son contexte.
            </p>
            <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground">Zone de contenu</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  ),
};

// Story montrant la structure
export const FooterStructure: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Structure du footer</h3>
        <div className="border rounded-lg overflow-hidden">
          <Footer />
        </div>
      </div>

      <div>
        <h4 className="text-md font-medium text-foreground mb-4">Éléments du footer</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-muted rounded-lg">
            <div className="text-sm font-medium mb-2">Navigation légale</div>
            <div className="text-xs text-muted-foreground">
              Liens vers Conditions, Confidentialité, Contact
            </div>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <div className="text-sm font-medium mb-2">Branding</div>
            <div className="text-xs text-muted-foreground">
              Copyright et signature "Fait pour les pros qui décrochent pas"
            </div>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-md font-medium text-foreground mb-4">Style appliqué</h4>
        <div className="p-4 bg-muted rounded-lg">
          <div className="text-sm font-medium mb-2">Background dégradé</div>
          <div className="text-xs text-muted-foreground mb-2">
            <code className="px-1 py-0.5 bg-background rounded">bg-gradient-to-r from-gold/20 via-transparent to-blue/20</code>
          </div>
          <div className="h-8 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 rounded"></div>
        </div>
      </div>
    </div>
  ),
};

// Story complète avec documentation
export const CompleteFooter: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Footer complet</h3>
        <div className="border rounded-lg overflow-hidden">
          <Footer />
        </div>
      </div>

      <div>
        <h4 className="text-md font-medium text-foreground mb-4">Classes CSS utilisées</h4>
        <div className="p-4 bg-muted rounded-lg font-mono text-sm">
          <div className="space-y-1">
            <div><code className="text-primary">relative py-12 px-4 sm:px-6 lg:px-8</code> - Espacement principal</div>
            <div><code className="text-primary">border-t border-transparent</code> - Bordure supérieure subtile</div>
            <div><code className="text-primary">bg-gradient-to-r from-gold/20 via-transparent to-blue/20</code> - Background dégradé</div>
            <div><code className="text-primary">max-w-7xl mx-auto</code> - Conteneur centré responsive</div>
            <div><code className="text-primary">flex flex-col items-center gap-6 text-center</code> - Layout centré</div>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-md font-medium text-foreground mb-4">Liens de navigation</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg">
            <div className="text-sm font-medium mb-1">Conditions</div>
            <div className="text-xs text-muted-foreground">
              href="#conditions" - Lien d'ancrage vers la section conditions
            </div>
          </div>
          <div className="p-4 border rounded-lg">
            <div className="text-sm font-medium mb-1">Confidentialité</div>
            <div className="text-xs text-muted-foreground">
              href="#confidentialite" - Lien d'ancrage vers la politique de confidentialité
            </div>
          </div>
          <div className="p-4 border rounded-lg">
            <div className="text-sm font-medium mb-1">Contact</div>
            <div className="text-xs text-muted-foreground">
              href="#contact" - Lien d'ancrage vers les informations de contact
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-muted rounded-lg">
        <h3 className="text-lg font-semibold text-foreground mb-2">Caractéristiques techniques</h3>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• <strong>Positionnement :</strong> Footer naturel en bas de page (pas fixed)</li>
          <li>• <strong>Responsive :</strong> Liens flex-wrap pour s'adapter aux petits écrans</li>
          <li>• <strong>Navigation :</strong> Liens d'ancrage pour le scroll smooth interne</li>
          <li>• <strong>Accessibilité :</strong> Liens sémantiques avec hover states</li>
          <li>• <strong>Branding :</strong> Copyright et signature distinctive</li>
          <li>• <strong>Style :</strong> Background dégradé subtil avec transparence</li>
        </ul>
      </div>
    </div>
  ),
};

