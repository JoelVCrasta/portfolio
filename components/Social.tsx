import { Github, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"

const Social = () => {
  return (
    <section className="flex items-center gap-4 text-background">
      <Image src="/arrow.gif" alt="arrow" width={30} height={30} />
      <a
        href="https://github.com/JoelVCrasta"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github size={24} />
      </a>
      <a
        href="https://linkedin.com/in/joelvcrasta"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin size={24} />
      </a>
      <a
        href="https://instagram.com/jole_jole_"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram size={24} />
      </a>
      <Image
        src="/arrow.gif"
        alt="arrow"
        width={30}
        height={30}
        style={{ transform: "scaleX(-1)" }}
      />
    </section>
  )
}

export default Social
