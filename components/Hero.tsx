import Spline from "@splinetool/react-spline/next"
import Social from "./Social"
import Navbar from "./Navbar"
import Image from "next/image"

const Hero = () => {
  return (
    <section className="fixed inset-0 w-screen h-[100dvh] overflow-hidden -z-10 bg-[#502b0c]">
      <Spline scene="https://prod.spline.design/TxvfsVIZSlDnJRRB/scene.splinecode" />

      <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4 md:p-10">
        <Social />
        <Navbar />
      </div>

      <div className="absolute bottom-4 right-2 w-40 h-12 bg-[#452A10]" />
      <div className="absolute bottom-6 md:bottom-20 left-6 md:left-20 w-40 flex">
        <p
          className="font-pixelify text-background font-bold mr-2"
          style={{ writingMode: "vertical-rl", textOrientation: "upright" }}
        >
          SCROLL
        </p>
        <Image src="/arrow-down.gif" alt="Down Arrow" width={40} height={40} />
      </div>
    </section>
  )
}

export default Hero
