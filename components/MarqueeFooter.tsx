import React from "react"
import Marquee from "react-fast-marquee"

const MarqueeFooter = () => {
  return (
    <div className="bg-foreground text-background flex pt-8 mt-8">
      <div className="font-voxel font-bold text-9xl">
        <Marquee autoFill>Portfolio . Joel Crasta .&nbsp;</Marquee>
      </div>
    </div>
  )
}

export default MarqueeFooter
