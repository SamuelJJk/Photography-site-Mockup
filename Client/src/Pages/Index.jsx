import React from 'react'
import '../Style/Index.css'
import Nav from '../Components/Nav'
import Hero from '../Components/Hero'
import Summary from '../Components/Summary'
import Footer from '../Components/Footer'

function Index() {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Summary/>
      <Footer/>
    </div>
  )
}

export default Index
