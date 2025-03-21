import React from 'react'
import pic1 from "./images/pic1.jpg";

function About() {
  return (
    <div className='w-full p-20 rounded-tl-3xl rounded-tr-3xl bg-[#CDEA68] text-black'>
      <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4.5vw] tracking-tight'>
        Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
        <div className='w-full flex gap-5 border-t-[1px] mt-20 pt-15 border-[#93ab5a]'>
            <div className='w-1/2'>
            <h1 className='text-[4vw] '>Our approach:</h1>
            <button className='text-[1.2vw] flex  items-center gap-14 px-10 py-6 mt-2 uppercase bg-zinc-900 rounded-full text-white'>Read More
                <div className='w-3.5 h-3.5 bg-zinc-100 rounded-full'>
                </div>   
            </button>
            </div>
            <div className='w-1/2 h-[65vh] mt-5 rounded-2xl bg-[#a8be5a]'>
                <img className='w-full h-full rounded-xl bg-cover 'src={pic1} alt='' />

            </div>
        </div>
    </div>
  )
}

export default About
