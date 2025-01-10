import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col gap-5 px-16'>
      <span className='text-primarypink text-xl mt-10 font-medium font-mulish -mb-4'>About Us</span>
      <h2 className='text-5xl font-bold text-primarydarkblue font-quicksand'>About Educe Institution of   Computer Education</h2>
      <div className='flex gap-5 font-mulish mt-10 '>
        <img src="/about.png" alt="" className='w-2/5' />
        <div className='w-3/5 flex flex-col gap-5 text-justify bg-primaryblue/5 p-10'>
          <p className='text-primaryblack/80'>At Educe Institution of Computer Education, we believe education is the key to empowerment. Since our establishment, we have been dedicated to providing top-notch computer education and professional development courses to students from all walks of life.
            <br />
            Located near Kodihalli Police Station, our institution offers a range of diploma and professional courses designed to meet the demands of the modern workplace. From office management to advanced accounting and spoken English, we ensure our students are well-prepared to excel in their chosen careers.</p>
          <div>
            <span className='text-primarypink text-lg'>Our Vision</span>
            <p className='text-primaryblack/80'>To empower students with knowledge, skills, and confidence to achieve their career aspirations.</p>
          </div>
          <div>
            <span className='text-primarypink  text-lg'>Our Mission</span>
            <p className='text-primaryblack/80'>To provide affordable and high-quality education, blending theoretical knowledge with practical experience for a competitive edge.</p>
          </div></div>
      </div>
    </div>
  )
}

export default About
