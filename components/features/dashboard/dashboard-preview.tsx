"use client"

import React from "react"
import { Dashboard } from "./dashboard"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function DashboardPreview() {
  return (
    <div className="relative">
      {/* Dashboard flouté */}
      <div className="blur-sm pointer-events-none">
        <Dashboard />
      </div>
      
      {/* Overlay avec CTA */}
      <div className="absolute inset-0 flex items-center justify-center bg-background/40 backdrop-blur-sm">
        <div className="glass-base p-8 rounded-2xl max-w-md text-center space-y-6 border border-foreground/10">
          <h2 className="font-serif text-3xl font-normal text-foreground">
            Tableau de bord complet
          </h2>
          <p className="text-foreground/70 text-lg">
            Accédez à votre tableau de bord complet avec toutes vos statistiques, appels et rendez-vous après abonnement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="glass-blue"
              size="lg"
              className="px-8 py-6 text-base"
              asChild
            >
              <Link href="/tarifs">Voir les offres</Link>
            </Button>
            <Button
              variant="glass-secondary"
              size="lg"
              className="px-8 py-6 text-base"
              asChild
            >
              <Link href="/inscription">S'inscrire</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}






