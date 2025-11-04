"use client"

import React from "react"
import { Button } from "../../ui/button"
import { Card, CardContent } from "../../ui/card"
import Link from "next/link"

const onboardingSteps = [
  {
    number: "1️⃣",
    title: "Connectez votre numéro",
    description: "Liez votre ligne téléphonique en quelques clics",
  },
  {
    number: "2️⃣",
    title: "Personnalisez votre message d'accueil",
    description: "Alfred s'adapte à votre ton et votre style",
  },
  {
    number: "3️⃣",
    title: "Alfred commence à répondre",
    description: "C'est tout ! Votre assistant est opérationnel",
  },
]

export function Onboarding() {
  return (
    <section
      id="onboarding"
      className="relative py-24 px-4 sm:px-6 lg:px-8"
      aria-label="Section onboarding"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-normal leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl mb-6">
            Configuration en 3 minutes
          </h2>
          <p className="text-lg leading-relaxed text-foreground/70 sm:text-xl max-w-2xl mx-auto">
            Tout est prêt pour que vous commenciez. Aucune compétence technique requise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {onboardingSteps.map((step, index) => (
            <Card
              key={index}
              className="glass-base border-none p-6"
            >
              <CardContent className="p-0 text-center">
                <div className="text-5xl mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-foreground/70">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="glass-blue"
            size="lg"
            className="px-8 py-6 text-base"
            asChild
          >
            <Link href="/tableau-de-bord">Accéder à mon tableau de bord</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

