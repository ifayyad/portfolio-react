import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'

const Skills = () => {
  return (
    <div className='bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
            <div>
                <p className='text-4xl'>Experience </p>
                <p>languages I've worked with</p>
            </div>
            <div>
                <div>
                    <img className='' src={HTML} alt="HTML icon" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills