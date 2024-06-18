import React from 'react'
import '../Style/Main.css'
import Hero from '../Components/Hero'
import Summary from '../Components/Summary'
import Footer from '../Components/Footer'

function Main() {
  return (
    <div className='index'>
      <Hero/>
      <Summary/>
      <Footer/>
    </div>
  )
}

export default Main
