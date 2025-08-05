import React from "react"
import Marquee from "react-fast-marquee"
import { Github, Instagram, Linkedin } from "lucide-react"

const MarqueeFooter = () => {
  return (
    <div className="bg-foreground text-background flex flex-col overflow-hidden mt-16 md:mt-24 xl:mt-32">
      <div className="py-4 flex justify-between ">
        {/* Socials */}
        <div className="font-pixelify text-2xl px-8">
          <p className="mb-1">(&nbsp;&nbsp;Socials&nbsp;&nbsp;)</p>
          <div className="flex flex-col leading-6 text-xl">
            <a
              href="https://github.com/JoelVCrasta"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-1"
            >
              <Github size={24} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/joelvcrasta"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-1"
            >
              <Linkedin size={24} />
              LinkedIn
            </a>
            <a
              href="https://instagram.com/jole_jole_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-1"
            >
              <Instagram size={24} />
              Instagram
            </a>
          </div>
        </div>

        {/* Contacts */}
        <div className="font-pixelify text-2xl px-8 text-end">
          <p>(&nbsp;&nbsp;Contacts&nbsp;&nbsp;)</p>
          <div className="leading-6 text-xl">
            <p>loejstarc@gmail.com</p>
            <p>+91 8660363282</p>
          </div>
        </div>
      </div>

      <hr className="bg-accent mx-8" />

      <div className="font-voxel font-bold text-5xl md:text-8xl lg:text-9xl pt-2 md:pt-2 lg:pt-4">
        <Marquee autoFill>Portfolio . Joel Crasta .&nbsp;</Marquee>
      </div>
    </div>
  )
}

export default MarqueeFooter
