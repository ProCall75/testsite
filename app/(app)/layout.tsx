import { ClientAuthGuard } from '@/lib/auth'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const redirectPath = '/'
  return (
    <ClientAuthGuard redirectTo={redirectPath}>
      <main>{children}</main>
    </ClientAuthGuard>
  )
}