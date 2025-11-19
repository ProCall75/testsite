'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabaseMock } from './supabase-mock'
import { useAuth } from './auth-context'

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { loading: authLoading } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (loading || authLoading) return

    setLoading(true)
    try {
      await supabaseMock.auth.signIn(email, password)
      await new Promise(resolve => setTimeout(resolve, 150))
      router.push('/dashboard')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading || authLoading}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={loading || authLoading}
        />
      </div>
      <button type="submit" disabled={loading || authLoading}>
        {loading ? 'Loading...' : 'Sign In'}
      </button>
    </form>
  )
}

