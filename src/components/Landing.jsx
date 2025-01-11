import { MoveRight } from 'lucide-react'
import React from 'react'
import { AllLandingAnimation, HandingAnimationLeft, HandingAnimationright } from './HandingAnimation'

const Landing = () => {
  return (
    <div className='lg:h-screen  flex items-center flex-col md:flex-row pt-28 md:pt-0 justify-between bg-primarypurple/20 md:px-11 p-5   lg:pt-0 md:gap-10 '>
      <div className='lg:w-1/2 flex flex-col gap-4'>
        <span className='text-primarypink text-xl font-semibold'>Empowering Minds, Shaping Futures
        </span>
        {/* <h1 className='text-6xl font-quicksand font-bold leading-tight text-primarydarkblue'>Welcome to Educe Institution of Computer Education</h1> */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-quicksand font-bold xl:6xl xl:leading-tight text-primarydarkblue">
          Welcome to Educe Institution of Computer Education
        </h1>

        <p className='font-medium opacity-70 font-mulish text'>Located at Kodihalli, Kanakapura Taluk, Educe Institution of Computer Education is committed to providing high-quality education that equips students with the skills they need for a successful career.</p>
        <div className=''>
          <button className='text-primarywhite flex items-center  gap-4 bg-primaryblue px-10 py-2.5 rounded-xl hover:bg-primaryblue/80   duration-300 '>Explore the courses <MoveRight className='mt-0.5 ' size={18} /></button>
        </div>
      </div>
      <div className='hidden lg:flex  gap-5 font-quicksand overflow-hidden h-[100vh]'>
        <HandingAnimationLeft />
        <HandingAnimationright />
      </div>
      <div className='mt-10 md:mt-0 w-full justify-center  lg:hidden  flex gap-5 -mb-5 md:mb-0 font-quicksand overflow-hidden h-[100vh]'>
        <AllLandingAnimation />
      </div>
    </div>
  )
}

export default Landing
