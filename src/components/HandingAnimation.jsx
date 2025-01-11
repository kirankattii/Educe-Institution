import { Award, Eye, Laptop, Star, Telescope } from 'lucide-react'
import React from 'react'

export const HandingAnimationLeft = () => {
  return (
    <div className="relative h-screen overflow-hidden ">
      <div className="flex flex-col gap-3 animate-marquee">
        <Card2 />
        <Card1 />
        <Card3 />


        <Card2 />
        <Card1 />
        <Card3 />



      </div>
    </div>
  )
}

export const HandingAnimationright = () => {
  return (
    <div className="relative h-screen overflow-hidden ">
      <div className="flex flex-col gap-3 animate-marquee">
        <Card5 />
        <Card7 />
        <Card4 />
        <Card6 />

        <Card5 />
        <Card7 />
        <Card4 />
        <Card6 />
      </div>
    </div>
  )
}

export const AllLandingAnimation = () => {
  return (
    <div className="relative h-screen overflow-hidden ">
      <div className="flex flex-col gap-3 animate-marquee">
        <Card2 />
        <Card1 />
        <Card3 />

        <Card5 />
        <Card7 />
        <Card4 />
        <Card6 />



        <Card2 />
        <Card1 />
        <Card3 />

        <Card5 />
        <Card7 />
        <Card4 />
        <Card6 />

      </div>
    </div>
  )
}



const Card1 = () => {
  return <div className='w-60 gap-2 flex flex-col   bg-primarypurple/40 rounded-xl p-4'>
    <h1 className='font-bold'>Why Chose Educe?</h1>
    <ul className='flex gap-1 flex-col font-medium text-sm '>
      <li>Expert Faculty</li>
      <li>Affordable Education</li>
      <li>Flexible Learning</li>
      <li>Career-Ready Skills</li>
      <li>Student Support</li>
    </ul>
  </div>
};
const Card2 = () => {
  return <div className='w-60 relative bg-primarywhite rounded-xl '>
    <div className='w-full h-full  bg-primaryblack/80  rounded-xl  absolute opacity-20 '></div>
    <div className='flex flex-col items-center -mb-5 mt-5 '>
      <h1 className='font-bold text-2xl'>5k +</h1>
      <p className='font-medium'>Happy Student</p>
    </div>
    <img src="/landing1.svg" className='w-[60%] h-[55%] m-auto mt-10' alt="" />
  </div>
};
const Card3 = () => {
  return <div className='w-60 rounded-xl  overflow-hidden  bg-primarygreen p-4 relative h-60'>
    <h1 className='font-bold'>Our Vision</h1>
    <p className='font-medium leading-5 text-sm '>To empower students with knowledge, skills, and confidence to achieve their career aspirations.
    </p>
    <div className='w-[75px] h-[75px]  mt-14 -ml-7 bg-primarypink rounded-full flex items-center justify-center '>
      <Eye size={40} className='text-primarywhite' />
    </div>
    <img src="/cornerDesign.svg" className='ml-4 -mb-4 overflow-hidden absolute  right-0  bottom-0 h-[300px]
    ' alt="" />
  </div>
};


const Card4 = () => {
  return <div className='w-60 relative bg-primarygreen rounded-xl '>
    <div className='w-full h-full  bg-primaryblack/80 rounded-xl absolute opacity-25'></div>
    <img src="/landing2.svg" alt="" />
    <div className='absolute bottom-6  text-primarywhite font-bold text-2xl  m-auto w-full flex items-center justify-center  flex-col'>
      <h1 className='font-medium flex items-center gap-2'>4.8 <Star className='text-primaryGold' size={24} /></h1>
      <span className='text-sm'>High Rated</span>
    </div>
  </div>
};

const Card5 = () => {
  return <div className='w-60  overflow-hidden  bg-primarygreen p-4 rounded-xl relative h-60'>
    <h1 className='font-bold'>Our Mission</h1>
    <p className='font-medium leading-5 text-sm '>To provide affordable and high - quality education, blending theoretical knowledge with practical experience for a competitive edge.
    </p>
    <div className='w-[75px] h-[75px]  mt-5
     ml-32  rounded-full flex items-center justify-center  bg-primarypurple text-primarywhite'>
      <Telescope size={40} className='' />
    </div>
    <img src="/cornerDesign.svg" className='ml-0 rotate-90 mt-6 overflow-hidden absolute  left-12  top-0 h-[280px]
    ' alt="" />
  </div>
};


const Card6 = () => {
  return <div className='w-60 relative bg-primarypink rounded-2xl '>
    <div className='w-full h-full  bg-primaryblack/80 rounded-2xl  absolute opacity-10 '></div>

    <img src="/statistics.jpg" className='w-[100%] h-[55%] m-auto rounded-xl ' alt="" />
    <div className='flex m-auto gap-3 justify-center  items-center mt-5 mb-5 text-center'>
      <Award className='text-primarywhite' size={40} />
      <h1 className='font-bold text-xl text-primarywhite'>Expert Teacher</h1>

    </div>
  </div>
};


const Card7 = () => {
  return <div className='w-60 relative bg-primarypurple/80 rounded-2xl '>
    <div className='w-full h-full  bg-primaryblack/80 rounded-2xl  absolute opacity-10 '></div>

    <img src="/usingpc.jpg" className='w-[100%] h-[55%] m-auto rounded-xl ' alt="" />
    <div className='flex m-auto  items-center my-5 text-center justify-center gap-3'>
      <Laptop className='text-primarywhite' size={40} />
      <h1 className='font-bold text-xl text-primarywhite'>Modern Lab
      </h1>

    </div>
  </div>
};


export const styles = `
  @keyframes marquee {
    0% { transform: translateY(0); }
    100% { transform: translateY(-50%); }
  }
  .animate-marquee {
    animation: marquee 12s linear infinite;
  }
  .relative {
    position: relative;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .h-96 {
    height: 25rem;
  }
`;