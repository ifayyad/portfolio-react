import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#9de5eb] flex justify-center items-center p-4'>
        <form action="" className='flex flex-col max-w-[600px] w-full '>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300  '>Contact</p>
                <p className='text-gray-300 py-4'></p>
            </div>

            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type="text" placeholder='Email' name='email'/>
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Type your message here!'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Send</button>

        </form>
    </div>
  )
}

export default Contact