import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Types pour les étapes d'onboarding
type OnboardingStep = {
  id: number;
  title: string;
};

const onboardingSteps: OnboardingStep[] = [
  {
    id: 1,
    title: "Alfred découvre votre métier",
  },
  {
    id: 2,
    title: "Alfred apprend votre ton",
  },
  {
    id: 3,
    title: "Alfred connecte votre agenda",
  },
  {
    id: 4,
    title: "Alfred est prêt",
  },
];

// Composant Timeline Step minimaliste
function TimelineStepItem({
  step,
  isCompleted,
  index,
}: {
  step: OnboardingStep;
  isCompleted: boolean;
  index: number;
}) {
  return (
    <div className="relative flex flex-col items-start flex-1">
      {/* Point de la timeline - cercle simple avec bordure noire */}
      <div className="relative z-10 mb-6">
        <div
          className={`h-3 w-3 rounded-full border border-foreground ${
            isCompleted ? 'bg-foreground' : 'bg-background'
          }`}
          style={{
            borderWidth: '1px',
          }}
        />
      </div>

      {/* Label de l'étape */}
      <div className="text-left w-full">
        <p className="text-sm text-foreground leading-relaxed">{step.title}</p>
      </div>
    </div>
  );
}

// Composant Timeline minimaliste
function OnboardingTimeline({ autoProgress = false }: { autoProgress?: boolean }) {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (autoProgress) {
      const interval = setInterval(() => {
        setActiveStep((prev) => {
          if (prev < onboardingSteps.length - 1) {
            return prev + 1;
          }
          return 0; // Loop back to start
        });
      }, 2500);

      return () => clearInterval(interval);
    }
  }, [autoProgress]);

  return (
    <div className="w-full">
      {/* Timeline horizontale */}
      <div className="relative flex items-start justify-between">
        {/* Ligne horizontale fine - centrée sur les cercles */}
        <div
          className="absolute left-0 right-0 h-px bg-foreground"
          style={{
            top: '6px',
          }}
        />

        {/* Points de la timeline */}
        {onboardingSteps.map((step, index) => (
          <TimelineStepItem
            key={step.id}
            step={step}
            isCompleted={activeStep > index}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

// Composant principal de la section
function OnboardingTimelineSection({ autoProgress = false }: { autoProgress?: boolean }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background"
      aria-label="Entièrement personnalisé"
    >
      <div className="mx-auto max-w-7xl">
        {/* Titre et description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-foreground mb-6">
            Entièrement personnalisé.
          </h2>
          <p className="text-lg sm:text-xl text-foreground/60 max-w-2xl mx-auto font-light">
            Alfred s'adapte à votre manière de travailler — pas l'inverse.
          </p>
        </motion.div>

        {/* Timeline dans un conteneur simple */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative py-12"
        >
          <OnboardingTimeline autoProgress={autoProgress} />
        </motion.div>
      </div>
    </motion.section>
  );
}

const meta: Meta = {
  title: 'Design System/Sections/OnboardingTimeline',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Section "Entièrement personnalisé" avec timeline horizontale minimaliste illustrant les 4 étapes d\'onboarding d\'Alfred. Design épuré avec ligne fine et cercles simples. Composant défini directement dans Storybook (Phase 3.1).',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div className="bg-background">
      <OnboardingTimelineSection autoProgress={true} />
    </div>
  ),
};

export const Static: Story = {
  render: () => (
    <div className="bg-background">
      <OnboardingTimelineSection autoProgress={false} />
    </div>
  ),
};

export const WithBackground: Story = {
  render: () => (
    <div className="bg-gradient-to-br from-background via-background/95 to-background/90">
      <OnboardingTimelineSection autoProgress={true} />
    </div>
  ),
};

export const Accessible: Story = {
  render: () => (
    <div className="bg-background">
      <section
        aria-label="Entièrement personnalisé. Alfred s'adapte à votre manière de travailler — pas l'inverse. Timeline d'onboarding en 4 étapes : découverte du métier, apprentissage du ton, connexion de l'agenda, et finalisation."
        tabIndex={0}
        className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        <OnboardingTimelineSection autoProgress={true} />
      </section>
    </div>
  ),
};

