import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { AnimatedBackground } from "@/components/layout/animated-background"

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen relative">
      <AnimatedBackground />
      <Navbar />
      <div className="pt-16">
        {children}
      </div>
      <Footer />
    </main>
  )
}

