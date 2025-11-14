import "./globals.css"
import type { Metadata } from "next"

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
      <body>{children}</body>
    </html>
  )
}

