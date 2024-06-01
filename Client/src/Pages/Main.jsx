import React from 'react'
import '../Style/Main.css'
import Nav from '../Components/Nav'
import Hero from '../Components/Hero'
import Summary from '../Components/Summary'
import Footer from '../Components/Footer'

function Main() {
  return (
    <div className='index'>
      <Nav/>
      <Hero/>
      <Summary/>
      <Footer/>
    </div>
  )
}

export default Main
