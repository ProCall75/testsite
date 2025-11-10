"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "../../../lib/utils"

interface ChatBarProps {
  onInteraction?: (isActive: boolean) => void
  onSend?: (text: string) => void
  className?: string
}

const placeholders = [
  "Comment tu gères mes appels ?",
  "Tu prends les rendez-vous automatiquement ?",
  "Tu fonctionnes pour plusieurs collègues ?",
  "Tu peux répartir les appels selon les spécialités ?",
  "Je peux tester sans carte bancaire ?"
]

export function ChatBar({ onInteraction, onSend, className }: ChatBarProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [value, setValue] = useState("")
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const startAnimation = () => {
      intervalRef.current = setInterval(() => {
        setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length)
      }, 6000)
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState !== "visible" && intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      } else if (document.visibilityState === "visible") {
        startAnimation()
      }
    }

    startAnimation()
    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [])

  const handleFocus = () => {
    setIsFocused(true)
    onInteraction?.(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
    if (!value) {
      onInteraction?.(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setValue(newValue)
    if (newValue.length > 0) {
      onInteraction?.(true)
    } else {
      onInteraction?.(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && value.trim() && onSend) {
      onSend(value.trim())
      setValue("")
      onInteraction?.(false)
    }
  }

  return (
    <div
      className={cn(
        "glass-base relative w-full max-w-xs rounded-full px-4 py-3 transition-all duration-300",
        isFocused && "ring-2 ring-gold/30 shadow-lg",
        className
      )}
    >
      <input
        type="text"
        value={value}
        className="w-full bg-transparent text-sm text-foreground outline-none pr-8"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        aria-label="Chat avec Alfred"
      />
      {!value && (
        <div className="absolute inset-0 flex items-center rounded-full pointer-events-none px-4">
          <AnimatePresence mode="wait">
            <motion.span
              key={`placeholder-${currentPlaceholder}`}
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.3, ease: "linear" }}
              className="text-sm text-foreground/50"
            >
              {placeholders[currentPlaceholder]}
            </motion.span>
          </AnimatePresence>
        </div>
      )}
      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-gold"
        >
          <path
            d="M12 19V5M7 10l5-5 5 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fillOpacity="0.6"
          />
        </svg>
      </div>
    </div>
  )
}

