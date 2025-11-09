import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from '@/components/ui/button';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';

const meta: Meta<typeof Button> = {
  title: 'Design System/Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Boutons avec variantes glass-primary, glass-secondary, glass-blue et ghost. Système de variants basé sur CVA avec différentes tailles.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['ghost', 'glass-primary', 'glass-secondary', 'glass-blue'],
      description: 'Variante visuelle du bouton',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
      description: 'Taille du bouton',
    },
    disabled: {
      control: 'boolean',
      description: 'État désactivé du bouton',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const GlassPrimary: Story = {
  args: {
    variant: 'glass-primary',
    children: 'Commencer',
  },
};

export const GlassSecondary: Story = {
  args: {
    variant: 'glass-secondary',
    children: 'Découvrir',
  },
};

export const GlassBlue: Story = {
  args: {
    variant: 'glass-blue',
    children: 'Appeler Alfred',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'En savoir plus',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-start">
      <Button variant="glass-primary" size="sm">Petit</Button>
      <Button variant="glass-primary" size="default">Par défaut</Button>
      <Button variant="glass-primary" size="lg">Grand</Button>
      <Button variant="glass-primary" size="icon">📞</Button>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-start">
      <Button variant="glass-primary" disabled>Désactivé</Button>
      <Button variant="glass-secondary" disabled>Désactivé</Button>
      <Button variant="glass-blue" disabled>Désactivé</Button>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="glass-primary">Primary</Button>
      <Button variant="glass-secondary">Secondary</Button>
      <Button variant="glass-blue">Blue</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
};

export const AllVariantsRounded: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="glass-primary" style={{ borderRadius: '12px' }}>Primary</Button>
      <Button variant="glass-secondary" style={{ borderRadius: '12px' }}>Secondary</Button>
      <Button variant="glass-blue" style={{ borderRadius: '12px' }}>Blue</Button>
      <Button variant="ghost" style={{ borderRadius: '12px' }}>Ghost</Button>
    </div>
  ),
};

export const WithHoverBorderGradient: Story = {
  render: () => (
    <div className="m-40 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <span>Alfred AI</span>
      </HoverBorderGradient>
    </div>
  ),
};

