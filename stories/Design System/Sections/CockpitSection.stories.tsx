import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Dashboard } from '@/components/features/dashboard/dashboard';
import { DashboardPreview } from '@/components/features/dashboard/dashboard-preview';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Composant Dashboard adapté pour le mockup (Phase 3.1)
function DashboardInMockup({ initialVariant, onVariantChange }: { initialVariant?: 'solo' | 'equipe'; onVariantChange?: (variant: 'solo' | 'equipe') => void }) {
  const [variant, setVariant] = useState<'solo' | 'equipe'>(initialVariant || 'solo');

  useEffect(() => {
    if (initialVariant) {
      setVariant(initialVariant);
    }
  }, [initialVariant]);

  const handleVariantChange = (value: string) => {
    const newVariant = value as 'solo' | 'equipe';
    setVariant(newVariant);
    onVariantChange?.(newVariant);
  };

  return (
    <div className="w-full">
      {/* Tabs pour switcher entre solo/équipe */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => handleVariantChange('solo')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            variant === 'solo'
              ? 'bg-primary text-primary-foreground'
              : 'bg-background text-foreground/70 hover:bg-accent'
          }`}
        >
          Solo
        </button>
        <button
          onClick={() => handleVariantChange('equipe')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            variant === 'equipe'
              ? 'bg-primary text-primary-foreground'
              : 'bg-background text-foreground/70 hover:bg-accent'
          }`}
        >
          Équipe
        </button>
      </div>

      {/* Dashboard selon le variant */}
      <div className="glass-base rounded-xl p-6 border border-foreground/10">
        {variant === 'solo' ? (
          <DashboardPreview />
        ) : (
          <Dashboard />
        )}
      </div>
    </div>
  );
}

// Composant Cockpit Section
function CockpitSection({ autoProgress = false }: { autoProgress?: boolean }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [variant, setVariant] = useState<'solo' | 'equipe'>('solo');

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background"
      aria-label="Cockpit Dashboard"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-foreground mb-6">
            Votre cockpit en un coup d'œil.
          </h2>
          <p className="text-lg sm:text-xl text-foreground/60 max-w-2xl mx-auto font-light">
            Gérez vos appels, rendez-vous et messages depuis un tableau de bord intuitif.
          </p>
        </motion.div>

        {/* Dashboard avec tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <DashboardInMockup initialVariant={variant} onVariantChange={setVariant} />
        </motion.div>
      </div>
    </motion.section>
  );
}

const meta: Meta = {
  title: 'Design System/Sections/CockpitSection',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Section Cockpit avec dashboard interactif et tabs pour switcher entre solo/équipe. Composant défini directement dans Storybook (Phase 3.1).',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div className="bg-background">
      <CockpitSection />
    </div>
  ),
};

export const WithAutoProgress: Story = {
  render: () => (
    <div className="bg-background">
      <CockpitSection autoProgress={true} />
    </div>
  ),
};

