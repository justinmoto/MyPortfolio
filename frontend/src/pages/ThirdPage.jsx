import React from 'react';
import { IoIosLink } from 'react-icons/io';

const ThirdPage = () => {
  const works = [
    {
        src: '/assets/flextrack.jpg',
        title: 'Flextrack',
        info: 'A exercise tracking website offers a seamless, user-friendly experience for monitoring physical activity, designed to enhance fitness routines while ensuring accessibility across devices, helping users stay committed to their health goals.',
        dev: ['HTML', 'CSS', 'React', 'Tailwind', 'Express', 'JavaScript', 'MongoDB', 'NodeJS'],
        link: 'https://github.com/justinmoto/FlexTrack-MERN',
        icon: IoIosLink,
    },

    {
        src: '/assets/plmun.jpeg',
        title: 'PLMun',
        info: 'A appointment scheduling system simplifies coordination for clients, allowing them to easily book rehearsals, meetings, or performances with the chorale group, ensuring smooth management and streamlined communication.',
        dev: ['HTML', 'CSS', 'React', 'Tailwind', 'Express', 'JavaScript', 'PHP', 'NodeJS', 'MySQL'],
        link: 'https://github.com/justinmoto/PLMun-CRUD',
        icon: IoIosLink,
    },

    {
        src: '/assets/pawscare.jpeg',
        title: 'Paws Care',
        info: 'A veterinary shop landing page offers a welcoming and informative space where clients can quickly access services, book appointments, and learn about pet care, ensuring a smooth and caring experience.',
        dev: ['HTML', 'CSS', 'React', 'Tailwind','JavaScript'],
        link: 'https://github.com/justinmoto/PawsCare-FRONTEND',
        icon: IoIosLink,
    },

    {
        src: '/assets/TreesResidence.jpeg',
        title: 'Trees Residence',
        info: 'A staycation condo landing page invites guests to explore a cozy retreat, showcasing amenities, booking options, and local attractions, providing a seamless and inviting experience for potential vacationers.',
        dev: ['HTML', 'CSS', 'React', 'Tailwind', 'JavaScript'],
        link: 'https://example.com',
        icon: IoIosLink,
    },

    {
        src: '/assets/brainwise.jpeg',
        title: 'Brainwise',
        info: 'A elementary ELMS landing page, designed in Figma for my client, offers an intuitive and engaging interface, enabling students and teachers to access learning materials and manage courses with ease and clarity.',
        dev: ['Figma'],
        link: 'https://www.figma.com/design/sIMw3PKEbB4SJEKUCV9mkx/Brainwise?node-id=0-1&t=1R05XxMT2piBgj3v-1',
        icon: IoIosLink,
    },

    {
        src: '/assets/pixelwanderer.png',
        title: 'Pixel Wanderer',
        info: 'A platformer game features two captivating levels with dynamic challenges and smooth controls, delivering an engaging adventure through creatively designed environments that offer players a rewarding and enjoyable experience.',
        dev: ['Unity', 'C#'],
        link: 'https://drive.google.com/file/d/1lewY22eIQT77YGNaFOms5Rpr3Rx-hNcm/view?usp=sharing',
        icon: IoIosLink,
    },
];

return (
    <div className='h-[150vh] xs:h-[437vh] sm:h-[470vh] md:h-[485vh] lg:h-[225vh] xl:h-[225vh] 2xl:h-[170vh] bg-[#34353A] pt-10' id='works'>
      <h1 className='text-[70px] font-extrabold px-[10%] text-white text-center xs:text-[50px] sm:text-[50px] md:text-[50px]'>Works<span className='text-[#FAD26E]'>.</span></h1>

      <div className='mt-10 mx-10'>
        <div className='flex flex-wrap justify-center gap-10'>
          {works.map((card, i) => {
            const Icon = card.icon; 
            return (
              <div key={i} className='transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-[#3D3E42] rounded-[20px] w-[30%] h-[60vh]  flex flex-col xs:w-[100%] xs:h-[65vh] sm:w-[85%] sm:h-[70vh] md:w-[80%] md:h-[73vh] lg:w-[48%] lg:h-[62vh] xl:w-[45%] xl:h-[62vh] 2xl:h-[67vh]'>
                <div className='flex-grow'>
                  <img src={card.src} alt={card.title} className='rounded-t-[20px] w-full' />
                  <h1 className='text-white text-[20px] font-extrabold px-5 mt-4'>{card.title}</h1>
                  <p className='text-white px-5 mb-4'>{card.info}</p>
                  <div className='flex flex-wrap gap-2 px-4 mt-2'> 
                    {card.dev.map((tech, index) => ( // To Have Border Each Item in the array
                      <div key={index} className='text-center rounded-full bg-[#34353A] text-white px-4 py-2'>
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>

                <div className='px-5 pb-4'>
                  <a href={card.link} className='flex items-center text-white hover:text-blue-400'>
                    <Icon className='mr-2' /> 
                    Live Preview
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;
