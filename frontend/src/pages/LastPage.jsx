import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaFacebook,FaGithub,FaLinkedin } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { ImMail4 } from "react-icons/im";
const LastPage = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_0jh6iyi', 'template_xgz587b', form.current, {
          publicKey: 'zXelnN0tsYPo4b87x',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            form.current.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  return (
    <div className='h-[90vh] sm:h-[150vh] md:h-[150vh] bg-[#34353A]' id='contact'>
        <h1 className='text-[70px] font-extrabold px-[10%] text-white text-center pt-16 sm:text-[50px] md:text-[50px]'>Contact Me<span className='text-[#FAD26E]'>.</span></h1>
        <div className='flex justify-center items-center gap-10 mt-16 sm:flex-col sm:mt-7 md:flex-col md:mt-7 lg:mx-10 lg:mt-10 xl:mx-[6%]'>
            <div className='text-white sm:flex sm:justify-center sm:flex-col sm:items-center md:flex md:justify-center md:flex-col md:items-center '>
                <h1 className='font-bold text-[30px] text-center w-[80%] lg:w-[100%]'>Let's Work Together</h1>
                <p className='text-[17px] w-[80%] text-center mt-5 lg:w-[100%]'>Want to discuss an opportunity to create something great? I'm ready when you are.</p>
                <div className='space-y-10 mt-14 lg:mt-8'>
                    <div className='flex items-center gap-7'>
                        <FaFacebook className='bg-[#3D3E42] text-[50px] p-2 rounded-[15px]'/>
                        <a href='https://www.facebook.com/jamactin13/'><p>www.facebook.com/jamactin13</p></a>
                    </div>
    
                    <div className='flex items-center gap-7'>
                        <ImMail4 className='bg-[#3D3E42] text-[50px] p-2 rounded-[15px]'/>
                        <p>justinmk134@gmail.com</p>
                    </div>
    
                    <div className='flex items-center gap-7'>
                        <FaGithub className='bg-[#3D3E42] text-[50px] p-2 rounded-[15px]'/>
                        <a href='https://github.com/justinmoto'><p>https://github.com/justinmoto</p></a>
                    </div>
    
                    <div className='flex items-center gap-7'>
                        <FaLinkedin className='bg-[#3D3E42] text-[50px] p-2 rounded-[15px]'/>
                        <a href='https://www.linkedin.com/in/justinmarkagustin-1a3101298/'><p className=''>https://www.linkedin.com/in/justinmarkagustin-1a3101298/</p></a>
                    </div>
                </div>
            </div>

            <div className='bg-[#3D3E42] h-full rounded-[20px] flex justify-center items-center lg:w-[90%]'>
                <form ref={form} onSubmit={sendEmail}>
                    <div className='p-10 space-y-5 text-white '>
                     <div>
                        <label className='font-bold'>Name</label>
                        <input type="text"  name="user_name" className='block bg-[#34353A] rounded-[15px] p-3 mt-2 w-[100%]'/>
                        
                     </div>
    
                    <div>
                        <label className='font-bold'>Email</label>
                        <input type="text"  name="user_email" className='block bg-[#34353A] rounded-[15px] p-3 mt-2 w-[100%]'/>
                        
                    </div>
    
                    <div>
                        <label className='font-bold'>Message</label>
                        <textarea  name="message" id="" rows='4' cols='50' className='block bg-[#34353A] rounded-[15px] p-3 mt-2 w-[100%]'></textarea>
                        
                    </div>
    
                    <div className='flex justify-center text-black'>
                        <button type="submit" value="Send" className='bg-[#FAD26E] flex  items-center gap-3 p-2 px-7  mt-5 rounded-[15px] font-semibold'>Send Message<IoIosSend className='text-[28px]'/></button>  
                    </div>
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default LastPage