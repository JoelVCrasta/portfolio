import Spline from "@splinetool/react-spline/next"
import Container from "@/components/Container"
import Profile from "@/components/Profile"
import MarqueeFooter from "@/components/MarqueeFooter"
import { TechDragCards } from "@/components/TechDragCards"
import Social from "@/components/Social"
import Projects from "@/components/Projects/Projects"
import SnakeGame from "@/components/SnakeGame"
import Message from "@/components/Message"
import Image from "next/image"

export default function App() {
  return (
    <main>
      <section className="fixed inset-0 w-full -z-10 h-screen">
        <Spline
          scene="https://prod.spline.design/TxvfsVIZSlDnJRRB/scene.splinecode"
          className="absolute inset-0 w-full h-full z-0 block"
        />

        <div className="absolute bottom-4 right-2 w-40 h-12 bg-[#4A280A]"></div>
        <Social />
        <div className="absolute bottom-20 left-20 w-40 flex">
          <p
            className="font-pixelify text-background font-bold mr-2"
            style={{ writingMode: "vertical-rl", textOrientation: "upright" }}
          >
            SCROLL
          </p>
          <Image
            src="/arrow-down.gif"
            alt="Down Arrow"
            width={40}
            height={40}
          />
        </div>

        {/* Hero content */}
        {/* <Hero /> */}
      </section>

      {/* Scrollable content */}
      <Container className="space-y-16 md:space-y-24 xl:space-y-32 pt-8 xl:pt-20 pb-16 md:pb-24 xl:pb-32">
        <Profile />

        <Projects />
        <TechDragCards />

        <div className="flex gap-x-4 lg:gap-8 md:flex-row flex-col">
          <Message />
          <SnakeGame />
        </div>
      </Container>

      <MarqueeFooter />
    </main>
  )
}
