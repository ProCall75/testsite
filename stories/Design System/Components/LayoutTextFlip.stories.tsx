import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../../lib/utils/utils';

// Composant LayoutTextFlip - code exact fourni par l'utilisateur
const LayoutTextFlip = ({
  text = "Build Amazing",
  words = ["Landing Pages", "Component Blocks", "Page Sections", "3D Shaders"],
  duration = 3000,
}: {
  text: string;
  words: string[];
  duration?: number;
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <div className="flex items-center">
      <motion.span
        layoutId="subtext"
        className="text-2xl font-bold tracking-tight drop-shadow-lg md:text-4xl mr-4"
      >
        {text}
      </motion.span>

      <motion.span
        layout
        className="relative w-fit overflow-hidden rounded-md bg-white/40 px-4 py-2 font-sans text-2xl font-bold tracking-tight text-amber-900 shadow-sm md:text-4xl dark:bg-neutral-900/40 dark:text-amber-100 backdrop-blur-sm"
        style={{ border: '1px solid hsl(47, 67%, 52%, 0.6)', marginLeft: '5px' }}
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={currentIndex}
            initial={{ y: -40, filter: "blur(10px)" }}
            animate={{
              y: 0,
              filter: "blur(0px)",
            }}
            exit={{ y: 50, filter: "blur(10px)", opacity: 0 }}
            transition={{
              duration: 0.5,
            }}
            className={cn("inline-block whitespace-nowrap")}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </div>
  );
};

const meta: Meta<typeof LayoutTextFlip> = {
  title: 'Design System/Components/LayoutTextFlip',
  component: LayoutTextFlip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Composant de texte animé avec effet de flip entre différents mots. Utilise Framer Motion pour les animations fluides.',
      },
    },
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Texte fixe affiché avant les mots animés',
    },
    words: {
      control: 'object',
      description: 'Tableau des mots qui s\'animent en boucle',
    },
    duration: {
      control: { type: 'number', min: 500, max: 10000, step: 500 },
      description: 'Durée en millisecondes entre chaque changement de mot',
    },
  },
};

export default meta;
type Story = StoryObj<typeof LayoutTextFlip>;

export const Default: Story = {
  args: {
    text: "Build Amazing",
    words: ["Landing Pages", "Component Blocks", "Page Sections", "3D Shaders"],
    duration: 3000,
  },
};

export const AlfredVersion: Story = {
  args: {
    text: "Alfred simplifie votre",
    words: ["accueil", "quotidien", "travail", "organisation"],
    duration: 4000,
  },
};

export const FastAnimation: Story = {
  args: {
    text: "Découvrez",
    words: ["l'innovation", "la technologie", "l'avenir"],
    duration: 1500,
  },
};

export const SlowAnimation: Story = {
  args: {
    text: "Explorez",
    words: ["nos solutions", "nos services", "notre expertise"],
    duration: 5000,
  },
};

export const GlassGoldenVersion: Story = {
  args: {
    text: "Votre",
    words: ["partenaire", "voix", "équipe invisible", "Alfred"],
    duration: 5000,
  },
  render: (args) => (
    <div className="flex flex-col items-center justify-center gap-6 pb-12 text-center bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-950/20 dark:via-yellow-950/20 dark:to-orange-950/20 p-8 rounded-lg">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex items-center">
          <span className="text-2xl font-bold tracking-tight drop-shadow-lg md:text-4xl text-amber-900 dark:text-amber-100 mr-4">
            {args.text}
          </span>
          <span className="relative w-fit overflow-hidden rounded-md bg-white/40 px-4 py-2 font-sans text-2xl font-bold tracking-tight text-amber-900 shadow-sm md:text-4xl dark:bg-neutral-900/40 dark:text-amber-100 backdrop-blur-sm" style={{ border: '1px solid hsl(47, 67%, 52%, 0.6)', marginLeft: '5px' }}>
            <span className="inline-block whitespace-nowrap bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent dark:from-amber-400 dark:to-yellow-400">
              {args.words[Math.floor(Date.now() / (args.duration || 3000)) % args.words.length]}
            </span>
          </span>
        </div>
      </div>
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-amber-400/10 via-yellow-400/10 to-orange-400/10 blur-3xl -z-10"></div>
    </div>
  ),
};