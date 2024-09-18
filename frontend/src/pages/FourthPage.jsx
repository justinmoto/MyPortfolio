import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import BgCircle from '../components/BgCircle'

const FourthPage = () => {
    const awardinfo = [
        {
            year:'2024',
            title:'Symposium 2024',
            award:['Best Research Award'],
            info:'In a competition organized by STI College San Jose Del Monte in January 2024, our group presented our thesis on an appointment system for a veterinary hospital in San Jose Del Monte. Our project aimed to make scheduling easier and more efficient. We worked hard and our efforts paid off when we won the Best Research Award. This award shows the value of our work and the support we received from STI College San Jose Del Monte. It highlights our team success and the positive impact of our project on improving veterinary care management.'
        },

        {
            year:'2023',
            title:'STI Tagisan ng Talino - Codefest Competition 2023',
            award:['Local and Cluster Level Champion 2023', 'National Level Finalist 2023'],
            info:'In the STI Tagisan ng Talino - Codefest Competition 2023, organized by STI College, our team built a mobile app based on a problem given to us with a tight deadline. We started by competing at our school and won the Local Level Champion 2023 title, which allowed us to represent our branch. Next, we competed at the cluster level against other STI branches and won again, representing Cluster 2 at the national competition. Although we didn’t win at the nationals, we were excited to be listed among the top 8 branches in the country. This achievement shows our team’s hard work and ability to succeed in a tough competition.'
        },
    ]

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
      }, []);
  return (
    <div className='h-screen sm:h-[120vh] md:h-[130vh] lg:h-[130vh] xl:h-[110vh] bg-[#34353A] relative tracking-wider' id='achievements'>
        <BgCircle/>
        <div className='relative z-10 h-screen bg-[#d4d4d4] bg-opacity-10 backdrop-filter backdrop-blur-[70px] sm:h-[120vh] md:h-[130vh] lg:h-[130vh] xl:h-[110vh]'>     
            <h1 className='text-[70px] font-extrabold px-[10%] text-white text-center pt-10 xs:text-[50px] sm:text-[50px] md:text-[50px]'>Achievements<span className='text-[#FAD26E]'>.</span></h1>
            {awardinfo.map((award,i) => (
            <div key={i} className='flex justify-center pt-12 xs:pt-5 sm:pt-7 md:pt-10'>
                <div className='w-[50%] xs:w-[90%] sm:w-[90%] md:w-[72%] lg:w-[80%] xl:w-[80%] 2xl:w-[75%]'>
                    <ul>
                        <li className='text-white relative flex items-baseline gap-10' data-aos={'fade-left'}>
                            <div className='before:absolute before:top-[15%] xs:before:top-[15%] sm:before:top-[12%] md:before:top-[11%] lg:before:top-[13%]
                            2xl:before:top-[19%] before:left-[30px] before:h-full xs:before:h-[85%] sm:before:h-[93%] before:w-[6px] before:bg-white'>
                                <h1 className='text-[29px] font-extrabold text-white xs:text-[25px]'>{award.year}</h1>
                            </div>
                            <div className=''>
                                <h1 className='text-[30px] text-[#FAD26E] font-extrabold xs:text-[25px]'>{award.title}</h1>
                                {award.award.map((arc,index) => (
                                <div className='font-bold'>
                                    <p key={index}>{arc}</p>
                                </div>
                                ))}
                                <p className='mt-5 text-[18px] xs:text-[13px]'>{award.info}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default FourthPage