import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../../components/ui/button';
import type { ButtonProps } from '../../../components/ui/button';

const meta: Meta<ButtonProps> = {
  title: 'Design System/Components/Buttons',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Le composant Button du design system Alfred.ai avec toutes ses variantes et états.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link', 'glass-primary', 'glass-secondary', 'glass-blue'],
      description: 'Variante visuelle du bouton',
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'icon'],
      description: 'Taille du bouton',
    },
    disabled: {
      control: 'boolean',
      description: 'État désactivé',
    },
    children: {
      control: 'text',
      description: 'Contenu du bouton',
    },
  },
  args: {
    children: 'Button',
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;

// Stories pour chaque variante
export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Bouton par défaut',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Bouton destructif',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Bouton contour',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Bouton secondaire',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Bouton fantôme',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Bouton lien',
  },
};

export const GlassPrimary: Story = {
  args: {
    variant: 'glass-primary',
    children: 'Glass Primary',
  },
};

export const GlassSecondary: Story = {
  args: {
    variant: 'glass-secondary',
    children: 'Glass Secondary',
  },
};

export const GlassBlue: Story = {
  args: {
    variant: 'glass-blue',
    children: 'Glass Blue',
  },
};

// Stories pour les tailles
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4 flex-wrap">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

// Stories pour les états
export const States: Story = {
  render: () => (
    <div className="flex items-center gap-4 flex-wrap">
      <Button>Normal</Button>
      <Button disabled>Désactivé</Button>
    </div>
  ),
};

// Story complète avec toutes les variantes
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Toutes les variantes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-2">
            <div className="text-sm font-medium text-foreground">Default</div>
            <Button variant="default">Default</Button>
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium text-foreground">Destructive</div>
            <Button variant="destructive">Destructive</Button>
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium text-foreground">Outline</div>
            <Button variant="outline">Outline</Button>
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium text-foreground">Secondary</div>
            <Button variant="secondary">Secondary</Button>
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium text-foreground">Ghost</div>
            <Button variant="ghost">Ghost</Button>
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium text-foreground">Link</div>
            <Button variant="link">Link</Button>
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium text-foreground">Glass Primary</div>
            <Button variant="glass-primary">Glass Primary</Button>
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium text-foreground">Glass Secondary</div>
            <Button variant="glass-secondary">Glass Secondary</Button>
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium text-foreground">Glass Blue</div>
            <Button variant="glass-blue">Glass Blue</Button>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Tailles</h3>
        <div className="flex items-center gap-4 flex-wrap">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">États</h3>
        <div className="flex items-center gap-4 flex-wrap">
          <Button>Normal</Button>
          <Button disabled>Désactivé</Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Avec icônes</h3>
        <div className="flex items-center gap-4 flex-wrap">
          <Button size="sm">
            <span className="mr-2">📧</span>
            Email
          </Button>
          <Button>
            <span className="mr-2">🚀</span>
            Commencer
          </Button>
          <Button size="lg">
            <span className="mr-2">⭐</span>
            Favoris
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Boutons icône seulement</h3>
        <div className="flex items-center gap-4 flex-wrap">
          <Button size="icon" variant="outline">
            <span>🔍</span>
          </Button>
          <Button size="icon" variant="ghost">
            <span>⚙️</span>
          </Button>
          <Button size="icon" variant="glass-primary">
            <span>✨</span>
          </Button>
        </div>
      </div>

      <div className="mt-8 p-4 bg-muted rounded-lg">
        <h3 className="text-lg font-semibold text-foreground mb-2">Usage recommandé</h3>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• <code className="px-1 py-0.5 bg-background rounded text-xs">default</code> : Actions principales (CTA)</li>
          <li>• <code className="px-1 py-0.5 bg-background rounded text-xs">glass-primary</code> : Actions importantes avec effet glass</li>
          <li>• <code className="px-1 py-0.5 bg-background rounded text-xs">outline</code> : Actions secondaires</li>
          <li>• <code className="px-1 py-0.5 bg-background rounded text-xs">ghost</code> : Actions tertiaires ou dans des groupes</li>
          <li>• <code className="px-1 py-0.5 bg-background rounded text-xs">destructive</code> : Actions dangereuses (supprimer, etc.)</li>
          <li>• Utilisez <code className="px-1 py-0.5 bg-background rounded text-xs">size="icon"</code> pour les boutons icône uniquement</li>
        </ul>
      </div>
    </div>
  ),
};
