import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#9de5eb]  text-[#0a192f]' >
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
            <div className='py-16'>
                <p className='sm:text-5xl text-3xl font-bold inline border-b-4 border-pink-600'>Skills </p>
                
            </div>
            
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-16 text-center py-8'>
                
                <div className='sm:w-[100px] md:w-[150px] w-[50px] hover:scale-125 duration-500 hover:cursor-cell '>
                    <img className='' src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>

                <div className='sm:w-[100px] md:w-[150px] w-[50px] hover:scale-125 duration-500 hover:cursor-wait'>
                    <img className='' src={CSS} alt="HTML icon" />
                    <p className='my-4'>CSS</p>
                </div>

                <div className='sm:w-[100px] md:w-[150px] w-[50px] hover:scale-125 duration-500 hover:cursor-help '>
                    <img className='' src={JavaScript} alt="HTML icon" />
                    <p className='my-4'>JavaScript</p>
                </div>

                <div className='sm:w-[100px] md:w-[150px] w-[50px] hover:scale-125 duration-500 hover:cursor-text '>
                    <img className='' src={ReactImg} alt="HTML icon" />
                    <p className='my-4'>React</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Skills