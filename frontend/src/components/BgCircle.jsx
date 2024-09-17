import React from 'react'

const BgCircle = () => {
  return (
    <>
      <div className='absolute bg-[#FAD26E] h-[30vh] w-[8vw] bottom-0 left-0 rounded-r-full z-1'></div> {/*Bottom-Left Circle*/}
      <div className='absolute bg-[#FAD26E] h-[30vh] w-[8vw] top-96 right-0 rounded-l-full z-1'></div> {/*Right-Mid Circle*/}
      <div className='absolute bg-[#FAD26E] h-[15vh] w-[15vw] top-0 left-[30%] rounded-b-full z-1'></div> {/*Top-Mid Circle*/}
      <div className='absolute bg-[#FAD26E] h-[20vh] w-[10vw] top-[30%] left-[15%] rounded-full z-1'></div> {/*Mid Circle*/}
      <div className='absolute bg-[#FAD26E] h-[20vh] w-[10vw] top-[70%] right-[25%] rounded-full z-1'></div> {/*Bottom-Right Circle*/}
      <div className='absolute bg-[#FAD26E] h-[20vh] w-[10vw] top-[10%] right-[20%] rounded-full z-1'></div> {/*Top-Right Circle*/}
    </>
  )
}

export default BgCircle