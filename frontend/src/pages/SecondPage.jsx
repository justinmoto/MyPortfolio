import {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const SecondPage = () => {
  const development = [
    {src: '/assets/html.png', alt: 'HTML logo'},
    {src: '/assets/css.png', alt: 'CSS logo'},
    {src: '/assets/js.png', alt: 'JS logo'},
    {src: '/assets/react.png', alt: 'React logo'},
    {src: '/assets/tailwind.png', alt: 'Tailwind logo'},
    {src: '/assets/bootstrap.png', alt: 'Bootstrap logo'},
    {src: 'assets/vscode.png', alt: 'Visual Studio Code logo'},
    {src: 'assets/mongodb.png', alt: 'MongoDB logo'},
    {src: 'assets/php.png', alt: 'PHP logo'},
    {src: '/assets/nodejs.png', alt: 'NodeJS logo'},
    {src: '/assets/npm.png', alt: 'NPM logo'},
    {src: '/assets/express.png', alt: 'Express logo'},
    {src: '/assets/unity.png', alt: 'Unity logo'},
    {src: '/assets/c.png', alt: 'C# logo'},
    {src: '/assets/java.png', alt: 'Java logo'},
  ]

  const tools = [
    {src: '/assets/figma.png', alt: 'Figma logo'},
    {src: '/assets/canva.png', alt: 'Canva logo'},
    {src: '/assets/mysql.png', alt: 'MySQL logo'},
    {src: '/assets/github.png', alt: 'GitHub logo'},
    {src: '/assets/xampp.png', alt: 'XAMPP logo'},
  ]

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className='h-screen xxs:h-[105vh] xs:h-screen sm:h-[120vh] md:h-[120vh] lg:h-[110vh] 2xl:h-[110vh] bg-[#34353A] tracking-wider' id='about'>
        <div className='text-white pt-14 xs:pt-5'>
          <h1 className='text-[70px] font-extrabold px-[10%] xxs:text-[30px] xs:text-[50px] sm:text-[50px] md:text-[50px] lg:text-[60px] xl:text-[60px]'>About Me<span className='text-[#FAD26E]'>.</span></h1>
          <p className='text-[25px] font-medium mx-[15%] mt-5 xxs:text-[15px] xxs:mt-0 xs:text-[20px] xs:mt-0 sm:text-[20px] md:text-[20px] lg:text-[20px] xl:text-[20px]'>I'm 
            <span className='text-[#FAD26E]'> Justin Mark Agustin</span>, a self-taught programmer from San Jose Del Monte. I love watching movies, playing mobile and PC games, and <span className='text-[#FAD26E]'>diving into self-study</span>. I’m passionate about design and development, <span className='text-[#FAD26E]'>focusing on creating exceptional user experiences.</span></p>
        </div>

        <div className='mt-10 flex flex-col justify-center items-center' >
            <h1 className='text-[70px] font-extrabold text-center text-white xxs:text-[30px] xs:text-[50px] sm:text-[50px] md:text-[50px]'>My Skills<span className='text-[#FAD26E]'>.</span></h1>
            <div className='w-[70%] xs:w-[80%] sm:w-[80%] md:w-[78%] lg:w-[85%] xl:w-[80%]' data-aos={'fade-left'}>
              <h1 className='text-[25px] text-white xs:mt-5 xxs:text-[14px] xs:text-[17px] sm:mt-5 sm:text-[18px]'>Development</h1>
              <div className='flex flex-wrap gap-10 mt-5 xxs:mt-2 xxs:gap-5 xs:gap-6 sm:gap-6 md:gap-9 lg:gap-6 2xl:gap-10'>
                  {development.map((img,i) =>(
                    <div key={i} className=''>
                      <img src={img.src} alt={img.alt} className='w-[5vw] xxs:w-[13vw] xs:w-[8vw] xs:p-2 sm:w-[8vw] md:w-[8vw] lg:w-[7vw] xl:w-[5vw] 2xl:w-[5vw] bg-[#3D3E42] p-4 rounded-[15px] hover:bg-[#FAD26E]'/>
                    </div>
                  ))}
              </div>
            </div>
        </div>

        <div className='mt-10 xs:mt-2 flex justify-center items-center w-full ' data-aos={'fade-right'}>
            <div className='w-[70%] xs:w-[80%] sm:w-[80%] md:w-[80%] lg:w-[85%] xl:w-[80%]'>
              <h1 className='text-[25px] text-white xs:mt-5 xxs:text-[14px] xs:text-[17px] sm:text-[18px]'>Tools</h1>
            <div className='flex flex-wrap gap-10 mt-5 xxs:mt-2 xxs:gap-5 xs:gap-6 sm:gap-6 md:gap-9 lg:gap-6 2xl:gap-10'>
                  {tools.map((img,i) =>(
                    <div key={i} className=''>
                      <img src={img.src} alt={img.alt} className='w-[5vw] xxs:w-[13vw] xs:w-[8vw] xs:p-2 sm:w-[8vw] md:w-[8vw] lg:w-[7vw] xl:w-[5vw] bg-[#3D3E42] p-4 rounded-[15px] hover:bg-[#FAD26E]'/>
                    </div>
                  ))}
              </div>
            </div>
        </div>
    </div>
  )
}

export default SecondPage