import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.2" className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
      <div className='text-[24vw] border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden '>
        <motion.h1 initial={{x: 0}} animate={{x:"-100%"}} transition={ {ease: "linear", repeat: Infinity,duration:8 }} className='text-[17vw] leading-none font-["Founders_Grotesk"] font-semibold uppercase pt-10 -mb-[5vw] pr-20'>We are OCHI</motion.h1>
        <motion.h1 initial={{x: 0}} animate={{x:"-100%"}} transition={ {ease: "linear", repeat: Infinity,duration:8 }} className='text-[17vw] leading-none font-["Founders_Grotesk"] font-semibold uppercase pt-10 -mb-[5vw] pr-20'>We Are OCHI</motion.h1>
        <motion.h1 initial={{x: 0}} animate={{x:"-100%"}} transition={ {ease: "linear", repeat: Infinity,duration:8 }} className='text-[17vw] leading-none font-["Founders_Grotesk"] font-semibold uppercase pt-10 -mb-[5vw] '>We Are OCHI</motion.h1>
      </div>
    </div>
  )
}

export default Marquee
