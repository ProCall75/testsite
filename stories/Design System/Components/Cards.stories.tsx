import type { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';

const meta: Meta = {
  title: 'Design System/Components/Cards',
  parameters: {
    docs: {
      description: {
        component: 'Le système de cartes du design system Alfred.ai avec tous ses composants et variantes.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

// Stories de base pour chaque composant
export const BasicCard: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Carte basique</CardTitle>
        <CardDescription>
          Une carte simple avec en-tête, contenu et pied de page.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Le contenu principal de la carte va ici. Vous pouvez y placer du texte,
          des images, des boutons ou tout autre élément.
        </p>
      </CardContent>
      <CardFooter>
        <Button size="sm">Action</Button>
      </CardFooter>
    </Card>
  ),
};

export const CardWithImage: Story = {
  render: () => (
    <Card className="w-80">
      <div className="aspect-video bg-gradient-to-br from-primary to-accent rounded-t-lg flex items-center justify-center text-primary-foreground font-medium">
        Image Placeholder
      </div>
      <CardHeader>
        <CardTitle>Carte avec image</CardTitle>
        <CardDescription>
          Carte contenant une image ou une illustration.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Les cartes peuvent contenir des images, des graphiques ou des illustrations
          pour enrichir le contenu.
        </p>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant="ghost" size="sm">Annuler</Button>
        <Button size="sm">Confirmer</Button>
      </CardFooter>
    </Card>
  ),
};

export const CompactCard: Story = {
  render: () => (
    <Card className="w-64">
      <CardContent className="pt-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-medium">
            A
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium">Alfred.ai</div>
            <div className="text-xs text-muted-foreground">Intelligence artificielle</div>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
};

export const StatsCard: Story = {
  render: () => (
    <Card className="w-64">
      <CardHeader className="pb-2">
        <CardDescription>Utilisateurs actifs</CardDescription>
        <CardTitle className="text-2xl">1,234</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-xs text-muted-foreground">
          <span className="text-green-600">+12.5%</span> par rapport au mois dernier
        </div>
      </CardContent>
    </Card>
  ),
};

export const InteractiveCard: Story = {
  render: () => (
    <Card className="w-80 hover:shadow-lg transition-shadow cursor-pointer">
      <CardHeader>
        <CardTitle>Carte interactive</CardTitle>
        <CardDescription>
          Cette carte répond au survol avec des effets visuels.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Les cartes peuvent être rendues interactives avec des effets de survol,
          des transitions et des curseurs.
        </p>
      </CardContent>
    </Card>
  ),
};

// Story complète montrant toutes les utilisations
export const AllCardVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Composants de carte</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>CardHeader</CardTitle>
              <CardDescription>
                Contient le titre et la description de la carte
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-sm font-medium mb-2">CardContent</div>
              <p className="text-sm text-muted-foreground">
                Contient le contenu principal de la carte
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardFooter>
              <div className="text-sm font-medium mb-2">CardFooter</div>
              <p className="text-sm text-muted-foreground">
                Contient les actions ou informations complémentaires
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Exemples d'usage</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Carte produit */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span>🚀</span>
                Fonctionnalité Premium
              </CardTitle>
              <CardDescription>
                Accès aux fonctionnalités avancées
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Analyse avancée</li>
                <li>• Export de données</li>
                <li>• Support prioritaire</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Souscrire</Button>
            </CardFooter>
          </Card>

          {/* Carte statistique */}
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Conversations</CardDescription>
              <CardTitle className="text-2xl">847</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                <span className="text-green-600">+23.1%</span> cette semaine
              </div>
            </CardContent>
          </Card>

          {/* Carte de notification */}
          <Card className="border-l-4 border-l-primary">
            <CardContent className="pt-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold">
                  !
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Mise à jour disponible</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Nouvelle version 2.1.0 disponible
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Tailles et layouts</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="w-full">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Petite carte</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Contenu compact</p>
            </CardContent>
          </Card>

          <Card className="w-full">
            <CardHeader>
              <CardTitle>Moyenne carte</CardTitle>
              <CardDescription>Description plus détaillée</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Contenu avec plus de détails et d'informations
              </p>
            </CardContent>
            <CardFooter>
              <Button size="sm" variant="ghost">Action</Button>
            </CardFooter>
          </Card>

          <Card className="w-full">
            <div className="aspect-video bg-gradient-to-br from-primary to-accent rounded-t-lg flex items-center justify-center text-primary-foreground font-medium">
              Image large
            </div>
            <CardHeader>
              <CardTitle>Grande carte</CardTitle>
              <CardDescription>
                Carte avec image et contenu riche
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Cette carte contient plus d'informations et utilise l'espace disponible
                de manière optimale.
              </p>
              <div className="flex gap-2">
                <Button size="sm" variant="ghost">Annuler</Button>
                <Button size="sm">Confirmer</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-8 p-4 bg-muted rounded-lg">
        <h3 className="text-lg font-semibold text-foreground mb-2">Bonnes pratiques</h3>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Utilisez <code className="px-1 py-0.5 bg-background rounded text-xs">CardHeader</code> pour les titres et descriptions</li>
          <li>• Placez le contenu principal dans <code className="px-1 py-0.5 bg-background rounded text-xs">CardContent</code></li>
          <li>• Réservez <code className="px-1 py-0.5 bg-background rounded text-xs">CardFooter</code> pour les actions</li>
          <li>• Utilisez des bordures colorées pour les notifications importantes</li>
          <li>• Gardez un padding cohérent (p-6 par défaut)</li>
          <li>• Les cartes peuvent être rendues interactives avec des effets de survol</li>
        </ul>
      </div>
    </div>
  ),
};
