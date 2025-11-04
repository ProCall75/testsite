"use client"

import React, { useState } from "react"
import { GoldenOrb } from "../../shared/golden-orb"
import Link from "next/link"

export function Conversation() {
  const [isListening, setIsListening] = useState(false)

  const handleMicrophoneClick = () => {
    setIsListening(!isListening)
    // Here you would integrate with voice recognition API
  }

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background with dark cream and lines */}
      <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0" style={{ backgroundColor: "hsl(var(--conversation-bg))" }}></div>
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-background/20 to-transparent"></div>
        
        <svg
          className="absolute inset-0 w-full h-full opacity-35"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="convLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(0 0% 71% / 0)" />
              <stop offset="50%" stopColor="hsl(0 0% 71% / 0.2)" />
              <stop offset="100%" stopColor="hsl(0 0% 71% / 0)" />
            </linearGradient>
            <linearGradient id="convGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary) / 0)" />
              <stop offset="50%" stopColor="hsl(var(--primary) / 0.3)" />
              <stop offset="100%" stopColor="hsl(var(--primary) / 0)" />
            </linearGradient>
            <filter id="convGlow">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Main flowing network lines */}
          <path
            d="M 0 450 Q 360 300, 720 400 Q 1080 500, 1440 450"
            stroke="url(#convLineGradient)"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
            filter="url(#convGlow)"
          />
          <path
            d="M 0 600 Q 360 500, 720 600 Q 1080 700, 1440 650"
            stroke="url(#convLineGradient)"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
            filter="url(#convGlow)"
          />
          
          {/* Golden accent line flowing from center */}
          <path
            d="M 720 0 Q 550 250, 450 400 Q 400 550, 400 650 Q 400 750, 450 850"
            stroke="url(#convGoldGradient)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            filter="url(#convGlow)"
          />
          
          {/* Connecting branches */}
          <path
            d="M 450 400 Q 350 450, 300 500 Q 250 550, 220 600"
            stroke="hsl(0 0% 71% / 0.15)"
            strokeWidth="0.8"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 450 400 Q 550 450, 650 500 Q 750 550, 850 600"
            stroke="hsl(0 0% 71% / 0.15)"
            strokeWidth="0.8"
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Subtle top curve */}
          <path
            d="M 0 300 Q 500 250, 1000 280 Q 1440 300, 1440 300"
            stroke="hsl(0 0% 71% / 0.1)"
            strokeWidth="0.8"
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Radial lines from center */}
          <path
            d="M 720 450 Q 600 500, 500 550"
            stroke="hsl(0 0% 78% / 0.12)"
            strokeWidth="0.6"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 720 450 Q 840 500, 940 550"
            stroke="hsl(0 0% 78% / 0.12)"
            strokeWidth="0.6"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
        
        {/* Enhanced golden particle */}
        <div
          className="absolute h-2 w-2 rounded-full"
          style={{
            background: `radial-gradient(circle, hsl(var(--primary) / 0.9) 0%, hsl(var(--primary) / 0.3) 70%)`,
            boxShadow: `0 0 12px hsl(var(--primary) / 0.9), 0 0 24px hsl(var(--primary) / 0.5)`,
            filter: "blur(0.5px)",
            animation: "particle-curve-1 10s ease-in-out infinite",
          }}
        />
        
        {/* Secondary particle */}
        <div
          className="absolute h-1.5 w-1.5 rounded-full"
          style={{
            background: `radial-gradient(circle, hsl(var(--primary) / 0.8) 0%, hsl(var(--primary) / 0.2) 70%)`,
            boxShadow: `0 0 10px hsl(var(--primary) / 0.8), 0 0 20px hsl(var(--primary) / 0.4)`,
            filter: "blur(0.5px)",
            animation: "particle-curve-2 12s ease-in-out infinite",
            animationDelay: "3s",
          }}
        />
      </div>

      {/* Minimal Header */}
      <header className="glass-navbar relative z-10 px-4 sm:px-6 lg:px-8 py-4">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
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
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 relative z-10">
        {/* Large Celestial Orb */}
        <div className="mb-16">
          <GoldenOrb size="celestial" variant="celestial" isActive={isListening} />
        </div>

        {/* Voice instruction text */}
        <div className="mb-8 text-center">
          <p className="text-lg text-foreground/70 mb-2">
            Utilisez votre voix pour parler à Alfred
          </p>
          <p className="text-sm text-foreground/50">
            Cliquez sur le micro pour commencer
          </p>
        </div>

        {/* Microphone Button */}
        <button
          onClick={handleMicrophoneClick}
          className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
            isListening
              ? "glass-blue scale-110 shadow-lg shadow-blue/30"
              : "glass-base hover:scale-105"
          }`}
          aria-label="Activer le microphone"
        >
          {/* Pulse animation when listening */}
          {isListening && (
            <>
              <div className="absolute inset-0 rounded-full bg-blue/20 animate-ping"></div>
              <div className="absolute inset-0 rounded-full bg-blue/10 animate-pulse"></div>
            </>
          )}
          
          {/* Microphone icon */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-colors ${isListening ? "text-blue" : "text-foreground/70"}`}
          >
            <path
              d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3Z"
              fill="currentColor"
              fillOpacity="0.8"
            />
            <path
              d="M19 10v1a7 7 0 0 1-14 0v-1"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fillOpacity="0.8"
            />
            <line
              x1="12"
              y1="19"
              x2="12"
              y2="23"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              fillOpacity="0.8"
            />
            <line
              x1="8"
              y1="23"
              x2="16"
              y2="23"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              fillOpacity="0.8"
            />
          </svg>
        </button>
      </main>
    </div>
  )
}

