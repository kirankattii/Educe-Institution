import { MoveRight } from 'lucide-react'
import React from 'react'
import { HandingAnimationLeft, HandingAnimationright } from './HandingAnimation'

const Landing = () => {
  return (
    <div className=' h-screen flex items-center justify-between bg-primarypurple/20 px-11 mt-0 pt-0'>
      <div className='w-1/2 flex flex-col gap-4'>
        <span className='text-primarypink text-xl font-semibold'>Empowering Minds, Shaping Futures
        </span>
        <h1 className='text-6xl font-quicksand font-bold leading-tight text-primarydarkblue'>Welcome to Educe Institution of Computer Education</h1>
        <p className='font-medium opacity-70 font-mulish text'>Located at Kodihalli, Kanakapura Taluk, Educe Institution of Computer Education is committed to providing high-quality education that equips students with the skills they need for a successful career.</p>
        <div className='w-1/2'>
          <button className='text-primarywhite flex items-center  gap-4 bg-primaryblue px-10 py-2.5 rounded-xl hover:bg-primaryblue/80   duration-300 '>Explore the courses <MoveRight className='mt-0.5 ' size={18} /></button>
        </div>
      </div>
      <div className='flex gap-5 font-quicksand '>
        <HandingAnimationLeft />
        <HandingAnimationright />
      </div>
    </div>
  )
}

export default Landing
