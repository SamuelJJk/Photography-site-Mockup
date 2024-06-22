import React from 'react'
import '../Style/Main.css'
import Hero from '../Components/Hero'
import Summary from '../Components/Summary'
import Footer from '../Components/Footer'
import FeaturedWork from '../Components/FeaturedWork'
import PhotoDisplay from '../Components/PhotoDisplay'

function Main() {
  return (
    <div className='index'>
      <PhotoDisplay/>
      <Hero/>
      <Summary/>
      <FeaturedWork/>
      <Footer/>
    </div>
  )
}

export default Main
