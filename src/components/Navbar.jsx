// import { Headset } from 'lucide-react'
// import React from 'react'
// const nav = [
//   {
//     name: 'Home', link: '#'
//   },
//   {
//     name: 'About Us', link: '#'
//   },
//   {
//     name: 'Courses', link: '#'
//   },
//   {
//     name: 'Programs', link: '#'
//   },
//   // {
//   //   name: 'Pricing', link: '#'
//   // },

// ]

// const Navbar = () => {
//   return (
//     <nav className='z-20  bg-primarywhite fixed top-0 left-0 right-0 py-4  flex items-center justify-between px-11'>
//       <h1 className='font-quicksand font-bold text-4xl'>Educe <span className='text-primaryblue '>Institution</span></h1>
//       <div className='flex items-center gap-10 '>
//         <ul className='font-mulish flex items-center gap-10 '>
//           {nav.map((item, index) => (
//             <li key={index} className='cursor-pointer hover:text-primaryblue font-semibold '>{item.name}</li>
//           ))}
//         </ul>
//         <button className="text-primarywhite flex items-center  gap-2 bg-primaryblue px-4 py-1.5 rounded-md hover:bg-primaryblue/80   duration-300 "><Headset size={20} /> Contact Us</button>
//       </div>
//     </nav>
//   )
// }

// export default Navbar



import { Headset, Menu, X } from 'lucide-react';
import React, { useState } from 'react';

const nav = [
  { name: 'Home', link: '#home' },
  { name: 'About Us', link: '#about' },
  { name: 'Courses', link: '#courses' },
  { name: 'Reviews', link: '#testimonials' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="z-20 bg-primarywhite fixed top-0 left-0 right-0 py-4 flex items-center justify-between px-6 md:px-11 shadow-md">
      {/* Logo */}
      <h1 className="font-quicksand font-bold text-2xl md:text-4xl">
        Educe <span className="text-primaryblue">Institution</span>
      </h1>

      {/* Hamburger Icon for Small Screens */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-primarydarkblue focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-primarywhite shadow-md transform transition-all duration-300 ease-in-out ${isOpen
          ? 'opacity-100 scale-100'
          : 'opacity-0 scale-95 pointer-events-none'
          } md:static md:w-auto md:flex md:items-center md:gap-10 md:opacity-100 md:scale-100 md:transition-none`}
      >
        <ul className="font-mulish flex flex-col items-start gap-4 px-6 py-4 md:flex-row md:items-center md:gap-10 md:py-0 md:px-0">
          {nav.map((item, index) => (
            <li
              key={index}
              onClick={() => setIsOpen(false)}

              className="cursor-pointer hover:text-primaryblue font-semibold"
            >
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
        <button className="text-primarywhite flex items-center gap-2 bg-primaryblue px-4 py-1.5 rounded-md hover:bg-primaryblue/80 duration-300 ml-5 mb-6" onClick={() => setIsOpen(false)}>
          <a className='flex gap-2 items-center' href="#contact">
            <Headset size={20} /> Contact Us
          </a>
        </button>
      </div>

      {/* Contact Us Button for Medium and Larger Screens */}
      <div className="hidden md:flex items-center gap-10">
        <ul className="font-mulish flex items-center gap-10">
          {nav.map((item, index) => (
            <li
              onClick={() => setIsOpen(false)}
              key={index}
              className="cursor-pointer hover:text-primaryblue font-semibold"
            >
              <a href={item.link}>{item.name}</a>

            </li>
          ))}
        </ul>
        <button className="text-primarywhite flex items-center gap-2 bg-primaryblue px-4 py-1.5 rounded-md hover:bg-primaryblue/80 duration-300">
          <a href="#contact" className='flex items-center gap-2'>
            <Headset size={20} /> Contact Us
          </a>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
