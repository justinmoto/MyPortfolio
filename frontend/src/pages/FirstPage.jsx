import React from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import NavBar from '../components/NavBar'
import BgCircle from '../components/BgCircle'

const FirstPage = () => {
    const [text] = useTypewriter({
        words: ['Justin!'],
        loop:true,
        typeSpeed:120,
        delaySpeed:2000
    })


  return (
    <div className='h-screen bg-[#34353A] text-white relative tracking-wider sm:tracking-normal md:tracking-normal' id='home'>
        <BgCircle/>
        <div className='relative z-10 h-screen bg-[#d4d4d4] bg-opacity-10 backdrop-filter backdrop-blur-[70px]'>
            <div className='flex justify-between items-center p-10 relative'>
                <h1 className='text-[40px] font-extrabold text-[#FAD26E] z-20 sm:text-[35px]'>PORTFOLIO.</h1>
                <NavBar/>
                <div className='xxs:hidden xs:hidden sm:hidden md:hidden lg:hidden font-bold'>
                    V1.1
                </div>  
            </div>

            <div className='flex flex-col justify-center items-center text-center h-[60%] xxs:h-[60%]'>
                <h1 className='text-[70px] font-extrabold xxs:text-[50px] sm:text-[60px]'>Hi, I'm <span className='text-[#FAD26E]'>{text}<Cursor/></span></h1>
                <h2 className='text-[40px] font-extrabold mx-[20%] xxs:mt-5 xxs:mx-[3%] xs:mx-[3%] xs:text-[30px] xxs:text-[25px] sm:text-[30px] sm:mx-[5%] md:mx-[2%] lg:mx-[2%] xl:mx-[5%] 2xl:mx-[10%]'>A Freelance 
                    <span className='text-[#FAD26E]'> UI/UX Designer </span> & 
                    <span className='text-[#FAD26E]'> Front-End Developer </span> 
                    based in 
                    <span className='text-[#FAD26E]'> San Jose Del Monte, Bulacan</span></h2>
                <p className='text-[20px] mx-[20%] mt-5 xxs:text-[15px] xxs:mx-[10%] xs:mx-[10%] sm:mx-[2%] md:mx-[3%] lg:mx-[5%] xl:mx-[5%] 2xl:mx-[7%]'>I craft seamless <span className='text-[#FAD26E]'>user experiences and build dynamic, responsive websites</span> tailored to bring your vision to life. Let’s work together to <span className='text-[#FAD26E]'>turn ideas into engaging digital solutions.</span></p>
            </div>
        </div>
    </div>
  )
}

export default FirstPage