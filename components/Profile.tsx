"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Button from "./Button"

const Profile = () => {
  return (
    <div id="about" className="flex flex-col w-full">
      <div className="md:mb-6 xl:mb-8">
        <motion.div
          className="font-voxel flex justify-center md:justify-start"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-7xl md:text-7xl xl:text-8xl font-bold">
            I'm <span className="text-[#704493]">Joel</span>
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row items-center ">
        <div className="flex-shrink-0">
          <Image
            src="/joel.jpeg"
            alt="Me"
            width={280}
            height={80}
            className="mb-6 md:mb-0"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-2 md:space-y-4 xl:space-y-6"
        >
          <p className="font-pixelify text-xl md:text-2xl xl:text-3xl font-bold -ml-2 md:ml-3 xl:ml-6 text-center md:text-left">
            {"ヾ(＾∇＾)"}
          </p>
          <p className="text-justify text-xl md:text-2xl xl:text-3xl ml-0 md:ml-4 xl:ml-8 font-pixelify">
            Hey there! I'm someone who enjoys building cool, functional
            applications. I love working on anything that feels interesting or
            fun, always exploring new ideas and experimenting with different
            technologies.
          </p>

          <div className="flex flex-col md:flex-row items-center">
            <Button text="Get my resume" className="ml-0 md:ml-4 xl:ml-8" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Profile
