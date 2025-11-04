import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Fraunces } from "next/font/google"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-fraunces",
})

export const metadata: Metadata = {
  title: "Alfred.ai - Votre assistant vocal intelligent",
  description: "Votre assistant vocal plug-and-play pour TPE et indépendants",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}

