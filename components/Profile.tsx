"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const Profile = () => {
  return (
    <div className="flex flex-col w-full ">
      <div className="mb-8">
        <motion.div
          className="font-voxel leading-30 flex xl:block flex-col items-center"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-7xl md:text-9xl xl:text-8xl font-bold">
            I'm <span className="text-[#704493]">Joel</span>
          </p>
        </motion.div>
      </div>

      <div className="flex items-center ">
        <div className="flex-shrink-0">
          <Image
            src="/joel.jpeg"
            alt="Me"
            width={280}
            height={80}
            className=""
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-2 md:space-y-4 xl:space-y-6"
        >
          <p className="font-pixelify text-xl md:text-2xl xl:text-3xl font-bold ml-6">
            {"ヾ(＾∇＾)"}
          </p>
          <p className="text-justify text-xl md:text-2xl xl:text-3xl ml-8 font-pixelify">
            Hey there! I'm someone who enjoys building cool, functional
            applications. I love working on anything that feels interesting or
            fun, always exploring new ideas and experimenting with different
            technologies.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Profile
