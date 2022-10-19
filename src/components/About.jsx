import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#9de5eb] text-gray-300 '>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8 '>
              <div className='sm:text-right pb-8 pl-4'>
                <p className='text-5xl font-bold inline border-b-4 border-pink-600'>About</p>
              </div>
              <div>
            
              </div>
              </div>
            <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8 '>
              <div className='sm:text-right text-3xl font-bold '>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia vel omnis provident iure cumque earum dolorem qui ullam excepturi aut?
                </p>
              </div>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolore reprehenderit distinctio perferendis possimus quidem deserunt cupiditate cum ullam ipsam quod expedita debitis totam, tempora voluptate magnam corporis dicta sed rem laboriosam eum eos? Tenetur suscipit ea pariatur repellendus ipsam.</p>
              </div>
            </div>
            </div>
        
    </div>
  )
}

export default About