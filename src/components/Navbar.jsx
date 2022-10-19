import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.png';
import {Link} from 'react-scroll'

const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav[!nav]

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#9de5eb] text-gray-300'  >
      <div>
          <img src={Logo} alt="Logo image" style={{width:'50px'}} />
      </div>

        {/* Menu */}
          <ul className='hidden md:flex '>
            <li className='font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-pink-800 to-pink-400'>
            <Link to="home" smooth={true} duration={500} >
            Home
            </Link>
            </li>
            <li className='font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-pink-800 to-pink-400'>
            <Link to="about" smooth={true} duration={500} >
            About
            </Link>
            </li>
            <li className='font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-pink-800 to-pink-400'>
            <Link to="skills" smooth={true} duration={500} >
            Skills
            </Link>
            </li>
            <li className='font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-pink-800 to-pink-400'>
            <Link to="contact" smooth={true} duration={500} >
            Contact
            </Link>
            </li>
          </ul>
       

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile menu */}
        <ul className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }>
            <li className='py-6 text-xl'>Home</li>
            <li className='py-6 text-xl'>About</li>
            <li className='py-6 text-xl'>Skills</li>
            <li className='py-6 text-xl'>Work</li>
            <li className='py-6 text-xl'>Contact</li>
          </ul>
     
        {/* Social media icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-700 bg-blue-600'>
              <a className='flex justify-between items-center w-full text-gray-300'
              href='/'>
                LinkedIn <FaLinkedin size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-700 bg-blue-600'>
              <a className='flex justify-between items-center w-full text-gray-300'
              href='/'>
                GitHub <FaGithub size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-700 bg-blue-600'>
              <a className='flex justify-between items-center w-full text-gray-300'
              href='/'>
                Email <HiOutlineMail size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-700 bg-blue-600'>
              <a className='flex justify-between items-center w-full text-gray-300'
              href='/'>
                Resume <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </ul>

        </div>
    </div>
  )
}

export default Navbar

