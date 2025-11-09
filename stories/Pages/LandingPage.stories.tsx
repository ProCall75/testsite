import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Hero } from "../../components/sections/hero";
import { Footer } from "../../components/layout/footer";
import { Button } from "../../components/ui/button";
import { GoldenOrb } from "../../components/shared/golden-orb";
import { Carousel, Card } from "../../components/ui/apple-cards-carousel";

// Import du composant LayoutTextFlip depuis les stories
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
    <div className="flex items-center justify-center">
      <span className="text-3xl font-semibold tracking-tight drop-shadow-lg mr-4 font-[Fraunces]">
        {text}
      </span>

      <span
        className="relative w-fit overflow-hidden rounded-md bg-white/40 px-4 py-2 font-sans text-3xl font-semibold tracking-tight text-amber-900 shadow-sm dark:bg-neutral-900/40 dark:text-amber-100 backdrop-blur-sm"
        style={{ border: '1px solid hsl(47, 67%, 52%, 0.6)', marginLeft: '5px' }}
      >
        <span className="inline-block whitespace-nowrap bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent dark:from-amber-400 dark:to-yellow-400">
          {words[currentIndex]}
        </span>
      </span>
    </div>
  );
};

// Import du composant ScrollableNavbar du Header.stories.tsx
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

function ScrollableNavbar({ containerRef }: { containerRef: React.RefObject<HTMLElement> }) {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const SCROLL_THRESHOLD = 24;
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
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

  React.useEffect(() => {
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

  const borderColor = isScrolled ? (isDark ? 'hsl(var(--border) / 0.08)' : 'hsl(var(--border) / 0.14)') : 'transparent';

  return (
    <nav
      className="fixed left-0 right-0 z-50 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      style={{
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
        <a
          href="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
          aria-label="alfred.ai - Accueil"
        >
          <GoldenOrb size="mini" />
          <span className="text-xl font-light text-foreground lowercase">
            alfred.ai
          </span>
        </a>

        {/* Navigation Links - Hidden on mobile, visible on md+ */}
        <div className="hidden md:flex md:items-center md:gap-8">
          <a
            href="/#fonctionnalites"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Accueil
          </a>
          <a
            href="/tarifs"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Tarifs
          </a>
          <a
            href="/#contact"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Contact
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Button
            variant="ghost"
            size="sm"
            className="hidden sm:inline-flex"
            style={{ borderRadius: '12px' }}
          >
            Découvrir Alfred
          </Button>
          <Button
            variant="glass-primary"
            size="sm"
            style={{ borderRadius: '12px' }}
          >
            Commencer
          </Button>
        </div>
      </div>
    </nav>
  );
}

const meta: Meta = {
  title: "Pages/Landing",
  component: Hero,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    return (
      <div className="space-y-0">
        {/* Conteneur scrollable pour reproduire le contexte de Header.stories.tsx */}
        <div
          ref={containerRef}
          className="relative"
          style={{ height: '100vh', overflowY: 'auto' }}
        >
          <ScrollableNavbar containerRef={containerRef} />

          {/* Hero Section */}
          <Hero />

          {/* Espace vertical pour permettre beaucoup de scroll */}
          <div className="py-32 space-y-32">
            <div className="h-screen bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-lg mx-4 p-8">
              <h2 className="text-3xl font-semibold mb-4 text-center">Espace pour contenu futur</h2>
              <p className="text-muted-foreground text-center max-w-2xl mx-auto">
                Cette section peut accueillir du contenu additionnel pour la landing page.
                Utilisez cet espace pour tester différentes combinaisons de sections.
              </p>
            </div>

            <div className="h-screen bg-gradient-to-br from-accent/5 via-primary/5 to-accent/5 rounded-lg mx-4 p-8">
              <div className="text-center mb-8">
                <LayoutTextFlip
                  text="Alfred simplifie votre"
                  words={["accueil", "quotidien", "travail", "organisation"]}
                  duration={4000}
                />
              </div>
              <div className="max-w-7xl mx-auto">
                <Carousel
                  items={sampleCards.map((card, index) => (
                    <Card key={index} card={card} index={index} layout={true} />
                  ))}
                />
              </div>
            </div>

            <div className="h-screen bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-lg mx-4 p-8">
              <h2 className="text-3xl font-semibold mb-4 text-center">Espace de développement</h2>
              <p className="text-muted-foreground text-center max-w-2xl mx-auto">
                Réservé pour les futures sections de la landing page définitive.
                Testez ici différentes idées de contenu.
              </p>
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    );
  },
};
