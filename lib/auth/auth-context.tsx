'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { authClient } from './auth-client'
import type { AuthState, User, Session } from './types'

const AuthContext = createContext<AuthState | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const refreshSession = async () => {
      const { data } = await authClient.getSession()
      if (data.session) {
        setSession(data.session)
        setUser(data.session.user)
      } else {
        setSession(null)
        setUser(null)
      }
      setLoading(false)
    }

    refreshSession()

    const interval = setInterval(refreshSession, 100)
    return () => clearInterval(interval)
  }, [])

  const value: AuthState = {
    user,
    session,
    loading,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}

