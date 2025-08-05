import Image from "next/image"
import ProjectCard from "./ProjectCard"
import ProjectCardMobile from "./ProjectCardMobile"

const Projects = () => {
  const projects = [
    {
      title: "clover",
      subtitle: "Go",
      description:
        "A simple torrent client which makes use of the BitTorrent protocol.",
      link: "https://github.com/JoelVCrasta/clover",
    },
    {
      title: "goskii",
      subtitle: "Go",
      description:
        "A simple, fast and fun CLI tool to make ASCII art from any images, videos and even youtube videos.",
      link: "https://github.com/JoelVCrasta/goskii",
    },
    {
      title: "Nocturne",
      subtitle: "C, Raylib",
      description:
        "A 3D psychological adventure game made using Raylib as a fun collaboration project.",
      link: "https://github.com/sceptix-club/Nocturne",
    },
    {
      title: "Animoox",
      subtitle: "Typescript, Next.js, AWS",
      description: "A lottie files and icon packs website.",
      link: "",
    },
    {
      title: "HTF 3.0 App",
      subtitle: "Typescript, Next.js",
      description:
        "A web app created for the volunteers and judges for the HackToFuture 3.0 hackathon which makes use of NFC.",
      link: "https://github.com/HackToFuture/htf3web",
    },
    {
      title: "Portfolio Site",
      subtitle: "Typescript, Next.js",
      description: "This website :D",
      link: "https://joelcrasta.vercel.app",
    },
  ]

  return (
    <section>
      <div className="px-5 border-x-4 border-t-4 flex gap-4 md:gap-8">
        <p className="font-bold font-pixelify py-12 text-2xl md:text-5xl lg:text-7xl">
          Projects
        </p>
      </div>

      <div className="divide-y-4 divide-muted border-4 border-muted">
        {projects.map((project, index) => (
          <div key={index}>
            <ProjectCard
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              link={project.link}
            />
            <ProjectCardMobile
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              link={project.link}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
