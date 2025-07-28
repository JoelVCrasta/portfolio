"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Container from "./Container"

const Hero = () => {
  return (
    <Container className="h-full flex flex-col pt-28 lg:pt-0 justify-center items-center xl:items-start pointer-events-none">
      <motion.div
        className="font-voxel leading-30 flex xl:block flex-col items-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-7xl md:text-9xl xl:text-[140px] font-bold">
          Joel Crasta
        </p>
        <p className="text-5xl md:text-7xl xl:text-[100px]">Developer</p>
      </motion.div>

      <motion.div
        className="leading-30 flex xl:block justify-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-center xl:text-start text-xl md:text-2xl xl:text-3xl mt-4 max-w-[700] font-pixelify">
          Hey there! I'm someone who enjoys building cool, functional
          applications. I love working on anything that feels interesting or
          fun, always exploring new ideas and experimenting with different
          technologies.
        </p>
      </motion.div>

      <Image
        src="/arrow-down.gif"
        alt="Arrow Down"
        width={40}
        height={0}
        className="mt-10 block xl:hidden pointer-events-auto"
      />
    </Container>
  )
}

export default Hero
