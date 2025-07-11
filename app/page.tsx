import Spline from "@splinetool/react-spline/next"
import Container from "@/components/Container"

export default function App() {
  return (
    <main>
      <section className="relative w-full h-screen">
        <Spline
          scene="https://prod.spline.design/TxvfsVIZSlDnJRRB/scene.splinecode"
          className="absolute inset-0 w-full h-full z-0"
        />
        <div className="absolute bottom-4 right-2 w-40 h-12 bg-[#ffd88d]"></div>

        {/* Hero content */}
        <Container className="h-full flex flex-col justify-center">
          <div className="font-voxel text-foreground">
            <p className="text-9xl  font-bold">Joel Crasta</p>
            <p className="text-6xl">Developer</p>
          </div>
        </Container>
      </section>

      {/* Scrollable content */}
      <Container>
        <p className="text-xl text-[#4B2E12]">
          This is scrollable content below the Spline canvas.
        </p>
      </Container>
    </main>
  )
}
