import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta = {
  title: 'Design System/Tokens/Colors',
  parameters: {
    docs: {
      description: {
        component: 'Affiche la palette complète de couleurs du design system Alfred.ai. Toutes les couleurs sont extraites directement depuis globals.css.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

// Color data extracted from globals.css
const colorTokens = {
  // Core theme colors
  background: { light: '47 100% 98%', dark: '0 0% 5%' },
  foreground: { light: '0 0% 10%', dark: '0 0% 98%' },
  card: { light: '0 0% 100%', dark: '0 0% 8%' },
  'card-foreground': { light: '0 0% 10%', dark: '0 0% 98%' },
  popover: { light: '0 0% 100%', dark: '0 0% 8%' },
  'popover-foreground': { light: '0 0% 10%', dark: '0 0% 98%' },
  primary: { light: '47 67% 52%', dark: '47 67% 52%' },
  'primary-foreground': { light: '0 0% 10%', dark: '0 0% 98%' },
  'primary-light': { light: '47 67% 66%', dark: '47 67% 66%' },
  'primary-dark': { light: '47 67% 40%', dark: '47 67% 40%' },
  secondary: { light: '0 0% 96%', dark: '0 0% 15%' },
  'secondary-foreground': { light: '0 0% 10%', dark: '0 0% 98%' },
  muted: { light: '0 0% 96%', dark: '0 0% 15%' },
  'muted-foreground': { light: '0 0% 45%', dark: '0 0% 65%' },
  accent: { light: '220 92% 60%', dark: '220 92% 60%' },
  'accent-foreground': { light: '0 0% 98%', dark: '0 0% 98%' },
  'accent-light': { light: '220 92% 68%', dark: '220 92% 68%' },
  'accent-dark': { light: '220 92% 50%', dark: '220 92% 50%' },
  destructive: { light: '0 84% 60%', dark: '0 84% 60%' },
  'destructive-foreground': { light: '0 0% 98%', dark: '0 0% 98%' },
  border: { light: '0 0% 90%', dark: '0 0% 20%' },
  input: { light: '0 0% 90%', dark: '0 0% 20%' },
  ring: { light: '47 67% 52%', dark: '47 67% 52%' },

  // Glass effect colors
  'glass-bg': { light: '0 0% 100% / 0.35', dark: '0 0% 100% / 0.15' },
  'glass-border': { light: '0 0% 100% / 0.25', dark: '0 0% 100% / 0.15' },

  // Glass gold (derived from primary)
  'glass-gold-base': { light: '47 67% 52% / 0.3', dark: '47 67% 52% / 0.3' },
  'glass-gold-light': { light: '47 67% 66% / 0.2', dark: '47 67% 66% / 0.2' },
  'glass-gold-dark': { light: '47 67% 40% / 0.18', dark: '47 67% 40% / 0.18' },
  'glass-gold-border': { light: '47 67% 52% / 0.6', dark: '47 67% 52% / 0.6' },

  // Glass blue (derived from accent)
  'glass-blue-base': { light: '220 92% 60% / 0.3', dark: '220 92% 60% / 0.3' },
  'glass-blue-light': { light: '220 92% 68% / 0.2', dark: '220 92% 68% / 0.2' },
  'glass-blue-dark': { light: '220 92% 50% / 0.18', dark: '220 92% 50% / 0.18' },
  'glass-blue-border': { light: '220 92% 60% / 0.6', dark: '220 92% 60% / 0.6' },

  // Component specific
  'conversation-bg': { light: '47 30% 96%', dark: '47 30% 96%' },
};

interface ColorSwatchProps {
  name: string;
  hsl: { light: string; dark: string };
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ name, hsl }) => {
  const getHslString = (hslValue: string) => `hsl(${hslValue})`;

  return (
    <div className="flex flex-col gap-2">
      <div className="text-sm font-medium text-foreground">{name}</div>
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col items-center gap-1">
          <div
            className="w-16 h-16 rounded-md border border-border"
            style={{ backgroundColor: getHslString(hsl.light) }}
          />
          <div className="text-xs text-muted-foreground">Light</div>
          <div className="text-xs font-mono text-foreground">{hsl.light}</div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div
            className="w-16 h-16 rounded-md border border-border"
            style={{ backgroundColor: getHslString(hsl.dark) }}
          />
          <div className="text-xs text-muted-foreground">Dark</div>
          <div className="text-xs font-mono text-foreground">{hsl.dark}</div>
        </div>
      </div>
    </div>
  );
};

const ColorPalette: React.FC = () => {
  const categories = {
    'Core Colors': ['background', 'foreground', 'card', 'card-foreground', 'popover', 'popover-foreground'],
    'Brand Colors': ['primary', 'primary-foreground', 'primary-light', 'primary-dark', 'accent', 'accent-foreground', 'accent-light', 'accent-dark'],
    'Semantic Colors': ['secondary', 'secondary-foreground', 'muted', 'muted-foreground', 'destructive', 'destructive-foreground'],
    'Interactive Colors': ['border', 'input', 'ring'],
    'Glass Effects': ['glass-bg', 'glass-border', 'glass-gold-base', 'glass-gold-light', 'glass-gold-dark', 'glass-gold-border', 'glass-blue-base', 'glass-blue-light', 'glass-blue-dark', 'glass-blue-border'],
    'Component Specific': ['conversation-bg'],
  };

  return (
    <div className="space-y-8">
      <div className="text-lg font-semibold text-foreground mb-4">Color Palette</div>
      <p className="text-muted-foreground mb-6">
        Toutes les couleurs sont définies dans globals.css et utilisées via des variables CSS.
        Les valeurs sont en format HSL pour une meilleure accessibilité et maintenabilité.
      </p>

      {Object.entries(categories).map(([category, colors]) => (
        <div key={category} className="space-y-4">
          <h3 className="text-md font-medium text-foreground border-b border-border pb-2">
            {category}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {colors.map((colorName) => (
              <ColorSwatch
                key={colorName}
                name={colorName}
                hsl={colorTokens[colorName as keyof typeof colorTokens]}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export const Overview: Story = {
  render: () => <ColorPalette />,
};
