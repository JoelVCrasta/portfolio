import React from "react"
import Marquee from "react-fast-marquee"

const MarqueeFooter = () => {
  return (
    <div className="bg-foreground text-background flex pt-3 md:pt-4 lg:pt-8 mt-8 overflow-hidden">
      <div className="font-voxel font-bold text-5xl md:text-7xl lg:text-9xl">
        <Marquee autoFill>Portfolio . Joel Crasta .&nbsp;</Marquee>
      </div>
    </div>
  )
}

export default MarqueeFooter
