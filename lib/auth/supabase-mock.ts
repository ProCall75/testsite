import type { Session, User } from './types'

let currentSession: Session | null = null

export const supabaseMock = {
  auth: {
    signUp: async (email: string, password: string) => {
      const user: User = {
        id: `mock-user-${Date.now()}`,
        email,
        metadata: {},
      }

      const session: Session = {
        accessToken: `mock-access-token-${Date.now()}`,
        refreshToken: `mock-refresh-token-${Date.now()}`,
        expiresAt: Date.now() + 3600000,
        user,
      }

      currentSession = session

      return {
        data: { user, session },
        error: null,
      }
    },

    signIn: async (email: string, password: string) => {
      const user: User = {
        id: `mock-user-${Date.now()}`,
        email,
        metadata: {},
      }

      const session: Session = {
        accessToken: `mock-access-token-${Date.now()}`,
        refreshToken: `mock-refresh-token-${Date.now()}`,
        expiresAt: Date.now() + 3600000,
        user,
      }

      currentSession = session

      return {
        data: { user, session },
        error: null,
      }
    },

    signOut: async () => {
      currentSession = null
      return {
        data: {},
        error: null,
      }
    },

    getSession: async () => {
      return {
        data: { session: currentSession },
        error: null,
      }
    },

    signInWithGoogle: async () => {
      const user: User = {
        id: `google-user-${Date.now()}`,
        email: `google-user-${Date.now()}@gmail.com`,
        metadata: { provider: 'google' },
      }

      const session: Session = {
        accessToken: `mock-google-access-${Date.now()}`,
        refreshToken: `mock-google-refresh-${Date.now()}`,
        expiresAt: Date.now() + 3600000,
        user,
      }

      currentSession = session

      return {
        data: { user, session },
        error: null,
      }
    },

    signInWithApple: async () => {
      const user: User = {
        id: `apple-user-${Date.now()}`,
        email: `apple-user-${Date.now()}@icloud.com`,
        metadata: { provider: 'apple' },
      }

      const session: Session = {
        accessToken: `mock-apple-access-${Date.now()}`,
        refreshToken: `mock-apple-refresh-${Date.now()}`,
        expiresAt: Date.now() + 3600000,
        user,
      }

      currentSession = session

      return {
        data: { user, session },
        error: null,
      }
    },
  },
}

