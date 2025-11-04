/**
 * Color tokens - HSL values for reference
 * These values correspond to the CSS variables defined in globals.css
 */
export const colors = {
  // Core theme colors
  primary: {
    h: 47,
    s: 67,
    l: 52,
  },
  primaryLight: {
    h: 47,
    s: 67,
    l: 66,
  },
  primaryDark: {
    h: 47,
    s: 67,
    l: 40,
  },
  accent: {
    h: 220,
    s: 92,
    l: 60,
  },
  accentLight: {
    h: 220,
    s: 92,
    l: 68,
  },
  accentDark: {
    h: 220,
    s: 92,
    l: 50,
  },
  background: {
    h: 47,
    s: 100,
    l: 98,
  },
  foreground: {
    h: 0,
    s: 0,
    l: 10,
  },
  conversationBg: {
    h: 47,
    s: 30,
    l: 96,
  },
} as const

/**
 * Helper to convert HSL object to HSL string
 */
export function hslToString(color: { h: number; s: number; l: number }): string {
  return `${color.h} ${color.s}% ${color.l}%`
}

