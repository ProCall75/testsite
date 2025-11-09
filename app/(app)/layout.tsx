import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { AnimatedBackground } from "@/components/layout/animated-background"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen relative">
      <AnimatedBackground />
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}