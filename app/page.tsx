import Hero from "@/components/Hero"
import Container from "@/components/Container"
import Profile from "@/components/Profile"
import MarqueeFooter from "@/components/MarqueeFooter"
import Projects from "@/components/Projects/Projects"
import SnakeGame from "@/components/SnakeGame"
import Message from "@/components/Message"
import TechStack from "@/components/TechStack/TechStack"

export default function App() {
  return (
    <main>
      <Hero />

      {/* Scrollable content */}
      <Container className="space-y-10 md:space-y-22 xl:space-y-28 pt-8 md:pt-14 xl:pt-20 pb-16 md:pb-24 xl:pb-32">
        <Profile />

        <Projects />
        <TechStack />

        <div className="flex gap-x-4 lg:gap-8 md:flex-row flex-col">
          <Message />
          <SnakeGame />
        </div>
      </Container>

      <MarqueeFooter />
    </main>
  )
}
