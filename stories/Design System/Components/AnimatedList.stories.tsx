import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { motion } from 'motion/react';
import { AnimatedList } from '@/components/ui/animated-list';
import { GoldenOrb } from '@/components/shared/golden-orb';

const meta: Meta<typeof AnimatedList> = {
  title: 'Design System/Components/AnimatedList',
  component: AnimatedList,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A list that animates each item in sequence with a delay. Used to showcase notifications or events on your landing page.',
      },
    },
  },
  argTypes: {
    delay: {
      control: { type: 'number', min: 500, max: 5000, step: 500 },
      description: 'Delay between each item appearance (in ms)',
      defaultValue: 1000,
    },
  },
};

export default meta;
type Story = StoryObj<typeof AnimatedList>;

export const ActivityFeed: Story = {
  args: {
    delay: 1000,
  },
  render: (args) => {
    const notifications = [
      { key: "event-1", title: "Rendez-vous confirmé", subtitle: "Marie Dubois - Demain 14h" },
      { key: "event-2", title: "Appel reçu", subtitle: "Jean Martin - Il y a 2h" },
      { key: "event-3", title: "Message relayé", subtitle: "Sophie Durand - Il y a 5h" },
      { key: "event-4", title: "Rendez-vous créé", subtitle: "Pierre Bernard - Hier" },
    ];

    return (
      <div className="w-full max-w-[350px]">
        <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
          Activité récente
        </h3>
        <div className="flex flex-col gap-4">
          {notifications.map((notification, index) => (
            <motion.div
              key={notification.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 1.5,
                duration: 0.5,
                type: "spring",
                stiffness: 100
              }}
              className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border w-full"
            >
              <GoldenOrb size="mini" />
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{notification.title}</p>
                <p className="text-xs text-muted-foreground">{notification.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  },
};

export const SimpleList: Story = {
  args: {
    delay: 800,
  },
  render: (args) => (
    <AnimatedList {...args}>
      <div key="item-1" className="p-4 bg-card rounded-lg border border-border text-foreground">Premier élément</div>
      <div key="item-2" className="p-4 bg-card rounded-lg border border-border text-foreground">Deuxième élément</div>
      <div key="item-3" className="p-4 bg-card rounded-lg border border-border text-foreground">Troisième élément</div>
      <div key="item-4" className="p-4 bg-card rounded-lg border border-border text-foreground">Quatrième élément</div>
    </AnimatedList>
  ),
};

export const FastAnimation: Story = {
  args: {
    delay: 500,
  },
  render: (args) => (
    <AnimatedList {...args}>
      <div key="fast-1" className="p-3 bg-primary/10 rounded-lg border border-primary/20 text-primary">⚡ Animation rapide</div>
      <div key="fast-2" className="p-3 bg-primary/10 rounded-lg border border-primary/20 text-primary">🚀 Très rapide</div>
      <div key="fast-3" className="p-3 bg-primary/10 rounded-lg border border-primary/20 text-primary">💫 Ultra rapide</div>
    </AnimatedList>
  ),
};
