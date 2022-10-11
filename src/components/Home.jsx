import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f] '>
        

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-a flex flex-col justify-center h-fall'>
      <p className='text-pink-600'>Hi, my name is</p>
      <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Ibrahim Fayyad</h1>
      <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a full stack developer</h2>
      </div>
      <div>
        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 '>View Work</button>
        <span className=' group-hover:rotate-90 duration-500'>
         <HiArrowNarrowRight className='ml-3' />
          </span>      
      </div>

    </div>
  )
}

export default Home