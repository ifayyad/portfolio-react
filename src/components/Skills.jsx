import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'

const Skills = () => {
  return (
    <div className='bg-[#0a192f]  text-gray-300' >
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 py-4'>Experience </p>
                <p className='py-4'>languages I've worked with</p>
            </div>
            
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-16 text-center py-8'>
                
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <img className='' src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <img className='' src={CSS} alt="HTML icon" />
                    <p className='my-4'>CSS</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <img className='' src={JavaScript} alt="HTML icon" />
                    <p className='my-4'>JavaScript</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <img className='' src={ReactImg} alt="HTML icon" />
                    <p className='my-4'>React</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Skills