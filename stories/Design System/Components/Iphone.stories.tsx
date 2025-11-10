import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Iphone } from '@/components/ui/iphone';
import { GoldenOrb } from '@/components/shared/golden-orb';

const meta: Meta<typeof Iphone> = {
  title: 'Design System/Components/Iphone',
  component: Iphone,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Mockup iPhone avec écran personnalisable. Utilisé pour afficher des aperçus d\'applications mobiles.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Iphone>;

// Composant de page d'accueil mobile simple avec l'orbe
function MobileHomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-br from-background via-background/95 to-background/90 p-6">
      {/* Orbe au centre */}
      <div className="mb-8">
        <GoldenOrb size="celestial" variant="celestial" isActive={true} />
      </div>
      
      {/* Titre */}
      <h1 className="text-3xl font-serif font-normal text-foreground mb-2 text-center">
        Alfred
      </h1>
      
      {/* Sous-titre */}
      <p className="text-sm text-foreground/60 text-center mb-8 max-w-[280px]">
        Votre assistant vocal intelligent
      </p>
      
      {/* Indicateur de statut */}
      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 backdrop-blur-sm border border-foreground/10">
        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-xs text-foreground/70">En ligne</span>
      </div>
    </div>
  );
}

export const WithHomePage: Story = {
  render: () => (
    <div className="flex items-center justify-center h-[600px] bg-muted/30 overflow-hidden">
      <div className="relative scale-[0.25] origin-center" style={{ width: 433, height: 888 }}>
        <Iphone />
        <div
          className="absolute z-10 overflow-hidden pointer-events-none"
          style={{
            left: '4.9%',
            top: '2.2%',
            width: '90%',
            height: '95.6%',
            borderRadius: '14.3% / 6.6%',
          }}
        >
          <MobileHomePage />
        </div>
      </div>
    </div>
  ),
};

export const Default: Story = {
  render: () => (
    <div className="h-[600px] w-full max-w-[500px] mx-auto bg-neutral-50 rounded-lg border border-neutral-200 p-8 flex items-center justify-center">
      <div className="w-full max-w-[433px]">
        <Iphone />
      </div>
    </div>
  ),
};

export const WithImage: Story = {
  render: () => (
    <div className="h-[600px] w-full max-w-[500px] mx-auto bg-neutral-50 rounded-lg border border-neutral-200 p-8 flex items-center justify-center">
      <div className="w-full max-w-[433px]">
        <Iphone src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=800&fit=crop" />
      </div>
    </div>
  ),
};
