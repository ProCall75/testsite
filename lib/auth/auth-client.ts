import { supabaseMock } from './supabase-mock'
import type { Session } from './types'

export const authClient = {
  getSession: async (): Promise<{ data: { session: Session | null }; error: null }> => {
    return await supabaseMock.auth.getSession()
  },
}

