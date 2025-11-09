import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../../lib/utils/utils';

// Composant LayoutTextFlip - code exact fourni par l'utilisateur
const LayoutTextFlip = ({
  text = "Votre",
  words = ["partenaire", "voix", "équipe invisible", "Alfred"],
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
    <>
      <motion.span
        layoutId="subtext"
        className="text-2xl font-bold tracking-tight drop-shadow-lg md:text-4xl"
      >
        {text}
      </motion.span>

      <motion.span
        layout
        className="relative w-fit overflow-hidden rounded-md border border-transparent bg-white px-4 py-2 font-sans text-2xl font-bold tracking-tight text-black shadow-sm ring shadow-black/10 ring-black/10 drop-shadow-lg md:text-4xl dark:bg-neutral-900 dark:text-white dark:shadow-sm dark:ring-1 dark:shadow-white/10 dark:ring-white/10"
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
    </>
  );
};

// Composant AppleCardsCarousel intégré directement dans la story
const Carousel = ({ items }: { items: React.ReactNode[] }) => {
  return (
    <div className="w-full">
      <div className="flex w-full gap-4 overflow-x-auto pb-4">
        {items}
      </div>
    </div>
  );
};

const Card = ({ card, index, layout = false }: {
  card: {
    category: string;
    title: string;
    src: string;
    content: React.ReactNode;
  };
  index: number;
  layout?: boolean;
}) => {
  return (
    <div className="group relative h-[500px] w-[350px] shrink-0 overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800">
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-neutral-900/20 to-neutral-900/60" />
      <img
        src={card.src}
        alt={card.title}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-20 p-6">
        <div className="flex h-full flex-col justify-end">
          <div className="space-y-4">
            <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              {card.category}
            </div>
            <h3 className="text-xl font-bold text-white">{card.title}</h3>
            <div className="text-sm text-white/80">
              {card.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const sampleCards = [
  {
    category: "Réception IA",
    title: "Décroche automatiquement",
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=500&fit=crop",
    content: (
      <div className="space-y-2">
        <p className="text-sm">
          Alfred répond à vos appels avec une voix naturelle et professionnelle.
        </p>
      </div>
    ),
  },
  {
    category: "Gestion RDV",
    title: "Agenda intelligent",
    src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=500&fit=crop",
    content: (
      <div className="space-y-2">
        <p className="text-sm">
          Prise, modification et annulation automatique des rendez-vous.
        </p>
      </div>
    ),
  },
  {
    category: "Synchronisation",
    title: "Google Calendar intégré",
    src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop",
    content: (
      <div className="space-y-2">
        <p className="text-sm">
          Synchronisation temps réel avec vos agendas Google.
        </p>
      </div>
    ),
  },
  {
    category: "Notifications",
    title: "Communication auto",
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",
    content: (
      <div className="space-y-2">
        <p className="text-sm">
          SMS, WhatsApp et emails automatiques pour chaque événement.
        </p>
      </div>
    ),
  },
  {
    category: "Sécurité",
    title: "Données européennes",
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=500&fit=crop",
    content: (
      <div className="space-y-2">
        <p className="text-sm">
          Hébergement en Europe avec conformité RGPD complète.
        </p>
      </div>
    ),
  },
  {
    category: "Dashboard",
    title: "Statistiques complètes",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=500&fit=crop",
    content: (
      <div className="space-y-2">
        <p className="text-sm">
          Suivez vos performances avec des métriques détaillées.
        </p>
      </div>
    ),
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center space-y-8 py-16">
      <LayoutTextFlip
        text="Votre"
        words={["partenaire", "voix", "équipe invisible", "Alfred"]}
        duration={3000}
      />

      <div className="max-w-7xl mx-auto px-4">
        <Carousel
          items={sampleCards.map((card, index) => (
            <Card key={index} card={card} index={index} layout={true} />
          ))}
        />
      </div>
    </section>
  );
};

const meta: Meta<typeof FeaturesSection> = {
  title: 'Design System/Sections/FeaturesSection',
  component: FeaturesSection,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Section Features complète intégrant LayoutTextFlip et AppleCardsCarousel. Présente les fonctionnalités d\'Alfred.ai avec animation de texte et carousel interactif.',
      },
    },
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof FeaturesSection>;

export const Default: Story = {
  render: () => <FeaturesSection />,
};
