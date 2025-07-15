import React from "react"
import Marquee from "react-fast-marquee"

const MarqueeFooter = () => {
  return (
    <div className="overflow-hidden">
      <div className="font-voxel font-bold text-9xl leading-none relative -translate-y-[-24%]">
        <Marquee autoFill>Portfolio . Joel Crasta .&nbsp;</Marquee>
      </div>
    </div>
  )
}

export default MarqueeFooter
