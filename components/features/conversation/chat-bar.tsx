"use client"

import React, { useState } from "react"
import { cn } from "../../../lib/utils"

interface ChatBarProps {
  onInteraction?: (isActive: boolean) => void
  onSend?: (text: string) => void
  className?: string
}

export function ChatBar({ onInteraction, onSend, className }: ChatBarProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [value, setValue] = useState("")

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
        placeholder="Discuter avec Alfred…"
        value={value}
        className="w-full bg-transparent text-sm text-foreground placeholder:text-foreground/50 outline-none"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        aria-label="Chat avec Alfred"
      />
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
            d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3Z"
            fill="currentColor"
            fillOpacity="0.6"
          />
          <path
            d="M19 10v1a7 7 0 0 1-14 0v-1"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fillOpacity="0.6"
          />
          <line
            x1="12"
            y1="19"
            x2="12"
            y2="23"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            fillOpacity="0.6"
          />
          <line
            x1="8"
            y1="23"
            x2="16"
            y2="23"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            fillOpacity="0.6"
          />
        </svg>
      </div>
    </div>
  )
}

