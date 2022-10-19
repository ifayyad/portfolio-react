import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#9de5eb]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600 font-bold sm:text-2xl text-0xl'>Hi, my name is: </p>
        <h1 className='pb-2 sm:text-8xl font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-blue-800 to-green-600'>
          Ibrahim Fayyad
        </h1>
        <h2 className='mb-2 text-2xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-blue-400'>
          I'm a Full Stack Developer
        </h2>
        
        <div>
          <button className='text-black group border-4 px-4 py-3 my-2 flex items-center hover:bg-pink-400 hover:border-pink-400'>
            Wanna get in touch?
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;