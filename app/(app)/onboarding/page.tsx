import { Navbar } from "@/components/layout/navbar"
import { Onboarding } from "@/components/features/onboarding/onboarding"
import { Footer } from "@/components/layout/footer"
import { AnimatedBackground } from "@/components/layout/animated-background"

export default function OnboardingPage() {
  return (
    <main className="min-h-screen relative">
      <AnimatedBackground />
      <Navbar />
      <div className="pt-16">
        <Onboarding />
      </div>
      <Footer />
    </main>
  )
}


