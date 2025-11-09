import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from '../../../components/layout/navbar';
import { useScrollNavbar } from '../../../hooks/use-scroll-navbar';
import { GoldenOrb } from '../../../components/shared/golden-orb';
import { Button } from '../../../components/ui/button';
import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';

// Hook pour détecter le thème (simplifié pour la story)
function useTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      const html = document.documentElement;
      setIsDark(html.classList.contains('dark'));
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  return isDark;
}

const meta: Meta = {
  title: 'Design System/Layout/Header',
  component: Navbar,
  parameters: {
    docs: {
      description: {
        component: 'La barre de navigation principale du design system Alfred.ai avec effet glass et navigation responsive.',
      },
    },
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

// Story de base
export const Default: Story = {
  render: () => <Navbar />,
};

// Story avec différentes largeurs d'écran simulées
export const ResponsiveNavbar: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Navigation responsive</h3>
        <p className="text-muted-foreground mb-6">
          La navbar s'adapte automatiquement selon la taille de l'écran. Sur mobile, les liens de navigation sont masqués.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-md font-medium text-foreground mb-2">Desktop (lg+)</h4>
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-background p-4">
              <Navbar />
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Liens de navigation visibles, boutons CTA côte à côte
          </p>
        </div>

        <div>
          <h4 className="text-md font-medium text-foreground mb-2">Mobile (sm)</h4>
          <div className="border rounded-lg overflow-hidden max-w-sm mx-auto">
            <div className="bg-background p-4">
              <Navbar />
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Liens masqués, boutons CTA empilés verticalement
          </p>
        </div>
      </div>
    </div>
  ),
};

// Story montrant l'effet glass
export const GlassEffect: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Effet glassmorphism</h3>
        <p className="text-muted-foreground mb-6">
          La navbar utilise un effet glass avec backdrop-filter pour créer une apparence translucide élégante.
        </p>
      </div>

      <div className="relative">
        {/* Background pour démontrer l'effet glass */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary opacity-20 rounded-lg" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent rounded-lg" />

        <div className="relative border rounded-lg overflow-hidden">
          <Navbar />
        </div>
      </div>

      <div className="text-sm text-muted-foreground">
        <strong>Effets appliqués :</strong>
        <ul className="mt-2 space-y-1">
          <li>• <code className="px-1 py-0.5 bg-background rounded text-xs">backdrop-filter: blur(20px)</code></li>
          <li>• <code className="px-1 py-0.5 bg-background rounded text-xs">background: rgba(255, 255, 255, 0.25)</code></li>
          <li>• <code className="px-1 py-0.5 bg-background rounded text-xs">border: 1px solid rgba(255, 255, 255, 0.25)</code></li>
        </ul>
      </div>
    </div>
  ),
  parameters: {
    backgrounds: {
      default: 'gradient',
      values: [
        {
          name: 'gradient',
          value: 'linear-gradient(135deg, hsl(47 67% 52% / 0.1), hsl(220 92% 60% / 0.1))',
        },
      ],
    },
  },
};

// Story complète avec documentation
export const CompleteNavbar: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Navbar complète</h3>
        <div className="border rounded-lg overflow-hidden">
          <Navbar />
        </div>
      </div>

      <div>
        <h4 className="text-md font-medium text-foreground mb-4">Structure et composants</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-muted rounded-lg">
            <div className="text-sm font-medium mb-2">Logo</div>
            <div className="text-xs text-muted-foreground">
              GoldenOrb + "alfred.ai" avec effet de survol
            </div>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <div className="text-sm font-medium mb-2">Navigation</div>
            <div className="text-xs text-muted-foreground">
              Liens vers Accueil, Tarifs, Contact (masqués sur mobile)
            </div>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <div className="text-sm font-medium mb-2">Actions</div>
            <div className="text-xs text-muted-foreground">
              Boutons CTA : "Découvrir Alfred" et "Commencer"
            </div>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-md font-medium text-foreground mb-4">Classes CSS utilisées</h4>
        <div className="p-4 bg-muted rounded-lg font-mono text-sm">
          <div className="space-y-1">
            <div><code className="text-primary">glass-navbar</code> - Effet glass principal</div>
            <div><code className="text-primary">fixed top-0 left-0 right-0 z-50</code> - Positionnement</div>
            <div><code className="text-primary">max-w-7xl mx-auto px-4 sm:px-6 lg:px-8</code> - Conteneur responsive</div>
            <div><code className="text-primary">h-16 items-center justify-between</code> - Layout flex</div>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-muted rounded-lg">
        <h3 className="text-lg font-semibold text-foreground mb-2">Caractéristiques techniques</h3>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• <strong>Position :</strong> Fixed en haut de la page avec z-index élevé</li>
          <li>• <strong>Responsive :</strong> Navigation masquée sur mobile (&lt; md)</li>
          <li>• <strong>Glass effect :</strong> Backdrop-filter avec blur et transparence</li>
          <li>• <strong>Accessibilité :</strong> aria-label sur le logo, liens sémantiques</li>
          <li>• <strong>Navigation :</strong> Liens Next.js avec scroll smooth pour les ancres</li>
          <li>• <strong>Boutons CTA :</strong> Variants glass-primary et glass-secondary</li>
        </ul>
      </div>
    </div>
  ),
};

// Hook pour détecter le scroll dans un conteneur spécifique (pour Storybook)
function useContainerScroll(containerRef: React.RefObject<HTMLElement>) {
  const [isScrolled, setIsScrolled] = useState(false);
  const SCROLL_THRESHOLD = 24;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollY = container.scrollTop;
      setIsScrolled(scrollY > SCROLL_THRESHOLD);
    };

    handleScroll();
    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [containerRef]);

  return isScrolled;
}

