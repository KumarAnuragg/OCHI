import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  
  return (
    
    <div data-scroll data-scroll-speed="-0.3" className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textstructure mt-60 px-20 '>
        {["We create", "Eye-Opening", "Presentations"].map((item, index) => {
          return (
          <div key={index} className='masker'>
            <div className='w-fit flex items-center'>
                {index == 1 && (
                <motion.div initial={{width: 0}} animate={{width: "9vw"}} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1}} className='mr-[0.5vw] mb-[1vw] w-[9vw] h-[4vw] relative -top-[1.2vw]'>
                  <img className='rounded-xl' src ='https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg' alt=""></img>
                </motion.div>)}
                <h1 className=" flex items-center uppercase text-[6vw] leading-[5vw] h-full tracking-tighter font-['Founders_Grotesk'] font-semibold">
                {item}
                </h1>
            </div>
          </div>
          );
        })}
      </div>
    <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20"> 
        {[
          "For Public and Private Companies", "From the first pitch to IPO"
        ].map((item, index) => (
          <p key={index} className="text-3xl font-light tracking-tight leading-none">{item}</p>
        ))}
        <div className='start flex items-center gap-2'>
          <div className='px-5 py-2 border-[2px] rounded-full border-zinc-500 font-light text-2xl uppercase'>start the project</div>
          <div className='w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full'>
            <span className='rotate-[45deg]'>
            <FaArrowUpLong />
            </span>
            
          </div>
        
      </div>
      </div>
    </div>
  

  ); 
}

export default LandingPage;
