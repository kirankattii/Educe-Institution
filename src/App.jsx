import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import { styles } from './components/HandingAnimation'
import About from './components/About'
import Courses from './components/Courses'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className="">
      <style>{styles}</style>
      <Navbar />
      <Landing />
      <About />
      <Courses />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
