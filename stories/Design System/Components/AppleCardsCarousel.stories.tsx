import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Carousel, Card } from '@/components/ui/apple-cards-carousel';

const meta: Meta<typeof Carousel> = {
  title: 'Design System/Components/AppleCardsCarousel',
  component: Carousel,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Carousel de cartes inspiré du design Apple avec animations et modal d\'expansion. Supporte le scroll horizontal avec navigation par boutons.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

const sampleCards = [
  {
    category: "Réception IA",
    title: "Décroche automatiquement",
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=500&fit=crop",
    content: (
      <div className="space-y-4">
        <p className="text-lg text-neutral-600 dark:text-neutral-300">
          Alfred répond à vos appels avec une voix naturelle et professionnelle.
        </p>
        <ul className="list-disc list-inside space-y-2 text-neutral-600 dark:text-neutral-300">
          <li>Reconnaissance des clients habitués</li>
          <li>Accès à l'historique des rendez-vous</li>
          <li>Réponses aux questions fréquentes</li>
          <li>Transfert vers humain si nécessaire</li>
        </ul>
      </div>
    ),
  },
  {
    category: "Gestion RDV",
    title: "Agenda intelligent",
    src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=500&fit=crop",
    content: (
      <div className="space-y-4">
        <p className="text-lg text-neutral-600 dark:text-neutral-300">
          Prise, modification et annulation automatique des rendez-vous.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">Solo</h4>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">Pour indépendants</p>
          </div>
          <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">Pro</h4>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">Pour équipes</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    category: "Synchronisation",
    title: "Google Calendar intégré",
    src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop",
    content: (
      <div className="space-y-4">
        <p className="text-lg text-neutral-600 dark:text-neutral-300">
          Synchronisation temps réel avec vos agendas Google.
        </p>
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg text-white">
          <h4 className="font-semibold text-xl mb-2">Mises à jour automatiques</h4>
          <p>Tout changement est immédiatement répercuté côté IA.</p>
        </div>
      </div>
    ),
  },
  {
    category: "Notifications",
    title: "Communication auto",
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",
    content: (
      <div className="space-y-4">
        <p className="text-lg text-neutral-600 dark:text-neutral-300">
          SMS, WhatsApp et emails automatiques pour chaque événement.
        </p>
        <div className="flex flex-wrap gap-2">
          {["Confirmations", "Rappels 24h", "Rappels 2h", "Relances"].map((feature) => (
            <span key={feature} className="px-3 py-1 bg-neutral-200 dark:bg-neutral-700 rounded-full text-sm">
              {feature}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    category: "Sécurité",
    title: "Données européennes",
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=500&fit=crop",
    content: (
      <div className="space-y-4">
        <p className="text-lg text-neutral-600 dark:text-neutral-300">
          Hébergement en Europe avec conformité RGPD complète.
        </p>
        <div className="grid grid-cols-1 gap-4">
          <div className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-green-700 dark:text-green-300">Supabase EU sécurisé</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-blue-700 dark:text-blue-300">Audio chiffré</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span className="text-purple-700 dark:text-purple-300">Historique traçable</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    category: "Dashboard",
    title: "Statistiques complètes",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=500&fit=crop",
    content: (
      <div className="space-y-4">
        <p className="text-lg text-neutral-600 dark:text-neutral-300">
          Suivez vos performances avec des métriques détaillées.
        </p>
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-neutral-50 dark:bg-neutral-800 rounded">
            <span className="text-sm font-medium">Appels reçus</span>
            <span className="text-sm text-neutral-600 dark:text-neutral-400">Tracking temps réel</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-neutral-50 dark:bg-neutral-800 rounded">
            <span className="text-sm font-medium">Taux conversion</span>
            <span className="text-sm text-neutral-600 dark:text-neutral-400">RDV confirmés</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-neutral-50 dark:bg-neutral-800 rounded">
            <span className="text-sm font-medium">Fallback humain</span>
            <span className="text-sm text-neutral-600 dark:text-neutral-400">Seulement si nécessaire</span>
          </div>
        </div>
      </div>
    ),
  },
];

export const Default: Story = {
  args: {
    items: sampleCards.map((card, index) => (
      <Card key={index} card={card} index={index} />
    )),
  },
};

export const WithLayoutAnimation: Story = {
  args: {
    items: sampleCards.map((card, index) => (
      <Card key={index} card={card} index={index} layout={true} />
    )),
  },
};

export const SingleCard: Story = {
  args: {
    items: [
      <Card key={0} card={sampleCards[0]} index={0} />
    ],
  },
};

export const ThreeCards: Story = {
  args: {
    items: sampleCards.slice(0, 3).map((card, index) => (
      <Card key={index} card={card} index={index} />
    )),
  },
};

export const SquareCards: Story = {
  args: {
    items: sampleCards.map((card, index) => (
      <div key={index} className="aspect-square w-56 md:w-96">
        <Card card={card} index={index} layout={true} />
      </div>
    )),
  },
};
