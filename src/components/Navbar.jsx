import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.png';
import {Link} from 'react-scroll'

const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#9de5eb] text-pink-600 text-2xl'  >
      <div>
          <Link to="home" smooth={true} duration={500} >
          <img className='mt-6 sm:w-[80px] w-[50px] hover:cursor-pointer' src={Logo} alt="Logo image"  />
          </Link>
      </div>

        {/* Menu */}
          <ul className='hidden md:flex '>
            <li>
            <Link to="home" smooth={true} duration={500} >
            Home
            </Link>
            </li>
            <li>
            <Link to="about" smooth={true} duration={500} >
            About
            </Link>
            </li>
            <li>
            <Link to="skills" smooth={true} duration={500} >
            Skills
            </Link>
            </li>
            <li>
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
            : 'absolute top-0 left-0 w-full h-screen bg-[#9de5eb] flex flex-col justify-center items-center'
        }>
            <li className='py-6 text-xl'>
              <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className='py-6 text-xl'>
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li className='py-6 text-xl'>
            <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                Skills
              </Link>
            </li>
            <li className='py-6 text-xl'>
            <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
     
        {/* Social media icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-700 bg-orange-600'>
              <a className='flex justify-between items-center w-full text-gray-100'
              href='/'>
                LinkedIn<FaLinkedin size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between  items-center ml-[-100px] hover:ml-[-10px] duration-700 bg-sky-600'>
              <a className='flex justify-between items-center w-full text-gray-100'
              href='/'>
                GitHub <FaGithub size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-700 bg-yellow-300'>
              <a className='flex justify-between items-center w-full text-gray-100'
              href='/'>
                Email <HiOutlineMail size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-700 bg-rose-500'>
              <a className='flex justify-between items-center w-full text-gray-100'
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

