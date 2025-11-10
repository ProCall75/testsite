import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Confetti, ConfettiButton, ConfettiRef } from '@/components/ui/confetti';

const meta: Meta<typeof Confetti> = {
  title: 'Design System/Components/Confetti',
  component: Confetti,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Effet de confettis utilisant canvas-confetti avec support des formes personnalisées comme les étoiles.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Confetti>;

export const Stars: Story = {
  render: () => {
    const confettiRef = React.useRef<ConfettiRef>(null);

    React.useEffect(() => {
      if (confettiRef.current) {
        const interval = setInterval(() => {
          confettiRef.current?.fire({
            particleCount: 50,
            spread: 50,
            shapes: ['star'],
            colors: ['#FFD700', '#FF69B4', '#00CED1', '#FF6347', '#32CD32'],
          });
        }, 1500);

        return () => clearInterval(interval);
      }
    }, []);

    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-8">
        <h1 className="text-4xl font-bold text-center">Bravo, je suis prêt !</h1>
        <Confetti
          ref={confettiRef}
          manualstart={true}
          options={{
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            shapes: ['star'],
            colors: ['#FFD700', '#FF69B4', '#00CED1', '#FF6347', '#32CD32'],
          }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 1000,
          }}
        />
      </div>
    );
  },
};

export const Basic: Story = {
  render: () => {
    const confettiRef = React.useRef<ConfettiRef>(null);

    React.useEffect(() => {
      if (confettiRef.current) {
        const interval = setInterval(() => {
          confettiRef.current?.fire({
            particleCount: 50,
            spread: 50,
          });
        }, 1500);

        return () => clearInterval(interval);
      }
    }, []);

    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-8">
        <h1 className="text-4xl font-bold text-center">Confettis classiques</h1>
        <Confetti
          ref={confettiRef}
          manualstart={true}
          options={{
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
          }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 1000,
          }}
        />
      </div>
    );
  },
};

export const CustomShapes: Story = {
  render: () => {
    const confettiRef = React.useRef<ConfettiRef>(null);

    React.useEffect(() => {
      if (confettiRef.current) {
        const interval = setInterval(() => {
          confettiRef.current?.fire({
            particleCount: 75,
            spread: 60,
            shapes: ['square', 'circle', 'star'],
            colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'],
          });
        }, 1500);

        return () => clearInterval(interval);
      }
    }, []);

    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-8">
        <h1 className="text-4xl font-bold text-center">Confettis formes mixtes</h1>
        <Confetti
          ref={confettiRef}
          manualstart={true}
          options={{
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            shapes: ['square', 'circle', 'star'],
            colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'],
          }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 1000,
          }}
        />
      </div>
    );
  },
};
