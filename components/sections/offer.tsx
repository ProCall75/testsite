"use client"

import React from "react"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import Link from "next/link"

const benefits = [
  "Vos appels reçus",
  "Vos clients satisfaits",
  "Vos journées libérées",
]

const testimonials = [
  {
    name: "Marie L.",
    role: "Coiffeuse",
    text: "Alfred répond à mes clients même quand je suis en coupe. C'est un vrai soulagement !",
  },
  {
    name: "Jean M.",
    role: "Garagiste",
    text: "Plus jamais d'appels manqués. Mes clients apprécient la disponibilité 24/7.",
  },
  {
    name: "Sophie D.",
    role: "Esthéticienne",
    text: "L'agenda se remplit automatiquement. Je gagne plusieurs heures par semaine.",
  },
]

export function Offer() {
  return (
    <section
      id="offre"
      className="relative py-24 px-4 sm:px-6 lg:px-8"
      aria-label="Section offre"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="font-serif text-4xl font-normal leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl mb-6">
              Votre assistant vocal, toujours disponible.
            </h2>
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-lg text-foreground/70">
                  <span className="text-blue mr-3 text-2xl">→</span>
                  {benefit}
                </li>
              ))}
            </ul>
            <Button
              variant="glass-blue"
              size="lg"
              className="px-8 py-6 text-base"
              asChild
            >
              <Link href="/paiement">Choisir mon offre</Link>
            </Button>
          </div>
          <div className="glass-base p-8 rounded-2xl">
            <div className="aspect-video bg-gradient-to-br from-blue/20 to-gold/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-foreground/60">Dashboard Alfred</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
            Ce que disent nos clients
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="glass-base border-none p-6"
              >
                <CardContent className="p-0">
                  <p className="text-foreground/70 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-foreground/60">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

