import Spline from "@splinetool/react-spline/next"
import Container from "@/components/Container"
import Profile from "@/components/Profile"
import MarqueeFooter from "@/components/MarqueeFooter"
import Social from "@/components/Social"
import Projects from "@/components/Projects/Projects"
import SnakeGame from "@/components/SnakeGame"
import Message from "@/components/Message"
import Image from "next/image"
import Navbar from "@/components/Navbar"
import TechStack from "@/components/TechStack/TechStack"

export default function App() {
  return (
    <main>
      <section className="fixed inset-0 w-screen h-[100dvh] overflow-hidden -z-10 bg-[#4A280A]">
        <Spline scene="https://prod.spline.design/TxvfsVIZSlDnJRRB/scene.splinecode" />

        <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4 md:p-10">
          <Social />
          <Navbar />
        </div>

        <div className="absolute bottom-4 right-2 w-40 h-12 bg-[#4A280A]" />
        <div className="absolute bottom-6 md:bottom-20 left-6 md:left-20 w-40 flex">
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
      </section>

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
