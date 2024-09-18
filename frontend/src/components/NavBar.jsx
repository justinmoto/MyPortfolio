import{useState} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome,FaInfoCircle,FaFolder,FaMedal} from "react-icons/fa";
import { RiContactsBook2Fill } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";
const NavBar = () => {
    const NavBarItems = [
        {name: 'Home', href:'#home'},
        {name: 'About', href:'#about'},
        {name: 'Works', href:'#works'},
        {name: 'Achievements', href:'#achievements'},
        {name: 'Contact', href:'#contact'}
    ]

    const SideNavBarItems = [
      {name: 'Home', href:'#home', icon:<FaHome/>},
      {name: 'About', href:'#about', icon:<FaInfoCircle/>},
      {name: 'Works', href:'#works', icon:<FaFolder/>},
      {name: 'Achievements', href:'#achievements', icon:<FaMedal/>},
      {name: 'Contact', href:'#contact', icon:<RiContactsBook2Fill/>}
  ]

    const [isOpen, setIsOpen] = useState(false)
    
    const handleOpen = () => {
      setIsOpen(!isOpen)
    }

    const handleClose = () => {
      setIsOpen(false)
    }
  return (
    <div className=''>
      <ol className='flex space-x-20 bg-[#34353A] py-4 px-24 rounded-full relative z-20 xs:hidden sm:hidden md:hidden lg:hidden xl:space-x-10 xl:px-16'>
          {NavBarItems.map((items, i) =>
          <div key={i} className='text-[20px]'>
              <a href={items.href}>
                <li className=''>{items.name}</li>
              </a>
          </div>  
      )}
      </ol>

      {/*SideBar when sm and md screen*/}
      <div className='xl:hidden 2xl:hidden 3xl:hidden'>
          <GiHamburgerMenu onClick={handleOpen} className='text-[30px]'/>
      </div>

      <div className={!isOpen ? 'hidden' : 'absolute left-0 top-0 h-screen w-[50%] lg:w-[30%] bg-[#34353A] z-50'}>
        <IoIosClose onClick={handleClose} className='absolute right-0 text-[30px]'/>
        <h1 className='text-[30px] font-extrabold text-[#FAD26E] z-20 text-center mt-10'>PORTFOLIO.</h1>
            <div className='flex justify-center'>
              <div className='space-y-10'>
                {SideNavBarItems.map((items, i) =>
                  <div key={i} className='text-[20px] '>
                      <ol className=''>
                        <a href={items.href} className=''>
                          <li className='flex items-center gap-5 mt-10 w-full'>{items.icon}{items.name}</li>
                        </a>
                      </ol>
                </div> 
                )}
              </div>
            </div>

        <div className='text-center mt-[100%]'>
            Dark Mode
          </div>
      </div>


    </div>

  )
}

export default NavBar