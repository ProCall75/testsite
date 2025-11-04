"use client"

import React, { useState } from "react"
import { Button } from "../ui/button"
import { GoldenOrb } from "../shared/golden-orb"
import { ChatBar } from "../features/conversation/chat-bar"
import Link from "next/link"

export function Hero() {
  const [isChatActive, setIsChatActive] = useState(false)

  return (
    <section
      className="relative flex min-h-screen items-center justify-center px-4 pt-16 sm:px-6 lg:px-8"
      aria-label="Section principale"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col items-center gap-12 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 xl:gap-20">
          {/* Left Side: Orb + Chat Bar */}
          <div className="flex flex-col items-center gap-6 w-full lg:items-center lg:w-auto">
            <GoldenOrb isActive={isChatActive} />
            <ChatBar onInteraction={setIsChatActive} className="w-full" />
          </div>

          {/* Right Side: Header (Right-aligned) */}
          <div className="flex flex-col items-center text-center w-full lg:items-end lg:text-right lg:w-auto">
            {/* Headline with Fraunces */}
            <h1 className="text-glow font-serif text-4xl font-normal leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Bonjour, je suis Alfred.
            </h1>

            {/* Subheadline */}
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-foreground/70 sm:text-xl md:text-2xl">
              Votre assistant vocal plug-and-play pour TPE et indépendants.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col items-center gap-4 w-full sm:flex-row lg:justify-end lg:w-auto">
              <Button
                variant="glass-blue"
                size="lg"
                className="w-full sm:w-auto px-8 py-6 text-base"
                asChild
              >
                <Link href="/inscription">Discuter de vive voix avec Alfred</Link>
              </Button>
              <Button
                variant="glass-secondary"
                size="lg"
                className="w-full sm:w-auto px-8 py-6 text-base"
                asChild
              >
                <Link href="#fonctionnalites">Découvrir les offres</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

