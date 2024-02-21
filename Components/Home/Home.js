import React from 'react'
import Header from '../Header/Header'
import Profile from '../Profile/Profile'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Project from '../Project/Project'
import Footer from '../Footer/Footer'
import Contact from '../Contact/Contact'


function Home() {
  return (
    <div>
      <Header/>
      <Profile/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
