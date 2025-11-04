"use client"

import React from "react"

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-background/30 to-transparent"></div>
      
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Primary network - flowing curves */}
        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(200, 200, 200, 0)" />
            <stop offset="50%" stopColor="rgba(200, 200, 200, 0.25)" />
            <stop offset="100%" stopColor="rgba(200, 200, 200, 0)" />
          </linearGradient>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(212, 175, 55, 0)" />
            <stop offset="50%" stopColor="rgba(212, 175, 55, 0.35)" />
            <stop offset="100%" stopColor="rgba(212, 175, 55, 0)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Main flow line - connects hero elements */}
        <path
          d="M 720 900 Q 550 750, 450 650 Q 380 580, 350 520 Q 330 480, 350 450 Q 370 420, 420 400"
          stroke="url(#lineGradient1)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          filter="url(#glow)"
          style={{
            strokeDasharray: 1200,
            strokeDashoffset: 1200,
            animation: "draw-line 3.5s ease-in-out forwards",
          }}
        />
        
        {/* Branch to orb area */}
        <path
          d="M 420 400 Q 380 380, 350 360 Q 320 340, 300 320"
          stroke="rgba(200, 200, 200, 0.2)"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
          style={{
            strokeDasharray: 300,
            strokeDashoffset: 300,
            animation: "draw-line 2s ease-in-out 0.8s forwards",
          }}
        />
        
        {/* Branch to CTA area */}
        <path
          d="M 420 400 Q 500 380, 580 370 Q 660 360, 720 350 Q 780 340, 830 330"
          stroke="rgba(200, 200, 200, 0.2)"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
          style={{
            strokeDasharray: 400,
            strokeDashoffset: 400,
            animation: "draw-line 2.5s ease-in-out 1s forwards",
          }}
        />
        
        {/* Golden accent line - flowing from top right */}
        <path
          d="M 1350 0 Q 1200 150, 1050 250 Q 900 350, 750 420 Q 600 480, 500 500 Q 450 510, 420 510"
          stroke="url(#goldGradient)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          filter="url(#glow)"
          style={{
            strokeDasharray: 1500,
            strokeDashoffset: 1500,
            animation: "draw-line 4.5s ease-in-out 1.2s forwards",
          }}
        />
        
        {/* Secondary golden branch */}
        <path
          d="M 900 350 Q 850 400, 800 450 Q 750 500, 700 540"
          stroke="rgba(212, 175, 55, 0.25)"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
          style={{
            strokeDasharray: 500,
            strokeDashoffset: 500,
            animation: "draw-line 2.5s ease-in-out 2.5s forwards",
          }}
        />
        
        {/* Secondary flow from bottom left */}
        <path
          d="M 150 900 Q 200 750, 250 650 Q 300 580, 360 530 Q 400 500, 450 480"
          stroke="rgba(200, 200, 200, 0.18)"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
          style={{
            strokeDasharray: 700,
            strokeDashoffset: 700,
            animation: "draw-line 3.5s ease-in-out 1.5s forwards",
          }}
        />
        
        {/* Connecting subtle line */}
        <path
          d="M 360 530 Q 400 500, 450 480 Q 500 460, 550 450"
          stroke="rgba(200, 200, 200, 0.15)"
          strokeWidth="0.8"
          fill="none"
          strokeLinecap="round"
          style={{
            strokeDasharray: 300,
            strokeDashoffset: 300,
            animation: "draw-line 2s ease-in-out 2.8s forwards",
          }}
        />
        
        {/* Ambient top curve */}
        <path
          d="M 0 200 Q 300 150, 600 180 Q 900 210, 1200 200 Q 1440 190, 1440 200"
          stroke="rgba(200, 200, 200, 0.12)"
          strokeWidth="0.8"
          fill="none"
          strokeLinecap="round"
          style={{
            strokeDasharray: 2000,
            strokeDashoffset: 2000,
            animation: "draw-line 5s ease-in-out 0.5s forwards",
          }}
        />
        
        {/* Blue accent line - subtle */}
        <path
          d="M 100 0 Q 200 200, 300 400 Q 400 550, 500 600"
          stroke="rgba(58, 111, 248, 0.15)"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
          style={{
            strokeDasharray: 800,
            strokeDashoffset: 800,
            animation: "draw-line 4s ease-in-out 2s forwards",
          }}
        />
        
        {/* Cross-connection line */}
        <path
          d="M 800 200 Q 700 400, 600 500 Q 550 550, 500 570"
          stroke="rgba(200, 200, 200, 0.15)"
          strokeWidth="0.8"
          fill="none"
          strokeLinecap="round"
          style={{
            strokeDasharray: 600,
            strokeDashoffset: 600,
            animation: "draw-line 3s ease-in-out 3s forwards",
          }}
        />
      </svg>

      {/* Enhanced gold particles */}
      <div
        className="particle-curve-1 absolute h-2 w-2 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(212, 175, 55, 0.9) 0%, rgba(212, 175, 55, 0.3) 70%)",
          boxShadow: "0 0 10px rgba(212, 175, 55, 0.8), 0 0 20px rgba(212, 175, 55, 0.4)",
          filter: "blur(0.5px)",
        }}
      />
      <div
        className="particle-curve-2 absolute h-1.5 w-1.5 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(212, 175, 55, 0.8) 0%, rgba(212, 175, 55, 0.2) 70%)",
          boxShadow: "0 0 8px rgba(212, 175, 55, 0.7), 0 0 15px rgba(212, 175, 55, 0.3)",
          filter: "blur(0.5px)",
        }}
      />
      <div
        className="particle-curve-3 absolute h-1.5 w-1.5 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(212, 175, 55, 0.85) 0%, rgba(212, 175, 55, 0.25) 70%)",
          boxShadow: "0 0 9px rgba(212, 175, 55, 0.75), 0 0 18px rgba(212, 175, 55, 0.35)",
          filter: "blur(0.5px)",
        }}
      />
      
      {/* Subtle blue particle */}
      <div
        className="absolute h-1 w-1 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(58, 111, 248, 0.8) 0%, rgba(58, 111, 248, 0.2) 70%)",
          boxShadow: "0 0 6px rgba(58, 111, 248, 0.6)",
          animation: "particle-curve-1 12s ease-in-out infinite",
          animationDelay: "4s",
        }}
      />
    </div>
  )
}

