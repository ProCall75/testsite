import { Hero } from "@/components/sections/hero"
import { Landing } from "@/components/sections/landing"
import { BenefitStrip } from "@/components/sections/benefit-strip"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Hero />
      <Landing />
      <BenefitStrip />

      {/* Secondary CTA */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Button
            variant="glass-blue"
            size="lg"
            className="px-8 py-6 text-base"
            asChild
          >
            <Link href="/tarifs">Découvrir les offres</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

