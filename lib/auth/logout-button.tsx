'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabaseMock } from './supabase-mock'
import { useIsAuthenticated } from './hooks'

export function LogoutButton() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const isAuthenticated = useIsAuthenticated()

  const handleLogout = async () => {
    if (loading || !isAuthenticated) return

    setLoading(true)
    try {
      await supabaseMock.auth.signOut()
      router.push('/login')
    } finally {
      setLoading(false)
    }
  }

  if (!isAuthenticated) return null

  return (
    <button onClick={handleLogout} disabled={loading}>
      {loading ? 'Loading...' : 'Sign Out'}
    </button>
  )
}

