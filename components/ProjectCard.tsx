import React from "react"

type ProjectCardProps = {
  title: string
  subtitle: string
  description: string
  link?: string
}

const ProjectCard = ({
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
      className="group relative mx-auto px-5 flex items-center justify-between hover:bg-foreground hover:text-background transition-colors duration-300 font-pixelify"
    >
      <div className="relative h-full w-full overflow-hidden">
        <h1 className="py-12 text-xl font-bold tracking-tighter duration-500 group-hover:-translate-y-full md:text-5xl lg:text-7xl">
          {title}
        </h1>

        <div className="absolute top-0 left-0 flex h-full flex-col justify-center translate-y-full duration-500 group-hover:translate-y-0">
          <h1 className="text-xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
            {title}
          </h1>
          <h2 className="text-lg font-medium opacity-70 md:text-2xl lg:text-3xl">
            {subtitle}
          </h2>
        </div>
      </div>

      <p className="w-3/5 text-md text-text/70 transition-opacity duration-500 lg:opacity-0 lg:group-hover:opacity-70 md:text-xl">
        {description}
      </p>
    </a>
  )
}

export default ProjectCard
