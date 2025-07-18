import { title } from "process"
import ProjectCard from "./ProjectCard"
import { desc } from "motion/react-client"

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
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          subtitle={project.subtitle}
          description={project.description}
          link={project.link}
        />
      ))}
    </section>
  )
}

export default Projects
