"use client"

import React from "react"
import { Phone, Calendar, MessageSquare, Users, Clock, CheckCircle } from 'lucide-react'
import { motion } from 'motion/react'
import { GoldenOrb } from "@/components/shared/golden-orb"

export function Landing() {
  const features = [
    {
      name: "Réception IA",
      icon: Phone,
      description: "Alfred répond automatiquement aux appels avec une voix naturelle et professionnelle, 24h/24.",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      name: "Agenda intelligent",
      icon: Calendar,
      description: "Prise, modification et annulation automatique des rendez-vous. Synchronisation avec vos outils existants.",
      gradient: "from-green-400 to-green-600"
    },
    {
      name: "Équipe connectée",
      icon: Users,
      description: "Vos collaborateurs reçoivent automatiquement les informations importantes en temps réel.",
      gradient: "from-purple-400 to-purple-600"
    },
    {
      name: "Suivi temps réel",
      icon: Clock,
      description: "Tableau de bord en temps réel avec toutes les métriques importantes de votre activité.",
      gradient: "from-orange-400 to-orange-600"
    },
    {
      name: "Communication multi-canal",
      icon: MessageSquare,
      description: "SMS, WhatsApp, email... Alfred informe vos clients par leur canal préféré.",
      gradient: "from-indigo-400 to-indigo-600"
    },
    {
      name: "Validation automatique",
      icon: CheckCircle,
      description: "Validation automatique des données et détection intelligente d'anomalies.",
      gradient: "from-red-400 to-red-600"
    }
  ]

  return (
    <section
      id="fonctionnalites"
      className="relative py-24 px-4 sm:px-6 lg:px-8"
      aria-label="Section fonctionnalités"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-normal leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl mb-6">
            Alfred répond à vos appels pendant que vous travaillez.
          </h2>
          <p className="text-lg leading-relaxed text-foreground/70 sm:text-xl md:text-2xl max-w-3xl mx-auto">
            Fini les appels manqués : Alfred décroche, prend vos rendez-vous et informe vos clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className="group relative overflow-hidden rounded-lg bg-card p-6 shadow-sm border transition-all hover:shadow-md"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5`} />
              <div className="relative">
                <feature.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Section avec activité récente animée */}
        <div className="mt-24">
          <h3 className="text-3xl font-semibold text-foreground mb-12 text-center">
            Activité récente
          </h3>
          <div className="flex flex-col items-center gap-4">
            {[
              { key: "event-1", title: "Rendez-vous confirmé", subtitle: "Marie Dubois - Demain 14h" },
              { key: "event-2", title: "Appel reçu", subtitle: "Jean Martin - Il y a 2h" },
              { key: "event-3", title: "Message relayé", subtitle: "Sophie Durand - Il y a 5h" },
              { key: "event-4", title: "Rendez-vous créé", subtitle: "Pierre Bernard - Hier" },
            ].map((notification, index) => (
              <motion.div
                key={notification.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 1.5,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100
                }}
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border w-1/3"
              >
                <GoldenOrb size="mini" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{notification.title}</p>
                  <p className="text-xs text-muted-foreground">{notification.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

