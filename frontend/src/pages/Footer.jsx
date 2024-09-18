import React from 'react'
import { FaFacebook,FaGithub,FaLinkedin } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";
const Footer = () => {
  return (
    <div className='h-[15vh] xs:h-[30vh] sm:h-[25vh] md:h-[25vh] lg:h-[25vh] xl:h-[25vh] 2xl:h-[19vh] bg-[#34353A] text-white flex flex-col justify-center items-center space-x-10'>
      <div className='border-b-2 flex justify-center items-center space-x-16 w-[50%] p-2 xs:flex xs:flex-col xs:space-x-0 xs:space-y-3 xs:w-[75%] sm:flex sm:flex-col sm:space-x-0 sm:space-y-3 sm:w-[75%] md:flex md:flex-col md:space-x-0 md:space-y-3 md:w-[75%] lg:w-[90%] xl:w-[78%] 2xl:w-[65%]'>
            <h1 className='font-extrabold text-[25px] text-[#FAD26E] xs:text-[20px]'>PORTFOLIO.</h1>

            <div className='flex space-x-5 text-[30px] xs:text-[25px]'>
                <FaFacebook />
                <FaGithub />
                <FaLinkedin />
                <ImMail4 />
            </div>

            <ol className='flex space-x-5'>
                <a href="#home"><li>Home</li></a>
                <a href="#about"><li>About</li></a>
                <a href="#works"><li>Works</li></a>
                <a href="#achievements"><li>Achievements</li></a>
                <a href="#contact"><li>Contact</li></a>
            </ol>

      </div>

      <div className='mt-5 text-center'>
            <h1>© 2024 Justin Mark Agustin. All Rights Reserved.</h1>
            <h1 className='text-[12px]'>Made by HTML, CSS, JavaScript, React & Tailwind</h1>
      </div>
    </div>
  )
}

export default Footer