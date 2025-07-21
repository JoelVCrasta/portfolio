import Spline from "@splinetool/react-spline/next"
import Container from "@/components/Container"
import Hero from "@/components/Hero"
import MarqueeFooter from "@/components/MarqueeFooter"
import { TechDragCards } from "@/components/TechDragCards"
import Social from "@/components/Social"
import Projects from "@/components/Projects"

export default function App() {
  return (
    <main>
      <section className="relative w-full h-screen">
        <Spline
          scene="https://prod.spline.design/TxvfsVIZSlDnJRRB/scene.splinecode"
          className="absolute inset-0 w-full h-full z-0"
        />
        <div className="absolute bottom-4 right-2 w-40 h-12 bg-[#ffd88d]"></div>
        <Social />

        {/* Hero content */}
        <Hero />
      </section>

      {/* Scrollable content */}
      <Container className="space-y-16 ">
        <TechDragCards />
        <Projects />
      </Container>

      <MarqueeFooter />
    </main>
  )
}
