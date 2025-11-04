import React from "react"
import { Card } from "../ui/card"
import { cn } from "../../lib/utils"

interface GoldenOrbProps {
  className?: string
  isActive?: boolean
  size?: "default" | "mini" | "celestial"
  variant?: "default" | "celestial"
}

export function GoldenOrb({ className, isActive = false, size = "default", variant = "default" }: GoldenOrbProps) {
  const sizeClasses = size === "mini" 
    ? "h-6 w-6 sm:h-8 sm:w-8" 
    : size === "celestial"
    ? "h-48 w-48 sm:h-64 sm:w-64 lg:h-80 lg:w-80"
    : "h-24 w-24 sm:h-32 sm:w-32 lg:h-40 lg:w-40"
  
  const isCelestial = variant === "celestial"
  
  return (
    <Card
      className={cn(
        "glass-base relative overflow-hidden rounded-full border-none p-0 shadow-2xl transition-all duration-300",
        sizeClasses,
        isCelestial ? "orb-celestial" : isActive ? "orb-pulse-active" : "orb-pulse",
        className
      )}
      aria-hidden="true"
    >
      {/* Celestial variant: Gold-blue gradient core */}
      {isCelestial ? (
        <>
          {/* Core gradient */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `radial-gradient(circle at 40% 40%, rgba(58, 111, 248, 0.6) 0%, rgba(212, 175, 55, 0.5) 30%, rgba(212, 175, 55, 0.3) 50%, rgba(255, 255, 255, 0.15) 70%, rgba(255, 255, 255, 0.05) 100%)`,
            }}
          />
          
          {/* Outer glow */}
          <div
            className="absolute -inset-[20%] rounded-full orb-celestial-glow"
            style={{
              background: `radial-gradient(circle, rgba(212, 175, 55, 0.4) 0%, rgba(58, 111, 248, 0.3) 50%, transparent 70%)`,
              filter: "blur(40px)",
            }}
          />
          
          {/* Inner luminosity */}
          <div
            className="absolute inset-[15%] rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(212, 175, 55, 0.3) 40%, transparent 70%)`,
              filter: "blur(25px)",
            }}
          />
          
          {/* Refraction highlight */}
          <div
            className="absolute left-[30%] top-[30%] h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 rounded-full opacity-70 refraction-effect"
            style={{
              background: `radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(58, 111, 248, 0.4) 50%, transparent 70%)`,
              filter: "blur(12px)",
              backgroundSize: "200% 200%",
            }}
          />
        </>
      ) : (
        <>
          {/* Default variant: Radial gradient overlay */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `radial-gradient(circle at 30% 30%, rgba(212, 175, 55, 0.5) 0%, rgba(212, 175, 55, 0.2) 40%, rgba(255, 255, 255, 0.15) 70%, rgba(255, 255, 255, 0.05) 100%)`,
            }}
          />
          
          {/* Inner glow effect with pulsation */}
          <div
            className={cn(
              "absolute inset-[20%] rounded-full opacity-30",
              isActive && "opacity-50"
            )}
            style={{
              background: `radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 70%)`,
              filter: "blur(20px)",
            }}
          />
          
          {/* Highlight reflection with refraction */}
          <div
            className="absolute left-[25%] top-[25%] h-8 w-8 rounded-full opacity-60 refraction-effect"
            style={{
              background: `radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, transparent 70%)`,
              filter: "blur(8px)",
              backgroundSize: "200% 200%",
            }}
          />
          
          {/* Subtle shimmer effect */}
          <div
            className="absolute inset-0 rounded-full opacity-20"
            style={{
              background: `linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, transparent 50%)`,
            }}
          />
          
          {/* Active state enhancement */}
          {isActive && (
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: `radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, transparent 70%)`,
                filter: "blur(15px)",
              }}
            />
          )}
        </>
      )}
    </Card>
  )
}

