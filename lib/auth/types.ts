export interface User {
  id: string
  email: string
  metadata: Record<string, unknown>
}

export interface Session {
  accessToken: string
  refreshToken: string
  expiresAt: number
  user: User
}

export interface AuthState {
  user: User | null
  session: Session | null
  loading: boolean
}

