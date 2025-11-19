import { ClientAuthGuard, LogoutButton } from '@/lib/auth'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const redirectPath = '/login'
  return (
    <ClientAuthGuard redirectTo={redirectPath}>
      <header style={{ padding: '10px' }}>
        <LogoutButton />
      </header>
      <main>{children}</main>
    </ClientAuthGuard>
  )
}