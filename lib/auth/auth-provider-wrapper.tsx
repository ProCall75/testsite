'use client'

import { AuthProvider } from './auth-context'
import type { ReactNode } from 'react'

export function AuthProviderWrapper({ children }: { children: ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>
}

