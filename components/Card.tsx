"use client"

import { motion } from "framer-motion"

type CardProps = {
  children: React.ReactNode
  title?: string
}

const Card = ({ children, title = "" }: CardProps) => {
  return (
    <motion.div
      className="h-96 w-80 p-6 bg-accent shadow-lg shadow-foreground border-4 flex flex-col gap-4"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
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

export default Card
