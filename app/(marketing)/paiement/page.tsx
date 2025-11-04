import { Navbar } from "@/components/layout/navbar"
import { Payment } from "@/components/features/payment/payment"
import { Footer } from "@/components/layout/footer"
import { AnimatedBackground } from "@/components/layout/animated-background"

export default function PaymentPage() {
  return (
    <main className="min-h-screen relative">
      <AnimatedBackground />
      <Navbar />
      <div className="pt-16">
        <Payment />
      </div>
      <Footer />
    </main>
  )
}


