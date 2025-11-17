'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useIsAuthenticated } from './hooks'
import { useAuth } from './auth-context'
import type { ReactNode } from 'react'

interface ClientAuthGuardProps {
  children: ReactNode
  redirectTo: string
}

export function ClientAuthGuard({ children, redirectTo }: ClientAuthGuardProps) {
  const isAuthenticated = useIsAuthenticated()
  const { loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push(redirectTo)
    }
  }, [loading, isAuthenticated, router, redirectTo])

  if (loading) return null
  if (!isAuthenticated) return null

  return <>{children}</>
}

