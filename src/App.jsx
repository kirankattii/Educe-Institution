// import React from 'react'
// import Navbar from './components/Navbar'
// import Landing from './components/Landing'
// import { styles } from './components/HandingAnimation'
// import About from './components/About'
// import Courses from './components/Courses'
// import Testimonials from './components/Testimonials'
// import Faq from './components/Faq'
// import Footer from './components/Footer'
// import Contact from './components/Contact'

// const App = () => {
//   return (
//     <div >
//       <style>{styles}</style>
//       <Navbar />
//       <Landing />
//       <About />
//       <Courses />
//       <Testimonials />
//       <Faq />
//       <Contact />
//       <Footer />
//     </div>
//   )
// }

// export default App



import React, { Suspense } from 'react';
import { styles } from './components/HandingAnimation';
const Navbar = React.lazy(() => import('./components/Navbar'));
const Landing = React.lazy(() => import('./components/Landing'));
const About = React.lazy(() => import('./components/About'));
const Courses = React.lazy(() => import('./components/Courses'));
const Testimonials = React.lazy(() => import('./components/Testimonials'));
const Faq = React.lazy(() => import('./components/Faq'));
const Footer = React.lazy(() => import('./components/Footer'));
const Contact = React.lazy(() => import('./components/Contact'));

const App = () => {
  return (
    <div>
      <style>{styles}</style>
      <Suspense fallback={<div className='flex items-center m-auto mt-[50%]  justify-center w-12 h-12 border-4 border-blue-500 border-dotted rounded-full animate-spin'></div>}>
        <Navbar />
        <Landing />
        <About />
        <Courses />
        <Testimonials />
        <Faq />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
