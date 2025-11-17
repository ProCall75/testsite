import "./globals.css"
import type { Metadata } from "next"
import { AuthProviderWrapper } from "@/lib/auth/auth-provider-wrapper"

export const metadata: Metadata = {
  title: "Alfred Reception",
  description: "Assistant IA pour la réception et la gestion de salon",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <AuthProviderWrapper>{children}</AuthProviderWrapper>
      </body>
    </html>
  )
}

