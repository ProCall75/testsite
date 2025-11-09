import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const meta: Meta<typeof Card> = {
  title: 'Design System/Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Composant carte avec Header, Title, Description, Content et Footer. Utilise les tokens du design system pour un style cohérent.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Titre de la carte</CardTitle>
        <CardDescription>Description de la carte</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Contenu de la carte</p>
      </CardContent>
      <CardFooter>
        <Button variant="glass-secondary">Action</Button>
      </CardFooter>
    </Card>
  ),
};

export const GlassCard: Story = {
  render: () => (
    <Card className="glass-base border-none">
      <CardHeader>
        <CardTitle>Titre avec effet glass</CardTitle>
        <CardDescription>Description avec effet glass</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Contenu avec effet glass</p>
      </CardContent>
    </Card>
  ),
};

export const WithContent: Story = {
  render: () => (
    <Card className="glass-base border-none max-w-md">
      <CardHeader>
        <CardTitle className="font-serif text-2xl">Fonctionnalité</CardTitle>
        <CardDescription>Description détaillée de la fonctionnalité</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/70">
          Cette carte présente une fonctionnalité avec un titre, une description et du contenu.
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost">En savoir plus</Button>
        <Button variant="glass-blue">Essayer</Button>
      </CardFooter>
    </Card>
  ),
};

export const Simple: Story = {
  render: () => (
    <Card>
      <CardContent className="pt-6">
        <p>Contenu simple sans header ni footer</p>
      </CardContent>
    </Card>
  ),
};

export const StatsCard: Story = {
  render: () => (
    <Card className="glass-base border-none">
      <CardHeader className="p-0 pb-4">
        <div className="flex items-center justify-between">
          <span className="text-3xl">📞</span>
          <span className="text-sm text-blue font-semibold">+12%</span>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <CardTitle className="text-3xl font-bold text-foreground mb-1">247</CardTitle>
        <CardDescription>Appels reçus</CardDescription>
      </CardContent>
    </Card>
  ),
};



