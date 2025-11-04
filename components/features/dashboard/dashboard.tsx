"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card"
import { Button } from "../../ui/button"
import { GoldenOrb } from "../../shared/golden-orb"

const stats = [
  {
    label: "Appels reçus",
    value: "247",
    change: "+12%",
    icon: "📞",
  },
  {
    label: "Rendez-vous créés",
    value: "89",
    change: "+23%",
    icon: "🗓️",
  },
  {
    label: "Messages transférés",
    value: "156",
    change: "+8%",
    icon: "💬",
  },
]

const recentInteractions = [
  { id: 1, type: "Appel", client: "Marie Dubois", date: "Il y a 2h", status: "RDV pris", result: "Demain 14h" },
  { id: 2, type: "SMS", client: "Jean Martin", date: "Il y a 5h", status: "Message relayé", result: "" },
  { id: 3, type: "Appel", client: "Sophie Durand", date: "Hier", status: "RDV pris", result: "Vendredi 10h" },
  { id: 4, type: "Appel", client: "Pierre Bernard", date: "Hier", status: "Info transmise", result: "" },
  { id: 5, type: "SMS", client: "Claire Moreau", date: "Il y a 2 jours", status: "Message relayé", result: "" },
]

const navItems = [
  { label: "Vue d'ensemble", active: true },
  { label: "Appels", active: false },
  { label: "Rendez-vous", active: false },
  { label: "Messages", active: false },
  { label: "Paramètres", active: false },
]

export function Dashboard() {
  return (
    <div className="min-h-screen flex">
      {/* Side Navigation */}
      <aside className="hidden lg:block w-64 glass-base border-r border-foreground/10 p-6">
        <div className="space-y-2">
          {navItems.map((item, index) => (
            <button
              key={index}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                item.active
                  ? "bg-blue/10 text-blue font-medium"
                  : "text-foreground/70 hover:bg-background/50"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <section
          className="relative py-24 px-4 sm:px-6 lg:px-8"
          aria-label="Tableau de bord"
        >
          <div className="mx-auto max-w-7xl">
            {/* Header */}
            <div className="mb-12">
              <h1 className="font-serif text-4xl font-normal leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl mb-4">
                Votre tableau de bord
              </h1>
              <p className="text-lg leading-relaxed text-foreground/70 sm:text-xl">
                Suivez votre activité en temps réel
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="glass-base border-none p-6"
                >
                  <CardHeader className="p-0 pb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl">{stat.icon}</span>
                      <span className="text-sm text-blue font-semibold">{stat.change}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <CardTitle className="text-3xl font-bold text-foreground mb-1">
                      {stat.value}
                    </CardTitle>
                    <p className="text-sm text-foreground/60">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Interactions Table */}
            <Card className="glass-base border-none p-6">
              <CardHeader className="p-0 pb-6">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-semibold text-foreground">
                    Interactions récentes
                  </CardTitle>
                  <div className="flex gap-2">
                    <select className="glass-base px-3 py-1.5 rounded-lg text-sm text-foreground outline-none border-none">
                      <option>7 derniers jours</option>
                      <option>30 derniers jours</option>
                      <option>Ce mois</option>
                    </select>
                    <Button variant="glass-secondary" size="sm">
                      Exporter
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-foreground/10">
                        <th className="text-left py-3 px-4 text-sm font-medium text-foreground/70">Type</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-foreground/70">Client</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-foreground/70">Date</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-foreground/70">Statut</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-foreground/70">Résultat</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentInteractions.map((interaction) => (
                        <tr key={interaction.id} className="border-b border-foreground/5 hover:bg-background/30 transition-colors">
                          <td className="py-3 px-4 text-sm text-foreground">{interaction.type}</td>
                          <td className="py-3 px-4 text-sm text-foreground font-medium">{interaction.client}</td>
                          <td className="py-3 px-4 text-sm text-foreground/60">{interaction.date}</td>
                          <td className="py-3 px-4 text-sm">
                            <span className={`px-2 py-1 rounded text-xs ${
                              interaction.status.includes("RDV")
                                ? "bg-blue/20 text-blue"
                                : "bg-gold/20 text-gold"
                            }`}>
                              {interaction.status}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-sm text-foreground/60">{interaction.result}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Floating Assistant */}
      <div className="fixed bottom-8 right-8 z-40">
        <div className="glass-base p-4 rounded-full shadow-lg max-w-xs">
          <Button
            variant="ghost"
            className="flex items-center gap-2 text-foreground hover:bg-blue/10 w-full justify-start"
          >
            <GoldenOrb size="mini" />
            <span className="text-sm">Besoin d'aide ? Alfred est là.</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

