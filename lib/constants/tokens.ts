/**
 * Design system tokens - CSS variable names
 * Used for autocompletion and documentation
 */
export const themeTokens = {
  // Color tokens
  colors: {
    background: '--background',
    foreground: '--foreground',
    primary: '--primary',
    'primary-foreground': '--primary-foreground',
    'primary-light': '--primary-light',
    'primary-dark': '--primary-dark',
    accent: '--accent',
    'accent-foreground': '--accent-foreground',
    'accent-light': '--accent-light',
    'accent-dark': '--accent-dark',
    muted: '--muted',
    'muted-foreground': '--muted-foreground',
    border: '--border',
    input: '--input',
    ring: '--ring',
    card: '--card',
    'card-foreground': '--card-foreground',
    popover: '--popover',
    'popover-foreground': '--popover-foreground',
  },
  // Typography tokens
  typography: {
    'font-sans': '--font-sans',
    'font-serif': '--font-serif',
    'font-weight-normal': '--font-weight-normal',
    'font-weight-medium': '--font-weight-medium',
    'font-weight-semibold': '--font-weight-semibold',
    'font-weight-bold': '--font-weight-bold',
  },
  // Glass effect tokens
  glass: {
    'glass-bg': '--glass-bg',
    'glass-blur': '--glass-blur',
    'glass-border': '--glass-border',
    'glass-white-opacity-low': '--glass-white-opacity-low',
    'glass-white-opacity-mid': '--glass-white-opacity-mid',
    'glass-white-opacity-high': '--glass-white-opacity-high',
    'glass-gold-base': '--glass-gold-base',
    'glass-gold-light': '--glass-gold-light',
    'glass-gold-dark': '--glass-gold-dark',
    'glass-gold-border': '--glass-gold-border',
    'glass-gold-border-hover': '--glass-gold-border-hover',
    'glass-gold-glow': '--glass-gold-glow',
    'glass-blue-base': '--glass-blue-base',
    'glass-blue-light': '--glass-blue-light',
    'glass-blue-dark': '--glass-blue-dark',
    'glass-blue-border': '--glass-blue-border',
    'glass-blue-border-hover': '--glass-blue-border-hover',
    'glass-blue-glow': '--glass-blue-glow',
  },
  // Shadow tokens
  shadows: {
    'shadow-s': '--shadow-s',
    'shadow-m': '--shadow-m',
    'shadow-l': '--shadow-l',
  },
  // Layout tokens
  layout: {
    radius: '--radius',
  },
  // Component-specific tokens
  components: {
    'conversation-bg': '--conversation-bg',
    'navbar-glass-bg': '--navbar-glass-bg',
    'navbar-glass-blur': '--navbar-glass-blur',
  },
} as const

/**
 * Get CSS variable name with proper prefix
 */
export function getToken(token: string): string {
  return `var(--${token.replace(/^--/, '')})`
}

