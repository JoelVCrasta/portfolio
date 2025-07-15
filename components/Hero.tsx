"use client"

import { motion } from "framer-motion"
import Container from "./Container"

const Hero = () => {
  return (
    <Container className="h-full flex flex-col justify-center pointer-events-none">
      <motion.div
        className="font-voxel leading-30"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-[140px] font-bold">Joel Crasta</p>
        <p className="text-6xl">Developer</p>
      </motion.div>

      <motion.div
        className="font-voxel leading-30"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-3xl mt-4 max-w-[700] font-pixelify">
          Hey there! I'm someone who enjoys building cool, functional
          applications. I love working on anything that feels interesting or
          fun, always exploring new ideas and experimenting with different
          technologies.
        </p>
      </motion.div>
    </Container>
  )
}

export default Hero
