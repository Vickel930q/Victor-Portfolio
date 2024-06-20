import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Portfolio from '../Portofoilo/Portfolio'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import SkillsPage from '../Skillp/SkillsPage'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <SkillsPage/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}
