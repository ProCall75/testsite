"use client"

import React from "react"
import { Button } from "../../ui/button"
import Link from "next/link"

export function Demo() {
  return (
    <section
      id="demo"
      className="relative py-24 px-4 sm:px-6 lg:px-8"
      aria-label="Section démo"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-normal leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl mb-6">
            Essayez Alfred maintenant.
          </h2>
          <p className="text-lg leading-relaxed text-foreground/70 sm:text-xl max-w-2xl mx-auto">
            Découvrez comment Alfred gère vos appels.
          </p>
        </div>

        <div className="flex justify-center">
          <Button
            variant="glass-blue"
            size="lg"
            className="px-8 py-6 text-base"
            asChild
          >
            <Link href="/demo-vocale">Appeler Alfred</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

