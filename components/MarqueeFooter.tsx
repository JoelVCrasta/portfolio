"use client"

import React from "react"
import Marquee from "react-fast-marquee"
import { Github, Instagram, Linkedin } from "lucide-react"

const MarqueeFooter = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="bg-foreground text-background flex flex-col overflow-hidden">
      <div className="py-4 flex justify-between ">
        {/* Socials */}
        <div className="font-pixelify px-2 xl:px-8 xl:w-1/3 w-1/2">
          <p className="mb-1 cursor-default text-lg md:text-xl xl:text-2xl">
            (&nbsp;&nbsp;Socials&nbsp;&nbsp;)
          </p>
          <div className="flex flex-col leading-6 text-sm md:text-lg xl:text-xl">
            <a
              href="https://github.com/JoelVCrasta"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-1"
            >
              <Github size={24} className="xl:block hidden" />
              <Github size={20} className="xl:hidden block" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/joelvcrasta"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-1"
            >
              <Linkedin size={24} className="xl:block hidden" />
              <Linkedin size={20} className="xl:hidden block" />
              LinkedIn
            </a>
            <a
              href="https://instagram.com/jole_jole_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-1"
            >
              <Instagram size={24} className="xl:block hidden" />
              <Instagram size={20} className="xl:hidden block" />
              Instagram
            </a>
          </div>
        </div>

        <div className="font-pixelify px-8 text-center w-1/3 xl:block hidden">
          <button
            onClick={handleBackToTop}
            className="text-lg md:text-xl xl:text-2xl"
          >
            (&nbsp;&nbsp;Back to top&nbsp;&nbsp;)
          </button>
        </div>

        {/* Contacts */}
        <div className="font-pixelify px-2 xl:px-8 text-end xl:w-1/3 w-1/2">
          <p className="mb-1 cursor-default text-lg md:text-xl xl:text-2xl">
            (&nbsp;&nbsp;Contacts&nbsp;&nbsp;)
          </p>
          <div className="leading-6 text-sm md:text-lg xl:text-xl">
            <p>loejstarc@gmail.com</p>
            <p>+91 8660363282</p>
          </div>
        </div>
      </div>

      <div className="font-voxel font-bold text-6xl md:text-8xl lg:text-9xl pt-2 md:pt-2 lg:pt-4">
        <Marquee autoFill>Portfolio . Joel Crasta .&nbsp;</Marquee>
      </div>
    </div>
  )
}

export default MarqueeFooter
