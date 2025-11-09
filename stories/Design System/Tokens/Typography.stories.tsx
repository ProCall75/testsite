import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta = {
  title: 'Design System/Tokens/Typography',
  parameters: {
    docs: {
      description: {
        component: 'Affiche la hiérarchie typographique du design system Alfred.ai. Toutes les polices et poids sont extraits directement depuis globals.css.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

// Typography tokens from globals.css
const typographyTokens = {
  fonts: {
    sans: "'Inter', 'SF Pro Display', 'Söhne', 'system-ui', 'sans-serif'",
    serif: "'Fraunces', 'serif'",
  },
  weights: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
};

const sampleTexts = [
  'The quick brown fox jumps over the lazy dog',
  'Alfred.ai - L\'intelligence artificielle au service des pros',
  'Découvrez comment automatiser vos tâches quotidiennes',
  'Une interface élégante et intuitive',
  'Optimisé pour la productivité et l\'efficacité',
];

const headingSizes = [
  { name: 'Heading 1', class: 'text-4xl font-bold', usage: 'Titres principaux de page' },
  { name: 'Heading 2', class: 'text-3xl font-semibold', usage: 'Sous-titres de section' },
  { name: 'Heading 3', class: 'text-2xl font-semibold', usage: 'Titres de composants' },
  { name: 'Heading 4', class: 'text-xl font-medium', usage: 'Sous-titres de composants' },
  { name: 'Heading 5', class: 'text-lg font-medium', usage: 'Labels importants' },
  { name: 'Heading 6', class: 'text-base font-medium', usage: 'Labels secondaires' },
];

const bodySizes = [
  { name: 'Large', class: 'text-lg', usage: 'Texte principal, descriptions' },
  { name: 'Base', class: 'text-base', usage: 'Texte par défaut, contenu' },
  { name: 'Small', class: 'text-sm', usage: 'Texte secondaire, légendes' },
  { name: 'Extra Small', class: 'text-xs', usage: 'Métadonnées, timestamps' },
];

const TypographyShowcase: React.FC = () => {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">Police de caractères</h2>
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground">Sans Serif (Principal)</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Police: {typographyTokens.fonts.sans}
            </p>
            <p className="font-sans text-base text-foreground">
              {sampleTexts[0]}
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground">Serif (Accent)</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Police: {typographyTokens.fonts.serif}
            </p>
            <p className="font-serif text-base text-foreground">
              {sampleTexts[1]}
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">Poids de police</h2>
        <div className="space-y-4">
          {Object.entries(typographyTokens.weights).map(([name, weight]) => (
            <div key={name} className="flex items-center gap-4">
              <div className="w-20 text-sm text-muted-foreground">{name}</div>
              <div className="text-sm text-muted-foreground">{weight}</div>
              <div
                className="flex-1 font-sans"
                style={{ fontWeight: weight }}
              >
                The quick brown fox jumps over the lazy dog
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">Hiérarchie des titres</h2>
        <div className="space-y-6">
          {headingSizes.map((heading, index) => (
            <div key={heading.name} className="space-y-1">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <code className="px-2 py-1 bg-muted rounded text-xs">{heading.class}</code>
                <span>{heading.usage}</span>
              </div>
              <div className={heading.class + ' text-foreground'}>
                {heading.name} - {sampleTexts[index % sampleTexts.length]}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">Corps de texte</h2>
        <div className="space-y-6">
          {bodySizes.map((body, index) => (
            <div key={body.name} className="space-y-1">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <code className="px-2 py-1 bg-muted rounded text-xs">{body.class}</code>
                <span>{body.usage}</span>
              </div>
              <div className={body.class + ' text-foreground'}>
                {sampleTexts[index % sampleTexts.length]}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">Couleurs de texte</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="text-foreground">Texte principal (foreground)</div>
            <div className="text-muted-foreground">Texte secondaire (muted-foreground)</div>
            <div className="text-primary">Texte primaire (primary)</div>
            <div className="text-accent">Texte d'accent (accent)</div>
            <div className="text-destructive">Texte d'erreur (destructive)</div>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-muted rounded-lg">
        <h3 className="text-lg font-semibold text-foreground mb-2">Usage recommandé</h3>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Utilisez <code className="px-1 py-0.5 bg-background rounded text-xs">font-sans</code> pour tout le contenu principal</li>
          <li>• Réservez <code className="px-1 py-0.5 bg-background rounded text-xs">font-serif</code> pour les accents et les titres importants</li>
          <li>• Préférez les poids medium et semibold pour les éléments interactifs</li>
          <li>• Utilisez les classes Tailwind pour la hiérarchie (text-xl, text-lg, etc.)</li>
        </ul>
      </div>
    </div>
  );
};

export const Overview: Story = {
  render: () => <TypographyShowcase />,
};

