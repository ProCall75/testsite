'use client'

import { useAuth } from './auth-context'
import type { User, Session } from './types'

export function useUser(): User | null {
  const { user } = useAuth()
  return user
}

export function useSession(): Session | null {
  const { session } = useAuth()
  return session
}

export function useIsAuthenticated(): boolean {
  const { user } = useAuth()
  return user !== null
}

