"use client"

import React from "react"
import { Button } from "../ui/button"
import { GoldenOrb } from "../shared/golden-orb"
import Link from "next/link"

const navLinks = [
  { label: "Accueil", href: "/#fonctionnalites" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Contact", href: "/#contact" },
]

export function Navbar() {
  return (
    <nav
      className="glass-navbar fixed top-0 left-0 right-0 z-50 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      aria-label="Navigation principale"
    >
      <div className="flex h-16 items-center justify-between">
        {/* Logo with Mini Orb */}
        <Link
          href="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
          aria-label="alfred.ai - Accueil"
        >
          <GoldenOrb size="mini" />
          <span className="text-xl font-light text-foreground lowercase">
            alfred.ai
          </span>
        </Link>

        {/* Navigation Links - Hidden on mobile, visible on md+ */}
        <div className="hidden md:flex md:items-center md:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Button
            variant="glass-secondary"
            size="sm"
            className="hidden sm:inline-flex text-xs sm:text-sm"
            asChild
          >
            <Link href="/tarifs">Découvrir Alfred</Link>
          </Button>
          <Button
            variant="glass-primary"
            size="sm"
            className="whitespace-nowrap text-xs sm:text-sm px-3 sm:px-4"
            asChild
          >
            <Link href="/inscription">Commencer</Link>
          </Button>
        </div>
      </div>

      {/* Mobile Menu - Simple dropdown could be added here if needed */}
    </nav>
  )
}

