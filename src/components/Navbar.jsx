import { Headset } from 'lucide-react'
import React from 'react'
const nav = [
  {
    name: 'Home', link: '#'
  },
  {
    name: 'About Us', link: '#'
  },
  {
    name: 'Courses', link: '#'
  },
  {
    name: 'Programs', link: '#'
  },
  {
    name: 'Pricing', link: '#'
  },

]

const Navbar = () => {
  return (
    <nav className='z-20  bg-primarywhite fixed top-0 left-0 right-0 py-4  flex items-center justify-between px-11'>
      <h1 className='font-quicksand font-bold text-4xl'>Educe <span className='text-primaryblue '>Institution</span></h1>
      <div className='flex items-center gap-10 '>
        <ul className='font-mulish flex items-center gap-10 '>
          {nav.map((item, index) => (
            <li key={index} className='cursor-pointer hover:text-primaryblue font-semibold '>{item.name}</li>
          ))}
        </ul>
        <button className="text-primarywhite flex items-center  gap-2 bg-primaryblue px-4 py-1.5 rounded-md hover:bg-primaryblue/80   duration-300 "><Headset size={20} /> Contact Us</button>

      </div>
    </nav>
  )
}

export default Navbar
