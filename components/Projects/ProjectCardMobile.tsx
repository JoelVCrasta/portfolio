import Image from "next/image"
import { ProjectCardProps } from "./ProjectCard"

const ProjectCardMobile = ({
  title,
  subtitle,
  description,
  link = "",
}: ProjectCardProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="mx-auto px-2 md:px-5 flex items-center justify-between hover:bg-foreground hover:text-background font-pixelify xl:hidden"
    >
      <div className="w-full">
        <h3 className="py-2 text-2xl font-bold tracking-tighter md:text-5xl">
          {title}
        </h3>

        <p className=" min-h-20 w-11/12 md:w-4/5 text-lg text-text/70 md:text-xl mb-2">
          {description}
        </p>
      </div>

      <Image
        src="/external-link.png"
        alt="External Link Icon"
        width={40}
        height={0}
      />
    </a>
  )
}

export default ProjectCardMobile
