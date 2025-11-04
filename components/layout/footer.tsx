"use client"

import React from "react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-transparent bg-gradient-to-r from-gold/20 via-transparent to-blue/20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-6 text-center">
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <Link
              href="#conditions"
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              Conditions
            </Link>
            <Link
              href="#confidentialite"
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              Confidentialité
            </Link>
            <Link
              href="#contact"
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>
          <p className="text-sm text-foreground/60">
            © 2025 Alfred.ai – Fait pour les pros qui décrochent pas.
          </p>
        </div>
      </div>
    </footer>
  )
}


