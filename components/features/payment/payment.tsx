"use client"

import React from "react"
import { Button } from "../../ui/button"
import { Card, CardContent } from "../../ui/card"
import Link from "next/link"

const steps = [
  {
    number: "1",
    title: "Choisir l'offre",
    description: "Sélectionnez le plan adapté à votre activité",
  },
  {
    number: "2",
    title: "Entrer ses infos",
    description: "Créez votre compte en quelques secondes",
  },
  {
    number: "3",
    title: "Activer Alfred",
    description: "Connectez votre numéro et commencez",
  },
]

export function Payment() {
  return (
    <section
      id="paiement"
      className="relative py-24 px-4 sm:px-6 lg:px-8"
      aria-label="Section paiement"
    >
      <div className="mx-auto max-w-4xl">
        <Card className="glass-base border-none p-8 lg:p-12">
          <CardContent className="p-0">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl font-normal leading-tight tracking-tight text-foreground sm:text-5xl mb-6">
                Activation simple en 3 étapes
              </h2>
              <p className="text-foreground/70 text-lg">
                Paiement sécurisé. Zéro frais cachés.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-blue/20 flex items-center justify-center mx-auto mb-4 text-2xl font-semibold text-blue">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-foreground/70">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-4 pt-8 border-t border-foreground/10 mb-8">
              <div className="text-sm text-foreground/60">Paiement sécurisé par</div>
              <div className="text-2xl font-semibold text-foreground/40">Stripe</div>
            </div>
            
            <div className="text-center">
              <Button
                variant="glass-blue"
                size="lg"
                className="px-8 py-6 text-base"
                asChild
              >
                <Link href="/onboarding">Activer mon compte</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

