"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { twMerge } from "tailwind-merge"

export const TechDragCards = () => {
  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden select-none border-4">
      <h2 className="relative z-0 text-[20vw] font-bold text-foreground font-voxel md:text-[200px]">
        Technology
      </h2>
      <Cards />
    </section>
  )
}

const Cards = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="absolute inset-0 z-20" ref={containerRef}>
      <Card
        containerRef={containerRef}
        rotate="6deg"
        top="20%"
        left="10%"
        title="Languages"
      >
        GoLang
        <br />
        Typescript
        <br />
        Python
        <br />
        C++
      </Card>

      <Card
        containerRef={containerRef}
        rotate="12deg"
        top="45%"
        left="70%"
        title="Frameworks"
      >
        React
        <br />
        React Native
        <br />
        Express
        <br />
        Gin
      </Card>

      <Card
        containerRef={containerRef}
        rotate="-6deg"
        top="10%"
        left="50%"
        title="Databases"
      >
        MongoDB
        <br />
        Supabase
        <br />
        PostgreSQL
        <br />
        DynamoDB
      </Card>

      <Card
        containerRef={containerRef}
        rotate="-4deg"
        top="50%"
        left="20%"
        title="Tools"
      >
        Git
        <br />
        Docker
        <br />
        Postman
        <br />
        Linux
      </Card>
    </div>
  )
}

import { RefObject } from "react"

type CardProps = {
  containerRef: RefObject<HTMLDivElement | null>
  title?: string
  top: string
  left: string
  rotate: string
  className?: string
  children: React.ReactNode
}

const Card = ({
  containerRef,
  title = "",
  top,
  left,
  rotate,
  className = "",
  children,
}: CardProps) => {
  const [zIndex, setZIndex] = useState(0)

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements")

    let maxZIndex = -Infinity

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      )

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex
      }
    })

    setZIndex(maxZIndex + 1)
  }

  return (
    <motion.div
      onMouseDown={updateZIndex}
      draggable={false}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute h-96 w-80 p-6 bg-accent shadow-lg shadow-foreground border-4 flex flex-col gap-4",
        className
      )}
      drag
      dragConstraints={containerRef}
      dragElastic={0.65}
    >
      {title && (
        <div className="text-center text-5xl font-bold font-voxel">{title}</div>
      )}
      <div className="flex-1 flex justify-center items-center font-pixelify text-3xl">
        {children}
      </div>
    </motion.div>
  )
}
