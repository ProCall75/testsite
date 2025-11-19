'use client'

import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useIsAuthenticated } from './hooks'
import { useAuth } from './auth-context'
import type { ReactNode } from 'react'

interface ClientAuthGuardProps {
  children: ReactNode
  redirectTo: string
}

export function ClientAuthGuard({ children, redirectTo }: ClientAuthGuardProps) {
  const pathname = usePathname()
  
  // TEMPORARY: disable gating for onboarding and dashboard during Macro 4 testing
  if (pathname.startsWith('/onboarding') || pathname.startsWith('/dashboard')) {
    return <>{children}</>
  }

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

