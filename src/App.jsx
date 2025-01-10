import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import { styles } from './components/HandingAnimation'
import About from './components/About'
import Courses from './components/Courses'

const App = () => {
  return (
    <div className="">
      <style>{styles}</style>
      <Navbar />
      <Landing />
      <About />
      <Courses />
    </div>
  )
}

export default App
