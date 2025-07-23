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
      title: "Portfolio Site",
      subtitle: "Typescript, Next.js",
      description: "This website :D",
      link: "",
    },
  ]

  return (
    <section>
      <div className="px-5 border-x-4 border-t-4 flex items-center justify-center gap-4 md:gap-8">
        <Image
          src={"/arrow2.gif"}
          alt="test"
          width={192}
          height={0}
          style={{ transform: "scaleX(-1)" }}
        />

        <p className="font-bold font-pixelify py-12 text-2xl md:text-5xl lg:text-7xl">
          Projects
        </p>

        <Image src={"/arrow2.gif"} alt="test" width={192} height={0} />
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
