import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Données de personnalisation
const personalizationOptions = [
  'Ton professionnel',
  'Ton décontracté',
  'Ton amical',
  'Ton formel',
];

// Composant Personalization Section
function PersonalizationSection({ autoProgress = false }: { autoProgress?: boolean }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionClick = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background"
      aria-label="Personnalisation"
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
            Personnalisez Alfred à votre image.
          </h2>
          <p className="text-lg sm:text-xl text-foreground/60 max-w-2xl mx-auto font-light">
            Choisissez le ton et le style qui correspondent à votre activité.
          </p>
        </motion.div>

        {/* Options de personnalisation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="glass-base border-none p-8">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-foreground mb-4">
                Options de personnalisation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                {personalizationOptions.map((option, index) => (
                  <motion.div
                    key={option}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.05 }}
                  >
                    <Button
                      variant={selectedOptions.includes(option) ? 'glass-primary' : 'glass-secondary'}
                      size="sm"
                      onClick={() => handleOptionClick(option)}
                      className="text-sm"
                    >
                      {option}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}

const meta: Meta = {
  title: 'Design System/Sections/PersonalizationSection',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Section de personnalisation avec options interactives. Composant défini directement dans Storybook (Phase 3.1).',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div className="bg-background">
      <PersonalizationSection />
    </div>
  ),
};

export const WithAutoProgress: Story = {
  render: () => (
    <div className="bg-background">
      <PersonalizationSection autoProgress={true} />
    </div>
  ),
};