// Navbar avec comportement de scroll (variante pour la story)
function ScrollableNavbar({ containerRef }: { containerRef: React.RefObject<HTMLElement> }) {
  const isScrolled = useContainerScroll(containerRef);
  const isDark = useTheme();

  const borderColor = isScrolled ? (isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(17, 24, 39, 0.14)') : 'transparent';

  return (
    <nav
      className="fixed left-0 right-0 z-50 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      style={{
        // État initial (scrollY ≤ 24px)
        background: isScrolled ? 'hsl(var(--background) / 0.07)' : 'transparent',
        border: `1px solid ${borderColor}`,
        borderRadius: isScrolled ? '18px' : '0',
        top: isScrolled ? '12px' : '0',
        boxShadow: isScrolled ? '0 4px 16px hsl(0 0% 0% / 0.08)' : 'none',
        backdropFilter: isScrolled ? 'blur(10px) saturate(180%)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(10px) saturate(180%)' : 'none',
        transition: 'background 220ms cubic-bezier(0.22, 1, 0.36, 1), border-color 220ms cubic-bezier(0.22, 1, 0.36, 1), border-radius 220ms cubic-bezier(0.22, 1, 0.36, 1), top 220ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 220ms cubic-bezier(0.22, 1, 0.36, 1), backdrop-filter 220ms cubic-bezier(0.22, 1, 0.36, 1)',
      }}
      aria-label="Navigation principale"
    >
      <div className="flex h-16 items-center justify-between">
        {/* Logo with Mini Orb */}
        <Link
          href="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
          aria-label="alfred.ai - Accueil"
        >
          <GoldenOrb size="mini" />
          <span className="text-xl font-light text-foreground lowercase">
            alfred.ai
          </span>
        </Link>

        {/* Navigation Links - Hidden on mobile, visible on md+ */}
        <div className="hidden md:flex md:items-center md:gap-8">
          <Link
            href="/#fonctionnalites"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Accueil
          </Link>
          <Link
            href="/tarifs"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Tarifs
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Button
            variant="glass-secondary"
            size="sm"
            className="hidden sm:inline-flex text-xs sm:text-sm"
            asChild
          >
            <Link href="/tarifs">Découvrir Alfred</Link>
          </Button>
          <Button
            variant="glass-primary"
            size="sm"
            className="whitespace-nowrap text-xs sm:text-sm px-3 sm:px-4"
            asChild
          >
            <Link href="/inscription">Commencer</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}

// Story avec comportement de scroll
export const ScrollableNavbarStory: Story = {
  render: () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    
    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Navbar avec comportement de scroll</h3>
          <p className="text-muted-foreground mb-6">
            La navbar fond dans le background en haut de page, puis au scroll (après 24px) elle se décollage légèrement (12px), 
            arrondit ses coins (18px) et rend ses bordures visibles. Aucune rétraction horizontale.
          </p>
        </div>

        {/* Conteneur avec contenu scrollable pour tester */}
        <div 
          ref={containerRef}
          className="relative border rounded-lg overflow-hidden" 
          style={{ height: '600px', overflowY: 'auto' }}
        >
          <ScrollableNavbar containerRef={containerRef} />
        
        {/* Contenu de test avec hauteur pour permettre le scroll */}
        <div className="pt-20 px-4 space-y-8">
          <div className="h-screen bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 rounded-lg p-8">
            <h4 className="text-2xl font-semibold mb-4">État initial (scrollY ≤ 24px)</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Fond: 100% transparent</li>
              <li>• Aucune bordure visible (opacité 0)</li>
              <li>• Rayon: 0</li>
              <li>• Collée au haut de page</li>
              <li>• Largeur: pleine largeur</li>
            </ul>
          </div>
          
          <div className="h-screen bg-gradient-to-br from-accent/10 via-primary/10 to-accent/10 rounded-lg p-8">
            <h4 className="text-2xl font-semibold mb-4">État scrolled (scrollY &gt; 24px)</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Décollage du sommet: 12px</li>
              <li>• Coins arrondis: 18px</li>
              <li>• Bordure: 1px visible avec opacité 14% (clair) / 8% (sombre)</li>
              <li>• Fond verre: opacité 7% + backdrop-blur 10px</li>
              <li>• Ombre: halo subtil (y=4px, blur=16px, opacité 8%)</li>
              <li>• Aucune réduction de largeur/hauteur</li>
            </ul>
          </div>
          
          <div className="h-screen bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 rounded-lg p-8">
            <h4 className="text-2xl font-semibold mb-4">Transitions</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Durée: 220ms</li>
              <li>• Courbe: cubic-bezier(0.22, 1, 0.36, 1)</li>
              <li>• Propriétés animées: background, border-color/opacity, border-radius, top, box-shadow</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-muted rounded-lg">
        <h3 className="text-lg font-semibold text-foreground mb-2">Caractéristiques techniques</h3>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• <strong>Seuil de scroll :</strong> 24px</li>
          <li>• <strong>État initial :</strong> Transparent, sans bordure, sans rayon, collée au haut</li>
          <li>• <strong>État scrolled :</strong> Fond verre 7%, bordure visible, coins 18px, décollage 12px</li>
          <li>• <strong>Largeur :</strong> Conserve la pleine largeur à tous les états</li>
          <li>• <strong>Hauteur :</strong> Identique à la navbar existante (h-16)</li>
          <li>• <strong>Bordure light :</strong> rgba(17, 24, 39, 0.14)</li>
          <li>• <strong>Bordure dark :</strong> rgba(255, 255, 255, 0.08)</li>
        </ul>
      </div>
    </div>
    );
  },
  parameters: {
    layout: 'fullscreen',
  },
};
