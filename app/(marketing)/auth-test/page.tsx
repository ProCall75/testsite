'use client'

import { supabaseMock } from '@/lib/auth'
import { useAuth } from '@/lib/auth'

export default function AuthTestPage() {
  const { user, session, loading } = useAuth()

  const handleLogin = async () => {
    await supabaseMock.auth.signIn('demo@example.com', 'password')
  }

  const handleLogout = async () => {
    await supabaseMock.auth.signOut()
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>AUTH TEST PAGE</h2>
      <button onClick={handleLogin}>Sign In (mock)</button>
      <button onClick={handleLogout}>Sign Out (mock)</button>
      <pre style={{ marginTop: 20 }}>
        loading: {String(loading)}
        {"\n"}
        user: {JSON.stringify(user, null, 2)}
        {"\n"}
        session: {JSON.stringify(session, null, 2)}
      </pre>
    </div>
  )
}

