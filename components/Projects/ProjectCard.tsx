import Image from "next/image"

export interface ProjectCardProps {
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
      className="group relative mx-auto px-2 md:px-5 xl:flex items-center justify-between hover:bg-foreground hover:text-background transition-colors duration-300 font-pixelify hidden"
    >
      <div className="relative h-full w-full overflow-hidden">
        <h3 className="py-2 md:py-12 text-2xl font-bold tracking-tighter md:text-5xl lg:text-7xl duration-500 group-hover:-translate-y-full">
          {title}
        </h3>

        <div className="absolute top-0 left-0 flex h-full flex-col justify-center translate-y-full duration-500 group-hover:translate-y-0">
          <h3 className="text-xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
            {title}
          </h3>

          <h4 className="text-lg font-medium opacity-70 md:text-2xl lg:text-3xl">
            {subtitle}
          </h4>
        </div>
      </div>

      <p className="w-4/5 text-md text-text/70 transition-opacity duration-500 lg:opacity-0 lg:group-hover:opacity-70 md:text-xl">
        {description}
      </p>

      <Image
        src="/external-link.png"
        alt="External Link Icon"
        width={80}
        height={0}
      />
    </a>
  )
}

export default ProjectCard
