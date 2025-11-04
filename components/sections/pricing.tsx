"use client"

import React from "react"
import { Button } from "../ui/button"
import Link from "next/link"

const pricingTiers = [
  {
    name: "Essentiel",
    description: "Pour indépendants",
    price: "29",
    features: ["1 ligne téléphonique", "Réception 24/7", "Prise de rendez-vous", "Notifications SMS"],
    highlighted: false,
  },
  {
    name: "Pro",
    description: "Pour petites équipes",
    price: "79",
    features: ["Jusqu'à 5 lignes", "Réception 24/7", "Prise de rendez-vous", "Notifications SMS/WhatsApp", "Support prioritaire"],
    highlighted: true,
  },
  {
    name: "Expert",
    description: "Pour entreprises locales",
    price: "149",
    features: ["Lignes illimitées", "Réception 24/7", "Prise de rendez-vous", "Notifications multi-canal", "Support dédié", "API personnalisée"],
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section
      id="tarifs"
      className="relative py-24 px-4 sm:px-6 lg:px-8"
      aria-label="Section tarifs"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-normal leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl mb-6">
            Un tarif simple, sans surprise.
          </h2>
          <p className="text-sm text-gray-600 mt-4">
            Pas de contrat. Résiliation libre.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`glass-nebula-card rounded-[2rem] p-8 ${
                tier.highlighted 
                  ? "ring-2 ring-gold/40 shadow-2xl" 
                  : ""
              }`}
            >
              {/* Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {tier.name}
                </h3>
                <p className="text-sm text-gray-600 mb-6">{tier.description}</p>
                
                {/* Price */}
                <div className="flex items-baseline">
                  <span className="text-5xl font-semibold text-gray-900">{tier.price}€</span>
                  <span className="text-gray-600 ml-2 text-sm">/mois</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                <ul className="space-y-3">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                        className="text-blue mr-3 mt-0.5 flex-shrink-0"
                      >
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <Button
                variant={tier.highlighted ? "glass-primary" : "glass-secondary"}
                className={`w-full mt-6 ${
                  tier.highlighted 
                    ? "bg-gradient-to-r from-gray-900 to-black text-white hover:from-gray-800 hover:to-gray-900" 
                    : ""
                }`}
                asChild
              >
                <Link href="/inscription">
                  {tier.highlighted ? "Commencer maintenant" : "Essayer gratuitement"}
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
