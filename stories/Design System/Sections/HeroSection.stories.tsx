import React from "react";
import { Hero } from "@/components/sections/hero";
import { ChatBar } from "@/components/features/conversation/chat-bar";
import { GoldenOrb } from "@/components/shared/golden-orb";

export default {
  title: "Design System/Sections/HeroSection",
  component: Hero,
};

export const Default = {
  render: () => {
    const [isChatActive, setIsChatActive] = React.useState(false);
    const [isChatBarFocused, setIsChatBarFocused] = React.useState(false);

    const handleChatInteraction = (active: boolean) => {
      setIsChatActive(active);
      setIsChatBarFocused(active);
    };

    return (
      <section
        className="relative flex min-h-screen items-center justify-center px-4 pt-16 sm:px-6 lg:px-8"
        aria-label="Section principale"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex flex-col items-center gap-12 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 xl:gap-20">
            {/* Left Side: Orb + Wide Chat Bar */}
            <div className="flex flex-col items-center gap-6 w-full lg:items-center lg:w-auto">
              <div className={`transition-transform duration-300 ${isChatBarFocused ? 'scale-105' : ''}`}>
                <GoldenOrb isActive={isChatActive} />
              </div>
              <ChatBar onInteraction={handleChatInteraction} className="w-full max-w-md" />
            </div>

          {/* Right Side: Header (Left-aligned) */}
          <div className="flex flex-col items-center text-center w-full lg:items-start lg:text-left lg:w-auto">
            <h1 className="text-glow font-serif text-4xl font-normal leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Bonjour, je suis Alfred.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-foreground/70 sm:text-xl md:text-2xl">
              Votre assistant vocal plug-and-play pour TPE et indépendants.
            </p>
          </div>
        </div>
      </div>
    </section>
    );
  },
};