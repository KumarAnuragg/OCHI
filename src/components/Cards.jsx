import React from 'react'

function Cards() {
  return (
    <div className='flex gap-5 w-full h-screen px-32 items-center bg-zinc-900'>
        <div className='cardcontainer h-[50vh] w-1/2'>
            <div className=' relative flex items-center justify-center card rounded-xl w-full h-full bg-[#004D43]'>
                <img className=' w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt=""></img>
                <h1 className='absolute px-3 py-1 left-10 bottom-10 border-2 border-[#CDEA68] text-[#CDEA68] rounded-full'>&copy; 2019-2022</h1>
            </div>
            </div>
        <div className='flex gap-5 cardcontainer w-1/2 h-[50vh]'>
            <div className='relative flex items-center justify-center card rounded-xl w-1/2 h-full bg-zinc-950'>
            <img className=' w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt=""></img>
            <button className='absolute uppercase px-3 py-1 left-10 bottom-10 border-2 border-zinc-100 text-white rounded-full'>Rating 5.0 on clutch</button>
            </div>
            
            <div className='relative flex items-center justify-center card rounded-xl w-1/2 h-full bg-zinc-800'>
            <img className=' w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt=""></img>
            <button className='absolute uppercase px-3 py-1 left-10 bottom-10 border-2 border-zinc-100 text-white rounded-full'>Business bootcamp allumni</button>
            
            </div>
        </div>
    </div>
    
  )
}

export default Cards
